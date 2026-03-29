import { motion } from "framer-motion";
import { education } from "../data/content";

export default function Education() {
  return (
    <section id="education" className="py-24 lg:py-32 relative">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-accent-cyan text-sm font-medium tracking-widest uppercase mb-3">
            Academic background
          </p>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-text-primary mb-4">
            Education
          </h2>
          <div className="section-divider" />
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6">
          {education.map((edu, i) => (
            <motion.div
              key={edu.degree}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              whileHover={{ y: -6 }}
              className="bg-bg-card rounded-2xl p-6 lg:p-8 border border-border-subtle text-center relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-accent-cyan/[0.03] to-accent-violet/[0.03] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative">
                <motion.div
                  whileHover={{ rotate: 10, scale: 1.1 }}
                  className="w-14 h-14 mx-auto mb-5 rounded-2xl bg-gradient-to-br from-accent-cyan/10 to-accent-violet/10 border border-accent-cyan/20 flex items-center justify-center"
                >
                  <edu.icon size={24} className="text-accent-cyan" />
                </motion.div>
                <h3 className="font-heading text-lg font-semibold text-text-primary mb-2">
                  {edu.degree}
                </h3>
                <p className="text-text-secondary text-sm mb-3">
                  {edu.institution}
                </p>
                <span className="inline-block px-3 py-1 rounded-lg bg-bg-elevated border border-border-subtle text-text-muted text-xs font-medium">
                  {edu.year}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
