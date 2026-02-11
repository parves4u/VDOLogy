import React from "react";
import { Lock, Eye, Server, Cookie, Mail } from "lucide-react";

export default function PrivacyContent() {
  return (
    <section className="relative py-20 md:py-32 bg-main-black overflow-hidden">
      
      {/* Background Glows */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-caribbean-green/5 rounded-full blur-[120px] translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[120px] -translate-x-1/2 translate-y-1/2 pointer-events-none"></div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-caribbean-green/30 bg-caribbean-green/10 text-caribbean-green text-sm font-medium mb-6">
            <Lock size={16} />
            Data Protection
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
            Privacy <span className="text-transparent bg-clip-text bg-gradient-to-r from-caribbean-green to-emerald-400">Policy</span>
          </h1>
          <p className="text-gray-400 text-lg">
            Your privacy is critically important to us. This policy explains how we collect, use, and protect your personal information.
          </p>
          <p className="text-sm text-gray-500 mt-4">Last Updated: February 2026</p>
        </div>

        {/* Content Box */}
        <div className="max-w-4xl mx-auto bg-[#111] border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl relative">
          
          {/* Section 1 */}
          <div className="mb-10 group">
            <h3 className="flex items-center gap-3 text-2xl font-bold text-white mb-4 group-hover:text-caribbean-green transition-colors">
              <span className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-caribbean-green border border-white/10">
                <Eye size={20} />
              </span>
              1. Information We Collect
            </h3>
            <p className="text-gray-400 leading-relaxed pl-[52px]">
              We only ask for personal information when we truly need it to provide a service to you. We may collect:
            </p>
            <ul className="pl-[52px] mt-3 space-y-2 text-gray-400 list-disc list-inside">
              <li>Personal Identification (Name, Email, Phone Number)</li>
              <li>Project details and media files for editing/design</li>
              <li>Usage data and cookies to improve website experience</li>
            </ul>
          </div>

          {/* Section 2 */}
          <div className="mb-10 group">
            <h3 className="flex items-center gap-3 text-2xl font-bold text-white mb-4 group-hover:text-caribbean-green transition-colors">
              <span className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-caribbean-green border border-white/10">
                <Server size={20} />
              </span>
              2. How We Use Your Data
            </h3>
            <p className="text-gray-400 leading-relaxed pl-[52px]">
              We use the collected information for various purposes:
            </p>
            <ul className="pl-[52px] mt-3 space-y-2 text-gray-400 list-disc list-inside">
              <li>To provide and maintain our Service (Video Editing, Graphics, Web)</li>
              <li>To notify you about changes to our Service</li>
              <li>To provide customer support and project updates</li>
              <li>To monitor the usage of our Service for improvements</li>
            </ul>
          </div>

          {/* Section 3 */}
          <div className="mb-10 group">
            <h3 className="flex items-center gap-3 text-2xl font-bold text-white mb-4 group-hover:text-caribbean-green transition-colors">
              <span className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-caribbean-green border border-white/10">
                <Lock size={20} />
              </span>
              3. Data Security
            </h3>
            <p className="text-gray-400 leading-relaxed pl-[52px]">
              The security of your data is important to us. We implement industry-standard security measures to protect your personal information and project files. However, remember that no method of transmission over the Internet is 100% secure.
            </p>
          </div>

          {/* Section 4 */}
          <div className="mb-10 group">
            <h3 className="flex items-center gap-3 text-2xl font-bold text-white mb-4 group-hover:text-caribbean-green transition-colors">
              <span className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-caribbean-green border border-white/10">
                <Cookie size={20} />
              </span>
              4. Cookies Policy
            </h3>
            <p className="text-gray-400 leading-relaxed pl-[52px]">
              We use cookies and similar tracking technologies to track the activity on our Service and hold certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.
            </p>
          </div>

          {/* Contact Note */}
          <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-caribbean-green/10 to-transparent border border-caribbean-green/20 flex gap-4 items-start">
            <div className="shrink-0 text-caribbean-green mt-1">
              <Mail size={24} />
            </div>
            <div>
              <h4 className="text-white font-bold text-lg">Contact Us for Privacy Concerns</h4>
              <p className="text-gray-400 text-sm mt-1">
                If you have any questions about this Privacy Policy, please contact us at <span className="text-caribbean-green cursor-pointer font-medium">contact@vdology.com </span>
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}