import { Image, } from '@aws-sdk/client-ec2'

import { AMI, } from '../entity/ami';
import { AWS, } from '../services/gateways/aws'
import { BootModeMapper, } from './boot_mode';
import { CPUArchitectureMapper, } from './cpu_architecture';
import { EBSBlockDeviceMappingMapper, } from './ebs_block_device_mapping';
import { EntityMapper, } from './entity';
import * as Entities from '../entity'; // TODO: Is there a way to avoid this double import?
import { IndexedAWS, } from '../services/indexed-aws'
import { ProductCodeMapper, } from './product_code';
import { StateReasonMapper, } from './state_reason';
import { TagMapper, } from './tag';

export const AMIMapper = new EntityMapper(AMI, {
  cpuArchitecture: (ami: Image, indexes: IndexedAWS) => ami?.Architecture ? CPUArchitectureMapper.fromAWS(
    ami?.Architecture, indexes
  ) : null,
  creationDate: (ami: Image, _indexes: IndexedAWS) => ami?.CreationDate ? ami.CreationDate : null,
  imageId: (ami: Image, _indexes: IndexedAWS) => ami?.ImageId,
  imageLocation: (ami: Image, _indexes: IndexedAWS) => ami?.ImageLocation,
  imageType: (ami: Image, _indexes: IndexedAWS) => ami?.ImageType,
  public: (ami: Image, _indexes: IndexedAWS) => ami?.Public,
  kernelId: (ami: Image, _indexes: IndexedAWS) => ami?.KernelId,
  ownerId: (ami: Image, _indexes: IndexedAWS) => ami?.OwnerId,
  platform: (ami: Image, _indexes: IndexedAWS) => ami?.Platform,
  platformDetails: (ami: Image, _indexes: IndexedAWS) => ami?.PlatformDetails,
  usageOperation: (ami: Image, _indexes: IndexedAWS) => ami?.UsageOperation,
  productCodes: (ami: Image, indexes: IndexedAWS) =>
    ami?.ProductCodes?.length ?
      ami?.ProductCodes?.map(pc => ProductCodeMapper.fromAWS(pc, indexes)) :
      [],
  ramdiskId: (ami: Image, _indexes: IndexedAWS) => ami?.RamdiskId,
  state: (ami: Image, _indexes: IndexedAWS) => ami?.State,
  blockDeviceMappings: (ami: Image, indexes: IndexedAWS) =>
    ami?.BlockDeviceMappings?.length ?
      ami.BlockDeviceMappings.map(bdm => EBSBlockDeviceMappingMapper.fromAWS(bdm, indexes)) :
      [],
  description: (ami: Image, _indexes: IndexedAWS) => ami?.Description,
  enaSupport: (ami: Image, _indexes: IndexedAWS) => ami?.EnaSupport,
  hypervisor: (ami: Image, _indexes: IndexedAWS) => ami?.Hypervisor,
  imageOwnerAlias: (ami: Image, _indexes: IndexedAWS) => ami?.ImageOwnerAlias,
  name: (ami: Image, _indexes: IndexedAWS) => ami?.Name,
  rootDeviceName: (ami: Image, _indexes: IndexedAWS) => ami?.RootDeviceName,
  rootDeviceType: (ami: Image, _indexes: IndexedAWS) => ami?.RootDeviceType,
  sirovNetSupport: (ami: Image, _indexes: IndexedAWS) => ami?.SriovNetSupport,
  stateReason: (ami: Image, indexes: IndexedAWS) => ami?.StateReason ?
    StateReasonMapper.fromAWS(ami?.StateReason, indexes) :
    null,
  bootMode: (ami: Image, indexes: IndexedAWS) => ami?.BootMode ?
    BootModeMapper.fromAWS(ami?.BootMode, indexes) :
    null,
  deprecationTime: (ami: Image, _indexes: IndexedAWS) => ami?.DeprecationTime ?
    ami.DeprecationTime :
    null,
  tags: (ami: Image, indexes: IndexedAWS) => ami?.Tags?.length ?
    ami.Tags.map(tag => TagMapper.fromAWS(tag, indexes)) :
    [],
}, {
  readAWS: async (awsClient: AWS, indexes: IndexedAWS) => {
    const t1 = Date.now();
    const amis = (await awsClient.getAMIs())?.Images ?? [];
    indexes.setAll(AMI, amis, 'ImageId');
    const t2 = Date.now();
    console.log(`AMIs set in ${t2 - t1}ms`);
    // Set aux AMI indexes, too
    for (const ami of amis) {
      if (ami.Architecture) {
        indexes.set(Entities.CPUArchitecture, ami.Architecture, ami.Architecture);
      }
      if (ami.ProductCodes && ami.ProductCodes.length) {
        for (const pc of ami.ProductCodes) {
          if (pc.ProductCodeId) {
            indexes.set(Entities.ProductCode, pc.ProductCodeId, pc);
          } else {
            throw Error('productCodes is this possible?');
          }
        }
      }
      if (ami.StateReason) {
        if (ami.StateReason.Code) {
          indexes.set(Entities.StateReason, ami.StateReason.Code, ami.StateReason);
        } else {
          throw Error('stateReason is this possible?')
        }
      }
      if (ami.BootMode) {
        indexes.set(Entities.BootMode, ami.BootMode, ami.BootMode);
      }
    }
    const t3 = Date.now();
    console.log(`AMI sub entities set in ${t3 - t2}ms`);
  },
  createAWS: async (_obj: any, _indexes: IndexedAWS) => { throw new Error('tbd') },
  updateAWS: async (_obj: any, _indexes: IndexedAWS) => { throw new Error('tbd') },
  deleteAWS: async (_obj: any, _indexes: IndexedAWS) => { throw new Error('tbd') },
})
