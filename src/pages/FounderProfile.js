import React from "react";
import { Link } from "react-router-dom";
import {
  Facebook, Linkedin, Twitter, Mail,
  Briefcase, GraduationCap, Video,
  Layers, Palette, Cpu, Globe, Megaphone
} from "lucide-react";
import PageLayout from "../components/Layout/PageLayout";
import LandingHeaderTen from "../components/Layout/Header/LandingHeader/LandingHeaderTen";
import PortfolioFooter from "../components/Layout/Footer/PortfolioFooter";

export default function FounderProfile() {
  return (
    <PageLayout>
      <LandingHeaderTen currentCategory={0} setCurrentCategory={() => { }} />

      {/* =======================
          1. HERO SECTION
      ======================== */}
      <section className="relative pt-36 pb-20 bg-main-black overflow-hidden">
        {/* Background Glows */}
        <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-caribbean-green/5 rounded-full blur-[150px] pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[150px] pointer-events-none"></div>

        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

            {/* ========================================================
                Left: Image & Badge (✅ MOBILE FIX APPLIED HERE)
            ========================================================= */}
            <div className="w-full lg:w-[45%] relative" data-aos="fade-right">
              
              {/* Card Container: Flex on mobile, Block on Desktop */}
              <div className="relative z-10 rounded-3xl overflow-hidden border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.3)] group bg-[#0F0F0F] flex flex-col md:block">
                
                {/* Image Wrapper */}
                {/* মোবাইলে ফিক্সড হাইট (380px) এবং ডেক্সটপে aspect-ratio ব্যবহার করা হয়েছে */}
                <div className="relative w-full h-[380px] sm:h-[450px] md:h-auto md:aspect-[4/5] overflow-hidden">
                  <img
                    src="https://cdn.jsdelivr.net/gh/parves4u/images/Parves.jpg" 
                    alt="MD Parves Sikder"
                    className="w-full h-full object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-700 transform group-hover:scale-105"
                  />
                  {/* Desktop Gradient Overlay (মোবাইলে হাইড করা হয়েছে) */}
                  <div className="hidden md:block absolute inset-0 bg-gradient-to-t from-[#0F0F0F] via-[#0F0F0F]/70 to-transparent"></div>
                </div>

                {/* Text Container */}
                {/* মোবাইলে ছবির নিচে থাকবে, ডেক্সটপে ছবির ওপরে (Absolute) থাকবে */}
                <div className="relative md:absolute md:bottom-0 md:left-0 md:right-0 p-6 md:p-8 md:pt-32 text-center md:text-left bg-[#151515] md:bg-transparent border-t border-white/5 md:border-none z-20">
                  <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-1 md:mb-2">MD Parves Sikder</h1>
                  <p className="text-caribbean-green text-sm md:text-lg font-bold tracking-wide uppercase mb-3 md:mb-1">Founder & CEO, VDOLogy</p>
                  
                  {/* Divider for Mobile Only */}
                  <div className="w-12 h-1 bg-caribbean-green/30 rounded-full mx-auto my-3 md:hidden"></div>
                  
                  <p className="text-gray-400 text-xs md:text-sm font-medium tracking-wide">Video Editor • Motion Graphics • Web Developer</p>
                </div>

              </div>
              
              {/* Decorative Border (Hidden on mobile to save space) */}
              <div className="absolute -top-4 -left-4 w-full h-full border-2 border-caribbean-green/20 rounded-3xl -z-10 hidden md:block"></div>
            </div>

            {/* ========================================================
                Right: Intro Content 
            ========================================================= */}
            <div className="w-full lg:w-[55%]" data-aos="fade-left">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-caribbean-green/30 bg-caribbean-green/10 text-caribbean-green text-sm font-medium mb-6">
                <span className="w-2 h-2 rounded-full bg-caribbean-green animate-pulse"></span>
                10+ Years of Experience
              </div>

              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                Crafting Visual Stories <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-caribbean-green to-emerald-400">
                  That Drive Results.
                </span>
              </h2>

              <div className="space-y-5 text-gray-400 text-base md:text-lg leading-relaxed mb-8 md:text-justify">
                <p>
                  Hi, I’m <strong>Parves</strong>. I am a passionate Creative Director specializing in <strong>Video Editing, Motion Graphics, and Graphic Design</strong>.
                </p>
                <p>
                  My journey began in 2016, blending a background in Computer Science with a deep love for creative arts. While my core expertise lies in crafting cinematic videos and stunning visuals, I believe in offering a complete digital solution. To help brands scale seamlessly, I also provide expert <strong>Website Development</strong> and <strong>Digital Marketing</strong> services—ensuring your visual identity matches your digital presence.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center gap-6">
                <Link to="/submit-project" className="w-full sm:w-auto text-center px-8 py-3.5 rounded-full bg-caribbean-green text-black font-bold hover:bg-white transition-all shadow-[0_0_20px_rgba(0,223,142,0.3)]">
                  Start a Project
                </Link>
                <div className="flex gap-4">
                  <SocialIcon Icon={Facebook} link="https://www.facebook.com/JourneyWithParves/" color="hover:bg-blue-600" ariaLabel="Facebook Profile" />
                  <SocialIcon Icon={Linkedin} link="https://www.linkedin.com/in/parvesbsl/" color="hover:bg-blue-500" ariaLabel="LinkedIn Profile" />
                  <SocialIcon Icon={Twitter} link="https://x.com/parvesbsl" color="hover:bg-sky-400" ariaLabel="Twitter Profile" />
                  <SocialIcon Icon={Mail} link="mailto:parvestk@gmail.com" color="hover:bg-red-500" ariaLabel="Send Email" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =======================
          2. CORE EXPERTISE
      ======================== */}
      <section className="py-20 bg-[#0F0F0F] relative border-t border-white/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white">My Core Expertise</h2>
            <p className="text-gray-400 mt-3">The primary services I deliver with perfection</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <ExpertiseCard
              icon={<Video size={32} />}
              title="Video Editing"
              desc="Cinematic storytelling, Documentary style, and high-retention social media edits using Premiere Pro & DaVinci Resolve."
            />
            <ExpertiseCard
              icon={<Layers size={32} />}
              title="Motion Graphics"
              desc="Advanced 2D animation, Kinetic Typography, and VFX compositing using After Effects to bring static visuals to life."
            />
            <ExpertiseCard
              icon={<Palette size={32} />}
              title="Graphic Design"
              desc="Brand identity, Thumbnails, and UI elements designed with Adobe Photoshop & Illustrator for maximum impact."
            />
          </div>
        </div>
      </section>

      {/* =======================
          3. TECH & GROWTH SKILLS (Versatility)
      ======================== */}
      <section className="py-20 bg-main-black relative">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12">

            {/* Left: Tech Skills */}
            <div className="w-full lg:w-1/2">
              <h3 className="text-2xl font-bold text-white mb-8 border-l-4 border-caribbean-green pl-4">
                Beyond Creativity (Tech & AI)
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <TechCard icon={<Cpu />} title="AI Generation" desc="Video, Image & Prompt Engineering" />
                <TechCard icon={<Globe />} title="Web Development" desc="WordPress, Shopify & Custom Code" />
                <TechCard icon={<Megaphone />} title="Digital Marketing" desc="Facebook Boosting & Ad Management" />
                <TechCard icon={<Briefcase />} title="Social Management" desc="Full Page Growth Strategy" />
              </div>
            </div>

            {/* Right: Software Proficiency */}
            <div className="w-full lg:w-1/2">
              <h3 className="text-2xl font-bold text-white mb-8 border-l-4 border-caribbean-green pl-4">
                Software Proficiency
              </h3>
              <div className="space-y-6 bg-[#111] p-6 md:p-8 rounded-2xl border border-white/10">
                <SkillBar name="Adobe Premiere Pro" percent="95%" />
                <SkillBar name="Adobe After Effects" percent="90%" />
                <SkillBar name="DaVinci Resolve" percent="85%" />
                <SkillBar name="Adobe Photoshop" percent="92%" />
                <SkillBar name="WordPress / Shopify" percent="80%" />
                <SkillBar name="AI Tools (Midjourney/Runway)" percent="88%" />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =======================
          4. EXPERIENCE & EDUCATION TIMELINE
      ======================== */}
      <section className="py-20 bg-[#0F0F0F] relative border-t border-white/5">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

            {/* Experience Column */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
                <Briefcase className="text-caribbean-green" /> Work Experience
              </h3>
              <div className="space-y-8 border-l border-white/10 pl-6 md:pl-8 relative ml-2 md:ml-0">

                <TimelineItem
                  role="Founder & CEO"
                  company="VDOLogy"
                  year="Present"
                  desc="Leading a creative agency delivering high-end video and web solutions to global clients."
                  current={true}
                />

                <TimelineItem
                  role="Video Editor & Motion Graphics Designer"
                  company="FIFO Tech"
                  year="2018 - Present"
                  desc="Editing and producing video content for various platforms, ensuring consistency in style and branding. Designing graphics and aligning assets with client guidelines."
                />

                <TimelineItem
                  role="Video Editor & Motion Graphics Designer"
                  company="ACE Digital Solutions, LLC"
                  year="2021 - Present"
                  desc="Delivering professional services in Video Editing, Graphic Design, and Website Development to help brands enhance their digital presence."
                />
              </div>
            </div>

            {/* Education Column */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
                <GraduationCap className="text-caribbean-green" /> Education
              </h3>
              <div className="space-y-8 border-l border-white/10 pl-6 md:pl-8 relative ml-2 md:ml-0">
                <TimelineItem
                  role="BSc in Computer Science & Engineering"
                  company="Sonargaon University"
                  year="2018 - 2021"
                  desc="Specializing in software, programming, and modern technology stacks."
                />
                <TimelineItem
                  role="Diploma-in-Engineering (Computer Tech)"
                  company="Infra Polytechnic Institute, Barisal"
                  year="2011 - 2016"
                  desc="Bangladesh Technical Education Board."
                />
                <TimelineItem
                  role="Secondary School Certificate (Technical)"
                  company="Timirkati High School, Jhalakati"
                  year="2010 - 2011"
                  desc="Focus on Technical Education."
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      <PortfolioFooter currentCategory={0} setCurrentCategory={() => { }} />
    </PageLayout>
  );
}

// --- Helper Components ---

// 1. Social Icon
const SocialIcon = ({ Icon, link, color, ariaLabel }) => (
  <a
    href={link}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={ariaLabel}
    className={`w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white ${color} transition-all duration-300 hover:scale-110`}
  >
    <Icon size={18} />
  </a>
);

// 2. Core Expertise Card
const ExpertiseCard = ({ icon, title, desc }) => (
  <div className="p-6 md:p-8 bg-[#151515] border border-white/5 rounded-3xl hover:border-caribbean-green/40 transition-all duration-300 group hover:-translate-y-2">
    <div className="w-14 h-14 bg-caribbean-green/10 rounded-xl flex items-center justify-center text-caribbean-green mb-6 group-hover:bg-caribbean-green group-hover:text-black transition-colors">
      {icon}
    </div>
    <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
    <p className="text-gray-400 text-sm leading-relaxed">{desc}</p>
  </div>
);

// 3. Tech/Skill Card (Small)
const TechCard = ({ icon, title, desc }) => (
  <div className="flex items-start gap-4 p-5 bg-[#151515] border border-white/5 rounded-xl hover:bg-white/5 transition-colors">
    <div className="text-caribbean-green mt-1">{icon}</div>
    <div>
      <h4 className="text-white font-bold text-base">{title}</h4>
      <p className="text-gray-500 text-xs mt-1">{desc}</p>
    </div>
  </div>
);

// 4. Progress Bar
const SkillBar = ({ name, percent }) => (
  <div>
    <div className="flex justify-between mb-2">
      <span className="text-white font-medium text-sm">{name}</span>
      <span className="text-caribbean-green text-sm font-bold">{percent}</span>
    </div>
    <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
      <div className="h-full bg-gradient-to-r from-caribbean-green to-emerald-600 rounded-full" style={{ width: percent }}></div>
    </div>
  </div>
);

// 5. Timeline Item
const TimelineItem = ({ role, company, year, desc, current }) => (
  <div className="relative">
    {/* Dot */}
    <span className={`absolute -left-[35px] md:-left-[43px] top-1 w-4 h-4 md:w-5 md:h-5 rounded-full border-4 border-[#0F0F0F] ${current ? 'bg-caribbean-green shadow-[0_0_10px_#00DF8E]' : 'bg-gray-600'}`}></span>

    <h4 className="text-lg md:text-xl font-bold text-white">{role}</h4>
    <p className="text-caribbean-green text-xs md:text-sm font-semibold mt-1 mb-2">{company} <span className="text-gray-500">| {year}</span></p>
    <p className="text-gray-400 text-xs md:text-sm leading-relaxed">
      {desc}
    </p>
  </div>
);