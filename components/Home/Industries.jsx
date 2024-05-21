import React from "react";
import "../../app/globals.css";
import Link from "next/link";

const features = [
  {
    title: "Food App",
    description: "Sleek and futuristic design that captivates your visitors.",
    imgSrc: "/food10.jpg",
  },
  {
    title: "Ecommerce App",
    description:
      "Rest easy knowing that Stratus is fortified with robust security measures.",
    imgSrc: "/ecommerce10.png",
  },
  {
    title: "Sports App",
    description:
      "Showcase your products, services, or projects with dynamic elements.",
    imgSrc: "/sports10.png",
  },
  {
    title: "Marketplace App",
    description: "Sensitive data are safe from malicious threats.",
    imgSrc: "/marketplace10.png",
  },
  {
    title: "Education App",
    description: "Lightweight architecture and optimized code.",
    imgSrc: "/education10.png",
  },
  {
    title: "Real State App",
    description:
      "Tailor your website to perfection with our easy-to-use customization tools.",
    imgSrc: "/realstate10.png",
  },
  {
    title: "Entertainment App",
    description: "Showcase your technology in a stunning custom portfolio.",
    imgSrc: "/entertainment10.png",
  },
  {
    title: "Fitness App",
    description: "Easily recall and index pages and data.",
    imgSrc: "/fitness10.png",
  },
  {
    title: "Tourism App",
    description: "Easily recall and index pages and data.",
    imgSrc: "/tourism10.png",
  },
  {
    title: "Dating App",
    description: "Easily recall and index pages and data.",
    imgSrc: "/dating.png",
  },
  {
    title: "Logistics App",
    description: "Easily recall and index pages and data.",
    imgSrc: "/logistic10.png",
  },
  {
    title: "Healthcare App",
    description: "Easily recall and index pages and data.",
    imgSrc: "/healthcare10.png",
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
        {features.map((feature, index) => {
          let borderClasses = "border-x";
          if (index >= 4 && index < 8) {
            borderClasses = "border";
          }
          return (
            <div
              key={index}
              className={`flex flex-col items-start shadow-md relative hover:bg-[#001927] py-5 pr-7 ${borderClasses} border-[#212331]  `}
            >
              <img
                src={feature.imgSrc}
                alt={feature.title}
                className="w-16 h-12 mb-4 pl-[26px]"
              />
              <h4 className="text-lg font-semibold border-l-4 border-[#6249CE] pl-[22px]">
                {feature.title}
              </h4>
              <p className="text-left pl-[26px]">{feature.description}</p>
              <Link
                className="cursor-pointer pl-[26px] text-[#6249CE] bottom-0 relative"
                href=""
              >
                Learn More
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FeaturesGrid;
