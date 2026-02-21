import React, { useEffect } from "react";
import WinGridDark from "./WinGridDark";
import CountUp from "react-countup";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import GLightbox from "glightbox";
import "glightbox/dist/css/glightbox.min.css"; 

export default function HeroTen() {
  useEffect(() => {
    GLightbox({
      selector: ".glightbox",
      touchNavigation: true,
      loop: false,
      autoplayVideos: true,
    });
  }, []);

  return (
    <>
      <Helmet>
        <title>VDOLogy - Professional Video & Graphics Solutions</title>
        <meta
          name="description"
          content="VDOLogy provides professional video editing, motion graphics, and branding solutions for businesses worldwide."
        />
      </Helmet>

      <section
        id="banner"
        className="relative flex justify-center w-full pt-32 pb-20 md:pt-44 md:pb-24 lg:pt-52 lg:pb-32 overflow-hidden bg-main-black items-center"
      >
        {/* Background Grid */}
        <WinGridDark />
        
        {/* Central Green Glow Effect */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-caribbean-green/20 blur-[120px] rounded-full pointer-events-none z-0"></div>

        <div className="w-full max-w-[1386px] mx-auto px-4 sm:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            
            {/* --- LEFT SIDE: Content --- */}
            <div className="flex flex-col items-center lg:items-start text-center lg:text-left order-2 lg:order-1">
              
              {/* Trust Badge */}
              <div className="flex items-center gap-3 mb-6 bg-white/5 border border-white/10 px-4 py-2 rounded-full backdrop-blur-sm">
                <div className="flex -space-x-3">
                  <img src="/assets/images/home-three/teams/1.webp" alt="Client" className="w-8 h-8 rounded-full border-2 border-main-black object-cover" />
                  <img src="/assets/images/home-three/teams/2.webp" alt="Client" className="w-8 h-8 rounded-full border-2 border-main-black object-cover" />
                  <img src="/assets/images/home-three/teams/3.webp" alt="Client" className="w-8 h-8 rounded-full border-2 border-main-black object-cover" />
                </div>
                <p className="text-white text-sm font-medium">Trusted by 1000+ clients</p>
              </div>

              {/* Main Headline */}
              <h1 className="text-4xl sm:text-6xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] mb-6">
                Scaling Your <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-caribbean-green to-white">
                  Online Growth
                </span>
              </h1>

              {/* Subtext */}
              <p className="text-paragraph text-lg mb-8 max-w-lg">
                VDOLogy is a creative agency specializing in Influencer marketing, 
                video editing, thumbnails, content strategy, visual design, and content marketing.
              </p>

              {/* Buttons */}
              <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                <Link to="/submit-project">
                  <button className="px-8 py-4 bg-caribbean-green text-main-black font-bold rounded-full hover:bg-white transition-all duration-300 transform hover:scale-105 border border-caribbean-green shadow-[0_0_20px_rgba(0,223,142,0.3)]">
                    Start a Project
                  </button>
                </Link>
                
                <Link to="/contact">
                  <button className="px-8 py-4 bg-white/5 border border-white/10 text-white font-bold rounded-full hover:bg-white/10 transition-all duration-300 backdrop-blur-md">
                    Book a Call
                  </button>
                </Link>
              </div>
            </div>

            {/* --- RIGHT SIDE: Video Thumbnail & Stats --- */}
            <div className="relative w-full flex flex-col items-center lg:items-end mt-8 lg:mt-0 order-1 lg:order-2">
              
              {/* Main Video Container */}
              <div className="relative z-10 w-full max-w-[600px] group">
                
                {/* Video Thumbnail Image */}
                <div className="relative rounded-2xl overflow-hidden border border-white/20 shadow-2xl bg-main-black/50 backdrop-blur-sm aspect-video">
                  <img 
                    src="https://cdn.jsdelivr.net/gh/parves4u/images/Thumbnail03.jpg"  
                    alt="Video Editing Showreel" 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 opacity-90 group-hover:opacity-100"
                  />
                  
                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-main-black/60 via-transparent to-transparent"></div>

                  {/* Play Button (Center) */}
                  <a 
                    href="https://www.youtube.com/watch?v=CzKJeJJ-LNA" 
                    className="glightbox absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 md:w-20 md:h-20 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/40 cursor-pointer hover:bg-caribbean-green hover:border-caribbean-green transition-all duration-300 animate-pulse group-hover:animate-none"
                  >
                      <div className="w-0 h-0 border-t-[10px] md:border-t-[12px] border-t-transparent border-l-[16px] md:border-l-[20px] border-l-white border-b-[10px] md:border-b-[12px] border-b-transparent ml-1"></div>
                  </a>

                  {/* Bottom Text "Watch The Video" */}
                  <div className="absolute bottom-6 w-full text-center">
                    <span className="text-caribbean-green font-medium tracking-wide text-sm uppercase flex items-center justify-center gap-1">
                      Watch The Video <span className="text-lg">›</span>
                    </span>
                  </div>
                </div>

                {/* =========================================================
                    DESKTOP FLOATING BADGES (Hidden on Mobile)
                ========================================================= */}
                
                {/* Badge 1: Experience */}
                <div className="hidden md:block absolute top-[10%] -left-12 z-20 bg-[#1D1D1D]/90 backdrop-blur-md border border-white/10 p-4 rounded-2xl shadow-xl animate-bounce-slow transform origin-right">
                  <h3 className="text-caribbean-green font-bold text-2xl">
                      <CountUp start={0} end={10} />+
                  </h3>
                  <p className="text-white text-sm font-medium">Years of <br/> Experience</p>
                </div>

                {/* Badge 2: Team */}
                <div className="hidden md:block absolute top-[30%] -right-8 z-20 bg-[#1D1D1D]/90 backdrop-blur-md border border-white/10 p-4 rounded-2xl shadow-xl transform origin-left">
                  <h3 className="text-caribbean-green font-bold text-2xl">
                      <CountUp start={0} end={12} />+
                  </h3>
                  <p className="text-white text-sm font-medium">Team <br/> Members</p>
                </div>

                {/* Badge 3: Projects */}
                <div className="hidden md:flex absolute -bottom-6 -left-6 z-20 bg-[#1D1D1D]/90 backdrop-blur-md border border-white/10 p-5 rounded-2xl shadow-xl items-center gap-4 max-w-[220px] transform origin-top-right">
                  <div className="bg-caribbean-green/20 p-3 rounded-full shrink-0">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#00DF8E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                          <polyline points="22 4 12 14.01 9 11.01"></polyline>
                      </svg>
                  </div>
                  <div>
                      <h3 className="text-white font-bold text-xl">
                          <CountUp start={0} end={1000} />+
                      </h3>
                      <p className="text-gray-400 text-xs font-medium uppercase tracking-wider">Successful Projects</p>
                  </div>
                </div>

              </div>

              {/* =========================================================
                  MOBILE STATS BAR (Visible ONLY on Mobile)
              ========================================================= */}
              <div className="md:hidden w-full mt-6 bg-[#1D1D1D]/80 backdrop-blur-md border border-white/10 rounded-2xl p-4 flex justify-between items-center shadow-2xl relative z-20">
                 
                 {/* Stat 1 */}
                 <div className="text-center flex-1 border-r border-white/10 px-1">
                    <h3 className="text-caribbean-green font-bold text-xl sm:text-2xl"><CountUp start={0} end={10} />+</h3>
                    <p className="text-gray-400 text-[10px] sm:text-xs font-medium uppercase tracking-wider mt-1">Years Exp</p>
                 </div>
                 
                 {/* Stat 2 */}
                 <div className="text-center flex-1 border-r border-white/10 px-1">
                    <h3 className="text-caribbean-green font-bold text-xl sm:text-2xl"><CountUp start={0} end={1000} />+</h3>
                    <p className="text-gray-400 text-[10px] sm:text-xs font-medium uppercase tracking-wider mt-1">Projects</p>
                 </div>
                 
                 {/* Stat 3 */}
                 <div className="text-center flex-1 px-1">
                    <h3 className="text-caribbean-green font-bold text-xl sm:text-2xl"><CountUp start={0} end={12} />+</h3>
                    <p className="text-gray-400 text-[10px] sm:text-xs font-medium uppercase tracking-wider mt-1">Experts</p>
                 </div>
                 
              </div>

            </div>

          </div>
        </div>
      </section>
    </>
  );
}