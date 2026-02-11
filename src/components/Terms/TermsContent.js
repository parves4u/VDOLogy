import React from "react";
import { ShieldCheck, CheckCircle, AlertCircle } from "lucide-react";

export default function TermsContent() {
  return (
    <section className="relative py-20 md:py-32 bg-main-black overflow-hidden">
      
      {/* Background Glows */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-caribbean-green/5 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[120px] translate-x-1/2 translate-y-1/2 pointer-events-none"></div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-caribbean-green/30 bg-caribbean-green/10 text-caribbean-green text-sm font-medium mb-6">
            <ShieldCheck size={16} />
            Legal Information
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
            Terms & <span className="text-transparent bg-clip-text bg-gradient-to-r from-caribbean-green to-emerald-400">Conditions</span>
          </h1>
          <p className="text-gray-400 text-lg">
            Please read these terms carefully before using our services. By accessing VDOLogy, you agree to be bound by these terms.
          </p>
          <p className="text-sm text-gray-500 mt-4">Last Updated: February 2026</p>
        </div>

        {/* Content Box */}
        <div className="max-w-4xl mx-auto bg-[#111] border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl relative">
          
          {/* Section 1 */}
          <div className="mb-10">
            <h3 className="flex items-center gap-3 text-2xl font-bold text-white mb-4">
              <span className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-caribbean-green text-sm">01</span>
              Introduction
            </h3>
            <p className="text-gray-400 leading-relaxed pl-11">
              Welcome to VDOLogy. These Terms and Conditions govern your use of our website and services. By engaging with our agency for video editing, graphic design, or web development services, you accept these terms in full.
            </p>
          </div>

          {/* Section 2 */}
          <div className="mb-10">
            <h3 className="flex items-center gap-3 text-2xl font-bold text-white mb-4">
              <span className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-caribbean-green text-sm">02</span>
              Services & Deliverables
            </h3>
            <div className="pl-11 space-y-4 text-gray-400 leading-relaxed">
              <p>We are committed to delivering high-quality digital assets. Our services include:</p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2"><CheckCircle size={16} className="text-caribbean-green" /> Video Editing & Post-Production</li>
                <li className="flex items-center gap-2"><CheckCircle size={16} className="text-caribbean-green" /> Graphic Design & Branding</li>
                <li className="flex items-center gap-2"><CheckCircle size={16} className="text-caribbean-green" /> Web Development & UI/UX Design</li>
              </ul>
              <p>All deliverables will be sent via secure digital channels (Google Drive, Dropbox, etc.) upon project completion.</p>
            </div>
          </div>

          {/* Section 3 */}
          <div className="mb-10">
            <h3 className="flex items-center gap-3 text-2xl font-bold text-white mb-4">
              <span className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-caribbean-green text-sm">03</span>
              Payment Terms
            </h3>
            <p className="text-gray-400 leading-relaxed pl-11">
              Payments must be made according to the agreed schedule. For most projects, we require a <strong>50% upfront deposit</strong> before work begins, with the remaining 50% due upon final delivery. We accept payments via Bank Transfer, Payoneer, or Wise.
            </p>
          </div>

          {/* Section 4 */}
          <div className="mb-10">
            <h3 className="flex items-center gap-3 text-2xl font-bold text-white mb-4">
              <span className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-caribbean-green text-sm">04</span>
              Revisions & Approvals
            </h3>
            <p className="text-gray-400 leading-relaxed pl-11">
              We offer a specific number of revisions per project (typically 2-3 rounds) to ensure your satisfaction. Additional revisions outside the scope of the original agreement may incur extra charges at our standard hourly rate.
            </p>
          </div>

          {/* Section 5 */}
          <div className="mb-10">
            <h3 className="flex items-center gap-3 text-2xl font-bold text-white mb-4">
              <span className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-caribbean-green text-sm">05</span>
              Intellectual Property
            </h3>
            <p className="text-gray-400 leading-relaxed pl-11">
              Upon full payment, the client receives full ownership rights to the final deliverables. VDOLogy retains the right to display the work in our portfolio and social media for promotional purposes unless a Non-Disclosure Agreement (NDA) is signed.
            </p>
          </div>

          {/* Contact Note */}
          <div className="mt-12 p-6 rounded-2xl bg-white/5 border border-caribbean-green/20 flex gap-4 items-start">
            <div className="shrink-0 text-caribbean-green mt-1">
              <AlertCircle size={24} />
            </div>
            <div>
              <h4 className="text-white font-bold text-lg">Have Questions?</h4>
              <p className="text-gray-400 text-sm mt-1">
                If you have any questions about these Terms, please contact us at <span className="text-caribbean-green cursor-pointer">contact@vdology.com</span>
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}