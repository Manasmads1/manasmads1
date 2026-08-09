import { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import { reveal, viewportOnce } from "@/lib/motion";

const timeline = [
  {
    stage: "Middle School",
    role: "",
    desc: "Where the curiosity started — experimenting with technology, discovering programming, learning new languages, and gradually developing an enthusiasm for building things. Alongside tech, I also began exploring fitness and other interests that shaped my discipline.",
  },
  {
    stage: "Secondary School",
    role: "",
    desc: "Curiosity turned into consistency — I started deliberately building my skills, exploring creative and technical work, participating in competitions and events, and collecting a few wins along the way.",
  },
  {
    stage: "Senior Secondary",
    role: "Building & Integrating",
    desc: "Now, in Class 12, the focus has shifted from simply learning technologies to putting them together — developing full frontend experiences, strengthening backend fundamentals, and integrating AI into projects to turn ideas into working solutions.",
  },
  {
    stage: "Beyond the Build",
    role: "Exploration layer",
    desc: "Beyond writing code, I'm exploring where technology meets creativity — experimenting with Vibe Coding, marketing, digital creation, and new ways of turning ideas into something people can actually experience.",
  },
  {
    stage: "Ultimate Goal",
    role: "Data Scientist — aspiration",
    desc: "To eventually move deeper into data, intelligence and problem-solving — building the foundation to become a Data Scientist who can turn information into meaningful insights and intelligent solutions.",
  },
];

const ExperienceSection = () => {
  const trackRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: trackRef,
    offset: ["start 75%", "end 55%"],
  });
  const lineScale = useSpring(scrollYProgress, { stiffness: 90, damping: 24, mass: 0.5 });
  const glowY = useTransform(lineScale, (v) => `${v * 100}%`);

  return (
    <section id="journey" className="section-padding shell">
      <SectionHeading
        index="06"
        label="Journey"
        title={
          <>
            A journey of <span className="text-gradient">compounding</span> curiosity.
          </>
        }
      />

      <div ref={trackRef} className="relative mt-16 pl-10 md:pl-0">
        {/* rail */}
        <div
          aria-hidden="true"
          className="absolute bottom-0 left-[7px] top-2 w-px bg-border md:left-1/2 md:-translate-x-1/2"
        >
          <motion.div
            style={{ scaleY: lineScale }}
            className="h-full w-full origin-top bg-accent"
          />
          <motion.span
            style={{ top: glowY }}
            className="absolute left-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent shadow-[0_0_0_6px_hsl(var(--accent)/0.14)]"
          />
        </div>

        <ol className="space-y-14 md:space-y-20">
          {timeline.map((item, i) => (
            <motion.li
              key={item.stage}
              initial="hidden"
              whileInView="show"
              viewport={viewportOnce}
              variants={reveal}
              className="relative md:grid md:grid-cols-2 md:items-start md:gap-16"
            >
              <span
                aria-hidden="true"
                className="absolute -left-10 top-3 z-10 h-[15px] w-[15px] rounded-full border-2 border-background bg-foreground md:left-1/2 md:-translate-x-1/2"
              />

              <div className={i % 2 === 0 ? "md:pr-4 md:text-right" : "md:order-2 md:pl-4"}>
                <span className="block font-mono text-[10.5px] uppercase tracking-[0.2em] text-accent">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="mt-1 block font-heading text-3xl font-semibold leading-[1.1] tracking-tight text-foreground/30 md:text-4xl">
                  {item.stage}
                </span>
                {item.role && (
                  <span className="mt-1.5 block font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                    {item.role}
                  </span>
                )}
              </div>

              <div className={i % 2 === 0 ? "md:pl-4" : "md:order-1 md:pr-4 md:text-right"}>
                <p className="mt-2 max-w-md rounded-2xl border border-border bg-card p-5 text-[15px] leading-relaxed text-muted-foreground shadow-soft md:mt-3 md:inline-block md:text-left">
                  {item.desc}
                </p>
              </div>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default ExperienceSection;
