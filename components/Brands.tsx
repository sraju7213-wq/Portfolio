import { motion } from "framer-motion";
import { ExternalLink, Globe, Instagram } from "lucide-react";
import { brands } from "../data/content";

export default function Brands() {
  return (
    <section id="brands" className="py-24 lg:py-32 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-accent-cyan text-sm font-medium tracking-widest uppercase mb-3">
            Under my creative direction
          </p>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-text-primary mb-4">
            Brands I Manage
          </h2>
          <div className="section-divider" />
          <p className="text-text-secondary text-base max-w-2xl mx-auto mt-6">
            From export and hospitality to wellness and e-commerce — I design and direct the visual identity for a diverse portfolio of brands.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {brands.map((brand, i) => (
            <motion.div
              key={brand.name}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.45, delay: i * 0.06 }}
              className="group relative bg-bg-card rounded-2xl p-6 border border-border-subtle card-hover overflow-hidden"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${brand.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

              <div className="relative">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 border border-border-subtle group-hover:border-transparent transition-colors duration-300"
                  style={{ backgroundColor: `${brand.accent}10` }}
                >
                  <brand.icon size={22} style={{ color: brand.accent }} />
                </div>

                <h3 className="font-heading text-base font-semibold text-text-primary mb-2 group-hover:text-white transition-colors">
                  {brand.name}
                </h3>
                <p className="text-text-muted text-sm leading-relaxed">
                  {brand.description}
                </p>

                {brand.links.length > 0 && (
                  <div className="mt-4 flex flex-wrap gap-2">
                    {brand.links.map((link) => (
                      <a
                        key={link.url}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium border border-border-subtle bg-bg-elevated text-text-secondary hover:text-accent-cyan hover:border-accent-cyan/30 transition-all duration-300"
                      >
                        {link.label === "Instagram" ? (
                          <Instagram size={12} />
                        ) : (
                          <ExternalLink size={12} />
                        )}
                        {link.label}
                      </a>
                    ))}
                  </div>
                )}

                <div
                  className="mt-4 h-0.5 w-0 group-hover:w-12 rounded-full transition-all duration-500"
                  style={{ backgroundColor: brand.accent }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
