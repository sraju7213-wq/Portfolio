import { motion } from "framer-motion";
import { ArrowDown, Sparkles, Code2, Terminal, Zap, Layers } from "lucide-react";
import { hero } from "../data/content";
import MagneticButton from "./MagneticButton";
import TiltCard from "./TiltCard";

const codeSnippet = `const app = createApp({
  name: "Portfolio",
  theme: "dark",
  features: [
    "high-performance",
    "premium-ui",
    "scalable"
  ],
  render: () => (
    <UserExperience 
      speed="instant"
      design="premium"
      conversion="optimized"
    />
  )
});`;

const codeLines = [
  { icon: Layers, label: "components", color: "#00e5ff" },
  { icon: Zap, label: "hooks", color: "#8b5cf6" },
  { icon: Terminal, label: "utils", color: "#10b981" },
  { icon: Code2, label: "api", color: "#f59e0b" },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-[10%] left-[10%] w-[400px] h-[400px] rounded-full bg-accent-cyan/[0.06] blur-[100px]" />
        <div className="absolute bottom-[20%] right-[10%] w-[500px] h-[500px] rounded-full bg-accent-violet/[0.06] blur-[120px]" />
        <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full bg-accent-cyan/[0.03] blur-[80px]" />
        <div className="absolute inset-0 bg-grid" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 py-20 lg:py-0">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 2.2 }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 2.4 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-cyan/[0.06] border border-accent-cyan/15 mb-8"
            >
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              >
                <Sparkles size={14} className="text-accent-cyan" />
              </motion.div>
              <span className="text-xs font-medium tracking-wider text-accent-cyan uppercase">
                Full-Stack Developer
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 2.6 }}
              className="font-heading text-4xl sm:text-5xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight leading-[1.1] mb-6"
            >
              <span className="gradient-text-shimmer text-glow">
                {hero.headline}
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 2.8 }}
              className="text-text-secondary text-base sm:text-lg md:text-xl max-w-xl mx-auto lg:mx-0 leading-relaxed mb-10"
            >
              {hero.subtitle}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 3 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-4"
            >
              <MagneticButton href="#portfolio" className="btn-primary">
                <span>{hero.ctaPrimary}</span>
              </MagneticButton>
              <MagneticButton href="#contact" className="btn-secondary">
                <span>{hero.ctaSecondary}</span>
              </MagneticButton>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 3.2 }}
              className="text-text-muted text-sm"
            >
              {hero.availability}
            </motion.p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 2.4 }}
            className="relative hidden lg:block"
          >
            <TiltCard
              className="relative"
              maxTilt={8}
              glowIntensity={0.1}
            >
              <div className="glass-heavy rounded-2xl p-6 overflow-hidden">
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500/80" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                    <div className="w-3 h-3 rounded-full bg-green-500/80" />
                  </div>
                  <div className="flex-1 text-center">
                    <span className="text-xs text-text-muted">portfolio.tsx</span>
                  </div>
                </div>

                <div className="flex gap-3 mb-4">
                  {codeLines.map((item, i) => (
                    <motion.div
                      key={item.label}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 2.6 + i * 0.1 }}
                      className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-bg-surface/50"
                    >
                      <item.icon size={12} style={{ color: item.color }} />
                      <span className="text-[10px] text-text-muted uppercase tracking-wide">
                        {item.label}
                      </span>
                    </motion.div>
                  ))}
                </div>

                <div className="relative">
                  <div className="absolute left-0 top-0 bottom-0 w-8 border-r border-border-subtle/50" />
                  <pre className="pl-10 text-xs leading-relaxed overflow-x-auto">
                    <code className="text-text-secondary">
                      <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.4, delay: 3 }}
                      >
                        <span className="text-accent-violet">const</span>{" "}
                        <span className="text-accent-cyan">app</span>{" "}
                        <span className="text-text-primary">=</span>{" "}
                        <span className="text-accent-cyan">createApp</span>
                        <span className="text-text-primary">(</span>
                        <span className="text-accent-violet">{"{"}</span>
                        {"\n"}
                        {"  "}
                        <span className="text-accent-violet">name</span>
                        <span className="text-text-primary">:</span>{" "}
                        <span className="text-green-400">"Portfolio"</span>
                        <span className="text-text-primary">,</span>
                        {"\n"}
                        {"  "}
                        <span className="text-accent-violet">theme</span>
                        <span className="text-text-primary">:</span>{" "}
                        <span className="text-green-400">"dark"</span>
                        <span className="text-text-primary">,</span>
                        {"\n"}
                        {"  "}
                        <span className="text-accent-violet">features</span>
                        <span className="text-text-primary">:</span>{" "}
                        <span className="text-text-primary">[</span>
                        {"\n"}
                        {"    "}
                        <span className="text-green-400">
                          "high-performance"
                        </span>
                        <span className="text-text-primary">,</span>
                        {"\n"}
                        {"    "}
                        <span className="text-green-400">"premium-ui"</span>
                        <span className="text-text-primary">,</span>
                        {"\n"}
                        {"    "}
                        <span className="text-green-400">"scalable"</span>
                        {"\n"}
                        {"  "}
                        <span className="text-text-primary">],</span>
                        {"\n"}
                        {"  "}
                        <span className="text-accent-violet">render</span>
                        <span className="text-text-primary">:</span>{" "}
                        <span className="text-accent-violet">()</span>{" "}
                        <span className="text-accent-violet">{'=>'}</span>{" "}
                        <span className="text-text-primary">(</span>
                        {"\n"}
                        {"    "}
                        <span className="text-accent-cyan">{'<UserExperience'}</span>
                        {"\n"}
                        {"      "}
                        <span className="text-accent-violet">speed</span>
                        <span className="text-text-primary">=</span>
                        <span className="text-green-400">"instant"</span>
                        {"\n"}
                        {"      "}
                        <span className="text-accent-violet">design</span>
                        <span className="text-text-primary">=</span>
                        <span className="text-green-400">"premium"</span>
                        {"\n"}
                        {"      "}
                        <span className="text-accent-violet">conversion</span>
                        <span className="text-text-primary">=</span>
                        <span className="text-green-400">"optimized"</span>
                        {"\n"}
                        {"    "}
                        <span className="text-text-primary">{'/>'}</span>
                        {"\n"}
                        {"  "}
                        <span className="text-text-primary">)</span>
                        {"\n"}
                        <span className="text-accent-violet">{"}"}</span>
                        <span className="text-text-primary">);</span>
                      </motion.span>
                    </code>
                  </pre>
                </div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 3.4 }}
                  className="absolute bottom-4 right-4 flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent-cyan/[0.1] border border-accent-cyan/20"
                >
                  <div className="w-2 h-2 rounded-full bg-accent-cyan animate-pulse" />
                  <span className="text-[10px] text-accent-cyan font-medium">
                    Building...
                  </span>
                </motion.div>
              </div>

              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-12 -right-12 w-24 h-24 rounded-2xl bg-gradient-to-br from-accent-cyan/20 to-accent-violet/20 backdrop-blur-xl border border-white/10 flex items-center justify-center"
              >
                <Zap size={24} className="text-accent-cyan" />
              </motion.div>

              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute -bottom-8 -left-8 w-16 h-16 rounded-xl bg-gradient-to-br from-accent-violet/20 to-accent-cyan/20 backdrop-blur-xl border border-white/10 flex items-center justify-center"
              >
                <Code2 size={20} className="text-accent-violet" />
              </motion.div>
            </TiltCard>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 2.6 }}
            className="lg:hidden"
          >
            <div className="glass-heavy rounded-2xl p-5 overflow-hidden">
              <div className="flex items-center gap-2 mb-3">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                </div>
                <span className="text-[10px] text-text-muted">portfolio.tsx</span>
              </div>
              <pre className="text-[9px] leading-relaxed overflow-x-auto">
                <code className="text-text-secondary">
                  <span className="text-accent-violet">const</span>{" "}
                  <span className="text-accent-cyan">app</span>{" "}
                  <span className="text-text-primary">=</span>{" "}
                  <span className="text-accent-cyan">createApp</span>
                  <span className="text-text-primary">({"{"}</span>
                  <span className="text-accent-violet">name</span>
                  <span className="text-text-primary">:</span>{" "}
                  <span className="text-green-400">"Portfolio"</span>
                  <span className="text-text-primary">,</span>
                  {"\n"}
                  <span className="text-accent-violet">theme</span>
                  <span className="text-text-primary">:</span>{" "}
                  <span className="text-green-400">"dark"</span>
                  <span className="text-text-primary">,</span>
                  {"\n"}
                  <span className="text-accent-violet">render</span>
                  <span className="text-text-primary">:</span>{" "}
                  <span className="text-accent-violet">()</span>{" "}
                  <span className="text-accent-violet">{'=>'}</span>{" "}
                  <span className="text-text-primary">{'<'}</span>
                  <span className="text-accent-cyan">UX</span>
                  <span className="text-text-primary">{' />'}</span>
                  <span className="text-text-primary">);</span>
                </code>
              </pre>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 3.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-text-muted hover:text-accent-cyan transition-colors duration-300"
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ArrowDown size={16} />
        </motion.div>
      </motion.a>
    </section>
  );
}
