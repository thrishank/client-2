import React from "react";
import "../../app/globals.css";
import Link from "next/link";

const features = [
  {
    title: "Cutting edge design",
    description: "Sleek and futuristic design that captivates your visitors.",
    imgSrc: "/food10.jpg",
  },
  {
    title: "Fortified security",
    description:
      "Rest easy knowing that Stratus is fortified with robust security measures.",
    imgSrc: "/path/to/your/image2.png",
  },
  {
    title: "Tech-centric features",
    description:
      "Showcase your products, services, or projects with dynamic elements.",
    imgSrc: "/path/to/your/image3.png",
  },
  {
    title: "End-to-end encryption",
    description: "Sensitive data are safe from malicious threats.",
    imgSrc: "/path/to/your/image4.png",
  },
  {
    title: "Blazing-fast performance",
    description: "Lightweight architecture and optimized code.",
    imgSrc: "/path/to/your/image5.png",
  },
  {
    title: "Advanced customization",
    description:
      "Tailor your website to perfection with our easy-to-use customization tools.",
    imgSrc: "/path/to/your/image6.png",
  },
  {
    title: "Photo gallery",
    description: "Showcase your technology in a stunning custom portfolio.",
    imgSrc: "/path/to/your/image7.png",
  },
  {
    title: "Frictionless search",
    description: "Easily recall and index pages and data.",
    imgSrc: "/path/to/your/image8.png",
  },
];

const FeaturesGrid = () => {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-10 font-newfont">
      <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
        <h2 className="max-w-lg mb-6 text-center text-3xl md:text-5xl font-bold leading-none tracking-tight text-white md:mx-auto">
          Industries We Serve
        </h2>
        <p className="text-base text-white text-center md:text-lg">
          We provide tailored mobile app development solutions for diverse
          industries that revolutionize user experience.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 text-white">
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex flex-col items-start shadow-md relative hover:bg-[#001927] py-7 pr-7 border-gray-700 border-x"
          >
            <img
              src={feature.imgSrc}
              alt={feature.title}
              className="w-12 h-12 mb-4 pl-[26px]"
            />
            <h3 className="text-lg font-semibold border-l-4 border-[#6249CE] pl-[22px]">{feature.title}</h3>
            <p className="text-left pl-[26px]">{feature.description}</p>
            <Link className="cursor-pointer pl-[26px] text-[#6249CE] bottom-0 relative" href="">
              Learn More
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturesGrid;
