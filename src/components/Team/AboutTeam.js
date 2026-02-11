import React from "react";
import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Dribbble, ArrowRight, Users } from "lucide-react";

// --- Team Data (Easily Editable) ---
const teamMembers = [
  {
    id: 1,
    name: "Md Parves Sikder",
    role: "Founder & CEO",
    image: "/assets/images/home-three/teams/1.webp",
    socials: { facebook: "#", twitter: "#", instagram: "#", dribbble: "#" },
  },
  {
    id: 2,
    name: "Shahela Akter Ila",
    role: "Co-founder & Creative Head",
    image: "/assets/images/home-three/teams/2.webp",
    socials: { facebook: "#", twitter: "#", instagram: "#", dribbble: "#" },
  },
  {
    id: 3,
    name: "Joseph Montemorano",
    role: "Managing Partner (USA)",
    image: "/assets/images/home-three/teams/3.webp",
    socials: { facebook: "#", twitter: "#", instagram: "#", dribbble: "#" },
  },
  {
    id: 4,
    name: "Hasan Ahmed",
    role: "Motion Designer",
    image: "/assets/images/home-three/teams/4.webp",
    socials: { facebook: "#", twitter: "#", instagram: "#", dribbble: "#" },
  },
];

export default function TeamSection() {
  return (
    <section className="relative py-20 md:py-32 bg-main-black overflow-hidden">
      
      {/* --- Background Glows --- */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-caribbean-green/5 rounded-full blur-[120px] translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        
        {/* --- Header Section --- */}
        <div className="flex flex-col lg:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl" data-aos="fade-right">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-caribbean-green/30 bg-caribbean-green/10 text-caribbean-green text-sm font-medium mb-6">
              <Users size={16} />
              Team Members
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight">
              Meet the Experience <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-caribbean-green to-emerald-400">
                Team Members
              </span>
            </h2>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-8" data-aos="fade-left">
            {/* Stats */}
            <div className="flex items-center gap-4 text-white">
              <span className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-white to-gray-500">
                15+
              </span>
              <span className="text-lg text-gray-400 leading-tight">
                Dedicated <br /> Members
              </span>
            </div>

            {/* Join Button */}
            <Link to="/contact" className="group relative px-8 py-4 bg-caribbean-green text-black font-bold rounded-full overflow-hidden transition-all hover:shadow-[0_0_20px_rgba(0,223,142,0.4)]">
              <span className="relative z-10 flex items-center gap-2">
                Join Our Team <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
              </span>
              <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
            </Link>
          </div>
        </div>

        {/* --- Team Grid --- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={member.id}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="group relative bg-[#111] border border-white/10 rounded-2xl overflow-hidden hover:border-caribbean-green/50 transition-all duration-500"
            >
              {/* Image Container */}
              <div className="relative overflow-hidden aspect-[3/4]">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                />
                
                {/* Overlay & Socials */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                  <div className="flex gap-3 translate-y-10 group-hover:translate-y-0 transition-transform duration-500">
                    {[
                      { Icon: Facebook, link: member.socials.facebook },
                      { Icon: Twitter, link: member.socials.twitter },
                      { Icon: Instagram, link: member.socials.instagram },
                      { Icon: Dribbble, link: member.socials.dribbble },
                    ].map((item, idx) => (
                      <a
                        key={idx}
                        href={item.link}
                        className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white hover:bg-caribbean-green hover:text-black transition-all duration-300 hover:-translate-y-1"
                      >
                        <item.Icon size={18} />
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              {/* Info */}
              <div className="p-6 text-center bg-[#111] relative z-10">
                <h3 className="text-xl font-bold text-white mb-1 group-hover:text-caribbean-green transition-colors">
                  <Link to="/teams">{member.name}</Link>
                </h3>
                <p className="text-gray-400 text-sm font-medium">{member.role}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}