import { useRef, useState, useEffect, Children } from "react";

type StaggerRevealProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  staggerDelay?: number;
};

export default function StaggerReveal({
  children,
  className,
  delay = 0.1,
  staggerDelay = 0.08,
}: StaggerRevealProps) {
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

  const items = Children.toArray(children);

  return (
    <div ref={ref} className={className}>
      {items.map((child, i) => (
        <div
          key={i}
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(30px)",
            transition: `opacity 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) ${delay + i * staggerDelay}s, transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) ${delay + i * staggerDelay}s`,
          }}
        >
          {child}
        </div>
      ))}
    </div>
  );
}
