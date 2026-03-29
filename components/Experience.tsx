import { motion } from "framer-motion";
import { Briefcase, MapPin, CheckCircle2 } from "lucide-react";
import { experience } from "../data/content";

export default function Experience() {
  return (
    <section id="experience" className="py-24 lg:py-32 relative">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-accent-cyan text-sm font-medium tracking-widest uppercase mb-3">
            My professional journey
          </p>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-text-primary mb-4">
            Experience
          </h2>
          <div className="section-divider" />
        </motion.div>

        <div className="relative">
          <div className="absolute left-6 sm:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-accent-cyan/50 via-accent-violet/30 to-transparent" />

          <div className="space-y-12">
            {experience.map((exp, i) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="relative pl-14 sm:pl-20"
              >
                <motion.div
                  whileInView={{ scale: [0, 1.2, 1] }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.15 }}
                  className="absolute left-3 sm:left-6 top-2 w-4 h-4 rounded-full bg-bg-card border-2 border-accent-cyan shadow-lg shadow-accent-cyan/20"
                />

                <div className="bg-bg-card rounded-2xl p-6 lg:p-8 border border-border-subtle card-hover relative overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-br from-accent-cyan/[0.02] to-accent-violet/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute top-0 left-0 w-1 h-0 group-hover:h-full bg-gradient-to-b from-accent-cyan to-accent-violet transition-all duration-500" />
                  <div className="absolute -right-8 -bottom-8 w-24 h-24 rounded-full bg-accent-cyan/[0.03] blur-2xl group-hover:bg-accent-cyan/[0.06] transition-all duration-500" />

                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-4">
                    <div>
                      <h3 className="font-heading text-lg font-semibold text-text-primary">
                        {exp.role}
                      </h3>
                      <div className="flex items-center gap-2 mt-1">
                        <Briefcase size={14} className="text-accent-cyan" />
                        <span className="text-sm text-accent-cyan font-medium">
                          {exp.company}
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 text-text-muted text-xs">
                      <span className="px-3 py-1.5 rounded-lg bg-bg-elevated border border-border-subtle font-medium">
                        {exp.period}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin size={12} />
                        {exp.location}
                      </span>
                    </div>
                  </div>

                  <ul className="space-y-2.5">
                    {exp.highlights.map((h, hi) => (
                      <motion.li
                        key={hi}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: i * 0.15 + hi * 0.05 }}
                        className="flex items-start gap-2.5 text-sm text-text-secondary leading-relaxed"
                      >
                        <CheckCircle2 size={14} className="text-accent-violet mt-0.5 shrink-0" />
                        <span>{h}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
