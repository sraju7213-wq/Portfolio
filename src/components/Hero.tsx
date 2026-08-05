import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ExternalLink, ShieldCheck, Zap, Layers, Sparkles, Code, Globe, Layout, CheckCircle2 } from "lucide-react";
import { heroShowcase } from "../data/content";

export default function Hero() {
  const [activeTab, setActiveTab] = useState<string>(heroShowcase[0].id);
  const activeProject = heroShowcase.find((p) => p.id === activeTab) || heroShowcase[0];

  return (
    <section id="hero" className="relative min-h-[92vh] pt-32 pb-20 flex items-center overflow-hidden bg-[#09090b]">
      {/* Structural background lines */}
      <div className="absolute inset-0 pointer-events-none opacity-20 bg-[radial-gradient(#27272a_1px,transparent_1px)] [background-size:24px_24px]" />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 w-full">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Authoritative Copy & Metrics */}
          <div className="lg:col-span-6 flex flex-col items-start">
            
            {/* Monospaced System Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-[#18181b] border border-white/10 text-xs font-mono text-[#a1a1aa] mb-6">
              <span className="w-2 h-2 rounded-full bg-[#ff4800]" />
              <span>SELF-TAUGHT CREATIVE DEVELOPER & BRAND DESIGNER</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#fafafa] leading-[1.08] mb-6">
              Building <span className="text-[#ff4800]">Revenue-Focused</span> Digital Experiences.
            </h1>

            {/* Subtitle */}
            <p className="text-[#a1a1aa] text-base sm:text-lg leading-relaxed mb-8 max-w-xl">
              I help ambitious businesses stand out with high-conversion websites, luxury brand identities, and tailored SaaS platforms. No templates, no AI slop — just craftsmanship that drives growth.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-12">
              <a
                href="#work"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-[#ff4800] text-white text-xs font-mono font-bold hover:bg-[#e03e00] transition-colors shadow-lg shadow-[#ff4800]/20"
              >
                <span>EXPLORE SELECTED WORK</span>
                <ArrowRight size={14} />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-[#18181b] border border-white/15 text-[#fafafa] text-xs font-mono font-medium hover:bg-[#27272a] hover:border-white/30 transition-colors"
              >
                <span>CONTACT STUDIO</span>
              </a>
            </div>

            {/* Real Proof Metrics Bar */}
            <div className="grid grid-cols-3 gap-6 pt-6 border-t border-white/10 w-full max-w-lg">
              <div>
                <div className="font-mono text-2xl font-bold text-[#fafafa]">08+</div>
                <div className="text-[11px] font-mono text-[#71717a] uppercase tracking-wider mt-0.5">Active Brands</div>
              </div>
              <div>
                <div className="font-mono text-2xl font-bold text-[#fafafa]">200+</div>
                <div className="text-[11px] font-mono text-[#71717a] uppercase tracking-wider mt-0.5">Projects Shipped</div>
              </div>
              <div>
                <div className="font-mono text-2xl font-bold text-[#fafafa]">06+ Yrs</div>
                <div className="text-[11px] font-mono text-[#71717a] uppercase tracking-wider mt-0.5">Craft Experience</div>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Live Craft Deck (Showcase Console) */}
          <div className="lg:col-span-6">
            <div className="bg-[#121215] border border-white/10 rounded-2xl overflow-hidden shadow-2xl shadow-black/80">
              
              {/* Console Header Tabs */}
              <div className="flex items-center justify-between border-b border-white/10 bg-[#18181b] px-4 py-3">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-red-500/80" />
                  <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <span className="w-3 h-3 rounded-full bg-green-500/80" />
                  <span className="ml-2 font-mono text-xs text-[#a1a1aa]">live_craft_deck.v2</span>
                </div>
                <div className="font-mono text-[10px] text-[#ff4800] uppercase tracking-widest px-2 py-0.5 rounded bg-[#ff4800]/10 border border-[#ff4800]/20">
                  REAL CLIENT BUILDS
                </div>
              </div>

              {/* Project Tab Selector */}
              <div className="grid grid-cols-3 bg-[#09090b] border-b border-white/10 p-1.5 gap-1 font-mono text-xs">
                {heroShowcase.map((p) => (
                  <button
                    key={p.id}
                    onClick={() => setActiveTab(p.id)}
                    className={`py-2 px-3 rounded-lg text-left transition-all ${
                      activeTab === p.id
                        ? "bg-[#27272a] text-[#fafafa] font-medium border border-white/10"
                        : "text-[#71717a] hover:text-[#a1a1aa]"
                    }`}
                  >
                    <div className="truncate font-semibold">{p.name.split(" ")[0]}</div>
                    <div className="text-[10px] text-[#a1a1aa] truncate">{p.category.split(" ")[0]}</div>
                  </button>
                ))}
              </div>

              {/* Active Tab Showcase Area */}
              <div className="p-6">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeProject.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.25 }}
                    className="space-y-5"
                  >
                    {/* Header Details */}
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <span className="font-mono text-[11px] text-[#ff4800] uppercase tracking-wider font-semibold">
                          {activeProject.category}
                        </span>
                        <h3 className="font-heading text-xl font-bold text-[#fafafa] mt-0.5">
                          {activeProject.name}
                        </h3>
                      </div>
                      
                      {/* Metric Callout */}
                      <div className="bg-[#18181b] border border-white/10 rounded-xl px-3 py-1.5 text-right shrink-0">
                        <div className="font-mono text-lg font-bold text-[#ff4800]">
                          {activeProject.metrics}
                        </div>
                        <div className="text-[10px] font-mono text-[#71717a]">
                          {activeProject.metricsLabel}
                        </div>
                      </div>
                    </div>

                    {/* Tagline */}
                    <p className="text-sm text-[#a1a1aa] leading-relaxed">
                      {activeProject.tagline}
                    </p>

                    {/* Feature Highlights */}
                    <div className="space-y-2">
                      <div className="text-[11px] font-mono text-[#71717a] uppercase tracking-wider">
                        Engineered Capabilities:
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                        {activeProject.highlights.map((h) => (
                          <div
                            key={h}
                            className="flex items-center gap-2 bg-[#18181b] border border-white/5 px-2.5 py-2 rounded-lg text-xs text-[#fafafa]"
                          >
                            <CheckCircle2 size={13} className="text-[#ff4800] shrink-0" />
                            <span className="truncate">{h}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Tech Stack Pills & Live Action Link */}
                    <div className="pt-3 border-t border-white/10 flex items-center justify-between gap-4 flex-wrap">
                      <div className="flex items-center gap-1.5 flex-wrap">
                        {activeProject.tech.map((t) => (
                          <span
                            key={t}
                            className="px-2 py-0.5 rounded bg-[#27272a] text-[11px] font-mono text-[#a1a1aa]"
                          >
                            {t}
                          </span>
                        ))}
                      </div>

                      {activeProject.liveUrl && (
                        <a
                          href={activeProject.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-xs font-mono text-[#ff4800] hover:underline font-semibold"
                        >
                          <span>VIEW LIVE BUILD</span>
                          <ExternalLink size={12} />
                        </a>
                      )}
                    </div>

                  </motion.div>
                </AnimatePresence>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
