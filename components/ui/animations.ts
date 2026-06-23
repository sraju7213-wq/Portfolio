// --- Shared easing curves ---
export const easeOut = [0.25, 0.46, 0.45, 0.94] as const;
export const easeSpring = [0.34, 1.56, 0.64, 1] as const;
export const easeInOut = [0.76, 0, 0.24, 1] as const;
export const easeIn = [0.55, 0.085, 0.68, 0.53] as const;

// --- Viewport options (for IntersectionObserver) ---
export const viewportOnce = { once: true as const, margin: "-80px" as const };
export const viewportEarly = { once: true as const, margin: "-120px" as const };
export const viewportLate = { once: true as const, margin: "-50px" as const };
