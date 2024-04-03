'use client'
import { useEffect, useState } from "react";
import {AngleRight} from '@/app/utils/Icons'
import Image from 'next/image'
import { headingContent } from "./utils/const";
import ParallaxComponent from "./components/Paralax";
import OurCollection from "./components/homeComponent/OurCollection";
import Movies from "./components/homeComponent/Movies";
import Footer from "./components/Footer";

export default function Home() {
  const [headingClick, setHeadingClick] = useState(false);
  const [windowHeight, setWindowHeight] = useState(0);

  const handleHeadingClick = () => setHeadingClick(!headingClick);

  useEffect(() => {
    // Function to update window height state
    const updateWindowHeight = () => {
      setWindowHeight(window.innerHeight);
    };

    // Update window height state saat pertama kali dimuat
    updateWindowHeight();

    // Tambahkan event listener untuk menangani perubahan ukuran jendela
    window.addEventListener("resize", updateWindowHeight);

    // Cleanup function untuk menghapus event listener saat komponen di-unmount
    return () => window.removeEventListener("resize", updateWindowHeight);
  }, []);

  console.log(process.env.NEXT_PUBLIC_API_URL)

  return (
    <main className="mt-[50px] h-[100%]" style={{ height: windowHeight }}>
      <div className='relative w-full h-[100vh] bg-center bg-cover' style={{
        backgroundImage: 'url("https://media1.tenor.com/m/ShiQ_EhPYoYAAAAC/water.gif")'
      }}>
        <div className="absolute w-full h-full top-0 left-0 flex items-center">
          <div className={`transition-all duration-500 ease-in ${headingClick ? 'translate-x-0' : '-translate-x-[220px] md:-translate-x-[440px] lg:-translate-x-[570px] xl:-translate-x-[790px]' } relative h-[70%] w-[80%] md:w-[60%] bg-blue-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 flex flex-col`}>
            <div className="w-full flex items-center justify-center h-[50%]">
              <Image src='/logo.png' width={350} height={350} alt="studio ghibli" className="hidden md:block"/>
              <Image src='/logo.png' width={200} height={200} alt="studio ghibli" className="block md:hidden"/>
            </div>

            <div className="w-full h-[60%] md:h-[50%] p-[1.5rem] bg-blue-900 rounded-bl-xl rounded-br-xl text-white">
              <p className="text-justify text-[.5rem] md:text-[.6rem] lg:text-[.9rem] xl:text-[1rem]">{headingContent}</p>
            </div>

            <div className="absolute top-0 -right-10 h-full flex items-center">
              <button onClick={handleHeadingClick} className={`bg-blue-900 px-[.5rem] py-[1.5rem]`}><AngleRight color="black" size={25} /></button>
            </div>
          </div>
        </div>
      </div>
      
      <ParallaxComponent>
        <div className="w-full">
          <OurCollection />
          <Movies />
          <Footer />
        </div>
      </ParallaxComponent>
    </main>
  );
}
