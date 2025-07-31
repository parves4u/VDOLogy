import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import AOS from "aos";
import Contact from "./pages/Contact";
import Notfound from "./pages/Notfound";
import LandingTen from "./landing/LandingTen";
import About from "./pages/About";
import TermsAndPrivacy from "./pages/TermsAndPrivacy";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import { Helmet } from 'react-helmet';


export default function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingTen />} />
        {/* Inner Pages */}
        <Route path="/terms-condition-privacy-policy" element={<TermsAndPrivacy />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />

        <Route path="*" element={<Notfound />} />
      </Routes>
    </>
  );
}
