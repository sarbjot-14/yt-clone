import { createRouteLoader } from 'next/dist/client/route-loader';
import Image from 'next/image';
import React from 'react';
import TimeAgo from 'javascript-time-ago';
import en from 'javascript-time-ago/locale/en';
import Link from 'next/link';
TimeAgo.addDefaultLocale(en);

const VideoCard = (card: {
  creator: any;
  video: {
    title: String;

    viewCount: number;
    createdAt: String;
    thumbnail: String;
    s3Key: String;
  };
}) => {
  const timeAgo = new TimeAgo('en-US');

  const uploadedLongAgo = timeAgo.format(
    new Date(card.video.createdAt.split('T')[0]),
  );

  console.log('inside vide ocar ', card, card.video.viewCount);
  return (
    <>
      <Link href={`/watch/${card.video.s3Key}`}>
        <div className="flex flex-col max-w-50 max-h-50 p-2 hover:cursor-pointer">
          {/* <div className="h-50 w-50 relative"> */}

          <Image
            src={`/thumbnails/${card.video.thumbnail}`}
            alt="/icons/youtube.svg"
            width="280"
            height="10"
            objectFit="contain" // change to suit your needs
            className="rounded-lg"
          ></Image>

          <div className="flex justify-start gap-3 p-1 py-3">
            <div className="h-10 w-10 relative">
              <Image
                src={card.creator.imageUrl!}
                alt="/icons/shorts.svg"
                layout="fill" // required
                objectFit="cover" // change to suit your needs
                className="rounded-full" // just an example
              ></Image>
            </div>
            <div className="flex flex-col justify-around">
              <p className="text-md font-semibold pb-1">{card.video.title}</p>
              <p className="text-xs font-light">{card.creator.name}</p>
              <div className="flex justify-start gap-1">
                <p className="text-xs font-light">
                  {card.video.viewCount} views
                </p>
                <p className="text-xs font-light"> · </p>

                <p className="text-xs font-light">{uploadedLongAgo}</p>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default VideoCard;
