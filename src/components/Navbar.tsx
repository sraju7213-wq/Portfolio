import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { navLinks } from "../data/content";

const sections = navLinks.map((link) => link.href.replace("#", ""));

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 40);
    const scrollPos = window.scrollY + 200;
    let active = "";

    for (const id of sections) {
      const el = document.getElementById(id);
      if (el && el.offsetTop <= scrollPos) {
        active = id;
      }
    }
    setActiveSection(active);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#09090b]/85 backdrop-blur-md border-b border-white/[0.08] py-3.5"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo & Availability */}
          <a
            href="#"
            className="flex items-center gap-3 group focus:outline-none"
            aria-label="RAJU SHEIKH Home"
          >
            <div className="w-9 h-9 rounded-lg bg-[#18181b] border border-white/10 flex items-center justify-center font-mono font-bold text-sm text-[#fafafa] group-hover:border-[#ff4800] transition-colors">
              RS
            </div>
            <div className="flex flex-col">
              <span className="font-heading font-bold text-base tracking-tight text-[#fafafa] group-hover:text-[#ff4800] transition-colors">
                RAJU SHEIKH
              </span>
              <div className="flex items-center gap-1.5 text-[11px] font-mono text-[#a1a1aa]">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                <span>Available for Select Work</span>
              </div>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-1 bg-[#121215]/80 p-1.5 rounded-full border border-white/[0.08] backdrop-blur-md">
            {navLinks.map((link) => {
              const sectionName = link.href.replace("#", "");
              const isActive = activeSection === sectionName;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className={`px-4 py-1.5 rounded-full text-xs font-mono tracking-wide transition-all ${
                    isActive
                      ? "bg-[#27272a] text-[#fafafa] font-semibold border border-white/10"
                      : "text-[#a1a1aa] hover:text-[#fafafa]"
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          {/* CTA & Mobile Toggle */}
          <div className="flex items-center gap-3">
            <a
              href="#contact"
              className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#fafafa] text-[#09090b] text-xs font-bold font-mono hover:bg-[#ff4800] hover:text-[#fafafa] transition-all duration-200"
            >
              <span>GET IN TOUCH</span>
              <ArrowUpRight size={13} />
            </a>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden p-2.5 rounded-lg bg-[#18181b] border border-white/10 text-[#fafafa] focus:outline-none"
              aria-label="Toggle Navigation"
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden border-b border-white/10 bg-[#09090b] px-6 py-6"
          >
            <div className="flex flex-col gap-4 font-mono">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-sm text-[#fafafa] hover:text-[#ff4800] py-1 border-b border-white/5"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setMobileOpen(false)}
                className="mt-2 inline-flex items-center justify-center gap-2 py-3 rounded-lg bg-[#ff4800] text-white text-xs font-bold"
              >
                <span>START A PROJECT</span>
                <ArrowUpRight size={14} />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
