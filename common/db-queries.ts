//import { PrismaClient, Prisma } from '@prisma/client';
import { Anybody } from '@next/font/google';
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
export const dbFindVideo = async ({ key }: { key: string }) => {
  const resp: any = await prisma.video.findFirst({
    where: {
      s3Key: {
        equals: key,
      },
    },
    include: {
      creator: true,
      likedBy: true,
      disLiked: true,
    },
  });
  return resp;
};

export const dbUpdateViews = async (videoData: any) => {
  console.log('updating view count ', videoData);
  const resp: any = await prisma.video.update({
    where: {
      id: videoData.id,
    },
    data: {
      viewCount: videoData.viewCount,
    },
  });
  return resp;
};
export const dbUpdateLikes = async (values: any) => {
  if (values.action == 'dislike') {
    if (values.disliked == true) {
      await prisma.video.update({
        where: {
          id: values.videoId,
        },
        data: {
          disLiked: {
            disconnect: [{ email: values.userEmail }],
          },
        },
      });
    } else {
      await prisma.video.update({
        where: {
          id: values.videoId,
        },
        data: {
          disLiked: {
            connect: [{ email: values.userEmail }],
          },
        },
      });
      await prisma.video.update({
        where: {
          id: values.videoId,
        },
        data: {
          likedBy: {
            disconnect: [{ email: values.userEmail }],
          },
        },
      });
    }
  } else if (values.action == 'like') {
    if (values.liked == true) {
      //remove dislike
      await prisma.video.update({
        where: {
          id: values.videoId,
        },
        data: {
          likedBy: {
            disconnect: [{ email: values.userEmail }],
          },
        },
      });
    } else {
      //add dislike
      await prisma.video.update({
        where: {
          id: values.videoId,
        },
        data: {
          likedBy: {
            connect: [{ email: values.userEmail }],
          },
        },
      });
      await prisma.video.update({
        where: {
          id: values.videoId,
        },
        data: {
          disLiked: {
            disconnect: [{ email: values.userEmail }],
          },
        },
      });
    }
  }
  const resp: any = await prisma.video.findMany({ include: { creator: true } });
  return resp;
};

export const dbGetVideos = async () => {
  const resp: any = await prisma.video.findMany({ include: { creator: true } });
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
