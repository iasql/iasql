import _ from 'lodash';

import { EC2 } from '@aws-sdk/client-ec2';
import { Route as AwsRoute } from '@aws-sdk/client-ec2/dist-types/models/models_1';

import { AWS, crudBuilder2 } from '../../../services/aws_macros';
import { Context, Crud2, IdFields, MapperBase } from '../../interfaces';
import { Route, RouteTable } from '../entity';
import { AwsVpcModule } from '../index';

import logger from '../../../services/logger';

export class RouteMapper extends MapperBase<Route> {
  module: AwsVpcModule;
  entity = Route;
  entityId = (e: Route) => `${e.routeTable.routeTableId ?? e.routeTable.id}|${e.destination}`;
  idFields = (id: string) => {
    const [routeTableId, destination] = id.split('|');
    return { routeTableId, destination };
  };
  generateId = (fields: IdFields) => {
    const requiredFields = ['routeTableId', 'destination'];
    if (
      Object.keys(fields).length !== requiredFields.length &&
      !Object.keys(fields).every(fk => requiredFields.includes(fk))
    ) {
      throw new Error(`Id generation error. Valid fields to generate id are: ${requiredFields.join(', ')}`);
    }
    return `${fields.routeTableId}|${fields.destination}`;
  };
  equals = (a: Route, b: Route) => {
    return this.eqRoute(a, b);
  };
  cidrIPv4Pattern = new RegExp(
    '^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?).){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)/(3[0-2]|[12][0-9]|[1-9])$',
  );
  cidrIPv6Pattern = new RegExp(
    '^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:))/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$',
  );
  prefixedListPattern = new RegExp('^pl-[wd]+$');

  eqRoute(a: Route, b: Route) {
    return _.isEqual(
      _.omit(a, ['id', 'routeTable', 'destination']),
      _.omit(b, ['id', 'routeTable', 'destination']),
    );
  }

  createRoute = crudBuilder2<EC2, 'createRoute'>('createRoute', (r: Route) => ({
    RouteTableId: r.routeTable.routeTableId,
    DestinationCidrBlock: this.cidrIPv4Pattern.test(r.destination) ? r.destination : undefined,
    DestinationIpv6CidrBlock: this.cidrIPv6Pattern.test(r.destination) ? r.destination : undefined,
    DestinationPrefixListId: this.prefixedListPattern.test(r.destination) ? r.destination : undefined,
    EgressOnlyInternetGatewayId: r.egressOnlyInternetGatewayId,
    GatewayId: r.gatewayId,
    InstanceId: r.instanceId,
    NatGatewayId: r.natGatewayId,
    TransitGatewayId: r.transitGatewayId,
    LocalGatewayId: r.localGatewayId,
    CarrierGatewayId: r.carrierGatewayId,
    NetworkInterfaceId: r.networkInterfaceId,
    VpcPeeringConnectionId: r.vpcPeeringConnectionId,
    CoreNetworkArn: r.coreNetworkArn,
  }));

  deleteRoute = crudBuilder2<EC2, 'deleteRoute'>('deleteRoute', (r: Route) => ({
    DestinationCidrBlock: this.cidrIPv4Pattern.test(r.destination) ? r.destination : undefined,
    DestinationIpv6CidrBlock: this.cidrIPv6Pattern.test(r.destination) ? r.destination : undefined,
    DestinationPrefixListId: this.prefixedListPattern.test(r.destination) ? r.destination : undefined,
    RouteTableId: r.routeTable.routeTableId,
  }));

  routeMapper(route: AwsRoute, routeTable: RouteTable) {
    const out = new Route();
    if (
      !routeTable ||
      (!route.DestinationCidrBlock && !route.DestinationIpv6CidrBlock && !route.DestinationPrefixListId)
    ) {
      return undefined;
    }
    out.routeTable = routeTable;
    out.destination =
      route.DestinationCidrBlock ?? route.DestinationIpv6CidrBlock ?? route.DestinationPrefixListId ?? '';
    out.egressOnlyInternetGatewayId = route.EgressOnlyInternetGatewayId;
    out.gatewayId = route.GatewayId;
    out.instanceId = route.InstanceId;
    out.instanceOwnerId = route.InstanceOwnerId;
    out.natGatewayId = route.NatGatewayId;
    out.transitGatewayId = route.TransitGatewayId;
    out.localGatewayId = route.LocalGatewayId;
    out.carrierGatewayId = route.CarrierGatewayId;
    out.networkInterfaceId = route.NetworkInterfaceId;
    out.vpcPeeringConnectionId = route.VpcPeeringConnectionId;
    out.coreNetworkArn = route.CoreNetworkArn;
    return out;
  }

  cloud: Crud2<Route> = new Crud2({
    create: async (es: Route[], ctx: Context) => {
      const out: Route[] = [];
      for (const e of es) {
        const client = (await ctx.getAwsClient(e.routeTable.region)) as AWS;
        if (e.gatewayId === 'local') continue; // created by AWS, can't be created by the user
        await this.createRoute(client.ec2client, e);
        out.push(e);
      }
      return out;
    },
    read: async (ctx: Context, id?: string) => {
      if (!!id) {
        const { routeTableId, destination } = this.idFields(id);
        const routeTable: RouteTable = ctx.memo?.cloud?.RouteTable[routeTableId]
          ? ctx.memo?.cloud?.RouteTable[routeTableId]
          : await this.module.routeTable.cloud.read(ctx, routeTableId);
        if (!routeTable) throw Error('RouteTable need to be loaded first');
        const rawRoute = routeTable.routes.find(r =>
          [r.DestinationCidrBlock, r.DestinationIpv6CidrBlock, r.DestinationPrefixListId].includes(
            destination,
          ),
        );
        if (!rawRoute) return;
        return await this.routeMapper(rawRoute, routeTable);
      } else {
        const out: Route[] = [];
        const routeTables: RouteTable[] = ctx.memo?.cloud?.RouteTable
          ? Object.values(ctx.memo?.cloud?.RouteTable)
          : await this.module.routeTable.cloud.read(ctx);
        for (const rt of routeTables) {
          if (!rt) continue;
          const routes: (Route | undefined)[] =
            rt.routes?.map(r => this.routeMapper(r, rt)).filter(r => !!r) ?? [];
          out.push(...(routes as Route[]));
        }
        return out;
      }
    },
    updateOrReplace: (_prev: Route, _next: Route) => 'replace',
    update: async (es: Route[], ctx: Context) => {
      const out = [];
      for (const e of es) {
        const cloudRecord: Route = ctx?.memo?.cloud?.RouteTable?.[this.entityId(e)];
        const client = (await ctx.getAwsClient(e.routeTable.region)) as AWS;
        // default route, can't be modified by the user
        if (cloudRecord.gatewayId === 'local') {
          cloudRecord.id = e.id;
          this.module.route.db.update(cloudRecord, ctx);
          out.push(cloudRecord);
          continue;
        }
        // delete and create route
        await this.deleteRoute(client.ec2client, cloudRecord);
        await this.createRoute(client.ec2client, e);
        out.push(e);
      }
      return out;
    },
    delete: async (es: Route[], ctx: Context) => {
      for (const e of es) {
        if (e.gatewayId === 'local') return; // created by AWS, can't be modified by the user
        const client = (await ctx.getAwsClient(e.routeTable.region)) as AWS;
        try {
          await this.deleteRoute(client.ec2client, e);
        } catch (err) {
          logger.warn(`+-+ Error deleting route ${JSON.stringify(err)}`);
          throw err;
        }
      }
      // await Promise.all(
      //   es.map(async e => {
      //     if (e.gatewayId === 'local') return; // created by AWS, can't be modified by the user
      //     const client = (await ctx.getAwsClient(e.routeTable.region)) as AWS;
      //     try {
      //       await this.deleteRoute(client.ec2client, e);
      //     } catch (err) {
      //       console.log(`+-+ Error deleting route ${JSON.stringify(err)}`);
      //       throw err;
      //     }
      //   }),
      // );
    },
  });

  db = new Crud2<Route>({
    create: async (es: Route[], ctx: Context) => {
      for (const e of es) {
        if (!e.routeTable?.id) {
          const routeTable = await this.module.routeTable.db.read(
            ctx,
            this.module.routeTable.generateId({
              routeTableId: e.routeTable.routeTableId ?? '',
              region: e.routeTable.region,
            }),
          );
          e.routeTable.id = routeTable?.id;
        }
        if (!e.routeTable?.id) throw new Error('RouteTable need to be loaded first');
      }
      return await ctx.orm.save(Route, es);
    },
    update: (es: Route[], ctx: Context) => ctx.orm.save(Route, es),
    delete: (es: Route[], ctx: Context) => ctx.orm.remove(Route, es),
    read: async (ctx: Context, id?: string) => {
      const { routeTableId, destination } = id
        ? this.idFields(id)
        : { routeTableId: undefined, destination: undefined };
      const opts =
        routeTableId && destination
          ? {
              relations: ['routeTable'],
              where: {
                destination,
                routeTable: {
                  routeTableId,
                },
              },
            }
          : {};
      return await ctx.orm.find(Route, opts);
    },
  });

  constructor(module: AwsVpcModule) {
    super();
    this.module = module;
    super.init();
  }
}
