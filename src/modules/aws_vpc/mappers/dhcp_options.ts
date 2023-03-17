import {
  CreateDhcpOptionsCommandInput,
  DhcpOptions as AWSDhcpOptions,
  EC2,
  paginateDescribeDhcpOptions,
  Tag,
} from '@aws-sdk/client-ec2';

import { AwsVpcModule } from '..';
import { AWS, crudBuilder, crudBuilderFormat, paginateBuilder } from '../../../services/aws_macros';
import { Context, Crud, MapperBase } from '../../interfaces';
import { DhcpOptions } from '../entity/dhcp_options';
import { eqTags } from './tags';

export class DHCPOptionsMapper extends MapperBase<DhcpOptions> {
  module: AwsVpcModule;
  entity = DhcpOptions;
  equals = (a: DhcpOptions, b: DhcpOptions) =>
    Object.is(a.dhcpConfigurations?.length, b.dhcpConfigurations?.length) &&
    !!a.dhcpConfigurations?.every(art => !!b.dhcpConfigurations?.find(brt => Object.is(art, brt))) &&
    Object.is(a.dhcpConfigurations, b.dhcpConfigurations) &&
    eqTags(a.tags, b.tags);

  async dhcpOptionsMapper(e: AWSDhcpOptions, region: string, ctx: Context) {
    if (!e.DhcpOptionsId) return undefined;
    const out = new DhcpOptions();
    out.dhcpOptionsId = e.DhcpOptionsId;
    out.dhcpConfigurations = e.DhcpConfigurations as any;

    if (e.Tags?.length) {
      const tags: { [key: string]: string } = {};
      e.Tags.filter((t: any) => !!t.Key && !!t.Value).forEach((t: any) => {
        tags[t.Key as string] = t.Value as string;
      });
      out.tags = tags;
    }
    out.region = region;
    return out;
  }

  createDhcpOptions = crudBuilderFormat<EC2, 'createDhcpOptions', AWSDhcpOptions | undefined>(
    'createDhcpOptions',
    input => input,
    res => res?.DhcpOptions,
  );

  getDhcpOptions = crudBuilderFormat<EC2, 'describeDhcpOptions', AWSDhcpOptions | undefined>(
    'describeDhcpOptions',
    dhcpOptionsId => ({ DhcpOptionsIds: [dhcpOptionsId] }),
    res => res?.DhcpOptions?.pop(),
  );

  getAllDhcpOptions = paginateBuilder<EC2>(paginateDescribeDhcpOptions, 'DhcpOptions', undefined, undefined);

  deleteDhcpOptions = crudBuilder<EC2, 'deleteDhcpOptions'>('deleteDhcpOptions', dhcpOptionsId => ({
    DhcpOptionsId: dhcpOptionsId,
  }));

  cloud: Crud<DhcpOptions> = new Crud({
    create: async (es: DhcpOptions[], ctx: Context) => {
      const out = [];
      for (const e of es) {
        const client = (await ctx.getAwsClient(e.region)) as AWS;
        const input: CreateDhcpOptionsCommandInput = {
          DhcpConfigurations: e.dhcpConfigurations,
        };
        if (e.tags && Object.keys(e.tags).length) {
          const tags: Tag[] = Object.keys(e.tags).map((k: string) => {
            return {
              Key: k,
              Value: e.tags![k],
            };
          });
          input.TagSpecifications = [
            {
              ResourceType: 'dhcp-options',
              Tags: tags,
            },
          ];
        }
        const res = await this.createDhcpOptions(client.ec2client, input);

        // read value again to get possible modified fields
        if (res?.DhcpOptionsId) {
          const rawOptions = await this.getDhcpOptions(client.ec2client, res?.DhcpOptionsId);
          if (!rawOptions) continue;
          const newOptions = await this.dhcpOptionsMapper(rawOptions, e.region, ctx);
          if (!newOptions) continue;

          newOptions.id = e.id;
          await this.module.dhcpOptions.db.update(newOptions, ctx);
          out.push(newOptions);
        }
      }
      return out;
    },
    read: async (ctx: Context, id?: string) => {
      if (!!id) {
        const { dhcpOptionsId, region } = this.idFields(id);
        const client = (await ctx.getAwsClient(region)) as AWS;
        const rawOptions = await this.getDhcpOptions(client.ec2client, dhcpOptionsId);
        if (!rawOptions) return;
        return await this.dhcpOptionsMapper(rawOptions, region, ctx);
      } else {
        const out: DhcpOptions[] = [];
        const enabledRegions = (await ctx.getEnabledAwsRegions()) as string[];
        await Promise.all(
          enabledRegions.map(async region => {
            const client = (await ctx.getAwsClient(region)) as AWS;
            for (const eg of await this.getAllDhcpOptions(client.ec2client)) {
              const outEg = await this.dhcpOptionsMapper(eg, region, ctx);
              if (outEg) out.push(outEg);
            }
          }),
        );
        return out;
      }
    },
    update: async (es: DhcpOptions[], ctx: Context) => {
      const out = [];
      for (const e of es) {
        // updates are not allowed, we just restore the record
        const client = (await ctx.getAwsClient(e.region)) as AWS;
        const cloudRecord = ctx?.memo?.cloud?.DhcpOptions?.[this.entityId(e)];
        cloudRecord.id = e.id;
        await this.module.endpointGateway.db.update(cloudRecord, ctx);
        out.push(cloudRecord);
      }
      return out;
    },
    delete: async (es: DhcpOptions[], ctx: Context) => {
      for (const e of es) {
        const client = (await ctx.getAwsClient(e.region)) as AWS;
        await this.deleteDhcpOptions(client.ec2client, e.dhcpOptionsId ?? '');
      }
    },
  });

  constructor(module: AwsVpcModule) {
    super();
    this.module = module;
    super.init();
  }
}