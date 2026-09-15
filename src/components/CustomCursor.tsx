import { useEffect, useRef, useState } from "react";

/** Precise pointer accent: no trailing animation, no viewport drift, no click interference. */
const CustomCursor = () => {
  const cursor = useRef<HTMLDivElement>(null);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const canHover = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!canHover || reduced) return;

    setEnabled(true);

    const move = (event: MouseEvent) => {
      const node = cursor.current;
      if (!node) return;
      node.style.left = `${event.clientX}px`;
      node.style.top = `${event.clientY}px`;
      node.dataset.interactive = Boolean(
        (event.target as HTMLElement)?.closest("a, button, input, textarea, [role='button']"),
      ).toString();
    };

    const leave = () => {
      if (cursor.current) cursor.current.style.opacity = "0";
    };
    const enter = () => {
      if (cursor.current) cursor.current.style.opacity = "1";
    };

    window.addEventListener("mousemove", move, { passive: true });
    document.documentElement.addEventListener("mouseleave", leave);
    document.documentElement.addEventListener("mouseenter", enter);
    return () => {
      window.removeEventListener("mousemove", move);
      document.documentElement.removeEventListener("mouseleave", leave);
      document.documentElement.removeEventListener("mouseenter", enter);
    };
  }, []);

  if (!enabled) return null;

  return (
    <div
      ref={cursor}
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-[9999] hidden h-5 w-5 -translate-x-1/2 -translate-y-1/2 rounded-full border border-accent/70 opacity-0 mix-blend-multiply transition-[width,height,background-color,opacity] duration-150 md:block"
    />
  );
};

export default CustomCursor;
