import Image from 'next/image';
import React from 'react';
import MenuIcon from '../application/icons/menu';
import Microphone from '../application/icons/microphone';
import Search from '../application/icons/search';
import ProfileMenu from '../authentication/ProfileMenu';

const NavBar = () => {
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
            <Search width="6" display="hidden"></Search>
            <Microphone width="6"></Microphone>
          </div>
        </div>
        <ProfileMenu></ProfileMenu>
      </div>
    </>
  );
};

export default NavBar;
