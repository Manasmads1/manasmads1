import SectionWrapper from "./SectionWrapper";
import { motion } from "framer-motion";

const categories = [
  {
    icon: "🎬",
    title: "Video & Motion",
    skills: ["Video Editing (CapCut — Intermediate)", "DaVinci Resolve — Beginner", "Alight Motion"],
  },
  {
    icon: "🎨",
    title: "Design & Visuals",
    skills: ["Canva (Intermediate — full suite)", "Figma (Familiar)", "3D Modelling (Beginner)", "Ad Creation with AI Tools"],
  },
  {
    icon: "💻",
    title: "Tech & Code",
    skills: ["Python", "HTML", "Professional Webpage Development", "Prompt Engineering (Beginner)"],
  },
  {
    icon: "✍️",
    title: "Content & Writing",
    skills: ["Script Writing", "Content Creation", "Document Writing & Editing", "Presentation Creation"],
  },
  {
    icon: "📱",
    title: "Digital Marketing",
    skills: ["Social Media Content Creation", "Affiliate Marketing (Active)", "Brand Ad Creation"],
  },
];

const SkillsSection = () => (
  <SectionWrapper id="skills">
    <h2 className="text-3xl md:text-4xl font-heading font-bold mb-2">
      My <span className="text-gradient">Skills</span>
    </h2>
    <div className="w-16 h-0.5 bg-primary mb-4" />
    <div className="inline-block bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5 text-xs text-primary font-medium mb-10">
      Creator by Passion, Not Just Profession
    </div>

    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
      {categories.map((cat, i) => (
        <motion.div
          key={cat.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1 }}
          className="bg-card border border-border rounded-lg p-6 hover:border-primary/40 transition-colors"
        >
          <div className="text-2xl mb-3">{cat.icon}</div>
          <h3 className="font-heading font-semibold text-lg mb-3">{cat.title}</h3>
          <ul className="space-y-1.5 text-sm text-muted-foreground">
            {cat.skills.map((s) => (
              <li key={s} className="flex items-start gap-2">
                <span className="text-primary mt-1 text-xs">▸</span>
                {s}
              </li>
            ))}
          </ul>
        </motion.div>
      ))}
    </div>
  </SectionWrapper>
);

export default SkillsSection;
