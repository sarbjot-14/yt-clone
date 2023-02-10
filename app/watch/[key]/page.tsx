'use client';
import React from 'react';
import { useQuery } from '@tanstack/react-query';
import VideoCard from '@/common/components/feature/videoCard';
import Image from 'next/image';
import TimeAgo from 'javascript-time-ago';
import en from 'javascript-time-ago/locale/en';
import LikeOutline from '@/common/components/application/likeOutline';
import DislikeOutline from '@/common/components/application/icons/dislikeOutline';
const Key = ({ params }: { params: { key: string } }) => {
  const fetchVideos = async () => {
    const res = await fetch('/api/videos', {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    });
    return res.json();
  };

  const fetchVideoInfo = async () => {
    const res = await fetch(`/api/videos/${params.key}`, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    });
    return res.json();
  };

  const response = useQuery(['video', params.key], fetchVideoInfo);
  console.log('all the video info is right here ', response.data);

  const timeAgo = new TimeAgo('en-US');

  const uploadedLongAgo = response.data
    ? timeAgo.format(new Date(response.data?.createdAt.split('T')[0]))
    : '0';

  const {
    isLoading,
    isError,
    data: videos,
    error,
  } = useQuery(['videos'], fetchVideos, {
    staleTime: 9000,
  });

  console.log(params);
  return (
    <>
      <div className="flex">
        <div className=" h-screen flex flex-col pt-10 items-center  ">
          <video className="w-5/6" controls muted autoPlay>
            <source
              src={`https://d2t8j8xfjivv1h.cloudfront.net/${params.key}`}
            ></source>
          </video>
          <script>
            var video = document.currentScript.parentElement; video.volume =
            0.9;
          </script>
          <div className="flex-col space-y-3 p-2 w-4/5 ">
            <p className="text-xl font-semibold ">{response.data?.title}</p>

            <div className="flex flex-col gap-3 xl:flex-row xl:justify-between">
              <div className="flex justify-start gap-5 ">
                <div className="h-10 w-10 relative">
                  <Image
                    src={response.data?.creator.imageUrl!}
                    alt="/icons/shorts.svg"
                    layout="fill" // required
                    objectFit="cover" // change to suit your needs
                    className="rounded-full" // just an example
                  ></Image>
                </div>
                <div className="flex flex-col items-start">
                  <p className="text-md">{response.data?.creator.name}</p>
                  <p className="text-xs font-extralight">100k subscribers</p>
                </div>
                <button className="rounded-full bg-slate-900 text-white text-sm px-3 font-semibold">
                  Subscribe
                </button>
              </div>
              <div className="flex justify-start gap-3">
                <div className="flex justify-center">
                  <button className="rounded-l-full border-r-1 p-3 bg-neutral-100 text-sm font-semibold flex gap-2 px-4 ">
                    <LikeOutline></LikeOutline> {response.data?.likedBy.length}
                  </button>
                  <button className="rounded-r-full  p-3 bg-neutral-100 text-sm font-semibold flex gap-2 px-4">
                    <DislikeOutline></DislikeOutline>{' '}
                    {response.data?.disLiked.length}
                  </button>
                </div>
                <button className="bg-neutral-100 text-sm font-semibold p-2 rounded-full flex items-center gap-2 px-4">
                  <Image
                    width="27"
                    height="30"
                    src="/icons/share.svg"
                    alt="/icons/youtube.svg"
                  ></Image>
                  Share
                </button>
                <button className="bg-neutral-100 text-sm font-semibold p-2 rounded-full flex items-center gap-2 px-4">
                  <Image
                    width="27"
                    height="30"
                    src="/icons/download.svg"
                    alt="/icons/youtube.svg"
                  ></Image>
                  Download
                </button>
                <button className="bg-neutral-100 text-sm font-semibold p-2 rounded-full flex items-center gap-3 px-4 font-bold">
                  ...
                </button>
              </div>
            </div>
            <div className="min-h-100 w-full bg-neutral-100 rounded-md p-3">
              <div className="flex gap-2">
                <p className="text-sm block font-semibold">
                  {response.data?.viewCount} views
                </p>
                <p className="text-sm block font-semibold">{uploadedLongAgo}</p>
              </div>
              <p className="font-sans font-serif">
                {response.data?.description}
              </p>
            </div>
            <div className="flex flex-col flex-nowrap ">
              {isLoading ? (
                <div>...</div>
              ) : (
                <div className="flex p-2 pt-8 flex-col   lg:hidden ">
                  {videos.map((video: any, index: any) => (
                    <VideoCard
                      key={index}
                      video={video}
                      creator={video.creator}
                    ></VideoCard>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="flex flex-col flex-nowrap grow mr-10">
          {isLoading ? (
            <div>...</div>
          ) : (
            <div className="flex p-2 pt-8 flex-col  hidden lg:inline  ">
              {videos.map((video: any, index: any) => (
                <VideoCard
                  key={index}
                  video={video}
                  creator={video.creator}
                ></VideoCard>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Key;
