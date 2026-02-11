import React from "react";
import { Check, X } from "lucide-react";

export default function OurProcess() {
  const features = [
    { name: "15+ In-house team to grow your online presence", vdo: true, agency: true, freelancer: false },
    { name: "8+ Years of Experience", vdo: true, agency: true, freelancer: false },
    { name: "1000+ projects completed successfully", vdo: true, agency: false, freelancer: false },
    { name: "24/7 Dedicated Support", vdo: true, agency: false, freelancer: false },
    { name: "Unlimited Revisions", vdo: true, agency: false, freelancer: false },
    { name: "Dedicated Project Manager", vdo: true, agency: true, freelancer: false },
    { name: "Fast Turnaround Time", vdo: true, agency: false, freelancer: false },
  ];

  return (
    <section className="py-20 bg-main-black text-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-sm font-medium text-gray-300">
            Why Choose Us
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mt-6 mb-4">
            Why <span className="text-caribbean-green">VDOLogy</span> is Your Best Choice
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            See how VDOLogy stands out against other agencies and freelancers to provide you with the best video editing solutions.
          </p>
        </div>

        {/* Comparison Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          
          {/* Card 1: VDOLogy (Highlighted) */}
          <div className="relative bg-gradient-to-b from-caribbean-green/10 to-transparent border border-caribbean-green rounded-3xl p-8 shadow-[0_0_50px_-12px_rgba(0,223,142,0.3)] transform md:-translate-y-4">
            <div className="mb-8">
                {/* Logo or Brand Name */}
                <div className="flex items-center gap-2 mb-2">
                    <img src="/assets/images/home-ten/logo.svg" alt="VDOLogy" className="h-8" />
                </div>
              <p className="text-sm text-caribbean-green font-medium">Your Growth Partner</p>
            </div>

            <ul className="space-y-5 mb-8">
              {features.map((item, idx) => (
                <li key={idx} className="flex items-center gap-3">
                  <div className="bg-caribbean-green rounded-full p-1">
                    <Check size={14} className="text-black stroke-[3px]" />
                  </div>
                  <span className="text-white font-medium">{item.name}</span>
                </li>
              ))}
            </ul>

            {/* Bonus Section */}
            <div className="mt-8 pt-8 border-t border-caribbean-green/30">
              <h4 className="text-caribbean-green font-bold mb-4">Bonuses you will get:</h4>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-sm text-gray-300">
                  <Check size={16} className="text-caribbean-green" /> Free 1-on-1 Consultancy
                </li>
                <li className="flex items-center gap-3 text-sm text-gray-300">
                  <Check size={16} className="text-caribbean-green" /> Free Thumbnail with Video
                </li>
                <li className="flex items-center gap-3 text-sm text-gray-300">
                  <Check size={16} className="text-caribbean-green" /> Social Media Strategy Guide
                </li>
              </ul>
            </div>
          </div>

          {/* Card 2: Other Agencies */}
          <div className="bg-[#121212] border border-white/10 rounded-3xl p-8 md:mt-4 opacity-70 hover:opacity-100 transition-opacity">
            <h3 className="text-xl font-bold text-white mb-8">Other Agencies</h3>
            <ul className="space-y-5">
              {features.map((item, idx) => (
                <li key={idx} className="flex items-center gap-3">
                  {item.agency ? (
                    <div className="bg-gray-700 rounded-full p-1">
                        <Check size={14} className="text-white" />
                    </div>
                  ) : (
                    <div className="bg-red-500/20 rounded-full p-1">
                        <X size={14} className="text-red-500" />
                    </div>
                  )}
                  <span className={`font-medium ${item.agency ? 'text-gray-300' : 'text-gray-600'}`}>{item.name}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Card 3: Freelancers */}
          <div className="bg-[#121212] border border-white/10 rounded-3xl p-8 md:mt-4 opacity-70 hover:opacity-100 transition-opacity">
            <h3 className="text-xl font-bold text-white mb-8">Freelancers</h3>
            <ul className="space-y-5">
              {features.map((item, idx) => (
                <li key={idx} className="flex items-center gap-3">
                  {item.freelancer ? (
                    <div className="bg-gray-700 rounded-full p-1">
                        <Check size={14} className="text-white" />
                    </div>
                  ) : (
                    <div className="bg-red-500/20 rounded-full p-1">
                        <X size={14} className="text-red-500" />
                    </div>
                  )}
                  <span className={`font-medium ${item.freelancer ? 'text-gray-300' : 'text-gray-600'}`}>{item.name}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}