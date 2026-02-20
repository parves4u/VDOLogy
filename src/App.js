import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css"; 

// ✅ FIX: পাথ আপডেট করা হয়েছে (Services ফোল্ডার যুক্ত করা হয়েছে)
import ScrollToTop from "./components/Services/ScrollToTop"; 

// Pages Import
import LandingTen from "./landing/LandingTen";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Notfound from "./pages/Notfound";

// Legal Pages
import Terms from "./pages/Terms";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import RefundPolicy from "./pages/RefundPolicy"; 
import Checkout from "./pages/Checkout";
import Careers from "./pages/Careers";
import FounderProfile from "./pages/FounderProfile";
import ProjectSubmission from "./pages/ProjectSubmission";
// Legacy
import TermsAndPrivacy from "./pages/TermsAndPrivacy"; 

export default function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <>
      {/* ScrollToTop কম্পোনেন্ট */}
      <ScrollToTop />

      <Routes>
        <Route path="/" element={<LandingTen />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/meet-founder" element={<FounderProfile />} />
        <Route path="/submit-project" element={<ProjectSubmission />} />
        
        
        {/* Legal Pages Routes */}
        <Route path="/terms" element={<Terms />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/refund-policy" element={<RefundPolicy />} />
        
        <Route path="/terms-condition-privacy-policy" element={<TermsAndPrivacy />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
    </>
  );
}