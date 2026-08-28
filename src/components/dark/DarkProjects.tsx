import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { LiveProjectButton } from "@/components/dark/primitives";

const img = (u: string) =>
  `https://images.higgs.ai/?default=1&output=webp&url=${u}&w=1280&q=85`;

const B = "https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2F";

const projects = [
  {
    n: "01",
    category: "Freelance",
    name: "Brand Ad Creation",
    col1: [
      img(`${B}hf_20260412_055344_5eff02e0-87a5-41ce-b64f-eb08da8f33db.png`),
      img(`${B}hf_20260412_055431_11d841fd-8b41-46a5-82e4-b04f2407a7d8.png`),
    ],
    col2: img(`${B}hf_20260412_055451_e317bf2d-28d4-48cc-86b0-6f72f25b6327.png`),
  },
  {
    n: "02",
    category: "Development",
    name: "Full Stack Web Development",
    col1: [
      img(`${B}hf_20260412_055654_911201c5-36d9-4bc6-bac7-331adfce159f.png`),
      img(`${B}hf_20260412_055723_5ceda0b8-d9c2-4665-b2e3-83ba19ba76d1.png`),
    ],
    col2: img(`${B}hf_20260412_055753_adc5dcbd-a8e6-49c0-b43a-9b030d835cea.png`),
  },
  {
    n: "03",
    category: "Design",
    name: "Canva Design Portfolio",
    col1: [
      img(`${B}hf_20260412_055759_963cfb0b-4bd1-4b0f-9d0a-09bd6cf95b2f.png`),
      img(`${B}hf_20260412_060108_438f781a-9846-4dcc-89ab-c4e6cb830f5b.png`),
    ],
    col2: img(`${B}hf_20260412_055818_9d062121-ad7e-46b9-999a-1a6a692ef1ee.png`),
  },
];

const Card = ({
  project,
  index,
  total,
  progress,
}: {
  project: (typeof projects)[number];
  index: number;
  total: number;
  progress: ReturnType<typeof useScroll>["scrollYProgress"];
}) => {
  const targetScale = 1 - (total - 1 - index) * 0.03;
  const scale = useTransform(progress, [index / total, 1], [1, targetScale]);

  return (
    <div className="sticky top-24 h-[85vh] md:top-32">
      <motion.article
        style={{ scale, top: `${index * 28}px`, background: "#0C0C0C" }}
        className="relative rounded-[40px] border-2 border-[#D7E2EA] p-4 sm:rounded-[50px] sm:p-6 md:rounded-[60px] md:p-8"
      >
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-5">
            <span
              className="hero-heading font-black leading-none"
              style={{ fontSize: "clamp(3rem, 10vw, 140px)" }}
            >
              {project.n}
            </span>
            <div>
              <p className="text-xs uppercase tracking-widest text-[#D7E2EA]/60">
                {project.category}
              </p>
              <h3
                className="font-medium uppercase text-[#D7E2EA]"
                style={{ fontSize: "clamp(1rem, 2.2vw, 2.1rem)" }}
              >
                {project.name}
              </h3>
            </div>
          </div>
          <LiveProjectButton />
        </div>

        <div className="mt-6 flex gap-4">
          <div className="flex w-[40%] flex-col gap-4">
            <img
              src={project.col1[0]}
              alt=""
              loading="lazy"
              className="w-full rounded-[40px] object-cover sm:rounded-[50px] md:rounded-[60px]"
              style={{ height: "clamp(130px, 16vw, 230px)" }}
            />
            <img
              src={project.col1[1]}
              alt=""
              loading="lazy"
              className="w-full rounded-[40px] object-cover sm:rounded-[50px] md:rounded-[60px]"
              style={{ height: "clamp(160px, 22vw, 340px)" }}
            />
          </div>
          <img
            src={project.col2}
            alt=""
            loading="lazy"
            className="w-[60%] rounded-[40px] object-cover sm:rounded-[50px] md:rounded-[60px]"
            style={{ height: "clamp(306px, 38vw, 586px)" }}
          />
        </div>
      </motion.article>
    </div>
  );
};

const DarkProjects = () => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });

  return (
    <section
      id="dark-projects"
      ref={ref}
      className="relative z-10 -mt-10 rounded-t-[40px] px-5 py-20 sm:-mt-12 sm:rounded-t-[50px] sm:px-8 md:-mt-14 md:rounded-t-[60px] md:px-10"
      style={{ background: "#0C0C0C" }}
    >
      <h2
        className="hero-heading mb-16 text-center font-black uppercase leading-none tracking-tight"
        style={{ fontSize: "clamp(3rem, 12vw, 160px)" }}
      >
        Project
      </h2>

      <div className="mx-auto max-w-6xl">
        {projects.map((p, i) => (
          <Card key={p.n} project={p} index={i} total={projects.length} progress={scrollYProgress} />
        ))}
      </div>
    </section>
  );
};

export default DarkProjects;
