import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { navLinks } from "../data/content";

const sections = navLinks.map((link) => link.href.replace("#", ""));

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const navRef = useRef<HTMLElement>(null);
  const offsetsRef = useRef<Map<string, number>>(new Map());
  const activeRef = useRef(activeSection);

  activeRef.current = activeSection;

  const buildOffsets = useCallback(() => {
    const map = new Map<string, number>();
    for (const id of sections) {
      const el = document.getElementById(id);
      if (el) map.set(id, el.offsetTop);
    }
    offsetsRef.current = map;
  }, []);

  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 50);

    const scrollPos = window.scrollY + 200;
    let active = "";

    for (const id of sections) {
      const top = offsetsRef.current.get(id);
      if (top !== undefined && top <= scrollPos) {
        active = id;
      }
    }

    if (active !== activeRef.current) {
      setActiveSection(active);
    }
  }, []);

  useEffect(() => {
    buildOffsets();
    const handleResize = () => buildOffsets();
    window.addEventListener("resize", handleResize);

    let ticking = false;
    const handleScrollEvent = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScrollEvent, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScrollEvent);
      window.removeEventListener("resize", handleResize);
    };
  }, [buildOffsets, handleScroll]);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (navRef.current) {
      const rect = navRef.current.getBoundingClientRect();
      setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    }
  };

  const handleNavClick = () => {
    setMobileOpen(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") {
      setMobileOpen(false);
    }
  };

  return (
    <motion.nav
      ref={navRef}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut", delay: 2 }}
      onMouseMove={handleMouseMove}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "glass-premium shadow-2xl shadow-black/30"
          : "bg-transparent"
      }`}
      role="navigation"
      aria-label="Main navigation"
    >
      <div
        className="absolute inset-0 pointer-events-none opacity-0 transition-opacity duration-500"
        style={{
          background: `radial-gradient(400px circle at ${mousePos.x}px ${mousePos.y}px, rgba(0, 229, 255, 0.04), transparent 50%)`,
          opacity: scrolled ? 1 : 0,
        }}
      />

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent-cyan/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-18 lg:h-22">
          <motion.a
            href="#"
            className="font-heading text-xl font-bold tracking-tight text-white focus:outline-none focus:ring-2 focus:ring-accent-cyan/50 rounded-lg relative group"
            aria-label="RAJU SHEIKH - Back to top"
            whileHover={{ scale: 1.02 }}
          >
            <span className="gradient-text">RAJU</span>
            <span className="text-text-muted font-light tracking-wider text-xs ml-2 uppercase">Sheikh</span>
            <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-gradient-to-r from-accent-cyan via-accent-violet to-accent-cyan group-hover:w-full transition-all duration-500 rounded-full" />
          </motion.a>

          <div className="hidden md:flex items-center gap-2 relative" role="menubar">
            {navLinks.map((link, i) => {
              const sectionName = link.href.replace("#", "");
              const isActive = activeSection === sectionName;

              return (
                <motion.a
                  key={link.href}
                  href={link.href}
                  role="menuitem"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 2.2 + i * 0.08 }}
                  className={`relative px-5 py-2.5 text-sm font-medium transition-all duration-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent-cyan/50 ${
                    isActive
                      ? "text-white"
                      : "text-text-secondary hover:text-white"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute inset-0 glass-card border border-accent-cyan/20"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.5 }}
                    />
                  )}
                  <span className="relative z-10">{link.label}</span>
                </motion.a>
              );
            })}
          </div>

          <motion.a
            href="#contact"
            role="menuitem"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.8 }}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="hidden md:inline-flex items-center gap-2 justify-center px-6 py-2.5 text-sm font-semibold text-bg-primary bg-gradient-to-r from-accent-aurora to-accent-nebula rounded-xl hover:shadow-lg hover:shadow-accent-aurora/30 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-accent-aurora/50 relative overflow-hidden group"
          >
            <span className="relative z-10">Let's Talk</span>
            <span className="absolute inset-0 bg-gradient-to-r from-accent-nebula to-accent-aurora opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </motion.a>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            onKeyDown={handleKeyDown}
            className="md:hidden p-2 text-text-secondary hover:text-text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-accent-cyan/50 rounded-lg relative"
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            <AnimatePresence mode="wait">
              {mobileOpen ? <X key="close" size={24} /> : <Menu key="open" size={24} />}
            </AnimatePresence>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden glass-premium border-t border-accent-aurora/20 overflow-hidden"
            role="menu"
            aria-label="Mobile navigation"
          >
            <div className="px-6 py-6 space-y-2">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  role="menuitem"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.08, ease: "easeOut" }}
                  onClick={handleNavClick}
                  className="block px-5 py-4 min-h-[48px] flex items-center text-base font-medium text-text-secondary hover:text-text-primary hover:bg-white/5 rounded-xl transition-all focus:outline-none focus:ring-2 focus:ring-accent-cyan/50"
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.a
                href="#contact"
                role="menuitem"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navLinks.length * 0.08, ease: "easeOut" }}
                onClick={handleNavClick}
                className="block mt-4 text-center px-6 py-4 text-base font-semibold text-bg-primary bg-gradient-to-r from-accent-aurora to-accent-nebula rounded-xl hover:shadow-lg hover:shadow-accent-aurora/30 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-accent-aurora/50"
              >
                Let's Talk
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
