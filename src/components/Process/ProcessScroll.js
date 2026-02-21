import React, { useState } from "react";
import { ArrowRight, Video, MonitorPlay, Palette, Globe, BarChart } from "lucide-react";

// ✅ ডাটাতে আইকন যুক্ত করা হয়েছে ডিজাইনের সুবিধার্থে
const processSteps = [
  {
    id: "01",
    title: "High-End Video & Audio Editing",
    shortTitle: "Video Editing",
    icon: <Video size={20} />,
    description: "We transform raw footage into captivating cinematic stories. From long-form YouTube documentaries to professional podcasts, we ensure studio-grade audio, seamless visual flow, and dynamic pacing that keeps your audience hooked from start to finish.",
    image: "https://cdn.jsdelivr.net/gh/parves4u/images/Video Editing.jpg", 
  },
  {
    id: "02",
    title: "Dynamic Motion Graphics & Shorts",
    shortTitle: "Motion & Shorts",
    icon: <MonitorPlay size={20} />,
    description: "Capture attention in seconds. We craft high-retention short-form content for TikTok, Reels, and Shorts using kinetic typography, vibrant 2D/3D animations, and snappy transitions designed specifically for the modern scroll culture.",
    image: "https://cdn.jsdelivr.net/gh/parves4u/images/Motion & Shorts.jpg", 
  },
  {
    id: "03",
    title: "Click-Driven Thumbnails & Branding",
    shortTitle: "Graphic Design",
    icon: <Palette size={20} />,
    description: "Great content needs great packaging. We design high-converting YouTube thumbnails, striking brand identities, and custom visual assets that dramatically increase your Click-Through Rate (CTR) and make your brand unforgettable.",
    image: "https://cdn.jsdelivr.net/gh/parves4u/images/Graphic Design.jpg", 
  },
  {
    id: "04",
    title: "High-Converting Web & Ad Creatives",
    shortTitle: "Web & Ads",
    icon: <Globe size={20} />,
    description: "Drive traffic and generate leads. We build lightning-fast, conversion-optimized landing pages and design scroll-stopping ad creatives that turn your viewers into loyal customers and scale your digital footprint.",
    image: "https://cdn.jsdelivr.net/gh/parves4u/images/Web & Ads.jpg", 
  },
  {
    id: "05",
    title: "Data-Driven Strategy & Growth",
    shortTitle: "Strategy",
    icon: <BarChart size={20} />,
    description: "We don't just create content; we engineer growth. By analyzing audience data, current trends, and algorithm updates, we provide a strategic roadmap to maximize your reach, boost engagement, and ensure long-term brand success.",
    image: "https://cdn.jsdelivr.net/gh/parves4u/images/Strategy.jpg", 
  },
];

export default function ProcessScroll() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section className="py-20 md:py-32 bg-main-black relative overflow-hidden">
      
      {/* Background Ambience */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-caribbean-green/5 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        
        {/* --- Header --- */}
        <div className="text-center mb-16" data-aos="fade-up">
          <span className="px-5 py-2 rounded-full border border-white/10 bg-white/5 text-sm font-medium text-caribbean-green tracking-wide">
            Our Workflow
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mt-6 leading-tight">
            How We Create <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-caribbean-green to-emerald-400">
              Viral Content
            </span> 
          </h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto text-base">
            A streamlined, 5-step process designed for speed, premium quality, and maximum business impact.
          </p>
        </div>

        {/* --- Interactive Content Area --- */}
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-center lg:items-start max-w-6xl mx-auto bg-[#0F0F0F] border border-white/5 rounded-3xl p-6 md:p-10 shadow-2xl">
          
          {/* Left: Step List (Tabs) */}
          <div className="w-full lg:w-1/3 flex flex-col gap-3">
            {processSteps.map((step, index) => {
              const isActive = activeStep === index;
              return (
                <button
                  key={step.id}
                  onClick={() => setActiveStep(index)}
                  className={`relative flex items-center justify-between p-4 rounded-xl text-left transition-all duration-300 overflow-hidden
                    ${isActive 
                      ? "bg-caribbean-green/10 border-caribbean-green/50 text-white shadow-[0_0_20px_rgba(0,223,142,0.1)] border" 
                      : "bg-[#1A1A1A] border-transparent text-gray-400 hover:bg-white/5 hover:text-white border"
                    }
                  `}
                >
                  {/* Left Highlight for active item */}
                  {isActive && (
                     <div className="absolute left-0 top-0 bottom-0 w-1 bg-caribbean-green rounded-l-xl"></div>
                  )}
                  
                  <div className="flex items-center gap-4 relative z-10">
                    <span className={`flex items-center justify-center w-10 h-10 rounded-lg transition-colors
                      ${isActive ? "bg-caribbean-green text-black" : "bg-white/5 text-gray-500"}
                    `}>
                      {step.icon}
                    </span>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wider mb-0.5 opacity-60">Step {step.id}</p>
                      <h4 className="font-semibold text-sm md:text-base">{step.shortTitle}</h4>
                    </div>
                  </div>
                  
                  <ArrowRight size={18} className={`transition-transform duration-300 ${isActive ? "text-caribbean-green translate-x-1" : "opacity-0 -translate-x-2"}`} />
                </button>
              );
            })}
          </div>

          {/* Right: Active Step Details & Image */}
          <div className="w-full lg:w-2/3 h-full flex flex-col">
            
            {/* Dynamic Content */}
            <div key={activeStep} className="flex-1 animate-fadeIn">
              
              {/* Image Container with Glow */}
              <div className="relative w-full aspect-video rounded-2xl overflow-hidden mb-8 border border-white/10 group bg-black">
                <img 
                  src={processSteps[activeStep].image} 
                  alt={processSteps[activeStep].title}
                  className="w-full h-full object-cover opacity-90 transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-main-black via-transparent to-transparent opacity-80"></div>
              </div>

              {/* Text Description */}
              <div className="px-2">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  {processSteps[activeStep].title}
                </h3>
                <p className="text-gray-400 text-base md:text-lg leading-relaxed">
                  {processSteps[activeStep].description}
                </p>
              </div>

            </div>
          </div>

        </div>

      </div>

      {/* --- Custom Keyframe for smooth transition --- */}
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out forwards;
        }
      `}</style>

    </section>
  );
}