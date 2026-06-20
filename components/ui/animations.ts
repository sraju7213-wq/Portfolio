import { type Variants, type Transition } from "framer-motion";

// --- Shared easing curves ---
export const easeOut = [0.25, 0.46, 0.45, 0.94] as const;
export const easeSpring = [0.34, 1.56, 0.64, 1] as const;
export const easeInOut = [0.76, 0, 0.24, 1] as const;
export const easeIn = [0.55, 0.085, 0.68, 0.53] as const;

export const spring: Transition = {
  type: "spring",
  stiffness: 60,
  damping: 20,
  restDelta: 0.001,
};

export const springSnap: Transition = {
  type: "spring",
  stiffness: 100,
  damping: 15,
};

export const springGentle: Transition = {
  type: "spring",
  stiffness: 40,
  damping: 25,
};

// --- Viewport options ---
export const viewportOnce = { once: true as const, margin: "-80px" as const };
export const viewportEarly = { once: true as const, margin: "-120px" as const };
export const viewportLate = { once: true as const, margin: "-50px" as const };

// --- Stagger container variants ---
export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
      ease: easeOut,
    },
  },
};

export const staggerContainerFast: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.04,
      delayChildren: 0.05,
      ease: easeOut,
    },
  },
};

export const staggerContainerSlow: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.15,
      ease: easeOut,
    },
  },
};

// --- Child reveal variants ---
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: easeOut },
  },
};

export const fadeDown: Variants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: easeOut },
  },
};

export const fadeLeft: Variants = {
  hidden: { opacity: 0, x: 30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: easeOut },
  },
};

export const fadeRight: Variants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: easeOut },
  },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: easeOut },
  },
};

export const scaleOut: Variants = {
  hidden: { opacity: 0, scale: 1.05 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.7, ease: easeOut },
  },
};

// --- Card hover ---
export const cardHover = {
  whileHover: { y: -6, scale: 1.01, transition: { duration: 0.3, ease: easeOut } },
  whileTap: { scale: 0.98 },
};

// --- Button hover ---
export const buttonHover = {
  whileHover: { scale: 1.04, y: -2, transition: { duration: 0.3, ease: easeOut } },
  whileTap: { scale: 0.97 },
};

// --- Section label animation ---
export const sectionLabel: Variants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: easeOut },
  },
};

// --- Count-up animation support ---
export const countUp = (target: number) => ({
  hidden: { count: 0 },
  visible: {
    count: target,
    transition: { duration: 1.5, ease: easeOut },
  },
});

// --- Line reveal (clip-path) ---
export const lineReveal: Variants = {
  hidden: { clipPath: "inset(0 100% 0 0)" },
  visible: {
    clipPath: "inset(0 0% 0 0)",
    transition: { duration: 0.8, ease: easeOut },
  },
};
