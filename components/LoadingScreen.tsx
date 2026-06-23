import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function LoadingScreen() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let cancelled = false;

    const done = () => {
      if (!cancelled) setLoading(false);
    };

    const timeout = setTimeout(done, 800);

    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 90) return prev + 0.5;
        return prev + Math.random() * 8;
      });
    }, 100);

    if (document.readyState === "complete") {
      clearTimeout(timeout);
      done();
    } else {
      window.addEventListener("load", () => {
        clearTimeout(timeout);
        done();
      });
    }

    return () => {
      cancelled = true;
      clearTimeout(timeout);
      clearInterval(progressInterval);
    };
  }, []);

  const text = "STUDIO";

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          exit={{ opacity: 0, scale: 1.15, filter: "blur(20px)" }}
          transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[200] bg-bg-primary flex items-center justify-center overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-bg-primary via-bg-surface/30 to-bg-primary" />
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:60px_60px]" />

          <motion.div
            className="absolute w-[500px] h-[500px] rounded-full"
            style={{ background: "conic-gradient(from 0deg, transparent, rgba(0,229,255,0.1), rgba(139,92,246,0.1), transparent)" }}
            animate={{ rotate: 360 }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          />

          <div className="relative z-10">
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="relative text-center"
            >
              <div className="flex items-center justify-center gap-1.5">
                {text.split("").map((letter, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, y: 60, rotateX: -90 }}
                    animate={{ opacity: 1, y: 0, rotateX: 0 }}
                    transition={{
                      duration: 0.7,
                      delay: 0.2 + i * 0.1,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="font-heading text-6xl sm:text-7xl md:text-8xl font-bold tracking-[0.15em] inline-block"
                    style={{ perspective: "1000px" }}
                  >
                    <span className="gradient-text-shimmer">{letter}</span>
                  </motion.span>
                ))}
              </div>

              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1.2, delay: 0.9, ease: [0.22, 1, 0.36, 1] }}
                className="h-[2px] mt-8 mx-auto rounded-full origin-left"
                style={{ width: "60%", background: "linear-gradient(90deg, transparent, #00e5ff, #8b5cf6, transparent)" }}
              />

              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.3, duration: 0.6 }}
                className="mt-6"
              >
                <p className="text-text-muted text-xs tracking-[0.35em] uppercase font-medium">
                  Creative Developer / Brand Designer
                </p>
                <div className="flex items-center justify-center gap-3 mt-4">
                  <span className="text-[10px] text-accent-cyan/50 tracking-[0.2em] uppercase">Brand</span>
                  <span className="w-4 h-[1px] bg-accent-violet/30" />
                  <span className="text-[10px] text-accent-violet/50 tracking-[0.2em] uppercase">Design</span>
                  <span className="w-4 h-[1px] bg-accent-cyan/30" />
                  <span className="text-[10px] text-accent-cyan/50 tracking-[0.2em] uppercase">Code</span>
                  <span className="w-4 h-[1px] bg-accent-violet/30" />
                  <span className="text-[10px] text-accent-violet/50 tracking-[0.2em] uppercase">Motion</span>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
                className="mt-10 flex flex-col items-center gap-2"
              >
                <div className="w-48 h-[2px] bg-white/[0.03] rounded-full overflow-hidden">
                  <motion.div
                    className="h-full rounded-full"
                    style={{ background: "linear-gradient(90deg, #00e5ff, #8b5cf6)", width: `${Math.min(progress, 100)}%` }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                  />
                </div>
                <p className="text-[10px] text-text-muted/40 tracking-[0.3em]">
                  {Math.min(Math.round(progress), 100)}%
                </p>
              </motion.div>
            </motion.div>

            <motion.div
              className="absolute -inset-24 rounded-full blur-[100px] -z-10"
              style={{ background: "radial-gradient(circle, rgba(0,229,255,0.12), rgba(139,92,246,0.08), transparent)" }}
              animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
