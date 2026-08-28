import { FadeIn } from "@/components/dark/primitives";

const services = [
  {
    n: "01",
    name: "Full Stack Web Development",
    desc: "Full frontend and the basics of backend — HTML, CSS, JavaScript, React and Bootstrap builds, with Python powering the server-side fundamentals.",
  },
  {
    n: "02",
    name: "Video Editing & Motion",
    desc: "Edits in CapCut and DaVinci Resolve, plus motion graphics in Alight Motion — short-form content built to hold attention.",
  },
  {
    n: "03",
    name: "Design & Branding",
    desc: "End-to-end Canva design across branding, social and print — cohesive visual systems, documents and presentations.",
  },
  {
    n: "04",
    name: "AI-Assisted Creation",
    desc: "AI-assisted ad concepts, prompt engineering and vibe coding — using AI as a tool to turn ideas into working, shippable output.",
  },
  {
    n: "05",
    name: "Content & Affiliate Marketing",
    desc: "Script writing, social media creation and affiliate marketing — building an audience and turning attention into results.",
  },
];

const DarkServices = () => (
  <section
    id="dark-services"
    className="relative z-0 rounded-t-[40px] px-5 py-20 sm:rounded-t-[50px] sm:px-8 sm:py-24 md:rounded-t-[60px] md:px-10 md:py-32"
    style={{ background: "#FFFFFF" }}
  >
    <h2
      className="mb-16 text-center font-black uppercase leading-none sm:mb-20 md:mb-28"
      style={{ color: "#0C0C0C", fontSize: "clamp(3rem, 12vw, 160px)" }}
    >
      Skills
    </h2>

    <div className="mx-auto max-w-5xl">
      {services.map((s, i) => (
        <FadeIn key={s.n} delay={i * 0.1}>
          <div
            className="flex items-start gap-6 py-8 sm:py-10 md:py-12"
            style={{ borderBottom: "1px solid rgba(12, 12, 12, 0.15)" }}
          >
            <span
              className="font-black leading-none"
              style={{ color: "#0C0C0C", fontSize: "clamp(3rem, 10vw, 140px)" }}
            >
              {s.n}
            </span>
            <div className="flex flex-col gap-3 pt-2">
              <h3
                className="font-medium uppercase leading-tight"
                style={{ color: "#0C0C0C", fontSize: "clamp(1rem, 2.2vw, 2.1rem)" }}
              >
                {s.name}
              </h3>
              <p
                className="max-w-2xl font-light leading-relaxed"
                style={{ color: "#0C0C0C", opacity: 0.6, fontSize: "clamp(0.85rem, 1.6vw, 1.25rem)" }}
              >
                {s.desc}
              </p>
            </div>
          </div>
        </FadeIn>
      ))}
    </div>
  </section>
);

export default DarkServices;
