import Image from "next/image";
import React from "react";
import WhiteButton from "../ui/WhiteButton";

function Hero({
  titile,
  paragraph,
  link = "/",
  btn = "Explore More >",
}) {
  return (
    <>
      <div className="hidden md:flex items-center justify-center h-screen font-newfont">
        <div className="flex flex-col items-center justify-center text-center h-full w-full px-4">
          <div className="relative z-10 w-full max-w-2xl">
            <div className="mb-6">
              <h1
                style={{ lineHeight: "1.4" }}
                className="mb-6 text-4xl font-bold tracking-tight md:text-5xl text-[#fff] z-10"
                dangerouslySetInnerHTML={{ __html: titile }}
              ></h1>
              <p className="text-2xl text-[#fff]">{paragraph}</p>
            </div>
            <div className="flex flex-col md:flex-row items-center justify-center text-center mt-14">
              <WhiteButton text={btn} link={link}></WhiteButton>
            </div>
          </div>
        </div>
      </div>
      <div className="md:hidden flex items-center justify-center h-screen">
        <div className="flex flex-col items-center justify-center text-center h-full w-full px-4">
          <div className="relative z-10 w-full max-w-2xl">
            <div className="mb-6">
              <h2
                className="mb-6 text-4xl font-bold tracking-tight md:text-6xl text-[#fff]"
                dangerouslySetInnerHTML={{ __html: titile }}
              ></h2>
              <p className="text-2xl text-[#fff]">{paragraph}</p>
            </div>
            <div className="flex flex-col md:flex-row items-center text-center mt-5">
              <WhiteButton text={btn} link={link}></WhiteButton>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
