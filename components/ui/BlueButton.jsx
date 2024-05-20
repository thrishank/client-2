import Link from "next/link";
import React from "react";

function BlueButton({ text, link = "/" }) {
  return (
    <Link href={link}>
      <button className=" flex gap-3 bg-[#664ECD] shadow-md text-white text-base md:text-lg font-semibold  rounded-full px-12 py-3 justify-center items-center hover:text-white transition-all duration-200 hover:scale-95 hover:font-semibold ">
        <span>{text}</span>
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
    </Link>
  );
}

export default BlueButton;
