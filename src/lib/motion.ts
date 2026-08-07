import type { Transition, Variants } from "framer-motion";

/** Shared easing + spring vocabulary. Everything on the site uses these. */
export const EASE = [0.16, 1, 0.3, 1] as const;

export const spring: Transition = {
  type: "spring",
  stiffness: 260,
  damping: 30,
  mass: 0.9,
};

export const springSoft: Transition = {
  type: "spring",
  stiffness: 140,
  damping: 22,
  mass: 1,
};

/** Layered reveal: blur + lift + scale, never a plain fade. */
export const reveal: Variants = {
  hidden: { opacity: 0, y: 28, filter: "blur(10px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.9, ease: EASE },
  },
};

export const revealLeft: Variants = {
  hidden: { opacity: 0, x: -28, filter: "blur(8px)" },
  show: { opacity: 1, x: 0, filter: "blur(0px)", transition: { duration: 0.9, ease: EASE } },
};

export const stagger = (delayChildren = 0, staggerChildren = 0.08): Variants => ({
  hidden: {},
  show: { transition: { delayChildren, staggerChildren } },
});

export const viewportOnce = { once: true, margin: "-12% 0px -12% 0px" } as const;