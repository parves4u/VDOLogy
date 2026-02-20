import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Play, X, ArrowRight, ExternalLink, Globe, TrendingUp, Target, BarChart, Maximize2, Headphones, Mic2, Box, Radio } from "lucide-react";

// ==========================================
// 1. DATA SECTION
// ==========================================

const graphicDesignData = [
  { id: 1, title: "Modern Sale Banner", description: "Sleek and stylish, perfect for Facebook & Instagram promotions.", image: "https://cdn.jsdelivr.net/gh/parves4u/images/Banner1.jpg", width: 1200, height: 1200, category: "Social Media Ad", tools: ["Photoshop"], isRecent: true },
  { id: 2, title: "New Arrival Promo", description: "Trendy layout for latest fashion collections.", image: "https://cdn.jsdelivr.net/gh/parves4u/images/Banner16.jpg", width: 1200, height: 1200, category: "E-Commerce", tools: ["Photoshop", "Illustrator"], isRecent: false },
  { id: 3, title: "Seasonal Offer Template", description: "Bright and festive design for seasonal mega sales.", image: "https://cdn.jsdelivr.net/gh/parves4u/images/Banner3.jpg", width: 1200, height: 1200, category: "Campaign", tools: ["Photoshop"], isRecent: true },
  { id: 4, title: "Pet Care Product Ad", description: "Cute, friendly, and highly engaging banner for pet supplies.", image: "https://cdn.jsdelivr.net/gh/parves4u/images/Banner4.jpg", width: 1200, height: 1200, category: "Product Promo", tools: ["Illustrator"], isRecent: true },
  { id: 5, title: "Food & Nutrition Promo", description: "Delicious and clean design layout for healthy food products.", image: "https://cdn.jsdelivr.net/gh/parves4u/images/Banner5.jpg", width: 1200, height: 1200, category: "F&B Design", tools: ["Photoshop"], isRecent: false },
  { id: 6, title: "Gadget Promo Banner", description: "Futuristic and premium style for tech & gadget offers.", image: "https://cdn.jsdelivr.net/gh/parves4u/images/Banner6.jpg", width: 1200, height: 1200, category: "Tech Banner", tools: ["Photoshop"], isRecent: true },
  { id: 7, title: "Online Course Promo", description: "Bright, engaging, and conversion-focused design for education ads.", image: "https://cdn.jsdelivr.net/gh/parves4u/images/Banner7.jpg", width: 1200, height: 1200, category: "EdTech", tools: ["Photoshop", "Illustrator"], isRecent: true },
];

const videosData = {
  "Video Editing": [
    { title: "The Choice to Lead: Redefining Modern Masculinity", description: "This motivational film explores the true essence of masculinity—protecting, providing, and setting an example for the next generation.", image: "https://cdn.jsdelivr.net/gh/parves4u/images/Thumbnail01.jpg", youtubeId: "wKMsNMEmxdw", type: "full", isRecent: true },
    { title: "The Ultimate Travel Card: 5% Cash Back Promo", description: "Unlock the full potential of your travels with the AAA Travel Advantage Visa Signature Card.", image: "https://cdn.jsdelivr.net/gh/parves4u/images/Thumbnail02.jpg", youtubeId: "rN5zd5B6IIc", type: "full", isRecent: true },
    { title: "Cash Cow Video", description: "Monetization-ready YouTube video.", image: "https://cdn.jsdelivr.net/gh/parves4u/images/Thumbnail16.jpg", youtubeId: "TgZGIlh9jbU", type: "full", isRecent: true },
    { title: "Physical Fitness Video", description: "Edited fitness session videos with timers.", image: "https://cdn.jsdelivr.net/gh/parves4u/images/Thumbnail5.jpg", youtubeId: "jpRUU2RJJxM", type: "full", isRecent: true },
    { title: "Company Promo Edit", description: "Provided full-service editing for company footage.", image: "https://cdn.jsdelivr.net/gh/parves4u/images/Thumbnail9.jpg", youtubeId: "oQ1BdUKS9TI", type: "full", isRecent: true },
  ],
  // ✅ FIX: Podcast ডাটাতে episode, duration এবং features যুক্ত করা হয়েছে
  "Podcast": [
    { title: "Interview Zoom Meeting", description: "Enhanced visuals and audio for professional interview, making remote calls look studio-grade.", image: "https://cdn.jsdelivr.net/gh/parves4u/images/Thumbnail15.jpg", youtubeId: "xxGFGdvi1CE", type: "full", episode: "Ep. 24", duration: "45 Min", features: ["Zoom Sync", "Clean Audio"], isRecent: true },
    { title: "Podcast Video Editing", description: "Synced visuals, lower thirds, and branding for a high-quality video podcast format.", image: "https://cdn.jsdelivr.net/gh/parves4u/images/Thumbnail50.jpg", youtubeId: "yDq1YAplloI", type: "full", episode: "Ep. 18", duration: "1H 10M", features: ["Multi-Cam", "Color Grade"], isRecent: false },
    { title: "Doctor Zoom Meeting", description: "Refined zoom session with audio repair and layout adjustments for maximum clarity.", image: "https://cdn.jsdelivr.net/gh/parves4u/images/Thumbnail51.jpg", youtubeId: "SDxxZi0Zw5Q", type: "full", episode: "Ep. 05", duration: "30 Min", features: ["Audio Repair", "Branding"], isRecent: false },
    { title: "Branded Podcast", description: "Transformed raw recordings into an engaging content piece with animated overlays.", image: "https://cdn.jsdelivr.net/gh/parves4u/images/Thumbnail52.jpg", youtubeId: "2YnDFtWwlLw", type: "full", episode: "Ep. 32", duration: "55 Min", features: ["Studio Edit", "VFX"], isRecent: false },
  ],
  "Short Form": [
     { title: "Dynamic Kinetic Typography & Sound Design", description: "A high-energy showcase of rhythmic editing and advanced text animation.", image: "https://cdn.jsdelivr.net/gh/parves4u/images/Reels1.jpg", youtubeId: "tizW2ql0Bes", type: "short", isRecent: true },
     { title: "Kinetic Typography & Rhythmic Edit", description: "A high-energy motivational edit featuring dynamic typography and aggressive pacing.", image: "https://cdn.jsdelivr.net/gh/parves4u/images/Reels2.jpg", youtubeId: "ylHiJ5lQ1l8", type: "short", isRecent: true },
     { title: "Tech Industry Layoffs: The Reality Check", description: "We visualize the harsh reality of the current job market, where thousands of engineers face sudden layoffs.", image: "https://cdn.jsdelivr.net/gh/parves4u/images/Reels3.jpg", youtubeId: "h1hckIjdY78", type: "short", isRecent: true },
     { title: "Direct & Punchy (Best for Social Media/Shorts)", description: "Struggling with rates? The problem isn't your price—it's your positioning.", image: "https://cdn.jsdelivr.net/gh/parves4u/images/Reels4.jpg", youtubeId: "1b6aDvkuKL4", type: "short", isRecent: false },
     { title: "The Future of Construction Marketing: Immersive Vision", description: "We explore why construction projects need to ditch the paper and embrace photorealistic 3D visualization.", image: "https://cdn.jsdelivr.net/gh/parves4u/images/Reels5.jpg", youtubeId: "0BEWtxA-89I", type: "short", isRecent: false },
     { title: "Tech Service Promo: Webby Lab", description: "A high-energy explainer video designed to attract entrepreneurs and creators looking for custom digital solutions.", image: "https://cdn.jsdelivr.net/gh/parves4u/images/Reels6.jpg", youtubeId: "C2VTvmtjxGY", type: "short", isRecent: false },
     { title: "App Promo: Student Coursework Manager", description: "A dynamic promotional video for an ed-tech tool that integrates with Canvas, Blackboard, and Moodle.", image: "https://cdn.jsdelivr.net/gh/parves4u/images/Reels7.jpg", youtubeId: "rI3firPdDG4", type: "short", isRecent: false },
     { title: "High-Converting Financial Ad", description: "Urgent, clear, and effective. A social media ad optimized to stop the scroll.", image: "https://cdn.jsdelivr.net/gh/parves4u/images/Reels8.jpg", youtubeId: "SNXZcTclFJM", type: "short", isRecent: false },
     { title: "Local Service Ad: Dryer Vent Cleaning", description: "This short video combines urgency with safety tips to drive immediate bookings.", image: "https://cdn.jsdelivr.net/gh/parves4u/images/Reels9.jpg", youtubeId: "uzfPhj2waJw", type: "short", isRecent: false },
  ],
  "Audio Editing": [
    { title: "Background Noise Reduction", description: "Eliminated static, hiss, and background noise to make the vocal track crystal clear.", image: "https://cdn.jsdelivr.net/gh/parves4u/images/Thumbnail56.jpg", youtubeId: "82T-hsVntQ4", type: "full", tags: ["Noise Removal", "EQ"], isRecent: true },
    { title: "Podcast Voice Enhancement", description: "Transformed a raw home recording into a rich, studio-quality podcast episode.", image: "https://cdn.jsdelivr.net/gh/parves4u/images/Audio Eting1.jpg", youtubeId: "Xbg3MwMg6lk", type: "full", tags: ["Mastering", "Podcast"], isRecent: false },
    { title: "Commercial Audio Mixing", description: "Balanced sound effects, background music, and voiceover for a commercial ad.", image: "https://cdn.jsdelivr.net/gh/parves4u/images/Audio Eting2.jpg", youtubeId: "zBDr63YZWgk", type: "full", tags: ["Mixing", "SFX"], isRecent: false },
    { title: "Voice Cleaning & Restoration", description: "Restored a damaged audio file by removing clicks, pops, and reverb.", image: "https://cdn.jsdelivr.net/gh/parves4u/images/Audio Eting3.jpg", youtubeId: "lAn9wThCjuw", type: "full", tags: ["Restoration", "Vocal"], isRecent: false },
  ],
  "2D/3D Animation": [
    { title: "Travel Animation", description: "Evoking wanderlust with motion graphics and seamless transitions.", image: "https://cdn.jsdelivr.net/gh/parves4u/images/Thumnail01.jpg", youtubeId: "E5YXZDhCvZ0", type: "full", tags: ["2D Motion", "4K"], tools: ["After Effects"], isRecent: true },
    { title: "Corporate Animation", description: "Professional explainer video to break down complex business solutions.", image: "https://cdn.jsdelivr.net/gh/parves4u/images/Thumnail02.jpg", youtubeId: "YadXAX-oGnQ", type: "full", tags: ["Explainer", "Corporate"], tools: ["After Effects", "Illustrator"], isRecent: false },
    { title: "Website Promo", description: "Stunning 3D website promo creation with dynamic camera movements.", image: "https://cdn.jsdelivr.net/gh/parves4u/images/Thumnail03.jpg", youtubeId: "7POgYCldK3w", type: "full", tags: ["3D Render", "Promo"], tools: ["Blender"], isRecent: false },
    { title: "Brand Intro", description: "Creative and energetic brand introduction for social media.", image: "https://cdn.jsdelivr.net/gh/parves4u/images/Thumnail04.jpg", youtubeId: "pbZp_FxxBzg", type: "full", tags: ["Intro", "Logo Reveal"], tools: ["After Effects"], isRecent: false },
  ],
  "Digital Marketing": [
    { id: 1, title: "E-Commerce Brand Scaling", description: "Scaled a local fashion brand's sales using targeted Facebook & Instagram conversion campaigns.", image: "https://cdn.jsdelivr.net/gh/parves4u/images/Digital-Marketing01.jpg", platforms: ["Meta Ads", "Shopify"], metrics: [ { label: "ROAS", value: "4.5x" }, { label: "Sales Increase", value: "+120%" } ], isRecent: true },
    { id: 2, title: "B2B Lead Generation", description: "Generated high-quality leads for a software company using Google Search and LinkedIn Ads.", image: "https://cdn.jsdelivr.net/gh/parves4u/images/Digital-Marketing02.jpg", platforms: ["Google Ads", "LinkedIn"], metrics: [ { label: "Leads Gen", value: "500+" }, { label: "Cost Per Lead", value: "-30%" } ], isRecent: false },
    { id: 3, title: "Local SEO Dominance", description: "Ranked a local clinic on Google first page within 3 months driving organic foot traffic.", image: "https://cdn.jsdelivr.net/gh/parves4u/images/Digital-Marketing03.jpg", platforms: ["SEO", "GMB"], metrics: [ { label: "Organic Traffic", value: "+250%" }, { label: "Google Rank", value: "#1" } ], isRecent: true },
    { id: 4, title: "YouTube Channel Growth", description: "Optimized video content and ran discovery ads to skyrocket subscriber count rapidly.", image: "https://cdn.jsdelivr.net/gh/parves4u/images/Digital-Marketing04.jpg", platforms: ["YouTube Ads", "Content"], metrics: [ { label: "Subscribers", value: "10k+" }, { label: "Views", value: "1M+" } ], isRecent: true },
  ],
  "Web Development": [
    { id: 1, title: "EasyClient Manager", description: "Professional client portal.", image: "https://cdn.jsdelivr.net/gh/parves4u/images/Web-Development-01.jpg", tech: ["React", "Tailwind CSS"], link: "#", isRecent: true },
    { id: 2, title: "Feature Landing Page", description: "High converting landing page.", image: "https://cdn.jsdelivr.net/gh/parves4u/images/Web-Development-02.jpg", tech: ["WordPress", "Elementor Pro"], link: "#", isRecent: true },
    { id: 3, title: "EcoBrand Website", description: "Eco-friendly product site.", image: "https://cdn.jsdelivr.net/gh/parves4u/images/Web-Development-03.jpg", tech: ["Shopify", "E-commerce"], link: "#", isRecent: true },
    { id: 4, title: "SellSphere Platform", description: "Scaling business structure.", image: "https://cdn.jsdelivr.net/gh/parves4u/images/Web-Development-04.jpg", tech: ["React", "Node.js"], link: "#", isRecent: false },
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
  const isAudioEditing = categoryName === "Audio Editing";
  const isAnimation = categoryName === "2D/3D Animation"; 
  const isPodcast = categoryName === "Podcast"; // ✅ Added Podcast Flag
  const isShortFormCategory = categoryName === "Short Form";
  const isVideoEditing = categoryName === "Video Editing";

  useEffect(() => {
    if (isShortFormCategory || videoType === 'short') {
        setVisibleCount(6); 
    } else if (isGraphicDesign || isDigitalMarketing || isWebDevelopment) {
        setVisibleCount(6); 
    } else {
        setVisibleCount(4); 
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
  
  const handleViewMore = () => {
    const increment = (isShortFormCategory || videoType === 'short' || isGraphicDesign || isWebDevelopment || isDigitalMarketing) ? 3 : 2;
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
            {visibleContent.map((item, index) => {

              // ==========================================
              // ✅ CREATIVE PODCAST CARD
              // ==========================================
              if (isPodcast) {
                return (
                  <div 
                    key={index} 
                    className="group flex flex-col bg-[#111] border border-white/10 rounded-2xl overflow-hidden hover:border-caribbean-green/50 transition-all duration-300 hover:shadow-[0_0_30px_-10px_rgba(0,223,142,0.3)] hover:-translate-y-2 cursor-pointer"
                    onClick={() => setActiveItem(item)}
                  >
                    {/* Image Area */}
                    <div className="relative aspect-video overflow-hidden bg-gray-900 border-b border-white/5">
                      <img 
                        src={item.image} 
                        alt={item.title} 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100" 
                        loading="lazy"
                      />
                      
                      {/* ON AIR Badge */}
                      <div className="absolute top-3 left-3 bg-red-600/90 backdrop-blur-md border border-red-400/50 px-3 py-1 rounded-md flex items-center gap-2 shadow-lg">
                        <span className="w-2 h-2 rounded-full bg-white animate-pulse"></span>
                        <span className="text-white text-[10px] font-black tracking-widest uppercase">On Air</span>
                      </div>

                      {/* Duration Badge */}
                      <div className="absolute bottom-3 right-3 bg-black/80 backdrop-blur-md border border-white/10 px-2 py-1.5 rounded text-white text-xs font-bold flex items-center gap-1.5">
                        {item.duration}
                      </div>

                      {/* Center Play Button Overlay */}
                      <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="w-14 h-14 rounded-full bg-caribbean-green text-black flex items-center justify-center transform scale-75 group-hover:scale-100 transition-all duration-300 shadow-[0_0_20px_rgba(0,223,142,0.6)]">
                          <Play className="w-6 h-6 ml-1 fill-black" />
                        </div>
                      </div>
                    </div>

                    {/* Content Area */}
                    <div className="p-6 flex-1 flex flex-col">
                      <div className="flex items-center justify-between mb-3">
                         <span className="text-caribbean-green text-xs font-bold uppercase tracking-wider flex items-center gap-1.5">
                           <Radio size={14} /> {item.episode}
                         </span>
                         <div className="flex gap-2">
                           {item.features?.map((feat, i) => (
                             <span key={i} className="text-[9px] border border-white/10 text-gray-400 px-2 py-0.5 rounded-sm bg-white/5 uppercase font-semibold">
                               {feat}
                             </span>
                           ))}
                         </div>
                      </div>
                      
                      <h3 className="text-white font-bold text-xl mb-2 group-hover:text-caribbean-green transition-colors line-clamp-1">{item.title}</h3>
                      <p className="text-gray-400 text-sm line-clamp-2 mb-4">{item.description}</p>
                      
                      <div className="mt-auto border-t border-white/10 pt-4 flex items-center justify-between">
                        <span className="text-caribbean-green text-sm font-semibold group/link flex items-center">
                          Watch Episode <ArrowRight size={16} className="ml-2 transform group-hover/link:translate-x-1 transition-transform" />
                        </span>
                      </div>
                    </div>
                  </div>
                );
              }

              // ==========================================
              // ✅ CREATIVE 2D/3D ANIMATION CARD
              // ==========================================
              if (isAnimation) {
                return (
                  <div 
                    key={index} 
                    className="group relative bg-[#111] border border-white/10 rounded-2xl overflow-hidden hover:border-caribbean-green/50 transition-all duration-300 hover:shadow-[0_0_30px_-10px_rgba(0,223,142,0.3)] hover:-translate-y-2 cursor-pointer"
                    onClick={() => setActiveItem(item)}
                  >
                    {/* Image Area with Animation Effects */}
                    <div className="relative aspect-video overflow-hidden bg-gray-900 border-b border-white/5">
                      <img 
                        src={item.image} 
                        alt={item.title} 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-90 group-hover:opacity-100" 
                        loading="lazy"
                      />
                      
                      {/* Top Badges (Quality/Format) */}
                      <div className="absolute top-4 left-4 flex gap-2">
                        {item.tags?.map((tag, i) => (
                          <span key={i} className="bg-black/70 backdrop-blur-md border border-white/10 px-2.5 py-1 text-[10px] font-bold text-caribbean-green rounded uppercase shadow-lg">
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Center Play Box Overlay */}
                      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                        <div className="w-16 h-16 rounded-xl bg-white/10 backdrop-blur-md border border-white/30 flex items-center justify-center group-hover:scale-110 group-hover:bg-caribbean-green group-hover:border-caribbean-green transition-all duration-300 shadow-[0_0_20px_rgba(0,0,0,0.5)] transform group-hover:rotate-6">
                            <Box className="w-6 h-6 text-white group-hover:text-black transition-colors" />
                        </div>
                      </div>
                    </div>

                    <div className="p-6">
                      <h3 className="text-white font-bold text-xl mb-2 line-clamp-1 group-hover:text-caribbean-green transition-colors">{item.title}</h3>
                      <p className="text-gray-400 text-sm line-clamp-2 mb-5">{item.description}</p>
                      
                      <div className="flex items-center justify-between border-t border-white/10 pt-4 mt-auto">
                        {/* Software Tools Tag */}
                        <div className="flex gap-2">
                          {item.tools?.map((tool, i) => (
                             <span key={i} className="text-xs text-gray-400 font-medium">
                               {tool}{i < item.tools.length - 1 ? " • " : ""}
                             </span>
                          ))}
                        </div>
                        
                        <div className="flex items-center text-caribbean-green text-sm font-semibold cursor-pointer group/link">
                            Play Animation
                            <ArrowRight size={16} className="ml-2 transform group-hover/link:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </div>
                  </div>
                );
              }
              
              // ==========================================
              // ✅ CREATIVE AUDIO EDITING CARD
              // ==========================================
              if (isAudioEditing) {
                return (
                  <div 
                    key={index} 
                    className="group relative bg-[#111] border border-white/10 rounded-2xl overflow-hidden hover:border-caribbean-green/50 transition-all duration-300 hover:shadow-[0_0_30px_-10px_rgba(0,223,142,0.3)] hover:-translate-y-2 cursor-pointer"
                    onClick={() => setActiveItem(item)}
                  >
                    {/* Image Area with Waveform Effect */}
                    <div className="relative aspect-video overflow-hidden bg-gray-900 border-b border-white/5">
                      <img 
                        src={item.image} 
                        alt={item.title} 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-40" 
                        loading="lazy"
                      />
                      
                      {/* Top Mic Badge */}
                      <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md border border-white/10 px-3 py-1.5 rounded-full flex items-center gap-2 shadow-lg">
                        <Mic2 size={14} className="text-caribbean-green" />
                        <span className="text-white text-xs font-bold tracking-wide uppercase">Audio Profile</span>
                      </div>

                      {/* Center Headphones & Waveform */}
                      <div className="absolute inset-0 flex flex-col items-center justify-center">
                         {/* Animated Waveform Bars (Hidden until hover) */}
                         <div className="flex items-end gap-1.5 h-12 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                           <div className="w-1.5 bg-caribbean-green rounded-t-sm animate-[bounce_1s_infinite_0.1s] h-1/3"></div>
                           <div className="w-1.5 bg-caribbean-green rounded-t-sm animate-[bounce_1s_infinite_0.3s] h-full"></div>
                           <div className="w-1.5 bg-caribbean-green rounded-t-sm animate-[bounce_1s_infinite_0.5s] h-2/3"></div>
                           <div className="w-1.5 bg-caribbean-green rounded-t-sm animate-[bounce_1s_infinite_0.2s] h-1/2"></div>
                           <div className="w-1.5 bg-caribbean-green rounded-t-sm animate-[bounce_1s_infinite_0.4s] h-3/4"></div>
                         </div>

                         {/* Play/Listen Button */}
                         <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-md border border-caribbean-green/50 flex items-center justify-center group-hover:scale-110 group-hover:bg-caribbean-green group-hover:border-caribbean-green transition-all duration-300 shadow-[0_0_20px_rgba(0,223,142,0.3)]">
                            <Headphones className="w-6 h-6 text-caribbean-green group-hover:text-black transition-colors" />
                         </div>
                      </div>

                      {/* Bottom Tags */}
                      <div className="absolute bottom-4 left-4 flex gap-2">
                         {item.tags?.map((tag, i) => (
                            <span key={i} className="text-[10px] uppercase font-bold px-2 py-1 bg-black/50 backdrop-blur-md border border-white/10 text-gray-200 rounded">
                               {tag}
                            </span>
                         ))}
                      </div>
                    </div>

                    <div className="p-5">
                      <h3 className="text-white font-bold text-lg mb-2 line-clamp-1 group-hover:text-caribbean-green transition-colors">{item.title}</h3>
                      <p className="text-gray-400 text-sm line-clamp-2 mb-4">{item.description}</p>
                      
                      <div className="flex items-center text-caribbean-green text-sm font-semibold cursor-pointer group/link">
                          Listen to Audio
                          <ArrowRight size={16} className="ml-2 transform group-hover/link:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                );
              }

              // ==========================================
              // ✅ CREATIVE GRAPHIC DESIGN CARD
              // ==========================================
              if (isGraphicDesign) {
                return (
                  <div 
                    key={index} 
                    className="group relative bg-[#111] border border-white/10 rounded-2xl overflow-hidden hover:border-caribbean-green/50 transition-all duration-500 hover:shadow-[0_0_30px_-10px_rgba(0,223,142,0.3)] hover:-translate-y-2 cursor-pointer"
                    onClick={() => setActiveItem(item)}
                  >
                    {/* Image Area */}
                    <div className="relative w-full aspect-square overflow-hidden bg-gray-900">
                      <img 
                        src={item.image} 
                        alt={item.title} 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                        loading="lazy"
                      />
                      
                      {/* Top Category Badge */}
                      <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md border border-white/10 px-3 py-1.5 text-[10px] font-bold text-caribbean-green rounded-full tracking-wider uppercase shadow-lg">
                        {item.category || "Design"}
                      </div>

                      {/* Cinematic Hover Glass Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end p-6">
                        <div className="transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                          
                          <h3 className="text-white font-bold text-2xl mb-2">{item.title}</h3>
                          <p className="text-gray-300 text-sm mb-5 line-clamp-2">{item.description}</p>
                          
                          <div className="flex items-center justify-between border-t border-white/20 pt-4 mt-auto">
                            {/* Tools Used */}
                            <div className="flex gap-2">
                              {item.tools?.map((tool, i) => (
                                <span key={i} className="text-[10px] font-medium px-2.5 py-1 bg-white/10 rounded border border-white/5 text-gray-200">
                                  {tool}
                                </span>
                              ))}
                            </div>
                            
                            {/* Maximize Icon */}
                            <div className="w-10 h-10 rounded-full bg-caribbean-green text-black flex items-center justify-center hover:scale-110 transition-transform shadow-[0_0_15px_rgba(0,223,142,0.5)]">
                              <Maximize2 size={18} />
                            </div>
                          </div>

                        </div>
                      </div>
                    </div>
                  </div>
                );
              }

              // ==========================================
              // ✅ CREATIVE DIGITAL MARKETING CARD
              // ==========================================
              if (isDigitalMarketing) {
                return (
                  <div key={index} className="group flex flex-col bg-[#111] border border-white/10 rounded-2xl overflow-hidden hover:border-caribbean-green/50 transition-all duration-300 hover:shadow-[0_0_30px_-10px_rgba(0,223,142,0.3)] hover:-translate-y-2">
                    
                    {/* Image Area with Overlay Badge */}
                    <div className="relative aspect-video overflow-hidden bg-gray-900 border-b border-white/5 cursor-pointer" onClick={() => setActiveItem(item)}>
                      <img 
                        src={item.image} 
                        alt={item.title} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100" 
                      />
                      
                      {/* Floating Success Metric Badge */}
                      <div className="absolute top-3 right-3 bg-black/70 backdrop-blur-md border border-white/10 px-3 py-1.5 rounded-full flex items-center gap-2 shadow-lg">
                        <TrendingUp size={14} className="text-caribbean-green" />
                        <span className="text-white text-xs font-bold tracking-wide">
                          {item.metrics?.[0]?.value} {item.metrics?.[0]?.label}
                        </span>
                      </div>

                      {/* Hover Overlay */}
                      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <span className="px-5 py-2.5 bg-caribbean-green text-black font-bold rounded-full text-sm flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                           View Case Study <ArrowRight size={16}/>
                        </span>
                      </div>
                    </div>

                    {/* Content & Analytics Area */}
                    <div className="p-6 flex-1 flex flex-col">
                      {/* Platform Tags */}
                      <div className="flex flex-wrap gap-2 mb-3">
                        {item.platforms?.map((platform, i) => (
                          <span key={i} className="text-[10px] uppercase tracking-wider font-bold text-caribbean-green bg-caribbean-green/10 px-2 py-1 rounded">
                            {platform}
                          </span>
                        ))}
                      </div>

                      <h3 className="text-white font-bold text-xl mb-2 group-hover:text-caribbean-green transition-colors">{item.title}</h3>
                      <p className="text-gray-400 text-sm mb-6 line-clamp-2">{item.description}</p>

                      {/* Data Analytics Grid */}
                      <div className="grid grid-cols-2 gap-4 mt-auto border-t border-white/10 pt-5">
                        {item.metrics?.map((metric, i) => (
                          <div key={i} className="flex flex-col">
                            <span className="text-gray-500 text-xs font-medium uppercase tracking-wide flex items-center gap-1">
                              {i === 0 ? <Target size={12}/> : <BarChart size={12}/>} {metric.label}
                            </span>
                            <span className="text-white font-bold text-lg mt-0.5">{metric.value}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              }

              // ==========================================
              // ✅ CREATIVE WEB DEVELOPMENT CARD
              // ==========================================
              if (isWebDevelopment) {
                return (
                  <div key={index} className="group flex flex-col bg-[#111] border border-white/10 rounded-2xl overflow-hidden hover:border-caribbean-green/50 transition-all duration-300 hover:shadow-[0_0_30px_-10px_rgba(0,223,142,0.3)] hover:-translate-y-2">
                    
                    {/* Fake Browser Window Header */}
                    <div className="bg-[#1A1A1A] border-b border-white/10 px-4 py-3 flex items-center gap-3">
                      <div className="flex gap-1.5">
                        <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                        <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                      </div>
                      <div className="mx-auto bg-black/40 text-gray-500 text-xs px-3 py-1.5 rounded-md flex items-center gap-2 w-2/3 justify-center truncate border border-white/5">
                        <Globe size={12} /> {item.title.toLowerCase().replace(/\s+/g, '')}.com
                      </div>
                    </div>

                    {/* Image Area with Zoom/Preview Effect */}
                    <div className="relative aspect-video overflow-hidden bg-gray-900 border-b border-white/5 cursor-pointer" onClick={() => setActiveItem(item)}>
                      <img 
                        src={item.image} 
                        alt={item.title} 
                        className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700" 
                      />
                      {/* Hover Overlay */}
                      <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <span className="px-5 py-2.5 bg-caribbean-green text-black font-bold rounded-full text-sm flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                           View Full Image <ArrowRight size={16}/>
                        </span>
                      </div>
                    </div>

                    {/* Info & Tags Area */}
                    <div className="p-6 flex-1 flex flex-col">
                      <h3 className="text-white font-bold text-xl mb-2 group-hover:text-caribbean-green transition-colors">{item.title}</h3>
                      <p className="text-gray-400 text-sm mb-5 line-clamp-2">{item.description}</p>

                      {/* Technology Badges */}
                      <div className="flex flex-wrap gap-2 mb-6 mt-auto">
                          {item.tech?.map((t, i) => (
                              <span key={i} className="text-xs px-3 py-1.5 bg-white/5 border border-white/10 text-gray-300 rounded-lg shadow-inner">
                                {t}
                              </span>
                          ))}
                      </div>

                      {/* Visit Live Website Button */}
                      <div className="pt-4 border-t border-white/10">
                          <a href={item.link || "#"} target="_blank" rel="noreferrer" className="flex items-center justify-between text-sm font-semibold text-caribbean-green hover:text-white transition-colors group/link w-full">
                              Visit Live Website
                              <ExternalLink size={18} className="transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 transition-transform" />
                          </a>
                      </div>
                    </div>
                  </div>
                );
              }

              // ==========================================
              // STANDARD VIDEO CARD (Existing)
              // ==========================================
              return (
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

                  <div className="p-5">
                    <h3 className="text-white font-bold text-lg mb-2 line-clamp-1 group-hover:text-caribbean-green transition-colors">{item.title}</h3>
                    <p className="text-gray-400 text-sm line-clamp-2 mb-4">{item.description}</p>
                    
                    <div className="flex items-center text-caribbean-green text-sm font-semibold cursor-pointer group/link">
                        Watch Video
                        <ArrowRight size={16} className="ml-2 transform group-hover/link:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              );
            })}
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