import SectionWrapper from "./SectionWrapper";
import { motion } from "framer-motion";

const projects = [
  { title: "Viral Reel Campaigns", category: "Social Media", desc: "10+ reels with organic reach across pages" },
  { title: "Brand Ad Creation", category: "Marketing", desc: "AI-assisted ad concepts for personal brand projects" },
  { title: "Web Projects", category: "Development", desc: "Professional webpage builds using Python & HTML" },
  { title: "Canva Design Portfolio", category: "Design", desc: "End-to-end design projects across categories" },
];

const ProjectsSection = () => (
  <SectionWrapper id="work">
    <h2 className="text-3xl md:text-4xl font-heading font-bold mb-2">
      Projects & <span className="text-gradient">Work</span>
    </h2>
    <div className="w-16 h-0.5 bg-primary mb-10" />

    <div className="grid sm:grid-cols-2 gap-5">
      {projects.map((p, i) => (
        <motion.div
          key={p.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1 }}
          className="group bg-card border border-border rounded-lg p-6 hover:border-primary transition-all cursor-pointer"
        >
          <span className="text-xs text-primary font-medium uppercase tracking-wider">{p.category}</span>
          <h3 className="font-heading font-semibold text-xl mt-2 mb-2 group-hover:text-primary transition-colors">{p.title}</h3>
          <p className="text-sm text-muted-foreground mb-4">{p.desc}</p>
          <span className="text-sm text-primary font-medium">View →</span>
        </motion.div>
      ))}
    </div>

    <p className="text-center text-sm text-muted-foreground mt-8">
      More work available on request — reach out directly.
    </p>
  </SectionWrapper>
);

export default ProjectsSection;
