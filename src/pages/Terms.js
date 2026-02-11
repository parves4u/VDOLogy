import React from "react";
import { Helmet } from "react-helmet";
import PageLayout from "../components/Layout/PageLayout";
import LandingHeaderTen from "../components/Layout/Header/LandingHeader/LandingHeaderTen";
import TermsContent from "../components/Terms/TermsContent"; // এই লাইনটি খেয়াল রাখুন

export default function Terms() {
  return (
    <PageLayout>
      <Helmet>
        <title>Terms & Conditions - VDOLogy</title>
        <meta name="description" content="Read the Terms and Conditions of VDOLogy creative agency." />
      </Helmet>

      {/* Header */}
      <div className="bg-main-black">
         <LandingHeaderTen />
      </div>

      {/* Main Content */}
      <TermsContent />

    </PageLayout>
  );
}