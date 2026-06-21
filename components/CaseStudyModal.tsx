import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, Check, Palette, Code, ChevronLeft, ChevronRight, Maximize2, Plus, Minus, RotateCcw } from "lucide-react";
import { useEffect, useState, useCallback, useRef } from "react";
import type { CaseStudy } from "../data/content";

type CaseStudyModalProps = {
  study: CaseStudy;
  onClose: () => void;
};

function SectionHeading({ accent, children }: { accent: string; children: React.ReactNode }) {
  return (
    <h3 className="font-heading text-2xl font-bold text-text-primary mb-6 flex items-center gap-3">
      <span className="w-8 h-[2px]" style={{ background: `linear-gradient(90deg, ${accent}, transparent)` }} />
      {children}
    </h3>
  );
}

export default function CaseStudyModal({ study, onClose }: CaseStudyModalProps) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [zoomLevel, setZoomLevel] = useState(1);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const imageRef = useRef<HTMLDivElement>(null);

  const handleLightboxClose = useCallback(() => { setZoomLevel(1); setOffset({ x: 0, y: 0 }); setLightboxIndex(null); }, []);

  const zoomIn = useCallback(() => setZoomLevel((v) => Math.min(v + 0.5, 5)), []);
  const zoomOut = useCallback(() => setZoomLevel((v) => Math.max(v - 0.5, 1)), []);
  const resetZoom = useCallback(() => { setZoomLevel(1); setOffset({ x: 0, y: 0 }); }, []);

  const handleWheel = useCallback((e: WheelEvent) => {
    if (e.deltaY < 0) zoomIn();
    else if (e.deltaY > 0 && zoomLevel > 1) zoomOut();
    else if (e.deltaY > 0) resetZoom();
  }, [zoomIn, zoomOut, resetZoom, zoomLevel]);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape" && lightboxIndex === null) onClose();
    };
    window.addEventListener("keydown", handleEsc);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleEsc);
    };
  }, [onClose, lightboxIndex]);

  useEffect(() => {
    if (lightboxIndex === null || !study.screenshots) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleLightboxClose();
      if (e.key === "ArrowLeft") { resetZoom(); setLightboxIndex((prev) => prev !== null && prev > 0 ? prev - 1 : prev); }
      if (e.key === "ArrowRight") { resetZoom(); setLightboxIndex((prev) => prev !== null && study.screenshots && prev < study.screenshots.length - 1 ? prev + 1 : prev); }
      if ((e.key === "=" || e.key === "+") && lightboxIndex !== null) zoomIn();
      if (e.key === "-" && lightboxIndex !== null) zoomOut();
      if (e.key === "0" && lightboxIndex !== null) resetZoom();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [lightboxIndex, study.screenshots, handleLightboxClose, zoomIn, zoomOut, resetZoom]);

  useEffect(() => {
    if (lightboxIndex === null) return;
    const el = imageRef.current;
    if (!el) return;
    el.addEventListener("wheel", handleWheel, { passive: true });
    return () => el.removeEventListener("wheel", handleWheel);
  }, [lightboxIndex, handleWheel]);

  const handleMouseDown = useCallback((e: React.MouseEvent) => {
    if (zoomLevel <= 1) return;
    setIsDragging(true);
    setDragStart({ x: e.clientX - offset.x, y: e.clientY - offset.y });
  }, [zoomLevel, offset]);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!isDragging || zoomLevel <= 1) return;
    setOffset({ x: e.clientX - dragStart.x, y: e.clientY - dragStart.y });
  }, [isDragging, zoomLevel, dragStart]);

  const handleMouseUp = useCallback(() => setIsDragging(false), []);

  const accent = study.accentColor;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="fixed inset-0 z-[100] overflow-y-auto"
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-xl"
        />

        <div className="relative z-10 min-h-screen py-20 px-6">
          <div className="max-w-5xl mx-auto">
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              onClick={onClose}
              className="fixed top-8 right-8 z-20 w-12 h-12 rounded-full bg-bg-surface/80 backdrop-blur-xl border border-border-subtle flex items-center justify-center text-text-secondary hover:text-white hover:border-accent-cyan/50 transition-all duration-300 group"
            >
              <X size={18} className="group-hover:rotate-90 transition-transform duration-300" />
            </motion.button>

            {/* Hero cover */}
            <motion.div
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
              className={`relative rounded-3xl overflow-hidden mb-12 bg-gradient-to-br ${study.coverGradient}`}
              style={{ border: `1px solid ${accent}20` }}
            >
              <div className="p-10 md:p-16 lg:p-20">
                <div className="flex flex-wrap items-center gap-4 mb-6">
                  <span
                    className="px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase"
                    style={{ background: `${accent}15`, color: accent, border: `1px solid ${accent}30` }}
                  >
                    {study.category}
                  </span>
                  <span className="text-xs tracking-wider text-text-muted">{study.year}</span>
                  <span className="text-xs text-text-muted">&middot;</span>
                  <span className="text-xs tracking-wider text-text-muted">{study.role}</span>
                </div>

                <h2 className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-text-primary mb-4 leading-[1.1]">
                  {study.title}
                </h2>

                <p className="text-text-secondary text-lg md:text-xl max-w-3xl leading-relaxed mb-8">
                  {study.subtitle}
                </p>

                <div className="flex flex-wrap items-center gap-3">
                  <span className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-xs text-text-muted">
                    <span className="w-1.5 h-1.5 rounded-full" style={{ background: accent }} />
                    {study.duration}
                  </span>
                  {study.liveLink && (
                    <a
                      href={study.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-medium transition-all duration-300 hover:-translate-y-0.5"
                      style={{ background: `${accent}15`, color: accent, border: `1px solid ${accent}30` }}
                    >
                      <ExternalLink size={14} />
                      View Live
                    </a>
                  )}
                </div>
              </div>
            </motion.div>

            {study.screenshots ? (
              <>
                {/* Overview */}
                {study.overview && (
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.15 }}
                    className="mb-12"
                  >
                    <SectionHeading accent={accent}>Overview</SectionHeading>
                    <p className="text-text-secondary text-base md:text-lg leading-relaxed max-w-4xl">
                      {study.overview}
                    </p>
                  </motion.div>
                )}

                {/* Challenge + Solution side by side */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.25 }}
                  className="grid md:grid-cols-2 gap-6 mb-12"
                >
                  {study.challenge && (
                    <div className="rounded-2xl p-8 glass-luxury" style={{ border: `1px solid ${accent}15` }}>
                      <h3 className="font-heading text-lg font-bold text-text-primary mb-4">Challenge</h3>
                      <p className="text-text-secondary text-sm leading-relaxed">{study.challenge}</p>
                    </div>
                  )}
                  {study.solution_points && (
                    <div className="rounded-2xl p-8 glass-luxury" style={{ border: `1px solid ${accent}15` }}>
                      <h3 className="font-heading text-lg font-bold text-text-primary mb-4">Solution</h3>
                      <ul className="space-y-2">
                        {study.solution_points.map((point, i) => (
                          <li key={i} className="flex items-start gap-3 text-text-secondary text-sm">
                            <Check size={14} className="mt-0.5 shrink-0" style={{ color: accent }} />
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </motion.div>

                {/* Key Features */}
                {study.keyFeatures && study.keyFeatures.length > 0 && (
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.35 }}
                    className="mb-12"
                  >
                    <SectionHeading accent={accent}>Key Features</SectionHeading>
                    <div className="grid md:grid-cols-2 gap-3">
                      {study.keyFeatures.map((feature, i) => (
                        <div
                          key={i}
                          className="flex items-center gap-3 p-4 rounded-xl transition-all duration-300 hover:-translate-y-0.5"
                          style={{ background: `${accent}04`, border: `1px solid ${accent}10` }}
                        >
                          <div
                            className="w-2 h-2 rounded-full shrink-0"
                            style={{ background: accent }}
                          />
                          <span className="text-text-secondary text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}

                {/* Tech Stack */}
                {study.techStack && (
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.45 }}
                    className="mb-12"
                  >
                    <SectionHeading accent={accent}>Tech Stack</SectionHeading>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="rounded-2xl p-6 glass-luxury" style={{ border: `1px solid ${accent}15` }}>
                        <div className="flex items-center gap-2 mb-4">
                          <Palette size={16} style={{ color: accent }} />
                          <h4 className="font-heading text-sm font-bold text-text-primary">Design</h4>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {study.techStack.design.map((t) => (
                            <span
                              key={t}
                              className="px-3 py-1.5 rounded-lg text-xs font-medium"
                              style={{ background: `${accent}10`, color: accent, border: `1px solid ${accent}20` }}
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div className="rounded-2xl p-6 glass-luxury" style={{ border: `1px solid ${accent}15` }}>
                        <div className="flex items-center gap-2 mb-4">
                          <Code size={16} style={{ color: accent }} />
                          <h4 className="font-heading text-sm font-bold text-text-primary">Development</h4>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {study.techStack.development.map((t) => (
                            <span
                              key={t}
                              className="px-3 py-1.5 rounded-lg text-xs font-medium"
                              style={{ background: `${accent}10`, color: accent, border: `1px solid ${accent}20` }}
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* Screenshot Gallery */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.55 }}
                  className="mb-12"
                >
                  <SectionHeading accent={accent}>Screenshots</SectionHeading>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {study.screenshots.map((shot, i) => (
                      <motion.button
                        key={i}
                        onClick={() => setLightboxIndex(i)}
                        className="group relative rounded-2xl overflow-hidden text-left transition-all duration-300 hover:-translate-y-1"
                        style={{ background: `${accent}04`, border: `1px solid ${accent}10` }}
                        whileHover={{ scale: 1.01 }}
                        layoutId={`shot-${i}`}
                      >
                        <div className="aspect-video overflow-hidden relative">
                          <img
                            src={shot.src}
                            alt={shot.title}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                            <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-2 rounded-full bg-white/10 backdrop-blur-sm">
                              <Maximize2 size={16} className="text-white" />
                            </div>
                          </div>
                        </div>
                        <div className="p-4">
                          <h4 className="font-heading text-sm font-bold text-text-primary mb-1">{shot.title}</h4>
                          <p className="text-text-muted text-xs leading-relaxed">{shot.description}</p>
                        </div>
                      </motion.button>
                    ))}
                  </div>
                </motion.div>

                {/* Lightbox */}
                <AnimatePresence>
                  {lightboxIndex !== null && study.screenshots && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="fixed inset-0 z-[200] flex items-center justify-center p-4 md:p-8"
                    >
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={handleLightboxClose}
                        className="absolute inset-0 bg-black/90 backdrop-blur-xl"
                      />

                      <button
                        onClick={handleLightboxClose}
                        className="absolute top-6 right-6 z-10 w-10 h-10 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all"
                      >
                        <X size={18} />
                      </button>

                      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 px-4 py-2 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 text-white text-xs font-medium">
                        {lightboxIndex + 1} / {study.screenshots.length}
                      </div>

                      {lightboxIndex > 0 && (
                        <button
                          onClick={() => setLightboxIndex(lightboxIndex - 1)}
                          className="absolute left-4 md:left-8 z-10 w-12 h-12 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all hover:-translate-x-1"
                        >
                          <ChevronLeft size={22} />
                        </button>
                      )}

                      {lightboxIndex < study.screenshots.length - 1 && (
                        <button
                          onClick={() => setLightboxIndex(lightboxIndex + 1)}
                          className="absolute right-4 md:right-8 z-10 w-12 h-12 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all hover:translate-x-1"
                        >
                          <ChevronRight size={22} />
                        </button>
                      )}

                      <div className="absolute top-6 left-6 z-10 flex items-center gap-2">
                        <div className="flex items-center rounded-full bg-white/10 backdrop-blur-xl border border-white/20 overflow-hidden">
                          <button
                            onClick={(e) => { e.stopPropagation(); zoomOut(); }}
                            className="w-9 h-9 flex items-center justify-center text-white/70 hover:text-white hover:bg-white/10 transition-all disabled:opacity-30"
                            disabled={zoomLevel <= 1}
                            title="Zoom out"
                          >
                            <Minus size={14} />
                          </button>
                          <span className="text-white/80 text-xs font-medium tabular-nums w-10 text-center select-none">
                            {Math.round(zoomLevel * 100)}%
                          </span>
                          <button
                            onClick={(e) => { e.stopPropagation(); zoomIn(); }}
                            className="w-9 h-9 flex items-center justify-center text-white/70 hover:text-white hover:bg-white/10 transition-all disabled:opacity-30"
                            disabled={zoomLevel >= 5}
                            title="Zoom in"
                          >
                            <Plus size={14} />
                          </button>
                        </div>
                        {zoomLevel > 1 && (
                          <button
                            onClick={(e) => { e.stopPropagation(); resetZoom(); }}
                            className="w-9 h-9 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center text-white/70 hover:text-white hover:bg-white/20 transition-all"
                            title="Reset zoom"
                          >
                            <RotateCcw size={14} />
                          </button>
                        )}
                      </div>

                      <motion.div
                        key={lightboxIndex}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        transition={{ duration: 0.3 }}
                        className="relative z-10 w-full max-w-5xl flex flex-col"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <div
                          ref={imageRef}
                          className="relative flex-1 flex items-center justify-center overflow-hidden rounded-2xl select-none"
                          style={{ maxHeight: "80vh" }}
                          onMouseDown={handleMouseDown}
                          onMouseMove={handleMouseMove}
                          onMouseUp={handleMouseUp}
                          onMouseLeave={handleMouseUp}
                        >
                          <img
                            src={study.screenshots[lightboxIndex].src}
                            alt={study.screenshots[lightboxIndex].title}
                            className="rounded-2xl shadow-2xl pointer-events-none"
                            style={{
                              maxWidth: zoomLevel > 1 ? "none" : "100%",
                              maxHeight: zoomLevel > 1 ? "none" : "75vh",
                              width: zoomLevel > 1 ? `${zoomLevel * 100}%` : "auto",
                              height: zoomLevel > 1 ? `${zoomLevel * 100}%` : "auto",
                              objectFit: zoomLevel > 1 ? "none" : "contain",
                              transform: zoomLevel > 1 ? `translate(${offset.x}px, ${offset.y}px)` : "none",
                              transition: isDragging ? "none" : "transform 0.2s ease-out, width 0.2s ease-out, height 0.2s ease-out",
                              cursor: zoomLevel > 1 ? (isDragging ? "grabbing" : "grab") : "default",
                            }}
                            draggable={false}
                          />
                        </div>
                        {zoomLevel <= 1 && (
                          <div className="text-center mt-4">
                            <h4 className="text-white font-heading font-bold text-sm">
                              {study.screenshots[lightboxIndex].title}
                            </h4>
                            <p className="text-white/60 text-xs mt-1">
                              {study.screenshots[lightboxIndex].description}
                            </p>
                          </div>
                        )}
                      </motion.div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Results */}
                {study.results && study.results.length > 0 && (
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.65 }}
                    className="mb-12"
                  >
                    <SectionHeading accent={accent}>Results</SectionHeading>
                    <div className="grid md:grid-cols-2 gap-3">
                      {study.results.map((result, i) => (
                        <div
                          key={i}
                          className="flex items-center gap-3 p-4 rounded-xl"
                          style={{ background: `${accent}04`, border: `1px solid ${accent}10` }}
                        >
                          <Check size={14} className="shrink-0" style={{ color: accent }} />
                          <span className="text-text-secondary text-sm">{result}</span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </>
            ) : (
              <>
                {/* Impact stats */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.15 }}
                  className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16"
                >
                  {study.impact.map((stat, i) => (
                    <div
                      key={stat.label}
                      className="relative rounded-2xl p-6 overflow-hidden"
                      style={{ background: `linear-gradient(135deg, ${accent}08, ${accent}02)`, border: `1px solid ${accent}15` }}
                    >
                      <div
                        className="absolute top-0 right-0 w-24 h-24 rounded-full blur-3xl"
                        style={{ background: `${accent}10` }}
                      />
                      <span className="block font-heading text-3xl md:text-4xl font-bold mb-1" style={{ color: accent }}>
                        {stat.metric}
                      </span>
                      <span className="text-xs tracking-wider text-text-muted uppercase">{stat.label}</span>
                    </div>
                  ))}
                </motion.div>

                {/* Story section */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.25 }}
                  className="mb-16"
                >
                  <SectionHeading accent={accent}>The Story</SectionHeading>
                  <p className="text-text-secondary text-base md:text-lg leading-relaxed max-w-4xl">
                    {study.story}
                  </p>
                </motion.div>

                {/* Problem & Solution side by side */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.35 }}
                  className="grid md:grid-cols-2 gap-6 mb-16"
                >
                  <div className="rounded-2xl p-8 glass-luxury" style={{ border: `1px solid rgba(239,68,68,0.12)` }}>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-8 h-8 rounded-lg bg-red-500/10 flex items-center justify-center">
                        <span className="text-red-400 text-sm font-bold">!</span>
                      </div>
                      <h3 className="font-heading text-lg font-bold text-text-primary">The Problem</h3>
                    </div>
                    <p className="text-text-secondary text-sm leading-relaxed">{study.problem}</p>
                  </div>
                  <div className="rounded-2xl p-8 glass-luxury" style={{ border: `1px solid ${accent}15` }}>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: `${accent}15` }}>
                        <Check size={16} style={{ color: accent }} />
                      </div>
                      <h3 className="font-heading text-lg font-bold text-text-primary">The Solution</h3>
                    </div>
                    <p className="text-text-secondary text-sm leading-relaxed">{study.solution}</p>
                  </div>
                </motion.div>

                {/* Design process */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.45 }}
                  className="mb-16"
                >
                  <SectionHeading accent={accent}>Design Process</SectionHeading>
                  <div className="space-y-4">
                    {study.process.map((step, i) => (
                      <div key={i} className="flex items-start gap-5 group">
                        <div className="flex flex-col items-center">
                          <div
                            className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-300 group-hover:scale-110"
                            style={{ background: `${accent}20`, color: accent }}
                          >
                            {i + 1}
                          </div>
                          {i < study.process.length - 1 && (
                            <div className="w-px flex-1 min-h-[20px] mt-1" style={{ background: `linear-gradient(180deg, ${accent}30, transparent)` }} />
                          )}
                        </div>
                        <div className="pb-6 pt-1">
                          <p className="text-text-secondary text-sm leading-relaxed">{step}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>

                {/* Final visuals */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.55 }}
                  className="mb-16"
                >
                  <SectionHeading accent={accent}>Final Visuals</SectionHeading>
                  <div className="grid md:grid-cols-2 gap-4">
                    {study.finalVisuals.map((visual, i) => (
                      <div
                        key={i}
                        className="flex items-start gap-3 p-5 rounded-xl transition-all duration-300 hover:-translate-y-0.5"
                        style={{ background: `${accent}04`, border: `1px solid ${accent}10` }}
                      >
                        <span className="text-text-secondary text-sm leading-relaxed">{visual}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>

                {/* Technologies */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.65 }}
                  className="mb-16"
                >
                  <SectionHeading accent={accent}>Technologies Used</SectionHeading>
                  <div className="flex flex-wrap gap-3">
                    {study.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-4 py-2 rounded-xl text-xs font-medium transition-all duration-300 hover:-translate-y-0.5"
                        style={{ background: `${accent}10`, color: accent, border: `1px solid ${accent}20` }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </>
            )}

            {/* Bottom CTA */}
            {study.liveLink && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.75 }}
                className="text-center pb-10"
              >
                <a
                  href={study.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl text-sm font-semibold transition-all duration-500 hover:-translate-y-1"
                  style={{ background: `linear-gradient(135deg, ${accent}, ${accent}dd)`, color: "#07070a" }}
                >
                  <span>View Live Project</span>
                  <ExternalLink size={16} />
                </a>
              </motion.div>
            )}
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
