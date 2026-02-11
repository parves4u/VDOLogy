import React, { useRef, useState } from "react";
import { Helmet } from "react-helmet";
import emailjs from '@emailjs/browser';
import { 
  MapPin, Mail, Phone, Facebook, Twitter, Instagram, 
  Send, Loader2, CheckCircle, MessageSquare 
} from "lucide-react";

// ✅ লেআউট এবং হেডার ইম্পোর্ট (পাথ ঠিক করা হয়েছে)
import PageLayout from "../Layout/PageLayout";
import LandingHeaderTen from "../Layout/Header/LandingHeader/LandingHeaderTen";

export default function ContactForm() {
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    // ✅ আপনার ক্রেডেনশিয়াল
    const SERVICE_ID = "service_zydjm2f";
    const TEMPLATE_ID = "template_8xqahbr";
    const PUBLIC_KEY = "cXS5Ip5W3QtJpbv6j"; 

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
      .then((result) => {
          setSuccess(true);
          setLoading(false);
          e.target.reset();
          setTimeout(() => setSuccess(false), 5000);
      }, (error) => {
          console.log(error.text);
          setLoading(false);
          alert("Failed to send message. Please try again.");
      });
  };

  return (
    <PageLayout>
      <Helmet>
        <title>Contact Us - VDOLogy</title>
        <meta name="description" content="Get in touch with VDOLogy for top-notch video editing and design services." />
        <link rel="canonical" href="https://www.vdology.com/contact" />
      </Helmet>

      {/* --- ১. হেডার সেকশন (হোম পেজের সাথে মিল রেখে) --- */}
      <div className="bg-main-black">
         <LandingHeaderTen />
      </div>

      {/* --- ২. মেইন কন্টাক্ট সেকশন --- */}
      <section className="relative py-20 md:py-32 bg-main-black overflow-hidden">
        
        {/* ব্যাকগ্রাউন্ড গ্লো ইফেক্ট */}
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-caribbean-green/5 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[120px] translate-x-1/2 translate-y-1/2 pointer-events-none"></div>

        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* ==========================
                LEFT SIDE: CONTACT INFO
               ========================== */}
            <div className="lg:col-span-5 space-y-10">
              <div data-aos="fade-right">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-caribbean-green/30 bg-caribbean-green/10 text-caribbean-green text-sm font-medium mb-6">
                    <MessageSquare size={16} />
                    Get in Touch
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
                  Let's Start a <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-caribbean-green to-emerald-400">
                    Conversation
                  </span>
                </h1>
                <p className="text-gray-400 text-lg leading-relaxed">
                  We peel back the layers of uncertainty, uncovering hidden truths that lie beneath the surface of your brand's potential.
                </p>
              </div>

              {/* Contact Details Cards */}
              <div className="space-y-6">
                
                {/* Address */}
                <div className="flex items-start gap-5 p-5 rounded-2xl bg-[#111] border border-white/5 hover:border-caribbean-green/30 transition-all duration-300 group" data-aos="fade-up" data-aos-delay="100">
                  <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-caribbean-green group-hover:bg-caribbean-green group-hover:text-black transition-all duration-300 shrink-0">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-lg mb-1">Bangladesh Office</h4>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      Prachir View, H#36/7/B/1, <br /> Shah Ali Bag, Dhaka 1216
                    </p>
                  </div>
                </div>

                {/* USA Office */}
                <div className="flex items-start gap-5 p-5 rounded-2xl bg-[#111] border border-white/5 hover:border-caribbean-green/30 transition-all duration-300 group" data-aos="fade-up" data-aos-delay="200">
                  <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-caribbean-green group-hover:bg-caribbean-green group-hover:text-black transition-all duration-300 shrink-0">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-lg mb-1">USA Office</h4>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      Ace Digital Solutions, LLC <br /> Nevada, United States
                    </p>
                  </div>
                </div>

                {/* Contact Info */}
                <div className="flex items-start gap-5 p-5 rounded-2xl bg-[#111] border border-white/5 hover:border-caribbean-green/30 transition-all duration-300 group" data-aos="fade-up" data-aos-delay="300">
                  <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-caribbean-green group-hover:bg-caribbean-green group-hover:text-black transition-all duration-300 shrink-0">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-lg mb-1">Contact Info</h4>
                    <p className="text-gray-400 text-sm hover:text-caribbean-green transition-colors">contact@vdology.com</p>
                    <p className="text-gray-400 text-sm hover:text-caribbean-green transition-colors mt-1">(+880) 1710 618285</p>
                  </div>
                </div>

              </div>

              {/* Social Media */}
              <div className="pt-4" data-aos="fade-up" data-aos-delay="400">
                <h5 className="text-white font-semibold mb-4">Follow Us</h5>
                <div className="flex gap-4">
                  {[
                    { icon: <Facebook size={20} />, link: "https://www.facebook.com/WeAreVDOLogy" },
                    { icon: <Twitter size={20} />, link: "https://x.com/WeAreVDOLogy" },
                    { icon: <Instagram size={20} />, link: "https://www.instagram.com/wearevdology" },
                  ].map((item, idx) => (
                    <a 
                      key={idx} 
                      href={item.link} 
                      target="_blank" 
                      rel="noreferrer"
                      className="w-11 h-11 rounded-full bg-[#1A1A1A] border border-white/10 flex items-center justify-center text-white hover:bg-caribbean-green hover:border-caribbean-green hover:text-black transition-all duration-300 hover:-translate-y-1"
                    >
                      {item.icon}
                    </a>
                  ))}
                  {/* WhatsApp Manual SVG */}
                  <a href="https://wa.link/61y1o5" target="_blank" rel="noreferrer" className="w-11 h-11 rounded-full bg-[#1A1A1A] border border-white/10 flex items-center justify-center text-white hover:bg-caribbean-green hover:border-caribbean-green hover:text-black transition-all duration-300 hover:-translate-y-1">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" /><path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1a5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1" /></svg>
                  </a>
                </div>
              </div>
            </div>

            {/* ==========================
                RIGHT SIDE: FORM
               ========================== */}
            <div className="lg:col-span-7" data-aos="fade-left">
              <div className="bg-[#0F0F0F] border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl relative">
                
                {/* Decorative Form Header */}
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-10 h-10 rounded-full bg-caribbean-green/10 flex items-center justify-center text-caribbean-green">
                    <MessageSquare size={20} />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Send Us a Message</h3>
                </div>

                <form ref={form} onSubmit={sendEmail} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  
                  {/* Full Name */}
                  <div className="md:col-span-1 space-y-2">
                    <label className="text-sm text-gray-400 ml-1">Full Name *</label>
                    <input
                      type="text"
                      name="user_name"
                      placeholder="John Doe"
                      required
                      className="w-full h-12 bg-[#1A1A1A] border border-white/10 rounded-xl px-4 text-white placeholder-gray-600 focus:outline-none focus:border-caribbean-green focus:ring-1 focus:ring-caribbean-green transition-all"
                    />
                  </div>

                  {/* Email */}
                  <div className="md:col-span-1 space-y-2">
                    <label className="text-sm text-gray-400 ml-1">Email Address *</label>
                    <input
                      type="email"
                      name="user_email"
                      placeholder="john@example.com"
                      required
                      className="w-full h-12 bg-[#1A1A1A] border border-white/10 rounded-xl px-4 text-white placeholder-gray-600 focus:outline-none focus:border-caribbean-green focus:ring-1 focus:ring-caribbean-green transition-all"
                    />
                  </div>

                  {/* Phone Number */}
                  <div className="md:col-span-1 space-y-2">
                    <label className="text-sm text-gray-400 ml-1">Phone Number</label>
                    <input
                      type="text"
                      name="phone_number"
                      placeholder="+880 1XXX XXXXXX"
                      className="w-full h-12 bg-[#1A1A1A] border border-white/10 rounded-xl px-4 text-white placeholder-gray-600 focus:outline-none focus:border-caribbean-green focus:ring-1 focus:ring-caribbean-green transition-all"
                    />
                  </div>

                  {/* Subject */}
                  <div className="md:col-span-1 space-y-2">
                    <label className="text-sm text-gray-400 ml-1">Subject *</label>
                    <input
                      type="text"
                      name="subject"
                      placeholder="Project Inquiry"
                      required
                      className="w-full h-12 bg-[#1A1A1A] border border-white/10 rounded-xl px-4 text-white placeholder-gray-600 focus:outline-none focus:border-caribbean-green focus:ring-1 focus:ring-caribbean-green transition-all"
                    />
                  </div>

                  {/* Message */}
                  <div className="md:col-span-2 space-y-2">
                    <label className="text-sm text-gray-400 ml-1">Your Message *</label>
                    <textarea
                      name="message"
                      rows="4"
                      placeholder="Tell us about your project..."
                      required
                      className="w-full bg-[#1A1A1A] border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-caribbean-green focus:ring-1 focus:ring-caribbean-green transition-all resize-none"
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <div className="md:col-span-2 mt-2">
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full sm:w-auto px-8 py-3.5 bg-caribbean-green text-black font-bold rounded-xl hover:bg-white hover:scale-[1.02] transition-all duration-300 shadow-[0_0_20px_rgba(0,223,142,0.3)] flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                      {loading ? (
                        <>
                          <Loader2 className="animate-spin" size={20} /> Sending...
                        </>
                      ) : success ? (
                        <>
                          <CheckCircle size={20} /> Message Sent!
                        </>
                      ) : (
                        <>
                          Send Message <Send size={18} />
                        </>
                      )}
                    </button>
                  </div>

                </form>
              </div>
            </div>

          </div>
        </div>
      </section>
    </PageLayout>
  );
}