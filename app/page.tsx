import Image from 'next/image';
import { Inter } from '@next/font/google';
import styles from './page.module.css';
import Login from '@/common/components/authentication/Login';
import { dbFindUser } from '@/common/db-queries';
import VideoUpload from '@/common/components/feature/videoUpload';
import SideMenu from '@/common/components/layout.tsx/sideMenu';

const inter = Inter({ subsets: ['latin'] });

async function getData() {
  const dbData = await dbFindUser({ id: '1' });

  return dbData;
}

export default async function Home() {
  console.log('hhheeeeyyyy');
  const dataDb = await getData();
  console.log('dataDb,', dataDb);
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

        <div className="bg-green-500 flex-1 ">
          <h1>dataDb {dataDb.name}</h1>
          <Login></Login>
          <VideoUpload></VideoUpload>
          <h1 className="bg-blue-700">hahahah okay </h1>
        </div>
      </div>
    </main>
  );
}
