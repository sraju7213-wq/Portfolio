import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowDown,
  Code,
  Globe,
  Zap,
  Layers,
  Monitor,
  Palette,
  Image,
  Sparkles,
  ShoppingBag,
  PenTool,
} from "lucide-react";
import { dualHero } from "../data/content";

const devIcons = [Code, Globe, Zap, Layers, Monitor];
const designIcons = [Palette, Image, Sparkles, ShoppingBag, PenTool];

const stagger = {
  container: {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: 0.3 },
    },
  },
  item: {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  },
};

export default function DualHero() {
  const [hoveredSide, setHoveredSide] = useState<"dev" | "design" | null>(null);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col md:flex-row overflow-hidden"
    >
      {/* ───── BACKGROUND LAYER ───── */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Base dark */}
        <div className="absolute inset-0 bg-bg-primary" />

        {/* Dev side orb */}
        <motion.div
          className="absolute top-[20%] left-[10%] w-[500px] h-[500px] hero-orb-dev"
          animate={{
            x: hoveredSide === "dev" ? 30 : 0,
            opacity: hoveredSide === "design" ? 0.3 : 1,
          }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        />

        {/* Design side orbs */}
        <motion.div
          className="absolute top-[15%] right-[8%] w-[450px] h-[450px] hero-orb-design"
          animate={{
            x: hoveredSide === "design" ? -30 : 0,
            opacity: hoveredSide === "dev" ? 0.3 : 1,
          }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        />
        <motion.div
          className="absolute bottom-[20%] right-[15%] w-[300px] h-[300px] hero-orb-warm"
          animate={{
            scale: hoveredSide === "design" ? 1.15 : 1,
            opacity: hoveredSide === "dev" ? 0.2 : 0.6,
          }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        />
      </div>

      {/* ───── LEFT HALF — WEB DEVELOPMENT ───── */}
      <motion.div
        className="relative flex-1 flex flex-col justify-center px-8 sm:px-12 lg:px-16 xl:px-20 py-20 md:py-0 min-h-[50vh] md:min-h-screen"
        onMouseEnter={() => setHoveredSide("dev")}
        onMouseLeave={() => setHoveredSide(null)}
      >
        {/* Grid background texture */}
        <div className="absolute inset-0 hero-grid-bg opacity-60" />

        {/* Hover glow */}
        <motion.div
          className="absolute inset-0 hero-glow-dev"
          animate={{ opacity: hoveredSide === "dev" ? 1 : 0 }}
          transition={{ duration: 0.6 }}
        />

        {/* Subtle side gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-bg-primary/40 via-transparent to-transparent" />

        {/* Content */}
        <motion.div
          className="relative z-10 w-full max-w-lg"
          variants={stagger.container}
          initial="hidden"
          animate="show"
        >
          {/* Label */}
          <motion.div variants={stagger.item}>
            <span className="hero-label-dev">
              <Code size={12} />
              {dualHero.developer.label}
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={stagger.item}
            className="font-heading text-3xl sm:text-4xl md:text-[2.75rem] lg:text-5xl font-semibold tracking-tight text-white leading-[1.12] mt-5 mb-4"
          >
            {dualHero.developer.headline}
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            variants={stagger.item}
            className="text-text-secondary text-base sm:text-lg leading-relaxed mb-8 max-w-md"
          >
            {dualHero.developer.subheadline}
          </motion.p>

          {/* Bullet Points */}
          <motion.ul
            variants={stagger.item}
            className="space-y-3 mb-10"
          >
            {dualHero.developer.bulletPoints.map((point, i) => {
              const Icon = devIcons[i];
              return (
                <motion.li
                  key={point}
                  variants={stagger.item}
                  className="hero-bullet group"
                >
                  <span className="hero-bullet-icon hero-bullet-icon-dev">
                    <Icon size={14} className="text-accent-cyan opacity-70 group-hover:opacity-100 transition-opacity duration-300" />
                  </span>
                  <span className="group-hover:text-white transition-colors duration-300">
                    {point}
                  </span>
                </motion.li>
              );
            })}
          </motion.ul>

          {/* CTA */}
          <motion.div variants={stagger.item}>
            <a href="#portfolio" className="hero-btn-dev">
              {dualHero.developer.cta}
              <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </motion.div>
        </motion.div>

        {/* Decorative floating element */}
        <motion.div
          className="absolute bottom-16 right-8 lg:right-12 hidden lg:block"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <DevMockup hovered={hoveredSide === "dev"} />
        </motion.div>
      </motion.div>

      {/* ───── CENTER DIVIDER ───── */}
      <div className="relative w-full h-px md:w-px md:h-full md:min-h-screen flex-shrink-0 z-20">
        {/* Blurred gradient band */}
        <div className="absolute inset-0 md:w-[100px] md:h-full w-full h-[80px] hero-divider-gradient" />

        {/* Thin gradient line */}
        <div className="absolute inset-0 md:w-px md:h-full w-full h-px hero-divider-line" />

        {/* Center tagline */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <span className="hero-center-tagline select-none">
            {dualHero.centerTagline}
          </span>
        </motion.div>
      </div>

      {/* ───── RIGHT HALF — GRAPHIC DESIGN ───── */}
      <motion.div
        className="relative flex-1 flex flex-col justify-center items-end px-8 sm:px-12 lg:px-16 xl:px-20 py-20 md:py-0 min-h-[50vh] md:min-h-screen"
        onMouseEnter={() => setHoveredSide("design")}
        onMouseLeave={() => setHoveredSide(null)}
      >
        {/* Abstract gradient shapes */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="hero-abstract-shape w-[350px] h-[350px] -top-[10%] -left-[10%] bg-violet-500/8"
            animate={{
              scale: hoveredSide === "design" ? 1.2 : 1,
              opacity: hoveredSide === "design" ? 0.6 : 0.3,
            }}
            transition={{ duration: 1.5 }}
          />
          <motion.div
            className="hero-abstract-shape w-[250px] h-[250px] bottom-[10%] right-[5%] bg-pink-500/8"
            animate={{
              scale: hoveredSide === "design" ? 1.15 : 1,
              opacity: hoveredSide === "design" ? 0.5 : 0.25,
            }}
            transition={{ duration: 1.5 }}
          />
          <motion.div
            className="hero-abstract-shape w-[180px] h-[180px] top-[40%] left-[20%] bg-fuchsia-500/6"
            animate={{
              x: hoveredSide === "design" ? 20 : 0,
              y: hoveredSide === "design" ? -15 : 0,
              opacity: hoveredSide === "design" ? 0.5 : 0.2,
            }}
            transition={{ duration: 1.8 }}
          />
        </div>

        {/* Hover glow */}
        <motion.div
          className="absolute inset-0 hero-glow-design"
          animate={{ opacity: hoveredSide === "design" ? 1 : 0 }}
          transition={{ duration: 0.6 }}
        />

        {/* Subtle side gradient */}
        <div className="absolute inset-0 bg-gradient-to-l from-bg-primary/40 via-transparent to-transparent" />

        {/* Content */}
        <motion.div
          className="relative z-10 w-full max-w-lg text-right"
          variants={stagger.container}
          initial="hidden"
          animate="show"
        >
          {/* Label */}
          <motion.div variants={stagger.item} className="flex justify-end">
            <span className="hero-label-design">
              {dualHero.designer.label}
              <Palette size={12} />
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={stagger.item}
            className="font-display italic text-3xl sm:text-4xl md:text-[2.75rem] lg:text-5xl font-medium tracking-tight text-white leading-[1.15] mt-5 mb-4"
          >
            {dualHero.designer.headline}
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            variants={stagger.item}
            className="text-text-secondary text-base sm:text-lg leading-relaxed mb-8 ml-auto max-w-md"
          >
            {dualHero.designer.subheadline}
          </motion.p>

          {/* Bullet Points */}
          <motion.ul
            variants={stagger.item}
            className="space-y-3 mb-10"
          >
            {dualHero.designer.bulletPoints.map((point, i) => {
              const Icon = designIcons[i];
              return (
                <motion.li
                  key={point}
                  variants={stagger.item}
                  className="hero-bullet group justify-end"
                >
                  <span className="group-hover:text-white transition-colors duration-300">
                    {point}
                  </span>
                  <span className="hero-bullet-icon hero-bullet-icon-design">
                    <Icon size={14} className="text-accent-violet opacity-70 group-hover:opacity-100 transition-opacity duration-300" />
                  </span>
                </motion.li>
              );
            })}
          </motion.ul>

          {/* CTA */}
          <motion.div variants={stagger.item} className="flex justify-end">
            <a href="#portfolio" className="hero-btn-design">
              {dualHero.designer.cta}
              <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </motion.div>
        </motion.div>

        {/* Decorative floating element */}
        <motion.div
          className="absolute bottom-16 left-8 lg:left-12 hidden lg:block"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
        >
          <DesignMockup hovered={hoveredSide === "design"} />
        </motion.div>
      </motion.div>

      {/* ───── SCROLL INDICATOR ───── */}
      <motion.a
        href="#about"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-1.5 text-text-muted hover:text-white transition-colors duration-300"
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1.5 }}
      >
        <span className="text-[10px] tracking-[0.25em] uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ArrowDown size={14} />
        </motion.div>
      </motion.a>
    </section>
  );
}

/* ═══════════════════════════════════════
   DECORATIVE MOCKUPS
   ═══════════════════════════════════════ */

function DevMockup({ hovered }: { hovered: boolean }) {
  return (
    <motion.div
      className="relative w-60 h-44 rounded-xl bg-[#0d0d14]/80 backdrop-blur-xl border border-white/[0.06] shadow-2xl shadow-black/50 overflow-hidden"
      animate={{ y: [0, -6, 0] }}
      transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      style={{ opacity: hovered ? 1 : 0.7 }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-accent-cyan/[0.03] via-transparent to-transparent" />

      {/* Title bar */}
      <div className="flex items-center gap-1.5 px-4 py-2.5 border-b border-white/[0.04]">
        <div className="w-2 h-2 rounded-full bg-[#ff5f57]" />
        <div className="w-2 h-2 rounded-full bg-[#febc2e]" />
        <div className="w-2 h-2 rounded-full bg-[#28c840]" />
        <div className="ml-3 h-1.5 w-16 rounded bg-white/[0.06]" />
      </div>

      {/* Code lines */}
      <div className="p-4 space-y-2.5">
        <div className="flex items-center gap-2">
          <div className="h-2 w-8 rounded bg-accent-cyan/20" />
          <div className="h-2 w-20 rounded bg-white/[0.08]" />
          <div className="h-2 w-12 rounded bg-violet-500/15" />
        </div>
        <div className="flex items-center gap-2 pl-4">
          <div className="h-2 w-16 rounded bg-white/[0.06]" />
          <div className="h-2 w-10 rounded bg-accent-cyan/15" />
        </div>
        <div className="flex items-center gap-2 pl-4">
          <div className="h-2 w-12 rounded bg-white/[0.06]" />
          <div className="h-2 w-24 rounded bg-emerald-500/15" />
        </div>
        <div className="flex items-center gap-2">
          <div className="h-2 w-6 rounded bg-accent-cyan/20" />
          <div className="h-2 w-14 rounded bg-white/[0.06]" />
        </div>
        <div className="flex items-center gap-2 pl-8">
          <div className="h-2 w-20 rounded bg-white/[0.04]" />
          <div className="h-2 w-8 rounded bg-amber-400/15" />
        </div>
      </div>

      {/* Bottom accent line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent-cyan/25 to-transparent" />
    </motion.div>
  );
}

function DesignMockup({ hovered }: { hovered: boolean }) {
  return (
    <motion.div
      className="relative w-52 h-64 rounded-xl bg-gradient-to-br from-[#1a1625] to-[#12101a] border border-white/[0.06] shadow-2xl shadow-black/50 overflow-hidden"
      animate={{ y: [0, -8, 0] }}
      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      style={{ opacity: hovered ? 1 : 0.7 }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-accent-violet/[0.04] to-transparent" />

      {/* Color palette strip */}
      <div className="absolute top-0 left-0 right-0 h-1.5 flex">
        <div className="flex-1 bg-violet-500/60" />
        <div className="flex-1 bg-pink-500/50" />
        <div className="flex-1 bg-rose-400/40" />
        <div className="flex-1 bg-amber-400/50" />
        <div className="flex-1 bg-emerald-400/40" />
      </div>

      {/* Brand mockup area */}
      <div className="absolute top-6 left-4 right-4">
        <div className="flex items-center gap-2 mb-4">
          <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-violet-500/40 to-fuchsia-500/40 flex items-center justify-center">
            <span className="text-white text-xs font-bold font-display">B</span>
          </div>
          <div>
            <div className="h-2 w-16 rounded bg-white/15 mb-1" />
            <div className="h-1.5 w-12 rounded bg-white/8" />
          </div>
        </div>
      </div>

      {/* Design grid */}
      <div className="absolute top-[5.5rem] left-4 right-4 grid grid-cols-2 gap-2">
        <div className="aspect-square rounded-lg bg-gradient-to-br from-violet-400/15 to-fuchsia-500/15" />
        <div className="aspect-square rounded-lg bg-gradient-to-br from-pink-400/15 to-rose-500/15" />
        <div className="aspect-square rounded-lg bg-gradient-to-br from-amber-400/15 to-orange-500/15" />
        <div className="aspect-square rounded-lg bg-gradient-to-br from-cyan-400/15 to-teal-500/15" />
      </div>

      {/* Bottom bar */}
      <div className="absolute bottom-3 left-4 right-4">
        <div className="h-1.5 w-full rounded-full bg-white/[0.05]" />
        <div className="flex justify-between mt-2">
          <div className="h-1.5 w-8 rounded-full bg-accent-violet/25" />
          <div className="h-1.5 w-6 rounded-full bg-white/[0.06]" />
        </div>
      </div>

      {/* Accent icon */}
      <motion.div
        className="absolute -bottom-2 -left-2 w-10 h-10 rounded-lg bg-accent-violet/15 border border-accent-violet/15 flex items-center justify-center"
        animate={{ scale: [1, 1.08, 1] }}
        transition={{ duration: 3, repeat: Infinity }}
      >
        <Palette size={16} className="text-accent-violet" />
      </motion.div>
    </motion.div>
  );
}
