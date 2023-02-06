//import { PrismaClient, Prisma } from '@prisma/client';
import { prisma } from '../prisma/client';

export const dbFindUser = async ({ id }: { id: string }) => {
  const resp: any = await prisma.user.findFirst({
    where: {
      id: {
        equals: parseInt(id),
      },
    },
  });
  return resp;
};
