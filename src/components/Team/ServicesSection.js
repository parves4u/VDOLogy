import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Play, X, ArrowRight } from "lucide-react";

// ==========================================
// 1. DATA SECTION (SAME AS BEFORE)
// ==========================================

const graphicDesignData = [
  { id: 1, title: "Modern Sale Banner", description: "Sleek and stylish, perfect for promotions.", image: "https://cdn.jsdelivr.net/gh/parves4u/images/Banner1.jpg", width: 1200, height: 1200, isRecent: true },
  { id: 2, title: "New Arrival Promo", description: "Trendy layout for latest collections.", image: "https://cdn.jsdelivr.net/gh/parves4u/images/Banner16.jpg", width: 1200, height: 1200, isRecent: false },
  { id: 3, title: "Seasonal Offer Template", description: "Bright and festive for seasonal sales.", image: "https://cdn.jsdelivr.net/gh/parves4u/images/Banner3.jpg", width: 1200, height: 1200, isRecent: true },
  { id: 4, title: "Pet Care Product Ad", description: "Cute and friendly for pet supplies.", image: "https://cdn.jsdelivr.net/gh/parves4u/images/Banner4.jpg", width: 1200, height: 1200, isRecent: true },
  { id: 5, title: "Food & Nutrition Promo", description: "Delicious design for healthy products.", image: "https://cdn.jsdelivr.net/gh/parves4u/images/Banner5.jpg", width: 1200, height: 1200, isRecent: false },
  { id: 6, title: "Gadget Promo Banner", description: "Futuristic style for tech offers.", image: "https://cdn.jsdelivr.net/gh/parves4u/images/Banner6.jpg", width: 1200, height: 1200, isRecent: true },
  { id: 7, title: "Online Course Promo", description: "Bright and engaging for education ads.", image: "https://cdn.jsdelivr.net/gh/parves4u/images/Banner7.jpg", width: 1200, height: 1200, isRecent: true },
];

const videosData = {
  "Video Editing": [
    { title: "The Choice to Lead: Redefining Modern Masculinity", description: "This motivational film explores the true essence of masculinity—protecting, providing, and setting an example for the next generation.", image: "https://cdn.jsdelivr.net/gh/parves4u/images/Thumbnail01.jpg", youtubeId: "wKMsNMEmxdw", type: "full", isRecent: true },
    { title: "The Ultimate Travel Card: 5% Cash Back Promo", description: "Unlock the full potential of your travels with the AAA Travel Advantage Visa Signature Card.", image: "https://cdn.jsdelivr.net/gh/parves4u/images/Thumbnail02.jpg", youtubeId: "rN5zd5B6IIc", type: "full", isRecent: true },
    { title: "Cash Cow Video", description: "Monetization-ready YouTube video.", image: "https://cdn.jsdelivr.net/gh/parves4u/images/Thumbnail16.jpg", youtubeId: "TgZGIlh9jbU", type: "full", isRecent: true },
    { title: "Physical Fitness Video", description: "Edited fitness session videos with timers.", image: "https://cdn.jsdelivr.net/gh/parves4u/images/Thumbnail5.jpg", youtubeId: "jpRUU2RJJxM", type: "full", isRecent: true },
    { title: "Company Promo Edit", description: "Provided full-service editing for company footage.", image: "https://cdn.jsdelivr.net/gh/parves4u/images/Thumbnail9.jpg", youtubeId: "oQ1BdUKS9TI", type: "full", isRecent: true },
  ],
  "Podcast": [
    { title: "Interview Zoom Meeting", description: "Enhanced visuals and audio for professional interview.", image: "https://cdn.jsdelivr.net/gh/parves4u/images/Thumbnail15.jpg", youtubeId: "xxGFGdvi1CE", type: "full", isRecent: true },
    { title: "Podcast Video Editing", description: "Synced visuals and branding for podcast.", image: "https://cdn.jsdelivr.net/gh/parves4u/images/Thumbnail50.jpg", youtubeId: "yDq1YAplloI", type: "full", isRecent: false },
    { title: "Doctor Zoom Meeting", description: "Refined zoom session for clarity.", image: "https://cdn.jsdelivr.net/gh/parves4u/images/Thumbnail51.jpg", youtubeId: "SDxxZi0Zw5Q", type: "full", isRecent: false },
    { title: "Branded Podcast", description: "Transformed raw recordings into content.", image: "https://cdn.jsdelivr.net/gh/parves4u/images/Thumbnail52.jpg", youtubeId: "2YnDFtWwlLw", type: "full", isRecent: false },
  ],
  "Short Form": [
     { title: "Dynamic Kinetic Typography & Sound Design", description: "A high-energy showcase of rhythmic editing and advanced text animation.", image: "https://cdn.jsdelivr.net/gh/parves4u/images/Reels1.jpg", youtubeId: "tizW2ql0Bes", type: "short", isRecent: true },
     { title: "Kinetic Typography & Rhythmic Edit", description: "A high-energy motivational edit featuring dynamic typography and aggressive pacing designed to ignite action and banish hesitation.", image: "https://cdn.jsdelivr.net/gh/parves4u/images/Reels2.jpg", youtubeId: "ylHiJ5lQ1l8", type: "short", isRecent: true },
     { title: "Tech Industry Layoffs: The Reality Check", description: "We visualize the harsh reality of the current job market, where thousands of engineers face sudden layoffs.", image: "https://cdn.jsdelivr.net/gh/parves4u/images/Reels3.jpg", youtubeId: "h1hckIjdY78", type: "short", isRecent: true },
     { title: "Direct & Punchy (Best for Social Media/Shorts)", description: "Struggling with rates? The problem isn't your price—it's your positioning.", image: "https://cdn.jsdelivr.net/gh/parves4u/images/Reels4.jpg", youtubeId: "1b6aDvkuKL4", type: "short", isRecent: false },
     { title: "The Future of Construction Marketing: Immersive Vision", description: "We explore why construction projects need to ditch the paper and embrace photorealistic 3D visualization to truly connect with today's online generation.", image: "https://cdn.jsdelivr.net/gh/parves4u/images/Reels5.jpg", youtubeId: "0BEWtxA-89I", type: "short", isRecent: false },
     { title: "Tech Service Promo: Webby Lab", description: "A high-energy explainer video designed to attract entrepreneurs and creators looking for custom digital solutions.", image: "https://cdn.jsdelivr.net/gh/parves4u/images/Reels6.jpg", youtubeId: "C2VTvmtjxGY", type: "short", isRecent: false },
     { title: "App Promo: Student Coursework Manager", description: "A dynamic promotional video for an ed-tech tool that integrates with Canvas, Blackboard, and Moodle.", image: "https://cdn.jsdelivr.net/gh/parves4u/images/Reels7.jpg", youtubeId: "rI3firPdDG4", type: "short", isRecent: false },
     { title: "High-Converting Financial Ad", description: "rgent, clear, and effective. A social media ad optimized to stop the scroll and encourage users to check their claim eligibility in seconds.", image: "https://cdn.jsdelivr.net/gh/parves4u/images/Reels8.jpg", youtubeId: "SNXZcTclFJM", type: "short", isRecent: false },
     { title: "Local Service Ad: Dryer Vent Cleaning", description: "This short video combines urgency with safety tips to drive immediate bookings for seasonal cleaning services.", image: "https://cdn.jsdelivr.net/gh/parves4u/images/Reels9.jpg", youtubeId: "uzfPhj2waJw", type: "short", isRecent: false },
  ],
  "Audio Editing": [
    { title: "Noise Reduction", description: "Eliminate background noise instantly.", image: "https://cdn.jsdelivr.net/gh/parves4u/images/Thumbnail56.jpg", youtubeId: "82T-hsVntQ4", type: "full", isRecent: true },
    { title: "Voice Enhancement", description: "Studio quality sound from home recordings.", image: "https://cdn.jsdelivr.net/gh/parves4u/images/Audio Eting1.jpg", youtubeId: "Xbg3MwMg6lk", type: "full", isRecent: false },
    { title: "Studio Quality", description: "Professional audio mixing.", image: "https://cdn.jsdelivr.net/gh/parves4u/images/Audio Eting2.jpg", youtubeId: "zBDr63YZWgk", type: "full", isRecent: false },
    { title: "Voice Cleaning", description: "Fast and easy editing guide.", image: "https://cdn.jsdelivr.net/gh/parves4u/images/Audio Eting3.jpg", youtubeId: "lAn9wThCjuw", type: "full", isRecent: false },
  ],
  "2D/3D Animation": [
    { title: "Travel Animation", description: "Evoking wanderlust with motion graphics.", image: "https://cdn.jsdelivr.net/gh/parves4u/images/Thumnail01.jpg", youtubeId: "E5YXZDhCvZ0", type: "full", isRecent: true },
    { title: "Corporate Animation", description: "Explainer video for business.", image: "https://cdn.jsdelivr.net/gh/parves4u/images/Thumnail02.jpg", youtubeId: "YadXAX-oGnQ", type: "full", isRecent: false },
    { title: "Website Promo", description: "Stunning website promo creation.", image: "https://cdn.jsdelivr.net/gh/parves4u/images/Thumnail03.jpg", youtubeId: "7POgYCldK3w", type: "full", isRecent: false },
    { title: "Brand Intro", description: "Creative brand introduction.", image: "https://cdn.jsdelivr.net/gh/parves4u/images/Thumnail04.jpg", youtubeId: "pbZp_FxxBzg", type: "full", isRecent: false },
  ],
  "Digital Marketing": [
    { id: 1, title: "ClickBoost Marketing", description: "Targeted ads strategy.", image: "https://cdn.jsdelivr.net/gh/parves4u/images/Digital-Marketing01.jpg", width: 1920, height: 1154, isRecent: true },
    { id: 2, title: "AdWise Digital", description: "Small business solutions.", image: "https://cdn.jsdelivr.net/gh/parves4u/images/Digital-Marketing02.jpg", width: 1920, height: 1154, isRecent: false },
    { id: 3, title: "RankRight SEO", description: "Simple SEO solutions.", image: "https://cdn.jsdelivr.net/gh/parves4u/images/Digital-Marketing03.jpg", width: 1920, height: 1154, isRecent: true },
    { id: 4, title: "SmartPixel Ads", description: "Boost traffic with ads.", image: "https://cdn.jsdelivr.net/gh/parves4u/images/Digital-Marketing04.jpg", width: 1920, height: 1154, isRecent: true },
  ],
  "Web Development": [
    { id: 1, title: "EasyClient Manager", description: "Professional client portal.", image: "https://cdn.jsdelivr.net/gh/parves4u/images/Web-Development-01.jpg", width: 1920, height: 1154, isRecent: true },
    { id: 2, title: "Feature Landing Page", description: "High converting landing page.", image: "https://cdn.jsdelivr.net/gh/parves4u/images/Web-Development-02.jpg", width: 1920, height: 1154, isRecent: true },
    { id: 3, title: "EcoBrand Website", description: "Eco-friendly product site.", image: "https://cdn.jsdelivr.net/gh/parves4u/images/Web-Development-03.jpg", width: 1920, height: 1154, isRecent: true },
    { id: 4, title: "SellSphere Platform", description: "Scaling business structure.", image: "https://cdn.jsdelivr.net/gh/parves4u/images/Web-Development-04.jpg", width: 1920, height: 1154, isRecent: false },
  ]
};

// ==========================================
// 2. MAIN COMPONENT
// ==========================================

const ServicesSection = ({ currentCategory, setCurrentCategory }) => {
  
  const categories = [
    { name: "Video Editing", id: "videoEditing" },
    { name: "Podcast", id: "podcast" },
    { name: "Audio Editing", id: "audioEditing" },
    { name: "2D/3D Animation", id: "2d3dAnimation" },
    { name: "Graphic Design", id: "graphicDesign" },
    { name: "Digital Marketing", id: "digitalMarketing" },
    { name: "Web Development", id: "webDevelopment" },
    { name: "Short Form", id: "shortForm" },
  ];

  // States
  const [videoType, setVideoType] = useState("full"); 
  const [visibleCount, setVisibleCount] = useState(4); 
  const [activeItem, setActiveItem] = useState(null);

  // Derived Variables
  const currentCategoryObj = categories[currentCategory] || categories[0];
  const categoryName = currentCategoryObj.name;
  
  // Category Type Flags
  const isGraphicDesign = categoryName === "Graphic Design";
  const isDigitalMarketing = categoryName === "Digital Marketing";
  const isWebDevelopment = categoryName === "Web Development";
  const isShortFormCategory = categoryName === "Short Form";
  const isVideoEditing = categoryName === "Video Editing";

  // ✅ FIX: যখন ভিডিও টাইপ বা ক্যাটাগরি চেঞ্জ হবে, তখন visibleCount রিসেট হবে
  useEffect(() => {
    if (isShortFormCategory || videoType === 'short') {
        setVisibleCount(6); // শর্ট ফর্ম হলে ৬টি দেখাবে
    } else if (isGraphicDesign || isDigitalMarketing || isWebDevelopment) {
        setVisibleCount(6); // গ্রাফিক ডিজাইনেও ৬টি
    } else {
        setVisibleCount(4); // ফুল ফর্মে ৪টি
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentCategory, isShortFormCategory, videoType]);

  // Load Content
  let content = [];
  if (isGraphicDesign) {
    content = graphicDesignData;
  } else if (isVideoEditing) {
    const fullFormVideos = videosData["Video Editing"] || [];
    const shortFormVideos = videosData["Short Form"] || [];
    // ✅ FIX: আমরা ফিল্টার করার পর কন্টেন্ট নিবো, এখানে মার্জ করার দরকার নেই কারণ আমরা নিচে ফিল্টার করছি
    content = [...fullFormVideos, ...shortFormVideos];
  } else {
    content = videosData[categoryName] || [];
  }

  // Filtering Logic
  let filteredContent = content;
  if (isVideoEditing) {
    filteredContent = content.filter(item => videoType === "all" || item.type === videoType);
  }

  // Slicing for View More
  const visibleContent = filteredContent.slice(0, visibleCount);

  // Handlers
  const handlePrev = () => setCurrentCategory(prev => prev === 0 ? categories.length - 1 : prev - 1);
  const handleNext = () => setCurrentCategory(prev => prev === categories.length - 1 ? 0 : prev + 1);
  
  // ✅ FIX: View More বাটন লজিক (শর্ট ফর্ম হলে ৩টি করে বাড়বে, ফুল হলে ২টি)
  const handleViewMore = () => {
    const increment = (isShortFormCategory || videoType === 'short' || isGraphicDesign) ? 3 : 2;
    setVisibleCount(prev => prev + increment); 
  };

  // Grid Layout
  const getGridClass = () => {
    if (isShortFormCategory || isGraphicDesign || isDigitalMarketing || isWebDevelopment || videoType === 'short') {
      return "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"; // 3 Columns
    }
    return "grid-cols-1 lg:grid-cols-2"; // 2 Columns
  };

  const getAspectRatio = (item) => {
    if (isShortFormCategory || item.type === 'short') return "aspect-[9/16]"; 
    if (isGraphicDesign && item.width === item.height) return "aspect-square"; 
    return "aspect-video"; 
  };

  return (
    <section className="py-20 bg-main-black relative overflow-hidden" id="works">
      <div className="container mx-auto px-4 md:px-6">
        
        {/* --- Header Navigation --- */}
        <div className="flex items-center justify-center gap-6 mb-12">
          <button onClick={handlePrev} className="p-3 rounded-full bg-white/5 border border-white/10 hover:bg-caribbean-green hover:border-caribbean-green hover:text-black text-white transition-all duration-300">
            <ChevronLeft size={24} />
          </button>

          <div className="relative group">
            <h2 className="text-3xl md:text-5xl font-bold text-white text-center px-4">
              {categoryName}
            </h2>
            <div className="h-1 w-1/2 bg-caribbean-green mx-auto mt-2 rounded-full transform scale-0 group-hover:scale-100 transition-transform duration-300"></div>
          </div>

          <button onClick={handleNext} className="p-3 rounded-full bg-white/5 border border-white/10 hover:bg-caribbean-green hover:border-caribbean-green hover:text-black text-white transition-all duration-300">
            <ChevronRight size={24} />
          </button>
        </div>

        {/* --- Filters --- */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-6 mb-10">
          <div className="flex gap-3">
            {isVideoEditing && (
              <div className="p-1 bg-white/5 rounded-full border border-white/10 flex">
                <button onClick={() => setVideoType("full")} className={`px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${videoType === "full" ? "bg-caribbean-green text-black shadow-lg" : "text-gray-400 hover:text-white"}`}>Full-Form</button>
                <button onClick={() => setVideoType("short")} className={`px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${videoType === "short" ? "bg-caribbean-green text-black shadow-lg" : "text-gray-400 hover:text-white"}`}>Short-Form</button>
              </div>
            )}
          </div>
        </div>

        {/* --- Content Grid --- */}
        {visibleContent.length > 0 ? (
          <div className={`grid gap-6 ${getGridClass()}`}>
            {visibleContent.map((item, index) => (
              <div 
                key={index} 
                className="group relative bg-[#111] border border-white/10 hover:border-caribbean-green/50 rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_-10px_rgba(0,223,142,0.3)] hover:-translate-y-1"
                onClick={() => setActiveItem(item)}
              >
                {/* Thumbnail */}
                <div className={`relative w-full ${getAspectRatio(item)} overflow-hidden bg-gray-900 cursor-pointer`}>
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-90 group-hover:opacity-100" 
                    loading="lazy"
                  />
                  
                  {/* Overlay Play Button */}
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-md border border-white/30 flex items-center justify-center group-hover:scale-110 group-hover:bg-caribbean-green group-hover:border-caribbean-green transition-all duration-300 shadow-xl">
                        <Play className="w-6 h-6 text-white group-hover:text-black fill-white group-hover:fill-black ml-1 transition-colors" />
                    </div>
                  </div>
                </div>

                {/* Content Info (Hidden for Graphic Design) */}
                {!isGraphicDesign && !isDigitalMarketing && !isWebDevelopment && (
                    <div className="p-5">
                    <h3 className="text-white font-bold text-lg mb-2 line-clamp-1 group-hover:text-caribbean-green transition-colors">{item.title}</h3>
                    <p className="text-gray-400 text-sm line-clamp-2 mb-4">{item.description}</p>
                    
                    <div className="flex items-center text-caribbean-green text-sm font-semibold cursor-pointer group/link">
                        Watch Video
                        <ArrowRight size={16} className="ml-2 transform group-hover/link:translate-x-1 transition-transform" />
                    </div>
                    </div>
                )}
              </div>
            ))}
          </div>
        ) : (
          <div className="py-20 text-center border border-dashed border-white/10 rounded-2xl">
            <p className="text-gray-400 text-lg">No content found in this category.</p>
          </div>
        )}

        {/* --- View More Button --- */}
        {visibleContent.length < filteredContent.length && (
          <div className="flex justify-center mt-12">
            <button 
              onClick={handleViewMore}
              className="px-8 py-3 rounded-full border border-caribbean-green text-caribbean-green font-semibold hover:bg-caribbean-green hover:text-black transition-all duration-300 shadow-[0_0_20px_-5px_rgba(0,223,142,0.4)]"
            >
              View More Projects
            </button>
          </div>
        )}

        {/* --- Modal --- */}
        {activeItem && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm transition-opacity duration-300">
            
            <button onClick={() => setActiveItem(null)} className="absolute top-5 right-5 p-2 bg-white/10 rounded-full text-white hover:bg-red-500 hover:rotate-90 transition-all duration-300 z-50">
              <X size={24} />
            </button>

            {/* Graphic/Web/Digital Modal (Image View) */}
            {isGraphicDesign || isDigitalMarketing || isWebDevelopment ? (
                 <div className="relative w-full h-full flex items-center justify-center pointer-events-none">
                    <img 
                        src={activeItem.image} 
                        alt={activeItem.title} 
                        className="max-h-[85vh] w-auto max-w-full object-contain rounded-lg shadow-2xl pointer-events-auto"
                    />
                 </div>
            ) : (
                /* Video Modal */
                <div className={`relative bg-[#1A1A1A] rounded-2xl overflow-hidden shadow-2xl w-full mx-auto border border-white/10
                  ${activeItem.type === 'short' || isShortFormCategory ? 'max-w-md aspect-[9/16] h-[80vh]' : 'max-w-5xl aspect-video'}
                `}>
                    <iframe
                    className="w-full h-full"
                    src={`https://www.youtube.com/embed/${activeItem.youtubeId}?autoplay=1`}
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    ></iframe>
                </div>
            )}
          </div>
        )}

      </div>
    </section>
  );
};

export default ServicesSection;