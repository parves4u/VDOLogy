import React, { useEffect, useState, useRef } from "react";

// ✅ আপনার .webp ইমেজের লিংক বসাবেন
const processSteps = [
  {
    id: "01",
    title: "High-End Video & Audio Editing",
    description: "We transform raw footage into cinematic stories. Whether it’s long-form YouTube content or professional podcasts, we ensure studio-grade audio and seamless visual flow that keeps viewers hooked.",
    image: "https://cdn.jsdelivr.net/gh/parves4u/images/Workflow5.webp", 
  },
  {
    id: "02",
    title: "Shorts, Reels & Motion Graphics",
    description: "Dominate TikTok and Instagram with high-retention edits. We blend dynamic text animations and 2D/3D motion graphics to create viral-ready assets that algorithm loves.",
    image: "https://cdn.jsdelivr.net/gh/parves4u/images/Workflow3.webp", 
  },
  {
    id: "03",
    title: "Strategic Graphic Design",
    description: "From click-worthy thumbnails to complete brand guidelines. We design visuals that not only look good but also communicate your brand's authority and drive higher Click-Through Rates (CTR).",
    image: "https://cdn.jsdelivr.net/gh/parves4u/images/Workflow1.webp", 
  },
  {
    id: "04",
    title: "Web Development & Marketing",
    description: "A robust digital presence goes beyond video. We build high-performance websites and craft data-driven marketing strategies to convert your audience into loyal paying clients.",
    image: "https://cdn.jsdelivr.net/gh/parves4u/images/Workflow6.webp", 
  },
  {
    id: "05",
    title: "Creative Strategy & Consulting",
    description: "Stop guessing what works. We provide in-depth audits, competitor analysis, and data-driven content roadmaps to ensure every piece of content maximizes your ROI and business growth.",
    image: "https://cdn.jsdelivr.net/gh/parves4u/images/Workflow7.webp", 
  },
];

export default function ProcessScroll() {
  const [scrollPercentage, setScrollPercentage] = useState(0);
  const sectionRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const section = sectionRef.current;
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;

      // ক্যালকুলেশন
      const start = sectionTop - windowHeight / 2;
      const end = sectionTop + sectionHeight - windowHeight;
      
      let percentage = ((scrollY - start) / (end - start)) * 100;

      if (percentage < 0) percentage = 0;
      if (percentage > 100) percentage = 100;

      setScrollPercentage(percentage);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section ref={sectionRef} className="py-20 md:py-32 bg-main-black relative overflow-hidden">
      
      {/* Background Ambience */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-caribbean-green/5 rounded-full blur-[150px] pointer-events-none"></div>
      <div className="absolute bottom-1/3 right-0 w-96 h-96 bg-blue-600/5 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        
        {/* --- Header --- */}
        <div className="text-center mb-20 md:mb-32">
          <span className="px-5 py-2 rounded-full border border-white/10 bg-white/5 text-sm font-medium text-caribbean-green tracking-wide shadow-[0_0_15px_rgba(0,223,142,0.1)]">
            Workflow
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mt-6 leading-tight">
            How We Create <span className="text-transparent bg-clip-text bg-gradient-to-r from-caribbean-green to-emerald-400">
              Viral Content
            </span> <br className="hidden md:block" />
          </h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto text-base">
            From concept to final cut, our process is designed for speed, quality, and maximum impact.
          </p>
        </div>

        <div className="relative">
          
          {/* ============ Timeline Line (Center) ============ */}
          {/* Static Gray Line */}
          <div className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-[2px] bg-white/5 -translate-x-1/2 rounded-full"></div>
          
          {/* Animated Neon Line */}
          <div 
            className="absolute left-[20px] md:left-1/2 top-0 w-[2px] bg-gradient-to-b from-caribbean-green via-emerald-400 to-caribbean-green -translate-x-1/2 rounded-full transition-all duration-100 ease-out z-0 shadow-[0_0_20px_#00DE8D]"
            style={{ height: `${scrollPercentage}%` }}
          ></div>

          {/* ============ Steps Loop ============ */}
          <div className="flex flex-col gap-16 md:gap-32 pb-12">
            {processSteps.map((step, index) => {
              
              const itemTriggerPoint = (index / (processSteps.length - 0.5)) * 100;
              const isActive = scrollPercentage >= itemTriggerPoint;

              return (
                <div 
                  key={step.id} 
                  className={`relative flex flex-col md:flex-row items-center w-full pl-12 md:pl-0
                    ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}
                  `}
                >
                  
                  {/* --- ১. টেক্সট কার্ড (Glassmorphism Style) --- */}
                  <div className={`w-full md:w-1/2 flex flex-col justify-center mb-8 md:mb-0 
                    ${index % 2 === 0 ? "md:pr-20 md:items-end md:text-right" : "md:pl-20 md:items-start md:text-left"}
                  `}>
                    
                    <div className={`relative p-6 md:p-8 rounded-2xl border border-white/5 bg-[#121212]/80 backdrop-blur-md transition-all duration-700 transform group hover:border-caribbean-green/30 hover:shadow-[0_0_30px_rgba(0,223,142,0.05)]
                        ${isActive ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}
                    `}>
                        {/* Background Giant Number */}
                        <span className={`absolute -top-4 text-[80px] font-bold opacity-5 select-none transition-colors duration-500
                            ${index % 2 === 0 ? "right-4" : "left-4"}
                            ${isActive ? "text-caribbean-green" : "text-white"}
                        `}>
                            {step.id}
                        </span>

                        <h3 className="text-xl md:text-2xl font-bold text-white mb-3 relative z-10 group-hover:text-caribbean-green transition-colors">
                          {step.title}
                        </h3>
                        <p className="text-gray-400 text-sm md:text-base leading-relaxed relative z-10">
                          {step.description}
                        </p>
                    </div>

                  </div>

                  {/* --- ২. সেন্ট্রাল নিয়ন ডট --- */}
                  <div className="absolute left-[20px] md:left-1/2 top-8 md:top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 flex items-center justify-center">
                    {/* Outer Glow Ring */}
                    <div className={`absolute rounded-full transition-all duration-500
                        ${isActive ? "w-12 h-12 bg-caribbean-green/20 animate-pulse" : "w-0 h-0 opacity-0"}
                    `}></div>
                    {/* Core Dot */}
                    <div className={`w-4 h-4 md:w-5 md:h-5 rounded-full border-[3px] transition-all duration-500 z-10
                      ${isActive ? "bg-black border-caribbean-green scale-125 shadow-[0_0_15px_#00DE8D]" : "bg-black border-gray-700 scale-100"}
                    `}></div>
                  </div>

                  {/* --- ৩. ইমেজ সেকশন (Fade Out Sides & Fixed Size) --- */}
                  <div className={`w-full md:w-1/2 flex 
                    ${index % 2 === 0 ? "justify-start md:pl-20" : "justify-start md:justify-end md:pr-20"}
                  `}>
                    <div 
                      className={`relative transition-all duration-1000 transform
                        ${isActive ? "scale-100 opacity-100 grayscale-0" : "scale-95 opacity-40 grayscale"}
                      `}
                      // ✅ ফিক্সড সাইজ এবং ফেড ইফেক্ট (No Glow)
                      style={{ 
                          width: "100%", 
                          maxWidth: "460px", 
                          height: "194px",
                          // সাইড ফেড কমিয়ে দেওয়া হয়েছে (৫%) যাতে ইমেজ ছোট না দেখায়
                          maskImage: "linear-gradient(to right, transparent 0%, black 5%, black 95%, transparent 100%)",
                          WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 5%, black 95%, transparent 100%)"
                      }}
                    >
                      <img 
                        src={step.image} 
                        alt={step.title} 
                        className="w-full h-full object-cover rounded-lg"
                      />
                    </div>
                  </div>

                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}