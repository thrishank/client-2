"use client";
import React, { useEffect, useState } from "react";

import BlueButton from "../ui/BlueButton";
import Link from "next/link";

function Card({ title, description, image, link = "/", category }) {
  return (
    <>
      <div className="p-4 rounded-[26px] bg-white">
        <div className="flex justify-center items-center relative rounded-[26px] overflow-hidden">
          <img
            src={image}
            className="w-[413px] h-[212px]  object-cover"
            alt=""
          />
        </div>
        <div>
          <div className="  items-center bg-white p-2.5 rounded-lg">
            <div className="flex flex-col justify-start items-start">
              <div className=" text-neutral-500 text-sm font-semibold  ">
                By {category}
              </div>
              <div className="flex  text-xs font-medium items-center  "></div>
            </div>
            <h3 className="text-zinc-800 text-2xl font-semibold leading-[29.52px] my-2 line-clamp-2">
              {title}
            </h3>
            <p className="text-neutral-500 text-base font-normal leading-[25.18px] line-clamp-3">
              {description && description.substring(0, 120) + `...`}
            </p>
            <div className="text-[#5236FF] text-base font-semibold pt-3 underline">
              <Link href={`/blogs/${link}`}> Read More</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function Blogs() {
  const [blogs, setBlogs] = useState([]);
  const NEXT_PUBLIC_BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL;

  useEffect(() => {
    fetch(`${NEXT_PUBLIC_BACKEND_URL}/posts-random`)
      .then((response) => response.json())
      .then((data) => setBlogs(data))
      .catch((error) => console.error("Error fetching post details:", error));
  }, []);

  return (
    <div className="py-8">
      <div className="px-4 py-6 pt-10 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8  font-newfont ">
        <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
          <h2 className="max-w-lg mb-6 text-center text-3xl md:text-5xl font-bold leading-none tracking-tight text-white md:mx-auto">
            Latest Blogs
          </h2>
          <p className="text-base text-white md:text-lg text-center">
            Dive into our latest blogs to stay at the forefront of industry
            trends, technology insights, and thought leadership.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {blogs.map((blog, index) => (
            <Card
              key={index}
              title={blog.category}
              description={blog.summary}
              image={blog.image_url}
              link={blog.url}
              category={blog.author}
            />
          ))}
        </div>
        <div className="flex flex-col py-6 items-center">
          <BlueButton text={"More Blogs"} link="/blogs"></BlueButton>
        </div>
      </div>
    </div>
  );
}

export default Blogs;
