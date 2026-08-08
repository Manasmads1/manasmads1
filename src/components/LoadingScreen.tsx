import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";

const MAX_MS = 1200;

/** Minimal MANAS intro. Never traps the user: hard-capped at ~1.2s. */
const LoadingScreen = () => {
  const reduced = useReducedMotion();
  const [done, setDone] = useState(false);

  useEffect(() => {
    let cancelled = false;
    const finish = () => {
      if (!cancelled) setDone(true);
    };

    const cap = window.setTimeout(finish, MAX_MS);

    const ready = Promise.all([
      document.fonts?.ready ?? Promise.resolve(),
      document.readyState === "complete"
        ? Promise.resolve()
        : new Promise<void>((res) => window.addEventListener("load", () => res(), { once: true })),
    ]);

    ready.then(() => window.setTimeout(finish, reduced ? 0 : 320));

    return () => {
      cancelled = true;
      window.clearTimeout(cap);
    };
  }, [reduced]);

  /* lock scroll only while visible, always released on unmount */
  useEffect(() => {
    if (done) {
      document.body.style.overflow = "";
      return;
    }
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [done]);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: reduced ? 0 : 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background"
          role="status"
          aria-live="polite"
        >
          <span className="sr-only">Loading</span>
          <motion.span
            initial={reduced ? false : { opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            aria-hidden="true"
            className="font-heading text-[2.5rem] font-semibold tracking-[0.22em] text-foreground md:text-[3.25rem]"
          >
            MANAS
          </motion.span>

          <div
            aria-hidden="true"
            className="mt-7 h-px w-40 overflow-hidden bg-border md:w-56"
          >
            <motion.div
              initial={{ scaleX: reduced ? 1 : 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: reduced ? 0 : MAX_MS / 1000, ease: "easeInOut" }}
              className="h-full w-full origin-left bg-accent"
            />
          </div>

          <span
            aria-hidden="true"
            className="mt-5 font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground"
          >
            Portfolio
          </span>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;