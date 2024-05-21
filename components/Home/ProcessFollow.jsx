import Image from "next/image";
import React from "react";

function ProcessFollow() {
  return (
    <>
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-10 font-newfont">
        <h1 className="max-w-lg mb-6 text-center text-3xl md:text-5xl font-bold leading-none tracking-tight text-black md:mx-auto">
          Process we follow
        </h1>
        <p className="text-black text-center p-2 pb-14 text-base md:text-lg">
          Our team of top-notch developers make sure to follow a process that
          guarantee success of your mobile app development project.
        </p>
        <div className="border-[#00C2FF] text-white items-center flex lg:flex-row flex-col justify-center border-[3px] mx-4 md:mx-8 py-2 px-4 rounded-2xl bg-[#001927] mb-8">
          <div className="text-center lg:text-start">
            <h1 className="text-xl font-bold py-4">
              Requirement Analysis
            </h1>
            <p className="leading-7 pb-9">
              Our top-notch team have transparent approach for requirement
              analysis. they land on your site. Impress with stunning visuals
              and user-friendly layouts that scream modernity and
              sophistication.
            </p>
          </div>
          <img
            src="processtestimage.png"
            width="539px"
            height="285.93"
            className=""
          ></img>
        </div>
        <div className="border-[#7DD666]  text-gray-200 flex flex-col-reverse lg:flex-row items-center justify-center border-[3px] mx-4 md:mx-8  py-2 px-4 rounded-2xl bg-[#1C3223] my-8">
          <img src="processtestimage.png" width="539px" height="285.93"></img>
          <div className="text-center lg:text-start">
            <h1 className="text-white text-xl font-bold py-4">
              Design & development
            </h1>
            <p className="leading-7 pb-9">
              Crafted with innovation in mind, Stratus boasts a sleek and
              futuristic design that captivates your visitors from the moment
              they land on your site. Impress with stunning visuals and
              user-friendly layouts that scream modernity and sophistication.
            </p>
          </div>
        </div>
        <div className="border-[#FFB489]  text-gray-200 flex flex-col lg:flex-row items-center justify-center border-[3px] mx-4 md:mx-8 px-4 py-2 rounded-2xl bg-[#39292A] mt-8">
          <div className="text-center lg:text-start">
            <h1 className="text-white text-xl font-bold py-4">
              Deployment & Maintenance
            </h1>
            <p className="leading-7 pb-9">
              Crafted with innovation in mind, Stratus boasts a sleek and
              futuristic design that captivates your visitors from the moment
              they land on your site. Impress with stunning visuals and
              user-friendly layouts that scream modernity and sophistication.
            </p>
          </div>
          <img src="processtestimage.png" width="539px" height="285.93"></img>
        </div>
      </div>
    </>
  );
}

export default ProcessFollow;
