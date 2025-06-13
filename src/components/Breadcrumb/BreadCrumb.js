import { Link } from "react-router-dom";
import React from "react";
import WinGridDark from "../Hero/WinGridDark";

export default function BreadCrumb({ pageTitle, to, currentPage }) {
  return (
    <section id="h1-breadcrumb">
      <div className="relative w-full pb-16 overflow-hidden h1-breadcrumb h-fit bg-main-black md:pb-24">
      <WinGridDark />
        <div className="absolute left-1/4 w-full top-[300px] overflow-hidden z-0 pointer-events-none">
          <div className="flex justify-center">
            <img src="/assets/images/home-one-hero-circle-shadow.svg" alt="" />
          </div>
        </div>
        <div className="relative z-20 mx-auto theme-container h-fit w-fit">
          <div className="mt-[120px] md:mt-[272px] w-fit mx-auto relative z-10">
            <h1 className="w-full font-semibold text-center text-white text-34 sm:text-48">
              {pageTitle}
            </h1>
            <div className="flex items-center justify-center gap-5 mt-4">
              <Link
                to="/"
                className="relative leading-5 transition-all duration-300 home-two-nav-item text-18 font-inter text-white hover:text-[#00DE8D]"
              >
                Home
              </Link>
              <svg
                width="6"
                height="12"
                viewBox="0 0 6 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 1L5 6L1 11"
                  stroke="#794AFF"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <Link
                to={to}
                className="relative leading-5 transition-all duration-300 home-two-nav-item text-18 font-inter text-white hover:text-[#00DE8D]"
              >
                {currentPage}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
