"use client";
import { useState } from "react";
import technology from "../data/technology";
import Navbar from "../layouts/navbar";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  EffectFade,
  Controller,
  Pagination,
  EffectCreative,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-creative";
import "./pagination.css";

export default function Technology() {
  const pageId = 4;

  const [firstSwiper, setFirstSwiper] = useState(null);
  const [secondSwiper, setSecondSwiper] = useState(null);

  const imageElements = technology.map((image, index) => {
    return (
      <SwiperSlide>
        <img src={image.imageMobile} className="w-full py-10 lg:hidden" />
        <img src={image.imageDesktop} className="hidden w-full lg:block lg:ml-auto" />
      </SwiperSlide>
    );
  });

  const contentElements = technology.map((content, index) => {
    return (
      <SwiperSlide>
        <h2 className="font-['Barlow'] text-lg lg:text-2xl">THE TERMINOLOGY…</h2>
        <h2 className="py-4 font-['Bellefair'] text-3xl lg:text-5xl">
          {content.name.toUpperCase()}
        </h2>
        <p className="px-8 font-['Barlow'] text-md text-[#D0D6F9] lg:px-0 lg:text-xl">
          {content.description}
        </p>
      </SwiperSlide>
    );
  });

  const pagination = {
    el: ".swiper-pagination",
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  };

  return (
    <>
      <Navbar pageId={pageId} />
      <main>
        <section className="bg-[url('/assets/technology/background-technology-desktop.jpg')] w-full h-auto min-h-screen bg-no-repeat bg-cover flex flex-col justify-center ">
          <div>
            <h2 className="text-center py-10 font-['Barlow'] text-xl px-8 md:pt-20 md:text-left lg:pt-46 lg:pl-32 lg:text-3xl">
              <span className="font-bold text-gray-600 mr-2">03 </span>SPACE
              LAUNCH 101
            </h2>
            <div className="lg:flex lg:flex-row-reverse lg:items-center justify-between">
              <div className="lg:w-4/12">
                <Swiper
                  loop={true}
                  modules={[Controller, EffectCreative]}
                  onSwiper={setFirstSwiper}
                  controller={{ control: secondSwiper }}
                >
                  {imageElements}
                </Swiper>
              </div>
              <div className="lg:w-6/12 lg:flex lg:gap-16 lg:items-start lg:justify-center lg:pl-32 ">
                <div className="swiper-pagination text-center py-4 lg:w-1/12"></div>
                <div className="text-center py-10 lg:w-10/12 lg:text-left">
                  <Swiper
                    loop={true}
                    modules={[Controller, Pagination]}
                    onSwiper={setSecondSwiper}
                    controller={{ control: firstSwiper }}
                    pagination={pagination}
                  >
                    {contentElements}
                  </Swiper>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
