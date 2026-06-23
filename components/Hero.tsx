import { useRef, useState, useCallback, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Code2, Palette, Sparkles, Brush, Zap, Globe, Image, Printer } from "lucide-react";
import { splitHero } from "../data/content";
import FloatingParticles from "./FloatingParticles";

const leftIcons = [Code2, Globe, Zap, Sparkles, Globe];
const rightIcons = [Palette, Image, Sparkles, Image, Printer];

function TypewriterText({ text, delay = 0 }: { text: string; delay?: number }) {
  const [displayedChars, setDisplayedChars] = useState(0);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const startTimer = setTimeout(() => setStarted(true), delay * 1000);
    return () => clearTimeout(startTimer);
  }, [delay]);

  useEffect(() => {
    if (!started) return;
    if (displayedChars < text.length) {
      const timer = setTimeout(() => {
        setDisplayedChars((prev) => prev + 1);
      }, 30 + Math.random() * 20);
      return () => clearTimeout(timer);
    }
  }, [started, displayedChars, text.length]);

  return (
    <span>
      {text.slice(0, displayedChars)}
      {displayedChars < text.length && (
        <span className="inline-block w-[2px] h-[1em] bg-accent-cyan/70 ml-0.5 animate-pulse align-middle" />
      )}
    </span>
  );
}

function EntryItem({ children, delay, className, from }: { children: React.ReactNode; delay: number; className?: string; from?: string }) {
  return (
    <div
      className={className}
      style={{
        animation: `hero-entry 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) ${delay}s forwards`,
        opacity: 0,
        transform: from || "translateY(20px)",
      }}
    >
      {children}
    </div>
  );
}

function HeroServiceList({ services, icons, direction, baseDelay }: { services: string[]; icons: React.ElementType[]; direction: "left" | "right"; baseDelay: number }) {
  const offset = direction === "left" ? -20 : 20;
  return (
    <ul className="space-y-3 mb-10">
      {services.map((service, i) => {
        const Icon = icons[i % icons.length];
        return (
          <li
            key={service}
            className={`flex items-center gap-3 text-sm text-text-secondary ${direction === "right" ? "lg:flex-row-reverse" : ""}`}
            style={{
              animation: `hero-entry 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) ${baseDelay + i * 0.08}s forwards`,
              opacity: 0,
              transform: `translateX(${offset}px)`,
            }}
          >
            <div className={`w-7 h-7 rounded-lg ${direction === "left" ? "bg-accent-cyan/10 border-accent-cyan/20" : "bg-accent-violet/10 border-accent-violet/20"} border flex items-center justify-center shrink-0`}>
              <Icon size={13} className={direction === "left" ? "text-accent-cyan" : "text-accent-violet"} />
            </div>
            {service}
          </li>
        );
      })}
    </ul>
  );
}

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0.5, y: 0.5 });
  const [hoveredSide, setHoveredSide] = useState<"left" | "right" | null>(null);
  const rafRef = useRef<number>(0);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const contentY = useTransform(scrollYProgress, [0, 1], [0, -40]);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (rafRef.current) return;
    rafRef.current = requestAnimationFrame(() => {
      if (!sectionRef.current) { rafRef.current = 0; return; }
      const rect = sectionRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = (e.clientY - rect.top) / rect.height;
      setMousePos({ x, y });
      setHoveredSide(x < 0.5 ? "left" : "right");
      rafRef.current = 0;
    });
  }, []);

  return (
    <section
      id="hero"
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setHoveredSide(null)}
      className="relative min-h-screen flex items-center overflow-hidden bg-bg-primary"
    >
      <style>{`
        @keyframes hero-entry {
          to { opacity: 1; transform: translate(0,0); }
        }
      `}</style>
      <FloatingParticles count={15} />

      <div className="absolute inset-0 bg-gradient-to-b from-bg-primary via-bg-surface/20 to-bg-primary" />

      <motion.div
        className="absolute inset-0 pointer-events-none"
        animate={{ opacity: hoveredSide === "left" ? 1 : 0 }}
        transition={{ duration: 0.6 }}
        style={{
          background: `radial-gradient(circle 600px at ${mousePos.x * 100}% ${mousePos.y * 100}%, rgba(0, 229, 255, 0.07) 0%, transparent 70%)`,
        }}
      />

      <motion.div
        className="absolute inset-0 pointer-events-none"
        animate={{ opacity: hoveredSide === "right" ? 1 : 0 }}
        transition={{ duration: 0.6 }}
        style={{
          background: `radial-gradient(circle 600px at ${mousePos.x * 100}% ${mousePos.y * 100}%, rgba(168, 85, 247, 0.07) 0%, transparent 70%)`,
        }}
      />

      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:80px_80px] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_50%,black,transparent)]" />

      <motion.div style={{ y: contentY }} className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-0 min-h-[80vh] items-center relative">

          {/* Left side */}
          <EntryItem delay={2.2} from="translateX(-40px)" className="flex flex-col justify-center py-16 lg:py-24 lg:pr-16">
            <div className="flex items-center gap-2 mb-6">
              <Code2 size={14} className="text-accent-cyan" />
              <span className="text-[10px] font-semibold tracking-[0.25em] uppercase text-accent-cyan">
                {splitHero.left.label}
              </span>
            </div>

            <h1 className="font-heading text-[clamp(2rem,4vw,3.5rem)] font-bold tracking-tight leading-[1.1] text-text-primary mb-5">
              {splitHero.left.headline}
            </h1>

            <p className="text-text-secondary text-sm md:text-base leading-relaxed mb-8 max-w-md min-h-[3em]">
              <TypewriterText text={splitHero.left.subtitle} delay={3.5} />
            </p>

            <HeroServiceList services={splitHero.left.services} icons={leftIcons} direction="left" baseDelay={2.5} />

            <a
              href={splitHero.left.ctaHref}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-white/15 bg-white/[0.03] text-sm font-medium text-text-primary hover:bg-white/[0.06] hover:border-accent-cyan/30 transition-all duration-300 w-fit group hover:-translate-y-0.5"
              style={{
                animation: `hero-entry 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) 2.9s forwards`,
                opacity: 0,
                transform: "translateY(10px)",
              }}
            >
              {splitHero.left.cta}
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </EntryItem>

          {/* Center divider */}
          <div className="hidden lg:flex absolute left-1/2 top-0 bottom-0 -translate-x-1/2 flex-col items-center justify-center z-20">
            <div className="flex-1 w-px bg-gradient-to-b from-transparent via-white/10 to-transparent" />
            <div className="py-8">
              <span
                className="text-[9px] tracking-[0.3em] uppercase text-text-muted/40 font-medium"
                style={{ writingMode: "vertical-lr" }}
              >
                {splitHero.dividerText}
              </span>
            </div>
            <div className="flex-1 w-px bg-gradient-to-b from-transparent via-white/10 to-transparent" />
          </div>

          {/* Right side */}
          <EntryItem delay={2.4} from="translateX(40px)" className="flex flex-col justify-center py-16 lg:py-24 lg:pl-16 lg:text-right">
            <div className="flex items-center gap-2 mb-6 lg:justify-end">
              <span className="text-[10px] font-semibold tracking-[0.25em] uppercase text-accent-violet">
                {splitHero.right.label}
              </span>
              <Brush size={14} className="text-accent-violet" />
            </div>

            <h2 className="font-heading text-[clamp(2rem,4vw,3.5rem)] font-bold tracking-tight leading-[1.1] text-text-primary mb-5 italic" style={{ fontFamily: "'Playfair Display', serif" }}>
              {splitHero.right.headline}
            </h2>

            <p className="text-text-secondary text-sm md:text-base leading-relaxed mb-8 lg:ml-auto max-w-md min-h-[3em]">
              <TypewriterText text={splitHero.right.subtitle} delay={4.0} />
            </p>

            <HeroServiceList services={splitHero.right.services} icons={rightIcons} direction="right" baseDelay={2.6} />

            <a
              href={splitHero.right.ctaHref}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-accent-violet/90 text-sm font-medium text-white hover:bg-accent-violet transition-all duration-300 w-fit lg:ml-auto group hover:-translate-y-0.5"
              style={{
                animation: `hero-entry 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) 3.1s forwards`,
                opacity: 0,
                transform: "translateY(10px)",
              }}
            >
              {splitHero.right.cta}
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </EntryItem>
        </div>

        {/* Floating preview cards */}
        <div
          className="hidden lg:flex justify-center gap-6 -mt-8 mb-8 relative z-30"
          style={{
            animation: `hero-entry 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) 3.3s forwards`,
            opacity: 0,
            transform: "translateY(30px)",
          }}
        >
          <div
            className="w-64 rounded-xl overflow-hidden border border-white/[0.08] bg-bg-surface/60 backdrop-blur-xl shadow-elevated"
            style={{ animation: "float-card 6s ease-in-out infinite" }}
          >
            <div className="flex items-center gap-1.5 px-3 py-2 border-b border-white/[0.06] bg-bg-primary/40">
              <div className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
              <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
              <div className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
              <span className="ml-2 text-[9px] text-text-muted font-mono">app.tsx</span>
            </div>
            <div className="p-3 font-mono text-[10px] leading-relaxed space-y-0.5">
              <div><span className="text-accent-violet">const</span> <span className="text-accent-cyan">app</span> <span className="text-text-muted">=</span> <span className="text-amber-400">{"{"}</span></div>
              <div className="pl-3"><span className="text-text-secondary">stack</span><span className="text-text-muted">:</span> <span className="text-green-400">"React + TS"</span></div>
              <div className="pl-3"><span className="text-text-secondary">style</span><span className="text-text-muted">:</span> <span className="text-green-400">"Tailwind"</span></div>
              <div className="pl-3"><span className="text-text-secondary">motion</span><span className="text-text-muted">:</span> <span className="text-green-400">"Framer"</span></div>
              <div><span className="text-amber-400">{"}"}</span></div>
            </div>
          </div>

          <div
            className="w-52 rounded-xl overflow-hidden border border-white/[0.08] bg-bg-surface/60 backdrop-blur-xl shadow-elevated"
            style={{ animation: "float-card 7s ease-in-out infinite", animationDelay: "0.5s" }}
          >
            <div className="flex items-center gap-2 px-3 py-2 border-b border-white/[0.06] bg-bg-primary/40">
              <div className="w-4 h-4 rounded bg-accent-violet/30 flex items-center justify-center">
                <span className="text-[7px] font-bold text-accent-violet">B</span>
              </div>
              <div className="flex-1 h-1.5 rounded bg-white/[0.06]" />
            </div>
            <div className="p-3 grid grid-cols-3 gap-1.5">
              {[
                "from-cyan-600/40 to-teal-600/40",
                "from-violet-600/40 to-purple-600/40",
                "from-rose-600/40 to-pink-600/40",
                "from-amber-600/40 to-orange-600/40",
                "from-emerald-600/40 to-green-600/40",
                "from-indigo-600/40 to-blue-600/40",
              ].map((grad, i) => (
                <div key={i} className={`aspect-square rounded-md bg-gradient-to-br ${grad}`} />
              ))}
            </div>
            <div className="px-3 pb-2 flex items-center gap-1.5">
              <div className="w-3 h-3 rounded-full bg-accent-cyan/30 flex items-center justify-center">
                <Sparkles size={6} className="text-accent-cyan" />
              </div>
              <div className="flex-1 flex gap-1">
                {Array.from({ length: 7 }).map((_, i) => (
                  <div key={i} className="flex-1 h-3 rounded-sm" style={{ background: `hsl(${i * 50}, 60%, 50%)` }} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        style={{
          animation: `hero-entry 1s ease-out 3.5s forwards`,
          opacity: 0,
        }}
      >
        <a
          href="#about"
          className="flex flex-col items-center gap-3 group"
        >
          <span className="text-[10px] tracking-[0.25em] uppercase text-text-muted/60 group-hover:text-text-secondary transition-colors duration-300">
            Scroll
          </span>
          <div className="relative">
            <div className="w-[18px] h-[30px] rounded-full border border-text-muted/20 group-hover:border-accent-cyan/30 transition-colors duration-300 flex items-start justify-center p-1.5">
              <div
                className="w-[3px] h-[6px] rounded-full bg-gradient-to-b from-accent-cyan to-accent-violet"
                style={{ animation: "scroll-bounce 2s ease-in-out infinite" }}
              />
            </div>
          </div>
        </a>
      </div>

      <style>{`
        @keyframes float-card {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-6px); }
        }
        @keyframes scroll-bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(10px); }
        }
      `}</style>
    </section>
  );
}
