import React, { useEffect } from "react";
import Image from "next/image";
const Main = () => {
  let sliderData = [
    {
      imageUrl: "https://preview.colorlib.com/theme/healthcare/images/img_bg_6.jpg.webp",
      title: "FULL BODY DETOXIFICATION",
      desc: "NATUROPATHY HOSPITAL & PANCHKARMA CENTER, CHOMU"
    },
    {
      imageUrl: "https://preview.colorlib.com/theme/healthcare/images/img_bg_5.jpg",
      title: "FULL BODY DETOXIFICATION",
      desc: ""
    },
    {
      imageUrl: "https://preview.colorlib.com/theme/healthcare/images/img_bg_1.jpg",
      title: "FULL BODY DETOXIFICATION",
      desc: ""
    },
  ]
  return (
    <div
      id="controls-carousel"
      className="relative md:mx-10 mx-2 my-5"
      data-carousel="slide"
    >
      <div className="relative  overflow-hidden rounded-lg carusal-data">
        {sliderData.map((val,index)=>(
          <div
          id={`carousel-item-${index}`}
          className="duration-700 ease-in"
          data-carousel-item={index==0?"active":true}
          key={index}
        >
          <img
            src={val.imageUrl}
            className="block object-cover object-center w-full h-full rounded-lg relative"
            alt="main"
            width={100}
            height={100}
          />
          <h1 className="sm:text-5xl text-green-700 absolute top-1/3 sm:left-64 font-extrabold pb-5">{val.title}</h1>
          <p className="w-5/12 text-xl absolute top-72 sm:left-64 font-extrabold border-b-2 border-t-2 border-black">{val.desc}</p>
        </div>
        ))}
      </div>
      <button
        type="button"
        className="hidden absolute top-0 left-0 z-30 md:flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        data-carousel-prev
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-green-600 dark:bg-gray-800/30 group-hover:bg-green-400 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
          <svg
            aria-hidden="true"
            className="w-6 h-6 text-white dark:text-gray-800"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 19l-7-7 7-7"
            ></path>
          </svg>
          <span className="sr-only">Previous</span>
        </span>
      </button>
      <button
        type="button"
        className="absolute top-0 right-0 z-30 md:flex hidden items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        data-carousel-next
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-green-900 dark:bg-gray-800/30 group-hover:bg-green-400 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
          <svg
            aria-hidden="true"
            className="w-6 h-6 text-white dark:text-gray-800"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5l7 7-7 7"
            ></path>
          </svg>
          <span className="sr-only">Next</span>
        </span>
      </button>
      <style jsx>
        {`
          .carusal-data {
            height: 600px;
          }
          @media screen and (max-width: 995px), screen and (max-height: 500px) {
            .carusal-data {
            height: 300px;
          }
          }
        `}
      </style>
    </div>
  );
};

export default Main;
