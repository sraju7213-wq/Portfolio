import { useRef, useState, useEffect } from "react";
import { Sparkles } from "lucide-react";

type SectionHeaderProps = {
  badge: string;
  title: string;
  description?: string;
};

export default function SectionHeader({ badge, title, description }: SectionHeaderProps) {
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
      { rootMargin: "-100px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="text-center mb-10 lg:mb-12"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(20px)",
        transition: "opacity 0.5s ease-out, transform 0.5s ease-out",
      }}
    >
      <div
        className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent-cyan/[0.06] border border-accent-cyan/15 mb-3"
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? "scale(1)" : "scale(0.9)",
          transition: "opacity 0.4s ease-out 0.1s, transform 0.4s ease-out 0.1s",
        }}
      >
        <Sparkles size={12} className="text-accent-cyan" />
        <span className="text-[10px] font-medium tracking-wider text-accent-cyan uppercase">
          {badge}
        </span>
      </div>
      <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-text-primary gradient-text-shimmer">
        {title}
      </h2>
      {description && (
        <p className="text-text-secondary text-sm mt-3 max-w-2xl mx-auto">
          {description}
        </p>
      )}
      <div className="section-divider mt-4" />
    </div>
  );
}
