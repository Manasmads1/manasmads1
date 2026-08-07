import { motion, useScroll, useTransform } from "framer-motion";

const glyphs = ["</>", "{ }", "=>", "()", "[]", "#", "&&", "::", "/*", "$_"];

/**
 * Fixed, layered ambient backdrop: mesh gradient wash, drifting blobs,
 * wireframe geometry, animated grid, faint code glyphs and grain.
 * Purely decorative.
 */
const BackgroundSystem = () => {
  const { scrollYProgress } = useScroll();
  const gridY = useTransform(scrollYProgress, [0, 1], ["0%", "-14%"]);
  const blobY = useTransform(scrollYProgress, [0, 1], ["0%", "-26%"]);
  const wireY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const gridOpacity = useTransform(scrollYProgress, [0, 0.15, 0.85, 1], [0.9, 0.45, 0.45, 0.9]);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden noise-layer bg-background"
    >
      {/* mesh gradient wash */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(1100px 700px at 78% 8%, hsl(var(--accent) / 0.09), transparent 62%)," +
            "radial-gradient(900px 600px at 8% 32%, hsl(210 60% 60% / 0.07), transparent 60%)," +
            "radial-gradient(1000px 700px at 55% 100%, hsl(var(--surface) / 0.07), transparent 65%)",
        }}
      />

      {/* animated grid */}
      <motion.div
        style={{ y: gridY, opacity: gridOpacity }}
        className="absolute -inset-y-[20%] inset-x-0 grid-lines opacity-60"
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(70% 60% at 50% 40%, transparent 20%, hsl(var(--background)) 100%)",
        }}
      />

      {/* drifting blobs */}
      <motion.div style={{ y: blobY }} className="absolute inset-0">
        <div className="animate-blob-drift absolute -left-32 top-[12%] h-[34rem] w-[34rem] rounded-full bg-accent/10 blur-[130px]" />
        <div
          className="animate-blob-drift absolute right-[-10%] top-[48%] h-[30rem] w-[30rem] rounded-full bg-[hsl(190_70%_55%/0.10)] blur-[140px]"
          style={{ animationDelay: "-9s" }}
        />
        <div
          className="animate-blob-drift absolute left-[35%] bottom-[-12%] h-[28rem] w-[28rem] rounded-full bg-[hsl(260_70%_60%/0.08)] blur-[150px]"
          style={{ animationDelay: "-17s" }}
        />
      </motion.div>

      {/* wireframe geometry */}
      <motion.svg
        style={{ y: wireY }}
        className="absolute inset-0 h-full w-full text-foreground/[0.055]"
        viewBox="0 0 1200 900"
        fill="none"
        preserveAspectRatio="xMidYMid slice"
      >
        <circle cx="1040" cy="150" r="120" stroke="currentColor" strokeWidth="1" />
        <circle cx="1040" cy="150" r="78" stroke="currentColor" strokeWidth="1" />
        <rect
          x="90"
          y="600"
          width="180"
          height="180"
          stroke="currentColor"
          strokeWidth="1"
          transform="rotate(18 180 690)"
        />
        <path d="M300 120 L420 60 L540 120 L420 180 Z" stroke="currentColor" strokeWidth="1" />
        <path d="M700 760 L820 700 L940 760" stroke="currentColor" strokeWidth="1" />
      </motion.svg>

      {/* faint code glyphs */}
      <div className="absolute inset-0">
        {glyphs.map((g, i) => (
          <span
            key={g}
            className="animate-blob-drift absolute font-mono text-foreground/[0.05]"
            style={{
              left: `${(i * 11 + 6) % 94}%`,
              top: `${(i * 23 + 9) % 92}%`,
              fontSize: `${12 + (i % 4) * 6}px`,
              animationDelay: `${-i * 3.1}s`,
              animationDuration: `${30 + (i % 5) * 6}s`,
            }}
          >
            {g}
          </span>
        ))}
      </div>
    </div>
  );
};

export default BackgroundSystem;