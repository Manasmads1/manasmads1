import { motion } from "framer-motion";

const stats = [
  { value: "2022", label: "Started" },
  { value: "10+", label: "Viral Reels" },
  { value: "3K+", label: "Followers" },
  { value: "∞", label: "Ideas" },
];

const AboutSection = () => (
  <section id="about" className="section-padding max-w-7xl mx-auto">
    <motion.span
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="section-label"
    >
      03 / About
    </motion.span>

    <div className="grid md:grid-cols-[1.2fr_1fr] gap-12 md:gap-20">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <h2 className="font-heading font-bold text-4xl md:text-6xl lg:text-7xl leading-[1.1] mb-0">
          Creative.<br />
          Technical.<br />
          <span className="text-gradient">Relentless.</span>
        </h2>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.15 }}
        className="space-y-6"
      >
        <p className="text-muted-foreground text-[15px] leading-[1.8]">
          I'm Manas — a 19-year-old Computer Science student and creative freelancer. I work across video, design, code, and content because great ideas don't fit in one box. I've been building in the digital space since 2022, with 10+ viral reels, real project experience, and a growing freelance practice. Currently exploring affiliate marketing while studying Non-Medical with CS.
        </p>

        <div className="grid grid-cols-4 gap-4 pt-4">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <p className="font-heading font-bold text-2xl md:text-3xl text-foreground">{s.value}</p>
              <p className="text-[10px] tracking-[0.2em] uppercase text-muted-foreground mt-1">{s.label}</p>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap gap-3 pt-2">
          <span className="text-[11px] tracking-[0.15em] uppercase border border-primary/40 text-primary rounded-full px-4 py-1.5">
            Hindi & English Fluent
          </span>
          <span className="text-[11px] tracking-[0.15em] uppercase border border-primary/40 text-primary rounded-full px-4 py-1.5">
            Content in Major World Languages
          </span>
        </div>
      </motion.div>
    </div>
  </section>
);

export default AboutSection;
