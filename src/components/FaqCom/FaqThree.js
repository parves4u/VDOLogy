import React, { useState } from "react";
import { Plus, Minus, HelpCircle } from "lucide-react";

const faqs = [
  {
    question: "What types of videos do you specialize in editing?",
    answer: "We specialize in editing a diverse range of videos, including promotional content, vlogs, interviews, and event coverage. Our expertise ensures high-quality, engaging visuals tailored to meet your specific needs.",
  },
  {
    question: "How long does the video editing process usually take?",
    answer: "The editing timeline depends on the complexity of the project. Simple edits may take a few days, while more detailed projects requiring advanced effects and revisions can take longer.",
  },
  {
    question: "What file formats do you accept for editing?",
    answer: "We support a wide range of video file formats, including MP4, MOV, AVI, and more. If you have a specific format in mind, feel free to reach out, and we'll ensure compatibility.",
  },
  {
    question: "Can I provide specific instructions for the editing style?",
    answer: "Absolutely! We welcome your input and encourage you to share your vision, preferred style, and any specific instructions. Whether it’s pacing, transitions, effects, or color grading.",
  },
  {
    question: "What are the key steps in your video editing process?",
    answer: "Our process includes initial consultation, footage review, rough cut, client feedback, final polish (color/audio), and delivery. We ensure you are involved at every key stage.",
  },
];

export default function FaqSection() {
  // ✅ একটিভ ইনডেক্স স্টেট (শুরুতে ১ম টি ওপেন থাকবে, তাই 0)
  const [openIndex, setOpenIndex] = useState(0); 

  const toggleFAQ = (index) => {
    // যদি একই বাটনে ক্লিক করা হয়, তবে সেটি বন্ধ হবে (null)
    // আর যদি নতুন বাটনে ক্লিক করা হয়, তবে সেটি ওপেন হবে (এবং আগেরটি অটো বন্ধ হবে)
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="relative py-20 bg-main-black overflow-hidden">
      
      {/* Background Glows */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-caribbean-green/5 rounded-full blur-[120px] translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[120px] -translate-x-1/2 translate-y-1/2 pointer-events-none"></div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        
        {/* Header Section (এখানে AOS রাখা হয়েছে কারণ এটি স্ট্যাটিক) */}
        <div className="text-center max-w-3xl mx-auto mb-16" data-aos="fade-up">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-caribbean-green/30 bg-caribbean-green/10 text-caribbean-green text-sm font-medium mb-6">
            <HelpCircle size={16} />
            Common Questions
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight mb-4">
            Frequently Asked <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-caribbean-green to-emerald-400">Questions</span>
          </h2>
          <p className="text-gray-400 text-lg">
            Everything you need to know about our services and billing.
          </p>
        </div>

        {/* FAQ Grid Layout */}
        <div className="max-w-3xl mx-auto flex flex-col gap-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div 
                key={index}
                // ❌ ফিক্স: এখান থেকে data-aos রিমুভ করা হয়েছে যাতে আইটেম হাইড না হয়ে যায়
                className={`group border rounded-2xl transition-all duration-500 overflow-hidden
                  ${isOpen 
                    ? "bg-white/5 border-caribbean-green shadow-[0_0_30px_-10px_rgba(0,223,142,0.3)]" 
                    : "bg-[#111] border-white/10 hover:border-white/20"
                  }
                `}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                >
                  <span className={`text-lg font-semibold transition-colors duration-300 ${isOpen ? "text-caribbean-green" : "text-white group-hover:text-gray-200"}`}>
                    {faq.question}
                  </span>
                  <span className={`p-2 rounded-full border transition-all duration-300 shrink-0 ml-4
                    ${isOpen 
                      ? "bg-caribbean-green border-caribbean-green text-black rotate-180" 
                      : "bg-transparent border-white/20 text-white group-hover:border-white/50"
                    }`}
                  >
                    {isOpen ? <Minus size={18} /> : <Plus size={18} />}
                  </span>
                </button>

                <div 
                  className={`grid transition-all duration-500 ease-in-out ${
                    isOpen ? "grid-rows-[1fr] opacity-100 pb-6" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden px-6 text-gray-400 leading-relaxed">
                    {faq.answer}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}