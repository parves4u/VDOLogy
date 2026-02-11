import React from "react";
import { 
  Video, Mic, Layers, Cpu, 
  Megaphone, MonitorPlay, Palette, 
  Globe, Zap, BarChart, Smartphone, 
  Clapperboard 
} from "lucide-react";

// --- ১. সার্ভিস ডাটা (Service Data) ---

const servicesTop = [
  { 
    icon: <Video />, 
    title: "Video Editing", 
    desc: "Transform raw footage into cinematic stories with perfect pacing that keeps viewers watching." 
  },
  { 
    icon: <Mic />, 
    title: "Podcast Production", 
    desc: "End-to-end audio & video editing to make your episodes sound studio-grade and professional." 
  },
  { 
    icon: <Layers />, 
    title: "SaaS Explainers", 
    desc: "Simplify complex software concepts into engaging visuals that drive instant user understanding." 
  },
  { 
    icon: <Cpu />, 
    title: "3D Animation", 
    desc: "Create immersive 3D worlds and product visualizations that captivate your audience instantly." 
  },
  { 
    icon: <Megaphone />, 
    title: "Ad Creatives", 
    desc: "Stop the scroll with high-energy video ads designed specifically to maximize your conversions." 
  },
  { 
    icon: <MonitorPlay />, 
    title: "Demo Videos", 
    desc: "Showcase your product features with clear, step-by-step walkthroughs that educate and convert." 
  },
];

const servicesBottom = [
  { 
    icon: <Palette />, 
    title: "Graphic Design", 
    desc: "Elevate your brand with premium visuals, logos, and marketing assets that leave a lasting impact." 
  },
  { 
    icon: <Globe />, 
    title: "Web Development", 
    desc: "Build fast, SEO-optimized, and mobile-responsive websites that turn your visitors into clients." 
  },
  { 
    icon: <Zap />, 
    title: "Short Form", 
    desc: "Dominate TikTok, Reels & Shorts with viral editing styles that boost engagement and growth." 
  },
  { 
    icon: <BarChart />, 
    title: "Digital Marketing", 
    desc: "Data-driven strategies and targeted campaigns to scale your brand's reach and revenue fast." 
  },
  { 
    icon: <Smartphone />, 
    title: "UGC Content", 
    desc: "Leverage authentic user stories and testimonials to build trust and social proof for sales." 
  },
  { 
    icon: <Clapperboard />, 
    title: "Corporate Video", 
    desc: "Polished, professional storytelling that strengthens your company's reputation and authority." 
  },
];

// --- ২. স্কোয়ার কার্ড কম্পোনেন্ট ---
const ServiceCard = ({ item }) => (
  <div className="group relative w-[240px] h-[240px] md:w-[260px] md:h-[260px] flex-shrink-0 mx-3 rounded-2xl bg-[#0F0F0F] border border-white/5 hover:border-caribbean-green/50 transition-all duration-300 hover:shadow-[0_0_30px_-10px_rgba(0,223,142,0.2)] hover:-translate-y-2 cursor-pointer flex flex-col items-center justify-center text-center p-6">
    
    {/* গ্লো ইফেক্ট (কার্ডের ভেতরে) */}
    <div className="absolute inset-0 bg-gradient-to-b from-caribbean-green/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>

    <div className="relative z-10 flex flex-col items-center gap-4">
      {/* আইকন বক্স */}
      <div className="w-14 h-14 rounded-xl bg-white/5 flex items-center justify-center text-caribbean-green border border-white/10 group-hover:bg-caribbean-green group-hover:text-black transition-colors duration-300 shadow-lg">
        {React.cloneElement(item.icon, { size: 28 })}
      </div>
      
      {/* টেক্সট */}
      <div>
        <h3 className="text-lg md:text-xl font-bold text-white mb-2 group-hover:text-caribbean-green transition-colors">
          {item.title}
        </h3>
        <p className="text-sm text-gray-400 group-hover:text-gray-300 leading-snug">
          {item.desc}
        </p>
      </div>
    </div>
  </div>
);

export default function ServiceSlider() {
  return (
    // ✅ FIX: এখানে id="features" যোগ করা হয়েছে লিংকিংয়ের জন্য
    <section id="features" className="py-12 md:py-16 bg-main-black relative overflow-hidden">
      
      {/* হেডার সেকশন */}
      <div className="container mx-auto px-4 text-center mb-6 relative z-10">
        <span className="px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-sm font-medium text-caribbean-green">
          Global Services
        </span>
        <h2 className="text-3xl md:text-5xl font-bold mt-4 mb-2 text-white">
          Types of Work <span className="text-caribbean-green">We Do</span>
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto text-sm md:text-base">
          We provide a wide range of digital services to help your business grow online.
        </p>
      </div>

      {/* --- স্ক্রলিং কন্টেইনার --- */}
      <div className="container mx-auto px-4 md:px-8">
        
        <div className="relative flex flex-col gap-6 py-12 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          
          {/* === প্রথম সারি (বাম দিকে স্লো স্ক্রল) === */}
          <div className="flex w-max hover:[animation-play-state:paused]">
            <div className="flex animate-scrollLeft">
              {[...servicesTop, ...servicesTop, ...servicesTop].map((item, idx) => (
                <ServiceCard key={`top-${idx}`} item={item} />
              ))}
            </div>
          </div>

          {/* === দ্বিতীয় সারি (ডান দিকে স্লো স্ক্রল) === */}
          <div className="flex w-max hover:[animation-play-state:paused]">
            <div className="flex animate-scrollRight">
              {[...servicesBottom, ...servicesBottom, ...servicesBottom].map((item, idx) => (
                <ServiceCard key={`bottom-${idx}`} item={item} />
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* --- CSS Keyframes (Slow Animation) --- */}
      <style jsx>{`
        @keyframes scrollLeft {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.33%); }
        }
        @keyframes scrollRight {
          0% { transform: translateX(-33.33%); }
          100% { transform: translateX(0); }
        }
        
        .animate-scrollLeft {
          animation: scrollLeft 80s linear infinite;
        }
        .animate-scrollRight {
          animation: scrollRight 80s linear infinite;
        }
      `}</style>

    </section>
  );
}