import { useState, useEffect, useRef } from "react";
import { motion, useSpring, useTransform, useScroll } from "framer-motion";
import { about, experience, education } from "../data/content";
import { Award, Building2, Briefcase, GraduationCap, Calendar, ChevronDown, Download } from "lucide-react";
import SectionHeader from "./ui/SectionHeader";
import Reveal from "./ui/Reveal";
import { useInView } from "../hooks";

function AnimatedNumber({ value, suffix = "" }: { value: string; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const { ref: viewRef, isInView } = useInView({ once: true });
  const [displayValue, setDisplayValue] = useState("0");

  const num = parseInt(value.replace(/[^0-9]/g, ""));
  const hasPlus = value.includes("+");

  useEffect(() => {
    if (!isInView || isNaN(num)) {
      setDisplayValue(value);
      return;
    }
    let start = 0;
    const duration = 1500;
    const step = Math.max(1, Math.floor(num / 60));
    const timer = setInterval(() => {
      start += step;
      if (start >= num) {
        setDisplayValue(value);
        clearInterval(timer);
      } else {
        setDisplayValue(`${start}${hasPlus ? "+" : ""}`);
      }
    }, duration / (num / step));
    return () => clearInterval(timer);
  }, [isInView, num, value, hasPlus]);

  return <span ref={viewRef}>{displayValue}</span>;
}

function StatIcon({ label }: { label: string }) {
  const icons: Record<string, React.ElementType> = {
    "Active Brands": Building2,
    "Years Experience": Award,
    "Projects Delivered": Briefcase,
  };
  const Icon = icons[label] || Award;
  return <Icon size={14} />;
}

function ExperienceTimeline() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  return (
    <div className="mt-8 border-t border-border-subtle pt-8">
      <h3 className="text-xs font-semibold tracking-wider uppercase text-text-muted mb-4 flex items-center gap-2">
        <Briefcase size={12} /> Experience
      </h3>
      <div className="space-y-3">
        {experience.map((job, i) => {
          const isExpanded = expandedIndex === i;
          return (
            <motion.div
              key={job.company}
              layout
              onClick={() => setExpandedIndex(isExpanded ? null : i)}
              className="group cursor-pointer bg-bg-card/60 backdrop-blur-sm rounded-xl border border-border-subtle overflow-hidden transition-all duration-300 hover:border-accent-violet/30"
            >
              <div className="flex items-start gap-3 p-4">
                <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-accent-cyan/10 to-accent-violet/10 border border-accent-cyan/20 flex items-center justify-center shrink-0">
                  <Briefcase size={14} className="text-accent-cyan" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-semibold text-text-primary">{job.role}</p>
                  <p className="text-xs text-accent-violet">{job.company}</p>
                  <p className="text-text-muted text-[10px] mt-0.5 flex items-center gap-1">
                    <Calendar size={10} />
                    {job.period}
                  </p>
                </div>
                <motion.div
                  animate={{ rotate: isExpanded ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="mt-1 text-text-muted group-hover:text-text-secondary transition-colors"
                >
                  <ChevronDown size={14} />
                </motion.div>
              </div>
              <motion.div
                initial={false}
                animate={{
                  height: isExpanded ? "auto" : 0,
                  opacity: isExpanded ? 1 : 0,
                }}
                transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="overflow-hidden"
              >
                <div className="px-4 pb-4 pt-0 border-t border-border-subtle mx-4">
                  <ul className="space-y-1.5 mt-3">
                    {job.highlights.map((h, j) => (
                      <li key={j} className="flex items-start gap-2 text-text-muted text-xs">
                        <span className="w-1 h-1 rounded-full bg-accent-violet/60 mt-1.5 shrink-0" />
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const parallaxY = useTransform(scrollYProgress, [0, 1], [60, -60]);

  return (
    <section id="about" ref={sectionRef} className="py-16 lg:py-20 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-accent-violet/[0.03] blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] rounded-full bg-accent-cyan/[0.03] blur-[100px]" />
        <div className="absolute inset-0 bg-grid opacity-20" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8">
        <SectionHeader
          badge="About"
          title="Creative Developer & Brand Designer"
          description="Self-taught. Multi-disciplinary. Building real things for real businesses since 2017."
        />

        <div className="grid lg:grid-cols-5 gap-8 items-start">
          <Reveal direction="left" delay={0.1} className="lg:col-span-2">
            <div className="flex flex-col items-center lg:items-start">
              <div className="relative w-40 h-40 sm:w-48 sm:h-48 mb-6">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-accent-cyan/20 to-accent-violet/20 animate-pulse blur-lg" />
                <div className="relative w-full h-full rounded-2xl gradient-border bg-bg-surface overflow-hidden">
                  <img
                    src="https://ik.imagekit.io/ceh1i98cy/dsfsd.jpg?tr=w-384,h-384"
                    srcSet="https://ik.imagekit.io/ceh1i98cy/dsfsd.jpg?tr=w-192,h-192 192w, https://ik.imagekit.io/ceh1i98cy/dsfsd.jpg?tr=w-384,h-384 384w"
                    sizes="192px"
                    alt="RAJU SHEIKH"
                    className="w-full h-full object-cover"
                    loading="lazy"
                    width={192}
                    height={192}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-bg-primary/50 to-transparent" />
                </div>
              </div>

              <div className="grid grid-cols-3 gap-2 w-full max-w-xs">
                {about.stats.map((stat, i) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.2 + i * 0.05 }}
                    className="bg-bg-card/80 backdrop-blur-sm rounded-xl p-3 border border-border-subtle text-center"
                  >
                    <div className="w-6 h-6 rounded-lg bg-accent-violet/10 flex items-center justify-center mx-auto mb-1">
                      <StatIcon label={stat.label} />
                    </div>
                    <div className="font-heading text-xl font-bold gradient-text">
                      <AnimatedNumber value={stat.value} />
                    </div>
                    <div className="text-text-muted text-[10px]">{stat.label}</div>
                  </motion.div>
                ))}
              </div>

              {/* Download Resume */}
              <motion.a
                href="#"
                onClick={(e) => e.preventDefault()}
                className="mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-border-subtle text-text-muted hover:text-accent-cyan hover:border-accent-cyan/30 transition-all duration-300 text-xs group"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Download size={12} className="group-hover:-translate-y-0.5 transition-transform" />
                Download Resume
              </motion.a>
            </div>
          </Reveal>

          <Reveal direction="right" delay={0.2} className="lg:col-span-3">
            <div className="space-y-4 text-text-secondary leading-relaxed">
              {about.bio.split("\n\n").slice(0, 2).map((paragraph, i) => (
                <motion.p
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                  className="text-sm sm:text-base"
                >
                  {paragraph}
                </motion.p>
              ))}
            </div>

            {/* Philosophy */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="mt-6 p-4 rounded-xl bg-gradient-to-r from-accent-cyan/[0.03] to-accent-violet/[0.03] border border-white/[0.06] italic"
            >
              <p className="text-text-secondary text-sm leading-relaxed">
                "{about.philosophy}"
              </p>
            </motion.div>

            <motion.div style={{ y: parallaxY }} className="mt-6 flex flex-wrap gap-2">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-accent-cyan to-accent-violet text-bg-primary font-semibold text-sm hover:shadow-lg hover:shadow-accent-cyan/20 transition-all"
              >
                Let's Connect
              </a>
              <a
                href="#work"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-border-subtle text-text-secondary hover:text-white hover:border-accent-violet/50 transition-all text-sm"
              >
                View My Work
              </a>
            </motion.div>

            {/* Experience Timeline (interactive) */}
            <ExperienceTimeline />

            {/* Education compact */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="mt-4"
            >
              <h3 className="text-xs font-semibold tracking-wider uppercase text-text-muted mb-4 flex items-center gap-2">
                <GraduationCap size={12} /> Education
              </h3>
              <div className="space-y-3">
                {education.map((edu, i) => (
                  <motion.div
                    key={edu.degree}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.1 + i * 0.05 }}
                    className="flex items-start gap-3 bg-bg-card/60 backdrop-blur-sm rounded-xl p-4 border border-border-subtle"
                  >
                    <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-accent-violet/10 to-accent-cyan/10 border border-accent-violet/20 flex items-center justify-center shrink-0">
                      <GraduationCap size={14} className="text-accent-violet" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-sm font-semibold text-text-primary">{edu.degree}</p>
                      <p className="text-xs text-text-muted">{edu.institution}</p>
                      <span className="inline-block mt-1 px-2 py-0.5 rounded bg-bg-elevated border border-border-subtle text-text-muted text-[10px]">
                        {edu.year}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
