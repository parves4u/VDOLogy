import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom"; 
import LandingHeaderTen from "../components/Layout/Header/LandingHeader/LandingHeaderTen";
import HeroTen from "../components/Hero/HeroTen";
import TrustedBrands from "../components/BrandLogo/TrustedBrands"; 
import ServiceSlider from "../components/Services/ServiceSlider";
import ServicesSection from "../components/Team/ServicesSection";
import ProcessScroll from "../components/Process/ProcessScroll";
import VideoTestimonialScroll from "../components/Testimonials/VideoTestimonialScroll";
import PortfolioTestimonial from "../components/Testimonials/PortfolioTestimonial";
import SliderSection from "../components/Projects/SliderSection.tsx";
import PortfolioClient from "../components/ClientLogoSlider/PortfolioClient";
import OurProcess from "../components/Process/OurProcess"; // ✅ ১. এখানে ইম্পোর্ট করা হয়েছে
// import PricingTen from "../components/Pricing/PricingTen"; // (আপনার প্রাইসিং কম্পোনেন্ট যদি থাকে তবে আনকমেন্ট করুন)
import Industries from "../components/Industries/Industries";
import PortfolioBlog from "../components/LatestBlog/PortfolioBlog";
import FaqThree from "../components/FaqCom/FaqThree";
import PortfolioCta from "../components/Cta/PortfolioCta";
import PortfolioFooter from "../components/Layout/Footer/PortfolioFooter";
import PageLayout from "../components/Layout/PageLayout";

export default function LandingTen() {
  const [currentCategory, setCurrentCategory] = useState(0);
  const location = useLocation();

  useEffect(() => {
    if (location.state) {
      const { targetCategory, scrollTo } = location.state;

      if (targetCategory !== undefined && targetCategory !== null) {
        setCurrentCategory(targetCategory);
      }

      if (scrollTo) {
        setTimeout(() => {
          const section = document.getElementById(scrollTo);
          if (section) {
            section.scrollIntoView({ behavior: "smooth" });
          }
        }, 100);
      }
      
      window.history.replaceState({}, document.title);
    }
  }, [location]);

  return (
    <PageLayout>
      <div className="box-border home-two bg-main-black">
        <div className="w-full px-2 md:px-0">
          
          <LandingHeaderTen
            currentCategory={currentCategory}
            setCurrentCategory={setCurrentCategory}
          />
          
          <HeroTen />
          <TrustedBrands />
          <ServicesSection
            currentCategory={currentCategory}
            setCurrentCategory={setCurrentCategory}
          />
          <ServiceSlider />
          
          <ProcessScroll />
          <VideoTestimonialScroll />
          <PortfolioTestimonial />
          <SliderSection />
          <PortfolioClient />
            {/* ✅ ২. এখানে OurProcess বসানো হয়েছে (Pricing এর ঠিক আগে) */}
          <OurProcess />
          
          {/* আপনার Pricing Section টি এখানে থাকবে */}
          {/* <PricingTen /> */}
          <Industries />
          <PortfolioBlog />

      

          <FaqThree />
          <PortfolioCta />
          
          <PortfolioFooter
            currentCategory={currentCategory}
            setCurrentCategory={setCurrentCategory} 
          />
        </div>
      </div>
    </PageLayout>
  );
}