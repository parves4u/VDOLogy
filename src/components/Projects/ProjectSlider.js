

import React, { useRef, useState } from "react";
import {
  Autoplay,
  Navigation,
  Pagination,
  EffectCoverflow,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function ProjectSlider() {
  const swiperRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const swiperOptions = {
    modules: [Pagination, Autoplay, Navigation, EffectCoverflow],
    effect: "coverflow",
    grabCursor: true,
    slidesPerView: 1,
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 100,
      modifier: 2,
      slideShadows: false, // Disable shadows for all slides
    },
    keyboard: {
      enabled: true,
    },
    mousewheel: {
      thresholdDelta: 70,
    },
    spaceBetween: 5, // Reduced gap between slides
    loop: true,
    pagination: {
      el: ".h10-service-pagination",
      clickable: true,
    },
    autoplay: {
      delay: 2500,
    },
    navigation: {
      nextEl: ".h10-service-next",
      prevEl: ".h10-service-prev",
    },
    breakpoints: {
      1024: {
        slidesPerView: 2,
        spaceBetween: 5, // Slightly larger gap for larger screens
        autoplay: false,
        centeredSlides: true,
      },
    },
    onSlideChange: (swiper) => {
      setActiveIndex(swiper.realIndex);
      setIsVideoPlaying(false); // Reset video playing state on slide change
    },
  };

  // Image data for standard and shorts formats
  const images = [
    // Standard Images (16:9 aspect ratio)
    { 
      type: "standard", 
      src: "https://i.postimg.cc/8kRZDNwY/rec1.jpg", 
      title: "Standard Image 1",
      videoUrl: "#" 
    },
    { 
      type: "standard", 
      src: "https://i.postimg.cc/SRhV8vQV/rec2.jpg", 
      title: "Standard Image 2",
      videoUrl: "#" 
    },
    { 
      type: "standard", 
      src: "https://i.postimg.cc/nLN3VL6y/rec4.jpg", 
      title: "Standard Image 3",
      videoUrl: "#" 
    },

    // Shorts Images (9:16 aspect ratio)
    { 
      type: "short", 
      src: "https://i.postimg.cc/KjDf5DRb/rec3.png", 
      title: "Shorts Image 1",
      videoUrl: "#" 
    },
    { 
      type: "short", 
      src: "https://i.postimg.cc/sXSwMrzv/rec6.png", 
      title: "Shorts Image 2",
      videoUrl: "#" 
    },
    { 
      type: "short", 
      src: "https://i.postimg.cc/T3Y7CFV4/rec6.jpg", 
      title: "Shorts Image 3",
      videoUrl: "#" 
    },
  ];

  // Image dimensions
  const imageHeight = 452.5;

  return (
    <section
      id="RecentProjects"
      className="py-12 md:py-20 project-client-v-testimonial"
    >
      <div className="mx-auto 2xl:w-[1600px] w-full px-4 md:px-5">
        <h1 className="px-5 py-2 bg-white/10 border border-white/20 text-white font-medium rounded-[30px] w-fit mx-auto">
          Recent Projects
        </h1>
        <div className="w-full flex justify-center items-center">
          <p className="xl:w-[916px] w-full font-inter text-lg md:text-2xl font-medium text-center text-white mt-6 mb-12">
            We align with business goals to deliver premier services in video
            and audio editing, 2D/3D animation, graphic design, digital
            marketing, web development, and podcasting.
          </p>
        </div>
        <div className="w-full relative">
          {/* Navigation Arrows (Outside Carousel) */}
          <div className="absolute lg:flex hidden items-center w-full top-1/2 z-10 transform -translate-y-1/2">
            <div className="flex justify-between w-full px-20">
              <button className="h10-service-prev w-[54px] h-[54px] rounded-full bg-caribbean-green flex justify-center items-center">
                <svg
                  className="transform rotate-180"
                  width="22"
                  height="17"
                  viewBox="0 0 22 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13.25 15.2L20 8.45001M20 8.45001L13.25 1.70001M20 8.45001L2 8.45001"
                    stroke="#101828"
                    strokeWidth="2.7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>

              <button className="h10-service-next w-[54px] h-[54px] rounded-full bg-caribbean-green flex justify-center items-center">
                <svg
                  width="22"
                  height="17"
                  viewBox="0 0 22 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13.25 15.2L20 8.45001M20 8.45001L13.25 1.70001M20 8.45001L2 8.45001"
                    stroke="#101828"
                    strokeWidth="2.7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Carousel (Shrunk Width) */}
          <div className="h10-service-slider pt-4 md:pt-8 overflow-hidden w-[75%] mx-auto">
            <Swiper
              {...swiperOptions}
              ref={swiperRef}
              className="flex items-center justify-center"
            >
              {images.map((image, index) => {
                // Calculate width based on type
                const width = image.type === "short"
                  ? (9 / 14) * imageHeight // 9:16 aspect ratio for shorts
                  : (9 / 9) * imageHeight; // 16:9 aspect ratio for standard images

                return (
                  <SwiperSlide key={index} className="flex justify-center items-center">
                    <div
                      className="bg-transparent relative rounded-[12px] overflow-hidden mx-auto"
                      style={{
                        width: `${width}px`,
                        height: `${imageHeight}px`,
                        maxWidth: "100%"
                      }}
                    >
                      <div className="w-full h-full">
                        <img
                          src={image.src}
                          alt={image.title}
                          className="w-full h-full object-cover rounded-[12px]"
                        />
                        {activeIndex === index && (
                          <div className="absolute inset-0 flex items-center justify-center">
                            {!isVideoPlaying && (
                              <button
                                className="bg-white/50 rounded-full p-4 hover:bg-white/70 transition"
                                onClick={() => setIsVideoPlaying(true)}
                              >
                                <svg
                                  width="24"
                                  height="24"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M8 5V19L19 12L8 5Z"
                                    fill="black"
                                  />
                                </svg>
                              </button>
                            )}
                            {isVideoPlaying && (
                              <iframe
                                width="100%"
                                height="100%"
                                src={`${image.videoUrl}?autoplay=1`}
                                title={image.title}
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                              ></iframe>
                            )}
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="text-white text-center mt-4 px-2 max-w-xs mx-auto">
                      <p className="font-medium truncate">{image.title}</p>
                      <span className="text-sm text-gray-400 capitalize">{image.type} format</span>
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
            <div className="h10-service-pagination flex justify-center mt-8"></div>
          </div>
        </div>
      </div>
    </section>
  );
}



