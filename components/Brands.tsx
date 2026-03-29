import { motion, useReducedMotion } from "framer-motion";
import { ExternalLink, Instagram } from "lucide-react";
import { brands } from "../data/content";
import { useEffect, useState } from "react";

export default function Brands() {
  const [isMobile, setIsMobile] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: prefersReducedMotion ? 0 : 0.4,
        delay: prefersReducedMotion ? 0 : i * 0.05,
      },
    }),
  };

  const doubled = [...brands, ...brands];

  return (
    <section id="brands" className="py-24 lg:py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: prefersReducedMotion ? 0 : 0.6 }}
          className="text-center"
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
      </div>

      <div className="relative hidden lg:block">
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-bg-primary to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-bg-primary to-transparent z-10 pointer-events-none" />

        <div className={`marquee-track ${prefersReducedMotion ? "animate-pause" : ""}`}>
          {doubled.map((brand, i) => (
            <div
              key={`${brand.name}-${i}`}
              className="flex-shrink-0 w-[280px] sm:w-[300px] md:w-[340px] mx-3"
            >
              <motion.div
                className="group relative bg-bg-card rounded-2xl p-6 border border-border-subtle card-hover overflow-hidden h-full"
                whileHover={prefersReducedMotion ? {} : { y: -4 }}
                transition={{ duration: 0.3 }}
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
                  <p className="text-text-muted text-sm leading-relaxed line-clamp-2">
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
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 lg:hidden">
        {brands.map((brand, i) => (
          <motion.div
            key={brand.name}
            custom={i}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-30px" }}
            className="group relative bg-bg-card rounded-2xl p-5 sm:p-6 border border-border-subtle overflow-hidden"
          >
            <div className={`absolute inset-0 bg-gradient-to-br ${brand.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

            <div className="relative flex items-start gap-4">
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center border border-border-subtle group-hover:border-transparent transition-colors duration-300 flex-shrink-0"
                style={{ backgroundColor: `${brand.accent}10` }}
              >
                <brand.icon size={20} style={{ color: brand.accent }} />
              </div>

              <div className="flex-1 min-w-0">
                <h3 className="font-heading text-sm sm:text-base font-semibold text-text-primary mb-1 group-hover:text-white transition-colors truncate">
                  {brand.name}
                </h3>
                <p className="text-text-muted text-xs sm:text-sm leading-relaxed line-clamp-2">
                  {brand.description}
                </p>
              </div>
            </div>

            {brand.links.length > 0 && (
              <div className="mt-3 flex flex-wrap gap-1.5">
                {brand.links.map((link) => (
                  <a
                    key={link.url}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 px-2 py-1 rounded-md text-[10px] sm:text-xs font-medium border border-border-subtle bg-bg-elevated text-text-secondary hover:text-accent-cyan hover:border-accent-cyan/30 transition-all duration-200"
                  >
                    {link.label === "Instagram" ? (
                      <Instagram size={10} />
                    ) : (
                      <ExternalLink size={10} />
                    )}
                    <span className="hidden sm:inline">{link.label}</span>
                  </a>
                ))}
              </div>
            )}

            <div
              className="mt-3 h-0.5 w-0 group-hover:w-8 rounded-full transition-all duration-300"
              style={{ backgroundColor: brand.accent }}
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
