import Microphone from '../application/icons/microphone';
import Profile from '../application/icons/profile';
import Search from '../application/icons/search';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import React from 'react';

import { useSession, signIn, signOut } from 'next-auth/react';
import Image from 'next/image';
import { userAgent } from 'next/server';
import SignOut from '../application/icons/signOut';
import Link from 'next/link';

const ProfileMenu = () => {
  const { data: session } = useSession();
  console.log(session?.user?.image);

  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
    null,
  );

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;
  return (
    <>
      <div>
        <Popover
          id={id}
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
        >
          <div className="flex flex-col items-start">
            <div className="flex gap-5 p-5">
              <div className="h-10 w-10 relative">
                <Image
                  src={session?.user?.image!}
                  alt="/icons/shorts.svg"
                  layout="fill" // required
                  objectFit="cover" // change to suit your needs
                  className="rounded-full" // just an example
                ></Image>
              </div>
              <div className="flex flex-col">
                <h3>{session?.user?.name}</h3>
                <h3>{session?.user?.email}</h3>
              </div>
            </div>
            <hr className="h-px my-0 bg-gray-200 border-0 dark:bg-gray-700"></hr>
            <div className="flex flex-col p-2">
              <Link href="/channel">
                <button className="flex gap-4 p-3 px-5">
                  <Profile></Profile>Your Channel
                </button>
              </Link>
              <button onClick={() => signOut()} className="flex gap-4 p-3 px-5">
                <SignOut></SignOut>Sign Out
              </button>
              <button className="flex gap-4 p-3 px-5">
                <Image
                  width="25"
                  height="25"
                  src="/icons/settings.svg"
                  alt="/icons/youtube.svg"
                ></Image>
                Setting
              </button>
            </div>
          </div>
        </Popover>
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
          <button
            aria-describedby={id}
            onClick={handleClick}
            className="h-10 w-10 relative"
          >
            <Image
              src="https://lh3.googleusercontent.com/a/AEdFTp7CVDDdU2HOvKuZaNFJeVZbH4bntSMA36I9GXJMGg=s96-c"
              alt="/icons/shorts.svg"
              layout="fill" // required
              objectFit="cover" // change to suit your needs
              className="rounded-full" // just an example
            ></Image>
          </button>
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
    </>
  );
};

export default ProfileMenu;
