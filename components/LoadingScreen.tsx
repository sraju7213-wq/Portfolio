import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function LoadingScreen() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          exit={{ opacity: 0, scale: 1.1 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="fixed inset-0 z-[200] bg-bg-primary flex items-center justify-center"
        >
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <div className="flex items-center gap-1">
                {["R", "A", "J", "U"].map((letter, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.5,
                      delay: 0.2 + i * 0.1,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="font-heading text-6xl sm:text-7xl font-bold gradient-text"
                  >
                    {letter}
                  </motion.span>
                ))}
              </div>

              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="h-[2px] mt-4 rounded-full origin-left"
                style={{
                  background: "linear-gradient(90deg, #00e5ff, #8b5cf6)",
                }}
              />

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                className="text-text-muted text-xs tracking-[0.3em] uppercase mt-3 text-center"
              >
                Creative Portfolio
              </motion.p>
            </motion.div>

            <motion.div
              className="absolute -inset-20 rounded-full blur-[80px] -z-10"
              style={{
                background: "radial-gradient(circle, rgba(0,229,255,0.15), rgba(139,92,246,0.1), transparent)",
              }}
              animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
