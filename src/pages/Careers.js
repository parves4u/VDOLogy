import React, { useState, useRef } from "react";
import { UploadCloud, Send, CheckCircle, Loader2, Link as LinkIcon, User, Mail, Phone, Briefcase } from "lucide-react";
import emailjs from '@emailjs/browser';
import PageLayout from "../components/Layout/PageLayout"; // আপনার লেআউট ইমপোর্ট
import LandingHeaderTen from "../components/Layout/Header/LandingHeader/LandingHeaderTen"; // হেডার
import PortfolioFooter from "../components/Layout/Footer/PortfolioFooter"; // ফুটার

export default function Careers() {
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [fileName, setFileName] = useState("");

  // ফাইল হ্যান্ডলিং (নাম দেখানোর জন্য)
  const handleFileChange = (e) => {
    if (e.target.files.length > 0) {
      setFileName(e.target.files[0].name);
    }
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    // EmailJS Send Function
    // 'YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', 'YOUR_PUBLIC_KEY' এগুলো আপনার EmailJS ড্যাশবোর্ড থেকে নেবেন
    emailjs.sendForm('service_zydjm2f', 'template_8xqahbr', form.current, 'cXS5Ip5W3QtJpbv6j')
      .then((result) => {
          setSuccess(true);
          setLoading(false);
          setFileName("");
          e.target.reset();
          setTimeout(() => setSuccess(false), 6000);
      }, (error) => {
          console.log(error.text);
          setLoading(false);
          alert("Something went wrong. Please try again.");
      });
  };

  return (
    <PageLayout>
      {/* Header (Same logic as landing page) */}
      <LandingHeaderTen currentCategory={0} setCurrentCategory={() => {}} />

      <div className="bg-main-black min-h-screen pt-32 pb-20 relative overflow-hidden">
        
        {/* Background Glows */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-caribbean-green/5 rounded-full blur-[150px] pointer-events-none"></div>

        <div className="container mx-auto px-4 md:px-8 relative z-10">
          
          {/* --- Page Header --- */}
          <div className="text-center max-w-3xl mx-auto mb-16" data-aos="fade-up">
            <span className="px-4 py-1.5 rounded-full border border-caribbean-green/30 bg-caribbean-green/10 text-caribbean-green text-sm font-medium">
              We are Hiring!
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-white mt-6 mb-4 leading-tight">
              Join the <span className="text-transparent bg-clip-text bg-gradient-to-r from-caribbean-green to-emerald-400">VDOLogy</span> <br/> Creative Team
            </h1>
            <p className="text-gray-400 text-lg">
              We’re looking for passionate editors, designers, and developers. <br/> 
              Show us your best work and let's build something amazing together.
            </p>
          </div>

          {/* --- Application Form Container --- */}
          <div className="max-w-4xl mx-auto bg-[#0F0F0F] border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden" data-aos="fade-up" data-aos-delay="100">
            
            {/* Form Glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-caribbean-green/5 rounded-full blur-[80px] pointer-events-none"></div>

            <form ref={form} onSubmit={sendEmail} className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
              
              {/* Left Column */}
              <div className="space-y-6">
                
                {/* Name */}
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-300 flex items-center gap-2">
                    <User size={16} className="text-caribbean-green"/> Full Name
                  </label>
                  <input type="text" name="user_name" placeholder="John Doe" required 
                    className="w-full bg-[#1A1A1A] border border-white/10 rounded-xl px-5 py-3.5 text-white focus:border-caribbean-green focus:ring-1 focus:ring-caribbean-green outline-none transition-all" />
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-300 flex items-center gap-2">
                    <Mail size={16} className="text-caribbean-green"/> Email Address
                  </label>
                  <input type="email" name="user_email" placeholder="john@email.com" required 
                    className="w-full bg-[#1A1A1A] border border-white/10 rounded-xl px-5 py-3.5 text-white focus:border-caribbean-green focus:ring-1 focus:ring-caribbean-green outline-none transition-all" />
                </div>

                {/* Phone */}
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-300 flex items-center gap-2">
                    <Phone size={16} className="text-caribbean-green"/> Phone / WhatsApp
                  </label>
                  <input type="tel" name="user_phone" placeholder="+880 1XXX XXXXXX" required 
                    className="w-full bg-[#1A1A1A] border border-white/10 rounded-xl px-5 py-3.5 text-white focus:border-caribbean-green focus:ring-1 focus:ring-caribbean-green outline-none transition-all" />
                </div>

                {/* Role Selection */}
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-300 flex items-center gap-2">
                    <Briefcase size={16} className="text-caribbean-green"/> Applying For
                  </label>
                  <div className="relative">
                    <select name="position" className="w-full bg-[#1A1A1A] border border-white/10 rounded-xl px-5 py-3.5 text-white appearance-none focus:border-caribbean-green outline-none cursor-pointer">
                      <option>Video Editor</option>
                      <option>Motion Graphics Artist</option>
                      <option>Graphic Designer</option>
                      <option>Web Developer</option>
                      <option>Content Writer</option>
                      <option>Digital Marketer</option>
                    </select>
                    <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500">▼</div>
                  </div>
                </div>

              </div>

              {/* Right Column */}
              <div className="space-y-6">
                
                {/* Portfolio Link (Most Important) */}
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-300 flex items-center gap-2">
                    <LinkIcon size={16} className="text-caribbean-green"/> Portfolio / CV Link (Drive/Behance)
                  </label>
                  <input type="url" name="portfolio_link" placeholder="https://drive.google.com/..." required 
                    className="w-full bg-[#1A1A1A] border border-white/10 rounded-xl px-5 py-3.5 text-white focus:border-caribbean-green focus:ring-1 focus:ring-caribbean-green outline-none transition-all placeholder-gray-600" />
                  <p className="text-xs text-gray-500">Please provide a valid link to your CV or Portfolio folder.</p>
                </div>

                {/* File Upload UI */}
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-300 flex items-center gap-2">
                    <UploadCloud size={16} className="text-caribbean-green"/> Upload Resume (Optional)
                  </label>
                  <div className="relative group w-full h-32 border-2 border-dashed border-white/20 rounded-xl bg-[#1A1A1A] hover:bg-[#222] hover:border-caribbean-green transition-all flex flex-col items-center justify-center cursor-pointer">
                    <input 
                      type="file" 
                      name="resume_file"
                      onChange={handleFileChange}
                      className="absolute inset-0 w-full h-full opacity-0 cursor-pointer" 
                    />
                    <div className="text-center pointer-events-none">
                      {fileName ? (
                        <span className="text-caribbean-green font-semibold text-sm break-all px-4">{fileName}</span>
                      ) : (
                        <>
                          <p className="text-gray-400 text-sm font-medium group-hover:text-white">Click to Upload or Drag & Drop</p>
                          <p className="text-xs text-gray-600 mt-1">PDF, DOCX (Max 2MB)</p>
                        </>
                      )}
                    </div>
                  </div>
                </div>

                {/* Why You? */}
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-300">Why should we hire you?</label>
                  <textarea name="cover_letter" rows="3" placeholder="Tell us briefly about your experience..." 
                    className="w-full bg-[#1A1A1A] border border-white/10 rounded-xl px-5 py-3.5 text-white focus:border-caribbean-green outline-none transition-all resize-none"></textarea>
                </div>

              </div>

              {/* Submit Button */}
              <div className="md:col-span-2 pt-4">
                <button 
                  type="submit" 
                  disabled={loading}
                  className="w-full bg-gradient-to-r from-caribbean-green to-emerald-600 text-black font-bold py-4 rounded-xl shadow-lg hover:shadow-[0_0_30px_rgba(0,223,142,0.4)] transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center gap-2 text-lg"
                >
                  {loading ? (
                    <> <Loader2 className="animate-spin" /> Sending Application... </>
                  ) : success ? (
                    <> <CheckCircle /> Application Sent Successfully! </>
                  ) : (
                    <> Submit Application <Send size={20} /> </>
                  )}
                </button>
              </div>

            </form>
          </div>

        </div>
      </div>

      <PortfolioFooter currentCategory={0} setCurrentCategory={() => {}} />
    </PageLayout>
  );
}