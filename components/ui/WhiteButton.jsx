import Link from "next/link";
import React from "react";

function WhiteButton({ text, link = "/", icon }) {
  return (
    <Link href={link}>
      <button className=" bg-[#674FCD] font-medium font-sans shadow-md text-white rounded-full px-6 py-3 flex justify-center items-center hover:text-white hover:font-normal transition duration-150 ease-in-out hover:scale-95">
        <span>{text}</span>
        {icon && (
          <svg
            className="w-6 h-6 text-gray-800 dark:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m9 5 7 7-7 7"
            />
          </svg>
        )}
      </button>
    </Link>
  );
}

export default WhiteButton;
