import {
  Palette, Camera, Monitor, FileText, Globe, Database,
  BarChart3, MessageSquare, Users, Image, Layers, Video,
  PenTool, Briefcase, Award, GraduationCap, Sparkles, Brain,
  Building2, Car, FileCheck, Coffee, Truck, Armchair, Store, Sailboat, Heart
} from "lucide-react";

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Brands", href: "#brands" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Personal", href: "#personal" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export const hero = {
  name: "RAJU SHEIKH",
  headline: "I build high-performance web experiences that feel fast, look premium, and convert.",
  subtitle: "Full-stack developer specializing in modern web apps, UI/UX-focused design, and scalable solutions.",
  ctaPrimary: "View Projects",
  ctaSecondary: "Hire Me",
  availability: "Available for freelance & full-time opportunities",
};

export const dualHero = {
  designer: {
    label: "GRAPHIC DESIGNER",
    headline: "Crafting bold, high-impact visual identities.",
    subheadline: "Branding, social media creatives, and visual systems designed to stand out and perform.",
    cta: "View Designs",
    filter: "Graphics",
  },
  developer: {
    label: "AI WEB CREATOR",
    headline: "Building modern websites powered by AI.",
    subheadline: "Fast, scalable, and visually refined websites — delivered using advanced AI workflows.",
    cta: "View Projects",
    trustLine: "AI-assisted development • No-code workflows • Production-ready results",
  },
};

export const about = {
  bio: `I'm a Creative Designer and Web Developer working under Ms Cottage, a parent company where I manage the visual identity, digital presence, and creative strategy for a diverse portfolio of brands spanning wedding services, visa consultancy, hospitality, wellness, e-commerce, and export business.

Every brand has its own voice, audience, and visual language — and I'm the one who brings it all together. From product photography and catalog design to social media campaigns and web development, I handle the full creative pipeline across all brands.

Beyond client work, I run two personal creative platforms: kreative.ai, where I explore AI-generated cinematic and surreal visual art using MidJourney and Stable Diffusion, and depressed_rtist, a space for emotional, dark-themed storytelling through visual design. These projects push my creative boundaries and keep my work evolving.`,
  stats: [
    { value: "8+", label: "Active Brands" },
    { value: "6+", label: "Years Experience" },
    { value: "2", label: "Creative Platforms" },
    { value: "AI", label: "Powered Workflows" },
  ],
};

export const skills = [
  {
    category: "Design & Creative",
    icon: Palette,
    items: [
      { name: "Adobe Photoshop", level: 92 },
      { name: "Banner & Catalog Design", level: 90 },
      { name: "Image Editing & Retouching", level: 93 },
      { name: "Social Media Graphics", level: 90 },
      { name: "Brand Identity Design", level: 88 },
    ],
  },
  {
    category: "AI & Emerging Tech",
    icon: Brain,
    items: [
      { name: "MidJourney", level: 90 },
      { name: "Stable Diffusion", level: 88 },
      { name: "Prompt Engineering", level: 92 },
      { name: "AI-Assisted Design Workflows", level: 85 },
      { name: "Cinematic Visual Concepts", level: 87 },
    ],
  },
  {
    category: "Media & Production",
    icon: Camera,
    items: [
      { name: "Product Photography", level: 87 },
      { name: "Corel Video Studio Pro", level: 78 },
      { name: "Visual Content Creation", level: 90 },
      { name: "E-Commerce Visuals", level: 92 },
    ],
  },
  {
    category: "Technical & Management",
    icon: Monitor,
    items: [
      { name: "Web Development", level: 80 },
      { name: "MS Office Suite", level: 88 },
      { name: "Website Content Management", level: 84 },
      { name: "Multi-Brand Coordination", level: 90 },
    ],
  },
];

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
    company: "Elapro",
    role: "Graphic Designer",
    period: "Apr 2017 — Mar 2020",
    location: "India",
    highlights: [
      "Started as intern for 1 year 6 months, then promoted to Graphic Designer for another 1 year 6 months",
      "Created banners, catalogs, and website graphics",
      "Managed website content and handled data entry operations",
      "Designed presentations for internal and external use",
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
    links: [{ label: "Instagram", url: "https://www.instagram.com/houseboat_holidays_kashmir" }],
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

export const personalProjects = [
  {
    name: "kreative.ai",
    tagline: "AI-Generated Cinematic Art · 2024 — Present",
    description: "An experimental creative platform exploring the intersection of artificial intelligence and visual storytelling. Producing surreal, cinematic, and high-concept artwork using MidJourney and Stable Diffusion — from dreamlike landscapes to hyper-stylized portraits.",
    highlights: ["MidJourney", "Stable Diffusion", "Cinematic Visuals", "Surreal Concepts", "Prompt Engineering"],
    accent: "#00e5ff",
    gradient: "from-cyan-400/10 via-blue-500/10 to-violet-500/10",
    link: "https://www.instagram.com/kreative.ai",
    linkLabel: "@kreative.ai",
  },
  {
    name: "depressed_rtist",
    tagline: "Emotional Visual Storytelling · 2024 — Present",
    description: "A deeply personal creative outlet channeling raw emotion into dark-themed, storytelling-driven visual art. Exploring themes of solitude, introspection, and the human condition through a moody, cinematic lens — where every piece tells a story words can't express.",
    highlights: ["Dark Art", "Emotional Storytelling", "Visual Narratives", "Cinematic Mood", "AI Art"],
    accent: "#a855f7",
    gradient: "from-violet-500/10 via-purple-600/10 to-rose-500/10",
    link: "https://www.instagram.com/depressed_rtist",
    linkLabel: "@depressed_rtist",
  },
];

export const portfolioCategories = [
  "All",
  "Graphics",
  "Web Dev",
  "AI Art",
  "Photography",
  "Branding",
];

export const portfolioProjects = [
  {
    title: "Jugaad Vision — AI SaaS Platform",
    category: "Web Dev",
    description: "Built and launched an AI-powered SaaS platform for visual content generation. Features intelligent image processing, creative automation tools, and a modern dashboard for seamless user experience.",
    color: "from-violet-500/20 to-fuchsia-500/20",
    link: "https://jugaadvision.vercel.app/",
    featured: true,
  },
  {
    title: "Valley Wedding Cars — Full-Stack Web App",
    category: "Web Dev",
    description: "Fully designed and developed a wedding car rental platform with custom dashboard, backend logic, real-time data sync, booking flow, and fleet management system.",
    color: "from-cyan-500/20 to-violet-500/20",
    link: "https://valleyweddingcars.vercel.app/",
    featured: true,
  },
  {
    title: "Houseboat Holidays — Website",
    category: "Web Dev",
    description: "Built a complete digital presence for a Kashmiri houseboat brand with gallery, booking integration, and immersive visual design.",
    color: "from-teal-500/20 to-emerald-500/20",
  },
  {
    title: "kreative.ai — AI Art",
    category: "AI Art",
    description: "Exploring AI-generated cinematic and surreal visual art using MidJourney and Stable Diffusion — from dreamlike landscapes to hyper-stylized portraits.",
    color: "from-cyan-500/20 to-blue-500/20",
    link: "https://www.instagram.com/kreative.ai",
  },
  {
    title: "depressed_rtist — Dark Art",
    category: "AI Art",
    description: "A deeply personal creative outlet channeling raw emotion into dark-themed, storytelling-driven visual art exploring themes of solitude and introspection.",
    color: "from-violet-500/20 to-purple-500/20",
    link: "https://www.instagram.com/depressed_rtist",
  },
  {
    title: "Social Media Campaign — Festive Collection",
    category: "Graphics",
    description: "Designed a cohesive social media campaign for a festive product launch across Instagram and Facebook with animated reels and carousel posts.",
    color: "from-emerald-500/20 to-teal-500/20",
  },
  {
    title: "E-Commerce Product Visuals",
    category: "Graphics",
    description: "Complete product visual package including lifestyle shots, infographics, A+ content, and optimized listings for Amazon and Flipkart.",
    color: "from-pink-500/20 to-rose-500/20",
  },
  {
    title: "Premium Brand Banners",
    category: "Graphics",
    description: "A series of web and print banners for seasonal promotions, featuring dynamic layouts and brand-consistent color schemes.",
    color: "from-orange-500/20 to-amber-500/20",
  },
  {
    title: "Product Catalogs",
    category: "Graphics",
    description: "Designed 48-page product catalogs with detailed specifications, lifestyle imagery, and clean editorial layouts.",
    color: "from-blue-500/20 to-indigo-500/20",
  },
  {
    title: "Amazon A+ Content",
    category: "Graphics",
    description: "Created premium A+ content modules with comparison charts, lifestyle imagery, and feature highlights for top-selling products.",
    color: "from-violet-500/20 to-fuchsia-500/20",
  },
  {
    title: "Product Photography",
    category: "Photography",
    description: "Conducted professional product photoshoots and edited images for e-commerce platforms like Amazon and Shopify.",
    color: "from-cyan-500/20 to-violet-500/20",
  },
  {
    title: "Multi-Brand Identity System",
    category: "Branding",
    description: "Comprehensive brand identities across 8+ brands including logos, color palettes, typography systems, and brand guidelines.",
    color: "from-pink-500/20 to-rose-500/20",
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
    { platform: "Instagram — kreative.ai", url: "https://www.instagram.com/kreative.ai" },
    { platform: "Instagram — depressed_rtist", url: "https://www.instagram.com/depressed_rtist" },
  ],
};
