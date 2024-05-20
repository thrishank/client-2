"use client";
import React from "react";
// import Swiper JS
import { Swiper, SwiperSlide } from "swiper/react";

// import Swiper styles
import "swiper/css";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Hero from "./Hero";

function Slider() {
  return (
    <div className="relative">
      <video
        autoPlay
        muted
        playsInline
        loop
        className="absolute top-50% left-50% w-full h-full object-cover z-0"
        src="https://build.themovation.com/wp-content/uploads/2023/08/mixkit-long-hallway-in-data-center-23219-medium.mp4"
      ></video>
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 z-0"></div>
      <Swiper
        navigation={false}
        pagination={false}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        modules={[Navigation, Pagination, Autoplay]}
        className="mySwiper1 relative z-10"
      >
        <SwiperSlide>
          <Hero
            titile={"Android App <br/> Development Services"}
            titlem={"Android App  Development Services"}
            paragraph={
              "Empowering Your Business with Next-Level Android App Development Services. "
            }
            link="services/android-app"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Hero
            titile={"iOS App <br/> Development Services"}
            titlem={"iOS App  Development Services"}
            paragraph={
              "User-Centric and Visually Stunning iOS App Development Services for start-ups."
            }
            link="services/ios-app"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Hero
            titile={"Hybrid App <br/> Development Services"}
            titlem={"Hybrid App  Development Services"}
            paragraph={
              "Quality Hybrid App Development Services at Affordable Cost for Small Businesses."
            }
            link="services/hybrid-app"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Slider;
