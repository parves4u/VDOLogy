import React from "react";
import { RefreshCcw, CheckCircle, AlertTriangle, Clock, Mail } from "lucide-react";

export default function RefundContent() {
  return (
    <section className="relative py-20 md:py-32 bg-main-black overflow-hidden">
      
      {/* Background Glows */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-caribbean-green/5 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[120px] translate-x-1/2 translate-y-1/2 pointer-events-none"></div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-caribbean-green/30 bg-caribbean-green/10 text-caribbean-green text-sm font-medium mb-6">
            <RefreshCcw size={16} />
            Money Back Guarantee
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
            Refund <span className="text-transparent bg-clip-text bg-gradient-to-r from-caribbean-green to-emerald-400">Policy</span>
          </h1>
          <p className="text-gray-400 text-lg">
            We value your business and aim for satisfaction. Please read our refund policy clearly to understand your rights and our obligations.
          </p>
          <p className="text-sm text-gray-500 mt-4">Last Updated: February 2026</p>
        </div>

        {/* Content Box */}
        <div className="max-w-4xl mx-auto bg-[#111] border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl relative">
          
          {/* Section 1 */}
          <div className="mb-10 group">
            <h3 className="flex items-center gap-3 text-2xl font-bold text-white mb-4 group-hover:text-caribbean-green transition-colors">
              <span className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-caribbean-green border border-white/10">
                <CheckCircle size={20} />
              </span>
              1. General Policy
            </h3>
            <p className="text-gray-400 leading-relaxed pl-[52px]">
              Since VDOLogy provides non-tangible, irrevocable digital goods (Video Editing, Graphics, Web Development), we generally <strong>do not issue refunds</strong> once the order is accomplished and the product is sent. As a customer, you are responsible for understanding this upon purchasing any item at our site.
            </p>
          </div>

          {/* Section 2 */}
          <div className="mb-10 group">
            <h3 className="flex items-center gap-3 text-2xl font-bold text-white mb-4 group-hover:text-caribbean-green transition-colors">
              <span className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-caribbean-green border border-white/10">
                <AlertTriangle size={20} />
              </span>
              2. Exceptional Circumstances
            </h3>
            <div className="pl-[52px] space-y-3 text-gray-400 leading-relaxed">
              <p>However, we realize that exceptional circumstances can take place with regard to the character of the product we supply. Therefore, we DO honor requests for the refund on the following reasons:</p>
              <ul className="list-disc list-inside space-y-2 mt-2">
                <li><strong>Non-delivery of the product:</strong> If we fail to deliver the project within the agreed timeframe without prior notice.</li>
                <li><strong>Major defects:</strong> Although all our products are thoroughly tested before release, unexpected errors may occur. You must report such issues within 72 hours.</li>
                <li><strong>Product not-as-described:</strong> Such issues should be reported to our support department within 3 days from the date of the purchase.</li>
              </ul>
            </div>
          </div>

          {/* Section 3 */}
          <div className="mb-10 group">
            <h3 className="flex items-center gap-3 text-2xl font-bold text-white mb-4 group-hover:text-caribbean-green transition-colors">
              <span className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-caribbean-green border border-white/10">
                <Clock size={20} />
              </span>
              3. Cancellation Policy
            </h3>
            <p className="text-gray-400 leading-relaxed pl-[52px]">
              If you wish to cancel an active project, you must notify us within 24 hours of the initial payment. If work has already commenced, a partial refund may be offered based on the amount of work completed, at our sole discretion.
            </p>
          </div>

          {/* Contact Note */}
          <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-caribbean-green/10 to-transparent border border-caribbean-green/20 flex gap-4 items-start">
            <div className="shrink-0 text-caribbean-green mt-1">
              <Mail size={24} />
            </div>
            <div>
              <h4 className="text-white font-bold text-lg">Contact for Refunds</h4>
              <p className="text-gray-400 text-sm mt-1">
                Requests for a refund are accepted at <span className="text-caribbean-green cursor-pointer font-medium">contact@vdology.com </span> within the period of 3 days after delivery. You should accompany this request with detailed and grounded reasons why you apply for a refund.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}