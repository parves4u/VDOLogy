import React, { useState, useEffect } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";
import { CheckCircle, CreditCard, Lock, ShieldCheck, ArrowLeft } from "lucide-react";

export default function Checkout() {
  const location = useLocation();
  const navigate = useNavigate();
  
  // Pricing Page থেকে পাঠানো ডাটা রিসিভ করা
  const { plan } = location.state || {};

  // পেমেন্ট মেথড স্টেট
  const [paymentMethod, setPaymentMethod] = useState("paypal"); // default

  // যদি কেউ সরাসরি লিংকে ক্লিক করে আসে এবং প্ল্যান ডাটা না থাকে, তবে প্রাইসিং পেজে ফেরত পাঠানো হবে
  useEffect(() => {
    if (!plan) {
      navigate("/#pricing");
    }
  }, [plan, navigate]);

  if (!plan) return null; // রিডাইরেক্ট হওয়ার আগ পর্যন্ত কিছু দেখাবে না

  const handlePayment = () => {
    // এখানে আপনার পেমেন্ট ইন্টিগ্রেশন লজিক বসবে
    alert(`Processing payment via ${paymentMethod} for ${plan.name} ($${plan.price})`);
    
    // উদাহরণস্বরূপ:
    // if (paymentMethod === 'paypal') window.location.href = 'YOUR_PAYPAL_LINK';
    // if (paymentMethod === 'payoneer') window.location.href = 'YOUR_PAYONEER_LINK';
  };

  return (
    <section className="min-h-screen bg-main-black py-20 px-4 md:px-8 relative overflow-hidden">
      
      {/* Background Glows */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-caribbean-green/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="container mx-auto max-w-6xl relative z-10">
        
        {/* Back Button */}
        <Link to="/" className="inline-flex items-center text-gray-400 hover:text-caribbean-green mb-8 transition-colors">
          <ArrowLeft size={20} className="mr-2" /> Back to Pricing
        </Link>

        <h1 className="text-3xl md:text-4xl font-bold text-white mb-8">Secure Checkout</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12">
          
          {/* --- Left Column: Payment Methods --- */}
          <div className="lg:col-span-2 space-y-6">
            
            {/* User Info (Mock) */}
            <div className="bg-[#111] border border-white/10 rounded-2xl p-6 md:p-8">
              <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                <ShieldCheck className="text-caribbean-green" size={20} /> 
                Billing Information
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input type="text" placeholder="Full Name" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-caribbean-green focus:outline-none transition-colors" />
                <input type="email" placeholder="Email Address" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-caribbean-green focus:outline-none transition-colors" />
              </div>
            </div>

            {/* Payment Options */}
            <div className="bg-[#111] border border-white/10 rounded-2xl p-6 md:p-8">
              <h3 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
                <CreditCard className="text-caribbean-green" size={20} /> 
                Select Payment Method
              </h3>

              <div className="space-y-4">
                {/* PayPal Option */}
                <label 
                  className={`flex items-center justify-between p-4 rounded-xl border cursor-pointer transition-all duration-300
                  ${paymentMethod === "paypal" ? "border-caribbean-green bg-caribbean-green/10" : "border-white/10 bg-white/5 hover:border-white/30"}`}
                  onClick={() => setPaymentMethod("paypal")}
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-5 h-5 rounded-full border flex items-center justify-center ${paymentMethod === "paypal" ? "border-caribbean-green" : "border-gray-500"}`}>
                      {paymentMethod === "paypal" && <div className="w-3 h-3 bg-caribbean-green rounded-full"></div>}
                    </div>
                    <div>
                      <h4 className="text-white font-medium">PayPal</h4>
                      <p className="text-gray-400 text-sm">Safe payment online.</p>
                    </div>
                  </div>
                  <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" alt="PayPal" className="h-6" />
                </label>

                {/* Payoneer Option */}
                <label 
                  className={`flex items-center justify-between p-4 rounded-xl border cursor-pointer transition-all duration-300
                  ${paymentMethod === "payoneer" ? "border-caribbean-green bg-caribbean-green/10" : "border-white/10 bg-white/5 hover:border-white/30"}`}
                  onClick={() => setPaymentMethod("payoneer")}
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-5 h-5 rounded-full border flex items-center justify-center ${paymentMethod === "payoneer" ? "border-caribbean-green" : "border-gray-500"}`}>
                      {paymentMethod === "payoneer" && <div className="w-3 h-3 bg-caribbean-green rounded-full"></div>}
                    </div>
                    <div>
                      <h4 className="text-white font-medium">Payoneer</h4>
                      <p className="text-gray-400 text-sm">Fast international transfer.</p>
                    </div>
                  </div>
                  {/* Payoneer Logo Placeholder Text style for simplicity */}
                  <span className="font-bold text-white text-lg tracking-tight">Payoneer</span>
                </label>
              </div>
            </div>
          </div>

          {/* --- Right Column: Order Summary --- */}
          <div className="lg:col-span-1">
            <div className="bg-[#111] border border-white/10 rounded-2xl p-6 md:p-8 sticky top-24">
              <h3 className="text-xl font-semibold text-white mb-6">Order Summary</h3>
              
              <div className="flex justify-between items-center pb-4 border-b border-white/10">
                <div>
                  <h4 className="text-white font-bold text-lg">{plan.name}</h4>
                  <p className="text-gray-400 text-sm">Monthly Subscription</p>
                </div>
                <div className="text-right">
                  <span className="text-white font-bold text-xl">${plan.price}</span>
                </div>
              </div>

              <div className="py-4 space-y-3">
                {plan.features.slice(0, 3).map((feature, i) => (
                  <div key={i} className="flex items-center gap-2 text-gray-300 text-sm">
                    <CheckCircle size={14} className="text-caribbean-green" />
                    {feature}
                  </div>
                ))}
                <div className="text-gray-500 text-xs italic">+ and more features included</div>
              </div>

              <div className="flex justify-between items-center pt-4 border-t border-white/10 mb-6">
                <span className="text-white font-bold text-lg">Total Due</span>
                <span className="text-caribbean-green font-bold text-2xl">${plan.price}</span>
              </div>

              <button 
                onClick={handlePayment}
                className="w-full py-4 rounded-xl bg-caribbean-green text-black font-bold text-lg hover:bg-white transition-all duration-300 shadow-[0_0_20px_rgba(0,223,142,0.3)] flex items-center justify-center gap-2"
              >
                <Lock size={18} /> Pay With {paymentMethod === 'paypal' ? 'PayPal' : 'Payoneer'}
              </button>

              <div className="mt-4 text-center">
                <p className="text-gray-500 text-xs flex items-center justify-center gap-1">
                  <Lock size={12} /> Secure 256-bit SSL Encrypted payment.
                </p>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}