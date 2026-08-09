import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import { reveal, stagger, viewportOnce } from "@/lib/motion";

const groups = [
  {
    index: "01",
    title: "Full Stack Web Development",
    note: "Full Frontend and Basics of Backend",
    skills: [
      { name: "HTML", level: "INTERMEDIATE" },
      { name: "CSS", level: "INTERMEDIATE" },
      { name: "JavaScript", level: "INTERMEDIATE" },
      { name: "React", level: "INTERMEDIATE" },
      { name: "Bootstrap", level: "INTERMEDIATE" },
      { name: "Python", level: "DEVELOPING BACKEND" },
    ],
  },
  {
    index: "02",
    title: "Creative Workflow",
    skills: [{ name: "Vibe Coding", level: "ACTIVE" }],
  },
  {
    index: "03",
    title: "Video, Design & Content",
    skills: [
      { name: "Video Editing (CapCut / DaVinci)", level: "INTERMEDIATE" },
      { name: "Motion Graphics (Alight Motion)", level: "INTERMEDIATE" },
      { name: "Canva Design (Full Suite)", level: "INTERMEDIATE" },
      { name: "Script Writing & Content Creation", level: "PROFICIENT" },
      { name: "AI-Assisted Ad Creation", level: "INTERMEDIATE" },
      { name: "Prompt Engineering", level: "BEGINNER" },
      { name: "3D Modelling", level: "BEGINNER" },
      { name: "Document & Presentation Creation", level: "PROFICIENT" },
      { name: "Affiliate Marketing", level: "ACTIVE" },
      { name: "Social Media Creation", level: "CREATOR BY PASSION" },
    ],
  },
];

const levelStyles: Record<string, string> = {
  BEGINNER: "bg-muted text-muted-foreground",
  INTERMEDIATE: "bg-accent-soft text-accent",
  PROFICIENT: "bg-primary text-primary-foreground",
  ACTIVE: "bg-[hsl(140_60%_45%/0.14)] text-[hsl(140_55%_28%)]",
  "DEVELOPING BACKEND": "bg-accent-soft text-accent",
  "CREATOR BY PASSION": "bg-[hsl(24_85%_50%/0.14)] text-[hsl(24_75%_38%)]",
};

const SkillsSection = () => (
  <section id="skills" className="section-padding shell">
    <SectionHeading
      index="04"
      label="Skills"
      title={
        <>
          Frontend developer, <span className="text-gradient">creative by default</span>.
        </>
      }
    />

    <div className="mt-14 space-y-14">
      {groups.map((g) => (
        <motion.div
          key={g.index}
          variants={stagger(0.04, 0.05)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="grid gap-6 border-t border-border pt-8 md:grid-cols-[14rem_1fr] md:gap-10"
        >
          <motion.div variants={reveal}>
            <span className="font-mono text-[11px] tracking-[0.2em] text-accent">{g.index}</span>
            <h3 className="mt-2 font-heading text-xl font-semibold tracking-tight">{g.title}</h3>
            {g.note && (
              <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                {g.note}
              </p>
            )}
          </motion.div>

          <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {g.skills.map((s) => (
              <motion.li
                key={s.name}
                variants={reveal}
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 280, damping: 24 }}
                className="flex h-full flex-col justify-between gap-4 rounded-2xl border border-border bg-card p-5 shadow-soft transition-shadow duration-500 hover:shadow-soft-md"
              >
                <span className="font-heading text-[16px] font-medium leading-snug tracking-tight">
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
          </ul>
        </motion.div>
      ))}
    </div>
  </section>
);

export default SkillsSection;
