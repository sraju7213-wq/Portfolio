import { motion } from "framer-motion";
import { Award, Briefcase, Zap, Target, Clock, Star } from "lucide-react";

const achievements = [
  {
    icon: Briefcase,
    value: "6+",
    label: "Years Experience",
    description: "In graphic design & web development",
    color: "from-cyan-500 to-blue-500",
  },
  {
    icon: Zap,
    value: "200+",
    label: "Projects Completed",
    description: "Across all brands and clients",
    color: "from-violet-500 to-purple-500",
  },
  {
    icon: Target,
    value: "8+",
    label: "Brands Managed",
    description: "Under Ms Cottage umbrella",
    color: "from-pink-500 to-rose-500",
  },
  {
    icon: Star,
    value: "AI",
    label: "Powered Workflow",
    description: "Using cutting-edge AI tools",
    color: "from-emerald-500 to-teal-500",
  },
];

const badges = [
  { label: "Adobe Certified", emoji: "🎨" },
  { label: "React Developer", emoji: "⚛️" },
  { label: "UI/UX Enthusiast", emoji: "✨" },
  { label: "AI Art Creator", emoji: "🤖" },
];

export default function Achievements() {
  return (
    <section className="py-16 lg:py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent-cyan/[0.02] to-transparent" />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6"
        >
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.03, y: -4 }}
              className="relative bg-bg-card rounded-xl p-5 border border-border-subtle group overflow-hidden"
            >
              <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${achievement.color}`} />
              
              <div className="absolute -right-4 -bottom-4 w-20 h-20 rounded-full bg-gradient-to-br from-white/5 to-transparent blur-xl" />
              
              <div className="relative flex items-start gap-4">
                <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${achievement.color} flex items-center justify-center flex-shrink-0`}>
                  <achievement.icon size={18} className="text-white" />
                </div>
                
                <div className="flex-1 min-w-0">
                  <div className="flex items-baseline gap-1">
                    <span className="font-heading text-2xl font-bold gradient-text">
                      {achievement.value}
                    </span>
                  </div>
                  <p className="text-text-primary text-sm font-medium mt-0.5">
                    {achievement.label}
                  </p>
                  <p className="text-text-muted text-xs mt-1">
                    {achievement.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-8 flex flex-wrap justify-center gap-3"
        >
          {badges.map((badge, index) => (
            <motion.div
              key={badge.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="px-4 py-2 rounded-full bg-bg-surface border border-border-subtle flex items-center gap-2 group cursor-default"
            >
              <span className="text-base group-hover:scale-110 transition-transform duration-300">
                {badge.emoji}
              </span>
              <span className="text-text-secondary text-sm font-medium">
                {badge.label}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
