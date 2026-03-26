import SectionWrapper from "./SectionWrapper";

const timeline = [
  { year: "2022", desc: "Started working on social media and digital content projects" },
  { year: "2023–24", desc: "School and inter-school projects, exhibitions, and competitions" },
  { year: "2024", desc: "Active freelancing, affiliate marketing, and expanded skill set" },
  { year: "Ongoing", desc: "Content creation as a creative outlet alongside Computer Science studies" },
];

const ExperienceSection = () => (
  <SectionWrapper id="experience">
    <h2 className="text-3xl md:text-4xl font-heading font-bold mb-2">
      Experience & <span className="text-gradient">Highlights</span>
    </h2>
    <div className="w-16 h-0.5 bg-primary mb-10" />

    <div className="relative border-l border-primary/30 pl-8 space-y-10 max-w-2xl">
      {timeline.map((item) => (
        <div key={item.year} className="relative">
          <div className="absolute -left-[2.55rem] top-1 w-3 h-3 rounded-full bg-primary" />
          <p className="text-primary font-heading font-semibold text-lg">{item.year}</p>
          <p className="text-muted-foreground text-sm mt-1">{item.desc}</p>
        </div>
      ))}
    </div>
  </SectionWrapper>
);

export default ExperienceSection;
