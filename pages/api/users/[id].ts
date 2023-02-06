import type { NextApiRequest, NextApiResponse } from 'next';
import { dbFindUser } from '@/common/db-queries';

type Data = {
  name: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  const { id } = req.query as { id: string };
  switch (req.method) {
    case 'POST':
      break;
    case 'GET':
      const resp: any = await dbFindUser({ id });
      console.log('in apij ', resp);
      if (resp != null) {
        res.status(200).send(resp);
      }

      break;
    case 'PUT':
      break;
    case 'DELETE':
      break;
    default:
      res.status(405).end(`${req.method} Not Allowed`);
      break;
  }
}
