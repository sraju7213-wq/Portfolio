import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, ArrowRight, ArrowUpRight, X } from "lucide-react";
import { portfolioCategories, portfolioProjects, caseStudies } from "../data/content";
import type { CaseStudy } from "../data/content";
import SectionHeader from "./ui/SectionHeader";
import Reveal from "./ui/Reveal";
import CaseStudyModal from "./CaseStudyModal";

const accentMap: Record<string, string> = {
  Web: "text-cyan-400",
  Branding: "text-emerald-400",
  Motion: "text-teal-400",
  Graphics: "text-pink-400",
};

function BentoCard({
  study,
  onClick,
}: {
  study: CaseStudy;
  onClick: () => void;
}) {
  const accent = study.accentColor;
  return (
    <motion.button
      onClick={onClick}
      className="group relative text-left overflow-hidden rounded-3xl border border-white/[0.06] bg-bg-surface/50 backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-lg hover:shadow-black/20"
    >
      <div className="relative h-40 md:h-48 overflow-hidden">
        <div className={`absolute inset-0 bg-gradient-to-br ${study.coverGradient}`} />
        <div className="absolute inset-0 bg-gradient-to-t from-bg-primary/80 via-transparent to-transparent" />
        <div className="absolute top-4 right-4 z-10">
          <span
            className="px-3 py-1.5 rounded-lg text-[10px] font-semibold tracking-wider uppercase backdrop-blur-xl"
            style={{ background: `${accent}15`, color: accent, border: `1px solid ${accent}25` }}
          >
            {study.category}
          </span>
        </div>
        <div className="absolute bottom-4 left-6 right-6 z-10">
          <h3 className="font-heading text-xl font-bold text-white mb-1">{study.title}</h3>
          <p className="text-sm text-white/70 line-clamp-1">{study.subtitle}</p>
        </div>
      </div>
      <div className="p-5">
        <p className="text-text-secondary text-sm leading-relaxed line-clamp-2 mb-4">{study.overview || study.story}</p>
        <div className="flex flex-wrap gap-3 mb-4">
          {(study.impact.length > 0 ? study.impact : study.results?.slice(0, 3).map(r => ({ metric: "✓", label: r })) || []).map((stat, i) => (
            <div
              key={i}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs backdrop-blur-sm"
              style={{ background: `${accent}08`, border: `1px solid ${accent}12` }}
            >
              <span className="font-semibold" style={{ color: accent }}>{stat.metric}</span>
              <span className="text-text-muted">{stat.label}</span>
            </div>
          ))}
        </div>
        <div className="flex flex-wrap gap-2">
          {(study.technologies.length > 0 ? study.technologies : [...(study.techStack?.design || []), ...(study.techStack?.development || [])]).slice(0, 4).map((tech) => (
            <span key={tech} className="px-2.5 py-1 rounded-md text-[10px] font-medium text-text-muted bg-white/[0.03] border border-white/[0.06]">
              {tech}
            </span>
          ))}
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
  index,
  onOpen,
}: {
  project: Project;
  index: number;
  onOpen: (p: Project) => void;
}) {
  const accentClass = accentMap[project.category] || "text-cyan-400";
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.4, delay: index * 0.04 }}
      className="group relative bg-bg-card/60 backdrop-blur-sm rounded-xl border border-border-subtle overflow-hidden hover:border-accent-cyan/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-accent-cyan/5"
    >
      <div className="absolute inset-0 bg-grid opacity-20" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-bg-primary/60" />

      <div className="relative p-5">
        <div className="flex items-center gap-2 mb-3">
          <span className={`text-[9px] font-medium tracking-wider uppercase ${accentClass}`}>
            {project.category}
          </span>
          <div className="h-px flex-1 bg-gradient-to-r from-current to-transparent opacity-20" />
        </div>

        <h3 className="font-heading text-base font-semibold text-text-primary mb-1 line-clamp-1 group-hover:text-accent-cyan transition-colors">
          {project.title}
        </h3>
        <p className="text-text-muted text-xs leading-relaxed line-clamp-2 mb-3">
          {project.description}
        </p>

        {project.tags && project.tags.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mb-3">
            {project.tags.slice(0, 3).map((tag) => (
              <span key={tag} className="px-2 py-0.5 text-[9px] rounded-md bg-bg-elevated/50 border border-border-subtle text-text-muted">
                {tag}
              </span>
            ))}
          </div>
        )}

        <div className="flex items-center gap-2">
          <button
            onClick={() => onOpen(project)}
            className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg bg-bg-elevated/80 border border-border-subtle text-xs text-text-secondary hover:text-white hover:border-accent-cyan/30 transition-all"
          >
            Details <ArrowRight size={10} />
          </button>
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-lg bg-gradient-to-br from-accent-cyan to-accent-violet text-bg-primary flex items-center justify-center hover:shadow-lg hover:shadow-accent-cyan/20 transition-all"
            >
              <ExternalLink size={12} />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}

function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  const accentClass = accentMap[project.category] || "text-cyan-400";
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
    >
      <div className="absolute inset-0 bg-bg-primary/80 backdrop-blur-md" />
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        transition={{ type: "spring", bounce: 0.2, duration: 0.5 }}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-lg max-h-[80vh] overflow-auto rounded-2xl glass-heavy border border-border-subtle"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-8 h-8 rounded-full bg-bg-card/80 border border-border-subtle flex items-center justify-center text-text-secondary hover:text-white transition-all"
        >
          <X size={14} />
        </button>
        <div className="p-6 lg:p-8">
          {project.story && (
            <p className="text-text-secondary text-sm leading-relaxed mb-4">{project.story}</p>
          )}
          <span className={`text-[10px] font-medium tracking-wider uppercase ${accentClass}`}>
            {project.category}
          </span>
          <h2 className="font-heading text-xl lg:text-2xl font-bold text-text-primary mt-1 mb-3">
            {project.title}
          </h2>
          <p className="text-text-secondary text-sm leading-relaxed mb-6">
            {project.description}
          </p>
          {project.impact && (
            <div className="flex flex-wrap gap-3 mb-6">
              {project.impact.map((stat) => (
                <div key={stat.label} className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-bg-card border border-border-subtle text-xs">
                  <span className="font-semibold text-accent-cyan">{stat.metric}</span>
                  <span className="text-text-muted">{stat.label}</span>
                </div>
              ))}
            </div>
          )}
          {project.tools && (
            <div className="mb-6">
              <h4 className="text-[10px] font-semibold tracking-wider uppercase text-text-muted mb-2">Tools</h4>
              <div className="flex flex-wrap gap-1.5">
                {project.tools.map((tool) => (
                  <span key={tool} className="px-2.5 py-1 text-[10px] rounded-lg bg-bg-card/80 border border-border-subtle text-text-muted">
                    {tool}
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
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-accent-cyan to-accent-violet text-bg-primary font-semibold text-sm hover:shadow-lg hover:shadow-accent-cyan/20 transition-all"
            >
              <ExternalLink size={14} /> View Project
            </a>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}

const allCategories = ["All", ...portfolioCategories.slice(1)];

export default function Work() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedStudy, setSelectedStudy] = useState<CaseStudy | null>(null);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filtered =
    activeCategory === "All"
      ? portfolioProjects
      : portfolioProjects.filter((p) => p.category === activeCategory);

  return (
    <section id="work" className="py-16 lg:py-20 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full bg-accent-violet/[0.02] blur-[150px]" />
        <div className="absolute inset-0 bg-grid opacity-20" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8">
        <SectionHeader
          badge="Selected Work"
          title="Work"
          description="Brand identities, web platforms, motion content, and AI tools — built for real businesses."
        />

        {/* Case studies bento grid */}
        <Reveal delay={0.1}>
          <div className="grid md:grid-cols-3 gap-4 mb-12">
            <div className="md:col-span-2">
              <BentoCard
                study={caseStudies[0]}
                onClick={() => setSelectedStudy(caseStudies[0])}
              />
            </div>
            <div>
              <BentoCard
                study={caseStudies[1]}
                onClick={() => setSelectedStudy(caseStudies[1])}
              />
            </div>
            <div>
              <BentoCard
                study={caseStudies[3]}
                onClick={() => setSelectedStudy(caseStudies[3])}
              />
            </div>
            <div>
              <BentoCard
                study={caseStudies[4]}
                onClick={() => setSelectedStudy(caseStudies[4])}
              />
            </div>
            <div>
              <BentoCard
                study={caseStudies[5]}
                onClick={() => setSelectedStudy(caseStudies[5])}
              />
            </div>
            <div>
              <BentoCard
                study={caseStudies[2]}
                onClick={() => setSelectedStudy(caseStudies[2])}
              />
            </div>
          </div>
        </Reveal>

        {/* Filter categories */}
        <Reveal delay={0.2}>
          <div className="flex flex-wrap justify-center gap-1.5 mb-8">
            {allCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  activeCategory === cat
                    ? "bg-gradient-to-r from-accent-cyan to-accent-violet text-bg-primary"
                    : "bg-bg-card/60 border border-border-subtle text-text-muted hover:text-text-primary"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </Reveal>

        {/* Project grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <ProjectCard
                key={project.title}
                project={project}
                index={i}
                onOpen={setSelectedProject}
              />
            ))}
          </AnimatePresence>
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-12">
            <p className="text-text-muted text-sm">No projects found.</p>
          </div>
        )}
      </div>

      {/* Modals */}
      {selectedStudy && (
        <CaseStudyModal
          study={selectedStudy}
          onClose={() => setSelectedStudy(null)}
        />
      )}
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
