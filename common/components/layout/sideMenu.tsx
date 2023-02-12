import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Home from '../application/icons/home';

const SideMenu = ({ isOpen }: { isOpen: boolean }) => {
  return isOpen ? (
    // <div>overflwo hidden not working</div>
    <div className="h-screen  md:w-full ">
      <div className="  ">
        <Link href="/">
          <button className="flex justify-start items-center gap-5 p-5 md:m-3 pr-6 md:pr-18 h-5 rounded-lg hover:bg-gray-100 ">
            <Home></Home>

            <h3 className="inline text-sm md:text-lg w-500 px-100">Home</h3>
          </button>
        </Link>
        <button className="flex justify-start items-center gap-1 p-5 md:m-3 pr-6 md:pr-18 h-5 rounded-lg hover:bg-gray-100 ">
          <Image
            width="27"
            height="30"
            src="/icons/shorts.svg"
            alt="/icons/shorts.svg"
          ></Image>

          <h3 className="inline text-sm md:text-lg w-20 px-100">Shorts</h3>
        </button>
        <button className="flex justify-start items-center gap-4 p-5 md:m-3 pr-6 md:pr-18 h-5 rounded-lg hover:bg-gray-100 ">
          <Image
            width="27"
            height="30"
            src="/icons/subscriptions.svg"
            alt="/icons/youtube.svg"
          ></Image>

          <h3 className="inline text-sm md:text-lg w-20 px-100">
            Subscriptions
          </h3>
        </button>
        <button className="flex justify-start items-center gap-2 p-5 md:m-3 pr-6 md:pr-18 h-5 rounded-lg hover:bg-gray-100 ">
          <Image
            width="27"
            height="30"
            src="/icons/orginals.svg"
            alt="/icons/youtube.svg"
          ></Image>

          <h3 className="inline text-sm md:text-lg w-20 px-100">Originals</h3>
        </button>
        <button className="flex justify-start items-center gap-3 p-5 md:m-3 pr-6 md:pr-18 h-5 rounded-lg hover:bg-gray-100 ">
          <Image
            width="27"
            height="30"
            src="/icons/youtubeMusic.svg"
            alt="/icons/youtube.svg"
          ></Image>

          <h3 className="inline text-sm md:text-lg w-25 px-100">
            Youtube Music
          </h3>
        </button>
        <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
        <button className="flex justify-start items-center gap-3 p-5 md:m-3 pr-6 md:pr-18 h-5 rounded-lg hover:bg-gray-100 ">
          <Image
            width="27"
            height="30"
            src="/icons/library.svg"
            alt="/icons/youtube.svg"
          ></Image>

          <h3 className="inline text-sm md:text-lg w-25 px-100">Library</h3>
        </button>
        <button className="flex justify-start items-center gap-3 p-5 md:m-3 pr-6 md:pr-18 h-5 rounded-lg hover:bg-gray-100 ">
          <Image
            width="27"
            height="30"
            src="/icons/history.svg"
            alt="/icons/youtube.svg"
          ></Image>

          <h3 className="inline text-sm md:text-lg w-25 px-100">History</h3>
        </button>
        <button className="flex justify-start items-center gap-3 p-5 md:m-3 pr-6 md:pr-18 h-5 rounded-lg hover:bg-gray-100 ">
          <Image
            width="27"
            height="30"
            src="/icons/yourVideos.svg"
            alt="/icons/youtube.svg"
          ></Image>

          <h3 className="inline text-sm md:text-lg w-25 px-100">Your Videos</h3>
        </button>
        <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
        <h3 className="px-8">Explore</h3>
        <button className="flex justify-start items-center gap-3 p-5 md:m-3 pr-6 md:pr-18 h-5 rounded-lg hover:bg-gray-100 ">
          <Image
            width="27"
            height="30"
            src="/icons/trending.svg"
            alt="/icons/youtube.svg"
          ></Image>

          <h3 className="inline text-sm md:text-lg w-25 px-100">Trending</h3>
        </button>
        <button className="flex justify-start items-center gap-3 p-5 md:m-3 pr-6 md:pr-18 h-5 rounded-lg hover:bg-gray-100 ">
          <Image
            width="27"
            height="30"
            src="/icons/music.svg"
            alt="/icons/youtube.svg"
          ></Image>

          <h3 className="inline text-sm md:text-lg w-25 px-100">Music</h3>
        </button>
        <button className="flex justify-start items-center gap-3 p-5 md:m-3 pr-6 md:pr-18 h-5 rounded-lg hover:bg-gray-100 ">
          <Image
            width="27"
            height="30"
            src="/icons/Live.svg"
            alt="/icons/youtube.svg"
          ></Image>

          <h3 className="inline text-sm md:text-lg w-25 px-100">Live</h3>
        </button>
        <button className="flex justify-start items-center gap-3 p-5 md:m-3 pr-6 md:pr-18 h-5 rounded-lg hover:bg-gray-100 ">
          <Image
            width="27"
            height="30"
            src="/icons/News.svg"
            alt="/icons/youtube.svg"
          ></Image>

          <h3 className="inline text-sm md:text-lg w-25 px-100">News</h3>
        </button>
      </div>
    </div>
  ) : (
    <div>Closed</div>
  );
};

export default SideMenu;
