"use client";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";
import Link from "next/link";
import BlueButton from "../ui/BlueButton";

function Card({ title, image, link = "/" }) {
  return (
    // "https://via.placeholder.com/360x500"
    <>
      <div className="w-full h-[500px] relative shadow flex-col justify-start ">
        <Link href={link}>
          <div className="w-full h-[500px] relative">
            <img
              className="w-full h-[500px] left-0 top-0 absolute rounded-2xl object-cover"
              src={image}
              alt="case study"
            />

            <div className="w-full h-[500px] left-0 top-0 absolute bg-gradient-to-b from-[#183b560a] to-gray-800 rounded-2xl" />
          </div>
          <div className=" absolute bottom-0 px-6">
            <div className=" text-black text-2xl font-medium  leading-[30px] ">
              {title}
            </div>
            <div className="text-black text-base font-semibold py-6 underline">
              Read More
            </div>
          </div>
        </Link>
      </div>
    </>
  );
}

function CaseStudies({
  paragraph = "We deliver innovative solutions and tangible results for a diverse range of clients across industries.",
}) {
  const NEXT_PUBLIC_BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL;

  const [caseStudiesData, setCaseStudiesData] = useState([]);
  useEffect(() => {
    fetch(`${NEXT_PUBLIC_BACKEND_URL}/case-studies-random`)
      .then((response) => response.json())
      .then((data) => setCaseStudiesData(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);
  return (
    <div className="px-4 py-6 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 pb-6 font-newfont">
      <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
        <h2 className="max-w-lg mb-6 text-center text-3xl md:text-5xl font-bold leading-none tracking-tight text-black md:mx-auto">
          Case Studies
        </h2>
        <p className="text-base text-black text-center  md:text-lg px-14">
          {paragraph}
        </p>
      </div>
      <div className=" hidden md:block">
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {caseStudiesData.map((caseStudy, index) => (
            <SwiperSlide key={index}>
              <Card
                title={caseStudy?.title}
                image={caseStudy?.coverImage}
                link={`/case-studies/${caseStudy?.url}`}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className=" block md:hidden">
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {caseStudiesData.map((caseStudy, index) => (
            <SwiperSlide key={index}>
              <Card
                title={caseStudy?.title}
                image={caseStudy?.coverImage}
                link={`/case-studies/${caseStudy?.url}`}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="flex flex-col items-center  my-8">
        <BlueButton
          text={"More Case Studies"}
          link="/case-studies"
        ></BlueButton>
      </div>
    </div>
  );
}

export default CaseStudies;
