import Image from 'next/image';
import React from 'react';
import MenuIcon from '../application/icons/menu';
import Microphone from '../application/icons/microphone';
import Search from '../application/icons/search';

const NavBar = () => {
  return (
    <>
      <div className="w-full h-20 bg-red-100 flex ">
        <div className="bg-orange-200 flex justify-center items-center">
          <MenuIcon></MenuIcon>
          <Image
            width="100"
            height="100"
            src="/icons/youtube.svg"
            alt="/icons/youtube.svg"
          ></Image>
        </div>
        <div className="bg-green-200 grow flex justify-center items-center grow ">
          <div className="hidden  sm:block flex justify-center w-3/5 ">
            <div className="">
              <input
                placeholder="Search"
                className="rounded-l-lg p-3 w-full"
              ></input>
            </div>
          </div>
          <span className="rounded-r-lg bg-slate-100 p-3 hidden sm:inline">
            <Search width="6" display="inline"></Search>
          </span>

          <div className=" sm:hidden w-full flex justify-center ">
            {' '}
            <Search width="6" display="hidden"></Search>
            <Microphone width="6"></Microphone>
          </div>
        </div>
        <div className="bg-purple-200 flex justify-center items-center">
          <div className="button bg-white rounded-xl p-2">Sign in</div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
