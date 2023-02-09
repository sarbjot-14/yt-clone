'use client';
import VideoUploader from '@/common/components/feature/videoUpload';
import SideMenu from '@/common/components/layout.tsx/sideMenu';
import Image from 'next/image';
import React, { useState } from 'react';

import { useSession, signIn, signOut } from 'next-auth/react';
import Camera from '@/common/components/application/icons/camera';
import Close from '@/common/components/application/icons/close';

const page = () => {
  const { data: session } = useSession();
  const [showModal, setShowModal] = useState(false);

  const isOpen = true;
  return (
    <div className="w-full flex ">
      <div className="flex-none w-100 h-screen">
        <SideMenu isOpen={isOpen}></SideMenu>
      </div>

      <div className=" flex-1 ">
        <div className="flex gap-5 p-5">
          <div className="h-20 w-20 relative">
            <Image
              src="https://lh3.googleusercontent.com/a/AEdFTp7CVDDdU2HOvKuZaNFJeVZbH4bntSMA36I9GXJMGg=s96-c"
              alt="/icons/shorts.svg"
              layout="fill" // required
              objectFit="cover" // change to suit your needs
              className="rounded-full" // just an example
            ></Image>
          </div>
          <div className="flex flex-col content-between h-full">
            <p className="text-xl">{session?.user?.name}</p>
            <p className="text-md">{session?.user?.email}</p>
          </div>
        </div>

        <p className="text-lg p-4s pt-10 underline-offset-8">Home</p>
        <hr className="h-px my-0 bg-gray-200 border-2 dark:bg-gray-700"></hr>

        <div className="flex flex-col justify-center items-center gap-6 mt-20">
          <Camera></Camera>
          <p className="text-xl">Upload a video to get started</p>
          <p className="text-sm">
            Start sharing your story and connecting with viewers. Videos you
            upload will show up here.
          </p>
          <button
            onClick={() => setShowModal(true)}
            className="rounded-full bg-blue-600 p-2 text-white px-5"
          >
            Upload video
          </button>

          {showModal ? (
            <>
              <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none ">
                <div className="relative w-auto my-6 mx-auto ">
                  <div className=" border-1 rounded-lg shadow-xl relative flex flex-col w-full bg-white outline-none focus:outline-none px-40">
                    <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t  ">
                      <h3 className="text-xl font=semibold font-semibold">
                        Upload Video
                      </h3>
                      <button
                        className="bg-transparent border-0 text-black float-right"
                        onClick={() => setShowModal(false)}
                      >
                        <Close></Close>
                      </button>
                    </div>

                    <VideoUploader
                      creatorEmail={session?.user?.email}
                    ></VideoUploader>
                  </div>
                </div>
              </div>
            </>
          ) : null}
        </div>

        {/* <VideoUploader></VideoUploader>
        <h1 className="bg-blue-700">hahahah okay </h1> */}
      </div>
    </div>
  );
};

export default page;
