import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function LoadingScreen() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const done = () => setLoading(false);
    const timeout = setTimeout(done, 500);

    if (document.readyState === "complete") {
      clearTimeout(timeout);
      done();
    } else {
      window.addEventListener("load", done, { once: true });
    }

    return () => {
      clearTimeout(timeout);
      window.removeEventListener("load", done);
    };
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[200] bg-[#09090b] flex items-center justify-center"
        >
          <div className="flex flex-col items-center">
            <div className="font-heading text-2xl font-bold text-[#fafafa] tracking-widest flex items-center gap-2">
              <span>RAJU SHEIKH</span>
              <span className="font-mono text-xs text-[#ff4800] font-normal">[ STUDIO ]</span>
            </div>
            <div className="w-24 h-0.5 bg-[#18181b] mt-4 rounded-full overflow-hidden">
              <motion.div
                initial={{ x: "-100%" }}
                animate={{ x: "100%" }}
                transition={{ duration: 0.6, repeat: Infinity, ease: "easeInOut" }}
                className="w-full h-full bg-[#ff4800]"
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
