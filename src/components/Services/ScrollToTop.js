import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // যদি URL এ কোনো হ্যাশ (#) থাকে (যেমন: #features)
    if (hash) {
      // একটু সময় নেওয়া হচ্ছে যাতে হোম পেজ লোড হতে পারে
      setTimeout(() => {
        const element = document.getElementById(hash.replace("#", ""));
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 100);
    } else {
      // যদি হ্যাশ না থাকে, সাধারণ পেজ চেঞ্জ হলে উপরে স্ক্রল করবে
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]); // যখনই পাথ বা হ্যাশ চেঞ্জ হবে, এই ফাংশন রান করবে

  return null;
};

export default ScrollToTop;