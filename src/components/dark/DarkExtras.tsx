import { achievements } from "@/data/achievements";
import { ContactButton, FadeIn } from "@/components/dark/primitives";

const timeline = [
  {
    stage: "Middle School",
    desc: "Where the curiosity started — experimenting with technology, discovering programming, and gradually developing an enthusiasm for building things.",
  },
  {
    stage: "Secondary School",
    desc: "Curiosity turned into consistency — deliberately building skills, exploring creative and technical work, and collecting a few wins along the way.",
  },
  {
    stage: "Senior Secondary — Building & Integrating",
    desc: "Putting technologies together — full frontend experiences, stronger backend fundamentals, and AI woven into projects to turn ideas into working solutions.",
  },
  {
    stage: "Beyond the Build",
    desc: "Exploring where technology meets creativity — vibe coding, marketing, and new ways of turning ideas into something people can experience.",
  },
  {
    stage: "Ultimate Goal — Data Scientist",
    desc: "Moving deeper into data, intelligence and problem-solving — turning information into meaningful insights and intelligent solutions.",
  },
];

const channels = [
  { label: "Email", value: "manas.kumar.3100@gmail.com", href: "mailto:manas.kumar.3100@gmail.com" },
  { label: "WhatsApp", value: "+91 85109 46344", href: "https://wa.me/918510946344" },
  { label: "Instagram", value: "@manasmads1", href: "https://instagram.com/manasmads1" },
  { label: "LinkedIn", value: "in/manasmads1", href: "https://www.linkedin.com/in/manasmads1/" },
];

export const DarkAchievements = () => (
  <section id="dark-achievements" className="px-5 py-24 sm:px-8 md:px-10" style={{ background: "#0C0C0C" }}>
    <h2
      className="hero-heading mb-14 text-center font-black uppercase leading-none tracking-tight"
      style={{ fontSize: "clamp(3rem, 12vw, 160px)" }}
    >
      Achievements
    </h2>

    <div className="mx-auto max-w-5xl">
      {achievements.map((a, i) => (
        <FadeIn key={a.id} delay={i * 0.08}>
          <div
            className="flex items-start gap-6 py-8 md:py-10"
            style={{ borderBottom: "1px solid rgba(215, 226, 234, 0.15)" }}
          >
            <span
              className="hero-heading font-black leading-none"
              style={{ fontSize: "clamp(2rem, 6vw, 80px)" }}
            >
              {String(i + 1).padStart(2, "0")}
            </span>
            <div className="flex flex-col gap-2 pt-1">
              <h3
                className="font-medium uppercase text-[#D7E2EA]"
                style={{ fontSize: "clamp(1rem, 2vw, 1.8rem)" }}
              >
                {a.title}
              </h3>
              <p className="text-sm font-light uppercase tracking-wider text-[#D7E2EA]/50">
                {[a.issuer, a.level, a.year].filter(Boolean).join(" · ")}
              </p>
              {a.description && (
                <p className="max-w-2xl font-light leading-relaxed text-[#D7E2EA]/70">
                  {a.description}
                </p>
              )}
            </div>
          </div>
        </FadeIn>
      ))}
    </div>
  </section>
);

export const DarkJourney = () => (
  <section id="dark-journey" className="px-5 py-24 sm:px-8 md:px-10" style={{ background: "#0C0C0C" }}>
    <h2
      className="hero-heading mb-14 text-center font-black uppercase leading-none tracking-tight"
      style={{ fontSize: "clamp(3rem, 12vw, 160px)" }}
    >
      Journey
    </h2>

    <div className="mx-auto max-w-4xl border-l border-[#D7E2EA]/20 pl-8">
      {timeline.map((t, i) => (
        <FadeIn key={t.stage} delay={i * 0.08}>
          <div className="relative pb-12">
            <span className="absolute -left-[38px] top-2 h-3 w-3 rounded-full bg-[#B600A8]" />
            <h3
              className="font-medium uppercase text-[#D7E2EA]"
              style={{ fontSize: "clamp(1rem, 2vw, 1.8rem)" }}
            >
              {t.stage}
            </h3>
            <p className="mt-3 max-w-2xl font-light leading-relaxed text-[#D7E2EA]/70">{t.desc}</p>
          </div>
        </FadeIn>
      ))}
    </div>
  </section>
);

export const DarkContact = () => (
  <section id="dark-contact" className="px-5 py-24 sm:px-8 md:px-10" style={{ background: "#0C0C0C" }}>
    <h2
      className="hero-heading mb-14 text-center font-black uppercase leading-none tracking-tight"
      style={{ fontSize: "clamp(3rem, 12vw, 160px)" }}
    >
      Contact
    </h2>

    <div className="mx-auto grid max-w-4xl gap-4 sm:grid-cols-2">
      {channels.map((c, i) => (
        <FadeIn key={c.label} delay={i * 0.08}>
          <a
            href={c.href}
            target={c.href.startsWith("http") ? "_blank" : undefined}
            rel="noopener noreferrer"
            className="block rounded-3xl border-2 border-[#D7E2EA]/30 p-6 transition-colors hover:border-[#D7E2EA]"
          >
            <p className="text-xs uppercase tracking-widest text-[#D7E2EA]/50">{c.label}</p>
            <p className="mt-2 break-all text-lg font-medium text-[#D7E2EA]">{c.value}</p>
          </a>
        </FadeIn>
      ))}
    </div>

    <div className="mt-14 flex flex-col items-center gap-6">
      <ContactButton label="Email Me" />
      <p className="text-sm uppercase tracking-[0.3em] text-[#D7E2EA]/50">Katsu Made Owarnai</p>
    </div>
  </section>
);
