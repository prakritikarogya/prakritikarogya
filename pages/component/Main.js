import React from "react";
const Main = () => {
  let sliderData = [
    {
      imageUrl: "https://moonstonenaturopathic.com/wp-content/uploads/2022/05/Ways-a-Naturopathic-Doctor-Can-Help-You-Achieve-Your-Health-Goals.jpg",
      title: "Welcome to Prakritk Arogyaaashram",
      desc: "Rajgir, Nalanda Bihar-(803116)"
    },
    {
      imageUrl: "https://www.netnewsledger.com/wp-content/uploads/2023/05/herbal-naturopathic-medicine-2021-08-26-15-52-41-utc-696x426.jpg",
      title: "",
      desc: ""
    },
    {
      imageUrl: "https://www.thestatesman.com/wp-content/uploads/2022/10/istockphoto-526831548-612x612-1-1.jpg",
      title: "",
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
        {sliderData.map((val, index) => (
          <div
            id={`carousel-item-${index}`}
            className=" ease-in-out"
            data-carousel-item={index == 0 ? "active" : true}
            key={index}
          >
            <img
              src={val.imageUrl}
              className="bg-cover bg-no-repeat w-full rounded-lg relative"
              alt="main"
              width={100}
              height={100}
            />
            {val?.title && <h1 className="sm:text-5xl text-lg  text-green-700 sm:block hidden absolute sm:top-1/5 sm:left-1/2 left-5 top-28 font-extrabold pb-5">{val?.title}</h1>}
            {val.desc && <p className="w-3/12 text-xl text-center absolute sm:block hidden top-64 sm:left-1/2 font-extrabold border-b-2 border-t-2 border-black">{val.desc}</p>}
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
