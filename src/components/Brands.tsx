import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { brands } from "../data/content";
import SectionHeader from "./ui/SectionHeader";

export default function Brands() {
  return (
    <section id="brands" className="py-20 lg:py-28 relative overflow-hidden bg-[#09090b]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        
        <SectionHeader
          badge="CLIENT ECOSYSTEM"
          title="Brands & Digital Properties"
          description="Creative direction, web engineering, and brand assets for a diverse portfolio across hospitality, rental services, exports, and e-commerce."
        />

        {/* Responsive Matrix Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {brands.map((brand) => {
            const Icon = brand.icon;
            return (
              <motion.div
                key={brand.name}
                whileHover={{ y: -3 }}
                className="group bg-[#121215] border border-white/10 rounded-xl p-6 flex flex-col justify-between hover:border-[#ff4800]/40 transition-all shadow-md"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-lg bg-[#18181b] border border-white/10 flex items-center justify-center text-[#ff4800] group-hover:bg-[#ff4800] group-hover:text-white transition-colors">
                      <Icon size={20} />
                    </div>
                    <span className="font-mono text-[10px] text-[#71717a] uppercase tracking-wider">
                      BRAND PROPERTY
                    </span>
                  </div>

                  <h3 className="font-heading text-xl font-bold text-[#fafafa] mb-2 group-hover:text-[#ff4800] transition-colors">
                    {brand.name}
                  </h3>

                  <p className="text-[#a1a1aa] text-xs leading-relaxed mb-6">
                    {brand.description}
                  </p>
                </div>

                {brand.links.length > 0 && (
                  <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5">
                    {brand.links.map((link) => (
                      <a
                        key={link.label}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-[#18181b] border border-white/10 text-xs font-mono text-[#fafafa] hover:border-[#ff4800] hover:text-[#ff4800] transition-all"
                      >
                        <span>{link.label}</span>
                        <ExternalLink size={11} />
                      </a>
                    ))}
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
