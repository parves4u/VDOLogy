import React, { useState } from "react";
import Slider from "react-slick";
import { ChevronLeft, ChevronRight, Play } from "lucide-react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// ==========================================
// ✅ ডেটা সেকশন আপডেট (টাইটেল ও ক্যাটাগরি যোগ)
// ==========================================
const slides = [
  {
    id: 1,
    video: "https://www.youtube.com/embed/jTiVAVyvuqc?si=4EfWdDOVmp58lsDe",
    src: "https://cdn.jsdelivr.net/gh/parves4u/images/Thumnail-2.jpg",
    alt: "Thumbnail 1",
    title: "Cinematic Travel Vlog", // নতুন টাইটেল
    category: "Video Editing",    // নতুন ক্যাটাগরি
  },
  {
    id: 2,
    video: "https://www.youtube.com/embed/WPthDgMAO4s?si=7-JWgGdoDOvL2W3H",
    src: "https://cdn.jsdelivr.net/gh/parves4u/images/thumbnail-1.jpg",
    alt: "Thumbnail 2",
    title: "Corporate Brand Commercial",
    category: "Video Ads",
  },
  {
    id: 4,
    video: "https://www.youtube.com/embed/0sXYuIHPVik?si=-sNte-QZTeCtZCK1",
    src: "https://cdn.jsdelivr.net/gh/parves4u/images/Thumnail-3.jpg",
    alt: "Thumbnail 4",
    title: "Dynamic Product Showcase",
    category: "Motion Graphics",
  },
  {
    id: 5,
    video: "https://www.youtube.com/embed/aeIi4Mtf8Nw?si=5qrNynMSsSrk96z6",
    src: "https://cdn.jsdelivr.net/gh/parves4u/images/Thumnail-4.jpg",
    alt: "Thumbnail 5",
    title: "Fitness Motivation Reel",
    category: "Short Form",
  },
  {
    id: 8,
    video: "https://www.youtube.com/embed/LiuVHTSh6zc?si=Boy6mxAXYf5a5FFX",
    src: "https://cdn.jsdelivr.net/gh/parves4u/images/Thumnail-7.jpg",
    alt: "Thumbnail 8",
    title: "Real Estate Luxury Tour",
    category: "Video Editing",
  },
  {
    id: 9,
    video: "https://www.youtube.com/embed/m8mbmd2jpCg?si=pSUxXrGScwzSnC3W",
    src: "https://cdn.jsdelivr.net/gh/parves4u/images/Thumnail-8.jpg",
    alt: "Thumbnail 9",
    title: "Tech Review & Unboxing",
    category: "YouTube Content",
  },
  {
    id: 11,
    video: "https://www.youtube.com/embed/Gh0ktaHVZTs?si=NxSgSlExkCLt1YOa",
    src: "https://cdn.jsdelivr.net/gh/parves4u/images/Thumnail-10.jpg",
    alt: "Thumbnail 11",
    title: "Podcast Video Version",
    category: "Podcast",
  },
  {
    id: 12,
    video: "https://www.youtube.com/embed/Y8AzGztB13A?si=UgCH4zr0a_WjEq85",
    src: "https://cdn.jsdelivr.net/gh/parves4u/images/Thumnail-11.jpg",
    alt: "Thumbnail 12",
    title: "Event Highlights Promo",
    category: "Video Editing",
  },
  {
    id: 14,
    video: "https://www.youtube.com/embed/HOTQT-44FMk?si=fNqhOLulKvf7U2KY",
    src: "https://cdn.jsdelivr.net/gh/parves4u/images/Thumnail-13.jpg",
    alt: "Thumbnail 14",
    title: "App Feature Explainer",
    category: "2D Animation",
  },
  {
    id: 15,
    video: "https://www.youtube.com/embed/no7jMdC1E_o?si=pT37u-6JK_uoytVx",
    src: "https://cdn.jsdelivr.net/gh/parves4u/images/Thumnail-14.jpg",
    alt: "Thumbnail 15",
    title: "Gaming Channel Intro",
    category: "Motion Graphics",
  },
];

// কাস্টম নেক্সট অ্যারো বাটন (লুকানো থাকবে মোবাইলে)
const NextArrow = ({ onClick }) => (
  <div
    className="hidden md:flex absolute top-1/2 right-2 md:-right-8 lg:-right-12 -translate-y-1/2 cursor-pointer z-30 group"
    onClick={onClick}
  >
    <div className="w-12 h-12 flex items-center justify-center rounded-full bg-main-black/60 backdrop-blur-xl border border-white/10 group-hover:bg-caribbean-green group-hover:border-caribbean-green transition-all duration-300 shadow-xl hover:scale-110">
      <ChevronRight className="w-6 h-6 text-white group-hover:text-black transition-colors" />
    </div>
  </div>
);

// কাস্টম প্রিভিয়াস অ্যারো বাটন (লুকানো থাকবে মোবাইলে)
const PrevArrow = ({ onClick }) => (
  <div
    className="hidden md:flex absolute top-1/2 left-2 md:-left-8 lg:-left-12 -translate-y-1/2 cursor-pointer z-30 group"
    onClick={onClick}
  >
    <div className="w-12 h-12 flex items-center justify-center rounded-full bg-main-black/60 backdrop-blur-xl border border-white/10 group-hover:bg-caribbean-green group-hover:border-caribbean-green transition-all duration-300 shadow-xl hover:scale-110">
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
    speed: 600,
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
          centerPadding: "40px", // মোবাইলে সাইডের ভিডিও আরেকটু বেশি দেখা যাবে
          arrows: false,
          dots: true, // ✅ মোবাইলের জন্য ডটস চালু করা হয়েছে
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
      className="relative w-full max-w-[1400px] mx-auto px-0 md:px-4 py-20 md:py-28 scroll-mt-24 overflow-hidden" 
    >
      
      {/* হেডার সেকশন (এটি আপনার আগের কোডেও ছিল, এটি রাখা হয়েছে যাতে উপরের অংশ খালি না লাগে) */}
      <div className="text-center mb-12 md:mb-20 px-4" data-aos="fade-up">
        <span className="px-5 py-2 bg-white/5 border border-white/10 text-caribbean-green font-bold text-sm tracking-widest uppercase rounded-full inline-block mb-4 shadow-[0_0_15px_rgba(0,223,142,0.1)]">
          Recent Projects
        </span>
        <h2 className="text-3xl md:text-5xl font-extrabold text-white leading-tight mb-4">
          Visuals That <span className="text-transparent bg-clip-text bg-gradient-to-r from-caribbean-green to-emerald-400">Convert</span>
        </h2>
        <p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto">
          We align with business goals to deliver premier services in video editing, 2D/3D animation, and graphic design.
        </p>
      </div>

      {/* স্লাইডার এরিয়া */}
      {/* ✅ pb-12 যোগ করা হয়েছে যাতে মোবাইলে ডটসগুলো ভিডিওর উপরে না উঠে যায় */}
      <div className="slider-container relative px-0 md:px-10 pb-12 md:pb-0"> 
        <Slider {...settings}>
          {slides.map((slide) => (
            <div key={slide.id} className="py-8 md:py-16 px-3 outline-none">
              
              <div className="flex flex-col h-full">
                {/* ভিডিও কন্টেইনার */}
                <div
                    className={`relative rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl transition-all duration-500 ease-out aspect-video group bg-black border flex-shrink-0
                    ${activeVideoId === slide.id ? "border-caribbean-green/50 shadow-[0_0_30px_rgba(0,223,142,0.3)]" : "border-white/5"}
                    `}
                    onClick={() => handleSlideClick(slide.id)}
                >
                    {/* ইমেজ (থাম্বনেইল) */}
                    <div className={`relative w-full h-full ${activeVideoId === slide.id ? "hidden" : "block"}`}>
                    <img
                        src={slide.src}
                        alt={slide.alt}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                    />
                    
                    {/* গ্রাডিয়েন্ট শেড */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent opacity-80"></div>
                    
                    {/* কাস্টম প্লে বাটন */}
                    <div className="absolute inset-0 flex items-center justify-center z-10">
                        <div className="w-14 h-14 md:w-20 md:h-20 bg-black/40 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20 group-hover:scale-110 group-hover:bg-caribbean-green group-hover:border-caribbean-green transition-all duration-300 shadow-[0_0_20px_rgba(0,0,0,0.5)] cursor-pointer">
                        <Play className="w-5 h-5 md:w-8 md:h-8 text-white fill-white ml-1 group-hover:text-black group-hover:fill-black transition-colors" />
                        </div>
                    </div>
                    </div>

                    {/* ইউটিউব ভিডিও প্লেয়ার */}
                    {slide.video && activeVideoId === slide.id && (
                    <iframe
                        className="w-full h-full absolute inset-0"
                        src={`${slide.video}?autoplay=1&rel=0&modestbranding=1`}
                        title="Project Video"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                    )}
                </div>

                {/* ✅ নতুন টেক্সট এরিয়া (টাইটেল ও ক্যাটাগরি) */}
                {/* slick-center ক্লাসের মাধ্যমেই কেবল মাঝখানের স্লাইডের টেক্সট ভিজিবল হবে */}
                <div className="text-center mt-6 transition-all duration-500 opacity-0 transform translate-y-4 group-[.slick-center]:opacity-100 group-[.slick-center]:translate-y-0 pointer-events-none group-[.slick-center]:pointer-events-auto">
                  <h3 className="text-white font-bold text-xl md:text-2xl mb-2 line-clamp-1">{slide.title}</h3>
                  <span className="text-caribbean-green text-sm font-bold uppercase tracking-wider">{slide.category}</span>
                </div>
              </div>

            </div>
          ))}
        </Slider>
      </div>

      {/* কাস্টম CSS */}
      <style jsx>{`
        /* ডিফল্ট সাইড স্লাইড (ডেস্কটপ) */
        .slick-slide > div {
          transform: scale(0.85); 
          transition: transform 0.6s cubic-bezier(0.25, 1, 0.5, 1), opacity 0.6s ease;
          opacity: 0.4;
          filter: grayscale(80%) blur(1px);
        }

        /* ডেক্সটপ ভিউতে সেন্টারের স্লাইড */
        .slick-center > div {
          transform: scale(1.35); 
          opacity: 1;
          filter: grayscale(0%) blur(0);
          z-index: 10;
          position: relative;
        }

        /* ====================================================
           ✅ MOBILE RESPONSIVENESS & DOTS STYLING
        ==================================================== */
        @media (max-width: 768px) {
          
          .slick-slide > div {
            transform: scale(0.92);
            opacity: 0.6;
            filter: grayscale(50%) blur(0px);
          }
          
          /* মোবাইল ভিউতে সেন্টারের স্লাইড */
          .slick-center > div {
            transform: scale(1.05);
            opacity: 1;
            filter: grayscale(0%) blur(0);
          }

          /* ✅ Slick Dots Styling (মোবাইলের জন্য) */
          .slick-dots {
            bottom: -20px; /* ভিডিওর নিচে পজিশন */
          }
          .slick-dots li {
            margin: 0 4px;
          }
          .slick-dots li button:before {
            font-size: 10px;
            color: white;
            opacity: 0.3;
            transition: all 0.3s ease;
          }
          .slick-dots li.slick-active button:before {
            color: #00DF8E; /* Caribbean Green */
            opacity: 1;
            font-size: 12px;
          }
        }
      `}</style>
    </div>
  );
};

export default SliderSection;