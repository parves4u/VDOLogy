import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function LandingHeaderTen({
  currentCategory,
  setCurrentCategory,
}) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isWorksSubMenuOpen, setIsWorksSubMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleWorksSubMenu = () => {
    setIsWorksSubMenuOpen(!isWorksSubMenuOpen);
  };

  // Function to close mobile menu when menu item is clicked
  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setIsWorksSubMenuOpen(false); // Also close the works submenu
  };

  const handleShortFormVideo = () => {};

  return (
    <div className="fixed top-0 z-20 w-screen h-24 bg-main-black">
      <div className="pl-0 pr-8 md:px-[70px] w-full h-full">
        <header className="relative flex items-center justify-between w-full h-full py-6 mx-auto">
          {/* Logo */}
          <div className="flex items-center gap-0 md:gap-24">
            <Link to="#banner">
              <img src="/assets/images/home-ten/logo.svg" alt="logo" />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <ul className="hidden xl:flex items-center gap-10 text-base font-medium leading-5 text-white font-inter h-fit">
            <li className="group">
              <a
                className="home-two-nav-item leading-5 relative before:content-['Home'] before:text-white before:border-white w-fit before:h-[20px] flex items-center gap-2"
                href="#banner"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#features"
                className="home-two-nav-item relative before:content-['Features'] before:text-white before:border-white before:h-[20px]"
              >
                Features
              </a>
            </li>
            <li className="relative group">
              <a
                className="flex items-center gap-2 font-semibold text-white hover:underline"
                href="#works"
              >
                Works
                <svg
                  className="transition-all duration-300 group-hover:rotate-180"
                  width="10"
                  height="10"
                  viewBox="0 0 19 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2 2L9.5 8L17 2"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>

              <div className="absolute px-2 -left-7 h-0 group-hover:h-[480px] overflow-hidden top-5 transition-all duration-700">
                <ul className="max-h-fit min-w-[200px] bg-white mt-8 transition-all duration-300 overflow-hidden px-5 top-20 pb-4 rounded-b-md">
                  <li className="relative py-1">
                    <a
                      className="relative font-medium leading-5 home-two-nav-item hover:text-purple w-fit text-paragraph font-inter"
                      href="#videoEditing"
                      onClick={() => setCurrentCategory(0)}
                    >
                      Video Editing
                    </a>
                  </li>
                  <li className="relative py-1">
                    <a
                      className="relative font-medium leading-5 home-two-nav-item hover:text-purple w-fit text-paragraph font-inter"
                      href="#podcast"
                      onClick={() => setCurrentCategory(1)}
                    >
                      Podcast
                    </a>
                  </li>
                  <li className="relative py-1">
                    <a
                      className="relative font-medium leading-5 home-two-nav-item hover:text-purple w-fit text-paragraph font-inter"
                      href="#audioEditing"
                      onClick={() => setCurrentCategory(2)}
                    >
                      Audio Editing
                    </a>
                  </li>
                  <li className="relative py-1">
                    <a
                      className="relative font-medium leading-5 home-two-nav-item hover:text-purple w-fit text-paragraph font-inter"
                      href="#2d3dAnimation"
                      onClick={() => setCurrentCategory(3)}
                    >
                      2D/3D Animation
                    </a>
                  </li>
                  <li className="relative py-1">
                    <a
                      className="relative font-medium leading-5 home-two-nav-item hover:text-purple w-fit text-paragraph font-inter"
                      href="#graphicDesign"
                      onClick={() => setCurrentCategory(4)}
                    >
                      Graphic Design
                    </a>
                  </li>
                  <li className="relative py-1">
                    <a
                      className="relative font-medium leading-5 home-two-nav-item hover:text-purple w-fit text-paragraph font-inter"
                      href="#digitalMarketing"
                      onClick={() => setCurrentCategory(5)}
                    >
                      Digital Marketing
                    </a>
                  </li>
                  <li className="relative py-1">
                    <a
                      className="relative font-medium leading-5 home-two-nav-item hover:text-purple w-fit text-paragraph font-inter"
                      href="#webDevelopment"
                      onClick={() => setCurrentCategory(6)}
                    >
                      Web Development
                    </a>
                  </li>
                  <li className="relative py-1">
                    <a
                      className="relative font-medium leading-5 home-two-nav-item hover:text-purple w-fit text-paragraph font-inter"
                      href="\#shortForm"
                      onClick={() => setCurrentCategory(7)}
                    >
                      Short Form
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <a
                href="/about"
                className="home-two-nav-item relative before:content-['About'] before:text-white before:border-white before:h-[20px]"
              >
                About
              </a>
            </li>
            <li>
              <a
                className="home-two-nav-item relative before:content-['Recent Projects'] before:text-white before:border-white before:h-[20px]"
                href="#RecentProjects"
              >
                Recent Projects
              </a>
            </li>
            <li>
              <a
                className="home-two-nav-item relative before:content-['Pricing'] before:text-white before:border-white before:h-[20px]"
                href="#pricing"
              >
                Pricing
              </a>
            </li>
          </ul>

          {/* Contact and Call Button */}
          <div className="hidden xl:flex items-center gap-7">
            <a href="#" className="flex gap-2.5 group">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.77762 11.9424C2.8296 10.2893 2.37185 8.93948 2.09584 7.57121C1.68762 5.54758 2.62181 3.57081 4.16938 2.30947C4.82345 1.77638 5.57323 1.95852 5.96 2.6524L6.83318 4.21891C7.52529 5.46057 7.87134 6.08139 7.8027 6.73959C7.73407 7.39779 7.26737 7.93386 6.33397 9.00601L3.77762 11.9424ZM3.77762 11.9424C5.69651 15.2883 8.70784 18.3013 12.0576 20.2224M12.0576 20.2224C13.7107 21.1704 15.0605 21.6282 16.4288 21.9042C18.4524 22.3124 20.4292 21.3782 21.6905 19.8306C22.2236 19.1766 22.0415 18.4268 21.3476 18.04L19.7811 17.1668C18.5394 16.4747 17.9186 16.1287 17.2604 16.1973C16.6022 16.2659 16.0661 16.7326 14.994 17.666L12.0576 20.2224Z"
                  stroke="#ffffff"
                  strokeWidth="1.5"
                  strokeLinejoin="round"
                />
                <path
                  d="M22 5L12 5M22 5C22 4.43982 20.604 3.39322 20.25 3M22 5C22 5.56018 20.604 6.60678 20.25 7M12 5C12 4.43982 13.396 3.39322 13.75 3M12 5C12 5.56018 13.396 6.60678 13.75 7"
                  stroke="#ffffff"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>

              <span className="text-base font-bold leading-5 tracking-tight text-white">
                Call : +880 (1710) 618285
              </span>
            </a>
            <Link to="/contact">
              <div className="home-two-btn-bg py-2.5 group bg-caribbean-green border-caribbean-green">
                <span className="relative z-10 text-base font-semibold text-white transition-all duration-300 group-hover:text-main-black font-inter">
                  Contact US
                </span>
                <svg
                  className="relative z-10"
                  width="7"
                  height="12"
                  viewBox="0 0 7 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    className="transition-all duration-300 group-hover:stroke-main-black"
                    d="M1.10254 10.5L4.89543 6.70711C5.22877 6.37377 5.39543 6.20711 5.39543 6C5.39543 5.79289 5.22877 5.62623 4.89543 5.29289L1.10254 1.5"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </Link>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            className="xl:hidden text-white focus:outline-none"
            onClick={toggleMobileMenu}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>

          {/* Mobile Navigation Menu */}
          <div
            className={`fixed top-24 left-0 w-screen h-screen bg-main-black transition-transform duration-300 ease-in-out ${
              isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
            } xl:hidden`}
          >
            <ul className="flex flex-col items-center gap-6 p-6 text-base font-medium text-white font-inter">
              <li>
                <a
                  href="#banner"
                  className="home-two-nav-item"
                  onClick={closeMobileMenu}
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#features"
                  className="home-two-nav-item"
                  onClick={closeMobileMenu}
                >
                  Features
                </a>
              </li>
              <li>
                <div className="flex flex-col items-center">
                  <button
                    onClick={toggleWorksSubMenu}
                    className="flex items-center gap-2 font-semibold text-white hover:underline"
                  >
                    Works
                    <svg
                      className={`transition-all duration-300 ${
                        isWorksSubMenuOpen ? "rotate-180" : ""
                      }`}
                      width="10"
                      height="10"
                      viewBox="0 0 19 10"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M2 2L9.5 8L17 2"
                        stroke="currentColor"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                  {/* Works Sub-Menu */}
                  <ul
                    className={`${
                      isWorksSubMenuOpen ? "max-h-[500px]" : "max-h-0"
                    } overflow-hidden transition-all duration-700 mt-2`}
                  >
                    <li className="py-1">
                      <a
                        href="#videoEditing"
                        onClick={() => {
                          setCurrentCategory(0);
                          closeMobileMenu();
                        }}
                        className="text-paragraph hover:text-purple"
                      >
                        Video Editing
                      </a>
                    </li>
                    <li className="py-1">
                      <a
                        href="#podcast"
                        onClick={() => {
                          setCurrentCategory(1);
                          closeMobileMenu();
                        }}
                        className="text-paragraph hover:text-purple"
                      >
                        Podcast
                      </a>
                    </li>
                    <li className="py-1">
                      <a
                        href="#audioEditing"
                        onClick={() => {
                          setCurrentCategory(2);
                          closeMobileMenu();
                        }}
                        className="text-paragraph hover:text-purple"
                      >
                        Audio Editing
                      </a>
                    </li>
                    <li className="py-1">
                      <a
                        href="#2d3dAnimation"
                        onClick={() => {
                          setCurrentCategory(3);
                          closeMobileMenu();
                        }}
                        className="text-paragraph hover:text-purple"
                      >
                        2D/3D Animation
                      </a>
                    </li>
                    <li className="py-1">
                      <a
                        href="#graphicDesign"
                        onClick={() => {
                          setCurrentCategory(4);
                          closeMobileMenu();
                        }}
                        className="text-paragraph hover:text-purple"
                      >
                        Graphic Design
                      </a>
                    </li>
                    <li className="py-1">
                      <a
                        href="#digitalMarketing"
                        onClick={() => {
                          setCurrentCategory(5);
                          closeMobileMenu();
                        }}
                        className="text-paragraph hover:text-purple"
                      >
                        Digital Marketing
                      </a>
                    </li>
                    <li className="py-1">
                      <a
                        href="#webDevelopment"
                        onClick={() => {
                          setCurrentCategory(6);
                          closeMobileMenu();
                        }}
                        className="text-paragraph hover:text-purple"
                      >
                        Web Development
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <a
                  href="#about"
                  className="home-two-nav-item"
                  onClick={closeMobileMenu}
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#RecentProjects"
                  className="home-two-nav-item"
                  onClick={closeMobileMenu}
                >
                  Recent Projects
                </a>
              </li>
              <li>
                <a
                  href="#pricing"
                  className="home-two-nav-item"
                  onClick={closeMobileMenu}
                >
                  Pricing
                </a>
              </li>
            </ul>

            {/* Phone Number and Contact Us Button in Mobile Menu */}
            <div className="flex flex-col items-center gap-6 mt-6">
              <a href="#" className="flex gap-2.5 group">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3.77762 11.9424C2.8296 10.2893 2.37185 8.93948 2.09584 7.57121C1.68762 5.54758 2.62181 3.57081 4.16938 2.30947C4.82345 1.77638 5.57323 1.95852 5.96 2.6524L6.83318 4.21891C7.52529 5.46057 7.87134 6.08139 7.8027 6.73959C7.73407 7.39779 7.26737 7.93386 6.33397 9.00601L3.77762 11.9424ZM3.77762 11.9424C5.69651 15.2883 8.70784 18.3013 12.0576 20.2224M12.0576 20.2224C13.7107 21.1704 15.0605 21.6282 16.4288 21.9042C18.4524 22.3124 20.4292 21.3782 21.6905 19.8306C22.2236 19.1766 22.0415 18.4268 21.3476 18.04L19.7811 17.1668C18.5394 16.4747 17.9186 16.1287 17.2604 16.1973C16.6022 16.2659 16.0661 16.7326 14.994 17.666L12.0576 20.2224Z"
                    stroke="#ffffff"
                    strokeWidth="1.5"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M22 5L12 5M22 5C22 4.43982 20.604 3.39322 20.25 3M22 5C22 5.56018 20.604 6.60678 20.25 7M12 5C12 4.43982 13.396 3.39322 13.75 3M12 5C12 5.56018 13.396 6.60678 13.75 7"
                    stroke="#ffffff"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span className="text-base font-bold leading-5 tracking-tight text-white">
                  Call : +880 (1710) 618285
                </span>
              </a>
              <Link to="/contact" onClick={closeMobileMenu}>
                <div className="home-two-btn-bg py-2.5 group bg-caribbean-green border-caribbean-green">
                  <span className="relative z-10 text-base font-semibold text-white transition-all duration-300 group-hover:text-main-black font-inter">
                    Contact US
                  </span>
                  <svg
                    className="relative z-10"
                    width="7"
                    height="12"
                    viewBox="0 0 7 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      className="transition-all duration-300 group-hover:stroke-main-black"
                      d="M1.10254 10.5L4.89543 6.70711C5.22877 6.37377 5.39543 6.20711 5.39543 6C5.39543 5.79289 5.22877 5.62623 4.89543 5.29289L1.10254 1.5"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </Link>
            </div>
          </div>
        </header>
      </div>
    </div>
  );
}
