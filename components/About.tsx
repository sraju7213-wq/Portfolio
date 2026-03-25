import { motion } from "framer-motion";
import { User } from "lucide-react";
import { about } from "../data/content";

export default function About() {
  return (
    <section id="about" className="py-24 lg:py-32 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-accent-cyan text-sm font-medium tracking-widest uppercase mb-3">
            Get to know me
          </p>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-text-primary mb-4">
            About Me
          </h2>
          <div className="section-divider" />
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2"
          >
            <div className="relative w-48 h-48 sm:w-56 sm:h-56 mx-auto lg:mx-0">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-accent-cyan/20 to-accent-violet/20 blur-xl" />
              <div className="relative w-full h-full rounded-2xl gradient-border bg-bg-surface overflow-hidden">
                <img
                  src="https://ik.imagekit.io/ceh1i98cy/dsfsd.jpg"
                  alt="RAJU SHEIKH"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mt-8 max-w-sm mx-auto lg:mx-0">
              {about.stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
                  className="bg-bg-card rounded-xl p-4 border border-border-subtle text-center card-hover"
                >
                  <div className="font-heading text-2xl font-bold gradient-text">
                    {stat.value}
                  </div>
                  <div className="text-text-muted text-xs mt-1">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-3"
          >
            <div className="space-y-5 text-text-secondary leading-relaxed">
              {about.bio.split("\n\n").map((paragraph, i) => (
                <p key={i} className="text-sm sm:text-base">
                  {paragraph}
                </p>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
