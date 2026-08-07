import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import { reveal, stagger, viewportOnce } from "@/lib/motion";

const stats = [
  { value: "2022", label: "Started" },
  { value: "10+", label: "Viral Reels" },
  { value: "3K+", label: "Followers" },
  { value: "∞", label: "Ideas" },
];

const languages = ["Hindi & English Fluent", "Content in Major World Languages"];

const AboutSection = () => (
  <section id="about" className="section-padding shell">
    <SectionHeading index="03" label="About" />

    <div className="mt-12 grid gap-12 md:mt-16 md:grid-cols-[1.05fr_1fr] md:gap-20">
      <motion.h2
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        variants={reveal}
        className="font-heading text-display font-semibold leading-[1.02]"
      >
        Creative.
        <br />
        Technical.
        <br />
        <span className="text-gradient">Relentless.</span>
      </motion.h2>

      <motion.div
        variants={stagger(0.05, 0.1)}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        className="space-y-8"
      >
        <motion.p variants={reveal} className="text-[17px] leading-[1.8] text-muted-foreground">
          I'm Manas — a 19-year-old Computer Science student and creative freelancer. I work across
          video, design, code, and content because great ideas don't fit in one box. I've been
          building in the digital space since 2022, with 10+ viral reels, real project experience,
          and a growing freelance practice. Currently exploring affiliate marketing while studying
          Non-Medical with CS.
        </motion.p>

        <motion.dl variants={reveal} className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          {stats.map((s) => (
            <div
              key={s.label}
              className="rounded-2xl border border-border bg-card p-4 text-center shadow-soft transition-shadow duration-500 hover:shadow-soft-md"
            >
              <dt className="sr-only">{s.label}</dt>
              <dd className="font-heading text-3xl font-semibold tracking-tight">{s.value}</dd>
              <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                {s.label}
              </p>
            </div>
          ))}
        </motion.dl>

        <motion.ul variants={reveal} className="flex flex-wrap gap-2.5">
          {languages.map((l) => (
            <li
              key={l}
              className="rounded-full border border-border bg-card/70 px-4 py-2 text-[12px] text-muted-foreground"
            >
              {l}
            </li>
          ))}
        </motion.ul>
      </motion.div>
    </div>
  </section>
);

export default AboutSection;
