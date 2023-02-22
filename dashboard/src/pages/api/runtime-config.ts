import { NextApiResponse } from 'next';

const handler = ({} = {}, res: NextApiResponse) => {
  res.status(200).json({ uid: process.env.IASQL_UID ?? 'nouid', telemetry: process.env.IASQL_TELEMETRY });
};

export default handler;
