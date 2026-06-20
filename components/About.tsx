import { motion } from "framer-motion";
import { about, experience, education } from "../data/content";
import { Award, Building2, Briefcase, GraduationCap, Calendar } from "lucide-react";
import SectionHeader from "./ui/SectionHeader";
import Reveal from "./ui/Reveal";

function StatIcon({ label }: { label: string }) {
  const icons: Record<string, React.ElementType> = {
    "Active Brands": Building2,
    "Years Experience": Award,
    "Projects Delivered": Briefcase,
  };
  const Icon = icons[label] || Award;
  return <Icon size={14} />;
}

export default function About() {
  return (
    <section id="about" className="py-16 lg:py-20 relative overflow-hidden">
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
                    src="https://ik.imagekit.io/ceh1i98cy/dsfsd.jpg"
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
                    <div className="font-heading text-xl font-bold gradient-text">{stat.value}</div>
                    <div className="text-text-muted text-[10px]">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal direction="right" delay={0.2} className="lg:col-span-3">
            <div className="space-y-4 text-text-secondary leading-relaxed">
              {about.bio.split("\n\n").slice(0, 2).map((paragraph, i) => (
                <p key={i} className="text-sm sm:text-base">{paragraph}</p>
              ))}
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
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
            </div>

            {/* Compact experience */}
            <div className="mt-8 border-t border-border-subtle pt-8">
              <h3 className="text-xs font-semibold tracking-wider uppercase text-text-muted mb-4 flex items-center gap-2">
                <Briefcase size={12} /> Experience
              </h3>
              <div className="space-y-3">
                {experience.slice(0, 3).map((job, i) => (
                  <div
                    key={job.company}
                    className="flex items-start gap-3 bg-bg-card/60 backdrop-blur-sm rounded-xl p-4 border border-border-subtle"
                  >
                    <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-accent-cyan/10 to-accent-violet/10 border border-accent-cyan/20 flex items-center justify-center shrink-0">
                      <Briefcase size={14} className="text-accent-cyan" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-sm font-semibold text-text-primary">{job.role}</p>
                      <p className="text-xs text-accent-violet">{job.company}</p>
                      <p className="text-text-muted text-[10px] mt-0.5 flex items-center gap-1">
                        <Calendar size={10} />
                        {job.period}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Education compact */}
            <div className="mt-4">
              <h3 className="text-xs font-semibold tracking-wider uppercase text-text-muted mb-4 flex items-center gap-2">
                <GraduationCap size={12} /> Education
              </h3>
              <div className="space-y-3">
                {education.map((edu, i) => (
                  <div
                    key={edu.degree}
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
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
