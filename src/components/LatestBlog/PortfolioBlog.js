import React from "react";
import { Link } from "react-router-dom";
import { Check, Star } from "lucide-react";

// --- Pricing Data (Services Integrated) ---
const pricingPlans = [
  {
    id: 1,
    name: "Content Starter",
    price: "150.00",
    description: "Best for YouTubers & Content Creators",
    features: [
      "Professional Video Editing",
      "Youtube Thumbnail Design",
      "Creative Graphic Design",
      "Color Grading & Audio Mix",
      "2 Revisions per task",
    ],
    recommended: false,
  },
  {
    id: 2,
    name: "Business Growth",
    price: "300.00",
    description: "For Brands, Ads & Social Media Scaling",
    features: [
      "Advanced Motion Graphics",
      "Product Promotional Video",
      "AI Avatar & Clone Video",
      "Social Media Management",
      "Unlimited Revisions",
    ],
    recommended: true, // Highlights this card
  },
  {
    id: 3,
    name: "Ultimate Agency",
    price: "500.00",
    description: "Complete Digital Solution & Web Tech",
    features: [
      "Website Development (Full Stack)",
      "Website Management & Maintenance",
      "Premium Explainer Videos",
      "Full Branding Suite",
      "Dedicated Project Manager",
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
          <div className="inline-block px-4 py-1.5 rounded-full border border-caribbean-green/30 bg-caribbean-green/10 text-caribbean-green text-sm font-medium mb-4">
            Service Packages
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight">
            Choose the Right Plan for <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-caribbean-green to-emerald-400">
              Your Digital Growth
            </span>
          </h2>
        </div>

        {/* --- Pricing Cards Grid --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <div
              key={plan.id}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className={`relative flex flex-col p-8 rounded-3xl border transition-all duration-300 group
                ${plan.recommended 
                  ? "bg-white/5 border-caribbean-green shadow-[0_0_30px_rgba(0,223,142,0.15)] scale-100 lg:scale-105 z-10" 
                  : "bg-[#111] border-white/10 hover:border-caribbean-green/50 hover:bg-white/5"
                }
              `}
            >
              {/* Recommended Badge */}
              {plan.recommended && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-caribbean-green text-black text-xs font-bold px-4 py-1.5 rounded-full flex items-center gap-1 shadow-lg">
                  <Star size={12} fill="black" /> POPULAR CHOICE
                </div>
              )}

              {/* Card Header */}
              <div className="mb-6">
                <h3 className={`text-xl font-bold mb-2 ${plan.recommended ? "text-caribbean-green" : "text-white"}`}>
                  {plan.name}
                </h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl md:text-5xl font-bold text-white">${plan.price}</span>
                  <span className="text-gray-400 text-sm">/month</span>
                </div>
                <p className="text-gray-400 text-sm mt-3">{plan.description}</p>
              </div>

              {/* Features List */}
              <ul className="flex-1 space-y-4 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-gray-300 text-sm">
                    <div className={`mt-0.5 w-5 h-5 rounded-full flex items-center justify-center shrink-0 
                      ${plan.recommended ? "bg-caribbean-green text-black" : "bg-white/10 text-caribbean-green"}`}>
                      <Check size={12} strokeWidth={3} />
                    </div>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* CTA Button (Linked to Checkout) */}
              <Link 
                to="/checkout" 
                state={{ plan: plan }} // Sending Plan Data to Checkout
                className="w-full"
              >
                <button className={`w-full py-3.5 rounded-xl font-bold text-sm transition-all duration-300
                  ${plan.recommended 
                    ? "bg-caribbean-green text-black hover:bg-white hover:scale-[1.02] shadow-lg" 
                    : "bg-white/10 text-white hover:bg-caribbean-green hover:text-black border border-white/10"
                  }
                `}>
                  Buy Now
                </button>
              </Link>

            </div>
          ))}
        </div>

        {/* --- Bottom Note --- */}
        <div className="text-center mt-12 text-gray-500 text-sm" data-aos="fade-in">
          <p>Need a specific service? <Link to="/contact" className="text-caribbean-green hover:underline">Contact us</Link> for a custom quote.</p>
        </div>

      </div>
    </section>
  );
}