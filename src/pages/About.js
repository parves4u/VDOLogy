import React from "react";
import BreadCrumb from "../components/Breadcrumb/BreadCrumb";
import AboutCompany from "../components/About/AboutCompany";
import FunFactCounterTwo from "../components/FunFact/FunFactCounterTwo";
// AboutBenefit ইম্পোর্ট বাদ দেওয়া হয়েছে
import AboutLogoCloud from "../components/ClientLogoSlider/AboutLogoCloud";
import AboutTestimonial from "../components/Testimonials/AboutTestimonial";
import AboutTeam from "../components/Team/AboutTeam";
import InnerPageLayout from "../components/Layout/InnerPageLayout";
import { Helmet } from 'react-helmet';

export default function About() {
  return (
    <InnerPageLayout>
      <Helmet>
        <title>About Us - VDOLogy</title>
        <meta name="description" content="Learn more about VDOLogy team and our journey." />
      </Helmet>

      <BreadCrumb pageTitle="About" currentPage="About" to="/about" />
      
      <AboutCompany />
      
      <FunFactCounterTwo />
      
      {/* <AboutBenefit /> কম্পোনেন্টটি এখান থেকে সরিয়ে ফেলা হয়েছে কারণ ফাইলটি ডিলিট করা হয়েছে */}
      
      <AboutTeam />
      
      <AboutLogoCloud />
      
      <AboutTestimonial />
    </InnerPageLayout>
  );
}