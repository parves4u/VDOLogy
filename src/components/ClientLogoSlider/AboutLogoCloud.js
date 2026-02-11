import React from "react";

// --- Logo Data (Clean & Editable) ---
// আপনার লোগোগুলো এখানে এড করুন
const clients = [
  { id: 1, name: "Partner 1", logo: "/assets/images/home-one-client-2.webp" },
  { id: 2, name: "Partner 2", logo: "/assets/images/home-one-client-3.webp" },
  { id: 3, name: "Partner 3", logo: "/assets/images/home-one-client-4.webp" },
  { id: 4, name: "Partner 4", logo: "/assets/images/home-one-client-5.webp" },
  { id: 5, name: "Partner 5", logo: "/assets/images/home-one-client-6.webp" },
  { id: 6, name: "Partner 6", logo: "/assets/images/home-one-client-7.webp" },
  { id: 7, name: "Partner 7", logo: "/assets/images/home-one-client-8.webp" },
  { id: 8, name: "Partner 8", logo: "/assets/images/home-one-client-9.webp" },
];

export default function LogoCloudSection() {
  return (
    <section className="py-20 bg-main-black border-t border-white/5 relative overflow-hidden">
      <div className="container mx-auto px-4 mb-10 text-center" data-aos="fade-up">
        <p className="text-lg text-gray-400 font-medium tracking-wide">
          Trusted by <span className="text-white font-bold">1000+</span> global clients
        </p>
      </div>

      {/* --- Marquee Slider Wrapper --- */}
      <div className="relative w-full max-w-7xl mx-auto overflow-hidden group">
        
        {/* Left Fade Gradient */}
        <div className="absolute left-0 top-0 bottom-0 w-24 md:w-40 z-10 bg-gradient-to-r from-main-black to-transparent pointer-events-none"></div>
        
        {/* Right Fade Gradient */}
        <div className="absolute right-0 top-0 bottom-0 w-24 md:w-40 z-10 bg-gradient-to-l from-main-black to-transparent pointer-events-none"></div>

        {/* --- Scrolling Track --- */}
        <div className="flex w-max animate-marquee group-hover:[animation-play-state:paused] items-center">
          
          {/* Original Set */}
          {clients.map((client, index) => (
            <div key={index} className="mx-8 md:mx-12 w-32 md:w-40 opacity-50 hover:opacity-100 transition-all duration-300 grayscale hover:grayscale-0 cursor-pointer hover:scale-110">
              <img src={client.logo} alt={client.name} className="w-full h-auto object-contain" />
            </div>
          ))}

          {/* Duplicate Set (For Seamless Loop) */}
          {clients.map((client, index) => (
            <div key={`dup-${index}`} className="mx-8 md:mx-12 w-32 md:w-40 opacity-50 hover:opacity-100 transition-all duration-300 grayscale hover:grayscale-0 cursor-pointer hover:scale-110">
              <img src={client.logo} alt={client.name} className="w-full h-auto object-contain" />
            </div>
          ))}

        </div>
      </div>

      {/* --- Animation CSS --- */}
      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
      `}</style>
    </section>
  );
}