import { In, } from 'typeorm'
import { ModifyDBInstanceCommandInput } from '@aws-sdk/client-rds'

import { AWS, } from '../../services/gateways/aws'
import { RDS, } from './entity'
import * as allEntities from './entity'
import { Context, Crud, Mapper, Module, } from '../interfaces'
import { AwsSecurityGroupModule } from '..'
import * as metadata from './module.json'

export const AwsRdsModule: Module = new Module({
  ...metadata,
  provides: {
    entities: allEntities,
    tables: ['rds', 'rds_security_groups',],
    functions: ['create_or_update_rds', 'delete_rds',],
  },
  utils: {
    rdsMapper: async (rds: any, ctx: Context) => {
      const out = new RDS();
      out.allocatedStorage = rds?.AllocatedStorage;
      out.availabilityZone = rds?.AvailabilityZone;
      out.dbInstanceClass = rds?.DBInstanceClass;
      out.dbInstanceIdentifier = rds?.DBInstanceIdentifier;
      out.endpointAddr = rds?.Endpoint?.Address;
      out.endpointHostedZoneId = rds?.Endpoint?.HostedZoneId;
      out.endpointPort = rds?.Endpoint?.Port;
      out.engine = `${rds?.Engine}:${rds?.EngineVersion}`;
      out.masterUsername = rds?.MasterUsername;
      const vpcSecurityGroupIds = rds?.VpcSecurityGroups?.filter((vpcsg: any) => !!vpcsg?.VpcSecurityGroupId).map((vpcsg: any) => vpcsg?.VpcSecurityGroupId);
      out.vpcSecurityGroups = vpcSecurityGroupIds ?
        await AwsSecurityGroupModule.mappers.securityGroup.db.read(ctx, vpcSecurityGroupIds) ??
          await AwsSecurityGroupModule.mappers.securityGroup.cloud.read(ctx, vpcSecurityGroupIds)
        : [];
      out.backupRetentionPeriod = rds?.BackupRetentionPeriod ?? 1;
      return out;
    },
  },
  mappers: {
    rds: new Mapper<RDS>({
      entity: RDS,
      entityPrint: (e: RDS) => ({
        id: e?.id?.toString() ?? '',
        dbInstanceIdentifier: e?.dbInstanceIdentifier ?? '',
        allocatedStorage: e?.allocatedStorage?.toString() ?? '',
        dbInstanceClass: e?.dbInstanceClass ?? '',
        engine: e?.engine ?? '',
        masterUserPassword: e?.masterUserPassword ?? '',
        masterUsername: e?.masterUsername ?? '',
        vpcSecurityGroups: e?.vpcSecurityGroups?.map(sg => sg.groupName ?? '').join(', ') ?? '',
        endpointAddr: e?.endpointAddr ?? '',
        endpointPort: e?.endpointPort?.toString() ?? '',
        endpointHostedZoneId: e?.endpointHostedZoneId ?? '',
        backupRetentionPeriod: e?.backupRetentionPeriod?.toString() ?? '1',
      }),
      equals: (a: RDS, b: RDS) => Object.is(a.engine, b.engine)
        && Object.is(a.dbInstanceClass, b.dbInstanceClass)
        && Object.is(a.availabilityZone, b.availabilityZone)
        && Object.is(a.dbInstanceIdentifier, b.dbInstanceIdentifier)
        && Object.is(a.endpointAddr, b.endpointAddr)
        && Object.is(a.endpointHostedZoneId, b.endpointHostedZoneId)
        && Object.is(a.endpointPort, b.endpointPort)
        && !a.masterUserPassword  // Special case, if master password defined, will update the instance password
        && Object.is(a.masterUsername, b.masterUsername)
        && Object.is(a.vpcSecurityGroups.length, b.vpcSecurityGroups.length)
        && (a.vpcSecurityGroups?.every(asg => !!b.vpcSecurityGroups.find(bsg => Object.is(asg.groupId, bsg.groupId))) ?? false)
        && Object.is(a.allocatedStorage, b.allocatedStorage)
        && Object.is(a.backupRetentionPeriod, b.backupRetentionPeriod),
      source: 'db',
      db: new Crud({
        create: (rds: RDS[], ctx: Context) => ctx.orm.save(RDS, rds),
        read: async (ctx: Context, ids?: string[]) => {
          // TODO: Possible to automate this?
          const relations = ['vpcSecurityGroups'];
          const opts = ids ? {
            where: {
              dbInstanceIdentifier: In(ids),
            },
            relations,
          } : { relations, };
          return await ctx.orm.find(RDS, opts);
        },
        update: async (rds: RDS[], ctx: Context) => { await ctx.orm.save(RDS, rds); },
        delete: async (rds: RDS[], ctx: Context) => { await ctx.orm.remove(RDS, rds); },
      }),
      cloud: new Crud({
        create: async (es: RDS[], ctx: Context) => {
          const client = await ctx.getAwsClient() as AWS;
          return await Promise.all(es.map(async (e) => {
            const securityGroupIds = e.vpcSecurityGroups?.map(sg => {
              if (!sg.groupId) throw new Error('Security group needs to exist')
              return sg.groupId;
            }) ?? []
            const [Engine, EngineVersion] = e.engine.split(':');
            const instanceParams = {
              DBInstanceIdentifier: e.dbInstanceIdentifier,
              DBInstanceClass: e.dbInstanceClass,
              Engine,
              EngineVersion,
              MasterUsername: e.masterUsername,
              MasterUserPassword: e.masterUserPassword,
              AllocatedStorage: e.allocatedStorage,
              VpcSecurityGroupIds: securityGroupIds,
              AvailabilityZone: e.availabilityZone,
              BackupRetentionPeriod: e.backupRetentionPeriod,
            }
            const result = await client.createDBInstance(instanceParams);
            // TODO: Handle if it fails (somehow)
            if (!result?.hasOwnProperty('DBInstanceIdentifier')) { // Failure
              throw new Error('what should we do here?');
            }
            // Re-get the inserted record to get all of the relevant records we care about
            const newObject = await client.getDBInstance(result.DBInstanceIdentifier ?? '');
            // We map this into the same kind of entity as `obj`
            const newEntity = await AwsRdsModule.utils.rdsMapper(newObject, ctx);
            // We attach the original object's ID to this new one, indicating the exact record it is
            // replacing in the database.
            newEntity.id = e.id;
            // Set password as null to avoid infinite loop trying to update the password.
            // Reminder: Password need to be null since when we read RDS instances from AWS this property is not retrieved
            newEntity.masterUserPassword = null;
            // Save the record back into the database to get the new fields updated
            await AwsRdsModule.mappers.rds.db.update(newEntity, ctx);
            return newEntity;
          }));
        },
        read: async (ctx: Context, ids?: string[]) => {
          const client = await ctx.getAwsClient() as AWS;
          const rdses = Array.isArray(ids) ?
            await Promise.all(ids.map(id => client.getDBInstance(id))) :
            (await client.getDBInstances()).DBInstances;
          return await Promise.all(rdses.map(rds => AwsRdsModule.utils.rdsMapper(rds, ctx)));
        },
        updateOrReplace: () => 'update',
        update: async (es: RDS[], ctx: Context) => {
          const client = await ctx.getAwsClient() as AWS;
          return await Promise.all(es.map(async (e) => {
            const cloudRecord = ctx?.memo?.cloud?.RDS?.[e.dbInstanceIdentifier ?? ''];
            let updatedRecord = { ...cloudRecord };
            if (!(Object.is(e.dbInstanceClass, cloudRecord.dbInstanceClass)
              && Object.is(e.engine, cloudRecord.engine)
              && Object.is(e.allocatedStorage, cloudRecord.allocatedStorage)
              && !e.masterUserPassword
              && Object.is(e.vpcSecurityGroups.length, cloudRecord.vpcSecurityGroups.length)
              && (e.vpcSecurityGroups?.every(esg => !!cloudRecord.vpcSecurityGroups.find((csg: any) => Object.is(esg.groupId, csg.groupId))) ?? false))) {
                if (!e.vpcSecurityGroups?.filter(sg => !!sg.groupId).length) {
                  throw new Error('Waiting for security groups');
                }
              const instanceParams: ModifyDBInstanceCommandInput = {
                DBInstanceClass: e.dbInstanceClass,
                EngineVersion: e.engine.split(':')[1],
                DBInstanceIdentifier: e.dbInstanceIdentifier,
                AllocatedStorage: e.allocatedStorage,
                VpcSecurityGroupIds: e.vpcSecurityGroups?.filter(sg => !!sg.groupId).map(sg => sg.groupId!) ?? [],
                BackupRetentionPeriod: e.backupRetentionPeriod,
                ApplyImmediately: true,
              };
              // If a password value has been inserted, we update it.
              if (e.masterUserPassword) {
                instanceParams.MasterUserPassword = e.masterUserPassword;
              }
              const result = await client.updateDBInstance(instanceParams);
              const dbInstance = await client.getDBInstance(result?.DBInstanceIdentifier ?? '');
              updatedRecord = await AwsRdsModule.utils.rdsMapper(dbInstance, ctx);
            }
            // Restore autogenerated values
            updatedRecord.id = e.id;
            // Set password as null to avoid infinite loop trying to update the password.
            // Reminder: Password need to be null since when we read RDS instances from AWS this property is not retrieved
            updatedRecord.masterUserPassword = null;
            await AwsRdsModule.mappers.rds.db.update(updatedRecord, ctx);
            return updatedRecord;
          }));
        },
        delete: async (es: RDS[], ctx: Context) => {
          const client = await ctx.getAwsClient() as AWS;
          await Promise.all(es.map(async (e) => {
            const input = {
              DBInstanceIdentifier: e.dbInstanceIdentifier,
              // TODO: do users will have access to this type of config?
              //        probably initially we should play it safe and do not create a snapshot
              //        and do not delete backups if any?
              SkipFinalSnapshot: true,
              // FinalDBSnapshotIdentifier: undefined,
              // DeleteAutomatedBackups: false,
            };
            return client.deleteDBInstance(input);
          }));
        },
      }),
    }),
  },
}, __dirname);
