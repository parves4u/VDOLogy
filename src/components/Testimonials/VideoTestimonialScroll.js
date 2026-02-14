import React, { useState } from "react";
import { Play, X } from "lucide-react";

// ✅ ডাটা লিস্ট
const testimonials = [
  {
    id: 1,
    name: "Joseph Montemorano",
    role: "Owner, ACE Digital Solutions",
    image: "https://cdn.jsdelivr.net/gh/parves4u/images/Testimonials.jpg",
    // 📱 Shorts Video
    videoUrl: "https://www.youtube.com/shorts/6lp3hxcaVaQ", 
  },
  {
    id: 2,
    name: "Christian Crenshaw",
    role: "Founder, Community Launch & Social Media Strategist",
    image: "https://cdn.jsdelivr.net/gh/parves4u/images/Testimonials2.jpg",
    // 💻 Standard Video
    videoUrl: "https://www.youtube.com/shorts/mKOervEADCE",
  },
  {
    id: 3,
    name: "Elizabeth",
    role: "Business Owner",
    image: "https://cdn.jsdelivr.net/gh/parves4u/images/Testimonials3.jpg",
    videoUrl: "https://www.youtube.com/shorts/phobTXBaJ1Q",
  },
  {
    id: 4,
    name: "Breanna Danielle",
    role: "Founder of them3method",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop",
    videoUrl: "https://www.youtube.com/watch?v=ScMzIvxBSi4",
  },
  {
    id: 5,
    name: "Alex Johnson",
    role: "Marketing Director",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1887&auto=format&fit=crop",
    videoUrl: "https://www.youtube.com/watch?v=ScMzIvxBSi4",
  },
];

export default function VideoTestimonialScroll() {
  // স্টেট: কোন ভিডিওটি এখন প্লে হচ্ছে
  const [activeVideo, setActiveVideo] = useState(null);

  // 🛠️ ভিডিও আইডি বের করার শক্তিশালী ফাংশন
  const getVideoId = (url) => {
    if (!url) return "";
    let videoId = "";
    
    // Shorts লিংক হ্যান্ডেল করা
    if (url.includes("shorts/")) {
        videoId = url.split("shorts/")[1];
    } 
    // ওয়াচ লিংক হ্যান্ডেল করা
    else if (url.includes("v=")) {
        videoId = url.split("v=")[1];
    } 
    // শর্ট ইউআরএল (youtu.be) হ্যান্ডেল করা
    else if (url.includes("youtu.be/")) {
        videoId = url.split("youtu.be/")[1];
    }

    // ক্লিনআপ (যদি আইডির পরে ? বা & থাকে)
    const ampersandPosition = videoId.indexOf('&');
    if (ampersandPosition !== -1) {
      videoId = videoId.substring(0, ampersandPosition);
    }
    const questionMarkPosition = videoId.indexOf('?');
    if (questionMarkPosition !== -1) {
      videoId = videoId.substring(0, questionMarkPosition);
    }
    
    return videoId;
  };

  // 🛠️ শর্টস ভিডিও কিনা চেক করা (প্লেয়ার সাইজ ঠিক করার জন্য)
  const isShorts = (url) => {
    if (!url) return false;
    return url.includes("shorts") || url.includes("reel");
  };

  return (
    <section className="py-20 bg-main-black relative">
      <div className="container mx-auto px-4 mb-12 text-center">
        <h1 className="px-5 py-2 bg-white/10 border border-white/20 text-caribbean-green font-medium rounded-[30px] w-fit mx-auto mb-4">
          Testimonials
        </h1>
        <h2 className="text-3xl md:text-5xl font-bold text-white">
          What Our Clients Say
        </h2>
        <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
          From viral edits to robust websites—hear from the global clients who trust VDOLogy with their brand.
        </p>
      </div>

      {/* Main Slider Container */}
      <div className="w-full max-w-[1600px] mx-auto relative overflow-hidden group">
        
        {/* Left Fade Gradient */}
        <div className="absolute left-0 top-0 h-full w-20 md:w-32 bg-gradient-to-r from-main-black to-transparent z-20 pointer-events-none"></div>
        
        {/* Right Fade Gradient */}
        <div className="absolute right-0 top-0 h-full w-20 md:w-32 bg-gradient-to-l from-main-black to-transparent z-20 pointer-events-none"></div>

        {/* Scrolling Content */}
        <div className="flex animate-marquee group-hover:[animation-play-state:paused] gap-6 px-4">
          
          {/* Loop data 4 times for smooth scroll */}
          {[...testimonials, ...testimonials, ...testimonials, ...testimonials].map((item, index) => (
            <div
              key={index}
              className="relative w-[260px] h-[420px] md:w-[280px] md:h-[480px] flex-shrink-0 rounded-2xl overflow-hidden border border-white/10 hover:border-caribbean-green transition-all duration-300 cursor-pointer shadow-lg group/card"
              onClick={() => setActiveVideo(item)} // ✅ ক্লিকে ভিডিও সেট হবে
            >
              {/* Background Image */}
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover/card:scale-110"
              />

              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80 group-hover/card:opacity-60 transition-opacity duration-300"></div>

              {/* Play Button Icon */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/50 hover:bg-caribbean-green hover:border-caribbean-green hover:scale-110 transition-all duration-300 z-30">
                 <Play className="w-6 h-6 text-white fill-white transition-colors" />
              </div>

              {/* Content at Bottom */}
              <div className="absolute bottom-0 left-0 w-full p-5 z-20 translate-y-2 group-hover/card:translate-y-0 transition-transform duration-300">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-caribbean-green shrink-0">
                    <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="overflow-hidden">
                    <h3 className="text-white font-bold text-lg leading-tight truncate">{item.name}</h3>
                    <p className="text-gray-300 text-xs font-medium truncate">{item.role}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* --- Custom Video Modal --- */}
      {activeVideo && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/95 backdrop-blur-sm transition-opacity duration-300">
          
          {/* Close Button */}
          <button 
            onClick={() => setActiveVideo(null)} 
            className="absolute top-5 right-5 p-2 bg-white/10 rounded-full text-white hover:bg-red-500 hover:rotate-90 transition-all duration-300 z-50"
          >
            <X size={24} />
          </button>

          {/* Video Player Container */}
          <div className={`relative bg-[#1A1A1A] rounded-2xl overflow-hidden shadow-2xl w-full mx-auto border border-white/10
            ${isShorts(activeVideo.videoUrl) ? 'max-w-md aspect-[9/16] h-[80vh]' : 'max-w-5xl aspect-video'}
          `}>
            <iframe
              className="w-full h-full"
              // ✅ CHANGE: mute=0 করা হয়েছে সাউন্ড অন করার জন্য
              src={`https://www.youtube.com/embed/${getVideoId(activeVideo.videoUrl)}?autoplay=1&mute=0&rel=0&showinfo=0&modestbranding=1&playsinline=1`}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}

      {/* Animation CSS */}
      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            /* Adjust based on width of items */
            transform: translateX(-100%); 
          }
        }
        .animate-marquee {
          display: flex;
          width: max-content;
          /* Slower speed for better readability */
          animation: marquee 60s linear infinite; 
        }
      `}</style>
    </section>
  );
}