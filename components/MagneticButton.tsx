import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function MagneticButton({
  children,
  className = "",
  href,
  onClick,
}: {
  children: React.ReactNode;
  className?: string;
  href?: string;
  onClick?: () => void;
}) {
  const ref = useRef<HTMLAnchorElement>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    const touchQuery = window.matchMedia("(hover: none)");
    setIsTouch(touchQuery.matches);
    
    const handler = (e: MediaQueryListEvent) => setIsTouch(e.matches);
    touchQuery.addEventListener("change", handler);
    return () => touchQuery.removeEventListener("change", handler);
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isTouch) return;
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setPos({ x: x * 0.3, y: y * 0.3 });
  };

  const handleMouseLeave = () => {
    if (isTouch) return;
    setPos({ x: 0, y: 0 });
  };

  return (
    <motion.a
      ref={ref}
      href={href}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={isTouch ? {} : { x: pos.x, y: pos.y }}
      transition={isTouch ? {} : { type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      className={className}
    >
      {children}
    </motion.a>
  );
}
