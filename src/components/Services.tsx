import { Code, Palette, Sparkles, CheckCircle2 } from "lucide-react";
import { services, skills } from "../data/content";
import SectionHeader from "./ui/SectionHeader";
import Reveal from "./ui/Reveal";

const skillIcons: Record<string, typeof Code> = { Code, Palette, Sparkles };

export default function Services() {
  return (
    <section id="services" className="py-20 lg:py-28 relative overflow-hidden bg-[#09090b]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <SectionHeader
          badge="WHAT I DO"
          title="Full-Stack Creative Services"
          description="One self-taught maker across the entire journey — strategy, design, development, and the AI tooling that accelerates it all."
        />

        {/* Services cards */}
        <div className="grid md:grid-cols-2 gap-5 mb-14">
          {services.map((service, i) => (
            <Reveal key={service.id} delay={i * 0.08}>
              <div className="group h-full bg-[#121215] border border-white/10 rounded-2xl p-7 hover:border-[#ff4800]/40 hover:-translate-y-1 transition-all duration-300 shadow-lg relative overflow-hidden">
                <div className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${service.gradient}`} />
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-[11px] text-[#ff4800] uppercase tracking-widest font-semibold">
                    {service.label}
                  </span>
                  <span className="font-mono text-[10px] text-[#71717a] uppercase tracking-wider">0{i + 1}</span>
                </div>
                <h3 className="font-heading text-2xl font-bold text-[#fafafa] mb-3">{service.headline}</h3>
                <p className="text-sm text-[#a1a1aa] leading-relaxed mb-5">{service.description}</p>
                <ul className="space-y-2.5">
                  {service.items.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm text-[#fafafa]">
                      <CheckCircle2 size={16} className="text-[#ff4800] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Skills & Tools */}
        <Reveal delay={0.1}>
          <div className="bg-[#121215] border border-white/10 rounded-2xl p-7">
            <div className="font-mono text-xs text-[#ff4800] uppercase tracking-widest font-semibold mb-6">
              {"// TOOLBOX & CAPABILITIES"}
            </div>
            <div className="grid sm:grid-cols-3 gap-6">
              {skills.map((group) => {
                const Icon = skillIcons[group.icon] ?? Sparkles;
                return (
                  <div key={group.category}>
                    <div className="flex items-center gap-2 mb-3">
                      <Icon size={16} className="text-[#ff4800]" />
                      <h4 className="font-heading font-bold text-sm text-[#fafafa] uppercase tracking-wider">
                        {group.category}
                      </h4>
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {group.items.map((item) => (
                        <span
                          key={item}
                          className="px-2.5 py-1 rounded-md bg-[#18181b] border border-white/10 text-[11px] font-mono text-[#a1a1aa]"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
