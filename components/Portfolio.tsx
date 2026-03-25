import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Eye, Sparkles, Star } from "lucide-react";
import { portfolioCategories, portfolioProjects } from "../data/content";

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered =
    activeCategory === "All"
      ? portfolioProjects
      : portfolioProjects.filter((p) => p.category === activeCategory);

  return (
    <section id="portfolio" className="py-24 lg:py-32 relative bg-bg-surface/50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-accent-cyan text-sm font-medium tracking-widest uppercase mb-3">
            Selected works
          </p>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-text-primary mb-4">
            Portfolio
          </h2>
          <div className="section-divider" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {portfolioCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
                activeCategory === cat
                  ? "bg-gradient-to-r from-accent-cyan to-accent-violet text-bg-primary shadow-lg shadow-accent-cyan/20"
                  : "bg-bg-card text-text-secondary hover:text-text-primary border border-border-subtle hover:border-accent-cyan/30"
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
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
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  className={`group relative bg-bg-card rounded-2xl overflow-hidden card-hover ${
                    project.featured
                      ? "border-accent-cyan/30 shadow-lg shadow-accent-cyan/5"
                      : "border border-border-subtle"
                  }`}
                >
                  {project.featured && (
                    <div className="absolute top-3 right-3 z-10 flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-bg-primary/80 backdrop-blur-sm border border-accent-cyan/30">
                      <Star size={12} className="text-accent-cyan fill-accent-cyan" />
                      <span className="text-[10px] font-semibold tracking-wider text-accent-cyan uppercase">
                        Featured
                      </span>
                    </div>
                  )}

                  <Wrapper {...wrapperProps} className="block">
                    <div className={`aspect-[4/3] bg-gradient-to-br ${project.color} relative flex items-center justify-center`}>
                      <div className="absolute inset-0 bg-gradient-to-br from-accent-cyan/5 to-accent-violet/5" />
                      <div className="relative text-center p-6">
                        <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-bg-card/80 border flex items-center justify-center backdrop-blur-sm ${
                          project.featured ? "border-accent-cyan/40" : "border-border-subtle"
                        }`}>
                          {project.featured ? (
                            <Sparkles size={24} className="text-accent-cyan" />
                          ) : (
                            <Eye size={24} className="text-accent-cyan" />
                          )}
                        </div>
                        <span className="text-xs font-medium tracking-wider text-accent-cyan/70 uppercase">
                          {project.category}
                        </span>
                      </div>

                      <div className="absolute inset-0 bg-bg-primary/80 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <div className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-accent-cyan to-accent-violet text-bg-primary text-sm font-semibold transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                          <ExternalLink size={14} />
                          {project.link ? "View Live" : "View Project"}
                        </div>
                      </div>
                    </div>
                  </Wrapper>

                  <div className="p-5">
                    <h3 className={`font-heading text-base font-semibold mb-2 transition-colors ${
                      project.featured
                        ? "text-text-primary group-hover:text-accent-cyan"
                        : "text-text-primary group-hover:text-accent-cyan"
                    }`}>
                      {project.title}
                    </h3>
                    <p className="text-text-muted text-sm leading-relaxed line-clamp-2">
                      {project.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
