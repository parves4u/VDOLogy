import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Facebook, Twitter, Instagram, ArrowUp, Mail, Phone, MapPin } from "lucide-react";

export default function PortfolioFooter({ setCurrentCategory }) {
  const location = useLocation();
  const navigate = useNavigate();
  const [showScrollTop, setShowScrollTop] = useState(false);

  // সার্ভিস লিস্ট
  const serviceLinks = [
    { id: 0, name: "Video Editing" },
    { id: 7, name: "Short Form" },
    { id: 1, name: "Podcast" },
    { id: 2, name: "Audio Editing" },
    { id: 3, name: "2D/3D Animation" },
    { id: 4, name: "Graphic Design" },
    { id: 5, name: "Digital Marketing" },
    { id: 6, name: "Web Development" },
  ];

  // --- 1. Scroll to Top Logic ---
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // --- 2. Navigation Logic ---
  const handleServiceClick = (id) => {
    if (location.pathname !== "/") {
      navigate("/", { state: { targetCategory: id, scrollTo: "works" } });
    } else {
      if (setCurrentCategory) {
        setCurrentCategory(id);
      }
      const section = document.getElementById("works");
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <footer className="bg-[#0b0d14] text-slate-300 pt-20 pb-8 border-t border-white/5 relative">
      
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          
          {/* --- Brand & Intro --- */}
          <div className="space-y-6">
            <Link to="/" onClick={scrollToTop}>
              <img src="/assets/images/home-ten/logo.svg" alt="VDOLogy" className="h-10 transition-transform duration-300 hover:scale-105" />
            </Link>
            <p className="text-[15px] leading-relaxed text-gray-400">
              Specializes in video editing and graphic design. With a keen eye for detail, 
              we craft engaging content that elevates your brand and captivates your audience.
            </p>
            
            {/* Social Icons */}
            <div className="flex gap-4 pt-2">
              {[
                { icon: <Facebook size={20} />, href: "https://www.facebook.com/WeAreVDOLogy" },
                { icon: <Twitter size={20} />, href: "https://x.com/WeAreVDOLogy" },
                { icon: <Instagram size={20} />, href: "https://www.instagram.com/wearevdology" },
              ].map((item, idx) => (
                <a 
                  key={idx} 
                  href={item.href} 
                  target="_blank" 
                  rel="noreferrer"
                  className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-caribbean-green hover:border-caribbean-green hover:text-black transition-all duration-300 transform hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(0,223,142,0.4)]"
                >
                  {item.icon}
                </a>
              ))}
              {/* WhatsApp Manual SVG */}
              <a href="https://wa.link/61y1o5" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-caribbean-green hover:border-caribbean-green hover:text-black transition-all duration-300 transform hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(0,223,142,0.4)]">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" /><path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1a5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1" /></svg>
              </a>
            </div>
          </div>

          {/* --- Services Links --- */}
          <div>
            <h3 className="text-white font-bold text-xl mb-6 relative inline-block">
              Services
              <span className="absolute -bottom-2 left-0 w-1/2 h-1 bg-caribbean-green rounded-full"></span>
            </h3>
            <ul className="space-y-3">
              {serviceLinks.map((service) => (
                <li key={service.id}>
                  <button
                    onClick={() => handleServiceClick(service.id)}
                    className="group flex items-center text-[16px] text-gray-400 hover:text-caribbean-green transition-all duration-300"
                  >
                    <span className="w-0 h-0.5 bg-caribbean-green mr-0 group-hover:w-3 group-hover:mr-2 transition-all duration-300"></span>
                    {service.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* --- Quick Links --- */}
          <div>
            <h3 className="text-white font-bold text-xl mb-6 relative inline-block">
              Quick Link
              <span className="absolute -bottom-2 left-0 w-1/2 h-1 bg-caribbean-green rounded-full"></span>
            </h3>
            <ul className="space-y-3">
              {[
                { name: "Help Center", link: "/contact" },
                { name: "About Us", link: "/about" },
                { name: "Terms & Conditions", link: "/terms" },
                { name: "Privacy Policy", link: "/privacy-policy" },
                { name: "Refund Policy", link: "/refund-policy" }, // ✅ লিংক আপডেট করা হয়েছে
              ].map((item, idx) => (
                <li key={idx}>
                  <Link 
                    to={item.link} 
                    onClick={scrollToTop}
                    className="group flex items-center text-[16px] text-gray-400 hover:text-caribbean-green transition-all duration-300"
                  >
                    <span className="w-0 h-0.5 bg-caribbean-green mr-0 group-hover:w-3 group-hover:mr-2 transition-all duration-300"></span>
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* --- Contact & Address --- */}
          <div>
            <h3 className="text-white font-bold text-xl mb-6 relative inline-block">
              Contact
              <span className="absolute -bottom-2 left-0 w-1/2 h-1 bg-caribbean-green rounded-full"></span>
            </h3>
            <ul className="space-y-5 text-[15px] text-gray-400">
              <li className="flex items-start gap-3">
                <MapPin className="text-caribbean-green shrink-0 mt-1" size={20} />
                <div>
                  <p>Prachir View, H#36/7/B/1,</p>
                  <p>Shah Ali Bag, Bangladesh</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="text-caribbean-green shrink-0 mt-1" size={20} />
                <div>
                  <p>5025 S Fort Apache Rd Ste</p>
                  <p>101, Las Vegas, NV, USA</p>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-caribbean-green shrink-0" size={20} />
                <a href="mailto:contact@vdology.com" className="hover:text-white transition-colors">
                  contact@vdology.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="text-caribbean-green shrink-0 mt-1" size={20} />
                <div>
                  <a href="tel:+8801710618285" className="block hover:text-white transition-colors">
                    +880 (1710) 618285
                  </a>
                  <a href="tel:+8801914838413" className="block hover:text-white transition-colors mt-1">
                    +880 (1914) 838413
                  </a>
                </div>
              </li>
            </ul>
          </div>

        </div>

        {/* --- Bottom Copyright & Legal Links --- */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>© {new Date().getFullYear()} VDOLogy. All rights reserved.</p>
          <div className="flex gap-6">
            <Link to="/privacy-policy" onClick={scrollToTop} className="hover:text-caribbean-green transition-colors">Privacy Policy</Link>
            <Link to="/terms" onClick={scrollToTop} className="hover:text-caribbean-green transition-colors">Terms of Service</Link>
          </div>
        </div>

        {/* --- Scroll to Top Button --- */}
        <button
          onClick={scrollToTop}
          className={`fixed bottom-8 right-8 w-12 h-12 bg-caribbean-green rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(0,223,142,0.6)] z-50 transition-all duration-500 transform hover:scale-110 group
            ${showScrollTop ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"}
          `}
        >
          <ArrowUp className="text-black group-hover:-translate-y-1 transition-transform duration-300" size={24} strokeWidth={3} />
        </button>

      </div>
    </footer>
  );
}