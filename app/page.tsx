import Image from 'next/image';
import { Inter } from '@next/font/google';
import styles from './page.module.css';
import Login from '@/common/components/authentication/Login';
// import { dbGetVideos } from '@/common/db-queries';
import VideoUpload from '@/common/components/feature/videoUpload';
import SideMenu from '@/common/components/layout/sideMenu';
import VideosDisplay from '@/common/components/layout/videosDisplay';
// import VideosDisplay from '@/common/components/layout.tsx/videosDisplay';

const inter = Inter({ subsets: ['latin'] });

// async function getData() {
//   const videos = await dbGetVideos();

//   return dbData;
// }

export default async function Home() {
  const data = { id: 1 };
  let isOpen: boolean = true;
  const toggleSideMenu = () => {
    isOpen = !isOpen;
  };

  return (
    <main className={styles.main}>
      <div className="w-full flex ">
        <div className="flex-none w-100 h-screen">
          <SideMenu isOpen={isOpen}></SideMenu>
        </div>

        <div className=" flex-1 ">
          <VideosDisplay></VideosDisplay>
        </div>
      </div>
    </main>
  );
}
