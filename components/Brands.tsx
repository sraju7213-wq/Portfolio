import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { brands } from "../data/content";

export default function Brands() {
  const doubled = [...brands, ...brands];

  return (
    <section id="brands" className="relative py-24 px-6 overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] rounded-full bg-accent-cyan/5 blur-[180px]" />
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] rounded-full bg-accent-violet/5 blur-[180px]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-12 h-[1px] bg-gradient-to-r from-transparent to-accent-cyan" />
            <span className="text-xs font-medium tracking-[0.2em] uppercase text-accent-cyan">
              Brands & Projects
            </span>
            <div className="w-12 h-[1px] bg-gradient-to-r from-accent-cyan to-transparent" />
          </div>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-text-primary mb-4">
            Brands & Projects
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto leading-relaxed">
            Creative direction and digital presence for a diverse portfolio — from weddings and hospitality to exports and wellness.
          </p>
        </motion.div>

        {/* Marquee carousel */}
        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-bg-primary to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-bg-primary to-transparent z-10 pointer-events-none" />

          <div className="overflow-hidden">
            <motion.div
              animate={{ x: ["0%", "-50%"] }}
              transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
              className="flex gap-6 w-max"
            >
              {doubled.map((brand, index) => {
                const Icon = brand.icon;
                return (
                  <motion.div
                    key={`${brand.name}-${index}`}
                    whileHover={{ scale: 1.05, y: -4 }}
                    transition={{ type: "spring", stiffness: 200, damping: 15 }}
                    className="group relative flex-shrink-0 w-80"
                  >
                    <div className="glass-card-premium rounded-2xl p-6 border-glow h-full relative overflow-hidden">
                      {/* Hover radial distortion */}
                      <motion.div
                        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                        style={{
                          background: `radial-gradient(400px circle at 50% 50%, ${brand.accent}08, transparent 60%)`,
                        }}
                      />

                      <div className="flex items-start gap-4 mb-4 relative z-10">
                        <motion.div
                          whileHover={{ rotate: [0, -10, 10, 0] }}
                          transition={{ duration: 0.4 }}
                          className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-accent-cyan/20 to-accent-violet/20 border border-accent-cyan/30 flex items-center justify-center"
                        >
                          <Icon size={24} style={{ color: brand.accent }} />
                        </motion.div>
                        <div className="flex-1 min-w-0">
                          <h3 className="font-heading text-lg font-bold text-text-primary mb-1 truncate">
                            {brand.name}
                          </h3>
                          <p className="text-xs text-text-muted line-clamp-2">
                            {brand.description}
                          </p>
                        </div>
                      </div>

                      {brand.links.length > 0 && (
                        <div className="flex flex-wrap gap-2 relative z-10">
                          {brand.links.map((link) => (
                            <a
                              key={link.label}
                              href={link.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1 px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-xs text-text-muted hover:text-accent-cyan hover:border-accent-cyan/30 transition-all duration-300"
                            >
                              <span>{link.label}</span>
                              <ExternalLink size={10} />
                            </a>
                          ))}
                        </div>
                      )}
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
