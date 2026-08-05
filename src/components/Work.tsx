import { useState, lazy, Suspense, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, ArrowRight, X, Eye, CheckCircle2 } from "lucide-react";
import { portfolioCategories, portfolioProjects, caseStudies } from "../data/content";
import type { CaseStudy } from "../data/content";
import SectionHeader from "./ui/SectionHeader";
import Reveal from "./ui/Reveal";

const CaseStudyModal = lazy(() => import("./CaseStudyModal"));

function BentoCard({
  study,
  onClick,
}: {
  study: CaseStudy;
  onClick: () => void;
}) {
  const thumbnailSrc = study.screenshots?.[0]?.src || study.image;
  const hasImage = !!thumbnailSrc;

  return (
    <motion.button
      onClick={onClick}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
      className="group relative w-full text-left overflow-hidden rounded-2xl bg-[#121215] border border-white/10 p-6 flex flex-col justify-between min-h-[340px] shadow-xl hover:border-[#ff4800]/50 transition-all"
    >
      {/* Background Image / Texture Mask */}
      {hasImage && (
        <div className="absolute inset-0 overflow-hidden">
          <img
            src={thumbnailSrc}
            alt={study.title}
            className="w-full h-full object-cover object-top opacity-35 group-hover:opacity-50 group-hover:scale-105 transition-all duration-500"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#09090b] via-[#09090b]/80 to-transparent" />
        </div>
      )}

      {/* Top Meta Bar */}
      <div className="relative z-10 flex items-center justify-between w-full">
        <span className="px-2.5 py-1 rounded bg-[#18181b] border border-white/10 font-mono text-[10px] text-[#ff4800] uppercase tracking-wider font-semibold">
          {study.category}
        </span>
        <span className="font-mono text-[11px] text-[#71717a]">
          {study.year}
        </span>
      </div>

      {/* Bottom Content Area */}
      <div className="relative z-10 mt-auto pt-6">
        <h3 className="font-heading text-2xl font-bold text-[#fafafa] mb-2 group-hover:text-[#ff4800] transition-colors">
          {study.title}
        </h3>
        <p className="text-[#a1a1aa] text-xs leading-relaxed line-clamp-2 mb-4">
          {study.subtitle || study.overview}
        </p>

        {/* Results Metrics Pills */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {(study.results || []).slice(0, 3).map((r, i) => (
            <span
              key={i}
              className="px-2 py-0.5 rounded bg-[#18181b] border border-white/10 text-[10px] font-mono text-[#fafafa]"
            >
              {r}
            </span>
          ))}
        </div>

        {/* Action Link */}
        <div className="inline-flex items-center gap-1.5 text-xs font-mono text-[#ff4800] font-semibold group-hover:underline">
          <span>EXPLORE CASE STUDY</span>
          <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    </motion.button>
  );
}

interface Project {
  title: string;
  category: string;
  description: string;
  image?: string;
  color: string;
  link?: string;
  featured?: boolean;
  tags?: string[];
  caseStudyId?: string;
  story?: string;
  impact?: { metric: string; label: string; }[];
  tools?: string[];
}

function ProjectCard({
  project,
  onOpen,
}: {
  project: Project;
  onOpen: (p: Project) => void;
}) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.92 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.92 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      whileHover={{ y: -3 }}
      className="group relative bg-[#121215] rounded-xl border border-white/10 p-5 flex flex-col justify-between hover:border-[#ff4800]/40 transition-colors shadow-md"
    >
      <div>
        <div className="flex items-center justify-between mb-3">
          <span className="font-mono text-[10px] text-[#ff4800] uppercase tracking-wider font-semibold">
            {project.category}
          </span>
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#71717a] hover:text-[#ff4800] transition-colors"
              aria-label={`Open ${project.title} live website`}
            >
              <ExternalLink size={14} />
            </a>
          )}
        </div>

        <h3 className="font-heading text-lg font-bold text-[#fafafa] mb-2 group-hover:text-[#ff4800] transition-colors">
          {project.title}
        </h3>
        <p className="text-[#a1a1aa] text-xs leading-relaxed line-clamp-2 mb-4">
          {project.description}
        </p>

        {project.tags && (
          <div className="flex flex-wrap gap-1 mb-4">
            {project.tags.slice(0, 3).map((t) => (
              <span key={t} className="px-2 py-0.5 rounded bg-[#18181b] text-[10px] font-mono text-[#71717a]">
                {t}
              </span>
            ))}
          </div>
        )}
      </div>

      <button
        onClick={() => onOpen(project)}
        className="w-full flex items-center justify-center gap-1.5 py-2 rounded-lg bg-[#18181b] border border-white/10 text-xs font-mono text-[#fafafa] hover:bg-[#ff4800] hover:border-[#ff4800] transition-all"
      >
        <span>PROJECT DETAILS</span>
        <ArrowRight size={12} />
      </button>
    </motion.div>
  );
}

function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  useEffect(() => {
    const lenis = (window as any).lenis;
    if (lenis) lenis.stop();
    document.body.style.overflow = "hidden";
    return () => {
      if (lenis) lenis.start();
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 15 }}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-lg max-h-[85vh] overflow-auto rounded-2xl bg-[#121215] border border-white/15 p-6 lg:p-8"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 rounded-lg bg-[#18181b] border border-white/10 flex items-center justify-center text-[#a1a1aa] hover:text-white"
        >
          <X size={16} />
        </button>

        <span className="font-mono text-[11px] text-[#ff4800] uppercase tracking-wider font-semibold">
          {project.category}
        </span>
        
        <h2 className="font-heading text-2xl font-bold text-[#fafafa] mt-1 mb-3">
          {project.title}
        </h2>

        <p className="text-[#a1a1aa] text-sm leading-relaxed mb-6">
          {project.description}
        </p>

        {project.story && (
          <div className="mb-6 p-4 rounded-xl bg-[#18181b] border border-white/5 text-xs text-[#a1a1aa] leading-relaxed">
            <div className="font-mono text-[10px] text-[#ff4800] uppercase tracking-wider mb-1 font-semibold">
              Project Context & Story
            </div>
            {project.story}
          </div>
        )}

        {project.impact && (
          <div className="grid grid-cols-2 gap-2 mb-6">
            {project.impact.map((stat) => (
              <div key={stat.label} className="p-3 rounded-lg bg-[#18181b] border border-white/10">
                <div className="font-mono text-base font-bold text-[#ff4800]">{stat.metric}</div>
                <div className="font-mono text-[10px] text-[#71717a]">{stat.label}</div>
              </div>
            ))}
          </div>
        )}

        {project.tools && (
          <div className="mb-6">
            <div className="font-mono text-[10px] text-[#71717a] uppercase tracking-wider mb-2">
              Tools & Technologies:
            </div>
            <div className="flex flex-wrap gap-1.5">
              {project.tools.map((t) => (
                <span key={t} className="px-2.5 py-1 rounded bg-[#18181b] border border-white/10 text-xs font-mono text-[#a1a1aa]">
                  {t}
                </span>
              ))}
            </div>
          </div>
        )}

        {project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#ff4800] text-white text-xs font-mono font-bold hover:bg-[#e03e00] transition-colors"
          >
            <span>LAUNCH LIVE BUILD</span>
            <ExternalLink size={14} />
          </a>
        )}
      </motion.div>
    </motion.div>
  );
}

const allCategories = portfolioCategories; // ["All", "Web", "Graphics", "Social Media"]

export default function Work() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedStudy, setSelectedStudy] = useState<CaseStudy | null>(null);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Featured case studies (Web/dev projects) are shown as the top Bento
  // cards; the grid below holds the remaining selected work so nothing
  // repeats. The filter drives BOTH groups coherently:
  //   "All"                  → featured row + full grid
  //   "Web"                  → featured row only (the dev projects)
  //   "Graphics"/"Social Media" → grid only, filtered
  const gridProjects = portfolioProjects.filter((p) => !p.caseStudyId);
  const showFeatured = activeCategory === "All" || activeCategory === "Web";

  const filtered =
    activeCategory === "All"
      ? gridProjects
      : gridProjects.filter((p) => p.category === activeCategory);

  return (
    <section id="work" className="py-20 lg:py-28 relative overflow-hidden bg-[#09090b]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        
        <SectionHeader
          badge="PORTFOLIO ARCHITECTURE"
          title="Featured Case Studies & Projects"
          description="High-performance web apps, luxury brand identities, and product platforms engineered for real businesses."
        />

        {/* Featured Case Studies — shown for "All" & "Web" filters */}
        <AnimatePresence initial={false}>
          {showFeatured && (
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="grid md:grid-cols-3 gap-6 mb-16"
            >
              {caseStudies.map((study) => (
                <BentoCard
                  key={study.id}
                  study={study}
                  onClick={() => setSelectedStudy(study)}
                />
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Category Filters */}
        <Reveal delay={0.15}>
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {allCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-lg text-xs font-mono transition-all ${
                  activeCategory === cat
                    ? "bg-[#ff4800] text-white font-bold"
                    : "bg-[#121215] border border-white/10 text-[#a1a1aa] hover:text-[#fafafa]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </Reveal>

        {/* Project Cards Grid */}
        {filtered.length > 0 && (
          <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            <AnimatePresence mode="popLayout">
              {filtered.map((project) => (
                <ProjectCard
                  key={project.title}
                  project={project}
                  onOpen={setSelectedProject}
                />
              ))}
            </AnimatePresence>
          </motion.div>
        )}

        {/* Empty state — only when no featured row AND no grid results */}
        {!showFeatured && filtered.length === 0 && (
          <div className="text-center py-16 font-mono text-sm text-[#71717a]">
            No projects in this category yet.
          </div>
        )}

      </div>

      {/* Case Study Deep Dive Modal */}
      {selectedStudy && (
        <Suspense fallback={null}>
          <CaseStudyModal
            study={selectedStudy}
            onClose={() => setSelectedStudy(null)}
          />
        </Suspense>
      )}

      {/* Quick Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
