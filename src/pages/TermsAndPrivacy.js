import React from "react";
import InnerPageLayout from "../components/Layout/InnerPageLayout";
import BreadCrumb from "../components/Breadcrumb/BreadCrumb";
import TermsContent from "../pages/TermsContent";


export default function TermsAndPrivacy() {
  return (
    <InnerPageLayout>
      <BreadCrumb
        pageTitle="Terms & Conditions"
        currentPage="Terms & Conditions"
        href="/terms-and-privacy"
      />
      <TermsContent />
    </InnerPageLayout>
  );
}