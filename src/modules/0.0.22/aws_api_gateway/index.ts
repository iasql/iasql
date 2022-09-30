import {
  ApiGatewayV2,
  Api as ApiAWS,
  CreateApiCommandInput,
  CreateApiCommandOutput,
  UpdateApiCommandInput,
} from '@aws-sdk/client-apigatewayv2';

import { AWS, crudBuilder2, crudBuilderFormat, paginateBuilder } from '../../../services/aws_macros';
import { Context, Crud2, MapperBase, ModuleBase } from '../../interfaces';
import { Api, Protocol } from './entity';

class ApiMapper extends MapperBase<Api> {
  module: AwsApiGatewayModule;
  entity = Api;
  equals = (a: Api, b: Api) => {
    const res =
      Object.is(a.description, b.description) &&
      Object.is(a.disableExecuteApiEndpoint, b.disableExecuteApiEndpoint) &&
      Object.is(a.protocolType, b.protocolType) &&
      Object.is(a.version, b.version) &&
      Object.is(a.name, b.name) &&
      Object.is(a.region, b.region);
    return res;
  };

  getApi = crudBuilder2<ApiGatewayV2, 'getApi'>('getApi', ApiId => ({ ApiId }));

  getApis = crudBuilderFormat<ApiGatewayV2, 'getApis', ApiAWS[] | undefined>(
    'getApis',
    () => ({}),
    res => res?.Items,
  );

  createApi = crudBuilder2<ApiGatewayV2, 'createApi'>('createApi', input => input);

  deleteApi = crudBuilder2<ApiGatewayV2, 'deleteApi'>('deleteApi', ApiId => ({ ApiId }));

  updateApi = crudBuilder2<ApiGatewayV2, 'updateApi'>('updateApi', input => input);

  cloud = new Crud2<Api>({
    create: async (rs: Api[], ctx: Context) => {
      const out = [];
      for (const r of rs) {
        const client = (await ctx.getAwsClient(r.region)) as AWS;
        // add a default protocol
        if (!r.protocolType) r.protocolType = Protocol.HTTP;

        // if we have an id already, check if exists
        const input: CreateApiCommandInput = {
          Name: r.name,
          Description: r.description,
          DisableExecuteApiEndpoint: r.disableExecuteApiEndpoint,
          ProtocolType: r.protocolType.toString(),
          Version: r.version,
        };
        const result = await this.createApi(client.apiGatewayClient, input);
        if (result) {
          const newApi = this.apiMapper(result, r.region);
          // use the same ID as the one inserted, and set the name as is optionally returned
          if (newApi) {
            newApi.id = r.id;
            newApi.name = r.name;
            await this.module.api.db.update(newApi, ctx);
            out.push(newApi);
          }
        }
      }
      return out;
    },
    read: async (ctx: Context, apiId?: string) => {
      const enabledRegions = (await ctx.getEnabledAwsRegions()) as string[];
      if (apiId) {
        for (const region of enabledRegions) {
          const client = (await ctx.getAwsClient(region)) as AWS;
          const rawApi = await this.getApi(client.apiGatewayClient, apiId);
          if (!rawApi) continue;
          return this.apiMapper(rawApi, region);
        }
      } else {
        const out = [];
        for (const region of enabledRegions) {
          const client = (await ctx.getAwsClient(region)) as AWS;
          const rawApis = (await this.getApis(client.apiGatewayClient)) ?? [];
          for (const i of rawApis) {
            const outApi = this.apiMapper(i, region);
            if (outApi) out.push(outApi);
          }
        }
        return out;
      }
    },
    updateOrReplace: (a: Api, b: Api) => (a.region === b.region ? 'update' : 'replace'),
    update: async (rs: Api[], ctx: Context) => {
      const out: Api[] = [];
      for (const r of rs) {
        const client = (await ctx.getAwsClient(r.region)) as AWS;
        const cloudRecord = ctx?.memo?.cloud?.Api?.[r.apiId ?? ''];
        const isUpdate = Object.is(this.module.api.cloud.updateOrReplace(cloudRecord, r), 'update');
        if (isUpdate) {
          // api id is generated by aws, we cannot modify it
          if (cloudRecord.protocolType !== r.protocolType) {
            // restore
            cloudRecord.id = r.id;
            await this.module.api.db.update(cloudRecord, ctx);
            out.push(cloudRecord);
          } else {
            const input: UpdateApiCommandInput = {
              ApiId: r.apiId,
              Name: r.name,
              Description: r.description,
              DisableExecuteApiEndpoint: r.disableExecuteApiEndpoint,
              Version: r.version,
            };
            const res = await this.updateApi(client.apiGatewayClient, input);
            if (res) {
              const newApi = this.apiMapper(res, r.region);
              if (newApi) {
                newApi.name = r.name;
                newApi.id = r.id;
                // Save the record back into the database to get the new fields updated
                await this.module.api.db.update(newApi, ctx);
                out.push(newApi);
              }
            } else {
              throw new Error('Error updating API');
            }
          }
        } else {
          const newApi: Api | Api[] | undefined = await this.module.api.cloud.create(r, ctx);
          await this.module.api.cloud.delete(cloudRecord, ctx);
          if (newApi && !Array.isArray(newApi)) out.push(newApi);
        }
      }
      return out;
    },
    delete: async (rs: Api[], ctx: Context) => {
      for (const r of rs) {
        const client = (await ctx.getAwsClient(r.region)) as AWS;
        await this.deleteApi(client.apiGatewayClient, r.apiId);
      }
    },
  });

  constructor(module: AwsApiGatewayModule) {
    super();
    this.module = module;
    super.init();
  }

  apiMapper(instance: any, region: string) {
    const r: Api = new Api();
    if (!instance.ApiId || !instance.Name) return undefined;
    r.description = instance.Description;
    r.disableExecuteApiEndpoint = instance.DisableExecuteApiEndpoint;
    r.name = instance.Name;
    r.apiId = instance.ApiId;
    if (instance.ProtocolType) {
      const typedProtocol = instance.ProtocolType as keyof typeof Protocol;
      r.protocolType = Protocol[typedProtocol];
    }
    r.version = instance.Version;
    r.region = region;
    return r;
  }
}

class AwsApiGatewayModule extends ModuleBase {
  api: ApiMapper;

  constructor() {
    super();
    this.api = new ApiMapper(this);
    super.init();
  }
}
export const awsApiGatewayModule = new AwsApiGatewayModule();
