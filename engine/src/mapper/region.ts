import { Region as RegionAWS, } from '@aws-sdk/client-ec2'

import { AWS, } from '../services/gateways/aws'
import { EntityMapper, } from './entity'
import { IndexedAWS, } from '../services/indexed-aws'
import { Region, } from '../entity/region'

export const RegionMapper = new EntityMapper(Region, {
  name: (region: RegionAWS) => region?.RegionName,
  endpoint: (region: RegionAWS) => region?.Endpoint,
  optInStatus: (region: RegionAWS) => region?.OptInStatus,
}, {
  readAWS: async (awsClient: AWS, indexes: IndexedAWS) => {
    const t1 = Date.now();
    const regions = (await awsClient.getRegions())?.Regions ?? [];
    indexes.setAll(Region, regions, 'RegionName');
    const t2 = Date.now();
    console.log(`Regions set in ${t2 - t1}ms`);
  },
  createAWS: async (_obj: any, _awsClient: AWS, _indexes: IndexedAWS) => { throw new Error('tbd') },
  updateAWS: async (_obj: any, _awsClient: AWS, _indexes: IndexedAWS) => { throw new Error('tbd') },
  deleteAWS: async (_obj: any, _awsClient: AWS, _indexes: IndexedAWS) => { throw new Error('tbd') },
})
