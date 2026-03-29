import { useRef, useState, useEffect } from "react";

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
  maxTilt?: number;
  glowIntensity?: number;
}

export default function TiltCard({
  children,
  className = "",
  maxTilt = 6,
  glowIntensity = 0.08,
}: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isTouch, setIsTouch] = useState(false);
  const [style, setStyle] = useState({
    transform: "perspective(1000px) rotateX(0deg) rotateY(0deg)",
    glowX: 50,
    glowY: 50,
  });

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
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    const rotateX = (0.5 - y) * maxTilt;
    const rotateY = (x - 0.5) * maxTilt;
    setStyle({
      transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`,
      glowX: x * 100,
      glowY: y * 100,
    });
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isTouch) return;
    const el = ref.current;
    if (!el) return;
    const touch = e.touches[0];
    const rect = el.getBoundingClientRect();
    const x = (touch.clientX - rect.left) / rect.width;
    const y = (touch.clientY - rect.top) / rect.height;
    const rotateX = (0.5 - y) * maxTilt * 0.5;
    const rotateY = (x - 0.5) * maxTilt * 0.5;
    setStyle({
      transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
      glowX: x * 100,
      glowY: y * 100,
    });
    setIsHovered(true);
  };

  const handleMouseEnter = () => !isTouch && setIsHovered(true);
  const handleTouchStart = () => isTouch && setIsHovered(true);

  const handleMouseLeave = () => {
    if (isTouch) return;
    setIsHovered(false);
    setStyle({
      transform: "perspective(1000px) rotateX(0deg) rotateY(0deg)",
      glowX: 50,
      glowY: 50,
    });
  };

  const handleTouchEnd = () => {
    if (!isTouch) return;
    setIsHovered(false);
    setStyle({
      transform: "perspective(1000px) rotateX(0deg) rotateY(0deg)",
      glowX: 50,
      glowY: 50,
    });
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onTouchMove={handleTouchMove}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      className={`${className} transition-shadow duration-500 ${isTouch ? "touch-device" : ""}`}
      style={{
        transform: style.transform,
        transition: isHovered
          ? "transform 0.15s ease-out"
          : "transform 0.4s ease-out",
        transformStyle: "preserve-3d",
        willChange: "transform",
      }}
    >
      <div
        className="absolute inset-0 rounded-2xl pointer-events-none"
        style={{
          background: `radial-gradient(600px circle at ${style.glowX}% ${style.glowY}%, rgba(0,229,255,${glowIntensity}), transparent 40%)`,
          opacity: isHovered ? 1 : 0,
          transition: "opacity 0.5s ease",
        }}
      />
      {children}
    </div>
  );
}
