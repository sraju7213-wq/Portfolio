import { useEffect, useCallback, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

/**
 * Layered custom cursor.
 * Architecture: each layer is a positioning wrapper (motion.div driven by
 * x/y motion values) containing a visual inner div. The inner div centers
 * itself via translate(-50%, -50%) and owns all hover/click state. This
 * separates position (framer-motion transform) from visuals (inner
 * transform) so they never fight over the same `transform` property.
 */
const INTERACTIVE_SELECTOR =
  'a, button, [role="button"], input, textarea, select, label, [data-cursor]';
const ACCENT = "255, 72, 0"; // #ff4800 as rgb() params

export default function CustomCursor() {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  // Layered trailing: glow trails most, ring trails gently, dot is instant.
  const ringX = useSpring(cursorX, { stiffness: 220, damping: 24, mass: 0.1 });
  const ringY = useSpring(cursorY, { stiffness: 220, damping: 24, mass: 0.1 });
  const glowX = useSpring(cursorX, { stiffness: 120, damping: 22, mass: 0.18 });
  const glowY = useSpring(cursorY, { stiffness: 120, damping: 22, mass: 0.18 });

  const [hovering, setHovering] = useState(false);
  const [clicking, setClicking] = useState(false);
  const [visible, setVisible] = useState(false);

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      setVisible(true);
    },
    [cursorX, cursorY]
  );

  const handleMouseOver = useCallback((e: MouseEvent) => {
    const target = (e.target as HTMLElement).closest?.(INTERACTIVE_SELECTOR);
    if (target) setHovering(true);
  }, []);

  const handleMouseOut = useCallback((e: MouseEvent) => {
    const target = (e.target as HTMLElement).closest?.(INTERACTIVE_SELECTOR);
    if (!target) return;
    // Only reset when actually leaving the interactive element (not when
    // moving between its children) — prevents flicker.
    const related = e.relatedTarget as HTMLElement | null;
    if (!related || !related.closest?.(INTERACTIVE_SELECTOR)) {
      setHovering(false);
    }
  }, []);

  const handleWindowLeave = useCallback(() => setVisible(false), []);

  useEffect(() => {
    const isTouch = window.matchMedia("(pointer: coarse)").matches;
    if (isTouch) return;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reducedMotion) return; // keep native cursor for reduced-motion users

    document.body.style.cursor = "none";

    const onDown = () => setClicking(true);
    const onUp = () => setClicking(false);

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    document.addEventListener("mouseover", handleMouseOver, { passive: true });
    document.addEventListener("mouseout", handleMouseOut, { passive: true });
    document.addEventListener("mousedown", onDown);
    document.addEventListener("mouseup", onUp);
    document.addEventListener("mouseleave", handleWindowLeave);
    window.addEventListener("blur", handleWindowLeave);

    const style = document.createElement("style");
    style.textContent = `${INTERACTIVE_SELECTOR} { cursor: none !important; }`;
    document.head.appendChild(style);

    return () => {
      document.body.style.cursor = "";
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseout", handleMouseOut);
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("mouseup", onUp);
      document.removeEventListener("mouseleave", handleWindowLeave);
      window.removeEventListener("blur", handleWindowLeave);
      document.head.removeChild(style);
    };
  }, [handleMouseMove, handleMouseOver, handleMouseOut, handleWindowLeave]);

  const visualTransition =
    "width 0.25s cubic-bezier(0.25,0.46,0.45,0.94), height 0.25s cubic-bezier(0.25,0.46,0.45,0.94), background 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease, transform 0.15s ease";

  const ringSize = hovering ? 46 : 30;
  const ringScale = clicking ? 0.82 : 1;

  return (
    <>
      {/* Outer glow — depth layer, trails furthest */}
      <motion.div
        className="fixed top-0 left-0 z-[9998] pointer-events-none will-change-transform hidden md:block"
        style={{ x: glowX, y: glowY, opacity: visible ? 1 : 0 }}
      >
        <div
          className="absolute left-0 top-0 rounded-full"
          style={{
            width: 64,
            height: 64,
            transform: `translate(-50%, -50%) scale(${hovering ? 1.4 : 1})`,
            background: `radial-gradient(circle, rgba(${ACCENT},0.16) 0%, transparent 70%)`,
            opacity: hovering ? 0.6 : 0.32,
            transition: "opacity 0.3s ease, transform 0.3s ease",
          }}
        />
      </motion.div>

      {/* Outer ring — brand-colored, trails gently */}
      <motion.div
        className="fixed top-0 left-0 z-[9999] pointer-events-none will-change-transform hidden md:block"
        style={{ x: ringX, y: ringY, opacity: visible ? 1 : 0 }}
      >
        <div
          className="absolute left-0 top-0 rounded-full border backdrop-blur-[2px]"
          style={{
            width: ringSize,
            height: ringSize,
            transform: `translate(-50%, -50%) scale(${ringScale})`,
            borderColor: hovering ? `rgba(${ACCENT}, 0.85)` : `rgba(${ACCENT}, 0.4)`,
            background: hovering ? `rgba(${ACCENT}, 0.06)` : "transparent",
            boxShadow: hovering
              ? `0 0 22px rgba(${ACCENT}, 0.28)`
              : `0 0 12px rgba(${ACCENT}, 0.1)`,
            transition: visualTransition,
          }}
        />
      </motion.div>

      {/* Inner dot — tracks the real pointer instantly (no spring) */}
      <motion.div
        className="fixed top-0 left-0 z-[9999] pointer-events-none will-change-transform hidden md:block"
        style={{ x: cursorX, y: cursorY, opacity: visible ? 1 : 0 }}
      >
        <div
          className="absolute left-0 top-0 rounded-full"
          style={{
            width: 6,
            height: 6,
            transform: "translate(-50%, -50%)",
            background: clicking ? "#ffffff" : `rgba(${ACCENT}, 0.95)`,
            boxShadow: clicking
              ? "0 0 10px rgba(255,255,255,0.7)"
              : `0 0 8px rgba(${ACCENT}, 0.5)`,
            transition: "background 0.2s ease, box-shadow 0.2s ease",
          }}
        />
      </motion.div>
    </>
  );
}
