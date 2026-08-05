import { Instagram, Sparkles } from "lucide-react";
import { navLinks } from "../data/content";

const socialLinks = [
  { icon: Instagram, url: "https://www.instagram.com/kreative.ai", label: "kreative.ai" },
  { icon: Instagram, url: "https://www.instagram.com/depressed_rtist", label: "depressed_rtist" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="pt-4 pb-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent-cyan/[0.01] to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent-cyan/20 to-transparent" />

      <div className="max-w-6xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-8 pb-6">
          <div className="text-center md:text-left">
            <a href="#" className="inline-flex items-center gap-2 font-heading text-base font-bold group">
              <Sparkles size={16} className="text-accent-cyan group-hover:rotate-12 transition-transform duration-300" />
              <span className="gradient-text">RAJU</span>
              <span className="text-text-muted font-light text-xs uppercase tracking-wider">Sheikh</span>
            </a>
            <p className="text-text-muted text-xs mt-1">
              Creative Designer &amp; Web Developer &mdash; New Delhi
            </p>
          </div>

          <div className="flex items-center gap-6">
            <nav className="flex items-center gap-5">
              {navLinks.slice(0, 5).map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-text-muted text-xs hover:text-accent-cyan transition-colors tracking-wider uppercase"
                >
                  {link.label}
                </a>
              ))}
            </nav>
            <div className="flex items-center gap-2 pl-6 border-l border-border-subtle">
              {socialLinks.map((social) => (
                <a
                  key={social.url}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-lg bg-bg-card border border-border-subtle flex items-center justify-center text-text-muted hover:text-accent-cyan hover:border-accent-cyan/30 transition-all"
                  aria-label={social.label}
                >
                  <social.icon size={14} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="pt-4 border-t border-white/[0.04] text-center">
          <p className="text-text-muted/40 text-[10px] tracking-wider">
            &copy; {currentYear} RAJU SHEIKH. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
