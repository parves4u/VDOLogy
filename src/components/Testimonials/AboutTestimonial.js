import React from "react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Quote, ArrowRight, ArrowLeft } from "lucide-react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// --- Data (Clean & Organized) ---
const testimonials = [
  {
    id: 1,
    name: "Joseph Montemorano",
    role: "CEO & Founder",
    image: "/assets/images/about/testimonial-1.webp",
    text: "Parves Sikder is an outstanding video editor! His creativity, precision, and fast turnaround truly impressed me. Every project comes out professional and engaging. Highly recommend his services!",
  },
  {
    id: 2,
    name: "Arsalan Rabbanian",
    role: "Marketing Director",
    image: "/assets/images/about/testimonial-2.webp",
    text: "Working with Parves Sikder was amazing! His editing skills brought our vision to life perfectly. Professional, talented, and efficient—definitely my go-to editor from now on!",
  },
  {
    id: 3,
    name: "Matthew C. Lansberry",
    role: "Creative Lead",
    image: "/assets/images/about/testimonial-3.webp",
    text: "Parves is a top-tier video editor with an eye for detail and storytelling. His edits are clean, creative, and always delivered on time. A pleasure to work with every time!",
  },
];

export default function TestimonialSection() {
  const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 1,
    spaceBetween: 40,
    loop: true,
    speed: 1200,
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".custom-pagination",
      clickable: true,
      bulletClass: "swiper-pagination-bullet bg-white/20 w-3 h-3 mx-1 rounded-full transition-all duration-300 hover:bg-caribbean-green cursor-pointer",
      bulletActiveClass: "!bg-caribbean-green !w-8",
    },
    navigation: {
      nextEl: ".custom-next",
      prevEl: ".custom-prev",
    },
  };

  return (
    <section className="relative py-20 md:py-32 bg-main-black overflow-hidden">
      
      {/* --- Background Elements --- */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-caribbean-green/5 rounded-full blur-[150px] pointer-events-none"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        
        {/* --- Header --- */}
        <div className="text-center mb-16" data-aos="fade-up">
          <div className="inline-block px-4 py-1.5 rounded-full border border-caribbean-green/30 bg-caribbean-green/10 text-caribbean-green text-sm font-medium mb-4">
            Client Feedback
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight">
            What Our Customers <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-caribbean-green to-emerald-400">
              Are Saying
            </span>
          </h2>
        </div>

        {/* --- Slider Container --- */}
        <div className="max-w-4xl mx-auto relative">
          
          <Swiper {...swiperOptions} className="pb-12">
            {testimonials.map((item) => (
              <SwiperSlide key={item.id}>
                <div className="flex flex-col items-center text-center p-6">
                  
                  {/* Quote Icon */}
                  <div className="mb-8 relative">
                    <div className="absolute inset-0 bg-caribbean-green blur-xl opacity-30 rounded-full"></div>
                    <div className="relative bg-[#111] border border-white/10 w-16 h-16 rounded-full flex items-center justify-center text-caribbean-green">
                      <Quote size={32} fill="currentColor" className="opacity-80" />
                    </div>
                  </div>

                  {/* Testimonial Text */}
                  <p className="text-xl md:text-2xl text-white font-medium leading-relaxed max-w-3xl mb-10 italic">
                    "{item.text}"
                  </p>

                  {/* User Profile */}
                  <div className="flex items-center gap-4 border border-white/10 bg-white/5 pr-6 pl-2 py-2 rounded-full backdrop-blur-md">
                    <div className="w-12 h-12 rounded-full p-[2px] bg-gradient-to-r from-caribbean-green to-blue-500">
                      <img 
                        src={item.image} 
                        alt={item.name} 
                        className="w-full h-full object-cover rounded-full border-2 border-black" 
                      />
                    </div>
                    <div className="text-left">
                      <h4 className="text-white font-bold text-base leading-none mb-1">{item.name}</h4>
                      <p className="text-gray-400 text-xs font-medium uppercase tracking-wider">{item.role}</p>
                    </div>
                  </div>

                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* --- Navigation Controls --- */}
          <div className="absolute top-1/2 -translate-y-1/2 w-full flex justify-between px-4 md:-mx-16 z-20 pointer-events-none">
            <button className="custom-prev pointer-events-auto w-12 h-12 rounded-full border border-white/10 bg-[#111]/80 hover:bg-caribbean-green hover:text-black hover:border-caribbean-green text-white flex items-center justify-center transition-all duration-300 group shadow-lg backdrop-blur-sm">
              <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
            </button>
            <button className="custom-next pointer-events-auto w-12 h-12 rounded-full border border-white/10 bg-[#111]/80 hover:bg-caribbean-green hover:text-black hover:border-caribbean-green text-white flex items-center justify-center transition-all duration-300 group shadow-lg backdrop-blur-sm">
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* --- Pagination --- */}
          <div className="custom-pagination flex justify-center mt-8 gap-2"></div>

        </div>
      </div>
    </section>
  );
}