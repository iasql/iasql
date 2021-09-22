import * as express from 'express'

import config from '../config'
import { RegionMapper } from '../mapper/region'
import { AWS } from '../services/gateways/aws'

const aws = express.Router();

aws.get('/regions', async (req, res) => {
  try {
    const awsClient = new AWS({ region: config.region ?? 'eu-west-1', credentials: { accessKeyId: config.accessKeyId ?? '', secretAccessKey: config.secretAccessKey ?? '' } })
    const awsRegions = await awsClient.getRegions()
    await RegionMapper.fromAWS(awsRegions?.Regions ?? [])
    res.end('ok');
  } catch (e: any) {
    console.log(e)
    res.end(`Faiure getting regions from AWS. Error: ${e}`)
  }
});

export { aws };
