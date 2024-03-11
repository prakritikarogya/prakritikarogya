import React, { useState } from "react";
import { BiMobile } from "react-icons/bi";
import { AiOutlineMail } from "react-icons/ai";
import { BsWhatsapp } from "react-icons/bs"
import Link from "next/link";
import ImageWithDefault from "./ImageWithDefault";
const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  // Function to toggle the visibility of the navigation menu
  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };
  return (
    <div className="container mx-auto sticky top-0 z-[100] bg-white">
      <div className="md:ml-auto md:flex md:justify-end  md:px-6 bg-green-600 shadow-md md:py-4 py-2">
        <div className="flex">
          <div className="flex items-center px-6  text-white ">
            <BiMobile />
            <Link href={'tel:7294949408'}>+91:7294949408</Link>
          </div>
          <div className="flex items-center sm:px-6 px-4  text-white">
            <BsWhatsapp /> &nbsp;
            <Link target='_blank' className="" rel="noreferrer" href="https://wa.me/+917294949408"> Send Message </Link>
            {/* </div> */}
          </div>
          <div className="sm:flex items-center px-6 text-white hidden">
            <AiOutlineMail className="mx-2 my-1" /> : help@prakritikarogya.in
          </div>
        </div>
      </div>
      <nav className="bg-white border-gray-200 px-2 sm:px-4 py-1 md:shadow-lg shadow-sm rounded dark:bg-gray-900 flex items-center">
        <div className="container flex flex-wrap items-center md:justify-start justify-between mx-auto md:ml-2">
          <Link href="/" className="flex items-center">
            <ImageWithDefault url={'logo.png'} width={70} height={70} alt={"logo"} nameclass="rounded-full md:ml-2 ml-4 mr-4" />
            <span className="md:hidden self-center sm:text-xl  font-semibold whitespace-nowrap dark:text-white text-green-600">Prakritik Arogyaashram</span>
          </Link>
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded={isNavOpen ? 'true' : 'false'}
            onClick={toggleNav}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
          <div className={`w-full md:block md:w-auto sm:h-auto h-80 ${isNavOpen ? 'block' : 'hidden'}`} id="navbar-default">
            <ul className="flex flex-col p-1 pl-4 mt-2 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-14 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700 md:pl-10">
              <li>
                <Link
                  href="/"
                  className="block py-2 pl-3 pr-4 text-green-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent font-bold text-base"
                  data-collapse-toggle="navbar-default"
                  aria-expanded={isNavOpen ? 'true' : 'false'}
                  onClick={toggleNav}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/treat"
                  className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-green-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent font-bold text-base"
                  data-collapse-toggle="navbar-default"
                  aria-expanded={isNavOpen ? 'true' : 'false'}
                  onClick={toggleNav}
                >
                  WHAT WE TREAT
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-green-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent font-bold text-base"
                  data-collapse-toggle="navbar-default"
                  aria-expanded={isNavOpen ? 'true' : 'false'}
                  onClick={toggleNav}
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/doctor"
                  className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-green-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent font-bold text-base"
                  data-collapse-toggle="navbar-default"
                  aria-expanded={isNavOpen ? 'true' : 'false'}
                  onClick={toggleNav}
                >
                  Doctor
                </Link>
              </li>
              <li>
                <Link
                  href="/gallery"
                  className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-green-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent font-bold text-base"
                  data-collapse-toggle="navbar-default"
                  aria-expanded={isNavOpen ? 'true' : 'false'}
                  onClick={toggleNav}
                >
                  Gallery
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-green-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent font-bold text-base"
                  data-collapse-toggle="navbar-default"
                  aria-expanded={isNavOpen ? 'true' : 'false'}
                  onClick={toggleNav}
                >
                  Contact Us
                </Link>
              </li>
              <li className="">
                <a href="/donate"
                  className=" text-center absolute sm:right-0 sm:mr-4 mr-10 bg-green-500 bottom-3 sm:bottom-auto text-white p-2  w-40 rounded-sm"
                  data-collapse-toggle="navbar-default"
                  aria-expanded={isNavOpen ? 'true' : 'false'}
                  onClick={toggleNav}
                >
                  Donate Us
                </a>
              </li>
            </ul>
          </div>

        </div>
      </nav>
    </div>
  );
};

export default Header;
