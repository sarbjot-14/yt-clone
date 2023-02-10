import type { NextApiRequest, NextApiResponse } from 'next';
import { dbFindVideo, dbUpdateViews } from '@/common/db-queries';

type Data = {
  name: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  console.log(
    'we have made it into the endpoint for views',
    req.method,
    req.body,
  );
  const { key } = req.query as { key: string };
  switch (req.method) {
    case 'POST':
      break;
    case 'GET':
      const resp: any = await dbFindVideo({ key });
      //console.log('in apij ', resp);
      if (resp != null) {
        res.status(200).send(resp);
      }

      break;
    case 'PUT':
      try {
        console.log('wheel');
        const resp: any = await dbUpdateViews(req.body);
        if (resp?.status == 500) {
          res.status(500).send(resp);
        } else {
          res.status(200).send(resp);
        }
      } catch (error: any) {
        console.error(error);
        res.status(500).end(error.message);
      }
      break;
    case 'DELETE':
      break;
    default:
      res.status(405).end(`${req.method} Not Allowed`);
      break;
  }
}
