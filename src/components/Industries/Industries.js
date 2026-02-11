import React, { useState } from "react";
import { CheckCircle2, ArrowRight, Layers, Mic, MonitorPlay, Briefcase } from "lucide-react";

// ডামি ডাটা (আপনি চাইলে টেক্সট এবং ইমেজ লিংক পরিবর্তন করতে পারেন)
const industriesData = [
  {
    id: "podcasting",
    label: "Podcasting",
    icon: <Mic size={18} />,
    title: "Podcasting & Audio Series",
    description: "Our brilliant team are experts in both 2D and 3D Animation. We create Character Animation and Explainers for personal and commercial use to skyrocket your listener base.",
    points: [
      "Professional Audio Engineering",
      "Video Podcast Production (Multi-cam)",
      "Social Media Clips & Shorts from Episodes",
      "Full Episode Transcription & Show Notes"
    ],
    image: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?q=80&w=1920&auto=format&fit=crop"
  },
  {
    id: "corporate",
    label: "Corporate",
    icon: <Briefcase size={18} />,
    title: "Corporate & Enterprise",
    description: "Elevate your brand authority with high-end corporate videos. From internal training to external marketing, we ensure your message is delivered with professionalism.",
    points: [
      "Company Profile & Culture Videos",
      "Training & Onboarding Content",
      "Event Coverage & Highlights",
      "Executive Interviews & Testimonials"
    ],
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1920&auto=format&fit=crop"
  },
  {
    id: "saas",
    label: "SaaS & Tech",
    icon: <Layers size={18} />,
    title: "SaaS & Technology",
    description: "Simplify complex tech concepts with engaging visuals. We help SaaS companies demonstrate value and drive conversions through motion graphics and demos.",
    points: [
      "App & Software Demo Videos",
      "Explainer Animations",
      "Feature Release Highlights",
      "Customer Success Stories"
    ],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1920&auto=format&fit=crop"
  },
  {
    id: "content",
    label: "Content Creation",
    icon: <MonitorPlay size={18} />,
    title: "Content Creation",
    description: "For creators and influencers who need consistent, high-quality output. We handle the editing so you can focus on creating and engaging with your audience.",
    points: [
      "YouTube Video Editing & Optimization",
      "Viral Shorts/Reels/TikTok Edits",
      "Thumbnail Design & Strategy",
      "Channel Management Support"
    ],
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1920&auto=format&fit=crop"
  }
];

export default function Industries() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="py-20 md:py-28 bg-main-black relative overflow-hidden">
      
      {/* Background Glow Effects */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-caribbean-green/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-12">
          <span className="px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-sm font-medium text-caribbean-green">
            Our Works
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mt-6 mb-4 text-white">
            Industries We Work <span className="text-caribbean-green">With</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Montage Motion is an Advertising and Digital Agency specializing in Influencer Marketing
          </p>
        </div>

        {/* Custom Tabs Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <div className="bg-white/5 p-1.5 rounded-full border border-white/10 flex flex-wrap justify-center gap-2">
            {industriesData.map((tab, index) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(index)}
                className={`flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300
                  ${activeTab === index 
                    ? "bg-caribbean-green text-black shadow-[0_0_20px_rgba(0,223,142,0.4)] scale-105" 
                    : "text-gray-400 hover:text-white hover:bg-white/10"
                  }
                `}
              >
                {tab.icon}
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Content Card Area */}
        <div className="relative max-w-6xl mx-auto">
            {/* Animated Content Switcher */}
            {industriesData.map((item, index) => (
                <div 
                    key={item.id}
                    className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center bg-[#111] border border-white/10 rounded-3xl p-6 md:p-10 transition-all duration-700 absolute top-0 left-0 w-full
                    ${activeTab === index 
                        ? "opacity-100 translate-y-0 relative z-10" 
                        : "opacity-0 translate-y-8 absolute z-0 pointer-events-none hidden"
                    }
                    `}
                >
                    {/* Left: Text Content */}
                    <div className="order-2 lg:order-1 space-y-6">
                        <h3 className="text-3xl md:text-4xl font-bold text-white">
                            {item.title}
                        </h3>
                        <p className="text-gray-400 leading-relaxed text-lg">
                            {item.description}
                        </p>
                        
                        <ul className="space-y-4 pt-2">
                            {item.points.map((point, i) => (
                                <li key={i} className="flex items-center gap-3 text-gray-300">
                                    <CheckCircle2 className="text-caribbean-green shrink-0" size={20} />
                                    <span>{point}</span>
                                </li>
                            ))}
                        </ul>

                        <div className="pt-6">
                            <button className="flex items-center gap-2 px-8 py-3 bg-transparent border border-white/20 rounded-full text-white font-semibold hover:bg-caribbean-green hover:border-caribbean-green hover:text-black transition-all duration-300 group">
                                Book a Call
                                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                            </button>
                        </div>
                    </div>

                    {/* Right: Image */}
                    <div className="order-1 lg:order-2 relative group">
                        <div className="absolute inset-0 bg-caribbean-green/20 blur-[50px] rounded-full opacity-0 group-hover:opacity-50 transition-opacity duration-500"></div>
                        <div className="relative overflow-hidden rounded-2xl h-[300px] md:h-[400px] w-full border border-white/10 shadow-2xl">
                            <img 
                                src={item.image} 
                                alt={item.title} 
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            {/* Overlay Gradient */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                        </div>
                    </div>
                </div>
            ))}
        </div>

      </div>
    </section>
  );
}