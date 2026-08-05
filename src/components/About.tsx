import { useState } from "react";
import { motion } from "framer-motion";
import { about, experience, education, skills } from "../data/content";
import { Briefcase, Calendar, Download, ChevronDown, CheckCircle2, MapPin, GraduationCap } from "lucide-react";
import SectionHeader from "./ui/SectionHeader";

function ExperienceTimeline() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  return (
    <div className="space-y-3">
      <div className="font-mono text-xs text-[#ff4800] uppercase tracking-wider font-semibold mb-3">
        // PROFESSIONAL HISTORY (2017 — PRESENT)
      </div>

      {experience.map((job, i) => {
        const isExpanded = expandedIndex === i;
        return (
          <div
            key={job.company}
            className="bg-[#121215] border border-white/10 rounded-xl overflow-hidden transition-all"
          >
            <button
              onClick={() => setExpandedIndex(isExpanded ? null : i)}
              className="w-full flex items-center justify-between p-4 text-left hover:bg-[#18181b] transition-colors"
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#18181b] border border-white/10 flex items-center justify-center text-[#ff4800] font-mono text-xs font-bold shrink-0">
                  0{i + 1}
                </div>
                <div>
                  <h4 className="font-heading font-bold text-sm text-[#fafafa]">{job.role}</h4>
                  <div className="flex items-center gap-2 text-xs text-[#a1a1aa] font-mono">
                    <span className="text-[#ff4800]">{job.company}</span>
                    <span>•</span>
                    <span className="flex items-center gap-1 text-[11px] text-[#71717a]">
                      <Calendar size={11} /> {job.period}
                    </span>
                  </div>
                </div>
              </div>

              <div className="text-[#71717a]">
                <ChevronDown
                  size={16}
                  className={`transition-transform duration-200 ${isExpanded ? "rotate-180 text-[#ff4800]" : ""}`}
                />
              </div>
            </button>

            {isExpanded && (
              <div className="px-5 pb-5 pt-2 border-t border-white/5 bg-[#09090b]/50">
                <ul className="space-y-2 mt-2">
                  {job.highlights.map((h, j) => (
                    <li key={j} className="flex items-start gap-2 text-xs text-[#a1a1aa] leading-relaxed">
                      <CheckCircle2 size={13} className="text-[#ff4800] mt-0.5 shrink-0" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default function About() {
  return (
    <section id="about" className="py-20 lg:py-28 relative overflow-hidden bg-[#09090b]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        
        <SectionHeader
          badge="THE MAKER BEHIND THE CRAFT"
          title="About Raju Sheikh"
          description="Self-taught creative developer and brand designer building real digital systems for real businesses."
        />

        {/* Stats Strip — full width across the top */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-16">
          {about.stats.map((s) => (
            <div key={s.label} className="p-5 rounded-2xl bg-[#121215] border border-white/10 text-center group hover:border-[#ff4800]/30 transition-colors">
              <div className="font-mono text-3xl font-bold text-[#ff4800] group-hover:scale-110 transition-transform">{s.value}</div>
              <div className="font-mono text-[11px] text-[#71717a] uppercase tracking-wider mt-1.5">{s.label}</div>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Photo + Resume */}
          <div className="lg:col-span-4 flex flex-col items-center">
            
            {/* Profile Photo Frame */}
            <div className="relative w-48 h-48 sm:w-56 sm:h-56 mb-6">
              <div className="w-full h-full rounded-2xl bg-[#121215] border-2 border-white/10 overflow-hidden shadow-2xl relative group">
                <img
                  src="/images/profile.jpg"
                  alt="RAJU SHEIKH"
                  className="w-full h-full object-cover grayscale contrast-125 group-hover:grayscale-0 transition-all duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#09090b] via-transparent to-transparent opacity-80" />
                
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between font-mono text-[10px] text-[#fafafa] bg-[#09090b]/80 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/10">
                  <div className="flex items-center gap-1.5">
                    <MapPin size={11} className="text-[#ff4800]" />
                    <span>New Delhi, India</span>
                  </div>
                  <span className="text-[#ff4800] font-bold">EST. 2017</span>
                </div>
              </div>
            </div>

            {/* Resume Button */}
            <a
              href="/Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#18181b] border border-white/10 text-xs font-mono text-[#fafafa] hover:bg-[#ff4800] hover:border-[#ff4800] transition-all"
            >
              <Download size={13} />
              <span>DOWNLOAD RESUME (PDF)</span>
            </a>

          </div>

          {/* Right Column: Bio + Core Pillars */}
          <div className="lg:col-span-8 space-y-6">
            
            {/* Bio Card */}
            <div className="bg-[#121215] border border-white/10 rounded-2xl p-6 lg:p-8 space-y-4 text-sm text-[#a1a1aa] leading-relaxed">
              <div className="font-mono text-xs text-[#ff4800] uppercase tracking-wider font-semibold">
                // THE SELF-TAUGHT PHILOSOPHY
              </div>

              <p className="text-[#fafafa] font-medium text-base leading-snug">
                {about.studioTagline}
              </p>

              {about.bio.split("\n\n").map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>

            {/* Core Pillars + Skills Grid */}
            <div className="grid sm:grid-cols-3 gap-3">
              {about.pillars.map((pillar) => (
                <div key={pillar.title} className="p-4 rounded-xl bg-[#121215] border border-white/10 hover:border-[#ff4800]/20 transition-colors">
                  <h4 className="font-heading font-bold text-sm text-[#fafafa] mb-1.5">{pillar.title}</h4>
                  <p className="text-[11px] text-[#a1a1aa] leading-relaxed">{pillar.description}</p>
                </div>
              ))}
            </div>

          </div>
        </div>

        {/* Skills Section — full width */}
        <div className="mt-12">
          <div className="font-mono text-xs text-[#ff4800] uppercase tracking-wider font-semibold mb-4">
            // CRAFT TOOLKIT
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {skills.map((group) => (
              <div key={group.category} className="p-5 rounded-2xl bg-[#121215] border border-white/10 hover:border-[#ff4800]/20 transition-colors">
                <h4 className="font-heading font-bold text-sm text-[#fafafa] mb-3">{group.category}</h4>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span key={item} className="px-3 py-1 rounded-lg bg-[#18181b] border border-white/5 text-xs font-mono text-[#a1a1aa] hover:text-[#ff4800] hover:border-[#ff4800]/20 transition-colors">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Experience + Education — side by side */}
        <div className="grid lg:grid-cols-12 gap-10 mt-12">
          
          {/* Experience Timeline */}
          <div className="lg:col-span-7">
            <ExperienceTimeline />
          </div>

          {/* Education */}
          <div className="lg:col-span-5">
            <div className="font-mono text-xs text-[#ff4800] uppercase tracking-wider font-semibold mb-3">
              {"// EDUCATION & LEARNING"}
            </div>
            <div className="space-y-3">
              {education.map((edu) => {
                return (
                  <div
                    key={edu.degree}
                    className="flex items-center gap-4 bg-[#121215] border border-white/10 rounded-xl p-4 hover:border-[#ff4800]/20 transition-colors"
                  >
                    <div className="w-10 h-10 rounded-lg bg-[#18181b] border border-white/10 flex items-center justify-center text-[#ff4800] shrink-0">
                      <GraduationCap size={18} />
                    </div>
                    <div className="min-w-0">
                      <h4 className="font-heading font-bold text-sm text-[#fafafa]">{edu.degree}</h4>
                      <div className="text-xs text-[#a1a1aa] font-mono truncate">{edu.institution}</div>
                    </div>
                    <span className="ml-auto shrink-0 font-mono text-[11px] text-[#71717a] bg-[#18181b] border border-white/10 px-2.5 py-1 rounded-md">
                      {edu.year}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
