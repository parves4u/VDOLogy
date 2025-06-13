import React from "react";
import FooterOne from "./Footer/FooterOne";
import PortfolioFooter from "../../components/Layout/Footer/PortfolioFooter";

export default function InnerPageLayout({ children }) {
  return (
    <div className="bg-main-black">
      {children}
      {/* <FooterOne /> */}
      <PortfolioFooter />
    </div>
  );
}
