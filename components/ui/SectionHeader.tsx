import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

type SectionHeaderProps = {
  badge: string;
  title: string;
  description?: string;
};

export default function SectionHeader({ badge, title, description }: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }}
      className="text-center mb-10 lg:mb-12"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent-cyan/[0.06] border border-accent-cyan/15 mb-3"
      >
        <Sparkles size={12} className="text-accent-cyan" />
        <span className="text-[10px] font-medium tracking-wider text-accent-cyan uppercase">
          {badge}
        </span>
      </motion.div>
      <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-text-primary gradient-text-shimmer">
        {title}
      </h2>
      {description && (
        <p className="text-text-secondary text-sm mt-3 max-w-2xl mx-auto">
          {description}
        </p>
      )}
      <div className="section-divider mt-4" />
    </motion.div>
  );
}
