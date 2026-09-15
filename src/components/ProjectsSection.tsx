import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import TiltCard from "@/components/ui/TiltCard";
import SpotlightCard from "@/components/ui/SpotlightCard";
import ProjectMockup from "@/components/work/ProjectMockup";
import { reveal, stagger, viewportOnce } from "@/lib/motion";

export type ProjectMockupKind = "reel" | "ad" | "web" | "design";

const projects: {
  idx: string;
  title: string;
  category: string;
  desc: string;
  metric: string;
  focus: string;
  outcome: string;
  tags: string[];
  kind: ProjectMockupKind;
}[] = [
  {
    idx: "01",
    title: "Brand Ad Creation",
    category: "Marketing & AI · 2024",
    desc: "AI-assisted ad concepts, visual storytelling for brands",
    metric: "AI-assisted concepts",
    focus: "Turning a product brief into a clear visual direction.",
    outcome: "A flexible concept system for fast creative exploration.",
    tags: ["AI Tools", "Copy", "Art Direction"],
    kind: "ad",
  },
  {
    idx: "02",
    title: "Full Stack Web Development",
    category: "Full Frontend and Basics of Backend",
    desc: "Professional webpage builds — React & Bootstrap frontends with Python and HTML foundations",
    metric: "Frontend-led builds",
    focus: "Designing responsive interfaces that feel intentional at every breakpoint.",
    outcome: "Reusable UI patterns with a strong focus on clarity and performance.",
    tags: ["React", "HTML/CSS", "Python"],
    kind: "web",
  },
  {
    idx: "03",
    title: "Canva Design Portfolio",
    category: "Visual Design · 2022–Present",
    desc: "End-to-end design across branding, social, and print",
    metric: "Branding → print",
    focus: "Building a consistent visual language across different formats.",
    outcome: "A practical design system that stays recognisable from screen to print.",
    tags: ["Canva", "Figma", "Systems"],
    kind: "design",
  },
];

const ProjectsSection = () => {
  const [selected, setSelected] = useState<string | null>(null);

  return (
  <section id="work" className="section-padding shell">
    <SectionHeading
      index="02"
      label="Work"
      title={
        <>
          Selected work, built to be <span className="text-gradient">seen</span>.
        </>
      }
      lead="Three bodies of work spanning brand advertising, full stack web development and visual design."
    />

    <motion.div
      variants={stagger(0.05, 0.1)}
      initial="hidden"
      whileInView="show"
      viewport={viewportOnce}
      className="mt-14 grid gap-6 md:mt-20 md:grid-cols-2"
    >
      {projects.map((p, i) => (
        <motion.article key={p.title} variants={reveal} className={i % 3 === 0 ? "md:mt-0" : "md:mt-8"}>
          <TiltCard intensity={4}>
            <SpotlightCard
              className={`group relative flex h-full cursor-pointer flex-col overflow-hidden rounded-3xl border bg-card shadow-soft transition-all duration-500 hover:-translate-y-1 hover:shadow-soft-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent ${
                selected === p.title
                  ? "border-accent shadow-soft-lg ring-1 ring-accent/30"
                  : "border-border"
              }`}
            >
            <div
              role="button"
              tabIndex={0}
              aria-pressed={selected === p.title}
              onClick={() => setSelected(selected === p.title ? null : p.title)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  setSelected(selected === p.title ? null : p.title);
                }
              }}
              className="relative flex h-full flex-col"
            >
              <div className="relative overflow-hidden border-b border-border bg-muted/60 p-6">
                <span className="absolute right-5 top-5 font-mono text-[11px] tracking-[0.2em] text-muted-foreground">
                  {p.idx}
                </span>
                <ProjectMockup kind={p.kind} />
              </div>

              <div className="flex flex-1 flex-col gap-3 p-6 md:p-7">
                <p className="font-mono text-[10.5px] uppercase tracking-[0.2em] text-muted-foreground">
                  {p.category}
                </p>
                <h3 className="font-heading text-2xl font-semibold tracking-tight md:text-[1.75rem]">
                  {p.title}
                </h3>
                <p className="text-[15px] leading-relaxed text-muted-foreground">{p.desc}</p>

                <ul className="mt-1 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <li
                      key={t}
                      className="rounded-full bg-muted px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.12em] text-muted-foreground"
                    >
                      {t}
                    </li>
                  ))}
                </ul>

                <AnimatePresence initial={false}>
                  {selected === p.title && (
                    <motion.div
                      initial={{ opacity: 0, height: 0, y: -8 }}
                      animate={{ opacity: 1, height: "auto", y: 0 }}
                      exit={{ opacity: 0, height: 0, y: -8 }}
                      transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="mt-3 grid gap-3 rounded-2xl bg-muted/60 p-4 sm:grid-cols-2">
                        <div>
                          <p className="font-mono text-[9px] uppercase tracking-[0.16em] text-accent">Focus</p>
                          <p className="mt-1.5 text-[12px] leading-relaxed text-muted-foreground">{p.focus}</p>
                        </div>
                        <div>
                          <p className="font-mono text-[9px] uppercase tracking-[0.16em] text-accent">Outcome</p>
                          <p className="mt-1.5 text-[12px] leading-relaxed text-muted-foreground">{p.outcome}</p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                <div className="mt-auto flex items-center justify-between border-t border-border pt-4">
                  <span className="text-sm font-medium text-foreground">{p.metric}</span>
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-muted text-muted-foreground transition-all duration-500 group-hover:bg-primary group-hover:text-primary-foreground">
                    <ArrowUpRight size={16} aria-hidden="true" />
                  </span>
                </div>
              </div>
            </div>
            </SpotlightCard>
          </TiltCard>
        </motion.article>
      ))}
    </motion.div>

    <motion.p
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={viewportOnce}
      className="mt-12 font-mono text-[13px] text-muted-foreground"
    >
      More work available on request →
    </motion.p>
  </section>
  );
};

export default ProjectsSection;
