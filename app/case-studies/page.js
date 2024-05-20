"use client";
import Link from "next/link";
import Script from "next/script";
import React, { useEffect, useState } from "react";


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
            />

            <div className="w-full h-[500px] left-0 top-0 absolute bg-gradient-to-b from-[#183b560a] to-gray-800 rounded-2xl" />
          </div>
          <div className=" absolute bottom-0 px-6">
            <div className=" text-white text-2xl font-medium  leading-[30px] ">
              {title}
            </div>
            <div className="text-white text-base font-semibold py-6 underline">
              Read More
            </div>
          </div>
        </Link>
      </div>
    </>
  );
}

function Section1({ dimg, titile }) {
  return (
    <>
      <div
        style={{
          backgroundImage: `url(${dimg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="   "
      >
        <div className="px-4 py-8 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
          <div className="  mb-2  pt-32 md:pt-40 pb-20   sm:max-w-xl md:max-w-full lg:max-w-screen-2xl ">
            <div className="   ">
              <div className=" mb-6">
                <h2
                  style={{ lineHeight: "1.4" }}
                  className="mb-6  text-4xl font-bold text-center tracking-tight md:text-6xl text-[#fff] "
                >
                  {titile}
                </h2>
                <p className=" text-[20px] text-white text-center">
                  Real-world applications showcasing success in diverse
                  industries.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function page() {
  const [blogs, setBlogs] = useState([]);
  const [allblogs, setAllblogs] = useState([]);
  const NEXT_PUBLIC_BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL;
  var count = 6;
  useEffect(() => {
    fetch(`${NEXT_PUBLIC_BACKEND_URL}/case-studies-all`)
      .then((response) => response.json())
      .then((data) => {
        setAllblogs(data);
        setBlogs(data.slice(0, count));
      })
      .catch((error) => console.error("Error fetching post details:", error));
  }, []);

  return (
    <>
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-4JEVQXM0B7"
      ></Script>
      <Script>
        {`
         window.dataLayer = window.dataLayer || []; function gtag()
         {dataLayer.push(arguments)}
         gtag('js', new Date()); gtag('config', 'G-4JEVQXM0B7');`}
      </Script>
      <div className="">
        <Section1 dimg={"/case-studies1.png"} titile="Case Studies"></Section1>
        <div className="px-4 py-8 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
          {blogs && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 gap-y-10">
              {blogs.map((blog) => (
                <Card
                  key={blog.url}
                  title={blog.category}
                  image={blog.coverImage}
                  link={`/case-studies/${blog.url}`}
                ></Card>
              ))}
            </div>
          )}
          <div className=" flex justify-center mt-10">
            <button
              onClick={() => {
                count += 3;
                setBlogs(allblogs.slice(0, count));
              }}
              className="gap-3 bg-[#FF5948]  shadow-md text-white text-base md:text-lg font-semibold  rounded-full px-12 py-3 flex justify-center items-center hover:bg-[#0085F2] hover:text-white transition-all duration-200 hover:scale-95 hover:font-normal "
            >
              <span>Load More</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
              >
                <path
                  d="M15.7071 8.70711C16.0976 8.31658 16.0976 7.68342 15.7071 7.29289L9.34315 0.928932C8.95262 0.538408 8.31946 0.538408 7.92893 0.928932C7.53841 1.31946 7.53841 1.95262 7.92893 2.34315L13.5858 8L7.92893 13.6569C7.53841 14.0474 7.53841 14.6805 7.92893 15.0711C8.31946 15.4616 8.95262 15.4616 9.34315 15.0711L15.7071 8.70711ZM0 9H15V7H0V9Z"
                  fill="white"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default page;
