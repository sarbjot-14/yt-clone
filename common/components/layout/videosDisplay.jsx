'use client';
import React from 'react';
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';
import VideoCard from '../feature/videoCard';

const VideosDisplay = () => {
  const fetchVideos = async () => {
    const res = await fetch('/api/videos', {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    });
    return res.json();
  };
  const queryClient = useQueryClient();
  // const response = useQuery('videos', fetchVideos);
  const {
    isLoading,
    isError,
    data: videos,
    error,
  } = useQuery(['videos'], fetchVideos, {
    staleTime: 9000,
  });

  console.log('THE VIDEOS ARE ', videos);

  if (isLoading) {
    return <span>Loading...</span>;
  }

  if (isError) {
    return <span>Error: {error.message}</span>;
  }

  return (
    <div className="flex p-2 pt-8 flex-wrap">
      {videos.map((video, index) => (
        <VideoCard
          key={index}
          video={video}
          creator={video.creator}
        ></VideoCard>
      ))}
    </div>
  );
};

export default VideosDisplay;
