import { ChevronLeft, ChevronRight } from "lucide-react";
import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

interface SlideData {
  id: number;
  src: string;
  alt: string;
  video?: string;
}

const slides: SlideData[] = [
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
    id: 3,
    video: "https://www.youtube.com/embed/olRWTk_M1wU?si=iLbCiJBrhyzoUmSe",
    src: "https://cdn.jsdelivr.net/gh/parves4u/images/Shorts-Video15.jpg",
    alt: "Thumbnail 3",
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
    id: 6,
    video: "https://www.youtube.com/embed/1hRf6Zmpvsc",
    src: "https://cdn.jsdelivr.net/gh/parves4u/images/Thumnail-5.jpg",
    alt: "Thumbnail 6",
  },
  {
    id: 7,
    video: "https://www.youtube.com/embed/VGBVW_rYHaA",
    src: "https://cdn.jsdelivr.net/gh/parves4u/images/Thumnail-6.jpg",
    alt: "Thumbnail 7",
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
    id: 10,
    video: "https://www.youtube.com/embed/Rgqdtxrjj-o",
    src: "https://cdn.jsdelivr.net/gh/parves4u/images/Thumnail-9.jpg",
    alt: "Thumbnail 10",
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
    id: 13,
    video: "https://www.youtube.com/embed/H0VXWkutPoY",
    src: "https://cdn.jsdelivr.net/gh/parves4u/images/Thumnail-12.jpg",
    alt: "Thumbnail 13",
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
  {
    id: 16,
    video: "https://www.youtube.com/embed/_8EUeUuYRkU",
    src: "https://cdn.jsdelivr.net/gh/parves4u/images/Thumnail-15.jpg",
    alt: "Thumbnail 16",
  },
  {
    id: 17,
    video: "https://www.youtube.com/embed/5EdzIKF_PRE",
    src: "https://cdn.jsdelivr.net/gh/parves4u/images/Thumnail-16.jpg",
    alt: "Thumbnail 17",
  },
];

const NextArrow = ({ onClick }: { onClick?: () => void }) => (
  <div
    className="absolute bg-gradient-to-r from-caribbean-green to-sky-700 text-white h-12 w-12 flex justify-center items-center top-1/2 md:flex -translate-y-1/2 lg:-right-14 -right-1 rounded-full cursor-pointer z-10"
    onClick={onClick}
  >
    <ChevronRight className="size-8 text-white" />
  </div>
);

const PrevArrow = ({ onClick }: { onClick?: () => void }) => (
  <div
    className="absolute bg-gradient-to-r from-caribbean-green to-sky-700 text-white h-12 w-12 flex justify-center items-center top-1/2 md:flex -translate-y-1/2 lg:-left-12 -left-1 z-30 rounded-full cursor-pointer"
    onClick={onClick}
  >
    <ChevronLeft className="size-8 text-white" />
  </div>
);

const SliderSection: React.FC = () => {
  const [activeVideoId, setActiveVideoId] = useState<number | null>(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    centerMode: true,
    variableWidth: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: () => setActiveVideoId(null),
    responsive: [
      {
        breakpoint: 768, // Mobile devices (adjust as needed)
        settings: {
          slidesToShow: 1,
          centerMode: false, // Disable centerMode on mobile for better control
          variableWidth: false, // Disable variableWidth to ensure single slide
          centerPadding: "0px", // Remove padding to fit one slide
        },
      },
      {
        breakpoint: 1024, // Tablets (optional, adjust as needed)
        settings: {
          slidesToShow: 1,
          centerMode: true,
          variableWidth: true,
          centerPadding: "20px", // Adjust padding for tablets
        },
      },
    ],
  };

  const handleSlideClick = (id: number) => {
    setActiveVideoId((prevId) => (prevId === id ? null : id));
  };

  return (
    <div className="relative max-w-4xl mx-auto px-4 lg:px-0 mt-20 mb-20">
      <h1
        className="px-5 py-2 bg-white/10 border border-white/20 text-white font-medium rounded-full w-fit mx-auto"
        id="RecentProjects"
      >
        Recent Projects
      </h1>
      <div className="w-full flex justify-center items-center">
        <p className="xl:w-full w-full font-inter text-lg md:text-2xl font-medium text-center text-white mt-6 mb-12">
          We align with business goals to deliver premier services in video and
          audio editing, 2D/3D animation, graphic design, digital marketing, web
          development, and podcasting.
        </p>
      </div>
      <Slider {...settings} className="variable-width">
        {slides.map((slide) => (
          <div className="px-2 h-80" key={slide.id}>
            <div
              className="relative slide-card h-full rounded-lg overflow-hidden mx-auto transition-all duration-500"
              onClick={() => handleSlideClick(slide.id)}
            >
              <img
                src={slide.src}
                alt={slide.alt}
                loading="lazy"
                className={`rounded-lg size-full object-cover cursor-pointer ${
                  activeVideoId === slide.id ? "opacity-0" : "opacity-100"
                }`}
              />
              {slide.video && activeVideoId === slide.id && (
                <div className="absolute inset-0 rounded-lg overflow-hidden">
                  <iframe
                    className="w-full h-full"
                    width="560"
                    height="315"
                    src={`${slide.video}?autoplay=1`}
                    title="YouTube video player"
                    loading="lazy"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  ></iframe>
                </div>
              )}
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SliderSection;
