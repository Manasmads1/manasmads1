import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const projects = [
  { idx: "01", title: "Viral Reel Campaigns", category: "Social Media · 2022–Present", desc: "10+ organic viral reels across pages" },
  { idx: "02", title: "Brand Ad Creation", category: "Marketing & AI · 2024", desc: "AI-assisted ad concepts, visual storytelling for brands" },
  { idx: "03", title: "Web Projects", category: "Development · Ongoing", desc: "Professional webpage builds with Python & HTML" },
  { idx: "04", title: "Canva Design Portfolio", category: "Visual Design · 2022–Present", desc: "End-to-end design across branding, social, and print" },
];

const ProjectsSection = () => (
  <section id="work" className="section-padding max-w-7xl mx-auto">
    <motion.span
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="section-label"
    >
      02 / Work
    </motion.span>

    <div className="space-y-0">
      {projects.map((p, i) => (
        <motion.div
          key={p.title}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.08 }}
          className="group border-b border-border py-8 md:py-10 flex items-center gap-6 md:gap-10 hover:border-l-2 hover:border-l-primary hover:bg-card/50 hover:pl-6 transition-all duration-300 cursor-pointer"
        >
          <span className="text-3xl md:text-5xl font-heading font-bold text-primary/15 group-hover:text-primary/30 transition-colors select-none hidden sm:block">
            {p.idx}
          </span>
          <div className="flex-1 min-w-0">
            <h3 className="font-heading font-semibold text-xl md:text-3xl group-hover:text-primary transition-colors duration-300">
              {p.title}
            </h3>
            <p className="text-[11px] tracking-[0.2em] uppercase text-muted-foreground mt-1">{p.category}</p>
            <p className="text-sm text-muted-foreground mt-2 hidden md:block">{p.desc}</p>
          </div>
          <ArrowUpRight
            size={20}
            className="text-muted-foreground group-hover:text-primary group-hover:rotate-45 transition-all duration-300 flex-shrink-0"
          />
        </motion.div>
      ))}
    </div>

    <motion.p
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="text-sm italic text-primary mt-8"
    >
      More work available on request →
    </motion.p>
  </section>
);

export default ProjectsSection;
