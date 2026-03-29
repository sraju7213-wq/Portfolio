import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowDown, Palette, Sparkles, Globe, Zap, Layers } from "lucide-react";
import { dualHero } from "../data/content";
import MagneticButton from "./MagneticButton";

export default function DualHero() {
  const [hoveredSide, setHoveredSide] = useState<"designer" | "developer" | null>(null);

  return (
    <section className="relative min-h-screen flex">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-full bg-gradient-to-r from-bg-primary via-[#0a0a12] to-bg-primary" />
        <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] rounded-full bg-[#1a1625]/40 blur-[140px]" />
      </div>

      <motion.div
        className="relative flex-1 flex flex-col justify-center items-center px-8 lg:px-16 py-24 min-h-screen"
        onMouseEnter={() => setHoveredSide("designer")}
        onMouseLeave={() => setHoveredSide(null)}
      >
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-accent-violet/[0.03] to-transparent"
          animate={{ opacity: hoveredSide === "developer" ? 0.3 : 1 }}
          transition={{ duration: 0.5 }}
        />

        <div className="relative z-10 w-full max-w-lg">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="inline-flex items-center gap-2 text-xs font-medium tracking-[0.2em] text-accent-violet/70 uppercase mb-6">
              {dualHero.designer.label}
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="font-heading text-4xl sm:text-5xl md:text-5xl lg:text-5xl font-semibold tracking-tight text-white leading-[1.15] mb-5"
          >
            {dualHero.designer.headline}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-text-secondary text-base sm:text-lg leading-relaxed mb-8"
          >
            {dualHero.designer.subheadline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.65 }}
          >
            <a href="#portfolio" className="btn-primary-minimal">
              {dualHero.designer.cta}
            </a>
          </motion.div>
        </div>

        <motion.div
          className="absolute bottom-20 lg:bottom-24 right-8 lg:right-16 hidden lg:block"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <DesignerMockup hovered={hoveredSide === "designer"} />
        </motion.div>
      </motion.div>

      <div className="relative w-px h-full hidden md:block">
        <div className="absolute top-1/4 bottom-1/4 left-0 w-full bg-gradient-to-b from-transparent via-accent-violet/20 to-transparent" />
      </div>

      <motion.div
        className="relative flex-1 flex flex-col justify-center items-center px-8 lg:px-16 py-24 min-h-screen"
        onMouseEnter={() => setHoveredSide("developer")}
        onMouseLeave={() => setHoveredSide(null)}
      >
        <motion.div
          className="absolute inset-0 bg-gradient-to-l from-accent-violet/[0.03] to-transparent"
          animate={{ opacity: hoveredSide === "designer" ? 0.3 : 1 }}
          transition={{ duration: 0.5 }}
        />

        <div className="relative z-10 w-full max-w-lg">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <span className="inline-flex items-center gap-2 text-xs font-medium tracking-[0.2em] text-accent-violet/70 uppercase mb-6">
              <Sparkles size={12} />
              {dualHero.developer.label.replace("AI ", "")}
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="font-heading text-4xl sm:text-5xl md:text-5xl lg:text-5xl font-semibold tracking-tight text-white leading-[1.15] mb-5"
          >
            {dualHero.developer.headline}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-text-secondary text-base sm:text-lg leading-relaxed mb-8"
          >
            {dualHero.developer.subheadline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.75 }}
            className="mb-6"
          >
            <a href="#portfolio" className="btn-primary-minimal-violet">
              {dualHero.developer.cta}
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="flex items-center gap-3"
          >
            <span className="text-xs text-text-muted">{dualHero.developer.trustLine}</span>
          </motion.div>
        </div>

        <motion.div
          className="absolute bottom-20 lg:bottom-24 left-8 lg:left-16 hidden lg:block"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
        >
          <DeveloperMockup hovered={hoveredSide === "developer"} />
        </motion.div>
      </motion.div>

      <motion.a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 text-text-muted hover:text-white transition-colors duration-300"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1.2 }}
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ArrowDown size={16} />
        </motion.div>
      </motion.a>
    </section>
  );
}

function DesignerMockup({ hovered }: { hovered: boolean }) {
  return (
    <motion.div
      className="relative w-56 h-72 rounded-xl bg-gradient-to-br from-[#1a1a24] to-[#12121a] border border-white/[0.06] shadow-2xl shadow-black/40"
      animate={{ y: [0, -8, 0] }}
      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      style={{ opacity: hovered ? 1 : 0.85 }}
    >
      <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-accent-violet/5 to-transparent" />
      
      <div className="absolute top-4 left-4 right-4">
        <div className="flex items-center gap-2 mb-3">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-rose-400 to-pink-500 flex items-center justify-center">
            <span className="text-white text-xs font-bold">B</span>
          </div>
          <div>
            <div className="h-2 w-20 rounded bg-white/15 mb-1" />
            <div className="h-1.5 w-14 rounded bg-white/8" />
          </div>
        </div>
      </div>

      <div className="absolute top-24 left-4 right-4 grid grid-cols-2 gap-2">
        <div className="aspect-square rounded-lg bg-gradient-to-br from-cyan-400/20 to-blue-500/20" />
        <div className="aspect-square rounded-lg bg-gradient-to-br from-violet-400/20 to-purple-500/20" />
        <div className="aspect-square rounded-lg bg-gradient-to-br from-orange-400/20 to-rose-500/20" />
        <div className="aspect-square rounded-lg bg-gradient-to-br from-emerald-400/20 to-teal-500/20" />
      </div>

      <div className="absolute bottom-4 left-4 right-4">
        <div className="h-1.5 w-full rounded-full bg-white/[0.06]" />
        <div className="flex justify-between mt-2">
          <div className="h-1.5 w-8 rounded-full bg-accent-violet/30" />
          <div className="h-1.5 w-8 rounded-full bg-white/10" />
        </div>
      </div>

      <motion.div
        className="absolute -bottom-3 -right-3 w-12 h-12 rounded-lg bg-accent-violet/20 border border-accent-violet/20 flex items-center justify-center"
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ duration: 3, repeat: Infinity }}
      >
        <Palette size={18} className="text-accent-violet" />
      </motion.div>
    </motion.div>
  );
}

function DeveloperMockup({ hovered }: { hovered: boolean }) {
  return (
    <motion.div
      className="relative w-64 h-48 rounded-xl bg-[#0d0d12]/80 backdrop-blur-xl border border-white/[0.08] shadow-2xl shadow-black/40 overflow-hidden"
      animate={{ y: [0, -6, 0] }}
      transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      style={{ opacity: hovered ? 1 : 0.85 }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-accent-violet/3 via-transparent to-cyan-500/3" />
      
      <div className="flex items-center gap-2 px-4 py-3 border-b border-white/[0.04]">
        <div className="w-2.5 h-2.5 rounded-full bg-white/[0.2]" />
        <div className="w-2.5 h-2.5 rounded-full bg-white/[0.1]" />
        <div className="w-2.5 h-2.5 rounded-full bg-white/[0.1]" />
      </div>

      <div className="p-4 space-y-3">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-accent-violet/15 flex items-center justify-center">
            <Globe size={14} className="text-accent-violet" />
          </div>
          <div className="flex-1">
            <div className="h-2 w-24 rounded bg-white/10 mb-1" />
            <div className="h-1.5 w-16 rounded bg-white/5" />
          </div>
          <div className="px-2 py-0.5 rounded-full bg-emerald-500/15">
            <span className="text-[10px] text-emerald-400">Live</span>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-2 pt-2">
          <div className="h-12 rounded-lg bg-white/[0.03] border border-white/[0.04] flex items-center justify-center">
            <Zap size={12} className="text-amber-400" />
          </div>
          <div className="h-12 rounded-lg bg-white/[0.03] border border-white/[0.04] flex items-center justify-center">
            <Layers size={12} className="text-cyan-400" />
          </div>
          <div className="h-12 rounded-lg bg-white/[0.03] border border-white/[0.04] flex items-center justify-center">
            <Sparkles size={12} className="text-violet-400" />
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent-violet/30 to-transparent" />
    </motion.div>
  );
}
