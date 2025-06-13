"use client";
import React, { useState } from "react";

const faqs = [
  {
    question: "What types of videos do you specialize in editing?",
    answer:
      "We specialize in editing a diverse range of videos, including promotional content, vlogs, interviews, and event coverage. Our expertise ensures high-quality, engaging visuals tailored to meet your specific needs.",
  },
  {
    question: "How long does the video editing process usually take?",
    answer:
      "The editing timeline depends on the complexity of the project. Simple edits may take a few days, while more detailed projects requiring advanced effects and revisions can take longer. We always strive to deliver high-quality work within a reasonable timeframe.",
  },
  {
    question: "What file formats do you accept for editing?",
    answer:
      "We support a wide range of video file formats, including MP4, MOV, AVI, and more. If you have a specific format in mind, feel free to reach out, and we'll ensure compatibility for seamless editing.",
  },
  {
    question: "Can I provide specific instructions for the editing style and preferences?",
    answer:
      "Absolutely! We welcome your input and encourage you to share your vision, preferred style, and any specific instructions. Whether it’s pacing, transitions, effects, or color grading, we ensure that the final edit aligns with your expectations.",
  },
  {
    question: "What are the key steps in your video editing process?",
    answer:
      "We specialize in editing a wide range of videos , including but not limited to promotional content, vlogs ,interviews, and event coverage.",
  },
  // Add more FAQ items here if needed
];

export default function FaqThree() {
  const [activeFAQ, setActiveFAQ] = useState(0);

  const toggleFAQ = (index) => {
    setActiveFAQ(activeFAQ === index ? 0 : index);
  };

  return (
    <section id="faq" className="relative pb-20 bg-[#101828]">
      <div className="w-full pb-16 md:pb-[30px] relative z-10">
        <div className="mx-auto theme-container">
          <div className="relative flex items-center justify-center px-4 overflow-hidden md:px-0 rounded-3xl">
            <div className="max-w-[850px] w-full flex justify-center items-center flex-col relative z-10">
              <h1 className="py-0.5 px-5 bg-[#00DF8E]/10 border-[#00DF8E]/20 border rounded-[30px] font-medium text-[#00DF8E]">
                FAQs
              </h1>
              <h2 className="mt-5 font-semibold text-24 sm:text-48 text-white">
                Asked Questions & Answer
              </h2>
              <div className="flex flex-col gap-2.5 w-full mt-5 md:mt-10 p-0 sm:p-5">
                {faqs.map((faq, index) => (
                  <div
                    key={index}
                    className={`py-5 px-2 md:px-9 w-full cursor-pointer rounded-[10px] overflow-hidden transition-all duration-300 max-h-fit border ${
                      activeFAQ === index
                        ? "border-[#00DF8E]/20 bg-[#00DF8E]/10"
                        : "border-[#00DF8E]/10"
                    }`}
                    onClick={() => toggleFAQ(index)}
                  >
                    <div className="flex items-center justify-between w-full pointer-events-none h-fit">
                      <h1 className="font-semibold sm:text-18 text-white">
                        {faq.question}
                      </h1>
                      <svg
                        width="19"
                        height="10"
                        viewBox="0 0 19 10"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M2 2L9.5 8L17 2"
                          stroke="#00DF8E"
                          strokeWidth="3"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    {activeFAQ === index && (
                      <p className="mt-3.5 text-white pointer-events-none h-fit">
                        {faq.answer}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}