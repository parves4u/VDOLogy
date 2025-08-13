import React from "react";
import { Link } from "react-router-dom";

export default function FooterThree({ setCurrentCategory }) {
  return (
    <footer className="w-full overflow-hidden bg-main-black mt-20">
      <div className="grid grid-cols-4 gap-4 mx-auto mb-20 theme-container md:grid-cols-8 xl:grid-cols-12">
        <div className="col-span-4">
          <img src="./assets/images/home-two/logo-footer.svg" alt="logo" />
          <p className="max-w-[300px] text-white/50 mt-[30px] mb-6">
            Specializes in video editing and graphic design, With a keen eye for
            detail, we craft engaging content that elevates your brand and
            captivates your audience.
          </p>
          <div className="flex gap-[15px]">
            <a
              href="https://www.facebook.com/WeAreVDOLogy"
              target="blank"
              aria-label="Facebook"
              className="w-[46px] h-[46px] rounded-full flex justify-center items-center border border-white/10 overflow-hidden relative before:inline-block before:absolute before:z-0 before:w-full before:h-full before:bg-caribbean-green before:scale-x-0 group hover:before:scale-x-100 before:origin-right hover:before:origin-left before:transition-transform before:ease-out before:duration-300"
            >
              <span className="relative z-10">
                <svg
                  width="11"
                  height="16"
                  viewBox="0 0 11 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.6667 0H8.55556C5.79413 0 3.55556 2.23857 3.55556 5V6.22222H0V9.77778H3.55556V16H7.11111V9.77778H10.6667V6.22222H7.11111V4.55556C7.11111 4.00327 7.55883 3.55556 8.11111 3.55556H10.6667V0Z"
                    fill="white"
                  />
                </svg>
              </span>
            </a>
            <a
              href="https://x.com/WeAreVDOLogy"
              target="blank"
              aria-label="Twitter"
              className="w-[46px] h-[46px] rounded-full flex justify-center items-center border border-white/10 overflow-hidden relative before:inline-block before:absolute before:z-0 before:w-full before:h-full before:bg-caribbean-green before:scale-x-0 group hover:before:scale-x-100 before:origin-right hover:before:origin-left before:transition-transform before:ease-out before:duration-300"
            >
              <span className="relative z-10">
                <svg
                  width="19"
                  height="17"
                  viewBox="0 0 19 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.7642 0C10.5722 0 8.7953 1.86585 8.7953 4.1675C8.7953 4.5153 8.83587 4.85315 8.91232 5.17611C6.80469 5.17611 3.63013 4.74999 0.978868 2.09376C0.626315 1.74054 -0.0237835 1.9767 0.000670803 2.47516C0.393588 10.484 3.82353 12.8202 5.58986 12.9656C4.44926 14.0921 2.79242 14.9813 1.1252 15.3804C0.685191 15.4857 0.576494 15.9674 1.00675 16.1073C2.19973 16.4953 3.90729 16.6448 4.82642 16.67C11.3286 16.67 16.6134 11.1972 16.731 4.3991C17.5847 3.84394 18.1315 2.63855 18.4388 1.78464C18.5136 1.57667 18.1728 1.33436 17.9687 1.41931C17.331 1.68479 16.5214 1.74773 15.8318 1.52302C15.1039 0.593104 14 0 12.7642 0Z"
                    fill="white"
                  />
                </svg>
              </span>
            </a>
            <a
              href="https://www.instagram.com/wearevdology"
              target="blank"
              aria-label="Instagram"
              className="w-[46px] h-[46px] rounded-full flex justify-center items-center border border-white/10 overflow-hidden relative before:inline-block before:absolute before:z-0 before:w-full before:h-full before:bg-caribbean-green before:scale-x-0 group hover:before:scale-x-100 before:origin-right hover:before:origin-left before:transition-transform before:ease-out before:duration-300"
            >
              <span className="relative z-10">
                <svg
                  width="17"
                  height="17"
                  viewBox="0 0 17 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M5 0C2.23858 0 0 2.23858 0 5V11.33C0 14.0914 2.23858 16.33 5 16.33H11.33C14.0914 16.33 16.33 14.0914 16.33 11.33V5C16.33 2.23858 14.0914 0 11.33 0H5ZM13.0645 4.08222C13.5155 4.08222 13.881 3.71666 13.881 3.26572C13.881 2.81478 13.5155 2.44922 13.0645 2.44922C12.6136 2.44922 12.248 2.81478 12.248 3.26572C12.248 3.71666 12.6136 4.08222 13.0645 4.08222ZM12.247 8.16551C12.247 10.4202 10.4192 12.248 8.16453 12.248C5.90983 12.248 4.08203 10.4202 4.08203 8.16551C4.08203 5.91081 5.90983 4.08301 8.16453 4.08301C10.4192 4.08301 12.247 5.91081 12.247 8.16551ZM8.16532 10.6138C9.51814 10.6138 10.6148 9.51717 10.6148 8.16434C10.6148 6.81152 9.51814 5.71484 8.16532 5.71484C6.8125 5.71484 5.71582 6.81152 5.71582 8.16434C5.71582 9.51717 6.8125 10.6138 8.16532 10.6138Z"
                    fill="white"
                  />
                </svg>
              </span>
            </a>
            <a
              href="https://wa.link/61y1o5"
              target="blank"
              aria-label="WhatsApp"
              class="w-[46px] h-[46px] rounded-full flex justify-center items-center border border-white/10 overflow-hidden relative before:inline-block before:absolute before:z-0 before:w-full before:h-full before:bg-caribbean-green before:scale-x-0 group hover:before:scale-x-100 before:origin-right hover:before:origin-left before:transition-transform before:ease-out before:duration-300"
            >
              <span class="relative z-10">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M20.52 3.48A11.944 11.944 0 0 0 12 0C5.373 0 0 5.373 0 12c0 2.045.513 4.047 1.49 5.815L0 24l6.453-1.463A11.94 11.94 0 0 0 12 24c6.627 0 12-5.373 12-12 0-3.193-1.242-6.187-3.48-8.52ZM12 21.316c-2.042 0-4.045-.547-5.8-1.582l-.415-.24-3.84.872.844-3.577-.27-.415A9.662 9.662 0 0 1 2.316 12c0-5.345 4.34-9.684 9.684-9.684 2.586 0 5.019 1.008 6.848 2.836a9.658 9.658 0 0 1 2.836 6.848c0 5.345-4.34 9.684-9.684 9.684ZM17.043 14.9c-.285-.142-1.683-.832-1.944-.926-.26-.096-.451-.142-.643.143-.191.286-.736.927-.901 1.118-.166.191-.332.214-.618.072-.285-.143-1.203-.444-2.29-1.417-.846-.756-1.418-1.693-1.586-1.979-.166-.286-.018-.44.125-.586.128-.128.285-.332.428-.496.045-.057.083-.109.12-.156a.668.668 0 0 0 .095-.174.486.486 0 0 0-.022-.42c-.07-.143-.644-1.55-.882-2.125-.232-.555-.472-.479-.645-.487l-.551-.01a1.058 1.058 0 0 0-.763.358c-.26.285-.995.975-.995 2.378 0 1.403 1.016 2.757 1.16 2.951.143.191 2.01 3.077 4.873 4.167 2.864 1.09 2.864.727 3.378.688.513-.039 1.682-.682 1.917-1.34.236-.657.236-1.22.166-1.34-.07-.12-.262-.191-.546-.333Z"
                    fill="white"
                  ></path>
                </svg>
              </span>
            </a>
          </div>
        </div>
        <div className="col-span-3">
          <h1 className="font-semibold text-white text-18">Services</h1>
          <ul className="mt-3.5">
            <li className="">
              <a
                href="/#videoEditing"
                onClick={() => setCurrentCategory(0)} // Set currentCategory to 0 for Video Editing
              >
                <div className="relative flex items-center gap-2 overflow-hidden font-medium transition-all duration-300 group text-white/50 hover:text-white hover:underline">
                  <svg
                    className="absolute transition-all duration-300 -left-2 group-hover:left-0"
                    width="6"
                    height="12"
                    viewBox="0 0 6 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 1L5 6L1 11"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span className="transition-all duration-300 group-hover:translate-x-4">
                    Video Editing
                  </span>
                </div>
              </a>
            </li>
            <li className="">
              <a
                href="/#podcast"
                onClick={() => setCurrentCategory(1)} // Set currentCategory to 1 for Podcast
              >
                <div className="relative flex items-center gap-2 overflow-hidden font-medium transition-all duration-300 group text-white/50 hover:text-white hover:underline">
                  <svg
                    className="absolute transition-all duration-300 -left-2 group-hover:left-0"
                    width="6"
                    height="12"
                    viewBox="0 0 6 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 1L5 6L1 11"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span className="transition-all duration-300 group-hover:translate-x-4">
                    Podcast
                  </span>
                </div>
              </a>
            </li>
            <li className="">
              <a
                href="/#audioEditing"
                onClick={() => setCurrentCategory(2)} // Set currentCategory to 2 for Audio Editing
              >
                <div className="relative flex items-center gap-2 overflow-hidden font-medium transition-all duration-300 group text-white/50 hover:text-white hover:underline">
                  <svg
                    className="absolute transition-all duration-300 -left-2 group-hover:left-0"
                    width="6"
                    height="12"
                    viewBox="0 0 6 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 1L5 6L1 11"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span className="transition-all duration-300 group-hover:translate-x-4">
                    Audio Editing
                  </span>
                </div>
              </a>
            </li>
            <li className="">
              <a
                href="/#2d3dAnimation"
                onClick={() => setCurrentCategory(3)} // Set currentCategory to 3 for 2D/3D Animation
              >
                <div className="relative flex items-center gap-2 overflow-hidden font-medium transition-all duration-300 group text-white/50 hover:text-white hover:underline">
                  <svg
                    className="absolute transition-all duration-300 -left-2 group-hover:left-0"
                    width="6"
                    height="12"
                    viewBox="0 0 6 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 1L5 6L1 11"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span className="transition-all duration-300 group-hover:translate-x-4">
                    2D/3D Animation
                  </span>
                </div>
              </a>
            </li>
            <li className="">
              <a
                href="/#graphicDesign"
                onClick={() => setCurrentCategory(4)} // Set currentCategory to 4 for Graphic Design
              >
                <div className="relative flex items-center gap-2 overflow-hidden font-medium transition-all duration-300 group text-white/50 hover:text-white hover:underline">
                  <svg
                    className="absolute transition-all duration-300 -left-2 group-hover:left-0"
                    width="6"
                    height="12"
                    viewBox="0 0 6 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 1L5 6L1 11"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span className="transition-all duration-300 group-hover:translate-x-4">
                    Graphic Design
                  </span>
                </div>
              </a>
            </li>
            <li className="">
              <a
                href="/#digitalMarketing"
                onClick={() => setCurrentCategory(5)} // Set currentCategory to 5 for Digital Marketing
              >
                <div className="relative flex items-center gap-2 overflow-hidden font-medium transition-all duration-300 group text-white/50 hover:text-white hover:underline">
                  <svg
                    className="absolute transition-all duration-300 -left-2 group-hover:left-0"
                    width="6"
                    height="12"
                    viewBox="0 0 6 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 1L5 6L1 11"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span className="transition-all duration-300 group-hover:translate-x-4">
                    Digital Marketing
                  </span>
                </div>
              </a>
            </li>
            {/* <li className="">
              <a
                href="#webDevelopment"
                onClick={() => setCurrentCategory(6)} // Set currentCategory to 6 for Web Development
              >
                <div className="relative flex items-center gap-2 overflow-hidden font-medium transition-all duration-300 group text-white/50 hover:text-white hover:underline">
                  <svg
                    className="absolute transition-all duration-300 -left-2 group-hover:left-0"
                    width="6"
                    height="12"
                    viewBox="0 0 6 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 1L5 6L1 11"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span className="transition-all duration-300 group-hover:translate-x-4">
                    Web Development
                  </span>
                </div>
              </a>
            </li> */}
          </ul>
        </div>
        <div className="col-span-3 md:col-span-4 xl:col-span-3">
          <h1 className="font-semibold text-white text-18">Quick Link</h1>
          <ul className="mt-3.5">
            <li className="">
              <Link to="/contact">
                <div className="relative flex items-center gap-2 overflow-hidden font-medium transition-all duration-300 group text-white/50 hover:text-white hover:underline">
                  <svg
                    className="absolute transition-all duration-300 -left-2 group-hover:left-0"
                    width="6"
                    height="12"
                    viewBox="0 0 6 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 1L5 6L1 11"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span className="transition-all duration-300 group-hover:translate-x-4">
                    Help center
                  </span>
                </div>
              </Link>
            </li>
            <li className="">
              <Link to="/about">
                <div className="relative flex items-center gap-2 overflow-hidden font-medium transition-all duration-300 group text-white/50 hover:text-white hover:underline">
                  <svg
                    className="absolute transition-all duration-300 -left-2 group-hover:left-0"
                    width="6"
                    height="12"
                    viewBox="0 0 6 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 1L5 6L1 11"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span className="transition-all duration-300 group-hover:translate-x-4">
                    About us
                  </span>
                </div>
              </Link>
            </li>
            <li className="">
              <Link to="/terms-condition-privacy-policy">
                <div className="relative flex items-center gap-2 overflow-hidden font-medium transition-all duration-300 group text-white/50 hover:text-white hover:underline">
                  <svg
                    className="absolute transition-all duration-300 -left-2 group-hover:left-0"
                    width="6"
                    height="12"
                    viewBox="0 0 6 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 1L5 6L1 11"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span className="transition-all duration-300 group-hover:translate-x-4">
                    Terms & Conditions
                  </span>
                </div>
              </Link>
            </li>
            <li className="">
              <Link to="/privacy-policy">
                <div className="relative flex items-center gap-2 overflow-hidden font-medium transition-all duration-300 group text-white/50 hover:text-white hover:underline">
                  <svg
                    className="absolute transition-all duration-300 -left-2 group-hover:left-0"
                    width="6"
                    height="12"
                    viewBox="0 0 6 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 1L5 6L1 11"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span className="transition-all duration-300 group-hover:translate-x-4">
                    Privacy Policy
                  </span>
                </div>
              </Link>
            </li>
          </ul>
        </div>
        <div className="col-span-2">
          <h1 className="font-semibold text-white text-18">Address</h1>
          <div className="flex gap-2 items-center relative group font-medium text-white/50 hover:text-white hover:underline transition-all duration-300 mt-3.5">
            <span className="transition-all duration-300">
              Prachir View, H#36/7/B/1, Shah Ali Bag, Bangladesh
            </span>
          </div>
          <div className="flex gap-2 items-center relative group font-medium text-white/50 hover:text-white hover:underline transition-all duration-300 mt-3.5">
            <span className="transition-all duration-300">
              5025 S Fort Apache Rd Ste 101, Las Vegas, NV, USA <br />
            </span>
          </div>
          <h1 className="font-semibold text-white text-18">Contact</h1>
          <div className="flex gap-2 items-center relative group font-medium text-white/50 hover:text-white hover:underline transition-all duration-300 mt-3.5">
            <span className="transition-all duration-300">
              contact@vdology.com
              <br />
              +880 (1710) 618285
              <br />
              +880 (1914) 838413
            </span>
          </div>
        </div>
      </div>
      {/* <div className="absolute -right-[268px] top-[132px]">
        <img src="./assets/images/home-two/footer-shape.png" alt="footer" />
      </div> */}
      <div className="w-full h-[80px] md:h-[65px] border-t border-blue-sass/10">
        <div className="relative h-full mx-auto theme-container">
          <div className="flex justify-center w-full">
            {/* <img
              src="/assets/images/home-ten/copy-right-bg.png "
              alt=""
              className="absolute bottom-0 lighting-hue"
            /> */}
          </div>
          <div className="flex flex-wrap items-center justify-between w-full h-full">
            <span className="text-dark-silver max-w-80">
              2025 © All rights reserved by&nbsp; 
              <b className="text-main-white">VDOLogy</b>
            </span>
            <div className="relative flex justify-center w-full sm:w-fit">
              <a
                href="#"
                aria-label="go top"
                className="w-[40px] h-[40px] rounded-full border-[3px] flex justify-center items-center absolute -top-[75px] sm:-top-[55px]"
              >
                <span>
                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 40 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="19.9999" cy="19.9995" r="20" fill="#794AFF" />
                    <path
                      d="M15.9999 18.3328L20.3332 13.9995M20.3332 13.9995L24.6665 18.3328M20.3332 13.9995V26.9995"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </a>
            </div>
            <ul className="flex items-center space-x-3 max-w-80 md:space-x-6">
              <li className="font-medium hover:text-white hover:underline common-transition text-paragraph">
                <a href="#">Privacy Policy</a>
              </li>
              <li className="font-medium text-paragraph">|</li>
              <li className="font-medium hover:text-white hover:underline common-transition text-paragraph">
                <a href="/terms-condition-privacy-policy">Terms & Conditions</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
