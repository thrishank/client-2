import React from "react";
import "../../app/globals.css";
import Link from "next/link";

const features = [
  {
    title: "Food App",
    description: "Sleek and futuristic design that captivates your visitors.",
    imgSrc: "/food11.png",
  },
  {
    title: "Ecommerce App",
    description:
      "Rest easy knowing that Stratus is fortified with robust security measures.",
    imgSrc: "/ecommerce11.png",
  },
  {
    title: "Sports App",
    description:
      "Showcase your products, services, or projects with dynamic elements.",
    imgSrc: "/sports11.png",
  },
  {
    title: "Marketplace App",
    description: "Sensitive data are safe from malicious threats.",
    imgSrc: "/marketplace11.png",
  },
  {
    title: "Education App",
    description: "Lightweight architecture and optimized code.",
    imgSrc: "/education11.png",
  },
  {
    title: "Real State App",
    description:
      "Tailor your website to perfection with our easy-to-use customization tools.",
    imgSrc: "/realstate11.png",
  },
  {
    title: "Entertainment App",
    description: "Showcase your technology in a stunning custom portfolio.",
    imgSrc: "/entertainment11.png",
  },
  {
    title: "Fitness App",
    description: "Easily recall and index pages and data.",
    imgSrc: "/fitness11.png",
  },
  {
    title: "Tourism App",
    description: "Easily recall and index pages and data.",
    imgSrc: "/tourism11.png",
  },
  {
    title: "Dating App",
    description: "Easily recall and index pages and data.",
    imgSrc: "/dating11.png",
  },
  {
    title: "Logistics App",
    description: "Easily recall and index pages and data.",
    imgSrc: "/logistic11.png",
  },
  {
    title: "Healthcare App",
    description: "Easily recall and index pages and data.",
    imgSrc: "/healthcare11.png",
  },
];

const FeaturesGrid = () => {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-10 font-newfont">
      <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
        <h2 className="max-w-lg mb-6 text-center text-3xl md:text-5xl font-bold leading-none tracking-tight text-bla md:mx-auto">
          Industries We Serve
        </h2>
        <p className="text-base text-bla text-center md:text-lg">
          We provide tailored mobile app development solutions for diverse
          industries that revolutionize user experience.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 text-bla">
        {features.map((feature, index) => {
          let borderClasses = "border-x";
          if (index >= 4 && index < 8) {
            borderClasses = "border";
          }
          return (
            <div
              key={index}
              className={`flex flex-col items-start shadow-md relative hover:bg-[#dadee0] py-5 pr-7 ${borderClasses} border-[#212331]  `}
            >
              <img
                src={feature.imgSrc}
                alt={feature.title}
                className="w-20 h-12 mb-4 pl-[26px]"
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
