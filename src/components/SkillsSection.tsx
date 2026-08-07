import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import { reveal, stagger, viewportOnce } from "@/lib/motion";

const skills = [
  { name: "Video Editing (CapCut / DaVinci)", level: "INTERMEDIATE" },
  { name: "Motion Graphics (Alight Motion)", level: "INTERMEDIATE" },
  { name: "Canva Design (Full Suite)", level: "INTERMEDIATE" },
  { name: "Python Development", level: "INTERMEDIATE" },
  { name: "HTML & Webpage Building", level: "INTERMEDIATE" },
  { name: "Script Writing & Content Creation", level: "PROFICIENT" },
  { name: "Prompt Engineering", level: "BEGINNER" },
  { name: "3D Modelling", level: "BEGINNER" },
  { name: "AI-Assisted Ad Creation", level: "INTERMEDIATE" },
  { name: "Document & Presentation Creation", level: "PROFICIENT" },
  { name: "Affiliate Marketing", level: "ACTIVE" },
  { name: "Social Media Creation", level: "CREATOR BY PASSION" },
];

const levelStyles: Record<string, string> = {
  BEGINNER: "bg-muted text-muted-foreground",
  INTERMEDIATE: "bg-accent-soft text-accent",
  PROFICIENT: "bg-primary text-primary-foreground",
  ACTIVE: "bg-[hsl(140_60%_45%/0.14)] text-[hsl(140_55%_28%)]",
  "CREATOR BY PASSION": "bg-[hsl(24_85%_50%/0.14)] text-[hsl(24_75%_38%)]",
};

const SkillsSection = () => (
  <section id="skills" className="section-padding shell">
    <SectionHeading
      index="04"
      label="Skills"
      title={
        <>
          A toolkit that spans <span className="text-gradient">frame and function</span>.
        </>
      }
    />

    <motion.ul
      variants={stagger(0.05, 0.05)}
      initial="hidden"
      whileInView="show"
      viewport={viewportOnce}
      className="mt-14 grid gap-3 sm:grid-cols-2 lg:grid-cols-3"
    >
      {skills.map((s) => (
        <motion.li
          key={s.name}
          variants={reveal}
          whileHover={{ y: -4 }}
          transition={{ type: "spring", stiffness: 280, damping: 24 }}
          className="group flex h-full flex-col justify-between gap-4 rounded-2xl border border-border bg-card p-5 shadow-soft transition-shadow duration-500 hover:shadow-soft-md"
        >
          <span className="font-heading text-[17px] font-medium leading-snug tracking-tight">
            {s.name}
          </span>
          <span
            className={`w-fit rounded-full px-3 py-1 font-mono text-[9.5px] uppercase tracking-[0.16em] ${
              levelStyles[s.level] ?? "bg-muted text-muted-foreground"
            }`}
          >
            {s.level}
          </span>
        </motion.li>
      ))}
    </motion.ul>
  </section>
);

export default SkillsSection;
