import React from "react";
import { CalendarDays, ArrowRight, Video, PhoneCall, Star, CheckCircle2 } from "lucide-react";

export default function CtaOne() {
  return (
    <section id="consultation" className="py-20 md:py-32 bg-main-black relative overflow-hidden">
      
      {/* --- Background Ambient Glows --- */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-caribbean-green/10 rounded-full blur-[150px] -translate-y-1/2 pointer-events-none"></div>
      <div className="absolute bottom-0 right-10 w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        
        {/* --- Main CTA Card --- */}
        <div className="relative w-full max-w-7xl mx-auto bg-[#0F0F0F] border border-white/10 rounded-[40px] p-8 md:p-16 lg:p-20 overflow-hidden shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-16 group">
          
          {/* Card Inner Glow on Hover */}
          <div className="absolute inset-0 bg-gradient-to-r from-caribbean-green/0 to-caribbean-green/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>

          {/* ====== Left Side: Content ====== */}
          <div className="w-full lg:w-1/2 relative z-10" data-aos="fade-right">
            
            {/* Top Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-caribbean-green/30 bg-caribbean-green/10 text-caribbean-green text-sm font-bold tracking-wide uppercase mb-8 shadow-[0_0_20px_rgba(0,223,142,0.15)]">
              <span className="w-2 h-2 rounded-full bg-caribbean-green animate-pulse"></span>
              Free Discovery Call
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-[1.1] mb-6">
              Ready to <span className="text-transparent bg-clip-text bg-gradient-to-r from-caribbean-green to-emerald-400">Elevate</span> <br />
              Your Brand?
            </h2>
            
            <p className="text-gray-400 text-lg md:text-xl mb-10 max-w-lg leading-relaxed">
              Let’s discuss your vision and map out a creative strategy that drives real results. No commitments, just pure value.
            </p>

            {/* Feature Checkmarks */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 mb-10">
              <div className="flex items-center gap-2 text-gray-300 font-medium">
                <CheckCircle2 size={20} className="text-caribbean-green" /> 1:1 Strategy Session
              </div>
              <div className="flex items-center gap-2 text-gray-300 font-medium">
                <CheckCircle2 size={20} className="text-caribbean-green" /> Custom Roadmap
              </div>
            </div>

            {/* CTA Button */}
            <a
              href="https://calendar.app.google/y1Z2ppu95YrBjdvf7"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-caribbean-green to-emerald-500 text-black font-bold text-lg rounded-2xl hover:scale-105 transition-all duration-300 shadow-[0_0_30px_rgba(0,223,142,0.4)] hover:shadow-[0_0_50px_rgba(0,223,142,0.6)]"
            >
              Book Your Free Call
              <ArrowRight size={22} className="animate-[bounceRight_1s_infinite]" />
            </a>

            {/* Trust Signal */}
            <div className="mt-8 flex items-center gap-4">
              <div className="flex -space-x-3">
                <img src="https://i.pravatar.cc/100?img=1" alt="Client" className="w-10 h-10 rounded-full border-2 border-[#0F0F0F]" />
                <img src="https://i.pravatar.cc/100?img=2" alt="Client" className="w-10 h-10 rounded-full border-2 border-[#0F0F0F]" />
                <img src="https://i.pravatar.cc/100?img=3" alt="Client" className="w-10 h-10 rounded-full border-2 border-[#0F0F0F]" />
                <div className="w-10 h-10 rounded-full border-2 border-[#0F0F0F] bg-white/10 flex items-center justify-center text-xs font-bold text-white backdrop-blur-md">
                  +5k
                </div>
              </div>
              <div>
                <div className="flex text-yellow-400 text-sm">
                  <Star size={14} fill="currentColor" />
                  <Star size={14} fill="currentColor" />
                  <Star size={14} fill="currentColor" />
                  <Star size={14} fill="currentColor" />
                  <Star size={14} fill="currentColor" />
                </div>
                <span className="text-xs text-gray-500 font-medium mt-1 block">Trusted by 500+ Clients</span>
              </div>
            </div>
          </div>

          {/* ====== Right Side: Visual Mockup ====== */}
          <div className="w-full lg:w-1/2 relative h-[400px] md:h-[450px] flex items-center justify-center" data-aos="fade-left">
            
            {/* Background Decor Circles */}
            <div className="absolute w-[300px] h-[300px] border border-white/5 rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute w-[450px] h-[450px] border border-white/5 rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border-dashed"></div>

            {/* Floating Element 1: Main Calendar Box */}
            <div className="absolute z-20 animate-float bg-[#1A1A1A] border border-white/10 p-6 rounded-3xl shadow-2xl w-[280px] md:w-[320px] backdrop-blur-xl">
              <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-caribbean-green/20 flex items-center justify-center text-caribbean-green">
                    <CalendarDays size={20} />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-sm">Strategy Call</h4>
                    <p className="text-gray-400 text-xs">Google Meet</p>
                  </div>
                </div>
                <div className="w-2 h-2 rounded-full bg-caribbean-green animate-pulse"></div>
              </div>
              <div className="space-y-3">
                <div className="h-2.5 bg-white/5 rounded-full w-full"></div>
                <div className="h-2.5 bg-white/5 rounded-full w-4/5"></div>
                <div className="h-2.5 bg-white/5 rounded-full w-full"></div>
                <div className="flex gap-2 mt-2">
                   <div className="h-8 bg-caribbean-green/20 rounded-lg w-1/3 border border-caribbean-green/30"></div>
                   <div className="h-8 bg-white/5 rounded-lg w-1/3"></div>
                   <div className="h-8 bg-white/5 rounded-lg w-1/3"></div>
                </div>
              </div>
            </div>

            {/* Floating Element 2: Video Call Badge */}
            <div className="absolute -bottom-4 md:bottom-10 right-0 md:-right-10 z-30 animate-float-delayed bg-black/60 backdrop-blur-xl border border-white/10 p-4 rounded-2xl shadow-xl flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-blue-500 to-caribbean-green p-0.5">
                <div className="w-full h-full bg-black rounded-full flex items-center justify-center">
                  <Video size={18} className="text-white" />
                </div>
              </div>
              <div>
                <p className="text-white font-bold text-sm">Join Meeting</p>
                <p className="text-caribbean-green text-xs font-medium">Starts in 10 min</p>
              </div>
            </div>

            {/* Floating Element 3: Call Icon */}
            <div className="absolute top-10 left-0 md:-left-5 z-10 animate-float-slow w-16 h-16 bg-[#111] border border-white/10 rounded-2xl shadow-2xl flex items-center justify-center transform -rotate-12">
               <PhoneCall size={24} className="text-caribbean-green" />
            </div>

          </div>

        </div>
      </div>

      {/* --- Custom CSS for Animations --- */}
      <style jsx>{`
        @keyframes bounceRight {
          0%, 100% { transform: translateX(0); }
          50% { transform: translateX(5px); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }
        @keyframes floatDelayed {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        @keyframes floatSlow {
          0%, 100% { transform: translateY(0px) rotate(-12deg); }
          50% { transform: translateY(-20px) rotate(-5deg); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: floatDelayed 5s ease-in-out infinite 2s;
        }
        .animate-float-slow {
          animation: floatSlow 7s ease-in-out infinite 1s;
        }
      `}</style>

    </section>
  );
}