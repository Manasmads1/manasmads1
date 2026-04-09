import { motion } from "framer-motion";
import certGenAI from "@/assets/cert-genai.jpg";

const certificates = [
  {
    title: "Generative AI Mastermind",
    issuer: "Outskill — Vaibhav Sisinty",
    image: certGenAI,
  },
];

const AchievementsSection = () => (
  <section id="achievements" className="section-padding max-w-7xl mx-auto">
    <motion.span
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="section-label"
    >
      07 / Achievements
    </motion.span>

    <motion.h2
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="font-heading font-bold text-4xl md:text-6xl leading-[1.1] mb-12"
    >
      Certifications &amp;&nbsp;
      <span className="text-gradient">Recognition</span>
    </motion.h2>

    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {certificates.map((cert, i) => (
        <motion.div
          key={cert.title}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1 }}
          className="group rounded-xl border border-[hsl(var(--border))] bg-[hsl(var(--surface))] overflow-hidden hover:border-primary/50 transition-colors duration-300"
        >
          <div className="overflow-hidden">
            <img
              src={cert.image}
              alt={cert.title}
              className="w-full aspect-[4/3] object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div className="p-5">
            <h3 className="font-heading font-semibold text-lg text-foreground mb-1">
              {cert.title}
            </h3>
            <p className="text-muted-foreground text-sm">{cert.issuer}</p>
          </div>
        </motion.div>
      ))}
    </div>
  </section>
);

export default AchievementsSection;
