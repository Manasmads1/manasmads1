import { motion } from "framer-motion";

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

const SkillsSection = () => (
  <section id="skills" className="section-padding max-w-7xl mx-auto">
    <motion.span
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="section-label"
    >
      04 / Skills
    </motion.span>

    <div className="space-y-0">
      {skills.map((s, i) => (
        <motion.div
          key={s.name}
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.04 }}
          className="group flex items-center justify-between py-4 md:py-5 border-b border-border hover:bg-card/40 hover:px-4 transition-all duration-300"
        >
          <span className="font-heading text-lg md:text-2xl font-medium group-hover:text-primary transition-colors duration-300">
            {s.name}
          </span>
          <span className="text-[10px] md:text-[11px] tracking-[0.2em] uppercase border border-border text-muted-foreground rounded-full px-3 py-1 flex-shrink-0 ml-4">
            {s.level}
          </span>
        </motion.div>
      ))}
    </div>
  </section>
);

export default SkillsSection;
