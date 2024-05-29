"use client";
import Navbar from "../layouts/navbar";
import destination from "../data/destination";
import { useState } from "react";
import { Controller } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { EffectFade } from 'swiper/modules';
import "swiper/css";
import "./pagination.css";
import 'swiper/css/effect-fade';

export default function Destination() {
  const pageId = 2;
  const [firstSwiper, setFirstSwiper] = useState(null);
  const [secondSwiper, setSecondSwiper] = useState(null);

  const imageElements = destination.map((item, index) => {
    return (
      <>
        <SwiperSlide>
          <img src={item.thumbnailUrl} className="w-72 mx-auto lg:w-96" />
        </SwiperSlide>
      </>
    );
  });

  const detailElements = destination.map((item, index) => {
    return (
      <>
        <SwiperSlide key={item.id}>
          <div className="mt-4">
            <h1 className="pt-6 pb-4 text-5xl font-['Bellefair'] md:text-6xl lg:text-left lg:text-7xl">
              {item.name.toUpperCase()}
            </h1>
            <div className="md:w-[80%] mx-auto lg:w-[85%] lg:mx-0">
            <p className="px-10 font-['Barlow'] text-lg  md:mx-auto  lg:text-left lg:px-0 lg:pr-10 lg:text-xl">
              {item.description}
            </p>
            <div className="my-10 w-full h-0.5 bg-gray-600 mx-auto"></div>
            </div>
            <div className="pt-2 md:flex md:justify-evenly lg:justify-start lg:gap-20 lg:text-left">
              <div className="py-2">
                <h2 className="text-md font-['Barlow']">AVG. DISTANCE</h2>
                <p className="text-3xl font-['Bellefair'] mt-4 lg:text-4xl">{item.distance.toUpperCase()}</p>
              </div>
              <div className="py-2">
                <h2 className="text-md font-['Barlow']">AVG. DISTANCE</h2>
                <p className="text-3xl font-['Bellefair'] mt-4 lg:text-4xl">{item.time.toUpperCase()}</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </>
    );
  });

  const navElements = destination.map((nav, item) => nav.name.toUpperCase());

  const pagination = {
    el: ".swiper-pagination",
    clickable: true,
    renderBullet: function (index, className) {
      const nav = destination.map((item) => item.name);
      return (
        '<span class="' +
        className +
        '">' +
        nav[index].toUpperCase() +
        "</span>"
      );
    },
  };

  return (
    <>
      <Navbar pageId={pageId} />
      <main>
        <section className="bg-[url('/assets/destination/background-destination-desktop.jpg')] w-full h-full min-h-screen bg-no-repeat bg-cover pt-32 lg:pt-56 ">
          <h2 className="text-center mb-8 md:ml-20 md:text-left text-lg font-['Barlow'] lg:text-2xl">
            <span className="font-bold mr-2 text-[#4E5058]">01</span> PICK YOUR
            DESTINATION
          </h2>
          <div className="lg:flex lg:justify-center lg:items-center">
            <div className="lg:w-6/12">
              <Swiper
                modules={[Controller, EffectFade]}
                loop={true}
                onSwiper={setFirstSwiper}
                controller={{ control: secondSwiper }}
                effect="fade"
              >
                {imageElements}
              </Swiper>
            </div>
            <div className="text-center py-8 lg:w-6/12">
              <div className="swiper-pagination flex justify-center bg-none text-lg lg:justify-start"></div>
              <Swiper
                modules={[Controller, Pagination]}
                loop={true}
                onSwiper={setSecondSwiper}
                controller={{ control: firstSwiper }}
                pagination={pagination}
              >
                {detailElements}
              </Swiper>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
