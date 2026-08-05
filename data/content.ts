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
      { src: "/images/valley-wedding-cars/screenshot-01.webp", title: "Homepage", description: "Premium landing page designed to create a luxury first impression and encourage bookings." },
      { src: "/images/valley-wedding-cars/screenshot-02.webp", title: "Fleet Page", description: "Luxury vehicle catalog with categories, pricing, and quick booking options." },
      { src: "/images/valley-wedding-cars/screenshot-03.webp", title: "About Us", description: "Brand story and trust-building page showcasing the company's identity." },
      { src: "/images/valley-wedding-cars/screenshot-04.webp", title: "Contact Page", description: "Inquiry form with WhatsApp integration, Google Maps, and contact information." },
      { src: "/images/valley-wedding-cars/screenshot-05.webp", title: "Admin Login", description: "Secure authentication for administrators." },
      { src: "/images/valley-wedding-cars/screenshot-06.webp", title: "Messages Management", description: "Manage customer inquiries and leads from a centralized dashboard." },
      { src: "/images/valley-wedding-cars/screenshot-07.webp", title: "Package Management", description: "Create and manage wedding service packages with pricing and activation controls." },
      { src: "/images/valley-wedding-cars/screenshot-08.webp", title: "Vehicle Management", description: "Manage fleet, pricing, discounts, vehicle status, and display order." },
      { src: "/images/valley-wedding-cars/screenshot-09.webp", title: "Booking Calendar", description: "Visual scheduling system to prevent conflicts and manage vehicle availability." },
      { src: "/images/valley-wedding-cars/screenshot-10.webp", title: "Bookings Dashboard", description: "Track bookings by status, customer details, payment, and service type." },
      { src: "/images/valley-wedding-cars/screenshot-11.webp", title: "Estimate System", description: "Generate, manage, and send professional customer quotations." }
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
      { src: "/images/tol-feedback/feedback-form.webp", title: "Customer Feedback Form", description: "Mobile-first feedback form with experience ratings, recommendations, issue reporting, and customer comments." },
      { src: "/images/tol-feedback/overview.webp", title: "Dashboard Overview", description: "Business dashboard displaying customer satisfaction, recommendations, Net Promoter Score, and reported issues." },
      { src: "/images/tol-feedback/analytics.webp", title: "Analytics Dashboard", description: "Visual analytics showing feedback trends, submission activity, peak hours, and engagement insights." },
      { src: "/images/tol-feedback/feedbacks.webp", title: "Feedback Management", description: "Search, filter, and manage customer feedback with ratings, features, issues, and recommendations." },
      { src: "/images/tol-feedback/settings.webp", title: "Dashboard Settings", description: "Customizable preferences including display options, auto-refresh, exports, and security settings." }
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
    role: "Product Designer • UI/UX Designer • Frontend Developer",
    duration: "4 Months",
    overview: "Designed and developed an AI-powered creative workspace that helps designers, marketers, and businesses generate professional prompts, edit images, create AI artwork, and streamline creative workflows from a single platform.",
    challenge: "Creative professionals often switch between multiple AI tools for prompt writing, image generation, editing, and brainstorming. The goal was to unify these workflows into one intuitive platform that improves speed and consistency.",
    solution_points: [
      "Designed a modular AI workspace",
      "Built advanced prompt engineering tools",
      "Created image generation and editing interfaces",
      "Developed reusable prompt templates",
      "Optimized workflows for designers and marketing teams"
    ],
    keyFeatures: [
      "AI Prompt Builder",
      "Pro Prompter",
      "Batch Prompt Generator",
      "Creative Mixer",
      "Image-to-Prompt Conversion",
      "AI Image Generator",
      "AI Image Editor",
      "Responsive SaaS Dashboard"
    ],
    techStack: {
      design: ["Figma", "Photoshop"],
      development: ["React", "Next.js", "Tailwind CSS"]
    },
    screenshots: [
      { src: "/images/jugaadvision-ai/homepage.webp", title: "Homepage", description: "Landing page introducing the AI creative platform with a modern SaaS interface and quick access to creative tools." },
      { src: "/images/jugaadvision-ai/prompt-builder.webp", title: "Prompt Builder", description: "Beginner-friendly prompt builder with structured inputs for generating high-quality AI prompts." },
      { src: "/images/jugaadvision-ai/pro-prompter.webp", title: "Pro Prompter", description: "Advanced prompt engineering workspace with detailed controls for professional AI content creation." },
      { src: "/images/jugaadvision-ai/batch-prompt-generator.webp", title: "Batch Prompt Generator", description: "Generate multiple optimized prompts simultaneously to accelerate creative production." },
      { src: "/images/jugaadvision-ai/creative-mixer.webp", title: "Creative Mixer", description: "Combine styles, references, and creative elements to build unique AI prompts." },
      { src: "/images/jugaadvision-ai/image-to-prompt.webp", title: "Image to Prompt", description: "Convert reference images into detailed prompts for AI image generation." },
      { src: "/images/jugaadvision-ai/image-generator.webp", title: "AI Image Generator", description: "Generate high-quality AI artwork using structured prompts and customizable settings." },
      { src: "/images/jugaadvision-ai/image-editor.webp", title: "AI Image Editor", description: "Edit, enhance, and transform AI-generated images within the same creative workspace." }
    ],
    results: [
      "Unified multiple AI creative workflows into one platform",
      "Reduced prompt creation time through reusable templates",
      "Improved designer productivity with specialized AI tools",
      "Created a scalable SaaS interface for future AI integrations"
    ]
  },
];

export const portfolioCategories = [
  "All",
  "Web",
  "Branding",
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
    featured: false,
    tags: ["Instagram", "Content Strategy", "Visual Design", "Brand Growth"],
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
