import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import { reveal, stagger, viewportOnce } from "@/lib/motion";

const facts = [
  { value: "Class 12", label: "CBSE Non-Medical" },
  { value: "Computer Science", label: "Core subject" },
  { value: "Since 2022", label: "Building online" },
];

const languages = ["Hindi & English Fluent", "Content in Major World Languages"];

const AboutSection = () => (
  <section id="about" className="section-padding shell">
    <SectionHeading index="02" label="About" />

    <div className="mt-12 grid gap-12 md:mt-16 md:grid-cols-[0.8fr_1.2fr] md:gap-20">
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
        className="space-y-10"
      >
        <motion.p
          variants={reveal}
          className="max-w-[62ch] text-[19px] leading-[1.85] text-foreground/80 md:text-[21px] md:leading-[1.8]"
        >
          I’m Manas, a Class 12 CBSE Non-Medical student with Computer Science and an endless
          curiosity to explore, learn, and build. Alongside technology, I’m exploring the freelance
          world through content creation, affiliate marketing, and creative digital work. I’ve
          participated in numerous inter-school, interstate, and national-level events, with several
          wins along the way. Music is another part of who I am, and it has brought me several
          awards and memorable experiences. I’m still learning, still experimenting, and always
          looking for the next thing to create, improve, and grow with.
        </motion.p>

        <motion.dl
          variants={reveal}
          className="grid gap-x-8 gap-y-6 border-t border-border pt-8 sm:grid-cols-3"
        >
          {facts.map((f) => (
            <div key={f.label}>
              <dt className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                {f.label}
              </dt>
              <dd className="mt-1.5 font-heading text-xl font-semibold tracking-tight">
                {f.value}
              </dd>
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
