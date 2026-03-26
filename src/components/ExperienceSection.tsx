import { motion } from "framer-motion";

const timeline = [
  { year: "2022", desc: "Entered the digital space. First content, first reels, first reach." },
  { year: "2023", desc: "School projects, exhibitions, competitions. Built things that mattered." },
  { year: "2024", desc: "Went freelance. Expanded skills. Started affiliate marketing." },
  { year: "2025 →", desc: "Ongoing. Computer Science studies + creative work. Building what's next." },
];

const ExperienceSection = () => (
  <section id="journey" className="section-padding max-w-7xl mx-auto">
    <motion.span
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="section-label"
    >
      06 / Journey
    </motion.span>

    <div className="relative max-w-3xl mx-auto">
      {/* Center line */}
      <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-primary/30 -translate-x-1/2" />

      <div className="space-y-16">
        {timeline.map((item, i) => (
          <motion.div
            key={item.year}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="relative flex items-start gap-8 md:gap-16"
          >
            {/* Dot */}
            <div className="absolute left-4 md:left-1/2 top-2 w-3 h-3 rounded-full bg-primary -translate-x-1/2 z-10" />

            {/* Year */}
            <div className="w-20 md:w-auto md:flex-1 md:text-right pl-10 md:pl-0 md:pr-12">
              <span className="font-heading font-bold text-2xl md:text-4xl text-primary/25">{item.year}</span>
            </div>

            {/* Description */}
            <div className="flex-1 pt-0.5 hidden md:block">
              <p className="text-muted-foreground text-[15px] leading-relaxed">{item.desc}</p>
            </div>

            {/* Mobile description */}
            <div className="flex-1 md:hidden">
              <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ExperienceSection;
