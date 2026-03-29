import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useRef } from "react";
import { skills } from "../data/content";

function AnimatedCounter({ value, duration = 1.5 }: { value: number; duration?: number }) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => Math.round(v));
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const controls = animate(count, value, { duration, ease: "easeOut" });
    return controls.stop;
  }, [value, duration, count]);

  useEffect(() => {
    const unsubscribe = rounded.on("change", (v) => {
      if (ref.current) ref.current.textContent = `${v}%`;
    });
    return unsubscribe;
  }, [rounded]);

  return <span ref={ref}>0%</span>;
}

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
              className="bg-bg-card rounded-2xl p-6 lg:p-8 border border-border-subtle card-hover relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-accent-cyan/[0.03] blur-[60px] group-hover:bg-accent-cyan/[0.06] transition-colors duration-500" />

              <div className="relative">
                <div className="flex items-center gap-3 mb-6">
                  <motion.div
                    whileHover={{ rotate: 15, scale: 1.1 }}
                    className="w-10 h-10 rounded-xl bg-gradient-to-br from-accent-cyan/10 to-accent-violet/10 border border-accent-cyan/20 flex items-center justify-center"
                  >
                    <group.icon size={18} className="text-accent-cyan" />
                  </motion.div>
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
                        <span className="text-xs text-accent-cyan/70 font-medium tabular-nums">
                          <AnimatedCounter value={skill.level} />
                        </span>
                      </div>
                      <div className="h-1.5 bg-bg-primary rounded-full overflow-hidden relative">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: gi * 0.1 + si * 0.05 + 0.2, ease: [0.22, 1, 0.36, 1] }}
                          className="h-full rounded-full bg-gradient-to-r from-accent-cyan to-accent-violet relative"
                        >
                          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-white shadow-lg shadow-accent-cyan/30" />
                        </motion.div>
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: gi * 0.1 + si * 0.05 + 0.2, ease: [0.22, 1, 0.36, 1] }}
                          className="absolute top-0 left-0 h-full rounded-full bg-gradient-to-r from-accent-cyan/20 to-accent-violet/20 blur-sm"
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
