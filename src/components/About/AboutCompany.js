import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { Play, X, CheckCircle2, Users, Trophy, Clock, ArrowRight } from "lucide-react";

// ✅ পাথ (Path) ঠিক আছে (components/Layout ফোল্ডারে ফাইল খুঁজবে)
import PageLayout from "../Layout/PageLayout";
import LandingHeaderTen from "../Layout/Header/LandingHeader/LandingHeaderTen";

export default function AboutCompany() {
  // --- States ---
  // ১. হিরো সেকশনের ভিডিও স্টেট
  const [videoOpen, setVideoOpen] = useState(false);
  const heroVideoId = "8GT8eqdcDz0"; // আপনার হিরো ভিডিও আইডি

  // ২. বেনিফিট সেকশনের ভিডিও স্টেট
  const [benefitVideoOpen, setBenefitVideoOpen] = useState(false);
  const benefitVideoId = "8GT8eqdcDz0"; // আপনার বেনিফিট ভিডিও আইডি

  return (
    <PageLayout>
      <Helmet>
        <title>About Us - VDOLogy</title>
        <meta
          name="description"
          content="VDOLogy is a creative agency specializing in video editing and graphic design."
        />
      </Helmet>

      {/* --- ১. হেডার সেকশন --- */}
      <div className="bg-main-black">
        <LandingHeaderTen />
      </div>

      {/* --- ২. হিরো সেকশন (About Us) --- */}
      <section className="relative py-20 md:py-32 bg-main-black overflow-hidden">
        
        {/* ব্যাকগ্রাউন্ড গ্লো ইফেক্ট */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-caribbean-green/5 rounded-full blur-[120px] translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-600/5 rounded-full blur-[100px] -translate-x-1/2 translate-y-1/2 pointer-events-none"></div>

        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            
            {/* টেক্সট কন্টেন্ট */}
            <div className="space-y-8" data-aos="fade-right">
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-caribbean-green/30 bg-caribbean-green/10 text-caribbean-green text-sm font-medium mb-6">
                  <Users size={16} />
                  About VDOLogy
                </div>
                <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
                  Crafting Visuals That <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-caribbean-green to-emerald-400">
                    Drive Success
                  </span>
                </h1>
                <p className="mt-6 text-gray-400 text-lg leading-relaxed">
                  We are more than just an agency; we are your creative partners.
                  Defined by innovation and storytelling mastery, we transform raw
                  ideas into digital legacies.
                </p>
              </div>

              {/* ছোট কার্ড */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="bg-[#111] p-6 rounded-2xl border border-white/5 hover:border-caribbean-green/30 transition-all duration-300 group">
                  <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center text-caribbean-green mb-4 group-hover:bg-caribbean-green group-hover:text-black transition-all">
                    <Trophy size={24} />
                  </div>
                  <h3 className="text-white text-xl font-bold mb-2">Expert Team</h3>
                  <p className="text-gray-400 text-sm">Top-tier editors and designers dedicated to your growth.</p>
                </div>

                <div className="bg-[#111] p-6 rounded-2xl border border-white/5 hover:border-caribbean-green/30 transition-all duration-300 group">
                  <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center text-caribbean-green mb-4 group-hover:bg-caribbean-green group-hover:text-black transition-all">
                    <CheckCircle2 size={24} />
                  </div>
                  <h3 className="text-white text-xl font-bold mb-2">Creative Solutions</h3>
                  <p className="text-gray-400 text-sm">Tailored visual strategies that leave a lasting impact.</p>
                </div>
              </div>
            </div>

            {/* ভিডিও এবং ইমেজ (হিরো) */}
            <div className="relative" data-aos="fade-left">
              <div className="relative rounded-3xl overflow-hidden border border-white/10 group">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop"
                  alt="Team working"
                  className="w-full h-[500px] object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-500"></div>
                
                {/* হিরো ভিডিও প্লে বাটন */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <button
                    onClick={() => setVideoOpen(true)}
                    className="relative w-20 h-20 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/30 text-white hover:bg-caribbean-green hover:border-caribbean-green hover:text-black transition-all duration-300 group/btn shadow-[0_0_30px_rgba(0,223,142,0.3)] animate-pulse hover:animate-none"
                  >
                    <Play size={32} className="ml-1 fill-current" />
                  </button>
                </div>
              </div>

              {/* ফ্লোটিং কার্ড */}
              <div className="absolute -bottom-10 -left-6 md:-left-12 bg-[#1A1A1A] border border-white/10 p-6 rounded-2xl shadow-2xl max-w-[260px] hidden sm:block">
                <div className="flex items-center gap-4 mb-3">
                  <div className="w-10 h-10 rounded-full bg-caribbean-green flex items-center justify-center text-black">
                    <Clock size={20} />
                  </div>
                  <span className="text-gray-400 text-sm">Since 2014</span>
                </div>
                <h3 className="text-3xl font-bold text-white">10+ Years</h3>
                <p className="text-gray-400 text-sm mt-1">of Professional Experience</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* --- ৩. বেনিফিট সেকশন (Our Benefit) --- */}
      <section className="w-full py-16 md:py-[130px] bg-main-black relative">
        <div className="w-full mx-auto theme-container px-4">
          
          {/* টাইটেল */}
          <div className="flex flex-col items-center justify-center mb-16">
            <div className="py-1.5 md:py-3 px-5 rounded-[30px] border-[1.2px] border-caribbean-green/30 w-fit bg-caribbean-green/10">
              <h1 className="text-base font-medium leading-5 tracking-tight text-caribbean-green">
                Our Benefit
              </h1>
            </div>
            <h1 className="mt-4 text-3xl md:text-5xl font-semibold text-white text-center max-w-[700px]">
              Why Choose <span className="text-caribbean-green">VDOLogy?</span>
            </h1>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            
            {/* বাম পাশ: ভিডিও (ক্লিন প্লে বাটন) */}
            <div data-aos="fade-right" className="col-span-1 lg:col-span-5">
              <div className="relative rounded-[30px] overflow-hidden group border border-white/10 h-full min-h-[400px]">
                <img
                  src="/assets/images/about/benefit-img.webp"
                  alt="Benefit"
                  className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* বেনিফিট ভিডিও প্লে বাটন */}
                <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/10 transition-all">
                  <div
                    onClick={() => setBenefitVideoOpen(true)}
                    className="w-[80px] h-[80px] rounded-full bg-white flex items-center justify-center cursor-pointer hover:scale-110 hover:bg-caribbean-green transition-all duration-300 shadow-[0_0_40px_rgba(255,255,255,0.2)]"
                  >
                    <Play className="w-8 h-8 text-black fill-black ml-1" />
                  </div>
                </div>
              </div>
            </div>

            {/* ডান পাশ: টেক্সট কার্ডস */}
            <div className="col-span-1 lg:col-span-7">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-[30px]">
                
                {[
                  { title: "Visual Storytelling", desc: "We create edits and designs that emotionally connect with your audience." },
                  { title: "Pro Tools & Talent", desc: "We use top tools and skilled artists to bring your vision to life." },
                  { title: "Budget-Friendly", desc: "High-quality videos and graphics delivered within your budget." },
                  { title: "Consistent Quality", desc: "We ensure brand consistency in every design and video we create." },
                  { title: "Time-saving", desc: "We handle the visuals so you can focus on growing your business." },
                  { title: "Consistent Results", desc: "Our data-driven approach ensures your content performs every time." },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    data-aos="fade-left"
                    data-aos-delay={idx * 100}
                    className="bg-[#111] p-6 md:p-8 rounded-2xl border border-white/5 hover:border-caribbean-green/40 transition-all duration-300 hover:-translate-y-1 group"
                  >
                    <h1 className="text-xl font-bold leading-6 text-white group-hover:text-caribbean-green transition-colors">
                      {item.title}
                    </h1>
                    <p className="mt-3 text-gray-400 text-sm leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                ))}

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- ৪. মডাল সেকশন (Modals) --- */}
      
      {/* Hero Video Modal */}
      {videoOpen && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/95 backdrop-blur-md p-4 animate-in fade-in duration-300">
          <div className="relative w-full max-w-5xl aspect-video bg-black rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
            <button onClick={() => setVideoOpen(false)} className="absolute top-4 right-4 z-10 w-10 h-10 bg-black/50 hover:bg-red-500 text-white rounded-full flex items-center justify-center transition-all">
              <X size={24} />
            </button>
            <iframe className="w-full h-full" src={`https://www.youtube.com/embed/${heroVideoId}?autoplay=1`} title="About VDOLogy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          </div>
        </div>
      )}

      {/* Benefit Video Modal */}
      {benefitVideoOpen && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/95 backdrop-blur-md p-4 animate-in fade-in duration-300">
          <div className="relative w-full max-w-5xl aspect-video bg-black rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
            <button onClick={() => setBenefitVideoOpen(false)} className="absolute top-4 right-4 z-10 w-10 h-10 bg-black/50 hover:bg-red-500 text-white rounded-full flex items-center justify-center transition-all">
              <X size={24} />
            </button>
            <iframe className="w-full h-full" src={`https://www.youtube.com/embed/${benefitVideoId}?autoplay=1`} title="Our Benefits Video" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          </div>
        </div>
      )}

    </PageLayout>
  );
}