import { useEffect, useRef, useCallback } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const ringRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);
  const isHoveringRef = useRef(false);

  const springConfig = { stiffness: 200, damping: 18, mass: 0.08 };
  const springX = useSpring(cursorX, springConfig);
  const springY = useSpring(cursorY, springConfig);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    cursorX.set(e.clientX);
    cursorY.set(e.clientY);
  }, [cursorX, cursorY]);

  const handleMouseOver = useCallback((e: MouseEvent) => {
    const target = (e.target as HTMLElement).closest(
      'a, button, [role="button"], input, textarea, select, [data-cursor]'
    );
    if (!target) return;
    isHoveringRef.current = true;

    if (ringRef.current) {
      ringRef.current.style.width = "48px";
      ringRef.current.style.height = "48px";
      ringRef.current.style.borderColor = "rgba(255, 255, 255, 0.5)";
      ringRef.current.style.background = "rgba(255, 255, 255, 0.04)";
      ringRef.current.style.boxShadow = "0 0 24px rgba(255, 255, 255, 0.08)";
    }

    if (dotRef.current) {
      dotRef.current.style.background = "rgba(255, 255, 255, 1)";
      dotRef.current.style.boxShadow = "0 0 12px rgba(255, 255, 255, 0.5)";
    }

    if (glowRef.current) {
      glowRef.current.style.opacity = "0.6";
      glowRef.current.style.transform = "scale(1.5)";
    }
  }, []);

  const handleMouseOut = useCallback(() => {
    if (!isHoveringRef.current) return;
    isHoveringRef.current = false;

    if (ringRef.current) {
      ringRef.current.style.width = "32px";
      ringRef.current.style.height = "32px";
      ringRef.current.style.borderColor = "rgba(255, 255, 255, 0.25)";
      ringRef.current.style.background = "transparent";
      ringRef.current.style.boxShadow = "0 0 16px rgba(255, 255, 255, 0.06)";
    }

    if (dotRef.current) {
      dotRef.current.style.background = "rgba(255, 255, 255, 0.85)";
      dotRef.current.style.boxShadow = "0 0 8px rgba(255, 255, 255, 0.3)";
    }

    if (glowRef.current) {
      glowRef.current.style.opacity = "0.35";
      glowRef.current.style.transform = "scale(1)";
    }
  }, []);

  const handleClick = useCallback(() => {
    if (ringRef.current) {
      ringRef.current.style.transform = "scale(0.75)";
      ringRef.current.style.borderColor = "rgba(255, 255, 255, 0.7)";
      ringRef.current.style.background = "rgba(255, 255, 255, 0.08)";
      setTimeout(() => {
        if (!ringRef.current) return;
        ringRef.current.style.transform = "";
        if (isHoveringRef.current) {
          ringRef.current.style.borderColor = "rgba(255, 255, 255, 0.5)";
          ringRef.current.style.background = "rgba(255, 255, 255, 0.04)";
        } else {
          ringRef.current.style.borderColor = "rgba(255, 255, 255, 0.25)";
          ringRef.current.style.background = "transparent";
        }
      }, 200);
    }
  }, []);

  useEffect(() => {
    const isTouchDevice = window.matchMedia("(pointer: coarse)").matches;
    if (isTouchDevice) return;

    document.body.style.cursor = "none";

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    document.addEventListener("mouseover", handleMouseOver, { passive: true });
    document.addEventListener("mouseout", handleMouseOut, { passive: true });
    document.addEventListener("mousedown", handleClick);
    document.addEventListener("mouseup", handleClick);

    const style = document.createElement("style");
    style.textContent = `
      a, button, [role="button"], input, textarea, select, [data-cursor] {
        cursor: none !important;
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.body.style.cursor = "";
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseout", handleMouseOut);
      document.removeEventListener("mousedown", handleClick);
      document.removeEventListener("mouseup", handleClick);
      document.head.removeChild(style);
    };
  }, [handleMouseMove, handleMouseOver, handleMouseOut, handleClick]);

  return (
    <>
      {/* Outer blur glow — adds depth and visibility on dark backgrounds */}
      <motion.div
        ref={glowRef}
        className="fixed top-0 left-0 z-[9998] pointer-events-none rounded-full -translate-x-1/2 -translate-y-1/2 will-change-transform hidden md:block"
        style={{
          x: springX,
          y: springY,
          width: "64px",
          height: "64px",
          background: "radial-gradient(circle, rgba(255,255,255,0.12) 0%, transparent 70%)",
          opacity: 0.35,
          transition: "opacity 0.35s ease, transform 0.35s ease",
        }}
      />

      {/* Outer ring */}
      <motion.div
        ref={ringRef}
        className="fixed top-0 left-0 z-[9999] pointer-events-none rounded-full border -translate-x-1/2 -translate-y-1/2 will-change-transform hidden md:block backdrop-blur-sm"
        style={{
          x: springX,
          y: springY,
          width: "32px",
          height: "32px",
          borderColor: "rgba(255, 255, 255, 0.25)",
          background: "transparent",
          boxShadow: "0 0 16px rgba(255, 255, 255, 0.06)",
          transition:
            "width 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94), height 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94), background 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease, transform 0.15s ease",
        }}
      />

      {/* Inner dot */}
      <motion.div
        ref={dotRef}
        className="fixed top-0 left-0 z-[9999] pointer-events-none rounded-full -translate-x-1/2 -translate-y-1/2 will-change-transform hidden md:block"
        style={{
          x: springX,
          y: springY,
          width: "6px",
          height: "6px",
          background: "rgba(255, 255, 255, 0.85)",
          boxShadow: "0 0 8px rgba(255, 255, 255, 0.3)",
          transition: "background 0.3s ease, box-shadow 0.3s ease",
        }}
      />
    </>
  );
}
