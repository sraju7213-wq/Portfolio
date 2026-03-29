import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import MagneticButton from "./MagneticButton";

export default function CTABanner() {
  return (
    <section className="py-20 lg:py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-bg-surface/50 via-accent-cyan/[0.03] to-bg-surface/50" />
      
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] rounded-full bg-accent-cyan/[0.05] blur-[100px]" />
      
      <div className="absolute inset-0 bg-grid opacity-20" />

      <div className="max-w-4xl mx-auto px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="relative text-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-violet/10 border border-accent-violet/20 mb-8"
          >
            <Sparkles size={14} className="text-accent-violet" />
            <span className="text-accent-violet text-xs font-medium tracking-wider uppercase">
              Let's Work Together
            </span>
          </motion.div>

          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-text-primary mb-6 leading-tight">
            Have a project in mind?
            <br />
            <span className="gradient-text">Let's create something amazing.</span>
          </h2>

          <p className="text-text-secondary text-base sm:text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
            Whether you need a stunning website, captivating visuals, or a complete brand identity — 
            I'm here to bring your vision to life with creativity and precision.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <MagneticButton href="#contact" className="btn-primary group">
              <span className="flex items-center gap-2">
                Get In Touch
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
              </span>
            </MagneticButton>
            <MagneticButton href="#portfolio" className="btn-secondary">
              <span>View My Work</span>
            </MagneticButton>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-8 text-text-muted text-sm"
          >
            Typically responds within 24 hours
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
