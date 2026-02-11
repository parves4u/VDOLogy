import React from "react";
import { Helmet } from "react-helmet";
import PageLayout from "../components/Layout/PageLayout";
import LandingHeaderTen from "../components/Layout/Header/LandingHeader/LandingHeaderTen";
import RefundContent from "../components/Refund/RefundContent";

export default function RefundPolicy() {
  return (
    <PageLayout>
      <Helmet>
        <title>Refund Policy - VDOLogy</title>
        <meta name="description" content="Read the Refund and Cancellation Policy of VDOLogy creative agency." />
      </Helmet>

      {/* Header */}
      <div className="bg-main-black">
         <LandingHeaderTen />
      </div>

      {/* Main Content */}
      <RefundContent />

    </PageLayout>
  );
}