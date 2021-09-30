import { ProcessorInfo as ProcessorInfoAWS } from '@aws-sdk/client-ec2'

import { IndexedAWS, } from '../services/indexed-aws'
import { EntityMapper, } from './entity';
import { CPUArchitectureMapper } from './cpu_architecture';
import { ProcessorInfo } from '../entity/processor_info';
import { AWS } from '../services/gateways/aws';

export const ProcessorInfoMapper = new EntityMapper(ProcessorInfo, {
  supportedArchitectures: (processorInfo: ProcessorInfoAWS, indexes: IndexedAWS) =>
    processorInfo.SupportedArchitectures && processorInfo.SupportedArchitectures.length ?
      processorInfo.SupportedArchitectures.map(
        cpuArch => CPUArchitectureMapper.fromAWS(cpuArch, indexes)
      ) :
      [],
  sustainedClockSpeedInGHz: (processorInfo: ProcessorInfoAWS, _indexes: IndexedAWS) => processorInfo?.SustainedClockSpeedInGhz,
}, {
  readAWS: async (_awsClient: AWS, _indexes: IndexedAWS) => { return },
  createAWS: async (_obj: any, _indexes: IndexedAWS) => { throw new Error('tbd') },
  updateAWS: async (_obj: any, _indexes: IndexedAWS) => { throw new Error('tbd') },
  deleteAWS: async (_obj: any, _indexes: IndexedAWS) => { throw new Error('tbd') },
})
