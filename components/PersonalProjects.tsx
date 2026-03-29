import { motion } from "framer-motion";
import { Sparkles, ArrowUpRight, Zap, Instagram } from "lucide-react";
import { personalProjects } from "../data/content";
import TiltCard from "./TiltCard";

export default function PersonalProjects() {
  return (
    <section id="personal" className="py-24 lg:py-32 relative overflow-hidden">
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] rounded-full bg-accent-cyan/[0.04] blur-[150px] animate-orb-1" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] rounded-full bg-accent-violet/[0.04] blur-[150px] animate-orb-2" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-violet/10 border border-accent-violet/20 mb-6">
            <Zap size={14} className="text-accent-violet" />
            <span className="text-xs font-medium tracking-wider text-accent-violet uppercase">
              Personal Creative Work
            </span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-text-primary mb-4">
            Creative Platforms
          </h2>
          <div className="section-divider" />
          <p className="text-text-secondary text-base max-w-2xl mx-auto mt-6">
            Beyond client work, I run two creative platforms that explore the edges of visual storytelling — one powered by AI, the other by raw emotion.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {personalProjects.map((project, i) => (
            <motion.a
              key={project.name}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="group relative block"
            >
              <TiltCard>
                <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${project.gradient} blur-xl opacity-50 group-hover:opacity-100 transition-opacity duration-500`} />

                <div className="relative bg-bg-card rounded-3xl p-8 lg:p-10 border border-border-subtle overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 rounded-full blur-[80px] opacity-30 group-hover:opacity-50 transition-opacity duration-500"
                    style={{ backgroundColor: project.accent }}
                  />

                  <div className="absolute inset-0 bg-gradient-to-br from-transparent to-transparent group-hover:from-white/[0.02] group-hover:to-transparent transition-all duration-500" />

                  <div className="relative">
                    <div className="flex items-start justify-between mb-6">
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <motion.div
                            animate={{ rotate: [0, 360] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                          >
                            <Sparkles size={16} style={{ color: project.accent }} />
                          </motion.div>
                          <span className="text-xs font-medium tracking-widest uppercase" style={{ color: project.accent }}>
                            {project.tagline}
                          </span>
                        </div>
                        <h3 className="font-heading text-2xl lg:text-3xl font-bold text-text-primary">
                          {project.name}
                        </h3>
                      </div>
                      <motion.div
                        whileHover={{ x: 4, y: -4 }}
                        className="w-10 h-10 rounded-xl flex items-center justify-center border border-border-subtle group-hover:border-transparent transition-all duration-300"
                        style={{ backgroundColor: `${project.accent}10` }}
                      >
                        <ArrowUpRight size={18} style={{ color: project.accent }} />
                      </motion.div>
                    </div>

                    <p className="text-text-secondary text-sm leading-relaxed mb-6">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {project.highlights.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1.5 rounded-lg text-xs font-medium border border-border-subtle bg-bg-elevated text-text-muted"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div
                      className="mt-8 h-px w-full"
                      style={{
                        background: `linear-gradient(90deg, ${project.accent}30, transparent)`,
                      }}
                    />

                    <div className="mt-6 flex items-center gap-3">
                      <Instagram size={14} style={{ color: project.accent }} />
                      <span className="text-sm font-medium" style={{ color: project.accent }}>
                        {project.linkLabel}
                      </span>
                      <ArrowUpRight size={14} style={{ color: project.accent }} />
                    </div>
                  </div>
                </div>
              </TiltCard>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
