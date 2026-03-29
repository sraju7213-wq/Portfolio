import { motion } from "framer-motion";
import { ArrowUp, Instagram } from "lucide-react";
import { navLinks } from "../data/content";

const socialLinks = [
  { icon: Instagram, url: "https://www.instagram.com/kreative.ai", label: "kreative.ai" },
  { icon: Instagram, url: "https://www.instagram.com/depressed_rtist", label: "depressed_rtist" },
];

export default function Footer() {
  return (
    <footer className="py-12 border-t border-border-subtle relative overflow-hidden">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full bg-accent-cyan/[0.02] blur-[150px]" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-center md:text-left">
            <a href="#" className="font-heading text-lg font-bold">
              <span className="gradient-text-shimmer">RAJU</span>
              <span className="text-text-primary ml-1">SHEIKH</span>
            </a>
            <p className="text-text-muted text-sm mt-2 max-w-xs">
              Creative Designer & Web Developer building brands that connect, convert, and inspire.
            </p>
          </div>

          <div className="flex items-center gap-6">
            {navLinks.slice(0, 4).map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-text-muted text-sm hover:text-accent-cyan transition-colors duration-300 relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-accent-cyan transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3">
            {socialLinks.map((social, i) => (
              <motion.a
                key={social.url}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -3, scale: 1.05 }}
                className="w-10 h-10 rounded-xl bg-bg-card border border-border-subtle flex items-center justify-center text-text-muted hover:text-accent-cyan hover:border-accent-cyan/30 transition-all duration-300"
              >
                <social.icon size={16} />
              </motion.a>
            ))}
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-border-subtle flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-text-muted text-xs">
            &copy; {new Date().getFullYear()} RAJU SHEIKH. All rights reserved.
          </p>
          <motion.a
            href="#"
            whileHover={{ y: -3 }}
            className="flex items-center gap-2 text-text-muted text-xs hover:text-accent-cyan transition-colors"
          >
            Back to top
            <ArrowUp size={12} />
          </motion.a>
        </div>
      </div>
    </footer>
  );
}
