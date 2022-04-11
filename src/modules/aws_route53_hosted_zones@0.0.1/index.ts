import { ResourceRecordSet as AwsResourceRecordSet } from '@aws-sdk/client-route-53'
import { AWS, } from '../../services/gateways/aws'
import { Context, Crud, Mapper, Module, } from '../interfaces'
import { HostedZone } from './entity'
import { RecordType, ResourceRecordSet } from './entity/resource_records_set';
import * as metadata from './module.json'

export const AwsRoute53HostedZoneModule: Module = new Module({
  ...metadata,
  utils: {
    hostedZoneMapper: (hz: any, _ctx: Context) => {
      const out = new HostedZone();
      if (!hz?.Id) throw new Error('No HostedZoneId defined');
      out.domainName = hz.Name;
      return out;
    },
    resourceRecordSetMapper: async (rrs: any, ctx: Context) => {
      const out = new ResourceRecordSet();
      if (!(rrs.Name && rrs.Type)) throw new Error('Wrong record from AWS');
      out.name = rrs.Name;
      out.recordType = rrs.Type as RecordType;
      out.parentHostedZone = await AwsRoute53HostedZoneModule.mappers.hostedZone.db.read(ctx, rrs.HostedZoneId) ??
        await AwsRoute53HostedZoneModule.mappers.hostedZone.cloud.read(ctx, rrs.HostedZoneId);
      out.ttl = rrs.TTL;
      out.records = rrs.ResourceRecords?.map((o: { Value: string }) => o.Value).join('\n') ?? '';
    },
  },
  mappers: {
    hostedZone: new Mapper<HostedZone>({
      entity: HostedZone,
      equals: (a: HostedZone, b: HostedZone) => Object.is(a.domainName, b.domainName),
      source: 'db',
      cloud: new Crud({
        create: async (hz: HostedZone[], ctx: Context) => {
          const client = await ctx.getAwsClient() as AWS;
          return await Promise.all(hz.map(async (e) => {
            const hz = await client.createHostedZone(e.domainName);
            if (!hz?.Id) throw new Error('How this happen!?')
            // Re-get the inserted record to get all of the relevant records we care about
            const newObject = await client.getHostedZone(hz?.Id);
            // We map this into the same kind of entity as `obj`
            const newEntity = await AwsRoute53HostedZoneModule.utils.hostedZoneMapper(newObject, ctx);
            // We attach the original object's ID to this new one, indicating the exact record it is
            // replacing in the database.
            newEntity.id = e.id;
            // Save the record back into the database to get the new fields updated
            await AwsRoute53HostedZoneModule.mappers.hostedZone.db.update(newEntity, ctx);
            return newEntity;
          }));
        },
        read: async (ctx: Context, ids?: string[]) => {
          const client = await ctx.getAwsClient() as AWS;
          let hostedZones = [];
          if (Array.isArray(ids)) {
            for (const id of ids) {
              hostedZones.push(await client.getHostedZone(id));
            }
          } else {
            hostedZones = (await client.getHostedZones()) ?? [];
          }
          return await Promise.all(hostedZones.map((hz: any) => AwsRoute53HostedZoneModule.utils.hostedZoneMapper(hz, ctx)));
        },
        updateOrReplace: () => 'replace',
        update: async (es: HostedZone[], ctx: Context) => {
          return await Promise.all(es.map(async (e) => {
            const cloudRecord = ctx?.memo?.cloud?.HostedZone?.[e.hostedZoneId ?? ''];
            // We need to delete the current cloud record and create the new one.
            // The id in database will be the same `e` will keep it.
            const newEntity = await AwsRoute53HostedZoneModule.mappers.cluster.cloud.create(e, ctx);
            await AwsRoute53HostedZoneModule.mappers.cluster.cloud.delete(cloudRecord, ctx);
            return newEntity;
          }));
        },
        delete: async (hz: HostedZone[], ctx: Context) => {
          const client = await ctx.getAwsClient() as AWS;
          await Promise.all(hz.map((e) => client.deleteHostedZone(e.hostedZoneId)));
        },
      }),
    }),
    resourceRecordSet: new Mapper<ResourceRecordSet>({
      entity: ResourceRecordSet,
      equals: (a: ResourceRecordSet, b: ResourceRecordSet) => Object.is(a.name, b.name)
        && Object.is(a.parentHostedZone?.hostedZoneId, b.parentHostedZone?.hostedZoneId)
        && Object.is(a.recordType, b.recordType)
        && Object.is(a.ttl, b.ttl)
        && Object.is(a.records, b.records),
      source: 'db',
      cloud: new Crud({
        create: async (rrs: ResourceRecordSet[], ctx: Context) => {
          const client = await ctx.getAwsClient() as AWS;
          return await Promise.all(rrs.map(async (e) => {
            const resourceRecordSet: AwsResourceRecordSet = {
              Name: e.name,
              Type: e.recordType,
              TTL: e.ttl,
              ResourceRecords: e.records.split('\n').map(r => ({ Value: r }))
            }
            await client.createResourceRecordSet(e.parentHostedZone.hostedZoneId, resourceRecordSet);
            // Re-get the inserted record to get all of the relevant records we care about
            const newResourceRecordSet = await client.getRecord(e.parentHostedZone.hostedZoneId, e.name, e.recordType);
            // We map this into the same kind of entity as `obj`
            const newObject = { ...newResourceRecordSet, HostedZoneId: e.parentHostedZone.hostedZoneId };
            const newEntity = await AwsRoute53HostedZoneModule.utils.resourceRecordSetMapper(newObject, ctx);
            // We attach the original object's ID to this new one, indicating the exact record it is
            // replacing in the database.
            newEntity.id = e.id;
            // Save the record back into the database to get the new fields updated
            await AwsRoute53HostedZoneModule.mappers.resourceRecordSet.db.update(newEntity, ctx);
            return newEntity;
          }));
        },
        read: async (ctx: Context, _ids?: string[]) => {
          // TODO: How to identify a unique record? Is it necessary?
          const client = await ctx.getAwsClient() as AWS;
          const hostedZones = ctx.memo?.cloud?.HostedZone ?
            Object.values(ctx.memo?.cloud?.HostedZone) :
            await AwsRoute53HostedZoneModule.mappers.hostedZone.cloud.read(ctx);
          const records: any = [];
          for (const hz of hostedZones) {
            try {
              const hzRecors = await client.getRecords(hz.hostedZoneId);
              records.push(...hzRecors.map(r => ({ ...r, HostedZoneId: hz.hostedZoneId })));
            } catch (_) {
              // We try to retrieve the policy for the repository, but if none it is not an error
              continue;
            }
          }
          return await Promise.all(records.map((r: any) => {
            return AwsRoute53HostedZoneModule.utils.resourceRecordSetMapper(r, ctx);
          }));
        },
        updateOrReplace: () => 'update',
        update: async (es: ResourceRecordSet[], ctx: Context) => {
          return await Promise.all(es.map(async (e) => {
            const cloudRecord = ctx?.memo?.cloud?.ResourceRecordSet;
            console.log('++++++++ RESOURCE RECORD SET +++++++')
            console.dir(cloudRecord);
            throw new Error('Update error')
            // We need to delete the current cloud record and create the new one.
            // The id in database will be the same `e` will keep it.
            const newEntity = await AwsRoute53HostedZoneModule.mappers.cluster.cloud.create(e, ctx);
            await AwsRoute53HostedZoneModule.mappers.cluster.cloud.delete(cloudRecord, ctx);
            return newEntity;
          }));
        },
        delete: async (rrs: ResourceRecordSet[], ctx: Context) => {
          const client = await ctx.getAwsClient() as AWS;
          await Promise.all(rrs.map((e) => {
            const resourceRecordSet: AwsResourceRecordSet = {
              Name: e.name,
              Type: e.recordType,
              TTL: e.ttl,
              ResourceRecords: e.records.split('\n').map(r => ({ Value: r }))
            };
            return client.deleteResourceRecordSet(e.parentHostedZone.hostedZoneId, resourceRecordSet);
          }));
        },
      }),
    }),
  },
}, __dirname);
