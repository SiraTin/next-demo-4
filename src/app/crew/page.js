"use client";

import crews from "../data/crews";
import Navbar from "../layouts/navbar";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Controller } from "swiper/modules";
import { useState } from "react";
import { EffectFade } from "swiper/modules";
import "swiper/css";
import "./pagination.css";
import "swiper/css/effect-fade";

export default function Crew() {
  const pageId = 3;

  const [firstSwiper, setFirstSwiper] = useState(null);
  const [secondSwiper, setSecondSwiper] = useState(null);

  const imageElements = crews.map((image, index) => {
    return (
      <div>
        <SwiperSlide key={image.id}>
          <div className="w-[70%] mx-auto">
            <img src={image.thumbnailUrl} className="max-w-64 h-72 mx-auto md:h-[30rem] md:mb-0 md:max-w-full lg:h-[40rem]" />
            <div className="h-0.5 bg-gray-600 md:hidden"></div>
          </div>
        </SwiperSlide>
      </div>
    );
  });

  const contentElements = crews.map((content, index) => {
    return (
      <div>
        <SwiperSlide key={content.id} >
          <h2 className="mb-4 text-lg font-['Bellefair'] text-[#838589] lg:text-2xl">
            {content.position.toUpperCase()}
          </h2>
          <h1 className="mb-6 text-2xl font-['Bellefair'] lg:text-4xl">
            {content.name.toUpperCase()}
          </h1>
          <p className="mb-4 px-8 text-md font-['Barlow'] text-[#D0D6F9] lg:px-0 lg:text-2xl">
            {content.description}
          </p>
        </SwiperSlide>
      </div>
    );
  });

  const pagination = {
    el: ".swiper-pagination",
    clickable: true,
  };

  return (
    <>
      <Navbar pageId={pageId} />
      <main>
        <section
          className="bg-[url('/assets/crew/background-crew-mobile.jpg')] w-full h-full min-h-screen bg-no-repeat bg-cover
                pt-36 md:flex md:flex-col md:justify-end 
            "
        >
          <h2 className="mb-10 text-center font-['Barlow'] text-xl lg:text-left lg:pl-36 lg:text-2xl">
            <span className="font-bold mr-2 text-gray-600">02 </span>MEET YOUR CREW
          </h2>
          <div className="md:flex md:flex-col-reverse md:justify-between md:w-full md:h-full lg:flex-row-reverse lg:items-center">
            <div className="lg:w-6/12">
              <Swiper
                loop={true}
                modules={[Controller]}
                onSwiper={setFirstSwiper}
                controller={{ control: secondSwiper }}
              >
                {imageElements}
              </Swiper>
            </div>

            <div className="text-center md:flex md:flex-col-reverse  lg:w-6/12 lg:text-left lg:pl-36">
              <div className="swiper-pagination py-8 "></div>
              <div className="w-[80%] mx-auto lg:text-left lg:w-[85%] lg:mx-0">
                <Swiper
                  loop={true}
                  modules={[Controller, Pagination]}
                  pagination={pagination}
                  onSwiper={setSecondSwiper}
                  controller={{ control: firstSwiper }}
                >
                  {contentElements}
                </Swiper>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
