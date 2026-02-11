import React, { useState } from "react";
import Slider from "react-slick";
import { ChevronLeft, ChevronRight, Play } from "lucide-react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// স্লাইড ডাটা
const slides = [
  {
    id: 1,
    video: "https://www.youtube.com/embed/jTiVAVyvuqc?si=4EfWdDOVmp58lsDe",
    src: "https://cdn.jsdelivr.net/gh/parves4u/images/Thumnail-2.jpg",
    alt: "Thumbnail 1",
  },
  {
    id: 2,
    video: "https://www.youtube.com/embed/WPthDgMAO4s?si=7-JWgGdoDOvL2W3H",
    src: "https://cdn.jsdelivr.net/gh/parves4u/images/thumbnail-1.jpg",
    alt: "Thumbnail 2",
  },
  {
    id: 4,
    video: "https://www.youtube.com/embed/0sXYuIHPVik?si=-sNte-QZTeCtZCK1",
    src: "https://cdn.jsdelivr.net/gh/parves4u/images/Thumnail-3.jpg",
    alt: "Thumbnail 4",
  },
  {
    id: 5,
    video: "https://www.youtube.com/embed/aeIi4Mtf8Nw?si=5qrNynMSsSrk96z6",
    src: "https://cdn.jsdelivr.net/gh/parves4u/images/Thumnail-4.jpg",
    alt: "Thumbnail 5",
  },
  {
    id: 8,
    video: "https://www.youtube.com/embed/LiuVHTSh6zc?si=Boy6mxAXYf5a5FFX",
    src: "https://cdn.jsdelivr.net/gh/parves4u/images/Thumnail-7.jpg",
    alt: "Thumbnail 8",
  },
  {
    id: 9,
    video: "https://www.youtube.com/embed/m8mbmd2jpCg?si=pSUxXrGScwzSnC3W",
    src: "https://cdn.jsdelivr.net/gh/parves4u/images/Thumnail-8.jpg",
    alt: "Thumbnail 9",
  },
  {
    id: 11,
    video: "https://www.youtube.com/embed/Gh0ktaHVZTs?si=NxSgSlExkCLt1YOa",
    src: "https://cdn.jsdelivr.net/gh/parves4u/images/Thumnail-10.jpg",
    alt: "Thumbnail 11",
  },
  {
    id: 12,
    video: "https://www.youtube.com/embed/Y8AzGztB13A?si=UgCH4zr0a_WjEq85",
    src: "https://cdn.jsdelivr.net/gh/parves4u/images/Thumnail-11.jpg",
    alt: "Thumbnail 12",
  },
  {
    id: 14,
    video: "https://www.youtube.com/embed/HOTQT-44FMk?si=fNqhOLulKvf7U2KY",
    src: "https://cdn.jsdelivr.net/gh/parves4u/images/Thumnail-13.jpg",
    alt: "Thumbnail 14",
  },
  {
    id: 15,
    video: "https://www.youtube.com/embed/no7jMdC1E_o?si=pT37u-6JK_uoytVx",
    src: "https://cdn.jsdelivr.net/gh/parves4u/images/Thumnail-14.jpg",
    alt: "Thumbnail 15",
  },
];

// কাস্টম নেক্সট অ্যারো বাটন (ফিক্সড পজিশন)
const NextArrow = ({ onClick }) => (
  <div
    className="absolute top-1/2 right-2 md:-right-8 lg:-right-12 -translate-y-1/2 cursor-pointer z-30 group"
    onClick={onClick}
  >
    <div className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full bg-main-black/50 backdrop-blur-md border border-white/20 group-hover:bg-caribbean-green group-hover:border-caribbean-green transition-all duration-300 shadow-lg">
      <ChevronRight className="w-6 h-6 text-white group-hover:text-black transition-colors" />
    </div>
  </div>
);

// কাস্টম প্রিভিয়াস অ্যারো বাটন (ফিক্সড পজিশন)
const PrevArrow = ({ onClick }) => (
  <div
    className="absolute top-1/2 left-2 md:-left-8 lg:-left-12 -translate-y-1/2 cursor-pointer z-30 group"
    onClick={onClick}
  >
    <div className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full bg-main-black/50 backdrop-blur-md border border-white/20 group-hover:bg-caribbean-green group-hover:border-caribbean-green transition-all duration-300 shadow-lg">
      <ChevronLeft className="w-6 h-6 text-white group-hover:text-black transition-colors" />
    </div>
  </div>
);

const SliderSection = () => {
  const [activeVideoId, setActiveVideoId] = useState(null);

  // স্লাইডার সেটিংস
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "0px",
    slidesToShow: 3,
    speed: 500,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: () => setActiveVideoId(null),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          centerPadding: "0px",
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerPadding: "40px", // মোবাইলে সাইডে একটু জায়গা রাখা হয়েছে
        },
      },
    ],
  };

  const handleSlideClick = (id) => {
    setActiveVideoId((prevId) => (prevId === id ? null : id));
  };

  return (
    <div 
      id="RecentProjects" 
      className="relative w-full max-w-[1400px] mx-auto px-4 py-24 scroll-mt-24" // প্যাডিং একটু বাড়ানো হয়েছে
    >
      
      {/* হেডার সেকশন */}
      <div className="text-center mb-20">
        <span className="px-5 py-2 bg-white/10 border border-white/20 text-caribbean-green font-medium rounded-full inline-block mb-4">
          Recent Projects
        </span>
        <p className="text-white text-lg md:text-xl max-w-3xl mx-auto opacity-80">
          We align with business goals to deliver premier services in video and audio
          editing, 2D/3D animation, graphic design, and more.
        </p>
      </div>

      {/* স্লাইডার এরিয়া */}
      <div className="slider-container relative px-4 md:px-0"> 
        <Slider {...settings}>
          {slides.map((slide) => (
            // প্যাডিং এডজাস্টমেন্ট যাতে বড় স্কেলে কেটে না যায়
            <div key={slide.id} className="py-12 px-2 md:px-4 outline-none">
              <div
                className={`relative rounded-xl overflow-hidden shadow-2xl transition-all duration-500 ease-in-out aspect-video group bg-black border border-white/10
                  ${activeVideoId === slide.id ? "border-caribbean-green" : ""}
                `}
                onClick={() => handleSlideClick(slide.id)}
              >
                {/* ইমেজ (থাম্বনেইল) */}
                <div className={`relative w-full h-full ${activeVideoId === slide.id ? "hidden" : "block"}`}>
                  <img
                    src={slide.src}
                    alt={slide.alt}
                    className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity"
                  />
                  
                  {/* কাস্টম প্লে বাটন */}
                  <div className="absolute inset-0 flex items-center justify-center z-10">
                    <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/40 group-hover:scale-110 group-hover:bg-caribbean-green group-hover:border-caribbean-green transition-all duration-300 shadow-lg cursor-pointer">
                      <Play className="w-6 h-6 text-white fill-white ml-1 group-hover:text-black group-hover:fill-black transition-colors" />
                    </div>
                  </div>

                  {/* কালো শেড (Overlay) */}
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-all duration-300"></div>
                </div>

                {/* ইউটিউব ভিডিও প্লেয়ার */}
                {slide.video && activeVideoId === slide.id && (
                  <iframe
                    className="w-full h-full absolute inset-0"
                    src={`${slide.video}?autoplay=1`}
                    title="Project Video"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                )}
              </div>
            </div>
          ))}
        </Slider>
      </div>

      {/* কাস্টম CSS */}
      <style jsx>{`
        .slick-slide > div {
          transform: scale(0.85); /* সাইডের স্লাইডগুলো ছোট থাকবে */
          transition: transform 0.5s ease, opacity 0.5s ease;
          opacity: 0.4;
          filter: blur(1px);
        }

        /* ডেক্সটপ ভিউতে সেন্টারের স্লাইড বড় করা হয়েছে (1.4) */
        .slick-center > div {
          transform: scale(1.4); 
          opacity: 1;
          filter: blur(0);
          z-index: 10;
          position: relative;
          box-shadow: 0 20px 50px rgba(0,0,0,0.5); /* শ্যাডো যোগ করা হয়েছে */
        }

        @media (max-width: 768px) {
          .slick-slide > div {
            transform: scale(0.95);
            opacity: 0.5;
            filter: blur(0);
          }
          /* মোবাইল ভিউতে সেন্টারের স্লাইড বড় করা হয়েছে (1.15) */
          .slick-center > div {
            transform: scale(1.15);
          }
        }
        
        .slick-prev, .slick-next {
            z-index: 30;
        }
      `}</style>
    </div>
  );
};

export default SliderSection;