"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import NavList from "./layouts/navlist";
import Navbar from "./layouts/navbar";

export default function Home() {
  const pageId = 1;

  return (
    <>
    <Navbar pageId={pageId}/>
    <main className="bg-[url('/assets/home/background-home-mobile.jpg')] w-full h-screen bg-no-repeat bg-cover overflow-hidden
    md:bg-[url('/assets/home/background-home-tablet.jpg')] lg:bg-[url('/assets/home/background-home-desktop.jpg')]">
      <div className="text-center pt-36 px-10 lg:flex lg:text-left lg:justify-between  lg:pt-[24rem] lg:w-[90%] mx-auto">
        <div className="lg:w-6/12">
          <h2 className="text-lg md:text-2xl font-['Barlow']">SO, YOU WANT TO TRAVEL TO</h2>
          <h1 className="py-10 text-7xl md:text-9xl font-['Bellefair']">SPACE</h1>
          <p className="text-md md:w-9/12 md:mx-auto md:text-xl font-['Barlow'] lg:w-full ">
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </div>
        <div className="py-20 md:py-40 lg:w-6/12 mx-auto text-center">
          <a href="destination" className="text-lg bg-white text-black py-12 px-6 rounded-full duration-300 hover:shadow-[0_0_0_40px_rgba(255,255,255,0.3)]
          md:py-28 md:px-20 md:text-2xl font-['Bellefair']">EXPORE</a>
        </div>
      </div>
    </main>
    </>
  );
}
