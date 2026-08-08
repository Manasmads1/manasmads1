import { motion } from "framer-motion";
import { viewportOnce } from "@/lib/motion";

const tools = [
  "CAPCUT",
  "ALIGHT MOTION",
  "CANVA",
  "FIGMA",
  "DAVINCI RESOLVE",
  "PYTHON",
  "HTML",
  "CSS",
  "JAVASCRIPT",
  "REACT",
  "BOOTSTRAP",
  "AI TOOLS",
];

const ToolsSection = () => {
  const strip = tools.map((t) => `${t} ·`).join(" ") + " ";

  return (
    <section id="tools" className="relative overflow-hidden border-y border-border py-16 md:py-24">
      <motion.span
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={viewportOnce}
        className="shell flex items-center gap-3 px-5 font-mono text-[11px] uppercase tracking-[0.28em] text-muted-foreground md:px-10 lg:px-16"
      >
        <span className="text-accent">05</span>
        <span className="h-px w-8 bg-border" aria-hidden="true" />
        Tools
      </motion.span>

      <div className="relative mt-8">
        <div className="animate-marquee whitespace-nowrap">
          <span className="font-heading text-5xl font-semibold tracking-tight text-foreground/[0.07] md:text-7xl lg:text-8xl">
            {strip + strip}
          </span>
        </div>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-background to-transparent md:w-44" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-background to-transparent md:w-44" />
      </div>

      <ul className="shell mt-10 flex flex-wrap gap-2.5 px-5 md:px-10 lg:px-16">
        {tools.map((t) => (
          <li
            key={t}
            className="rounded-full border border-border bg-card px-4 py-2 font-mono text-[10.5px] uppercase tracking-[0.16em] text-muted-foreground shadow-soft transition-colors duration-300 hover:text-foreground"
          >
            {t}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ToolsSection;
