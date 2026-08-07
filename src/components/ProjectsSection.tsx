import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import TiltCard from "@/components/ui/TiltCard";
import ProjectMockup from "@/components/work/ProjectMockup";
import { reveal, stagger, viewportOnce } from "@/lib/motion";

export type ProjectMockupKind = "reel" | "ad" | "web" | "design";

const projects: {
  idx: string;
  title: string;
  category: string;
  desc: string;
  metric: string;
  tags: string[];
  kind: ProjectMockupKind;
}[] = [
  {
    idx: "01",
    title: "Viral Reel Campaigns",
    category: "Social Media · 2022–Present",
    desc: "10+ organic viral reels across pages",
    metric: "10+ viral reels",
    tags: ["CapCut", "Alight Motion", "Hooks"],
    kind: "reel",
  },
  {
    idx: "02",
    title: "Brand Ad Creation",
    category: "Marketing & AI · 2024",
    desc: "AI-assisted ad concepts, visual storytelling for brands",
    metric: "AI-assisted concepts",
    tags: ["AI Tools", "Copy", "Art Direction"],
    kind: "ad",
  },
  {
    idx: "03",
    title: "Web Projects",
    category: "Development · Ongoing",
    desc: "Professional webpage builds with Python & HTML",
    metric: "Shipped & ongoing",
    tags: ["Python", "HTML", "Responsive"],
    kind: "web",
  },
  {
    idx: "04",
    title: "Canva Design Portfolio",
    category: "Visual Design · 2022–Present",
    desc: "End-to-end design across branding, social, and print",
    metric: "Branding → print",
    tags: ["Canva", "Figma", "Systems"],
    kind: "design",
  },
];

const ProjectsSection = () => (
  <section id="work" className="section-padding shell">
    <SectionHeading
      index="02"
      label="Work"
      title={
        <>
          Selected work, built to be <span className="text-gradient">seen</span>.
        </>
      }
      lead="Four bodies of work spanning short-form video, brand advertising, web builds and visual design."
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
            <div className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-card shadow-soft transition-shadow duration-500 hover:shadow-soft-lg">
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

                <div className="mt-auto flex items-center justify-between border-t border-border pt-4">
                  <span className="text-sm font-medium text-foreground">{p.metric}</span>
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-muted text-muted-foreground transition-all duration-500 group-hover:bg-primary group-hover:text-primary-foreground">
                    <ArrowUpRight size={16} aria-hidden="true" />
                  </span>
                </div>
              </div>
            </div>
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

export default ProjectsSection;
