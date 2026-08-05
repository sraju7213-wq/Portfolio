import { motion, AnimatePresence } from "framer-motion";
import {
  X, ExternalLink, Check, Palette, Code,
  ChevronLeft, ChevronRight, Maximize2,
  Plus, Minus, RotateCcw,
  Play, Pause, Expand, Minimize,
  Info, HelpCircle
} from "lucide-react";
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

function LightboxControls({ visible }: { visible: boolean }) {
  return (
    <div
      className={`absolute bottom-24 left-1/2 -translate-x-1/2 z-20 flex items-center gap-1.5 px-3 py-2 rounded-full bg-black/60 backdrop-blur-xl border border-white/10 transition-all duration-500 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
      }`}
    >
      {[
        { key: "←→", label: "Navigate" },
        { key: "+/-", label: "Zoom" },
        { key: "0", label: "Reset" },
        { key: "F", label: "Fullscreen" },
        { key: "Space", label: "Slideshow" },
        { key: "Esc", label: "Close" },
      ].map((item) => (
        <span key={item.key} className="flex items-center gap-1.5 px-2 py-1 rounded-lg text-[10px] text-white/60 hover:text-white/90 hover:bg-white/10 transition-colors">
          <kbd className="px-1.5 py-0.5 rounded bg-white/10 text-white/80 text-[9px] font-mono">{item.key}</kbd>
          <span>{item.label}</span>
        </span>
      ))}
    </div>
  );
}

function LightboxFilmstrip({
  screenshots,
  currentIndex,
  onSelect,
  accent,
}: {
  screenshots: { src: string; title: string }[];
  currentIndex: number;
  onSelect: (i: number) => void;
  accent: string;
}) {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!scrollRef.current) return;
    const child = scrollRef.current.children[currentIndex] as HTMLElement | undefined;
    if (child) {
      child.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
    }
  }, [currentIndex]);

  return (
    <div
      ref={scrollRef}
      className="absolute bottom-4 left-4 right-4 z-20 flex gap-2 overflow-x-auto px-2 py-2 rounded-2xl bg-black/40 backdrop-blur-xl border border-white/10"
      style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      onClick={(e) => e.stopPropagation()}
    >
      {screenshots.map((shot, i) => (
        <button
          key={i}
          onClick={() => onSelect(i)}
          className={`relative shrink-0 w-16 h-10 md:w-20 md:h-12 rounded-lg overflow-hidden transition-all duration-300 ${
            i === currentIndex
              ? "ring-2 scale-105"
              : "opacity-50 hover:opacity-80"
          }`}
          style={i === currentIndex ? { outline: `2px solid ${accent}` } : undefined}
        >
          <img
            src={shot.src}
            alt=""
            className="w-full h-full object-cover"
            loading="lazy"
          />
          {i === currentIndex && (
            <div
              className="absolute inset-x-0 bottom-0 h-0.5"
              style={{ background: accent }}
            />
          )}
        </button>
      ))}
    </div>
  );
}

export default function CaseStudyModal({ study, onClose }: CaseStudyModalProps) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [zoomLevel, setZoomLevel] = useState(1);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [slideshowActive, setSlideshowActive] = useState(false);
  const [slideshowSpeed, setSlideshowSpeed] = useState(4000);
  const [controlsVisible, setControlsVisible] = useState(true);
  const [showShortcuts, setShowShortcuts] = useState(false);
  const [showInfo, setShowInfo] = useState(false);
  const [imageLoaded, setImageLoaded] = useState<Record<number, boolean>>({});
  const [dragDirection, setDragDirection] = useState<"horizontal" | "vertical" | null>(null);

  const imageRef = useRef<HTMLDivElement>(null);
  const lightboxRef = useRef<HTMLDivElement>(null);
  const controlsTimerRef = useRef<ReturnType<typeof window.setTimeout> | null>(null);
  const slideshowTimerRef = useRef<ReturnType<typeof window.setTimeout> | null>(null);

  // Touch tracking for swipe & pinch
  const touchStartRef = useRef<{ x: number; y: number; time: number }>({ x: 0, y: 0, time: 0 });
  const touchPinchRef = useRef<{ dist: number }>({ dist: 0 });
  const touchLastTapRef = useRef<{ x: number; y: number; time: number }>({ x: 0, y: 0, time: 0 });
  const touchCurrentRef = useRef<{ x: number; y: number }>({ x: 0, y: 0 });

  // Preload adjacent images
  const preloadedRef = useRef<Set<string>>(new Set());

  const preloadImages = useCallback((index: number, screenshots: { src: string }[]) => {
    const indices = [index - 1, index, index + 1].filter(
      (i) => i >= 0 && i < screenshots.length
    );
    indices.forEach((i) => {
      const src = screenshots[i].src;
      if (!preloadedRef.current.has(src)) {
        preloadedRef.current.add(src);
        const img = new Image();
        img.src = src;
      }
    });
  }, []);

  const totalScreenshots = study.screenshots?.length ?? 0;
  const hasPrev = lightboxIndex !== null && lightboxIndex > 0;
  const hasNext = lightboxIndex !== null && lightboxIndex < totalScreenshots - 1;

  const handleLightboxClose = useCallback(() => {
    setZoomLevel(1);
    setOffset({ x: 0, y: 0 });
    setLightboxIndex(null);
    setSlideshowActive(false);
    setIsFullscreen(false);
    setShowInfo(false);
  }, []);

  const zoomIn = useCallback(() => setZoomLevel((v) => Math.min(v + 0.5, 5)), []);
  const zoomOut = useCallback(() => setZoomLevel((v) => Math.max(v - 0.5, 0.5)), []);
  const resetZoom = useCallback(() => {
    setZoomLevel(1);
    setOffset({ x: 0, y: 0 });
  }, []);

  const goNext = useCallback(() => {
    if (lightboxIndex !== null && study.screenshots && lightboxIndex < study.screenshots.length - 1) {
      resetZoom();
      setLightboxIndex(lightboxIndex + 1);
    }
  }, [lightboxIndex, study.screenshots, resetZoom]);

  const goPrev = useCallback(() => {
    if (lightboxIndex !== null && lightboxIndex > 0) {
      resetZoom();
      setLightboxIndex(lightboxIndex - 1);
    }
  }, [lightboxIndex, resetZoom]);

  const toggleFullscreen = useCallback(async () => {
    if (!document.fullscreenElement) {
      try {
        await document.documentElement.requestFullscreen();
        setIsFullscreen(true);
      } catch { /* ignored */ }
    } else {
      try {
        await document.exitFullscreen();
        setIsFullscreen(false);
      } catch { /* ignored */ }
    }
  }, []);

  const toggleSlideshow = useCallback(() => {
    setSlideshowActive((prev) => !prev);
  }, []);

  // Slideshow timer
  useEffect(() => {
    if (!slideshowActive || lightboxIndex === null || !study.screenshots) return;
    const screenshots = study.screenshots;
    slideshowTimerRef.current = setTimeout(() => {
      if (lightboxIndex < screenshots.length - 1) {
        goNext();
      } else {
        setLightboxIndex(0);
        resetZoom();
      }
    }, slideshowSpeed);
    return () => {
      if (slideshowTimerRef.current) window.clearTimeout(slideshowTimerRef.current);
    };
  }, [slideshowActive, lightboxIndex, study.screenshots, goNext, resetZoom, slideshowSpeed]);

  // Fullscreen change listener
  useEffect(() => {
    const handler = () => {
      if (!document.fullscreenElement) setIsFullscreen(false);
    };
    document.addEventListener("fullscreenchange", handler);
    return () => document.removeEventListener("fullscreenchange", handler);
  }, []);

  // Preload images when lightbox index changes
  useEffect(() => {
    if (lightboxIndex !== null && study.screenshots) {
      preloadImages(lightboxIndex, study.screenshots);
    }
  }, [lightboxIndex, study.screenshots, preloadImages]);

  // Auto-hide controls
  const showControlsTemporarily = useCallback(() => {
    setControlsVisible(true);
    if (controlsTimerRef.current) window.clearTimeout(controlsTimerRef.current);
    controlsTimerRef.current = setTimeout(() => {
      if (lightboxIndex !== null) setControlsVisible(false);
    }, 3000);
  }, [lightboxIndex]);

  useEffect(() => {
    if (lightboxIndex !== null) {
      showControlsTemporarily();
    }
    return () => { if (controlsTimerRef.current) window.clearTimeout(controlsTimerRef.current); };
  }, [lightboxIndex, showControlsTemporarily]);

  // Hide controls when mouse stops moving
  useEffect(() => {
    if (lightboxIndex === null) return;
    const handleMouseMove = () => showControlsTemporarily();
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [lightboxIndex, showControlsTemporarily]);

  // Body overflow + escape for modal
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

  // Keyboard shortcuts for lightbox
  useEffect(() => {
    if (lightboxIndex === null || !study.screenshots) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleLightboxClose();
      if (e.key === "ArrowLeft") goPrev();
      if (e.key === "ArrowRight") goNext();
      if (e.key === "=" || e.key === "+") zoomIn();
      if (e.key === "-") zoomOut();
      if (e.key === "0") resetZoom();
      if (e.key === "f" || e.key === "F") toggleFullscreen();
      if (e.key === " ") { e.preventDefault(); toggleSlideshow(); }
      if (e.key === "?") setShowShortcuts((prev) => !prev);
      if (e.key === "i" || e.key === "I") setShowInfo((prev) => !prev);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [lightboxIndex, study.screenshots, handleLightboxClose, goPrev, goNext, zoomIn, zoomOut, resetZoom, toggleFullscreen, toggleSlideshow]);

  // Scroll wheel zoom
  useEffect(() => {
    if (lightboxIndex === null) return;
    const el = imageRef.current;
    if (!el) return;
    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      if (e.deltaY < 0) zoomIn();
      else if (e.deltaY > 0 && zoomLevel > 1) zoomOut();
      else if (e.deltaY > 0) resetZoom();
    };
    el.addEventListener("wheel", handleWheel, { passive: false });
    return () => el.removeEventListener("wheel", handleWheel);
  }, [lightboxIndex, zoomLevel, zoomIn, zoomOut, resetZoom]);

  // Mouse drag for panning
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

  // Touch handlers
  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    const touches = e.touches;
    touchCurrentRef.current = { x: touches[0].clientX, y: touches[0].clientY };
    touchStartRef.current = {
      x: touches[0].clientX,
      y: touches[0].clientY,
      time: Date.now(),
    };
    setDragDirection(null);

    if (touches.length === 2) {
      const dx = touches[0].clientX - touches[1].clientX;
      const dy = touches[0].clientY - touches[1].clientY;
      touchPinchRef.current = { dist: Math.sqrt(dx * dx + dy * dy) };
    }
  }, []);

  const handleTouchMove = useCallback((e: React.TouchEvent) => {
    if (lightboxIndex === null) return;
    const touches = e.touches;

    if (touches.length === 2) {
      const dx = touches[0].clientX - touches[1].clientX;
      const dy = touches[0].clientY - touches[1].clientY;
      const newDist = Math.sqrt(dx * dx + dy * dy);
      const prevDist = touchPinchRef.current.dist;
      if (prevDist > 0) {
        const scale = newDist / prevDist;
        setZoomLevel((v) => Math.max(0.5, Math.min(v * scale, 5)));
      }
      touchPinchRef.current = { dist: newDist };
      return;
    }

    if (touches.length === 1) {
      const currentX = touches[0].clientX;
      const currentY = touches[0].clientY;
      const startX = touchStartRef.current.x;
      const startY = touchStartRef.current.y;
      const deltaX = currentX - startX;
      const deltaY = currentY - startY;
      touchCurrentRef.current = { x: currentX, y: currentY };

      if (zoomLevel > 1) {
        setOffset((prev) => ({
          x: prev.x + deltaX - (touchCurrentRef.current.x - (currentX - deltaX)),
          y: prev.y + deltaY - (touchCurrentRef.current.y - (currentY - deltaY)),
        }));
        touchStartRef.current = { x: currentX, y: currentY, time: Date.now() };
        return;
      }

      if (!dragDirection) {
        if (Math.abs(deltaX) > Math.abs(deltaY)) {
          setDragDirection("horizontal");
        } else {
          setDragDirection("vertical");
        }
      }
    }
  }, [lightboxIndex, zoomLevel, dragDirection]);

  const handleTouchEnd = useCallback((e: React.TouchEvent) => {
    if (lightboxIndex === null || !study.screenshots) return;
    const touches = e.changedTouches;
    if (touches.length !== 1) return;

    const endX = touches[0].clientX;
    const endY = touches[0].clientY;
    const startX = touchStartRef.current.x;
    const startY = touchStartRef.current.y;
    const dx = endX - startX;
    const dy = endY - startY;
    const elapsed = Date.now() - touchStartRef.current.time;

    // Double-tap detection
    const lastTap = touchLastTapRef.current;
    const tapDist = Math.hypot(endX - lastTap.x, endY - lastTap.y);
    const tapTime = Date.now() - lastTap.time;
    if (tapDist < 30 && tapTime < 300) {
      if (zoomLevel > 1) {
        resetZoom();
      } else {
        setZoomLevel(3);
      }
      touchLastTapRef.current = { x: 0, y: 0, time: 0 };
      return;
    }
    touchLastTapRef.current = { x: endX, y: endY, time: Date.now() };

    const absDx = Math.abs(dx);
    const absDy = Math.abs(dy);
    const isQuickSwipe = elapsed < 300;
    const isFarEnough = absDx > 50 || absDy > 50;

    if (!isFarEnough) return;

    if (dragDirection === "vertical" || (absDy > absDx && absDy > 50)) {
      if (dy > 50) handleLightboxClose();
      return;
    }

    if (dragDirection === "horizontal" || (absDx > absDy && absDx > 50)) {
      if (dx > 0 && isQuickSwipe) goPrev();
      else if (dx < 0 && isQuickSwipe) goNext();
    }
  }, [lightboxIndex, study.screenshots, dragDirection, zoomLevel, handleLightboxClose, goPrev, goNext, resetZoom]);

  const handleImageLoad = useCallback((index: number) => {
    setImageLoaded((prev) => ({ ...prev, [index]: true }));
  }, []);

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
                      >
                        <div className="aspect-video overflow-hidden relative">
                          <img
                            src={shot.src}
                            alt={shot.title}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                            loading="lazy"
                            decoding="async"
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
                      ref={lightboxRef}
                      className="fixed inset-0 z-[200] flex items-center justify-center p-0 md:p-4"
                      onTouchStart={handleTouchStart}
                      onTouchMove={handleTouchMove}
                      onTouchEnd={handleTouchEnd}
                    >
                      {/* Backdrop */}
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={handleLightboxClose}
                        className="absolute inset-0 bg-black/95 backdrop-blur-2xl"
                      />

                      {/* Close button */}
                      <button
                        onClick={handleLightboxClose}
                        className={`absolute top-4 right-4 md:top-6 md:right-6 z-30 w-10 h-10 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all ${
                          controlsVisible ? "opacity-100" : "opacity-0"
                        }`}
                      >
                        <X size={18} />
                      </button>

                      {/* Top controls bar */}
                      <div
                        className={`absolute top-4 left-4 md:top-6 md:left-6 z-30 flex items-center gap-2 transition-all duration-300 ${
                          controlsVisible ? "opacity-100" : "opacity-0"
                        }`}
                      >
                        <div className="flex items-center rounded-full bg-white/10 backdrop-blur-xl border border-white/20 overflow-hidden">
                          <button
                            onClick={(e) => { e.stopPropagation(); zoomOut(); }}
                            className="w-9 h-9 flex items-center justify-center text-white/70 hover:text-white hover:bg-white/10 transition-all disabled:opacity-30"
                            disabled={zoomLevel <= 0.5}
                            title="Zoom out"
                          >
                            <Minus size={14} />
                          </button>
                          <span className="text-white/80 text-xs font-medium tabular-nums w-12 text-center select-none">
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
                        {zoomLevel !== 1 && (
                          <button
                            onClick={(e) => { e.stopPropagation(); resetZoom(); }}
                            className="w-9 h-9 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center text-white/70 hover:text-white hover:bg-white/20 transition-all"
                            title="Reset zoom"
                          >
                            <RotateCcw size={14} />
                          </button>
                        )}
                        <div className="w-px h-6 bg-white/10 mx-1 hidden sm:block" />
                        <button
                          onClick={(e) => { e.stopPropagation(); toggleFullscreen(); }}
                          className="w-9 h-9 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center text-white/70 hover:text-white hover:bg-white/20 transition-all"
                          title={isFullscreen ? "Exit fullscreen" : "Fullscreen"}
                        >
                          {isFullscreen ? <Minimize size={14} /> : <Expand size={14} />}
                        </button>
                        <button
                          onClick={(e) => { e.stopPropagation(); toggleSlideshow(); }}
                          className={`w-9 h-9 rounded-full backdrop-blur-xl border flex items-center justify-center transition-all ${
                            slideshowActive
                              ? "bg-accent-cyan/20 border-accent-cyan/40 text-accent-cyan"
                              : "bg-white/10 border-white/20 text-white/70 hover:text-white hover:bg-white/20"
                          }`}
                          title={slideshowActive ? "Stop slideshow" : "Start slideshow"}
                        >
                          {slideshowActive ? <Pause size={14} /> : <Play size={14} />}
                        </button>
                        <button
                          onClick={(e) => { e.stopPropagation(); setShowInfo((prev) => !prev); }}
                          className="w-9 h-9 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center text-white/70 hover:text-white hover:bg-white/20 transition-all"
                          title="Image info"
                        >
                          <Info size={14} />
                        </button>
                        <button
                          onClick={(e) => { e.stopPropagation(); setShowShortcuts((prev) => !prev); }}
                          className="w-9 h-9 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center text-white/70 hover:text-white hover:bg-white/20 transition-all"
                          title="Keyboard shortcuts"
                        >
                          <HelpCircle size={14} />
                        </button>
                      </div>

                      {/* Counter */}
                      <div
                        className={`absolute top-4 left-1/2 -translate-x-1/2 z-30 px-4 py-2 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 text-white text-xs font-medium transition-all duration-300 ${
                          controlsVisible ? "opacity-100" : "opacity-0"
                        }`}
                      >
                        {lightboxIndex + 1} / {study.screenshots.length}
                        {slideshowActive && (
                          <span className="ml-2 text-accent-cyan">
                            <span className="animate-pulse">●</span>
                          </span>
                        )}
                      </div>

                      {/* Prev / Next arrows on sides */}
                      {hasPrev && (
                        <button
                          onClick={(e) => { e.stopPropagation(); goPrev(); }}
                          className={`absolute left-2 md:left-6 z-20 w-10 h-10 md:w-12 md:h-12 rounded-full bg-black/50 backdrop-blur-xl border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all hover:-translate-x-1 ${
                            controlsVisible ? "opacity-100" : "opacity-0 md:opacity-0 lg:opacity-0"
                          }`}
                        >
                          <ChevronLeft size={20} />
                        </button>
                      )}
                      {hasNext && (
                        <button
                          onClick={(e) => { e.stopPropagation(); goNext(); }}
                          className={`absolute right-2 md:right-6 z-20 w-10 h-10 md:w-12 md:h-12 rounded-full bg-black/50 backdrop-blur-xl border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all hover:translate-x-1 ${
                            controlsVisible ? "opacity-100" : "opacity-0 md:opacity-0 lg:opacity-0"
                          }`}
                        >
                          <ChevronRight size={20} />
                        </button>
                      )}

                      {/* Keyboard shortcuts guide */}
                      <AnimatePresence>
                        {showShortcuts && (
                          <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            onClick={() => setShowShortcuts(false)}
                            className="absolute inset-0 z-40 flex items-center justify-center bg-black/60 backdrop-blur-sm"
                          >
                            <div
                              className="p-6 rounded-2xl bg-bg-surface/90 backdrop-blur-xl border border-white/10 max-w-sm w-full mx-4"
                              onClick={(e) => e.stopPropagation()}
                            >
                              <div className="flex items-center justify-between mb-4">
                                <h3 className="font-heading text-sm font-bold text-white">Keyboard Shortcuts</h3>
                                <button onClick={() => setShowShortcuts(false)} className="text-white/50 hover:text-white">
                                  <X size={14} />
                                </button>
                              </div>
                              <div className="space-y-2">
                                {[
                                  { keys: "← →", desc: "Previous / Next" },
                                  { keys: "+ -", desc: "Zoom in / out" },
                                  { keys: "0", desc: "Reset zoom" },
                                  { keys: "F", desc: "Toggle fullscreen" },
                                  { keys: "Space", desc: "Play / Pause slideshow" },
                                  { keys: "I", desc: "Toggle image info" },
                                  { keys: "?", desc: "Toggle this guide" },
                                  { keys: "Esc", desc: "Close lightbox" },
                                ].map((item) => (
                                  <div key={item.keys} className="flex items-center justify-between py-1.5">
                                    <div className="flex gap-1">
                                      {item.keys.split(" ").map((k) => (
                                        <kbd
                                          key={k}
                                          className="px-2 py-0.5 rounded bg-white/10 text-white/80 text-[10px] font-mono"
                                        >
                                          {k}
                                        </kbd>
                                      ))}
                                    </div>
                                    <span className="text-white/50 text-xs">{item.desc}</span>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>

                      {/* Image info overlay */}
                      <AnimatePresence>
                        {showInfo && lightboxIndex !== null && study.screenshots && (
                          <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 20 }}
                            className="absolute bottom-24 left-4 right-4 md:left-auto md:right-6 md:max-w-xs z-30 p-4 rounded-2xl bg-black/80 backdrop-blur-xl border border-white/10"
                          >
                            <h4 className="text-white font-heading font-bold text-sm mb-1">
                              {study.screenshots[lightboxIndex].title}
                            </h4>
                            <p className="text-white/60 text-xs leading-relaxed">
                              {study.screenshots[lightboxIndex].description}
                            </p>
                          </motion.div>
                        )}
                      </AnimatePresence>

                      {/* Main image */}
                      <motion.div
                        key={lightboxIndex}
                        initial={{ opacity: 0, scale: 0.92 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.92 }}
                        transition={{ duration: 0.3 }}
                        className="relative z-10 w-full h-full flex flex-col items-center justify-center"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <div
                          ref={imageRef}
                          className="relative flex-1 flex items-center justify-center overflow-hidden select-none w-full"
                          style={{ maxHeight: "85vh" }}
                          onMouseDown={handleMouseDown}
                          onMouseMove={handleMouseMove}
                          onMouseUp={handleMouseUp}
                          onMouseLeave={handleMouseUp}
                        >
                          {!imageLoaded[lightboxIndex] && (
                            <div className="absolute inset-0 flex items-center justify-center">
                              <div className="w-8 h-8 rounded-full border-2 border-white/20 border-t-accent-cyan animate-spin" />
                            </div>
                          )}
                          <img
                            src={study.screenshots[lightboxIndex].src}
                            alt={study.screenshots[lightboxIndex].title}
                            className="pointer-events-none"
                            onLoad={() => handleImageLoad(lightboxIndex)}
                            style={{
                              maxWidth: zoomLevel <= 1 ? "95vw" : "none",
                              maxHeight: zoomLevel <= 1 ? "80vh" : "none",
                              width: zoomLevel > 1 ? `${zoomLevel * 100}%` : "auto",
                              height: zoomLevel > 1 ? `${zoomLevel * 100}%` : "auto",
                              objectFit: zoomLevel <= 1 ? "contain" : "none",
                              transform: zoomLevel > 1 ? `translate(${offset.x}px, ${offset.y}px)` : "none",
                              transition: isDragging ? "none" : "transform 0.2s ease-out, width 0.2s ease-out, height 0.2s ease-out",
                              cursor: zoomLevel > 1 ? (isDragging ? "grabbing" : "grab") : "default",
                              opacity: imageLoaded[lightboxIndex] ? 1 : 0,
                            }}
                            draggable={false}
                          />
                        </div>

                        {/* Image title (when not zoomed) */}
                        {zoomLevel <= 1 && lightboxIndex !== null && (
                          <div
                            className={`text-center pb-16 md:pb-12 transition-all duration-300 ${
                              controlsVisible ? "opacity-100" : "opacity-0"
                            }`}
                          >
                            <h4 className="text-white font-heading font-bold text-sm">
                              {study.screenshots[lightboxIndex].title}
                            </h4>
                            <p className="text-white/50 text-xs mt-1 max-w-md mx-auto line-clamp-1">
                              {study.screenshots[lightboxIndex].description}
                            </p>
                          </div>
                        )}
                      </motion.div>

                      {/* Thumbnail filmstrip */}
                      {study.screenshots.length > 1 && (
                        <div
                          className={`transition-all duration-500 ${
                            controlsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                          }`}
                        >
                          <LightboxFilmstrip
                            screenshots={study.screenshots}
                            currentIndex={lightboxIndex}
                            onSelect={(i) => { resetZoom(); setLightboxIndex(i); }}
                            accent={accent}
                          />
                        </div>
                      )}

                      {/* Bottom controls hint */}
                      <LightboxControls visible={controlsVisible} />
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
                {study.impact && study.impact.length > 0 && (
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.15 }}
                    className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16"
                  >
                    {study.impact.map((stat) => (
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
                )}

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

                {/* Problem & Solution */}
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
