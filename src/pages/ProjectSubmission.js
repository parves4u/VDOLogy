import React, { useState, useRef } from "react";
import { Send, CheckCircle2, Loader2, Link as LinkIcon, User, Film, FolderUp } from "lucide-react";
import emailjs from '@emailjs/browser';
import PageLayout from "../components/Layout/PageLayout";
import LandingHeaderTen from "../components/Layout/Header/LandingHeader/LandingHeaderTen";
import PortfolioFooter from "../components/Layout/Footer/PortfolioFooter";

export default function ProjectSubmission() {
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    // EmailJS Send Function
    // ✅ আপনার EmailJS আইডিগুলো দেওয়া আছে
    emailjs.sendForm('service_zydjm2f', 'template_8xqahbr', form.current, 'cXS5Ip5W3QtJpbv6j')
      .then((result) => {
          setSuccess(true);
          setLoading(false);
          e.target.reset();
          setTimeout(() => setSuccess(false), 6000);
      }, (error) => {
          console.log(error.text);
          setLoading(false);
          alert("Something went wrong. Please check your connection.");
      });
  };

  return (
    <PageLayout>
      <LandingHeaderTen currentCategory={0} setCurrentCategory={() => {}} />

      <section className="relative pt-32 pb-24 bg-main-black min-h-screen overflow-hidden">
        
        {/* Background Ambient Glows */}
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-caribbean-green/5 rounded-full blur-[150px] pointer-events-none"></div>

        <div className="container mx-auto px-4 md:px-8 relative z-10">
          
          {/* --- Header --- */}
          <div className="text-center max-w-3xl mx-auto mb-16" data-aos="fade-up">
            <span className="px-5 py-2 rounded-full border border-caribbean-green/30 bg-caribbean-green/10 text-sm font-bold text-caribbean-green tracking-wide uppercase shadow-[0_0_15px_rgba(0,223,142,0.15)]">
              Client Portal
            </span>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white mt-6 mb-4 leading-tight">
              Submit Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-caribbean-green to-emerald-400">Project</span>
            </h1>
            <p className="text-gray-400 text-lg">
              Provide your project details and share your assets via cloud link. We'll review your requirements and get to work immediately!
            </p>
          </div>

          {/* --- Form Container --- */}
          <div className="max-w-4xl mx-auto bg-[#0F0F0F] border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl relative" data-aos="fade-up" data-aos-delay="100">
            
            {/* Form Glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-caribbean-green/5 rounded-full blur-[80px] pointer-events-none"></div>

            <form ref={form} onSubmit={sendEmail} className="relative z-10 space-y-8">
              
              {/* 1. Personal Details */}
              <div>
                <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2 border-b border-white/10 pb-3">
                  <User className="text-caribbean-green" size={20} /> Personal Information
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-400">Full Name / Brand Name *</label>
                    <input type="text" name="user_name" required placeholder="John Doe or Acme Corp" 
                      className="w-full bg-[#1A1A1A] border border-white/10 rounded-xl px-5 py-4 text-white focus:border-caribbean-green focus:ring-1 focus:ring-caribbean-green outline-none transition-all" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-400">Email Address *</label>
                    <input type="email" name="user_email" required placeholder="contact@brand.com" 
                      className="w-full bg-[#1A1A1A] border border-white/10 rounded-xl px-5 py-4 text-white focus:border-caribbean-green focus:ring-1 focus:ring-caribbean-green outline-none transition-all" />
                  </div>
                </div>
              </div>

              {/* 2. Project Details */}
              <div>
                <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2 border-b border-white/10 pb-3 mt-4">
                  <Film className="text-caribbean-green" size={20} /> Project Requirements
                </h3>
                
                <div className="space-y-6">
                  {/* Service Selection */}
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-400">What service do you need? *</label>
                    <div className="relative">
                      <select name="service_type" required className="w-full bg-[#1A1A1A] border border-white/10 rounded-xl px-5 py-4 text-white appearance-none focus:border-caribbean-green outline-none cursor-pointer">
                        <option value="">Select a service...</option>
                        <option value="Video Editing">Video Editing (YouTube, Corporate)</option>
                        <option value="Short Form Video">Short Form Video (Reels, TikTok)</option>
                        <option value="Motion Graphics">Motion Graphics & 2D/3D</option>
                        <option value="Graphic Design">Graphic Design & Thumbnails</option>
                        <option value="Web Development">Web Development (WordPress/Shopify)</option>
                        <option value="Multiple Services">Multiple Services</option>
                      </select>
                      <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500">▼</div>
                    </div>
                  </div>

                  {/* Project Description */}
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-400">Project Brief / Instructions *</label>
                    <textarea name="message" required rows="5" placeholder="Explain your vision, target audience, style references, and any specific instructions..." 
                      className="w-full bg-[#1A1A1A] border border-white/10 rounded-xl px-5 py-4 text-white focus:border-caribbean-green outline-none transition-all resize-none"></textarea>
                  </div>
                </div>
              </div>

              {/* 3. Assets Upload (The Creative Solution for heavy files) */}
              <div className="bg-[#151515] border border-dashed border-caribbean-green/30 p-6 md:p-8 rounded-2xl relative overflow-hidden group hover:border-caribbean-green transition-all">
                 <div className="absolute inset-0 bg-caribbean-green/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                 
                 <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center gap-6">
                    <div className="w-16 h-16 rounded-full bg-caribbean-green/10 flex items-center justify-center shrink-0">
                      <FolderUp size={32} className="text-caribbean-green" />
                    </div>
                    <div className="flex-1 space-y-3 w-full">
                      <div>
                        <h4 className="text-white font-bold text-lg">Project Assets & Raw Files *</h4>
                        <p className="text-gray-400 text-sm mt-1">Upload your raw videos, logos, or brand assets to <strong className="text-white">Google Drive, Dropbox, or WeTransfer</strong> and paste the shareable link below.</p>
                      </div>
                      
                      <div className="relative w-full">
                        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500">
                          <LinkIcon size={18} />
                        </div>
                        <input type="url" name="project_link" required placeholder="https://drive.google.com/drive/folders/..." 
                          className="w-full bg-black border border-white/10 rounded-xl pl-12 pr-5 py-4 text-white focus:border-caribbean-green focus:ring-1 focus:ring-caribbean-green outline-none transition-all placeholder-gray-600" />
                      </div>
                    </div>
                 </div>
              </div>

              {/* Submit Button */}
              <div className="pt-6">
                <button 
                  type="submit" 
                  disabled={loading}
                  className="w-full bg-gradient-to-r from-caribbean-green to-emerald-600 text-black font-extrabold text-lg py-5 rounded-xl shadow-[0_0_20px_rgba(0,223,142,0.3)] hover:shadow-[0_0_40px_rgba(0,223,142,0.5)] transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center gap-3 disabled:opacity-70 disabled:hover:translate-y-0"
                >
                  {loading ? (
                    <> <Loader2 className="animate-spin" size={24} /> Sending Project Details... </>
                  ) : success ? (
                    <> <CheckCircle2 size={24} /> Project Submitted Successfully! </>
                  ) : (
                    <> Submit Project <Send size={20} /> </>
                  )}
                </button>
                <p className="text-center text-gray-500 text-xs mt-4">By submitting, you agree to our terms of service and privacy policy.</p>
              </div>

            </form>
          </div>

        </div>
      </section>

      <PortfolioFooter currentCategory={0} setCurrentCategory={() => {}} />
    </PageLayout>
  );
}