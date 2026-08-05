import { useRef, useState, useEffect } from "react";

type SectionHeaderProps = {
  badge: string;
  title: string;
  description?: string;
  align?: "center" | "left";
};

export default function SectionHeader({ badge, title, description, align = "center" }: SectionHeaderProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(el);
        }
      },
      { rootMargin: "-80px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const alignClass = align === "left" ? "text-left items-start" : "text-center items-center";

  return (
    <div
      ref={ref}
      className={`flex flex-col ${alignClass} mb-12 lg:mb-16`}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(15px)",
        transition: "opacity 0.5s ease-out, transform 0.5s ease-out",
      }}
    >
      {/* Monospaced System Badge */}
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#18181b] border border-white/10 mb-3 font-mono text-[11px] text-[#a1a1aa] uppercase tracking-wider">
        <span className="w-1.5 h-1.5 rounded-full bg-[#ff4800]" />
        <span>{badge}</span>
      </div>

      {/* Main Section Title */}
      <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#fafafa]">
        {title}
      </h2>

      {/* Description */}
      {description && (
        <p className="text-[#a1a1aa] text-sm sm:text-base mt-3 max-w-2xl leading-relaxed">
          {description}
        </p>
      )}

      {/* Clean Subtle Divider */}
      <div className="w-12 h-0.5 bg-[#ff4800] mt-4 rounded-full" />
    </div>
  );
}
