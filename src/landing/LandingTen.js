import React, { useState } from "react";
import HeroTen from "../components/Hero/HeroTen";
import ServiceSlider from "../components/Services/ServiceSlider";
import AboutMe from "../components/About/AboutMe";
import PortfolioTestimonial from "../components/Testimonials/PortfolioTestimonial";
import PortfolioClient from "../components/ClientLogoSlider/PortfolioClient";
import PortfolioBlog from "../components/LatestBlog/PortfolioBlog";
import PortfolioCta from "../components/Cta/PortfolioCta";
import PortfolioFooter from "../components/Layout/Footer/PortfolioFooter";
import PageLayout from "../components/Layout/PageLayout";
import LandingHeaderTen from "../components/Layout/Header/LandingHeader/LandingHeaderTen";
import ProjectSlider from "../components/Projects/ProjectSlider";
import SliderSection from "../components/Projects/SliderSection.tsx";
import FaqThree from "../components/FaqCom/FaqThree";
import ServicesSection from "../components/Team/ServicesSection";

export default function LandingTen() {
  // State to track the current category
  const [currentCategory, setCurrentCategory] = useState(0);

  return (
    <PageLayout>
      <div className="box-border home-two bg-main-black">
        <div className="w-full px-2 md:px-0">
          <LandingHeaderTen
            currentCategory={currentCategory}
            setCurrentCategory={setCurrentCategory}
          />
          <HeroTen />
          <ServiceSlider />
          <ServicesSection
            currentCategory={currentCategory}
            setCurrentCategory={setCurrentCategory}
          />
          <AboutMe />
          <PortfolioTestimonial />
          {/* <ProjectSlider /> */}
          <SliderSection />
          <PortfolioClient />
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