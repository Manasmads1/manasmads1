import { useEffect, useRef, useState, type ReactNode } from "react";
import { motion } from "framer-motion";

/** Scroll-triggered fade/slide wrapper used across the dark theme. */
export const FadeIn = ({
  children,
  delay = 0,
  duration = 0.7,
  x = 0,
  y = 30,
  className,
}: {
  children: ReactNode;
  delay?: number;
  duration?: number;
  x?: number;
  y?: number;
  className?: string;
}) => (
  <motion.div
    className={className}
    initial={{ opacity: 0, x, y }}
    whileInView={{ opacity: 1, x: 0, y: 0 }}
    viewport={{ once: true, margin: "50px", amount: 0 }}
    transition={{ delay, duration, ease: [0.25, 0.1, 0.25, 1] }}
  >
    {children}
  </motion.div>
);

/** Cursor-following magnetic wrapper. */
export const Magnet = ({
  children,
  padding = 150,
  strength = 3,
  className,
}: {
  children: ReactNode;
  padding?: number;
  strength?: number;
  className?: string;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [active, setActive] = useState(false);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      const el = ref.current;
      if (!el) return;
      const r = el.getBoundingClientRect();
      const cx = r.left + r.width / 2;
      const cy = r.top + r.height / 2;
      const dx = e.clientX - cx;
      const dy = e.clientY - cy;
      const inside =
        Math.abs(dx) < r.width / 2 + padding && Math.abs(dy) < r.height / 2 + padding;
      if (inside) {
        setActive(true);
        setPos({ x: dx / strength, y: dy / strength });
      } else {
        setActive(false);
        setPos({ x: 0, y: 0 });
      }
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, [padding, strength]);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        transform: `translate3d(${pos.x}px, ${pos.y}px, 0)`,
        transition: active ? "transform 0.3s ease-out" : "transform 0.6s ease-in-out",
        willChange: "transform",
      }}
    >
      {children}
    </div>
  );
};

/** Character-by-character scroll reveal. */
export const AnimatedText = ({ text, className }: { text: string; className?: string }) => {
  const ref = useRef<HTMLParagraphElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const el = ref.current;
      if (!el) return;
      const r = el.getBoundingClientRect();
      const start = window.innerHeight * 0.8;
      const end = window.innerHeight * 0.2;
      const p = (start - r.top) / Math.max(1, start - end + r.height);
      setProgress(Math.min(1, Math.max(0, p)));
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  const chars = text.split("");
  return (
    <p ref={ref} className={className} aria-label={text}>
      {chars.map((c, i) => (
        <span
          key={`${c}-${i}`}
          aria-hidden="true"
          style={{
            opacity: progress * chars.length > i ? 1 : 0.2,
            transition: "opacity 0.25s linear",
          }}
        >
          {c}
        </span>
      ))}
    </p>
  );
};

export const ContactButton = ({ label = "Contact Me" }: { label?: string }) => (
  <a
    href="#dark-contact"
    className="inline-block rounded-full px-8 py-3 text-xs font-medium uppercase tracking-widest text-white transition-transform duration-300 hover:scale-[1.03] sm:px-10 sm:py-3.5 sm:text-sm md:px-12 md:py-4 md:text-base"
    style={{
      background:
        "linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)",
      boxShadow:
        "0px 4px 4px rgba(181, 1, 167, 0.25), 4px 4px 12px #7721B1 inset",
      outline: "2px solid #fff",
      outlineOffset: "-3px",
    }}
  >
    {label}
  </a>
);

export const LiveProjectButton = ({
  href = "#dark-projects",
  label = "Live Project",
}: {
  href?: string;
  label?: string;
}) => (
  <a
    href={href}
    className="inline-block whitespace-nowrap rounded-full border-2 border-[#D7E2EA] px-8 py-3 text-sm font-medium uppercase tracking-widest text-[#D7E2EA] transition-colors hover:bg-[#D7E2EA]/10 sm:px-10 sm:py-3.5 sm:text-base"
  >
    {label}
  </a>
);
