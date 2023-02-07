import VideoUploader from '@/common/components/feature/videoUpload';
import SideMenu from '@/common/components/layout.tsx/sideMenu';
import React from 'react';

const page = () => {
  const isOpen = true;
  return (
    <div className="w-full flex ">
      <div className="flex-none w-100 h-screen">
        <SideMenu isOpen={isOpen}></SideMenu>
      </div>

      <div className="bg-green-500 flex-1 ">
        <h1>This is my channel</h1>
        <VideoUploader></VideoUploader>
        <h1 className="bg-blue-700">hahahah okay </h1>
      </div>
    </div>
  );
};

export default page;
