import React from "react";
import { Link } from "react-router-dom";
import { Check, Star, Zap } from "lucide-react";

// --- Pricing Data (Monthly Retainer Plans) ---
const pricingPlans = [
  {
    id: 1,
    name: "Starter Growth",
    price: "350.00",
    description: "Perfect for personal brands & startups looking for consistent monthly content.",
    features: [
      "4 High-Quality Video Edits (Up to 5 min)",
      "8 Custom Designed Banners/Posters",
      "4 Short-Form Videos (Reels/TikTok/Shorts)",
      "Basic Social Media Management",
      "Standard SEO Optimization",
      "5 Revisions per month"
    ],
    recommended: false,
  },
  {
    id: 2,
    name: "Business Pro",
    price: "750.00",
    description: "Ideal for growing businesses needing aggressive social presence and web support.",
    features: [
      "8 Premium Video Edits (Up to 10 min)",
      "15 Custom Banners & Thumbnails",
      "10 Viral Short-Form Videos",
      "Full Social Media Management & Posting",
      "Advanced SEO & Keyword Strategy",
      "Basic Website Management (Updates)",
      "Unlimited Revisions"
    ],
    recommended: true, // Highlights this card
  },
  {
    id: 3,
    name: "Ultimate Agency",
    price: "1,499.00",
    description: "Complete hands-off digital solution. We handle everything from content to web.",
    features: [
      "15 Cinematic Video Edits & Podcasts",
      "Unlimited Graphic Design & Banners",
      "20+ Short-Form Content & Motion Graphics",
      "Social Media Management & Paid Ads Setup",
      "Full Website Management & Tech Support",
      "Dedicated Project Manager",
      "Weekly Consultation & Strategy Calls"
    ],
    recommended: false,
  },
];

export default function PricingSection() {
  return (
    <section id="pricing" className="relative py-20 md:py-32 bg-main-black overflow-hidden">
      
      {/* --- Background Glow Effects --- */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-caribbean-green/5 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[120px] translate-x-1/2 translate-y-1/2 pointer-events-none"></div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        
        {/* --- Header --- */}
        <div className="text-center max-w-3xl mx-auto mb-16" data-aos="fade-up">
          <div className="inline-block px-4 py-1.5 rounded-full border border-caribbean-green/30 bg-caribbean-green/10 text-caribbean-green text-sm font-bold tracking-wide uppercase mb-4 shadow-[0_0_15px_rgba(0,223,142,0.1)]">
            Monthly Retainers
          </div>
          
          <h2 className="text-3xl md:text-5xl font-extrabold text-white leading-snug">
            Predictable Growth with <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-caribbean-green to-emerald-400 flex items-center justify-center gap-3 mt-2">
               Flat Monthly Pricing <Zap size={32} className="text-emerald-400 hidden sm:block" />
            </span>
          </h2>
          
          <p className="text-gray-400 mt-5 text-base md:text-lg">
            No hidden fees, no hourly rates. Just consistent, high-quality content and management delivered to your brand every single month.
          </p>
        </div>

        {/* --- Pricing Cards Grid --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <div
              key={plan.id}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className={`relative flex flex-col p-8 md:p-10 rounded-3xl border transition-all duration-300 group mt-4 md:mt-0
                ${plan.recommended 
                  ? "bg-[#111] border-caribbean-green/80 shadow-[0_0_40px_rgba(0,223,142,0.15)] scale-100 lg:scale-105 z-10" 
                  : "bg-[#0A0A0A] border-white/10 hover:border-caribbean-green/50 hover:bg-[#111]"
                }
              `}
            >
              {/* ✅ FIXED: Recommended Badge (Added whitespace-nowrap & w-max) */}
              {plan.recommended && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-max whitespace-nowrap bg-gradient-to-r from-caribbean-green to-emerald-500 text-black text-[10px] md:text-[11px] uppercase tracking-widest font-black px-4 md:px-5 py-1.5 md:py-2 rounded-full flex items-center gap-1.5 shadow-lg">
                  <Star size={14} fill="black" className="w-3 h-3 md:w-3.5 md:h-3.5" /> Most Popular
                </div>
              )}

              {/* Card Header */}
              <div className="mb-8 border-b border-white/10 pb-8 mt-2">
                <h3 className={`text-2xl font-bold mb-3 ${plan.recommended ? "text-white" : "text-gray-200"}`}>
                  {plan.name}
                </h3>
                <div className="flex items-end gap-1 mb-3">
                  <span className="text-xl text-gray-400 font-medium">$</span>
                  <span className={`text-5xl font-extrabold ${plan.recommended ? "text-caribbean-green" : "text-white"}`}>
                    {plan.price}
                  </span>
                  <span className="text-gray-400 text-sm font-medium mb-1">/mo</span>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">{plan.description}</p>
              </div>

              {/* Features List */}
              <ul className="flex-1 space-y-4 mb-10">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-gray-300 text-sm md:text-base font-medium">
                    <div className={`mt-0.5 w-5 h-5 rounded-full flex items-center justify-center shrink-0 
                      ${plan.recommended ? "bg-caribbean-green/20 text-caribbean-green" : "bg-white/5 text-gray-400 group-hover:text-caribbean-green transition-colors"}`}>
                      <Check size={12} strokeWidth={3} />
                    </div>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* CTA Button (Linked to Checkout) */}
              <Link 
                to="/checkout" 
                state={{ plan: plan }} 
                className="w-full mt-auto"
              >
                <button className={`w-full py-4 rounded-xl font-bold text-base transition-all duration-300 flex items-center justify-center gap-2
                  ${plan.recommended 
                    ? "bg-caribbean-green text-black hover:bg-white hover:scale-[1.02] shadow-[0_0_20px_rgba(0,223,142,0.4)]" 
                    : "bg-white/5 text-white hover:bg-caribbean-green hover:text-black border border-white/10"
                  }
                `}>
                  Get Started
                </button>
              </Link>

            </div>
          ))}
        </div>

        {/* --- Bottom Note --- */}
        <div className="text-center mt-16 text-gray-400 text-base" data-aos="fade-in">
          <p>Need a custom solution for a large enterprise? <Link to="/contact" className="text-caribbean-green font-bold hover:underline">Let's talk.</Link></p>
        </div>

      </div>
    </section>
  );
}