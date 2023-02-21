import { EC2, InstanceLifecycle } from '@aws-sdk/client-ec2';
import { Volume as AWSVolume } from '@aws-sdk/client-ec2';
import { createWaiter, WaiterState } from '@aws-sdk/util-waiter';

import { AwsEc2Module } from '..';
import { AWS, crudBuilder2 } from '../../../services/aws_macros';
import { Context, Crud2, MapperBase } from '../../interfaces';
import { GeneralPurposeVolume, Instance, InstanceBlockDeviceMapping, VolumeState } from '../entity';

export class InstanceBlockDeviceMappingMapper extends MapperBase<InstanceBlockDeviceMapping> {
  module: AwsEc2Module;
  entity = InstanceBlockDeviceMapping;
  equals = (a: InstanceBlockDeviceMapping, b: InstanceBlockDeviceMapping) => {
    return Object.is(a.deviceName, b.deviceName);
  };

  attachVolumeInternal = crudBuilder2<EC2, 'attachVolume'>(
    'attachVolume',
    (VolumeId, InstanceId, Device) => ({
      VolumeId,
      InstanceId,
      Device,
    }),
  );

  waitUntilAvailable(client: EC2, volumeId: string) {
    return this.module.generalPurposeVolume.volumeWaiter(client, volumeId, (vol: AWSVolume | undefined) => {
      // If state is not 'in-use' retry
      if (!Object.is(vol?.State, VolumeState.AVAILABLE)) {
        return { state: WaiterState.RETRY };
      }
      return { state: WaiterState.SUCCESS };
    });
  }

  detachVolumeInternal = crudBuilder2<EC2, 'detachVolume'>('detachVolume', VolumeId => ({ VolumeId }));

  detachVolume = async (client: EC2, VolumeId: string) => {
    await this.detachVolumeInternal(client, VolumeId);
    await this.waitUntilAvailable(client, VolumeId);
  };

  waitUntilInUse(client: EC2, volumeId: string) {
    return this.module.generalPurposeVolume.volumeWaiter(client, volumeId, (vol: AWSVolume | undefined) => {
      // If state is not 'in-use' retry
      if (!Object.is(vol?.State, VolumeState.IN_USE)) {
        return { state: WaiterState.RETRY };
      }
      return { state: WaiterState.SUCCESS };
    });
  }

  attachVolume = async (client: EC2, VolumeId: string, InstanceId: string, Device: string) => {
    const result = await this.attachVolumeInternal(client, VolumeId, InstanceId, Device);
    if (result) await this.waitUntilInUse(client, VolumeId);
    else return false;
    return true;
  };

  cloud: Crud2<InstanceBlockDeviceMapping> = new Crud2({
    create: async (es: InstanceBlockDeviceMapping[], ctx: Context) => {
      const out: InstanceBlockDeviceMapping[] = [];
      for (const e of es) {
        // read instance details
        const instance: Instance = await ctx.orm.findOne(Instance, {
          id: e.instanceId,
        });
        if (instance.region != e.region) throw new Error('Cannot create a mapping between different regions');

        // if instance is not created we are in the first step, no need to create anything
        if (!instance?.instanceId) continue;
        const client = (await ctx.getAwsClient(e.region)) as AWS;

        // read volume details
        if (!e.volumeId) throw new Error('Cannot attach empty volumes to an instance already created');
        const volume: GeneralPurposeVolume = await ctx.orm.findOne(GeneralPurposeVolume, {
          id: e.volumeId,
        });
        if (!volume.volumeId) throw new Error('Tried to attach an unexisting volume');
        if (volume.state == VolumeState.IN_USE)
          throw new Error('Cannot attach volumes that are already in use');
        if (volume.region != e.region) throw new Error('Cannot create a mapping between different regions');

        // if it is a volume for an existing instance we need to attach it
        const result = await this.attachVolume(
          client.ec2client,
          volume.volumeId,
          instance.instanceId,
          e.deviceName,
        );

        // add missing fields
        e.cloudInstanceId = instance.instanceId;
        e.cloudVolumeId = volume.volumeId;
        if (result) out.push(e);
      }
      console.log(out);
      return out;
    },
    read: async (ctx: Context, id?: string) => {
      if (id) {
        // decompose the id
        const { instanceId, volumeId, region } = this.idFields(id);
        const client = (await ctx.getAwsClient(region)) as AWS;

        // read the instance mapping
        const mapping = await this.module.instance.getInstanceBlockDeviceMapping(
          client.ec2client,
          instanceId,
        );
        for (const map of mapping ?? []) {
          if (map.DeviceName && map.Ebs?.VolumeId == volumeId) {
            const res: InstanceBlockDeviceMapping = {
              deviceName: map.DeviceName,
              cloudInstanceId: instanceId,
              cloudVolumeId: volumeId,
              region: region,
            };
            return res;
          }
        }
      } else {
        const out: InstanceBlockDeviceMapping[] = [];
        const enabledRegions = (await ctx.getEnabledAwsRegions()) as string[];
        await Promise.all(
          enabledRegions.map(async region => {
            const client = (await ctx.getAwsClient(region)) as AWS;
            const rawInstances = (await this.module.instance.getInstances(client.ec2client)) ?? [];
            for (const i of rawInstances) {
              // exclude spot instances and terminating ones
              if (i.InstanceLifecycle === InstanceLifecycle.SPOT) continue;
              if (i.State?.Name === 'terminated' || i.State?.Name === 'shutting-down') continue;

              // check instance block device mappings
              const mapping = await this.module.instance.getInstanceBlockDeviceMapping(
                client.ec2client,
                i.InstanceId,
              );
              for (const map of mapping ?? []) {
                if (map.DeviceName && map.Ebs?.VolumeId) {
                  const res: InstanceBlockDeviceMapping = {
                    deviceName: map.DeviceName,
                    cloudInstanceId: i.instanceId,
                    cloudVolumeId: map.Ebs.VolumeId,
                    region: region,
                  };
                }
              }
            }
          }),
        );
        return out;
      }
    },
    update: async (es: InstanceBlockDeviceMapping[], ctx: Context) => {
      const out: InstanceBlockDeviceMapping[] = [];
      for (const e of es) {
        // the only case for update is to change the device name, we will need to delete and recreate
        await this.module.instanceBlockDeviceMapping.cloud.delete(e, ctx);
        await this.module.instanceBlockDeviceMapping.cloud.create(e, ctx);
      }
      return out;
    },
    delete: async (es: InstanceBlockDeviceMapping[], ctx: Context) => {
      for (const e of es) {
        const client = (await ctx.getAwsClient(e.region)) as AWS;

        // if no volume is attached, no need to do anything
        if (!e.cloudVolumeId) continue;

        // we need to detach the volume
        try {
          await this.detachVolume(client.ec2client, e.cloudVolumeId ?? '');
        } catch (_) {}
      }
    },
  });

  constructor(module: AwsEc2Module) {
    super();
    this.module = module;
    super.init();
  }
}
