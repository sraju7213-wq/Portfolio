import { Instagram } from "lucide-react";
import { navLinks, contact } from "../data/content";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 bg-[#09090b] border-t border-white/10 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Studio Brand Info */}
          <div className="text-center md:text-left">
            <a href="#" className="font-heading text-lg font-bold text-[#fafafa] tracking-tight">
              RAJU SHEIKH <span className="text-[#ff4800] font-mono text-xs font-normal">[ STUDIO ]</span>
            </a>
            <p className="text-xs font-mono text-[#71717a] mt-1">
              Creative Developer & Brand Designer — New Delhi, India
            </p>
          </div>

          {/* Nav & Social Links */}
          <div className="flex flex-wrap items-center justify-center gap-6 font-mono text-xs text-[#a1a1aa]">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="hover:text-[#ff4800] transition-colors uppercase tracking-wider"
              >
                {link.label}
              </a>
            ))}
            
            <div className="flex items-center gap-2 pl-4 border-l border-white/10">
              {contact.socials.map((social) => (
                <a
                  key={social.url}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-lg bg-[#121215] border border-white/10 flex items-center justify-center text-[#a1a1aa] hover:text-[#ff4800] hover:border-[#ff4800] transition-colors"
                  aria-label={social.platform}
                >
                  <Instagram size={14} />
                </a>
              ))}
            </div>
          </div>

        </div>

        {/* Copyright Bar */}
        <div className="mt-8 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-2 font-mono text-[11px] text-[#71717a]">
          <div>&copy; {currentYear} RAJU SHEIKH. ALL RIGHTS RESERVED.</div>
          <div className="text-[10px] uppercase text-[#71717a]">ENGINEERED WITH NO AI SLOP • FUMENG HIGH-CRAFT FRAMEWORK</div>
        </div>
      </div>
    </footer>
  );
}
