import { motion } from "framer-motion";
import { Palette, Monitor, Camera, Brain, Sparkles, Zap, Target, Layers } from "lucide-react";

const services = [
  {
    icon: Palette,
    title: "Brand Identity Design",
    description: "Complete visual identity systems including logos, color palettes, typography, and brand guidelines that make brands memorable.",
    gradient: "from-cyan-500/20 to-blue-500/20",
    accent: "#00e5ff",
  },
  {
    icon: Monitor,
    title: "Web Design & Development",
    description: "Modern, responsive websites with intuitive UX/UI. From landing pages to full-stack web applications with clean code.",
    gradient: "from-violet-500/20 to-purple-500/20",
    accent: "#8b5cf6",
  },
  {
    icon: Camera,
    title: "Product Photography",
    description: "Professional product shoots and retouching for e-commerce platforms. High-quality visuals that convert browsers to buyers.",
    gradient: "from-pink-500/20 to-rose-500/20",
    accent: "#ec4899",
  },
  {
    icon: Brain,
    title: "AI Art & Visual Concepts",
    description: "Cutting-edge AI-generated imagery using MidJourney and Stable Diffusion. Cinematic, surreal, and hyper-stylized visuals.",
    gradient: "from-emerald-500/20 to-teal-500/20",
    accent: "#10b981",
  },
  {
    icon: Layers,
    title: "Social Media Design",
    description: "Engaging social media creatives, carousel posts, story templates, and animated content that stops the scroll.",
    gradient: "from-amber-500/20 to-orange-500/20",
    accent: "#f59e0b",
  },
  {
    icon: Sparkles,
    title: "Catalog & Print Design",
    description: "Detailed product catalogs, brochures, and marketing materials with editorial layouts that showcase products beautifully.",
    gradient: "from-blue-500/20 to-indigo-500/20",
    accent: "#3b82f6",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

export default function Services() {
  return (
    <section id="services" className="py-24 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-dense opacity-30" />
      
      <div className="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-accent-cyan/[0.04] blur-[120px]" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 rounded-full bg-accent-violet/[0.04] blur-[120px]" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-accent-cyan text-sm font-medium tracking-widest uppercase mb-3">
            What I do
          </p>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-text-primary mb-4">
            Services
          </h2>
          <div className="section_divider" />
          <p className="text-text-secondary mt-4 max-w-2xl mx-auto">
            Delivering creative solutions that bring brands to life across digital and print mediums
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              variants={itemVariants}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="group relative bg-bg-card rounded-2xl p-6 lg:p-8 border border-border-subtle hover:border-border-muted transition-all duration-500 overflow-hidden"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              <div className="absolute top-0 right-0 w-24 h-24 rounded-full bg-gradient-to-br from-white/5 to-transparent blur-2xl" />
              
              <div className="relative">
                <motion.div
                  whileHover={{ rotate: 15, scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="w-14 h-14 rounded-xl bg-gradient-to-br from-bg-surface to-bg-elevated border border-border-subtle flex items-center justify-center mb-5 group-hover:border-accent-cyan/30 transition-colors duration-300"
                >
                  <service.icon size={26} style={{ color: service.accent }} />
                </motion.div>

                <h3 className="font-heading text-xl font-semibold text-text-primary mb-3 group-hover:text-accent-cyan transition-colors duration-300">
                  {service.title}
                </h3>
                
                <p className="text-text-muted text-sm leading-relaxed">
                  {service.description}
                </p>

                <motion.div
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  className="mt-5 h-px bg-gradient-to-r from-transparent via-accent-cyan/50 to-transparent origin-left"
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
