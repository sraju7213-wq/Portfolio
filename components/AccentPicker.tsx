import { useState, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Palette, Check } from "lucide-react";
import { useLocalStorage } from "../hooks";

const themes = [
  {
    name: "Cyan",
    primary: "#00e5ff",
    secondary: "#a855f7",
    css: "--accent-cyan: #00e5ff; --accent-violet: #a855f7;",
  },
  {
    name: "Rose",
    primary: "#f43f5e",
    secondary: "#ec4899",
    css: "--accent-cyan: #f43f5e; --accent-violet: #ec4899;",
  },
  {
    name: "Amber",
    primary: "#f59e0b",
    secondary: "#d97706",
    css: "--accent-cyan: #f59e0b; --accent-violet: #d97706;",
  },
  {
    name: "Emerald",
    primary: "#10b981",
    secondary: "#14b8a6",
    css: "--accent-cyan: #10b981; --accent-violet: #14b8a6;",
  },
  {
    name: "Violet",
    primary: "#8b5cf6",
    secondary: "#ec4899",
    css: "--accent-cyan: #8b5cf6; --accent-violet: #ec4899;",
  },
];

export default function AccentPicker() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTheme, setActiveTheme] = useLocalStorage("accent-theme", "Cyan");

  const applyTheme = useCallback((name: string) => {
    const theme = themes.find((t) => t.name === name);
    if (!theme) return;
    setActiveTheme(name);
    document.documentElement.style.setProperty("--accent-cyan", theme.primary);
    document.documentElement.style.setProperty("--accent-violet", theme.secondary);

    // Also update Tailwind-compatible CSS variables
    const style = document.createElement("style");
    style.id = "accent-theme-override";
    style.textContent = `
      :root {
        --accent-cyan: ${theme.primary};
        --accent-violet: ${theme.secondary};
      }
    `;
    const existing = document.getElementById("accent-theme-override");
    if (existing) existing.remove();
    document.head.appendChild(style);
  }, [setActiveTheme]);

  useEffect(() => {
    applyTheme(activeTheme);
  }, []); // only on mount

  return (
    <div className="fixed bottom-8 left-8 z-[60]">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 10 }}
            transition={{ duration: 0.2 }}
            className="mb-3 p-2 rounded-2xl bg-bg-surface/90 backdrop-blur-xl border border-border-subtle shadow-xl"
          >
            <div className="flex flex-col gap-1.5">
              {themes.map((theme) => (
                <button
                  key={theme.name}
                  onClick={() => { applyTheme(theme.name); setIsOpen(false); }}
                  className={`flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs transition-all ${
                    activeTheme === theme.name
                      ? "bg-white/10 text-white"
                      : "text-text-muted hover:text-text-secondary hover:bg-white/5"
                  }`}
                >
                  <div
                    className="w-4 h-4 rounded-full border border-white/20"
                    style={{ background: `linear-gradient(135deg, ${theme.primary}, ${theme.secondary})` }}
                  />
                  <span>{theme.name}</span>
                  {activeTheme === theme.name && <Check size={10} className="ml-auto text-accent-cyan" />}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="w-10 h-10 rounded-full bg-bg-surface/80 backdrop-blur-xl border border-border-subtle flex items-center justify-center text-text-muted hover:text-accent-cyan hover:border-accent-cyan/30 transition-all shadow-lg"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        title="Change accent color"
      >
        <Palette size={16} />
      </motion.button>
    </div>
  );
}
