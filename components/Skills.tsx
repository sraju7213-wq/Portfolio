import { motion } from "framer-motion";
import { skills } from "../data/content";

export default function Skills() {
  return (
    <section id="skills" className="py-24 lg:py-32 relative bg-bg-surface/50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-accent-cyan text-sm font-medium tracking-widest uppercase mb-3">
            What I bring to the table
          </p>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-text-primary mb-4">
            Skills & Expertise
          </h2>
          <div className="section-divider" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {skills.map((group, gi) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: gi * 0.1 }}
              className="bg-bg-card rounded-2xl p-6 lg:p-8 border border-border-subtle card-hover"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-accent-cyan/10 to-accent-violet/10 border border-accent-cyan/20 flex items-center justify-center">
                  <group.icon size={18} className="text-accent-cyan" />
                </div>
                <h3 className="font-heading text-lg font-semibold text-text-primary">
                  {group.category}
                </h3>
              </div>

              <div className="space-y-4">
                {group.items.map((skill, si) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: gi * 0.1 + si * 0.05 }}
                  >
                    <div className="flex justify-between items-center mb-1.5">
                      <span className="text-sm text-text-secondary">{skill.name}</span>
                      <span className="text-xs text-text-muted">{skill.level}%</span>
                    </div>
                    <div className="h-1.5 bg-bg-primary rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: gi * 0.1 + si * 0.05 + 0.2, ease: "easeOut" }}
                        className="h-full rounded-full bg-gradient-to-r from-accent-cyan to-accent-violet"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
