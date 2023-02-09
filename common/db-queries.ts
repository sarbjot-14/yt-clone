//import { PrismaClient, Prisma } from '@prisma/client';
import { title } from 'process';
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
export const dbCreateVideo = async (video: {
  title: string;
  s3Key: string;
  description: string;
  creatorEmail: string;
}) => {
  try {
    const res = await prisma.video.create({
      data: {
        title: video.title,
        s3Key: video.s3Key,
        description: video.description,

        creator: {
          connect: { email: video.creatorEmail },
        },
      },
    });
  } catch (e) {
    throw e;
  }
};

export const dbFindOrCreateUser = async (newUser: {
  email: string;
  name: string;
  imageUrl: string;
}) => {
  console.log('CREATING THIS ONE');
  let existingUser = null;
  // if (newUser?.email == undefined) {
  //   existingUser = null;
  // } else {
  existingUser = await prisma.user.findUnique({
    where: {
      email: newUser.email,
    },
    //});
  });

  let createUser = null;
  if (existingUser == null) {
    createUser = await prisma.user.create({
      data: {
        email: newUser.email,
        name: newUser.name,
        imageUrl: newUser.imageUrl,
      },
    });
  } else {
    createUser = await prisma.user.update({
      where: {
        email: newUser.email,
      },
      data: {
        email: newUser.email,
        name: newUser.name,
        imageUrl: newUser.imageUrl,
      },
    });
  }

  return createUser;
};
