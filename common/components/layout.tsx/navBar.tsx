import Image from 'next/image';
import React from 'react';
import MenuIcon from '../application/icons/menu';
import Microphone from '../application/icons/microphone';
import Profile from '../application/icons/profile';
import Search from '../application/icons/search';

import { useSession, signIn, signOut } from 'next-auth/react';

const NavBar = () => {
  const { data: session } = useSession();
  console.log(session?.user?.image);

  return (
    <>
      <div className="w-full h-20  flex ">
        <div className="flex justify-center items-center p-5 gap-5">
          <MenuIcon></MenuIcon>
          <Image
            width="100"
            height="100"
            src="/icons/youtube.svg"
            alt="/icons/youtube.svg"
          ></Image>
        </div>
        <div className=" grow flex justify-center items-center grow ">
          <div className="hidden  sm:block flex justify-center w-2/5 ">
            <div className="">
              <input
                placeholder="Search"
                className="rounded-l-full p-3 w-full border-2 h-10"
              ></input>
            </div>
          </div>
          <span className="rounded-r-full bg-slate-100 p-3 hidden sm:inline h-10 px-4 py-2">
            <Search width="6" display="inline"></Search>
          </span>
          <div className="hidden sm:inline">
            <Microphone width="6"></Microphone>
          </div>

          <div className=" sm:hidden w-full flex justify-center ">
            {' '}
            <Search width="6" display="hidden"></Search>
            <Microphone width="6"></Microphone>
          </div>
        </div>

        {session?.user ? (
          <div className="flex justify-center items-center gap-5">
            <Image
              width="27"
              height="30"
              src="/icons/create.svg"
              alt="/icons/shorts.svg"
            ></Image>
            <Image
              width="27"
              height="30"
              src="/icons/notification.svg"
              alt="/icons/shorts.svg"
            ></Image>
            <div className="h-10 w-10 relative">
              <Image
                src="https://lh3.googleusercontent.com/a/AEdFTp7CVDDdU2HOvKuZaNFJeVZbH4bntSMA36I9GXJMGg=s96-c"
                alt="/icons/shorts.svg"
                layout="fill" // required
                objectFit="cover" // change to suit your needs
                className="rounded-full" // just an example
              ></Image>
            </div>
          </div>
        ) : (
          <div
            onClick={() => signIn()}
            className=" flex justify-center items-center p-5"
          >
            <div className="button bg-white rounded-xl p-2 px-3 border-2 flex gap-2">
              <Profile></Profile>
              <p className="inline">Sign in</p>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default NavBar;
