import type { NextApiRequest, NextApiResponse } from 'next';
import { dbCreateVideo } from '@/common/db-queries';

type Data = {
  done: boolean;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  switch (req.method) {
    case 'POST':
      try {
        const resp: any = await dbCreateVideo(req.body);
        if (resp?.status == 500) {
          res.status(500).send(resp);
        } else {
          res.status(200).send({ done: true });
        }
      } catch (error: any) {
        console.error(error);
        res.status(500).end(error.message);
      }
      break;
    case 'GET':
      break;
    case 'PUT':
      break;
    case 'DELETE':
      break;
  }
}
