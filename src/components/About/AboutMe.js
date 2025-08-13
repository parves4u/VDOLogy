import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";

export default function AboutMe() {
  const [activeTab, setActiveTab] = useState("about_me");
  const mainTabSectionRef = useRef(null);

  const handleTabClick = (name, index) => {
    setActiveTab(name);
    const scrollAmount =
      mainTabSectionRef.current.querySelector(`#${name}`).clientWidth * index;
    mainTabSectionRef.current.scrollLeft = scrollAmount;
  };

  const tabs = [
    { name: "about_me", label: "About Me" },
    { name: "experience", label: "Viral Edits" },
    { name: "skills", label: "Skills" },
    { name: "education", label: "Services" },
    { name: "awards", label: "Why Choose Us" },
  ];
  return (
    <section
      id="about"
      className="pt-[70px] md:pt-[116px] max-w-full overflow-hidden"
    >
      <div className="relative flex items-center justify-center w-full mx-auto theme-container h-fit">
        <img
          src="/assets/images/home-ten/about_shadow.png"
          alt=""
          className="absolute z-0 -right-24 lighting-hue"
        />
        <div className="relative z-10 grid grid-cols-3 gap-3 xl:grid-cols-12 gap-y-10">
          <div className="relative col-span-8">
            <h1 className="px-5 bg-white/10 border border-white/20 text-white font-medium rounded-[30px] w-fit">
              Our Process
            </h1>
            <h2 className="sm:text-48 text-24 font-semibold text-white mb-[42px] mt-[18px] w-full max-w-[795px]">
              Bring Real Business <br />
              Results Using Your Personal Brand
            </h2>
            <div className="max-w-[665px]">
              {/* <!-- menu  --> */}
              <div className="border border-white/10 rounded-[41px] p-[7px] flex justify-between flex-col sm:flex-row items-center">
                {tabs.map((tab, index) => (
                  <button
                    key={tab.name}
                    name={tab.name}
                    className={`relative flex items-center justify-center overflow-hidden text-white border rounded-full w-fit hover:text-main-black border-main-black/10 before:inline-block before:absolute before:z-0 before:w-full before:h-full before:bg-caribbean-green before:scale-x-0 group hover:before:scale-x-100 before:origin-right hover:before:origin-left before:transition-transform before:ease-out before:duration-300 h10-about-menu-btn tab_item ${
                      activeTab === tab.name ? "active-tab" : ""
                    }`}
                    onClick={() => handleTabClick(tab.name, index)}
                  >
                    <span className="relative z-10 flex items-center gap-2 px-5 py-2 text-base font-semibold pointer-events-none h-fit">
                      {tab.label}
                    </span>
                  </button>
                ))}
              </div>
              <div
                ref={mainTabSectionRef}
                className="max-w-[698px] h-[560px] md:h-[440px] overflow-y-scroll overflow-x-scroll flex transition-all duration-300 scroll-smooth relative no-scrollbar py-5 sm:py-10 max-h-fit main-tab-section w-full"
              >
                <div
                  id="about_me"
                  className="relative max-w-full min-w-full h-fit"
                >
                  <p className="text-dark-silver">
                    We help entrepreneurs and businesses with Done-For-You organic
                    content systems that generate leads on autopilot.
                  </p>
                  <div className="flex pt-10 gap-[100px] pb-10">
                    <div className="">
                      <h1 className="font-semibold text-18 text-caribbean-green">
                        Address
                      </h1>
                      <p className="font-medium text-white">
                        Prachir View, H#36/7/B/1, Shah Ali Bag,
                      </p>
                      <p className="font-medium text-white">
                        Dhan kheter mor, Dhaka 1216
                      </p>
                    </div>
                    <div className="">
                      <h1 className="font-semibold text-18 text-caribbean-green">
                        Contact
                      </h1>
                      <p className="font-medium text-white">contact@vdology.com</p>
                      <p className="font-medium text-white">+880 1710 618285</p>
                    </div>
                  </div>
                  <Link href="/services" className="pointer-events-auto">
                    <div className="home-two-btn-bg group bg-transparent border-white/10 py-[15px] w-fit before:bg-caribbean-green after:bg-caribbean-green hover:border-caribbean-green">
                      <span className="relative z-10 text-base font-semibold text-white transition-all duration-300 group-hover:text-main-black font-inter">
                        Contact Me
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
                          className="transition-all duration-300 group-hover:stroke-main-black stroke-main-black"
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
                <div id="experience" className="relative max-w-full min-w-full">
                  <div className="flex flex-col sm:flex-row justify-between gap-[30px]">
                    <div className="bg-[#1D1D1D] rounded-[10px] p-[30px] border border-white/10">
                      <div className="flex items-center gap-2 h-fit text-caribbean-green">
                        <svg
                          width="16"
                          height="18"
                          viewBox="0 0 16 18"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M1 6.2002C1 3.99106 2.79086 2.2002 5 2.2002H11.4C13.6091 2.2002 15.4 3.99106 15.4 6.2002V13.0002C15.4 15.2093 13.6091 17.0002 11.4 17.0002H5C2.79086 17.0002 1 15.2093 1 13.0002V6.2002Z"
                            stroke="currentColor"
                          />
                          <path
                            d="M1 6.59961H15.4"
                            stroke="currentColor"
                            strokeLinecap="round"
                          />
                          <path
                            d="M5 1L5 3.4"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M11.4004 1V3.4"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <ellipse
                            cx="8.20039"
                            cy="11.3996"
                            rx="0.8"
                            ry="0.8"
                            fill="currentColor"
                          />
                          <ellipse
                            cx="11.3996"
                            cy="11.3996"
                            rx="0.8"
                            ry="0.8"
                            fill="currentColor"
                          />
                          <ellipse
                            cx="4.99922"
                            cy="11.3996"
                            rx="0.8"
                            ry="0.8"
                            fill="currentColor"
                          />
                        </svg>
                        <span>Ideation</span>
                      </div>
                      <h1 className="font-semibold text-white text-18">
                        Idea Analysis
                      </h1>                     
                      <p className="text-dark-silver">
                        We analyze your ideas using our expertise and current
                        industry trends to ensure high impact.
                      </p>
                    </div>
                    <div className="bg-[#1D1D1D] rounded-[10px] p-[30px] border border-white/10">
                      <div className="flex items-center gap-2 h-fit text-caribbean-green">
                        <svg
                          width="16"
                          height="18"
                          viewBox="0 0 16 18"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M1 6.2002C1 3.99106 2.79086 2.2002 5 2.2002H11.4C13.6091 2.2002 15.4 3.99106 15.4 6.2002V13.0002C15.4 15.2093 13.6091 17.0002 11.4 17.0002H5C2.79086 17.0002 1 15.2093 1 13.0002V6.2002Z"
                            stroke="currentColor"
                          />
                          <path
                            d="M1 6.59961H15.4"
                            stroke="currentColor"
                            strokeLinecap="round"
                          />
                          <path
                            d="M5 1L5 3.4"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M11.4004 1V3.4"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <ellipse
                            cx="8.20039"
                            cy="11.3996"
                            rx="0.8"
                            ry="0.8"
                            fill="currentColor"
                          />
                          <ellipse
                            cx="11.3996"
                            cy="11.3996"
                            rx="0.8"
                            ry="0.8"
                            fill="currentColor"
                          />
                          <ellipse
                            cx="4.99922"
                            cy="11.3996"
                            rx="0.8"
                            ry="0.8"
                            fill="currentColor"
                          />
                        </svg>
                        <span>Scripting</span>
                      </div>
                      <h1 className="font-semibold text-white text-18">
                        Writing Content
                      </h1>
                      <p className="text-dark-silver">
                        We craft strong scripts with algorithm-friendly hooks
                        to boost reach and viewer retention rates.
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col sm:flex-row justify-between pt-3 gap-[30px]">
                    <div className="bg-[#1D1D1D] rounded-[10px] p-[30px] border border-white/10">
                      <div className="flex items-center gap-2 h-fit text-caribbean-green">
                        <svg
                          width="16"
                          height="18"
                          viewBox="0 0 16 18"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M1 6.2002C1 3.99106 2.79086 2.2002 5 2.2002H11.4C13.6091 2.2002 15.4 3.99106 15.4 6.2002V13.0002C15.4 15.2093 13.6091 17.0002 11.4 17.0002H5C2.79086 17.0002 1 15.2093 1 13.0002V6.2002Z"
                            stroke="currentColor"
                          />
                          <path
                            d="M1 6.59961H15.4"
                            stroke="currentColor"
                            strokeLinecap="round"
                          />
                          <path
                            d="M5 1L5 3.4"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M11.4004 1V3.4"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <ellipse
                            cx="8.20039"
                            cy="11.3996"
                            rx="0.8"
                            ry="0.8"
                            fill="currentColor"
                          />
                          <ellipse
                            cx="11.3996"
                            cy="11.3996"
                            rx="0.8"
                            ry="0.8"
                            fill="currentColor"
                          />
                          <ellipse
                            cx="4.99922"
                            cy="11.3996"
                            rx="0.8"
                            ry="0.8"
                            fill="currentColor"
                          />
                        </svg>
                        <span>Editing</span>
                      </div>
                      <h1 className="font-semibold text-white text-18">
                        Editing the Video
                      </h1>
                      <p className="text-dark-silver">
                        We use pro-level tools and editing techniques to deliver
                        the most polished, high-quality content.
                      </p>
                    </div>
                    <div className="bg-[#1D1D1D] rounded-[10px] p-[30px] border border-white/10">
                      <div className="flex items-center gap-2 h-fit text-caribbean-green">
                        <svg
                          width="16"
                          height="18"
                          viewBox="0 0 16 18"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M1 6.2002C1 3.99106 2.79086 2.2002 5 2.2002H11.4C13.6091 2.2002 15.4 3.99106 15.4 6.2002V13.0002C15.4 15.2093 13.6091 17.0002 11.4 17.0002H5C2.79086 17.0002 1 15.2093 1 13.0002V6.2002Z"
                            stroke="currentColor"
                          />
                          <path
                            d="M1 6.59961H15.4"
                            stroke="currentColor"
                            strokeLinecap="round"
                          />
                          <path
                            d="M5 1L5 3.4"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M11.4004 1V3.4"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <ellipse
                            cx="8.20039"
                            cy="11.3996"
                            rx="0.8"
                            ry="0.8"
                            fill="currentColor"
                          />
                          <ellipse
                            cx="11.3996"
                            cy="11.3996"
                            rx="0.8"
                            ry="0.8"
                            fill="currentColor"
                          />
                          <ellipse
                            cx="4.99922"
                            cy="11.3996"
                            rx="0.8"
                            ry="0.8"
                            fill="currentColor"
                          />
                        </svg>
                        <span>Thumbnail</span>
                      </div>
                      <h1 className="font-semibold text-white text-18">
                        Creating Thumbnail
                      </h1>
                      <p className="text-dark-silver">
                        We study top thumbnails in your niche and recreate
                        proven designs that drive better performance.
                      </p>
                    </div>
                  </div>
                </div>
                <div id="skills" className="relative max-w-full min-w-full">
                  <div className="flex w-full gap-[30px]">
                    <div className="w-full flex flex-col gap-[30px]">
                      <div className="w-full">
                        <div className="flex justify-between w-full text-white">
                          <p className="">Premiere Pro</p>
                          <p className="">95%</p>
                        </div>
                        <div className="w-full h-0.5 bg-white/20 relative before:block before:h-full before:w-[85%] before:bg-caribbean-green mt-3"></div>
                      </div>
                      <div className="w-full">
                        <div className="flex justify-between w-full text-white">
                          <p className="">Photoshop</p>
                          <p className="">75%</p>
                        </div>
                        <div className="w-full h-0.5 bg-white/20 relative before:block before:h-full before:w-[63%] before:bg-caribbean-green mt-3"></div>
                      </div>
                      <div className="w-full">
                        <div className="flex justify-between w-full text-white">
                          <p className="">After Effects</p>
                          <p className="">90%</p>
                        </div>
                        <div className="w-full h-0.5 bg-white/20 relative before:block before:h-full before:w-[88%] before:bg-caribbean-green mt-3"></div>
                      </div>
                      <div className="w-full">
                        <div className="flex justify-between w-full text-white">
                          <p className="">Adobe Illustrator</p>
                          <p className="">76%</p>
                        </div>
                        <div className="w-full h-0.5 bg-white/20 relative before:block before:h-full before:w-[76%] before:bg-caribbean-green mt-3"></div>
                      </div>
                    </div>
                    <div className="w-full flex flex-col gap-[30px]">
                      <div className="w-full">
                        <div className="flex justify-between w-full text-white">
                          <p className="">Wireframe</p>
                          <p className="">81%</p>
                        </div>
                        <div className="w-full h-0.5 bg-white/20 relative before:block before:h-full before:w-[81%] before:bg-caribbean-green mt-3"></div>
                      </div>
                      <div className="w-full">
                        <div className="flex justify-between w-full text-white">
                          <p className="">CapCut</p>
                          <p className="">72%</p>
                        </div>
                        <div className="w-full h-0.5 bg-white/20 relative before:block before:h-full before:w-[72%] before:bg-caribbean-green mt-3"></div>
                      </div>
                      <div className="w-full">
                        <div className="flex justify-between w-full text-white">
                          <p className="">Blender</p>
                          <p className="">45%</p>
                        </div>
                        <div className="w-full h-0.5 bg-white/20 relative before:block before:h-full before:w-[45%] before:bg-caribbean-green mt-3"></div>
                      </div>
                      <div className="w-full">
                        <div className="flex justify-between w-full text-white">
                          <p className="">Adobe Animate</p>
                          <p className="">55%</p>
                        </div>
                        <div className="w-full h-0.5 bg-white/20 relative before:block before:h-full before:w-[55%] before:bg-caribbean-green mt-3"></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div id="education" className="relative max-w-full min-w-full">
                  <div className="flex flex-col sm:flex-row justify-between gap-[30px]">
                    <div className="bg-[#1D1D1D] rounded-[10px] p-[30px] border border-white/10">
                      <div className="flex items-center gap-2 h-fit text-caribbean-green">                       
                      </div>
                      <h1 className="font-semibold text-white text-18">
                        Youtube Videos
                      </h1>
                      <p className="text-dark-silver">
                        Grow a personal brand in any niche using our creative
                        and trendy video edits.
                      </p>
                    </div>
                    <div className="bg-[#1D1D1D] rounded-[10px] p-[30px] border border-white/10">
                      <div className="flex items-center gap-2 h-fit text-caribbean-green">                       
                      </div>
                      <h1 className="font-semibold text-white text-18">
                        Podcast Editing
                      </h1>
                      <p className="text-dark-silver">
                        Organic podcast content helps build trust and
                        gain credibility with viewers.
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col sm:flex-row justify-between pt-3 gap-[30px]">
                    <div className="bg-[#1D1D1D] rounded-[10px] p-[30px] border border-white/10">
                      <div className="flex items-center gap-2 h-fit text-caribbean-green">                       
                      </div>
                      <h1 className="font-semibold text-white text-18">
                        Short Form videos
                      </h1>
                      <p className="text-dark-silver">
                        Short top-of-funnel videos made for Instagram
                        Reels and TikTok engagement.
                      </p>
                    </div>
                    <div className="bg-[#1D1D1D] rounded-[10px] p-[30px] border border-white/10">
                      <div className="flex items-center gap-2 h-fit text-caribbean-green">                        
                      </div>
                      <h1 className="font-semibold text-white text-18">
                        Ad Creatives & VSLs
                      </h1>
                      <p className="text-dark-silver">
                        Create dynamic content that boosts leads and
                        converts fast with paid ads.
                      </p>
                    </div>
                  </div>
                </div>
                <div id="awards" className="relative max-w-full min-w-full">
                  <div className="flex flex-col sm:flex-row justify-between gap-[30px]">
                    <div className="bg-[#1D1D1D] rounded-[10px] p-[30px] border border-white/10 w-full">
                      <div className="flex items-center gap-2 h-fit text-caribbean-green">
                      </div>
                      <h1 className="font-semibold text-white text-18">
                        In house team of 15+ Experts
                      </h1>
                    </div>
                    <div className="bg-[#1D1D1D] rounded-[10px] p-[30px] border border-white/10 w-full">
                      <div className="flex items-center gap-2 h-fit text-caribbean-green">                       
                      </div>
                      <h1 className="font-semibold text-white text-18">
                        Experience with 300+ Clients
                      </h1>
                    </div>
                  </div>
                  <div className="flex flex-col sm:flex-row justify-between pt-3 gap-[30px]">
                    <div className="bg-[#1D1D1D] rounded-[10px] p-[30px] border border-white/10 w-full">
                      <div className="flex items-center gap-2 h-fit text-caribbean-green">                        
                      </div>
                      <h1 className="font-semibold text-white text-18">
                        Free 1-on- 1 Consultancy
                      </h1>
                    </div>
                    <div className="bg-[#1D1D1D] rounded-[10px] p-[30px] border border-white/10 w-full">
                      <div className="flex items-center gap-2 h-fit text-caribbean-green">                       
                      </div>
                      <h1 className="font-semibold text-white text-18">
                        24/7 Support, Anytime You Need Us
                      </h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <br />
            <h1 className="px-5 bg-white/10 border border-white/20 text-white font-medium rounded-[30px] w-fit">
              Feedback
            </h1>
            <h2 className="sm:text-48 text-24 font-semibold text-white mb-[42px] mt-[18px] w-full max-w-[795px]">
              How we <br />
              Benefit Our Clients
            </h2>
          </div>
          <div className="col-span-4 h-fit">
            <img
              src="/assets/images/home-ten/h10-about-img.png"
              alt=""
              className=""
            />
          </div>
        </div>
      </div>
      <div className="max-w-[1780px] w-full grid grid-cols-4 sm:grid-cols-8 lg:grid-cols-12 mx-auto gap-[30px] my-10 px-5 lg:px-0">
        <div className="col-span-4">
          <img
            src="/assets/images/home-ten/pp-1.png"
            alt=""
            className="object-cover max-w-full"
          />
          {/* <p className="font-semibold text-[#C3C3C3] mt-5">Product Design</p>
          <h1 className="mt-1 font-semibold text-white text-24">
            Mobile Application Design
          </h1> */}
        </div>
        <div className="col-span-4">
          <img
            src="/assets/images/home-ten/pp-2.png"
            alt=""
            className="object-cover max-w-full"
          />
          {/* <p className="font-semibold text-[#C3C3C3] mt-5">Product Design</p>
          <h1 className="mt-1 font-semibold text-white text-24">
            Mobile Application Design
          </h1> */}
        </div>
        <div className="col-span-4">
          <img
            src="/assets/images/home-ten/pp-3.png"
            alt=""
            className="object-cover max-w-full"
          />
          {/* <p className="font-semibold text-[#C3C3C3] mt-5">Product Design</p>
          <h1 className="mt-1 font-semibold text-white text-24">
            Mobile Application Design
          </h1> */}
        </div>
      </div>
    </section>
  );
}
