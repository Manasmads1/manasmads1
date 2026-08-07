import { useEffect, useRef, useState } from "react";

/**
 * Two-layer cursor: a crisp dot plus a lagging ring driven by rAF,
 * so it never re-renders React on pointer move.
 */
const CustomCursor = () => {
  const dot = useRef<HTMLDivElement>(null);
  const ring = useRef<HTMLDivElement>(null);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    if (
      window.matchMedia("(hover: none)").matches ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    )
      return;

    setEnabled(true);

    const target = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    const eased = { ...target };
    let raf = 0;

    const move = (e: MouseEvent) => {
      target.x = e.clientX;
      target.y = e.clientY;
      if (dot.current) {
        dot.current.style.transform = `translate3d(${e.clientX - 3}px, ${e.clientY - 3}px, 0)`;
        dot.current.style.opacity = "1";
      }
      const interactive = (e.target as HTMLElement)?.closest(
        "a, button, input, textarea, [role='button']",
      );
      if (ring.current) ring.current.style.scale = interactive ? "1.7" : "1";
    };

    const loop = () => {
      eased.x += (target.x - eased.x) * 0.16;
      eased.y += (target.y - eased.y) * 0.16;
      if (ring.current) {
        ring.current.style.transform = `translate3d(${eased.x - 17}px, ${eased.y - 17}px, 0)`;
        ring.current.style.opacity = "1";
      }
      raf = requestAnimationFrame(loop);
    };

    window.addEventListener("mousemove", move, { passive: true });
    raf = requestAnimationFrame(loop);
    return () => {
      window.removeEventListener("mousemove", move);
      cancelAnimationFrame(raf);
    };
  }, []);

  if (!enabled) return null;

  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-[9999] hidden md:block">
      <div
        ref={ring}
        className="absolute left-0 top-0 h-[34px] w-[34px] rounded-full border border-foreground/25 opacity-0 transition-[scale] duration-300 ease-out"
      />
      <div
        ref={dot}
        className="absolute left-0 top-0 h-1.5 w-1.5 rounded-full bg-accent opacity-0"
      />
    </div>
  );
};

export default CustomCursor;
