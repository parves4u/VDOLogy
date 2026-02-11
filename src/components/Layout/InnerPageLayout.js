import React from "react";
// ❌ ফিক্স: 'FooterOne' ইমপোর্টটি সরিয়ে দেওয়া হয়েছে কারণ এটি ব্যবহার করা হয়নি
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