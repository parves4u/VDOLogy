import React from "react";

// লোগো ডাটা (এখানে আপনি আপনার ক্লায়েন্টদের লোগো বসাবেন)
// আমি ভিডিওর মতো কিছু ডামি লোগো ব্যবহার করেছি
const brands = [
  { id: 1, name: "Uber", img: "https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" },
  { id: 2, name: "Amazon", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/2560px-Amazon_logo.svg.png" },
  { id: 3, name: "Oppo", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/OPPO_Logo.svg/2560px-OPPO_Logo.svg.png" },
  { id: 4, name: "Nestel", img: "https://upload.wikimedia.org/wikipedia/commons/b/bf/Nestl%C3%A9_textlogo.svg" },
  { id: 5, name: "Shopify", img: "https://upload.wikimedia.org/wikipedia/commons/0/0e/Shopify_logo_2018.svg" },
  { id: 6, name: "Walmart", img: "https://upload.wikimedia.org/wikipedia/commons/b/b1/Walmart_logo_%282008%29.svg" },
  { id: 7, name: "Airbnb", img: "https://upload.wikimedia.org/wikipedia/commons/6/69/Airbnb_Logo_B%C3%A9lo.svg" },
  { id: 8, name: "T Mobile", img: "https://upload.wikimedia.org/wikipedia/commons/e/ee/T-Mobile_logo.svg" },
  { id: 9, name: "Wayfair", img: "https://upload.wikimedia.org/wikipedia/commons/7/75/Wayfair_logo.svg" },
];

export default function TrustedBrands() {
  return (
    <section className="py-10 bg-main-black relative overflow-hidden border-t border-white/5 border-b">
      
      {/* --- লেফট সাইড ফেড ইফেক্ট (Gradient) --- */}
      <div className="absolute left-0 top-0 h-full w-24 md:w-40 bg-gradient-to-r from-main-black to-transparent z-10 pointer-events-none"></div>

      {/* --- রাইট সাইড ফেড ইফেক্ট (Gradient) --- */}
      <div className="absolute right-0 top-0 h-full w-24 md:w-40 bg-gradient-to-l from-main-black to-transparent z-10 pointer-events-none"></div>

      {/* --- স্ক্রলিং কন্টেইনার --- */}
      <div className="flex w-full group">
        <div className="flex animate-marquee hover:[animation-play-state:paused] items-center gap-16 md:gap-24 pr-16">
          
          {/* লোগো লুপ (৩ বার রিপিট করা হয়েছে স্মুথ ইনফিনিটি স্ক্রলের জন্য) */}
          {[...brands, ...brands, ...brands].map((brand, index) => (
            <div key={index} className="flex-shrink-0 flex items-center justify-center h-12 w-32 md:w-40 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300 cursor-pointer">
              <img 
                src={brand.img} 
                alt={brand.name} 
                className="max-h-full max-w-full object-contain filter brightness-0 invert hover:filter-none" 
              />
            </div>
          ))}

        </div>
      </div>

      {/* --- এনিমেশন CSS --- */}
      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            /* ৩ বার ডাটা ডুপ্লিকেট করায় -৩৩.৩৩% এ রিসেট হবে */
            transform: translateX(-33.33%); 
          }
        }
        .animate-marquee {
          display: flex;
          width: max-content;
          animation: marquee 30s linear infinite; /* স্পিড কন্ট্রোল করুন এখানে */
        }
      `}</style>
    </section>
  );
}