import { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import {
  ExternalLink, Star, Layers,
  Palette, Monitor, Sparkles, Brain,
  Camera, FileText, Globe, Image, Video,
  PenTool, Code2, Wand2, Box, Layout,
  ShoppingBag, Film, Layers3, Hexagon
} from "lucide-react";
import { portfolioCategories, portfolioProjects } from "../data/content";
import TiltCard from "./TiltCard";

const categoryIcons: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  "Graphics": Palette,
  "Web Dev": Code2,
  "AI Art": Wand2,
  "Photography": Camera,
  "Branding": PenTool,
};

const categoryPatterns: Record<string, { bg: string; shapes: React.ReactNode }> = {
  "Graphics": {
    bg: "from-pink-500/20 via-rose-500/20 to-fuchsia-500/20",
    shapes: (
      <div className="absolute inset-0 overflow-hidden opacity-30">
        <div className="absolute top-4 left-4 w-20 h-20 border-2 border-pink-400/50 rotate-45" />
        <div className="absolute bottom-8 right-8 w-16 h-16 border border-rose-400/40 rounded-full" />
        <div className="absolute top-1/2 left-1/4 w-8 h-8 bg-pink-400/30 rotate-12" />
      </div>
    ),
  },
  "Web Dev": {
    bg: "from-cyan-500/20 via-blue-500/20 to-violet-500/20",
    shapes: (
      <div className="absolute inset-0 overflow-hidden opacity-30">
        <div className="absolute top-6 right-6 grid grid-cols-3 gap-1">
          {[...Array(9)].map((_, i) => (
            <div key={i} className="w-2 h-2 bg-cyan-400/60 rounded-sm" />
          ))}
        </div>
        <div className="absolute bottom-6 left-6 w-24 h-1 bg-gradient-to-r from-cyan-400/60 to-transparent rounded" />
        <div className="absolute top-1/2 left-4 w-1 h-16 bg-gradient-to-b from-violet-400/60 to-transparent rounded" />
      </div>
    ),
  },
  "AI Art": {
    bg: "from-violet-500/20 via-purple-500/20 to-fuchsia-500/20",
    shapes: (
      <div className="absolute inset-0 overflow-hidden opacity-30">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <Hexagon className="w-24 h-24 text-violet-400/50 animate-pulse" />
        </div>
        <div className="absolute top-8 left-8 w-12 h-12 bg-purple-400/30 rounded-full blur-xl" />
        <div className="absolute bottom-8 right-8 w-16 h-16 bg-fuchsia-400/30 rounded-full blur-xl" />
        <div className="absolute top-4 right-1/4 w-2 h-2 bg-violet-400/80 rounded-full animate-ping" />
      </div>
    ),
  },
  "Photography": {
    bg: "from-amber-500/20 via-orange-500/20 to-yellow-500/20",
    shapes: (
      <div className="absolute inset-0 overflow-hidden opacity-30">
        <div className="absolute top-6 left-1/2 -translate-x-1/2 w-20 h-14 border-2 border-amber-400/50 rounded-lg" />
        <div className="absolute top-6 left-1/2 -translate-x-1/2 w-12 h-8 border border-amber-400/40 rounded-t-lg" />
        <div className="absolute bottom-10 right-10 w-6 h-6 border border-orange-400/50 rounded-full" />
        <div className="absolute top-12 right-12 w-3 h-3 bg-orange-400/60 rounded-full" />
      </div>
    ),
  },
  "Branding": {
    bg: "from-emerald-500/20 via-teal-500/20 to-cyan-500/20",
    shapes: (
      <div className="absolute inset-0 overflow-hidden opacity-30">
        <div className="absolute top-8 left-8 w-16 h-16 border-2 border-emerald-400/50 rounded-full" />
        <div className="absolute top-8 left-8 w-10 h-10 border border-teal-400/40 rounded-full" />
        <div className="absolute bottom-12 left-1/3 w-20 h-1 bg-gradient-to-r from-emerald-400/60 to-transparent rounded" />
        <div className="absolute top-1/2 right-12 w-3 h-3 bg-cyan-400/60 rounded-full" />
      </div>
    ),
  },
};

const cardVariants = {
  hidden: (i: number) => ({
    opacity: 0,
    y: 40,
    scale: 0.95,
  }),
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      delay: i * 0.08,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  }),
  exit: {
    opacity: 0,
    scale: 0.95,
    transition: {
      duration: 0.3,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.06,
      delayChildren: 0.1,
    },
  },
};

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [isHovered, setIsHovered] = useState<string | null>(null);
  const [activeMobileCard, setActiveMobileCard] = useState<string | null>(null);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const filtered =
    activeCategory === "All"
      ? portfolioProjects
      : portfolioProjects.filter((p) => p.category === activeCategory);

  const getCategoryCount = (cat: string) => {
    if (cat === "All") return portfolioProjects.length;
    return portfolioProjects.filter((p) => p.category === cat).length;
  };

  return (
    <section id="portfolio" className="py-24 lg:py-32 relative bg-bg-surface/50 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent-cyan/5 to-transparent opacity-50 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent-cyan/10 border border-accent-cyan/20 mb-6"
          >
            <Layers size={14} className="text-accent-cyan" />
            <span className="text-accent-cyan text-xs font-medium tracking-wider uppercase">
              Selected Works
            </span>
          </motion.div>
          
          <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-text-primary mb-6">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="block"
            >
              Portfolio
            </motion.span>
          </h2>
          
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-text-secondary text-lg max-w-2xl mx-auto"
          >
            A curated collection of projects spanning design, development, and creative direction
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          <div className="inline-flex items-center gap-1 p-1 bg-bg-card/80 backdrop-blur-sm rounded-xl border border-border-subtle">
            {portfolioCategories.map((cat) => (
              <motion.button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-300 z-10 ${
                  activeCategory === cat ? "text-bg-primary" : "text-text-secondary hover:text-text-primary"
                }`}
              >
                {activeCategory === cat && (
                  <motion.div
                    layoutId="activeFilter"
                    className="absolute inset-0 bg-gradient-to-r from-accent-cyan to-accent-violet rounded-lg"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.5 }}
                  />
                )}
                <span className="relative z-10 flex items-center gap-2">
                  {cat}
                  <motion.span
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    key={activeCategory === cat ? cat : "reset"}
                    className={`text-[10px] px-1.5 py-0.5 rounded ${
                      activeCategory === cat
                        ? "bg-bg-primary/20 text-bg-primary"
                        : "bg-bg-elevated text-text-muted"
                    }`}
                  >
                    {getCategoryCount(cat)}
                  </motion.span>
                </span>
              </motion.button>
            ))}
          </div>
        </motion.div>

        <motion.div
          ref={ref}
          layout
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => {
              const Wrapper = project.link ? "a" : "div";
              const wrapperProps = project.link
                ? { href: project.link, target: "_blank", rel: "noopener noreferrer" }
                : {};

              return (
                <motion.div
                  key={project.title}
                  layout
                  custom={i}
                  variants={cardVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  onMouseEnter={() => setIsHovered(project.title)}
                  onMouseLeave={() => setIsHovered(null)}
                  onClick={() => {
                    if (typeof window !== 'undefined' && window.matchMedia('(hover: none)').matches) {
                      setActiveMobileCard(activeMobileCard === project.title ? null : project.title);
                    }
                  }}
                >
                  <TiltCard
                    className={`group relative bg-bg-card rounded-2xl overflow-hidden transition-shadow duration-500 ${
                      project.featured
                        ? "border border-accent-cyan/30 shadow-lg shadow-accent-cyan/5"
                        : "border border-border-subtle hover:border-border-muted"
                    } ${isHovered === project.title || activeMobileCard === project.title ? "shadow-2xl shadow-accent-cyan/10" : ""}`}
                    glowIntensity={isHovered === project.title || activeMobileCard === project.title ? 0.15 : 0.05}
                  >
                    {project.featured && (
                      <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 + i * 0.05, duration: 0.4 }}
                        className="absolute top-4 right-4 z-10 flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-bg-primary/90 backdrop-blur-sm border border-accent-cyan/40"
                      >
                        <Star size={11} className="text-accent-cyan fill-accent-cyan" />
                        <span className="text-[10px] font-semibold tracking-wider text-accent-cyan uppercase">
                          Featured
                        </span>
                      </motion.div>
                    )}

                    <Wrapper {...wrapperProps} className="block">
                      <div className={`aspect-[4/3] bg-gradient-to-br ${categoryPatterns[project.category]?.bg || project.color} relative overflow-hidden`}>
                        {categoryPatterns[project.category]?.shapes}
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-br from-accent-cyan/10 to-accent-violet/10"
                          animate={{ opacity: isHovered === project.title || activeMobileCard === project.title ? 1 : 0.5 }}
                          transition={{ duration: 0.3 }}
                        />
                        
                        <motion.div
                          className="absolute inset-0 flex items-center justify-center"
                          animate={{
                            scale: isHovered === project.title || activeMobileCard === project.title ? 1.05 : 1,
                          }}
                          transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
                        >
                          <div className="relative text-center p-6">
                              <motion.div
                                animate={{
                                  scale: isHovered === project.title || activeMobileCard === project.title ? 1.1 : 1,
                                  rotate: isHovered === project.title || activeMobileCard === project.title ? 3 : 0,
                                }}
                                transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
                                className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-bg-card/90 border flex items-center justify-center backdrop-blur-sm transition-all duration-400 ${
                                  project.featured ? "border-accent-cyan/50" : "border-border-subtle"
                                }`}
                              >
                                {(() => {
                                  const Icon = categoryIcons[project.category] || Layers3;
                                  return <Icon size={24} className="text-accent-cyan" />;
                                })()}
                              </motion.div>
                              <motion.span
                                animate={{ opacity: isHovered === project.title || activeMobileCard === project.title ? 1 : 0.6 }}
                                className="text-xs font-medium tracking-wider text-accent-cyan/80 uppercase"
                              >
                              {project.category}
                            </motion.span>
                          </div>
                        </motion.div>

                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: isHovered === project.title || activeMobileCard === project.title ? 1 : 0 }}
                          transition={{ duration: 0.3 }}
                          className="absolute inset-0 bg-bg-primary/85 backdrop-blur-md flex items-center justify-center"
                        >
                      <motion.div
                        initial={{ y: 10, opacity: 0 }}
                        animate={{ y: isHovered === project.title || activeMobileCard === project.title ? 0 : 10, opacity: isHovered === project.title || activeMobileCard === project.title ? 1 : 0 }}
                        transition={{ duration: 0.3, delay: 0.05 }}
                        className="flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-accent-cyan to-accent-violet text-bg-primary text-sm font-semibold shadow-lg shadow-accent-cyan/25"
                      >
                            <ExternalLink size={15} />
                            {project.link ? "View Live" : "View Project"}
                          </motion.div>
                        </motion.div>
                      </div>
                    </Wrapper>

                    <motion.div className="p-5">
                      <h3 className="font-heading text-lg font-semibold mb-2 text-text-primary group-hover:text-accent-cyan transition-colors duration-300">
                        {project.title}
                      </h3>
                      <p className="text-text-muted text-sm leading-relaxed line-clamp-2">
                        {project.description}
                      </p>
                      
                      <motion.div
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: isHovered === project.title || activeMobileCard === project.title ? 1 : 0, y: isHovered === project.title || activeMobileCard === project.title ? 0 : 5 }}
                        transition={{ duration: 0.3, delay: 0.1 }}
                        className="mt-4 flex items-center gap-2"
                      >
                        <div className={`h-px flex-1 ${
                          project.category === "Graphics" ? "bg-gradient-to-r from-pink-500/40 to-transparent" :
                          project.category === "Web Dev" ? "bg-gradient-to-r from-cyan-500/40 to-transparent" :
                          project.category === "AI Art" ? "bg-gradient-to-r from-violet-500/40 to-transparent" :
                          project.category === "Photography" ? "bg-gradient-to-r from-amber-500/40 to-transparent" :
                          project.category === "Branding" ? "bg-gradient-to-r from-emerald-500/40 to-transparent" :
                          "bg-gradient-to-r from-accent-cyan/30 to-transparent"
                        }`} />
                        <span className={`text-[10px] font-medium tracking-wider uppercase ${
                          project.category === "Graphics" ? "text-pink-400/70" :
                          project.category === "Web Dev" ? "text-cyan-400/70" :
                          project.category === "AI Art" ? "text-violet-400/70" :
                          project.category === "Photography" ? "text-amber-400/70" :
                          project.category === "Branding" ? "text-emerald-400/70" :
                          "text-accent-cyan/60"
                        }`}>
                          {project.category}
                        </span>
                      </motion.div>
                    </motion.div>
                  </TiltCard>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-12 text-center"
        >
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-bg-card/80 border border-border-subtle"
          >
            <span className="text-text-muted text-sm">Showing</span>
            <motion.span
              key={filtered.length}
              initial={{ scale: 1.3, color: "#00e5ff" }}
              animate={{ scale: 1, color: "#ffffff" }}
              transition={{ duration: 0.4 }}
              className="text-text-primary font-semibold"
            >
              {filtered.length}
            </motion.span>
            <span className="text-text-muted text-sm">
              {filtered.length === 1 ? "project" : "projects"}
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
