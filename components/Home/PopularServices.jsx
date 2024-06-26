import Image from "next/image";
import React from "react";
import BlueButton from "../ui/BlueButton";

function Card({ title, image, alt, bgColor, text }) {
  return (
    <div
      className={`flex font-newfont flex-col justify-center items-center text-white ${bgColor} rounded-[40px] py-10 px-0  md:px-2  w-full border-2 border-[#00C2FF] `}
    >
      <div>
        <Image
          src={image}
          className="w-[147px] h-[147px] transition-transform transform hover:scale-105"
          alt={alt}
          width={147}
          height={147}
        />
      </div>
      <div className=" my-6">
        <h3 className=" text-2xl md:text-3xl font-semibold text-center pb-6 text-white">
          {title}
        </h3>
        <p className=" text-small text-white text-center">{text}</p>
      </div>
    </div>
  );
}

function PopularServices() {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-10">
      <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
        <h2 className="max-w-lg mb-6 text-center  text-3xl md:text-5xl font-bold leading-none tracking-tight text-white md:mx-auto font-newfont">
          Our Popular Services
        </h2>
        <p className="text-base text-white md:text-lg text-center font-newfont">
          We offer user-centric and visually stunning mobile app design <br />{" "}
          for small businesses & start-ups.
        </p>
      </div>
      <div className=" flex flex-col md:flex-row justify-evenly gap-8 ">
        <Card
          image={"/Android_app.png"}
          title={"Android App"}
          alt={"Android Icon"}
          text={
            " We offer user-centric and visually stunning mobile app design for small businesses & start-ups."
          }
        ></Card>
        <Card image={"/ios_app.png"} title={"IOS App"} alt={"ios Icon"}></Card>
        <Card
          image={"/Hybrid_app.png"}
          title={"Hybrid App"}
          alt={"Hybrid icon"}
        ></Card>
      </div>
      <div className="flex flex-col items-center  my-8">
        <BlueButton text={"More Services"} link="/services"></BlueButton>
      </div>
    </div>
  );
}

export default PopularServices;
