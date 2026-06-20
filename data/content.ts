import {
  Palette, Image, Video,
  Award, GraduationCap,
  Building2, Car, FileCheck, Coffee, Truck, Armchair, Store, Sailboat, Heart
} from "lucide-react";

export const navLinks = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export const splitHero = {
  dividerText: "WHERE CREATIVITY MEETS AI-DRIVEN DEVELOPMENT",
  left: {
    label: "WEB DEVELOPMENT",
    headline: "Building Smart Digital Experiences",
    subtitle: "AI-powered websites, modern UI systems, and performance-focused builds.",
    services: [
      "Frontend Systems",
      "AI-Assisted Development",
      "Responsive & Performance Optimization",
      "Landing Pages & Funnels",
      "Portfolio & Business Websites",
    ],
    cta: "View Web Projects",
    ctaHref: "#work",
  },
  right: {
    label: "GRAPHIC DESIGN",
    headline: "Crafting Visual Stories That Sell",
    subtitle: "Brand identity, AI-enhanced visuals, and high-impact marketing creatives.",
    services: [
      "Brand Identity",
      "Social Media Creatives",
      "AI Image Generation",
      "Product & eCommerce Visuals",
      "Print & Digital Design",
    ],
    cta: "Explore Designs",
    ctaHref: "#work",
  },
};

export const about = {
  studioName: "Raju Sheikh",
  studioTagline: "Self-taught creative developer and brand designer. I help real businesses look, feel, and connect — through branding, digital experiences, and visuals that actually mean something.",
  bio: `No design school. No CS degree. Just years of showing up, making things, and learning the hard way — through real clients, real deadlines, and real businesses.\n\nMy work has spanned wedding car booking platforms (Valley Wedding Cars), cafe brand identities (Tree of Life Cafe), AI-powered creative tools (JugaadVision AI), and complete visual systems for businesses across hospitality, exports, and wellness. Every project taught me something about how design shapes perception — and how technology amplifies it.\n\nI don't separate design from development. Brand identity, web dev, motion, photography, AI — I work across all of them because real projects demand more than one discipline. I still shoot product photos, write my own copy, and train custom AI models. Not because I have to. Because I genuinely love every part of the process.`,
  stats: [
    { value: "8+", label: "Active Brands" },
    { value: "6+", label: "Years Experience" },
    { value: "200+", label: "Projects Delivered" },
    { value: "AI", label: "Powered Workflows" },
  ],
  philosophy: `Design should feel human — not manufactured. The best brands don't just look good. They feel like someone cared about every detail. I bring that same care whether I'm choosing a typeface, writing a line of code, or training an AI model.`,
  pillars: [
    { title: "Self-Taught Instinct", description: "No formal training means I don't follow playbooks. I combine creative instinct with technical curiosity to solve problems differently." },
    { title: "Full-Spectrum Maker", description: "Brand identity, web dev, photography, motion, AI — I work across mediums because real projects need more than one discipline." },
    { title: "Built for Real Businesses", description: "Every project I've done has been for an actual business with actual customers. I don't design for awards. I design for what works." },
  ],
};

export const experience = [
  {
    company: "Ms Cottage (Parent Company)",
    role: "Creative Designer & Web Developer",
    period: "Mar 2025 — Present",
    location: "India",
    highlights: [
      "Designing and managing visual content across multiple brands including Valley Wedding Cars, Valley Visa Services, Tree of Life Cafe, Export of India, Furniture Hub, Asian Bazaar, Houseboat Holidays Kashmir, and Bliss of Wellness",
      "Creating branding assets, social media creatives, and marketing materials tailored to different industries",
      "Designing and developing website layouts with a focus on user experience and modern UI trends",
      "Producing e-commerce and promotional visuals to improve engagement and conversions",
      "Utilizing AI tools such as MidJourney and Stable Diffusion for innovative visual content creation",
      "Maintaining brand consistency across multiple brand identities",
    ],
  },
  {
    company: "Mahabir Industries",
    role: "Graphic Designer",
    period: "Aug 2023 — Mar 2025",
    location: "India",
    highlights: [
      "Conducted professional product photoshoots and edited images for e-commerce platforms like Amazon and Shopify",
      "Designed banners and promotional creatives for social media and marketing campaigns",
      "Managed and updated product catalogs ensuring visual consistency and accuracy",
    ],
  },
  {
    company: "Goel International",
    role: "Graphic Designer",
    period: "Mar 2021 — Jun 2023",
    location: "India",
    highlights: [
      "Edited and optimized product images for e-commerce platforms",
      "Designed engaging marketing creatives and social media graphics",
      "Managed inventory data and supported digital operations",
    ],
  },
  {
    company: "Elan Professional Appliances Pvt. Ltd.",
    role: "Graphic Designer",
    period: "Apr 2017 — Mar 2020",
    location: "India",
    highlights: [
      "Started as an intern, promoted to Graphic Designer within 18 months",
      "Designed banners, catalogs, and website graphics for a professional appliances brand",
      "Managed website content and digital asset organization",
      "Created presentations and marketing collateral for internal and external use"
    ],
  },
];

export const brands = [
  {
    name: "Ms Cottage",
    description: "Parent company — managing creative direction across all brands",
    icon: Building2,
    color: "from-emerald-500/15 to-teal-500/15",
    accent: "#10b981",
    links: [{ label: "Shopify Store", url: "https://mahabir.co.in/" }, { label: "Instagram", url: "https://www.instagram.com/mahabir.industries" }],
  },
  {
    name: "Valley Wedding Cars",
    description: "Premium wedding car rental service — fully built with dashboard, backend, and real-time sync",
    icon: Car,
    color: "from-rose-500/15 to-pink-500/15",
    accent: "#f43f5e",
    links: [{ label: "Live Website", url: "https://valleyweddingcars.vercel.app/" }, { label: "Booking Form", url: "https://vwcform.netlify.app/" }],
  },
  {
    name: "Valley Visa Services",
    description: "Visa consultancy — expert guidance for international travel and immigration",
    icon: FileCheck,
    color: "from-blue-500/15 to-indigo-500/15",
    accent: "#3b82f6",
    links: [],
  },
  {
    name: "Tree of Life Cafe",
    description: "A warm, inviting cafe experience with curated ambiance and menu",
    icon: Coffee,
    color: "from-amber-500/15 to-orange-500/15",
    accent: "#f59e0b",
    links: [{ label: "Instagram", url: "https://www.instagram.com/treeoflife.cafe" }, { label: "Form App", url: "http://tolform.vercel.app/" }],
  },
  {
    name: "Export of India",
    description: "Connecting Indian products to global markets — trade and logistics",
    icon: Truck,
    color: "from-cyan-500/15 to-sky-500/15",
    accent: "#06b6d4",
    links: [{ label: "Instagram", url: "https://www.instagram.com/exportofindia" }],
  },
  {
    name: "Furniture Hub",
    description: "Quality furniture and home furnishing — style meets comfort",
    icon: Armchair,
    color: "from-yellow-500/15 to-amber-500/15",
    accent: "#eab308",
    links: [{ label: "Instagram", url: "https://www.instagram.com/furniturehub12" }],
  },
  {
    name: "Asian Bazaar",
    description: "Diverse marketplace featuring curated products from across Asia",
    icon: Store,
    color: "from-violet-500/15 to-purple-500/15",
    accent: "#8b5cf6",
    links: [{ label: "Instagram", url: "https://www.instagram.com/asian.bazaar" }],
  },
  {
    name: "Houseboat Holidays Kashmir",
    description: "Authentic Kashmiri houseboat stays on the iconic Dal Lake",
    icon: Sailboat,
    color: "from-teal-500/15 to-emerald-500/15",
    accent: "#14b8a6",
    links: [{ label: "Instagram", url: "https://www.instagram.com/houseboat_holidays_kashmir/" }],
  },
  {
    name: "Bliss of Wellness",
    description: "Holistic wellness and health-focused brand — mind, body, and soul",
    icon: Heart,
    color: "from-pink-500/15 to-red-500/15",
    accent: "#ec4899",
    links: [],
  },
];

export interface ScreenshotItem {
  src: string;
  title: string;
  description: string;
}

export interface CaseStudy {
  id: string;
  title: string;
  category: string;
  subtitle: string;
  image?: string;
  heroColor: string;
  accentColor: string;
  gradientFrom: string;
  gradientTo: string;
  coverGradient: string;
  previewLabel: string;
  story: string;
  problem: string;
  solution: string;
  process: string[];
  finalVisuals: string[];
  technologies: string[];
  impact: { metric: string; label: string; }[];
  liveLink?: string;
  year: string;
  role: string;
  duration: string;
  overview?: string;
  challenge?: string;
  solution_points?: string[];
  keyFeatures?: string[];
  techStack?: { design: string[]; development: string[] };
  screenshots?: ScreenshotItem[];
  results?: string[];
}

export const caseStudies: CaseStudy[] = [
  {
    id: "valley-wedding-cars",
    title: "Valley Wedding Cars",
    category: "UI/UX • Frontend",
    subtitle: "Premium Wedding Car Booking & Fleet Management Platform",
    heroColor: "from-rose-500/20 to-pink-500/20",
    accentColor: "#f43f5e",
    gradientFrom: "from-rose-500",
    gradientTo: "to-pink-500",
    coverGradient: "from-rose-500/10 via-pink-500/5 to-transparent",
    previewLabel: "Live Platform",
    story: "",
    problem: "",
    solution: "",
    process: [],
    finalVisuals: [],
    technologies: [],
    impact: [],
    liveLink: "https://valleyweddingcars.vercel.app/",
    year: "2025",
    role: "UI/UX Designer • Frontend Developer",
    duration: "3 Months",
    overview: "Designed and developed a luxury wedding car booking platform for Kashmir featuring a premium customer experience and a complete admin dashboard to manage bookings, vehicles, packages, customer inquiries, and quotations.",
    challenge: "The client needed a premium online presence with a simple system to manage fleet availability, bookings, pricing, and customer inquiries from one dashboard.",
    solution_points: [
      "Designed a luxury black & gold brand identity",
      "Built a responsive booking website",
      "Created a complete admin dashboard",
      "Developed booking, fleet, calendar, and quotation management",
      "Streamlined customer inquiry workflow"
    ],
    keyFeatures: [
      "Luxury Responsive Website",
      "Fleet Management",
      "Booking Management",
      "Calendar Scheduling",
      "Package Management",
      "Estimate Generator",
      "Customer Message Center",
      "WhatsApp & Google Maps Integration"
    ],
    techStack: {
      design: ["Figma", "Photoshop", "Illustrator"],
      development: ["React", "Next.js", "Tailwind CSS", "Firebase"]
    },
    screenshots: [
      { src: "/images/valley-wedding-cars/screenshot-01.png", title: "Homepage", description: "Premium landing page designed to create a luxury first impression and encourage bookings." },
      { src: "/images/valley-wedding-cars/screenshot-02.png", title: "Fleet Page", description: "Luxury vehicle catalog with categories, pricing, and quick booking options." },
      { src: "/images/valley-wedding-cars/screenshot-03.png", title: "About Us", description: "Brand story and trust-building page showcasing the company's identity." },
      { src: "/images/valley-wedding-cars/screenshot-04.png", title: "Contact Page", description: "Inquiry form with WhatsApp integration, Google Maps, and contact information." },
      { src: "/images/valley-wedding-cars/screenshot-05.png", title: "Admin Login", description: "Secure authentication for administrators." },
      { src: "/images/valley-wedding-cars/screenshot-06.png", title: "Messages Management", description: "Manage customer inquiries and leads from a centralized dashboard." },
      { src: "/images/valley-wedding-cars/screenshot-07.png", title: "Package Management", description: "Create and manage wedding service packages with pricing and activation controls." },
      { src: "/images/valley-wedding-cars/screenshot-08.png", title: "Vehicle Management", description: "Manage fleet, pricing, discounts, vehicle status, and display order." },
      { src: "/images/valley-wedding-cars/screenshot-09.png", title: "Booking Calendar", description: "Visual scheduling system to prevent conflicts and manage vehicle availability." },
      { src: "/images/valley-wedding-cars/screenshot-10.png", title: "Bookings Dashboard", description: "Track bookings by status, customer details, payment, and service type." },
      { src: "/images/valley-wedding-cars/screenshot-11.png", title: "Estimate System", description: "Generate, manage, and send professional customer quotations." }
    ],
    results: [
      "Complete business management platform",
      "Premium luxury user experience",
      "Fully responsive design",
      "Centralized admin workflow",
      "Scalable architecture for future growth"
    ]
  },
  {
    id: "tol-feedback",
    title: "Tree of Life Feedback System",
    category: "SaaS • Full-Stack",
    subtitle: "Customer Feedback & Analytics Platform",
    heroColor: "from-amber-500/20 to-orange-500/20",
    accentColor: "#f59e0b",
    gradientFrom: "from-amber-500",
    gradientTo: "to-orange-500",
    coverGradient: "from-amber-500/10 via-orange-500/5 to-transparent",
    previewLabel: "Live App",
    story: "",
    problem: "",
    solution: "",
    process: [],
    finalVisuals: [],
    technologies: [],
    impact: [],
    liveLink: "https://tolfeedback.vercel.app/",
    year: "2025",
    role: "UI/UX Designer • Full-Stack Developer",
    duration: "2 Months",
    overview: "Designed and developed a QR-based customer feedback platform for Tree of Life Cafe that replaces paper feedback forms with a digital experience. The system allows customers to submit feedback in seconds while giving management access to real-time analytics, reports, and customer insights through an intuitive dashboard.",
    challenge: "The cafe needed a simple way to collect, organize, and analyze customer feedback instead of relying on manual methods. Management also required actionable insights to improve customer satisfaction.",
    solution_points: [
      "Designed a mobile-first feedback experience",
      "Built a real-time analytics dashboard",
      "Created advanced search and filtering",
      "Developed business reporting with CSV export",
      "Designed an intuitive admin panel for daily operations"
    ],
    keyFeatures: [
      "QR Code Feedback Form",
      "Real-Time Analytics Dashboard",
      "Customer Feedback Management",
      "Search & Advanced Filters",
      "Net Promoter Score (NPS)",
      "CSV Export",
      "Dashboard Settings & Preferences",
      "Responsive Design"
    ],
    techStack: {
      design: ["Figma", "Photoshop"],
      development: ["React", "Next.js", "Tailwind CSS", "Supabase"]
    },
    screenshots: [
      { src: "/images/tol-feedback/feedback-form.png", title: "Customer Feedback Form", description: "Mobile-first feedback form with experience ratings, recommendations, issue reporting, and customer comments." },
      { src: "/images/tol-feedback/overview.png", title: "Dashboard Overview", description: "Business dashboard displaying customer satisfaction, recommendations, Net Promoter Score, and reported issues." },
      { src: "/images/tol-feedback/analytics.png", title: "Analytics Dashboard", description: "Visual analytics showing feedback trends, submission activity, peak hours, and engagement insights." },
      { src: "/images/tol-feedback/feedbacks.png", title: "Feedback Management", description: "Search, filter, and manage customer feedback with ratings, features, issues, and recommendations." },
      { src: "/images/tol-feedback/settings.png", title: "Dashboard Settings", description: "Customizable preferences including display options, auto-refresh, exports, and security settings." }
    ],
    results: [
      "Digitized customer feedback collection",
      "Simplified feedback management",
      "Real-time business insights",
      "Actionable customer analytics",
      "Mobile-friendly customer experience",
      "Scalable admin dashboard"
    ]
  },
  {
    id: "tree-of-life-cafe",
    title: "Tree of Life Cafe",
    category: "Brand Identity & Web",
    subtitle: "A brand identity that tastes as warm as the chai — logo, menu, signage, and digital presence for a cafe that feels like home",
    heroColor: "from-amber-500/20 to-orange-500/20",
    accentColor: "#f59e0b",
    gradientFrom: "from-amber-500",
    gradientTo: "to-orange-500",
    coverGradient: "from-amber-500/10 via-orange-500/5 to-transparent",
    previewLabel: "Brand Identity",
    story: "A nature-inspired cafe in Kashmir wanted to be more than a place to eat — they wanted an experience. A space where people slow down, connect, and feel at home. I translated that warmth into a complete visual identity: logo, menu layout, signage, Instagram presence, and a lightweight booking app. Every touchpoint designed to feel as good as the space itself.",
    problem: "The cafe had no brand identity — no logo, no consistent visual language, no web presence beyond a basic Instagram page. The menu and signage were ad-hoc, lacking cohesion. They needed a complete system across print, digital, and physical spaces that captured their warm, earthy atmosphere.",
    solution: "Created a holistic brand rooted in earth tones, organic shapes, and handcrafted aesthetics. The logo combines a tree motif with warm amber gradients. The system extends across a 12-page illustrated menu, social templates, signage, and a digital booking app — all speaking the same visual language.",
    process: [
      "Immersed in the cafe space to absorb ambiance, customer vibe, and owner vision",
      "Developed mood boards around earth tones, organic textures, handcrafted typography",
      "Designed the logo — stylized tree crown with warm amber-citrine gradients",
      "Laid out the full menu with illustrated food sections and tiered pricing",
      "Built Instagram templates for stories, posts, reels, and highlight covers",
      "Created the digital booking app with cafe ambiance imagery",
      "Designed signage for entrance, interior wayfinding, and print collateral"
    ],
    finalVisuals: [
      "Custom logotype with tree-of-life symbolism in warm amber gradients",
      "12-page illustrated menu layout with food photography sections",
      "Full Instagram brand kit — story templates, post layouts, covers",
      "Minimalist booking app with atmospheric cafe imagery",
      "Print collateral — business cards, coasters, table tents, signage",
      "Palette: warm ambers, terracotta, cream, forest green accents"
    ],
    technologies: ["Adobe Photoshop", "MidJourney", "Figma", "React", "Tailwind CSS", "Netlify"],
    impact: [
      { metric: "3x", label: "Social Engagement" },
      { metric: "100%", label: "Brand Consistency" },
      { metric: "New", label: "Digital Presence" },
      { metric: "Unified", label: "Customer Experience" }
    ],
    liveLink: "http://tolform.vercel.app/",
    year: "2025",
    role: "Brand Designer & Web Developer",
    duration: "2 Months"
  },
  {
    id: "jugaadvision-ai",
    title: "JugaadVision AI",
    category: "AI SaaS Platform",
    subtitle: "AI-powered creative toolkit for makers who refuse to be slowed down by repetitive visual tasks",
    heroColor: "from-violet-500/20 to-fuchsia-500/20",
    accentColor: "#a855f7",
    gradientFrom: "from-violet-500",
    gradientTo: "to-fuchsia-500",
    coverGradient: "from-violet-500/10 via-fuchsia-500/5 to-transparent",
    previewLabel: "Live SaaS App",
    story: "Born from a personal frustration: creative professionals spend hours on repetitive visual tasks that should be automated. I built an AI-powered platform that handles image generation, editing, and enhancement in one seamless workflow. What started as a personal experiment evolved into a full SaaS platform with a growing user base.",
    problem: "Small businesses and content creators couldn't access affordable AI visual tools. Enterprise solutions were too expensive. Open-source tools required technical expertise. The market lacked a user-friendly platform that combined generation, editing, and enhancement in one place — no onboarding friction, no learning curve.",
    solution: "Designed and built an AI SaaS platform with a modern, intuitive dashboard. Multiple AI models handle generation, style transfer, background removal, and enhancement — all behind a clean interface. Non-technical users get powerful results without touching a single parameter they don't understand.",
    process: [
      "Validated the gap through conversations with small business owners and creators",
      "Architected the platform — AI model orchestration, user dashboard, processing pipeline",
      "Built the frontend with React and TypeScript, prioritizing intuitive UX",
      "Integrated multiple AI models for generation, editing, and enhancement workflows",
      "Designed project management with history, folders, and batch processing",
      "Implemented real-time preview and processing status for every action",
      "Deployed with performance optimizations for AI-heavy workloads"
    ],
    finalVisuals: [
      "Dark-themed dashboard with gradient accent highlights and glass morphism",
      "AI generation interface with prompt input, style selection, and live preview",
      "Editing workspace with before/after comparison and adjustment controls",
      "Project management with folder organization and processing history",
      "Batch processing for bulk operations across multiple images",
      "Responsive design optimized for desktop and tablet workflows"
    ],
    technologies: ["React", "TypeScript", "AI Integration", "Tailwind CSS", "Framer Motion", "Vercel", "REST APIs"],
    impact: [
      { metric: "5x", label: "Faster Content Creation" },
      { metric: "Zero", label: "Technical Skills Needed" },
      { metric: "All-in-One", label: "Visual Toolkit" },
      { metric: "SaaS", label: "Business Model" }
    ],
    liveLink: "https://jugaadvision.vercel.app/",
    year: "2025",
    role: "Founder & Full-Stack Developer",
    duration: "4 Months"
  },
  {
    id: "branding-portfolio",
    title: "Multi-Brand Identity System",
    category: "Brand Identity",
    subtitle: "8 brands, 8 distinct personalities, one creative vision — strategic systems across weddings, hospitality, exports, and wellness",
    heroColor: "from-pink-500/20 to-rose-500/20",
    accentColor: "#ec4899",
    gradientFrom: "from-pink-500",
    gradientTo: "to-rose-500",
    coverGradient: "from-pink-500/10 via-rose-500/5 to-transparent",
    previewLabel: "Brand Portfolio",
    story: "Eight brands operating under one parent company. Each targeting a completely different audience — brides-to-be, international travelers, cafe regulars, B2B buyers, wellness seekers. Each needed a distinct visual language. I designed complete identity systems for all of them: logos, palettes, typography, social templates, print collateral. Each brand feels unique. All of them feel intentional.",
    problem: "Multiple businesses under one parent company had inconsistent or non-existent visual identities. No brand guidelines. Fragmented marketing materials. Weak recognition across the portfolio. Each brand targeted different audiences but there was no system to keep them distinct yet cohesive.",
    solution: "Developed a systematic approach to brand creation. For each brand: a complete identity system — logo, color, typography, patterns, application guidelines — tailored to their specific audience and industry. Flexible enough for daily social media use. Rigorous enough to maintain consistency across every touchpoint.",
    process: [
      "Audited all 8+ brands for existing assets, audience profiles, and market positioning",
      "Developed brand strategy — personality, voice, visual direction for each",
      "Created logo systems with primary, secondary, and icon-only variations",
      "Designed color palettes with primary, secondary, and accent per brand",
      "Selected typography pairs matching each brand's personality",
      "Built social media templates, business card systems, and brand guidelines",
      "Rolled out across Instagram, Facebook, print, and websites"
    ],
    finalVisuals: [
      "Valley Wedding Cars — Rose gold, deep burgundy, luxury serif",
      "Tree of Life Cafe — Warm amber, terracotta, organic shapes, handcrafted",
      "Valley Visa Services — Navy, gold, professional authority",
      "Export of India — Cyan, teal, global motifs, modern reach",
      "Furniture Hub — Warm neutrals, sage green, clean sophistication",
      "Asian Bazaar — Vibrant jewel tones, pattern-rich, multicultural energy",
      "Houseboat Holidays — Teal, emerald, water-inspired serenity",
      "Bliss of Wellness — Soft pink, lavender, organic calm"
    ],
    technologies: ["Adobe Photoshop", "Figma", "Color Theory", "Typography Design", "Brand Strategy", "Social Media"],
    impact: [
      { metric: "8+", label: "Brand Identities" },
      { metric: "100%", label: "Visual Consistency" },
      { metric: "3x", label: "Content Efficiency" },
      { metric: "Unified", label: "Parent Company Cohesion" }
    ],
    year: "2024 — Present",
    role: "Brand Designer & Creative Director",
    duration: "Ongoing"
  },
  {
    id: "motion-graphics",
    title: "Motion Graphics & Social Media",
    category: "Motion",
    subtitle: "Stopping the scroll with motion — festive campaigns, product reveals, and brand stories that drove 200%+ engagement",
    heroColor: "from-emerald-500/20 to-teal-500/20",
    accentColor: "#10b981",
    gradientFrom: "from-emerald-500",
    gradientTo: "to-teal-500",
    coverGradient: "from-emerald-500/10 via-teal-500/5 to-transparent",
    previewLabel: "Motion Portfolio",
    story: "Social media is where brands come alive. Motion is what stops the scroll. I've produced animated content across multiple brands — festive campaign reels, product showcases, brand story videos, behind-the-scenes content. Each piece designed to capture attention in the first second while communicating the brand's essence.",
    problem: "Brands were posting static content in an increasingly video-first landscape. Their feeds lacked the rhythm and energy to compete. They needed animated content that could tell stories quickly, showcase products dynamically, and maintain brand consistency across reels, stories, and feed posts.",
    solution: "Established a motion workflow covering concept, storyboarding, animation, and sound design. Each piece built around a core narrative hook with brand-consistent visuals. Mobile-first, fast-paced, designed to stop the thumb.",
    process: [
      "Developed content calendars aligned with festive seasons, launches, and milestones",
      "Scripted and storyboarded each piece — hook, narrative arc, call-to-action",
      "Created motion templates for recurring content types",
      "Animated festive reels for Diwali, Eid, wedding season, and New Year",
      "Produced product showcase animations with smooth reveals and callouts",
      "Edited brand story content with cinematic pacing and color grading",
      "Optimized everything for mobile — vertical formats, captions, fast pacing"
    ],
    finalVisuals: [
      "Festive campaign reels with animated typography and brand motifs",
      "Product showcase animations with 360-degree reveals and feature highlights",
      "Brand story montages blending product shots, lifestyle, and animated overlays",
      "Instagram stories with motion-enhanced layouts and interactive elements",
      "Animated logo intros and outros for consistent video signatures",
      "Behind-the-scenes edits with cinematic color grading and sound design"
    ],
    technologies: ["Corel Video Studio Pro", "Adobe Photoshop", "After Effects", "Social Media Strategy", "Motion Design"],
    impact: [
      { metric: "200%", label: "Reel Engagement" },
      { metric: "40%", label: "Follower Growth" },
      { metric: "5+", label: "Brands Served" },
      { metric: "Weekly", label: "Content Cadence" }
    ],
    year: "2024 — Present",
    role: "Motion Designer & Content Strategist",
    duration: "Ongoing"
  }
];

export const portfolioCategories = [
  "All",
  "Web",
  "Branding",
  "Motion",
  "Graphics",
];

export interface PortfolioProject {
  title: string;
  category: string;
  description: string;
  image?: string;
  color: string;
  link?: string;
  featured: boolean;
  tags: string[];
  caseStudyId?: string;
  story?: string;
  impact?: { metric: string; label: string; }[];
  tools?: string[];
}

export const portfolioProjects: PortfolioProject[] = [
  {
    title: "JugaadVision AI",
    category: "Web",
    description: "AI-powered visual toolkit for creators. Generate, edit, and enhance images without the learning curve. From experiment to SaaS.",
    color: "from-violet-500/20 to-fuchsia-500/20",
    link: "https://jugaadvision.vercel.app/",
    featured: true,
    tags: ["React", "TypeScript", "AI Integration", "Vercel", "Dashboard"],
    caseStudyId: "jugaadvision-ai",
    story: "Built because repetitive visual tasks should be automated. What started as a personal experiment became a full SaaS platform.",
    impact: [{ metric: "5x", label: "Faster Content" }, { metric: "All-in-One", label: "Toolkit" }],
    tools: ["React", "TypeScript", "AI APIs", "Tailwind CSS", "Framer Motion"]
  },
  {
    title: "Valley Wedding Cars",
    category: "Web",
    description: "Luxury wedding car rental platform with real-time booking, admin dashboard, and fleet management — turning phone chaos into seamless digital operations.",
    color: "from-rose-500/20 to-pink-500/20",
    link: "https://valleyweddingcars.vercel.app/",
    featured: true,
    tags: ["React", "Node.js", "PostgreSQL", "Real-time Sync", "UI/UX"],
    caseStudyId: "valley-wedding-cars",
    story: "Transformed a phone-and-spreadsheet booking system into a real-time digital platform. Zero double-bookings since launch.",
    impact: [{ metric: "10x", label: "Efficiency" }, { metric: "24/7", label: "Online Booking" }],
    tools: ["React", "TypeScript", "Node.js", "PostgreSQL", "Tailwind CSS"]
  },
  {
    title: "Tree of Life Feedback",
    category: "Web",
    description: "QR-based customer feedback platform with real-time analytics dashboard — replacing paper forms with digital insights for a cafe.",
    color: "from-amber-500/20 to-orange-500/20",
    link: "https://tolfeedback.vercel.app/",
    featured: true,
    tags: ["React", "Next.js", "Supabase", "Dashboard", "Analytics", "SaaS"],
    caseStudyId: "tol-feedback",
    story: "Digitized feedback collection with real-time analytics, NPS tracking, and an intuitive admin dashboard.",
    impact: [{ metric: "Real-time", label: "Analytics" }, { metric: "Digital", label: "Feedback" }],
    tools: ["React", "Next.js", "Tailwind CSS", "Supabase", "Figma"]
  },
  {
    title: "Houseboat Holidays — Instagram",
    category: "Social Media",
    description: "Managing Instagram presence for a Kashmiri houseboat brand with engaging content, visual storytelling, and audience growth.",
    color: "from-teal-500/20 to-emerald-500/20",
  },
  {
    title: "Tree of Life Cafe",
    category: "Branding",
    description: "Complete brand identity for a nature-inspired cafe — logo, menu, signage, Instagram kit, and booking app. All speaking the same warm visual language.",
    color: "from-amber-500/20 to-orange-500/20",
    featured: true,
    tags: ["Brand Identity", "Menu Design", "Social Media", "Photography"],
    caseStudyId: "tree-of-life-cafe",
    story: "Translated the warmth of a physical cafe into a cohesive identity across print, digital, and social. 3x engagement lift.",
    impact: [{ metric: "3x", label: "Engagement" }, { metric: "100%", label: "Consistency" }],
    tools: ["Photoshop", "MidJourney", "Figma", "React", "Tailwind CSS"]
  },
  {
    title: "Multi-Brand Identity System",
    category: "Branding",
    description: "8 brand identities under one studio — wedding luxury to wellness calm — each with its own personality, palette, and system.",
    color: "from-pink-500/20 to-rose-500/20",
    featured: true,
    tags: ["Brand Identity", "Logo Design", "Color Theory", "Typography", "Guidelines"],
    caseStudyId: "branding-portfolio",
    story: "Shaped 8 unique brand personalities across weddings, hospitality, exports, and wellness. Each distinct. All intentional.",
    impact: [{ metric: "8+", label: "Brands" }, { metric: "100%", label: "Consistency" }],
    tools: ["Photoshop", "Figma", "Brand Strategy", "Typography Design", "Color Theory"]
  },
  {
    title: "Motion Graphics & Reels",
    category: "Motion",
    description: "Branded motion content — festive campaigns, product reveals, brand stories — designed to stop the scroll and drive 200%+ engagement.",
    color: "from-emerald-500/20 to-teal-500/20",
    featured: true,
    tags: ["Motion", "Video Production", "Social Media", "Animation"],
    caseStudyId: "motion-graphics",
    story: "Turned static feeds into motion-driven experiences. Festive campaigns, product reveals, brand storytelling that performed.",
    impact: [{ metric: "200%", label: "Reel Engagement" }, { metric: "40%", label: "Growth" }],
    tools: ["Corel Video Studio", "Photoshop", "After Effects", "Motion Design"]
  },
  {
    title: "E-Commerce Product Visuals",
    category: "Graphics",
    description: "Complete product visual packages — lifestyle shots, infographics, A+ content — optimized for Amazon, Flipkart, and Shopify conversions.",
    color: "from-purple-500/20 to-violet-500/20",
    featured: false,
    tags: ["Product Photography", "Photoshop", "A+ Content", "Amazon", "E-commerce"],
  },
  {
    title: "Premium Brand Banners",
    category: "Graphics",
    description: "Web and print banners for seasonal promotions — dynamic layouts, brand-consistent color schemes, and strong visual hierarchy.",
    color: "from-orange-500/20 to-amber-500/20",
    featured: false,
    tags: ["Banner Design", "Print Ready", "Brand Consistency", "Photoshop"],
  },
  {
    title: "Product Catalogs",
    category: "Graphics",
    description: "48-page product catalogs with detailed specifications, lifestyle imagery, and clean editorial layouts designed for impact.",
    color: "from-blue-500/20 to-indigo-500/20",
    featured: false,
    tags: ["Catalog Design", "Editorial Layout", "InDesign", "Print Design"],
  },
  {
    title: "Houseboat Holidays — Social",
    category: "Graphics",
    description: "Instagram presence for a Kashmiri houseboat brand — visual storytelling, content strategy, and organic audience growth.",
    color: "from-teal-500/20 to-emerald-500/20",
    featured: false,
    tags: ["Instagram", "Content Strategy", "Visual Design", "Brand Growth"],
  },
  {
    title: "Social Media Campaign — Festive",
    category: "Graphics",
    description: "Cohesive festive campaign across Instagram and Facebook — animated reels, carousel posts, and brand-driven creatives.",
    color: "from-emerald-500/20 to-teal-500/20",
    featured: false,
    tags: ["Photoshop", "After Effects", "Social Media", "Campaign Design"],
  },
  {
    title: "Amazon A+ Content",
    category: "Graphics",
    description: "Premium A+ content modules — comparison charts, lifestyle imagery, feature highlights — optimized for conversion on top products.",
    color: "from-violet-500/20 to-fuchsia-500/20",
    featured: false,
    tags: ["Amazon A+", "E-commerce", "Infographics", "Conversion Optimization"],
  },
  {
    title: "Product Photography",
    category: "Graphics",
    description: "Professional product photoshoots for e-commerce — lighting, composition, and post-processing for Amazon and Shopify listings.",
    color: "from-cyan-500/20 to-violet-500/20",
    featured: false,
    tags: ["Photography", "Photo Editing", "E-commerce", "Lighting"],
  },
];

export const education = [
  {
    degree: "Bachelor of Arts (BA)",
    institution: "Indira Gandhi National Open University (IGNOU)",
    year: "2025",
    icon: GraduationCap,
  },
  {
    degree: "Senior Secondary (12th)",
    institution: "National Institute of Open Schooling (NIOS)",
    year: "Completed",
    icon: GraduationCap,
  },
  {
    degree: "Secondary (10th)",
    institution: "National Institute of Open Schooling (NIOS)",
    year: "Completed",
    icon: Award,
  },
];

export const contact = {
  email: "sraju7213@gmail.com",
  phone: "+91-9205171767",
  location: "New Delhi, India",
  socials: [
    { platform: "AI Art — kreative.ai", url: "https://www.instagram.com/kreative.ai" },
    { platform: "Visual Stories — depressed_rtist", url: "https://www.instagram.com/depressed_rtist" },
  ],
};
