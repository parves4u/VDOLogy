import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

export default function LandingHeaderTen({ currentCategory, setCurrentCategory }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isWorksSubMenuOpen, setIsWorksSubMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  const location = useLocation();
  const navigate = useNavigate();

  // Sticky Header Logic
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleWorksSubMenu = () => {
    setIsWorksSubMenuOpen(!isWorksSubMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setIsWorksSubMenuOpen(false);
  };

  // নেভিগেশন হ্যান্ডলার ফাংশন (Smart Navigation)
  const handleWorkNavigation = (id) => {
    if (location.pathname !== "/") {
        navigate("/", { state: { targetCategory: id, scrollTo: "works" } });
    } else {
        setCurrentCategory(id);
        const section = document.getElementById("works");
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    }
    closeMobileMenu();
  };

  // সার্ভিসের লিস্ট
  const serviceCategories = [
    { id: 0, name: "Video Editing" },
    { id: 1, name: "Podcast" },
    { id: 2, name: "Audio Editing" },
    { id: 3, name: "2D/3D Animation" },
    { id: 4, name: "Graphic Design" },
    { id: 5, name: "Digital Marketing" },
    { id: 6, name: "Web Development" },
    { id: 7, name: "Short Form" },
  ];

  return (
    <div
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        scrolled ? "bg-main-black shadow-lg py-2" : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-4 md:px-8 h-full">
        <header className="flex items-center justify-between h-full">
          
          {/* Logo Section */}
          <div className="flex items-center gap-0 md:gap-24">
            <Link to="/" onClick={closeMobileMenu}>
              <img src="/assets/images/home-ten/logo.svg" alt="Video Logy Logo" className="h-10 w-auto" />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center gap-10">
            <ul className="flex items-center gap-8 text-base font-medium text-white font-inter">
              <li className="group">
                <Link className="hover:text-caribbean-green transition-colors" to="/">Home</Link>
              </li>
              <li>
                <Link to="/#features" className="hover:text-caribbean-green transition-colors">Features</Link>
              </li>
              
              {/* Works Dropdown Menu */}
              <li className="relative group py-4">
                <div className="flex items-center gap-2 cursor-pointer hover:text-caribbean-green transition-colors">
                  Works
                  <svg className="transition-transform duration-300 group-hover:rotate-180" width="10" height="10" viewBox="0 0 19 10" fill="none" stroke="currentColor">
                    <path d="M2 2L9.5 8L17 2" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>

                {/* Dropdown Content */}
                <div className="absolute left-0 pt-4 top-full w-max opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                  <div className="bg-white rounded-md shadow-xl py-3 px-2 min-w-[200px]">
                    {serviceCategories.map((item) => (
                      <button
                        key={item.id}
                        onClick={() => handleWorkNavigation(item.id)}
                        className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:text-purple hover:bg-gray-50 rounded transition-colors"
                      >
                        {item.name}
                      </button>
                    ))}
                  </div>
                </div>
              </li>

              <li><Link to="/about" className="hover:text-caribbean-green transition-colors">About</Link></li>
              
              {/* ✅ NEW: Meet Founder Link (Desktop) */}
              <li>
                <Link to="/meet-founder" className="hover:text-caribbean-green transition-colors">Meet Founder</Link>
              </li>

              <li>
                <button 
                    onClick={() => {
                        if (location.pathname !== "/") {
                            navigate("/", { state: { scrollTo: "RecentProjects" } });
                        } else {
                            document.getElementById("RecentProjects")?.scrollIntoView({ behavior: "smooth" });
                        }
                    }}
                    className="hover:text-caribbean-green transition-colors"
                >
                    Recent Projects
                </button>
              </li>
              <li>
                <Link to="/#pricing" className="hover:text-caribbean-green transition-colors">Pricing</Link>
              </li>
            </ul>
          </nav>

          {/* Contact & CTA (Desktop) */}
          <div className="hidden xl:flex items-center gap-7">
            <a href="tel:+8801710618285" className="flex gap-2.5 items-center group">
              <div className="p-2 border border-white rounded-full transition-all group-hover:bg-white group-hover:text-main-black">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.05 12.05 0 0 0 .57 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.03 12.03 0 0 0 2.81.57A2 2 0 0 1 22 16.92z"></path>
                </svg>
              </div>
              <span className="text-base font-bold text-white group-hover:text-caribbean-green transition-colors">
                +880 1710 618285
              </span>
            </a>
            <Link to="/contact">
              <div className="px-6 py-2.5 bg-caribbean-green text-white font-semibold rounded hover:bg-white hover:text-main-black transition-all duration-300 flex items-center gap-2">
                <span>Contact US</span>
                <svg width="7" height="12" viewBox="0 0 7 12" fill="none" stroke="currentColor" strokeWidth="2"><path d="M1 11L6 6L1 1" /></svg>
              </div>
            </Link>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button className="xl:hidden text-white focus:outline-none" onClick={toggleMobileMenu}>
            {isMobileMenuOpen ? (
               <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/></svg>
            ) : (
               <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"/></svg>
            )}
          </button>
        </header>
      </div>

      {/* Mobile Navigation Menu Overlay */}
      <div className={`fixed inset-0 z-40 bg-main-black/95 backdrop-blur-md transition-transform duration-300 ease-in-out ${isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"} xl:hidden flex flex-col justify-center`}>
        <ul className="flex flex-col items-center gap-6 p-6 text-lg font-medium text-white font-inter h-full justify-center overflow-y-auto">
          <li><Link to="/" onClick={closeMobileMenu}>Home</Link></li>
          <li><Link to="/#features" onClick={closeMobileMenu}>Features</Link></li>
          
          {/* Mobile Works Submenu */}
          <li className="flex flex-col items-center w-full">
            <button onClick={toggleWorksSubMenu} className="flex items-center gap-2 font-semibold hover:text-caribbean-green">
              Works
              <svg className={`transition-transform duration-300 ${isWorksSubMenuOpen ? "rotate-180" : ""}`} width="12" height="12" viewBox="0 0 19 10" fill="none" stroke="currentColor">
                <path d="M2 2L9.5 8L17 2" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <div className={`${isWorksSubMenuOpen ? "max-h-[400px] mt-4 opacity-100" : "max-h-0 opacity-0"} overflow-hidden transition-all duration-500 w-full`}>
                <ul className="flex flex-col items-center gap-3 text-base text-gray-300">
                {serviceCategories.map((item) => (
                    <li key={item.id}>
                    <button 
                        onClick={() => handleWorkNavigation(item.id)} 
                        className="hover:text-caribbean-green py-1"
                    >
                        {item.name}
                    </button>
                    </li>
                ))}
                </ul>
            </div>
          </li>

          <li><Link to="/about" onClick={closeMobileMenu}>About</Link></li>
          
          {/* ✅ NEW: Meet Founder Link (Mobile) */}
          <li><Link to="/meet-founder" onClick={closeMobileMenu}>Meet Founder</Link></li>

          <li>
            <button 
                onClick={() => {
                    handleWorkNavigation(null); 
                    if (location.pathname !== "/") navigate("/", { state: { scrollTo: "RecentProjects" } });
                    else document.getElementById("RecentProjects")?.scrollIntoView({ behavior: "smooth" });
                    closeMobileMenu();
                }}
            >
                Recent Projects
            </button>
          </li>
          
          <li><Link to="/#pricing" onClick={closeMobileMenu}>Pricing</Link></li>
          
          {/* Mobile Contact Info */}
          <div className="flex flex-col items-center gap-4 mt-8">
            <a href="tel:+8801710618285" className="text-xl font-bold text-white">+880 1710 618285</a>
            <Link to="/contact" onClick={closeMobileMenu} className="bg-caribbean-green text-white px-8 py-3 rounded text-lg font-semibold">
                Contact US
            </Link>
          </div>
        </ul>
      </div>
    </div>
  );
}