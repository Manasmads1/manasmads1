import { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import { reveal, viewportOnce } from "@/lib/motion";

const timeline = [
  { year: "2022", desc: "Entered the digital space. First content, first reels, first reach." },
  { year: "2023", desc: "School projects, exhibitions, competitions. Built things that mattered." },
  { year: "2024", desc: "Went freelance. Expanded skills. Started affiliate marketing." },
  { year: "2025 →", desc: "Ongoing. Computer Science studies + creative work. Building what's next." },
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
            Four years of <span className="text-gradient">compounding</span>.
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
              key={item.year}
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
                <span className="font-heading text-4xl font-semibold tracking-tight text-foreground/20 md:text-5xl">
                  {item.year}
                </span>
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
