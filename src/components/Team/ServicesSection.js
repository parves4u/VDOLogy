import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Play, X } from "lucide-react";

const ServicesSection = ({ currentCategory, setCurrentCategory }) => {
  
  // Categories
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

  // State
  const [videoType, setVideoType] = useState("full"); // "full" or "short"
  const [showAll, setShowAll] = useState(false);
  const [activeVideo, setActiveVideo] = useState(null);
  const [graphicDesignImages, setGraphicDesignImages] = useState([]);
  const [showRecentWorks, setShowRecentWorks] = useState(false); // Toggle for recent works

  // Load graphic design images
  useEffect(() => {
    const loadGraphicDesignImages = () => {
      const images = [
        {
          id: 1,
          title: "Modern Sale Banner",
          description: "Sleek and stylish, perfect for promotions.",
          image: "https://cdn.jsdelivr.net/gh/parves4u/images/Banner1.jpg",
          width: 1200,
          height: 1200,
          isRecent: true,
        },
        {
          id: 2,
          title: "New Arrival Promo",
          description: "Trendy layout for latest collections.",
          image: "https://cdn.jsdelivr.net/gh/parves4u/images/Banner16.jpg",
          width: 1200,
          height: 1200,
          isRecent: false,
        },
        {
          id: 3,
          title: "Seasonal Offer Template",
          description: "Bright and festive for seasonal sales.",
          image: "https://cdn.jsdelivr.net/gh/parves4u/images/Banner3.jpg",
          width: 1200,
          height: 1200,
          isRecent: true,
        },
        {
          id: 1,
          title: "Pet Care Product Ad",
          description: "Cute and friendly for pet supplies.",
          image: "https://cdn.jsdelivr.net/gh/parves4u/images/Banner4.jpg",
          width: 1200,
          height: 1200,
          isRecent: true,
        },
        {
          id: 2,
          title: "Food & Nutrition Promo",
          description: "Delicious design for healthy products.",
          image: "https://cdn.jsdelivr.net/gh/parves4u/images/Banner5.jpg",
          width: 1200,
          height: 1200,
          isRecent: false,
        },
        {
          id: 3,
          title: "Gadget Promo Banner",
          description: "Futuristic style for tech offers.",
          image: "https://cdn.jsdelivr.net/gh/parves4u/images/Banner6.jpg",
          width: 1200,
          height: 1200,
          isRecent: true,
        },
        {
          id: 1,
          title: "Online Course Promo",
          description: "Bright and engaging for education ads.",
          image: "https://cdn.jsdelivr.net/gh/parves4u/images/Banner7.jpg",
          width: 1200,
          height: 1200,
          isRecent: true,
        },
        {
          id: 2,
          title: "Book Recommendation Banner",
          description: "Minimalist for intellectual appeal.",
          image: "https://cdn.jsdelivr.net/gh/parves4u/images/Banner8.jpg",
          width: 1200,
          height: 1200,
          isRecent: false,
        },
        {
          id: 3,
          title: "Organic Food Ad",
          description: "Natural colors and rustic design.",
          image: "https://cdn.jsdelivr.net/gh/parves4u/images/Banner9.jpg",
          width: 1200,
          height: 1200,
          isRecent: true,
        },
        {
          id: 1,
          title: "Event Announcement",
          description: "Professional layout for events.",
          image: "https://cdn.jsdelivr.net/gh/parves4u/images/Banner10.jpg",
          width: 1200,
          height: 1200,
          isRecent: true,
        },
        {
          id: 2,
          title: "Creative Quote Layout",
          description: "Designed for inspiration and engagement.",
          image: "https://cdn.jsdelivr.net/gh/parves4u/images/Banner11.jpg",
          width: 1200,
          height: 1200,
          isRecent: false,
        },
        {
          id: 3,
          title: "Skincare Routine Steps",
          description: "Organized and smooth visual guide.",
          image: "https://cdn.jsdelivr.net/gh/parves4u/images/Banner12.jpg",
          width: 1200,
          height: 1200,
          isRecent: true,
        },
        {
          id: 1,
          title: "Dynamic & Bold",
          description: "Command attention with striking visuals",
          image: "https://cdn.jsdelivr.net/gh/parves4u/images/Banner17.jpg",
          width: 1200,
          height: 1200,
          isRecent: true,
        },
        {
          id: 2,
          title: "Digital Service Promo",
          description: "Clean tech-inspired visuals.",
          image: "https://cdn.jsdelivr.net/gh/parves4u/images/Banner14.jpg",
          width: 1200,
          height: 1200,
          isRecent: false,
        },
        {
          id: 3,
          title: "New Feature Highlight",
          description: "Perfect for app or product updates.",
          image: "https://cdn.jsdelivr.net/gh/parves4u/images/Banner15.jpg",
          width: 1200,
          height: 1200,
          isRecent: true,
        },
        {
          id: 1,
          title: "Flash Deal Banner",
          description: "Bold design to grab quick attention.",
          image: "https://cdn.jsdelivr.net/gh/parves4u/images/Banner18.jpg",
          width: 1200,
          height: 1200,
          isRecent: true,
        },
        {
          id: 2,
          title: "Snuggle-Worthy Essentials",
          description: "Cozy beds for ultimate pet comfort.",
          image: "https://cdn.jsdelivr.net/gh/parves4u/images/Banner19.jpg",
          width: 1200,
          height: 1200,
          isRecent: false,
        },
        {
          id: 3,
          title: "Study Abroad Dreams",
          description: "Unlock global education today!",
          image: "https://cdn.jsdelivr.net/gh/parves4u/images/Banner20.jpg",
          width: 1200,
          height: 1200,
          isRecent: true,
        },
        {
          id: 1,
          title: "Dreamy Little Nook Banner Ads",
          description: "Magical spaces for tiny adventurers.",
          image: "https://cdn.jsdelivr.net/gh/parves4u/images/Banner22.jpg",
          width: 1200,
          height: 1200,
          isRecent: true,
        },
        {
          id: 2,
          title: "Tasty & Nutritious Banner",
          description: "Wholesome eats that delight your plate.",
          image: "https://cdn.jsdelivr.net/gh/parves4u/images/Banner23.jpg",
          width: 1200,
          height: 1200,
          isRecent: false,
        },
        {
          id: 3,
          title: "Fitness Motivation Ad",
          description: "Energetic and inspiring visuals.",
          image: "https://cdn.jsdelivr.net/gh/parves4u/images/Banner24.jpg",
          width: 1200,
          height: 1200,
          isRecent: true,
        },
        {
          id: 1,
          title: "Minimalist Brand Ad",
          description: "Subtle and classy for premium brands.",
          image: "https://cdn.jsdelivr.net/gh/parves4u/images/Banner25.jpg",
          width: 1200,
          height: 1200,
          isRecent: true,
        },
        {
          id: 2,
          title: "Whisker-Licking Delights ads",
          description: "Tasty, nutritious food and treats they will beg for.",
          image: "https://cdn.jsdelivr.net/gh/parves4u/images/Banner26.jpg",
          width: 1200,
          height: 1200,
          isRecent: false,
        },
        {
          id: 3,
          title: "Wellness Reminder Banner",
          description: "Soft tones for health-focused messages.",
          image: "https://cdn.jsdelivr.net/gh/parves4u/images/Banner27.jpg",
          width: 1200,
          height: 1200,
          isRecent: true,
        },
        {
          id: 1,
          title: "Creative website Layout",
          description: "Designed for inspiration and engagement.",
          image: "https://cdn.jsdelivr.net/gh/parves4u/images/Banner29.jpg",
          width: 1200,
          height: 1200,
          isRecent: true,
        },
        {
          id: 2,
          title: "Eat Smart, Feel Bright ads",
          description: "Fuel your day the delicious way.",
          image: "https://cdn.jsdelivr.net/gh/parves4u/images/Banner30.jpg",
          width: 1200,
          height: 1200,
          isRecent: false,
        },
        {
          id: 3,
          title: "Admission Banner",
          description: "Simple design to showcase reviews.",
          image: "https://cdn.jsdelivr.net/gh/parves4u/images/Banner31.jpg",
          width: 1200,
          height: 1200,
          isRecent: true,
        },
        {
          id: 1,
          title: "Eco-Friendly Product Banner",
          description: "Green tones for sustainable branding.",
          image: "https://cdn.jsdelivr.net/gh/parves4u/images/Banner32.jpg",
          width: 1200,
          height: 1200,
          isRecent: true,
        },
        {
          id: 2,
          title: "Glamour in Every Detail",
          description: "Luxurious cosmetics, flawless presentation.",
          image: "https://cdn.jsdelivr.net/gh/parves4u/images/Banner33.jpg",
          width: 1200,
          height: 1200,
          isRecent: false,
        },
        {
          id: 3,
          title: "Purr-fectly Pampered",
          description: "Luxury grooming and comfort for spoiled kitties.",
          image: "https://cdn.jsdelivr.net/gh/parves4u/images/Banner34.jpg",
          width: 1200,
          height: 1200,
          isRecent: true,
        },
        {
          id: 1,
          title: "Learn & Grow Daily Banner",
          description: "Knowledge nuggets for curious minds.",
          image: "https://cdn.jsdelivr.net/gh/parves4u/images/Banner35.jpg",
          width: 1200,
          height: 1200,
          isRecent: true,
        },
        {
          id: 2,
          title: "Strong & Confident",
          description: "Celebrate progress, not just pounds.",
          image: "https://cdn.jsdelivr.net/gh/parves4u/images/Banner36.jpg",
          width: 1200,
          height: 1200,
          isRecent: false,
        },
        {
          id: 3,
          title: "Glow From Within ad",
          description: "Nourish your skin naturally.",
          image: "https://cdn.jsdelivr.net/gh/parves4u/images/Banner37.jpg",
          width: 1200,
          height: 1200,
          isRecent: true,
        },
        {
          id: 1,
          title: "Nurses On-Demand",
          description: "Flexible shifts, competitive pay, your schedule.",
          image: "https://cdn.jsdelivr.net/gh/parves4u/images/Banner39.jpg",
          width: 1200,
          height: 1200,
          isRecent: true,
        },
        {
          id: 2,
          title: "Your Life, Simplified",
          description: "All-in-one app for daily tasks.",
          image: "https://cdn.jsdelivr.net/gh/parves4u/images/Banner40.jpg",
          width: 1200,
          height: 1200,
          isRecent: false,
        },
        {
          id: 3,
          title: "Happy Tails Guaranteed",
          description: "Products designed to keep pets joyful and thriving.",
          image: "https://cdn.jsdelivr.net/gh/parves4u/images/Banner41.jpg",
          width: 1200,
          height: 1200,
          isRecent: true,
        },
        {
          id: 1,
          title: "Digital Service Promo",
          description: "Clean tech-inspired visuals.",
          image: "https://cdn.jsdelivr.net/gh/parves4u/images/Banner42.jpg",
          width: 1200,
          height: 1200,
          isRecent: true,
        },
        {
          id: 2,
          title: "Bark-Worthy Basics",
          description: "Everyday essentials for a happy, healthy pet.",
          image: "https://cdn.jsdelivr.net/gh/parves4u/images/Banner43.jpg",
          width: 1200,
          height: 1200,
          isRecent: false,
        },
        {
          id: 3,
          title: "Fashion Lookbook Banner",
          description: "Trendy visuals for style updates.",
          image: "https://cdn.jsdelivr.net/gh/parves4u/images/Banner44.jpg",
          width: 1200,
          height: 1200,
          isRecent: true,
        },
        {
          id: 1,
          title: "Your Dream Home Awaits",
          description: "Luxury living, personalized for you.",
          image: "https://cdn.jsdelivr.net/gh/parves4u/images/Banner45.jpg",
          width: 1200,
          height: 1200,
          isRecent: true,
        },
        {
          id: 2,
          title: "Capture the Moment",
          description: "Real-time recording, flawless quality",
          image: "https://cdn.jsdelivr.net/gh/parves4u/images/Banner46.jpg",
          width: 1200,
          height: 1200,
          isRecent: false,
        },
        {
          id: 3,
          title: "Farm Smarter, Not Harder",
          description: "Data-driven tools for modern growers.",
          image: "https://cdn.jsdelivr.net/gh/parves4u/images/Banner47.jpg",
          width: 1200,
          height: 1200,
          isRecent: true,
        },
        {
          id: 1,
          title: "Your Future Starts Here",
          description: "Find the perfect program for your dreams.",
          image: "https://cdn.jsdelivr.net/gh/parves4u/images/Banner48.jpg",
          width: 1200,
          height: 1200,
          isRecent: true,
        },
        {
          id: 2,
          title: "Special Offer on Nodule Relief",
          description: "Save big on trusted treatments today!",
          image: "https://cdn.jsdelivr.net/gh/parves4u/images/Banner49.jpg",
          width: 1200,
          height: 1200,
          isRecent: false,
        },
        {
          id: 3,
          title: "Limited Edition Launch",
          description: "Grab it before it is gone!",
          image: "https://cdn.jsdelivr.net/gh/parves4u/images/Banner50.jpg",
          width: 1200,
          height: 1200,
          isRecent: true,
        },
        {
          id: 1,
          title: "Your Dream Vacation Awaits",
          description: "Tailored getaways, unforgettable memories.",
          image: "https://cdn.jsdelivr.net/gh/parves4u/images/Banner55.jpg",
          width: 1200,
          height: 1200,
          isRecent: true,
        },
        {
          id: 2,
          title: "Be Part of Something Big!",
          description: "Do not miss out  register now!",
          image: "https://cdn.jsdelivr.net/gh/parves4u/images/Banner54.jpg",
          width: 1200,
          height: 1200,
          isRecent: false,
        },
        {
          id: 3,
          title: "Powering Your Digital Life ad",
          description: "Seamless connectivity, smarter living.",
          image: "https://cdn.jsdelivr.net/gh/parves4u/images/Banner53.jpg",
          width: 1200,
          height: 1200,
          isRecent: true,
        },
        // Add more images as needed
      ];
      setGraphicDesignImages(images);
    };

    loadGraphicDesignImages();
  }, []);
  const videos = {
    "Video Editing": [
      {
        title: "Company Introduction Video",
        description:
          "Crafted a sharp, engaging introduction video to present the company’s mission, values, and team in under 60 seconds.",
        image: "https://cdn.jsdelivr.net/gh/parves4u/images/Thamnail1.jpg",
        youtubeId: "IsvMguBA-DY",
        type: "full",
        isRecent: true,
      },
      {
        title: "Company Promotional Video",
        description:
          "Designed a high-impact promo video highlighting the company's services to attract potential customers and partners.",
        image: "https://cdn.jsdelivr.net/gh/parves4u/images/Thamnail2.jpg",
        youtubeId: "8GT8eqdcDz0",
        type: "full",
        isRecent: true,
      },
      {
        title: "Development Company Promo Video",
        description:
          "Produced a sleek promotional video for a tech company to spotlight services, team, and innovations.",
        image: "https://cdn.jsdelivr.net/gh/parves4u/images/Thamnail3.jpg",
        youtubeId: "PAhK07tFQ84",
        type: "full",
        isRecent: true,
      },
      {
        title: "Cash Cow Video Editing",
        description:
          "Produced engaging, monetization-ready YouTube videos with strong hooks and retention techniques.",
        image: "https://cdn.jsdelivr.net/gh/parves4u/images/Thumbnail16.jpg",
        youtubeId: "TgZGIlh9jbU",
        type: "full",
        isRecent: true,
      },
      {
        title: "Cash Cow Video Editing (AI)",
        description:
          "Optimized AI-generated scripts and visuals into captivating videos with custom editing and thumbnails.",
        image: "https://cdn.jsdelivr.net/gh/parves4u/images/Thumbnail21.jpg",
        youtubeId: "Fq9eBKTwMto",
        type: "full",
        isRecent: true,
      },
      {
        title: "Physical Fitness Video Editing",
        description:
          "Edited fitness session videos with timers, reps counters, and motivational overlays.",
        image: "https://cdn.jsdelivr.net/gh/parves4u/images/Thumbnail5.jpg",
        youtubeId: "jpRUU2RJJxM",
        type: "full",
        isRecent: true,
      },
      {
        title: "Company Video Editing",
        description:
          "Provided full-service editing for company footage to produce high-quality corporate videos.",
        image: "https://cdn.jsdelivr.net/gh/parves4u/images/Thumbnail9.jpg",
        youtubeId: "oQ1BdUKS9TI",
        type: "full",
        isRecent: true,
      },
      {
        title: "Learning School Video Editing",
        description:
          "Created engaging classroom and promotional videos for a modern learning institution.",
        image: "https://cdn.jsdelivr.net/gh/parves4u/images/Thumbnail27.jpg",
        youtubeId: "NTvno5UsAA",
        type: "full",
        isRecent: true,
      },
      {
        title: "Company Video Editing",
        description:
          "Produced professional company videos with added graphics, logos, and transitions.",
        image: "https://cdn.jsdelivr.net/gh/parves4u/images/Thumbnail33.jpg",
        youtubeId: "eOpv_sFo6mc",
        type: "full",
        isRecent: true,
      },
      {
        title: "I will be your go-to short form video editor for brands, influencers, and creators",
        description:
          "Cinematic short videos with custom captions, edits, and effects, perfect for building your brand across social platforms.",
        image: "https://cdn.jsdelivr.net/gh/parves4u/images/Thumnail-17.jpg",
        youtubeId: "yg5sHfM33ps",
        type: "short",
        isRecent: false,
      },
      {
        title: "I will be your go-to short form video editor for brands, influencers, and creators",
        description:
          "Cinematic short videos with custom captions, edits, and effects, perfect for building your brand across social platforms.",
        image: "https://cdn.jsdelivr.net/gh/parves4u/images/Shorts-Video1.jpg",
        youtubeId: "80GOCKB8Nys",
        type: "short",
        isRecent: false,
      },
      {
        title: "I will turn your footage into viral short form content for TikTok, Reels, and Shorts",
        description:
          "Creative short form video editing with powerful hooks, captions, and trends to help you go viral.",
        image: "https://cdn.jsdelivr.net/gh/parves4u/images/Shorts-Video2.jpg",
        youtubeId: "K5eYkP-qpPI",
        type: "short",
        isRecent: false,
      },
      {
        title: "Professionally edit short form videos for social media success",
        description:
          "Get polished, engaging, and high-converting short form videos tailored for TikTok, Reels, and YouTube Shorts.",
        image: "https://cdn.jsdelivr.net/gh/parves4u/images/Shorts-Video3.jpg",
        youtubeId: "xvRhy7wIfs4",
        type: "short",
        isRecent: false,
      },
      {
        title: "Craft dynamic short form videos for TikTok, Instagram Reels, and YouTube Shorts",
        description:
          "High-energy edits, smooth transitions, and custom captions designed to grab attention and grow your online presence.",
        image: "https://cdn.jsdelivr.net/gh/parves4u/images/Shorts-Video4.jpg",
        youtubeId: "oc7spQq3Gc8",
        type: "short",
        isRecent: false,
      },
      {
        title: "Create viral short form edits with captions for TikTok, Reels, and Shorts",
        description:
          "Professional short video editing designed for maximum engagement with dynamic captions, viral trends, and polished visuals.",
        image: "https://cdn.jsdelivr.net/gh/parves4u/images/Shorts-Video5.jpg",
        youtubeId: "aREhqEhIOeI",
        type: "short",
        isRecent: false,
      },
      {
        title: "Edit engaging short form content for TikTok, Reels, and YouTube Shorts",
        description:
          "Transform your fashion shoots into captivating short form reels with cinematic edits, stylish cuts, and eye-catching storytelling.",
        image: "https://cdn.jsdelivr.net/gh/parves4u/images/Shorts-Video6.jpg",
        youtubeId: "gYfmGPwLc7M",
        type: "short",
        isRecent: false,
      },
      {
        title: "I will edit your fashion videos into stunning cinematic reels and short films",
        description:
          "Transform your fashion shoots into captivating short form reels with cinematic edits, stylish cuts, and eye-catching storytelling.",
        image: "https://cdn.jsdelivr.net/gh/parves4u/images/Shorts-Video7.jpg",
        youtubeId: "9gBesmhFTog",
        type: "short",
        isRecent: false,
      },
      {
        title: "I will be your expert short form video editor for TikTok, Reels, and Shorts",
        description:
          "Delivering scroll-stopping edits with captions, transitions, and trends to grow your audience across TikTok, YouTube, and Instagram.",
        image: "https://cdn.jsdelivr.net/gh/parves4u/images/Shorts-Video8.jpg",
        youtubeId: "LtAfuz7D62k",
        type: "short",
        isRecent: false,
      },
      {
        title: "I will edit short form videos with custom captions and viral hooks",
        description:
          "Boost your content with expertly edited short videos, including captions, effects, and optimized formats for Reels, Shorts, and TikTok.",
        image: "https://cdn.jsdelivr.net/gh/parves4u/images/Shorts-Video9.jpg",
        youtubeId: "UhXEZPXavqY",
        type: "short",
        isRecent: false,
      },
      {
        title: "I will create high-impact short form videos for TikTok, Reels, and YouTube Shorts",
        description:
          "Professional short form video editing with custom captions, trendy cuts, and engaging visuals for TikTok, Instagram Reels, and YouTube Shorts.",
        image: "https://cdn.jsdelivr.net/gh/parves4u/images/Shorts-Video10.jpg",
        youtubeId: "RXq6qVPvTi4",
        type: "short",
        isRecent: false,
      },
      {
        title: "Leg Care Promo (Short Reels)",
        description:
          "Created a 30-second Instagram reel highlighting the benefits of a leg care product.",
        image: "https://cdn.jsdelivr.net/gh/parves4u/images/Shorts-Video11.jpg",
        youtubeId: "Qe42poSTO34",
        type: "short",
        isRecent: false,
      },
      {
        title: "Breaking News Promo (Short Reels)",
        description:
          "Edited a fast-paced, attention-grabbing short reel for a news outlet.",
        image: "https://cdn.jsdelivr.net/gh/parves4u/images/Shorts-Video12.jpg",
        youtubeId: "Vxz1TEP1WdA",
        type: "short",
        isRecent: false,
      },
      {
        title: "Motivational Speech Editing (Short Reels)",
        description:
          "Cut and styled inspiring speech segments into viral-worthy short reels.",
        image: "https://cdn.jsdelivr.net/gh/parves4u/images/Shorts-Video13.jpg",
        youtubeId: "umKBNknJOfM",
        type: "short",
        isRecent: false,
      },
      {
        title: "Short Video Editing (Short Reels)",
        description:
          "Delivered trendy short-form edits perfect for TikTok, Reels, and YouTube Shorts.",
        image: "https://cdn.jsdelivr.net/gh/parves4u/images/Shorts-Video14.jpg",
        youtubeId: "wmgM62d5ZYk",
        type: "short",
        isRecent: false,
      },
      
    ],
  
    "Podcast": [
      {
        title: "Interview Zoom Meeting Editing",
        description:
          "Edited a professional Zoom interview by enhancing visuals, removing pauses, and ensuring smooth transitions.",
        image: "https://cdn.jsdelivr.net/gh/parves4u/images/Thumbnail15.jpg",
        youtubeId: "xxGFGdvi1CE",
        type: "full",
        isRecent: true,
      },
      {
        title: "Podcast Video Editing",
        description:
          "Cleaned up audio, synced visuals, and added branding elements to make the podcast visually appealing.",
        image: "https://cdn.jsdelivr.net/gh/parves4u/images/Thumbnail50.jpg",
        youtubeId: "yDq1YAplloI",
        type: "full",
        isRecent: false,
      },
      {
        title: "Doctor Zoom Meeting Editing",
        description:
          "Edited and refined a doctor’s Zoom session for clarity, professionalism, and viewer engagement.",
        image: "https://cdn.jsdelivr.net/gh/parves4u/images/Thumbnail51.jpg",
        youtubeId: "SDxxZi0Zw5Q",
        type: "full",
        isRecent: false,
      },
      {
        title: "Podcast Video Editing",
        description:
          "Transformed raw podcast recordings into smooth, branded content ready for upload.",
        image: "https://cdn.jsdelivr.net/gh/parves4u/images/Thumbnail52.jpg",
        youtubeId: "2YnDFtWwlLw",
        type: "full",
        isRecent: false,
      },
      {
        title: "Zoom Meeting Edit Video",
        description:
          "Cut down long Zoom meetings into concise, shareable summaries with highlights and clean transitions.",
        image: "https://cdn.jsdelivr.net/gh/parves4u/images/Thumbnail53.jpg",
        youtubeId: "-agY_vPjLM8",
        type: "full",
        isRecent: false,
      },
      {
        title: "Zoom Video Meeting",
        description:
          "Enhanced a virtual meeting recording with intro/outro, subtitles, and background noise reduction.",
        image: "https://cdn.jsdelivr.net/gh/parves4u/images/Thumbnail54.jpg",
        youtubeId: "HPukx7zsRbQ",
        type: "full",
        isRecent: false,
      },
      {
        title: "Zoom Video Meeting",
        description:
          "Edited recurring client Zoom meetings for better viewer engagement and clarity.",
        image: "https://cdn.jsdelivr.net/gh/parves4u/images/Thumbnail55.jpg",
        youtubeId: "6vSmroL2vY4",
        type: "full",
        isRecent: false,
      },
    ],
  
    "Audio Editing": [
      {
        title: "Audio Editing",
        description:
          "Quickly eliminate unwanted noise and enhance voice clarity with smart audio tools.",
        image: "https://cdn.jsdelivr.net/gh/parves4u/images/Thumbnail56.jpg",
        youtubeId: "82T-hsVntQ4",
        type: "full",
        isRecent: true,
      },
      {
        title: "Crystal Clear Voice: Remove Background Noise in Seconds",
        description:
          "Turn raw voice clips into pro-level sound using simple editing techniques.",
        image: "https://cdn.jsdelivr.net/gh/parves4u/images/Audio Eting1.jpg",
        youtubeId: "Xbg3MwMg6lk",
        type: "full",
        isRecent: false,
      },
      {
        title: "Studio-Quality Audio from Home Recordings",
        description:
          "Noise reduction and enhancement for voiceover recordings.",
        image: "https://cdn.jsdelivr.net/gh/parves4u/images/Audio Eting2.jpg",
        youtubeId: "zBDr63YZWgk",
        type: "full",
        isRecent: false,
      },
      {
        title: "Voice Cleaning Basics: Fast and Easy Editing Guide",
        description:
          "Learn the core steps to clean up your voice recordings in under 5 minutes.",
        image: "https://cdn.jsdelivr.net/gh/parves4u/images/Audio Eting3.jpg",
        youtubeId: "lAn9wThCjuw",
        type: "full",
        isRecent: false,
      },
      {
        title: "Voice Editing Workflow: From Raw to Ready",
        description:
          "Step-by-step process to edit, clean, and finalize a voice recording.",
        image: "https://cdn.jsdelivr.net/gh/parves4u/images/Audio Eting4.jpg",
        youtubeId: "sCbl7I78YuI",
        type: "full",
        isRecent: false,
      },
      {
        title: "Remove Hiss & Hum with One Click",
        description:
          "Use noise reduction tools to kill unwanted static, hiss, or electrical hum.",
        image: "https://cdn.jsdelivr.net/gh/parves4u/images/Audio Eting5.jpg",
        youtubeId: "349ofHgSQps",
        type: "full",
        isRecent: false,
      },
    ],
  
    "2D/3D Animation": [
      {
        title: "Highlights the agency’s brand while evoking wanderlust.",
        description:
          "Your vision, my edits let’s create travel magic together!🎥✨",
        image: "https://cdn.jsdelivr.net/gh/parves4u/images/Thumnail01.jpg",
        youtubeId: "E5YXZDhCvZ0",
        type: "full",
        isRecent: true,
      },
      {
        title: "High Quality Corporate Video Editing Services",
        description:
          "Expert corporate video editing that elevates your brand and delivers professional impact.",
        image: "https://cdn.jsdelivr.net/gh/parves4u/images/Thumnail02.jpg",
        youtubeId: "YadXAX-oGnQ",
        type: "full",
        isRecent: false,
      },
      {
        title: "Stunning Website Promo Video Creation",
        description:
          "Eye-catching website promos to boost traffic, engagement, and conversions.",
        image: "https://cdn.jsdelivr.net/gh/parves4u/images/Thumnail03.jpg",
        youtubeId: "7POgYCldK3w",
        type: "full",
        isRecent: false,
      },
      {
        title: "I've create for beveckchiwawa Promo Video",
        description:
          "Quick brand intro video for Beveck Chiwawa website.",
        image: "https://cdn.jsdelivr.net/gh/parves4u/images/Thumnail04.jpg",
        youtubeId: "pbZp_FxxBzg",
        type: "full",
        isRecent: false,
      },
      {
        title: "Mercy Construction Corporate Promo Showcase",
        description:
          "A sleek corporate promotional video crafted for Mercy Construction. Contact me for similar projects!",
        image: "https://cdn.jsdelivr.net/gh/parves4u/images/Thumnail05.jpg",
        youtubeId: "vVTOOuqAXkM",
        type: "full",
        isRecent: false,
      },
      {
        title: "Health Products Promo Video",
        description:
          "Created a compelling promo video to showcase health product benefits and drive online sales.",
        image: "https://cdn.jsdelivr.net/gh/parves4u/images/Thumbnail2.jpg",
        youtubeId: "2I2SNPBYfSQ",
        type: "full",
        isRecent: false,
      },
      {
        title: "Promotional Video",
        description:
          "Developed a dynamic and visually engaging promotional video tailored to the client's brand.",
        image: "https://cdn.jsdelivr.net/gh/parves4u/images/Thumbnail8.jpg",
        youtubeId: "nvsICHUgERo",
        type: "full",
        isRecent: false,
      },
      {
        title: "Educational Website Promo Video",
        description:
          "Edited a promotional video for an e-learning platform highlighting courses and user experience.",
        image: "https://cdn.jsdelivr.net/gh/parves4u/images/Thumbnail3.jpg",
        youtubeId: "pSJXWukyLTw",
        type: "full",
        isRecent: false,
      },
      {
        title: "Website Promo Video",
        description:
          "Edited a modern, informative video to introduce a company website and boost traffic and conversions.",
        image: "https://cdn.jsdelivr.net/gh/parves4u/images/Thumbnail60.jpg",
        youtubeId: "9UOk6d3a2gc",
        type: "full",
        isRecent: false,
      },
      {
        title: "Insurance Agency Promo Video",
        description:
          "Edited a polished promo video explaining services and trust-building elements for an insurance firm.",
        image: "https://cdn.jsdelivr.net/gh/parves4u/images/Thumbnail49.jpg",
        youtubeId: "CVDWVVJiUsc",
        type: "full",
        isRecent: false,
      },
      {
        title: "Shop Promotion Video",
        description:
          "Created a lively video ad for a retail store featuring products, deals, and store highlights.",
        image: "https://cdn.jsdelivr.net/gh/parves4u/images/Thumbnail45.jpg",
        youtubeId: "F5nhThdCQpE",
        type: "full",
        isRecent: false,
      },
      {
        title: "Company Promo Video",
        description:
          "Delivered a compelling promo to elevate brand visibility and customer interest.",
        image: "https://cdn.jsdelivr.net/gh/parves4u/images/Thumbnail23.jpg",
        youtubeId: "PfQgURsQ4sE",
        type: "full",
        isRecent: false,
      },
      {
        title: "Promotional Video Company",
        description:
          "Edited a short-form video to promote company culture and team behind the scenes.",
        image: "https://cdn.jsdelivr.net/gh/parves4u/images/Thumbnail41.jpg",
        youtubeId: "uC2lT4KsnkU",
        type: "full",
        isRecent: false,
      },
      {
        title: "Company Promo Video",
        description:
          "Produced an industry-specific company video for digital marketing purposes.",
        image: "https://cdn.jsdelivr.net/gh/parves4u/images/Thumbnail6.jpg",
        youtubeId: "zPq4UJ4ebjs",
        type: "full",
        isRecent: false,
      },
      {
        title: "Make a Pet Shop Promo Video",
        description:
          "Created an adorable and effective promo video for a pet-related product or service.",
        image: "https://cdn.jsdelivr.net/gh/parves4u/images/Thumbnail61.jpg",
        youtubeId: "fWFH3aOdCKo",
        type: "full",
        isRecent: false,
      },
      {
        title: "Online Store Promo Video",
        description:
          "Edited a visual storytelling video for an e-commerce platform's campaign.",
        image: "https://cdn.jsdelivr.net/gh/parves4u/images/Thumbnail43.jpg",
        youtubeId: "WMijJICLuIE",
        type: "full",
        isRecent: false,
      },
      {
        title: "Mouth Guard Promo Video",
        description:
          "Developed a crisp video showcasing mouth guard features for sports and dental care.",
        image: "https://cdn.jsdelivr.net/gh/parves4u/images/Thumbnail29.jpg",
        youtubeId: "bOG0CjXWhko",
        type: "full",
        isRecent: false,
      },
      {
        title: "Face Cream Promo Video",
        description:
          "Produced a visually appealing short ad focusing on skincare results and benefits.",
        image: "https://cdn.jsdelivr.net/gh/parves4u/images/Thumbnail35.jpg",
        youtubeId: "VwMsOK7OfvA",
        type: "full",
        isRecent: false,
      },
      {
        title: "Gym Product Promo Video",
        description:
          "Crafted a promo video for fitness gear with action shots and feature highlights.",
        image: "https://cdn.jsdelivr.net/gh/parves4u/images/Thumbnail1.jpg",
        youtubeId: "wFVEMs__Q7E",
        type: "full",
        isRecent: false,
      },
      {
        title: "Company Promo Video",
        description:
          "Tailored a corporate promo showcasing business strengths and brand identity.",
        image: "https://cdn.jsdelivr.net/gh/parves4u/images/Thumbnail4.jpg",
        youtubeId: "Gk4l_0M_d7Q",
        type: "full",
        isRecent: false,
      },
      {
        title: "School Bus Promo Video",
        description:
          "Edited a school transport service video with safety highlights and parent testimonials.",
        image: "https://cdn.jsdelivr.net/gh/parves4u/images/Thumbnail30.jpg",
        youtubeId: "ZK6F6P2sArU",
        type: "full",
        isRecent: false,
      },
      {
        title: "Promotional Video Company",
        description:
          "Delivered a high-energy video for a media production company seeking new clients.",
        image: "https://cdn.jsdelivr.net/gh/parves4u/images/Thumbnail14.jpg",
        youtubeId: "oDRpihICY-g",
        type: "full",
        isRecent: false,
      },
      {
        title: "Video Ads & Commercial Video Production Services",
        description:
          "Created a dynamic short video for online ads and social media promotions.",
        image: "https://cdn.jsdelivr.net/gh/parves4u/images/Thumbnail38.jpg",
        youtubeId: "nnHZeF1zFJQ",
        type: "full",
        isRecent: false,
      },
      {
        title: "I will create promotional video ads",
        description:
          "Edited a branded company promo for professional use on website and LinkedIn.",
        image: "https://cdn.jsdelivr.net/gh/parves4u/images/Thumbnail46.jpg",
        youtubeId: "lhX36T9CEEY",
        type: "full",
        isRecent: false,
      },
      {
        title: "Home Office Promo Video",
        description:
          "Produced a cozy and professional video promoting home office products.",
        image: "https://cdn.jsdelivr.net/gh/parves4u/images/Thumbnail32.jpg",
        youtubeId: "_dLy05uG0Dc",
        type: "full",
        isRecent: false,
      },
      {
        title: "Service Center Promo Video",
        description:
          "Edited a walk-through and testimonial-based video for a tech service center.",
        image: "https://cdn.jsdelivr.net/gh/parves4u/images/Thumbnail25.jpg",
        youtubeId: "_YkQwHsFd2Xo",
        type: "full",
        isRecent: false,
      },
      {
        title: "Headphone Promo Video",
        description:
          "Developed a modern tech product ad focusing on sound quality and style.",
        image: "https://cdn.jsdelivr.net/gh/parves4u/images/Thumbnail26.jpg",
        youtubeId: "_aIfIg0FoNo",
        type: "full",
        isRecent: false,
      },
      {
        title: "Printing Company Promo Video",
        description:
          "Showcased a print shop’s services in a sleek video for B2B and retail customers.",
        image: "https://cdn.jsdelivr.net/gh/parves4u/images/Thumbnail24.jpg",
        youtubeId: "hRRi_uEoLHk",
        type: "full",
        isRecent: false,
      },
    ],
  
    "Digital Marketing": [
      {
          id: 1,
          title: "ClickBoost Marketing",
          description: "Grow your online reach with targeted ads and smart strategy.",
          image: "https://cdn.jsdelivr.net/gh/parves4u/images/Digital-Marketing01.jpg",
          width: 1920,
          height: 1154,
          isRecent: true,
        },
        {
          id: 2,
          title: "AdWise Digital",
          description: "Affordable digital marketing for small businesses.",
          image: "https://cdn.jsdelivr.net/gh/parves4u/images/Digital-Marketing02.jpg",
          width: 1920,
          height: 1154,
          isRecent: false,
        },
        {
          id: 3,
          title: "RankRight SEO",
          description: "Simple SEO solutions to help you rank higher and get found.",
          image: "https://cdn.jsdelivr.net/gh/parves4u/images/Digital-Marketing03.jpg",
          width: 1920,
          height: 1154,
          isRecent: true,
        },
        {
          id: 1,
          title: "SmartPixel Ads",
          description: "Boost traffic with result-driven paid ad campaigns.",
          image: "https://cdn.jsdelivr.net/gh/parves4u/images/Digital-Marketing04.jpg",
          width: 1920,
          height: 1154,
          isRecent: true,
        },
        {
          id: 2,
          title: "InstaReach Marketing",
          description: "Quick-start digital strategies for startups and solopreneurs.",
          image: "https://cdn.jsdelivr.net/gh/parves4u/images/Digital-Marketing05.jpg",
          width: 1920,
          height: 1154,
          isRecent: false,
        },
        {
          id: 3,
          title: "DigitalSpark Pro",
          description: "Ignite your brand with smart, simple digital marketing.",
          image: "https://cdn.jsdelivr.net/gh/parves4u/images/Digital-Marketing06.jpg",
          width: 1920,
          height: 1154,
          isRecent: true,
        },
    ],
  
    "Web Development": [
      
      {
          id: 1,
          title: "EasyClient Manager",
          description: "A professional and branded client portal that enhances trust and keeps customers updated in real-time.",
          image: "https://cdn.jsdelivr.net/gh/parves4u/images/Web-Development-01.jpg",
          width: 1920,
          height: 1154,
          isRecent: true,
        },
        {
          id: 2,
          title: "ProductShowcase Pro",
          description: "A sleek, responsive website layout designed to highlight your product's features, benefits, and visuals.",
          image: "https://cdn.jsdelivr.net/gh/parves4u/images/Web-Development-06.jpg",
          width: 1920,
          height: 1154,
          isRecent: false,
        },
        {
          id: 3,
          title: "FeatureFocus Landing Page",
          description: "Single-product landing page with scroll-based storytelling, interactive elements, and lead generation tools.",
          image: "https://cdn.jsdelivr.net/gh/parves4u/images/Web-Development-02.jpg",
          width: 1920,
          height: 1154,
          isRecent: true,
        },
        {
          id: 1,
          title: "EcoBrand Website",
          description: "Tailored for eco-friendly or niche products, emphasizing storytelling, transparency, and user trust.",
          image: "https://cdn.jsdelivr.net/gh/parves4u/images/Web-Development-03.jpg",
          width: 1920,
          height: 1154,
          isRecent: true,
        },
        {
          id: 2,
          title: "SellSphere Platform",
          description: "Designed for scaling businesses, this site structure supports multiple products, categories, and integrated analytics.",
          image: "https://cdn.jsdelivr.net/gh/parves4u/images/Web-Development-04.jpg",
          width: 1920,
          height: 1154,
          isRecent: false,
        },
        {
          id: 3,
          title: "ServiceSphere Website",
          description: "Ideal for service-based businesses with booking systems, service overviews, and a client inquiry portal.",
          image: "https://cdn.jsdelivr.net/gh/parves4u/images/Web-Development-05.jpg",
          width: 1920,
          height: 1154,
          isRecent: true,
        },
    ],
    "Short Form": [
      {
        title: "I will be your go-to short form video editor for brands, influencers, and creators",
        description:
          "Cinematic short videos with custom captions, edits, and effects, perfect for building your brand across social platforms.",
        image: "https://cdn.jsdelivr.net/gh/parves4u/images/Thumnail-17.jpg",
        youtubeId: "yg5sHfM33ps",
        type: "short",
        isRecent: false,
      },
      {
        title: "I will be your go-to short form video editor for brands, influencers, and creators",
        description:
          "Cinematic short videos with custom captions, edits, and effects, perfect for building your brand across social platforms.",
        image: "https://cdn.jsdelivr.net/gh/parves4u/images/Shorts-Video1.jpg",
        youtubeId: "80GOCKB8Nys",
        type: "short",
        isRecent: false,
      },
      {
        title: "I will turn your footage into viral short form content for TikTok, Reels, and Shorts",
        description:
          "Creative short form video editing with powerful hooks, captions, and trends to help you go viral.",
        image: "https://cdn.jsdelivr.net/gh/parves4u/images/Shorts-Video2.jpg",
        youtubeId: "K5eYkP-qpPI",
        type: "short",
        isRecent: false,
      },
      {
        title: "Professionally edit short form videos for social media success",
        description:
          "Get polished, engaging, and high-converting short form videos tailored for TikTok, Reels, and YouTube Shorts.",
        image: "https://cdn.jsdelivr.net/gh/parves4u/images/Shorts-Video3.jpg",
        youtubeId: "xvRhy7wIfs4",
        type: "short",
        isRecent: false,
      },
      {
        title: "Craft dynamic short form videos for TikTok, Instagram Reels, and YouTube Shorts",
        description:
          "High-energy edits, smooth transitions, and custom captions designed to grab attention and grow your online presence.",
        image: "https://cdn.jsdelivr.net/gh/parves4u/images/Shorts-Video4.jpg",
        youtubeId: "oc7spQq3Gc8",
        type: "short",
        isRecent: false,
      },
      {
        title: "Create viral short form edits with captions for TikTok, Reels, and Shorts",
        description:
          "Professional short video editing designed for maximum engagement with dynamic captions, viral trends, and polished visuals.",
        image: "https://cdn.jsdelivr.net/gh/parves4u/images/Shorts-Video5.jpg",
        youtubeId: "aREhqEhIOeI",
        type: "short",
        isRecent: false,
      },
      {
        title: "Edit engaging short form content for TikTok, Reels, and YouTube Shorts",
        description:
          "Transform your fashion shoots into captivating short form reels with cinematic edits, stylish cuts, and eye-catching storytelling.",
        image: "https://cdn.jsdelivr.net/gh/parves4u/images/Shorts-Video6.jpg",
        youtubeId: "gYfmGPwLc7M",
        type: "short",
        isRecent: false,
      },
      {
        title: "I will edit your fashion videos into stunning cinematic reels and short films",
        description:
          "Transform your fashion shoots into captivating short form reels with cinematic edits, stylish cuts, and eye-catching storytelling.",
        image: "https://cdn.jsdelivr.net/gh/parves4u/images/Shorts-Video7.jpg",
        youtubeId: "9gBesmhFTog",
        type: "short",
        isRecent: false,
      },
      {
        title: "I will be your expert short form video editor for TikTok, Reels, and Shorts",
        description:
          "Delivering scroll-stopping edits with captions, transitions, and trends to grow your audience across TikTok, YouTube, and Instagram.",
        image: "https://cdn.jsdelivr.net/gh/parves4u/images/Shorts-Video8.jpg",
        youtubeId: "LtAfuz7D62k",
        type: "short",
        isRecent: false,
      },
      {
        title: "I will edit short form videos with custom captions and viral hooks",
        description:
          "Boost your content with expertly edited short videos, including captions, effects, and optimized formats for Reels, Shorts, and TikTok.",
        image: "https://cdn.jsdelivr.net/gh/parves4u/images/Shorts-Video9.jpg",
        youtubeId: "UhXEZPXavqY",
        type: "short",
        isRecent: false,
      },
      {
        title: "I will create high-impact short form videos for TikTok, Reels, and YouTube Shorts",
        description:
          "Professional short form video editing with custom captions, trendy cuts, and engaging visuals for TikTok, Instagram Reels, and YouTube Shorts.",
        image: "https://cdn.jsdelivr.net/gh/parves4u/images/Shorts-Video10.jpg",
        youtubeId: "RXq6qVPvTi4",
        type: "short",
        isRecent: false,
      },
    ]
  };

  // Navigation handlers
  const goToPrevCategory = () => {
    setCurrentCategory((prev) =>
      prev === 0 ? categories.length - 1 : prev - 1
    );
  };

  const goToNextCategory = () => {
    setCurrentCategory((prev) =>
      prev === categories.length - 1 ? 0 : prev + 1
    );
  };

  // Get current category
  const currentCategoryName = categories[currentCategory].name;
  const currentCategoryId = categories[currentCategory].id;

  // Check if current category is Video Editing
  const isVideoEditing = currentCategoryName === "Video Editing";
  const isGraphicDesign = currentCategoryName === "Graphic Design";
  const isDigitalMarketing = currentCategoryName === "Digital Marketing"
  const isWebDevelopment = currentCategoryName === "Web Development"

  // Determine content based on category
  let currentContent = [];

  if (isGraphicDesign) {
    currentContent = graphicDesignImages;
  } else {
    const currentVideos = videos[currentCategoryName] || [];
    currentContent = isVideoEditing
      ? currentVideos.filter(
          (video) => videoType === "all" || video.type === videoType
        )
      : currentVideos;
  }

  // Filter content based on recent works
  if (showRecentWorks) {
    currentContent = currentContent.filter((item) => item.isRecent);
  }

  // Determine how many items to show initially
  const initialItemsToShow = isGraphicDesign || isDigitalMarketing || isWebDevelopment ? 6 : videoType === "full" ? 4 : 6;
  const visibleContent = showAll
    ? currentContent
    : currentContent.slice(0, initialItemsToShow);

  // Handle item click
  const handleItemClick = (item) => {
    if (isGraphicDesign || isDigitalMarketing || isWebDevelopment) {
      setActiveVideo({
        ...item,
        isImage: true,
      });
    } else {
      setActiveVideo(item);
    }
    document.body.style.overflow = "hidden";
  };

  // Handle close modal
  const handleCloseModal = () => {
    setActiveVideo(null);
    document.body.style.overflow = "auto";
  };

  // Handle All Work click
  const handleAllWorkClick = () => {
    setShowRecentWorks(false);
    setShowAll(true); // Show all items
  };

  // Handle Recent Works click
  const handleRecentWorksClick = () => {
    setShowRecentWorks(true);
    setShowAll(true); // Show all recent items
  };

  // Get image aspect ratio class
  const getAspectRatioClass = (width, height) => {
    if (width === height) return "aspect-square"; // Square (1200x1200)
    if (width > height) return "aspect-video"; // Wide (1600x900)
    return "aspect-tall"; // Tall (900x1600)
  };

  return (
    <div className="container mx-auto px-4 md:px-6 lg:px-8 py-12 bg-[#101828]">
      {/* Category Navigation */}
      <div className="flex items-center justify-center gap-8 mb-12">
        <button
          onClick={goToPrevCategory}
          className="p-2 rounded-full bg-[#00DF8E] text-white hover:bg-opacity-80 transition"
        >
          <ChevronLeft size={24} />
        </button>

        <h2
          id={currentCategoryId}
          // className="text-3xl md:text-4xl font-bold text-center text-white"
          className="md:w-[390px] md:h-[46px] md:border border-b-0 border-[#2d2d2d] rounded-tl-xl rounded-tr-xl flex justify-center items-center"
        >
          <span className=" text-caribbean-green font-bold boldText text-[32px] md:eading-[28px] capitalize">
                    {currentCategoryName}
                  </span>
        </h2>

        <button
          onClick={goToNextCategory}
          className="p-2 rounded-full bg-[#00DF8E] text-white hover:bg-opacity-80 transition"
        >
          <ChevronRight size={24} />
        </button>
      </div>

      {/* Controls */}
      <div className="flex justify-between items-center md:flex-row flex-col gap-5 mt-5">
        {isVideoEditing && (
          <div className="flex justify-center items-center gap-4">
            <button
              className={`border-2 text-[16px] md:text-[18px] w-[125px] h-[40px] font-[600] rounded-[30px] flex justify-center items-center ${
                videoType === "full"
                  ? "text-white border-[#00DF8E] bg-[#00DF8E] "
                  : "text-white border-white "
              } cursor-pointer`}
              onClick={() => setVideoType("full")}
            >
              Full-Form
            </button>
            <button
              className={`border-2 text-[16px] md:text-[18px] w-[125px] h-[40px] font-[600] rounded-[30px] flex justify-center items-center ${
                videoType === "short"
                  ? "text-white border-[#00DF8E] bg-[#00DF8E]"
                  : "text-white border-white"
              } cursor-pointer`}
              onClick={() => setVideoType("short")}
            >
              Short-Form
            </button>
          </div>
        )}

        <div
          className={`flex justify-center items-center gap-4 ${
            !isVideoEditing ? "w-full" : ""
          }`}
        >
          <button
            className="text-white text-[16px] border-2 font-[600] w-[125px] h-[40px] rounded-[30px] flex justify-center items-center border-[#00DF8E]"
            onClick={handleAllWorkClick}
          >
            All Work
          </button>
          <button
            className="text-white border-2 text-[16px] md:text-[18px] w-[165px] h-[40px] font-[600] rounded-[30px] flex justify-center items-center border-[#00DF8E]"
            onClick={handleRecentWorksClick}
          >
            Recent Works
          </button>
        </div>
      </div>

      {/* Content Grid */}
      <div
        className={`grid grid-cols-1 ${
          isGraphicDesign || videoType === "short" || isDigitalMarketing || isWebDevelopment  
            ? "md:grid-cols-2 lg:grid-cols-3"
            : "lg:grid-cols-2"
        } lg:gap-4 md:grid-cols-1 gap-4 mt-8`}
      >
        {visibleContent.map((item, index) => (
          <div key={index} className="flex justify-center">
            <div
              className={`${
                isGraphicDesign || isDigitalMarketing || isWebDevelopment
                  ? "bg-transparent shadow-none" // Remove background and shadow for Graphic Design
                  : "bg-[#0F2229] shadow-lg" // Keep background and shadow for other categories
              } rounded-lg overflow-hidden w-full ${
                isGraphicDesign || isDigitalMarketing || isWebDevelopment
                  ? "max-w-sm"
                  : item.type === "short"
                  ? "w-64 md:w-72"
                  : "max-w-xl"
              }`}
            >
              <div className="relative group">
                <div
                  className={
                    isGraphicDesign || isDigitalMarketing || isWebDevelopment
                      ? getAspectRatioClass(item.width, item.height)
                      : item.type === "short"
                      ? "aspect-[9/16]"
                      : "aspect-video"
                  }
                >
                  <img
                    loading="lazy"
                    className="w-full h-full object-cover"
                    src={item.image}
                    alt={item.title}
                  />
                </div>
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                  <button
                    onClick={() => handleItemClick(item)}
                    className="flex items-center justify-center bg-[#00DF8E] rounded-full p-3 hover:bg-opacity-80 transition transform scale-90 group-hover:scale-100 opacity-90 group-hover:opacity-100"
                    aria-label={isGraphicDesign || isDigitalMarketing || isWebDevelopment ? "View design" : "Play video"}
                  >
                    <Play size={24} className="text-white" />
                  </button>
                </div>
              </div>
              {/* Hide title and description for short-form videos */}
              {(!isVideoEditing || item.type !== "short") && (
                <div className="p-4">
                  <h3 className="text-white font-bold text-lg md:text-xl mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-300 text-sm md:text-base mb-3">
                    {item.description}
                  </p>
                  <button
                    onClick={() => handleItemClick(item)}
                    className="text-[#00DF8E] font-semibold hover:text-opacity-80 inline-flex items-center"
                  >
                    {isGraphicDesign || isDigitalMarketing || isWebDevelopment ? "View Design" : "Watch Now"}{" "}
                    <ChevronRight size={16} className="ml-1" />
                  </button>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Empty State */}
      {currentContent.length === 0 && (
        <div className="flex flex-col items-center justify-center py-16">
          <p className="text-white text-lg mb-4">
            No content available for {currentCategoryName}
          </p>
          {isVideoEditing && (
            <button
              className="px-4 py-2 bg-[#00DF8E] text-white rounded-md hover:bg-opacity-80 transition"
              onClick={() =>
                setVideoType(videoType === "full" ? "short" : "full")
              }
            >
              Show {videoType === "full" ? "Short" : "Full"}-Form Videos
            </button>
          )}
        </div>
      )}

      {/* View More / Show Less Button */}
      {currentContent.length > initialItemsToShow && (
        <div className="flex justify-center items-center mt-12">
          <button
            className="px-6 py-3 rounded-full text-white bg-transparent border-2 border-[#00DF8E] hover:bg-[#00DF8E] hover:bg-opacity-10 transition duration-300 font-medium"
            onClick={() => setShowAll(!showAll)}
          >
            {showAll ? "Show Less" : "View More"}
          </button>
        </div>
      )}

      {/* Modal */}
      {activeVideo && (
        <div className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4">
          <div
            className={`relative bg-[#0F2229] rounded-lg shadow-lg ${
              activeVideo.isImage
                ? "max-w-3xl w-full"
                : activeVideo.type === "short"
                ? "w-[350px] h-[600px]"
                : "max-w-4xl w-full"
            } mx-4`}
          >
            <button
              onClick={handleCloseModal}
              className="absolute -top-10 right-0 p-2 text-white hover:text-gray-300 transition"
              aria-label="Close"
            >
              <X size={24} />
            </button>

            {activeVideo.isImage ? (
              <div className="overflow-hidden rounded-lg">
                <img
                  src={activeVideo.image}
                  alt={activeVideo.title}
                  className="w-full h-auto"
                />
                <div className="p-4">
                  <h3 className="text-white font-bold text-xl">
                    {activeVideo.title}
                  </h3>
                  <p className="text-gray-300 mt-2">
                    {activeVideo.description}
                  </p>
                </div>
              </div>
            ) : (
              <>
                <div
                  className={`relative ${
                    activeVideo.type === "short" ? "h-full" : "pb-[56.25%] h-0"
                  } overflow-hidden rounded-lg`}
                >
                  <iframe
                    className="absolute top-0 left-0 w-full h-full"
                    src={`https://www.youtube.com/embed/${activeVideo.youtubeId}?autoplay=1`}
                    title={activeVideo.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
                <div className="p-4">
                  <h3 className="text-white font-bold text-xl">
                    {activeVideo.title}
                  </h3>
                  <p className="text-gray-300 mt-2">
                    {activeVideo.description}
                  </p>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default ServicesSection;
