import SectionWrapper from "./SectionWrapper";

const stats = [
  "2022 — Started Digital Work",
  "10+ Viral Reels",
  "3K+ Social Followers",
  "Active Freelancer",
];

const AboutSection = () => (
  <SectionWrapper id="about">
    <h2 className="text-3xl md:text-4xl font-heading font-bold mb-2">
      About <span className="text-gradient">Me</span>
    </h2>
    <div className="w-16 h-0.5 bg-primary mb-8" />

    <div className="grid md:grid-cols-[2fr_1fr] gap-10">
      <div className="space-y-5 text-secondary-foreground leading-relaxed">
        <p>
          I'm Manas — a Non-Medical and Computer Science student with a passion for creating things that matter. From writing scripts to editing videos, designing visuals to building webpages, I work across disciplines because great ideas rarely stay in one box.
        </p>
        <p>
          I've been working on social media and digital projects since 2022, and currently operate as a freelancer while exploring affiliate marketing. I'm innovative by nature, with hands-on experience in school and real-world projects and exhibitions.
        </p>

        <div className="pt-4 space-y-3 text-sm text-muted-foreground">
          <p><span className="text-foreground font-medium">Born:</span> 03 March 2007</p>
          <p><span className="text-foreground font-medium">Languages:</span> Hindi (Native), English (Fluent), understands several North Indian regional languages. Content creation capability in major world languages.</p>
        </div>
      </div>

      <div className="space-y-4">
        {stats.map((s) => (
          <div key={s} className="bg-card border border-border rounded-md px-4 py-3 text-sm font-medium text-center">
            {s}
          </div>
        ))}
      </div>
    </div>
  </SectionWrapper>
);

export default AboutSection;
