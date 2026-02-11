import React, { useState, useRef } from "react";
import { Link } from "react-router-dom"; // ✅ Link ইমপোর্ট করা হয়েছে
import { Mail, MessageCircle, Briefcase, Send, CheckCircle, Loader2 } from "lucide-react";
import emailjs from '@emailjs/browser';

export default function PortfolioCta() {
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    // ✅ আপনার সঠিক আইডিগুলো এখানে বসানো হলো
    emailjs.sendForm('service_zydjm2f', 'template_8xqahbr', form.current, 'cXS5Ip5W3QtJpbv6j')
      .then((result) => {
          setSuccess(true);
          setLoading(false);
          e.target.reset();
          setTimeout(() => setSuccess(false), 5000);
      }, (error) => {
          console.log(error.text);
          setLoading(false);
          alert("Failed to send message. Please check your Public Key.");
      });
  };

  return (
    <section className="py-20 md:py-32 bg-main-black relative overflow-hidden" id="contact">
      
      {/* Background Glows */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-caribbean-green/10 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] translate-x-1/2 translate-y-1/2 pointer-events-none"></div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          
          {/* --- Left Column: Contact Info --- */}
          <div className="space-y-10">
            <div>
              <h2 className="text-4xl md:text-6xl font-bold text-white mb-4 leading-tight">
                Have a Project? <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-caribbean-green to-emerald-400">
                  Let's Talk
                </span>
              </h2>
              <p className="text-gray-400 text-lg max-w-md">
                See how design meets real results. Clean code, user-first experiences, and pixel-perfect design.
              </p>
            </div>

            <div className="space-y-5">
              {/* Card 1: Email */}
              <a href="mailto:contact@vdology.com" className="group flex items-center justify-between p-5 bg-[#111] border border-white/10 rounded-2xl hover:border-caribbean-green/50 transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,223,142,0.1)]">
                <div>
                  <h4 className="text-white font-bold text-lg mb-1">Email Us</h4>
                  <p className="text-gray-400 text-sm group-hover:text-white transition-colors">contact@vdology.com</p>
                </div>
                <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center text-gray-300 group-hover:bg-caribbean-green group-hover:text-black transition-all duration-300">
                  <Mail size={24} />
                </div>
              </a>

              {/* Card 2: WhatsApp */}
              <a href="https://wa.me/8801710618285" target="_blank" rel="noreferrer" className="group flex items-center justify-between p-5 bg-[#111] border border-white/10 rounded-2xl hover:border-caribbean-green/50 transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,223,142,0.1)]">
                <div>
                  <h4 className="text-white font-bold text-lg mb-1">Chat on WhatsApp</h4>
                  <p className="text-gray-400 text-sm group-hover:text-white transition-colors">+880 1710 618285</p>
                </div>
                <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center text-gray-300 group-hover:bg-caribbean-green group-hover:text-black transition-all duration-300">
                  <MessageCircle size={24} />
                </div>
              </a>

              {/* ✅ Card 3: Careers (Updated Link) */}
              <Link to="/careers" className="group flex items-center justify-between p-5 bg-[#111] border border-white/10 rounded-2xl hover:border-caribbean-green/50 transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,223,142,0.1)] cursor-pointer">
                <div>
                  <h4 className="text-white font-bold text-lg mb-1">Work at VDOLogy</h4>
                  <p className="text-gray-400 text-sm group-hover:text-white transition-colors">See current job opportunities</p>
                </div>
                <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center text-gray-300 group-hover:bg-caribbean-green group-hover:text-black transition-all duration-300">
                  <Briefcase size={24} />
                </div>
              </Link>
            </div>
          </div>

          {/* --- Right Column: Form --- */}
          <div className="relative">
            {/* Form Glow */}
            <div className="absolute -inset-1 bg-gradient-to-r from-caribbean-green to-blue-600 rounded-3xl blur opacity-20"></div>
            
            <div className="relative bg-[#0F0F0F] border border-white/10 rounded-3xl p-8 md:p-10 shadow-2xl">
              <form ref={form} onSubmit={sendEmail} className="space-y-6">
                
                {/* Full Name */}
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-400 ml-1">Full Name</label>
                  <input 
                    type="text" 
                    name="user_name"
                    placeholder="John Doe" 
                    required
                    className="w-full bg-[#1A1A1A] border border-white/10 rounded-xl px-5 py-4 text-white placeholder-gray-600 focus:outline-none focus:border-caribbean-green focus:ring-1 focus:ring-caribbean-green transition-all"
                  />
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-400 ml-1">Email Address</label>
                  <input 
                    type="email" 
                    name="user_email"
                    placeholder="john@example.com" 
                    required
                    className="w-full bg-[#1A1A1A] border border-white/10 rounded-xl px-5 py-4 text-white placeholder-gray-600 focus:outline-none focus:border-caribbean-green focus:ring-1 focus:ring-caribbean-green transition-all"
                  />
                </div>

                {/* Service Selection */}
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-400 ml-1">Interested In</label>
                  <div className="relative">
                    <select 
                        name="interest"
                        className="w-full bg-[#1A1A1A] border border-white/10 rounded-xl px-5 py-4 text-white appearance-none focus:outline-none focus:border-caribbean-green focus:ring-1 focus:ring-caribbean-green transition-all cursor-pointer"
                    >
                        <option>Video Editing</option>
                        <option>Short Form Videos</option>
                        <option>Graphic Design</option>
                        <option>Web Development</option>
                        <option>Podcast Production</option>
                        <option>2D/3D Animation</option>
                        <option>Other</option>
                    </select>
                    {/* Custom Arrow */}
                    <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
                    </div>
                  </div>
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-400 ml-1">Your Message</label>
                  <textarea 
                    name="message"
                    rows="4" 
                    placeholder="Tell us about your project..." 
                    required
                    className="w-full bg-[#1A1A1A] border border-white/10 rounded-xl px-5 py-4 text-white placeholder-gray-600 focus:outline-none focus:border-caribbean-green focus:ring-1 focus:ring-caribbean-green transition-all resize-none"
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button 
                  type="submit" 
                  disabled={loading}
                  className="w-full bg-gradient-to-r from-caribbean-green to-emerald-500 hover:from-emerald-500 hover:to-caribbean-green text-black font-bold py-4 rounded-xl shadow-[0_0_20px_rgba(0,223,142,0.4)] hover:shadow-[0_0_30px_rgba(0,223,142,0.6)] transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center gap-2"
                >
                  {loading ? (
                    <>
                        <Loader2 className="animate-spin" /> Sending...
                    </>
                  ) : success ? (
                    <>
                        <CheckCircle /> Message Sent!
                    </>
                  ) : (
                    <>
                        Send Message <Send size={18} />
                    </>
                  )}
                </button>

              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}