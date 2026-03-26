import SectionWrapper from "./SectionWrapper";

const tools = ["CapCut", "Alight Motion", "Canva", "Figma", "DaVinci Resolve", "Python", "HTML", "AI Tools"];

const ToolsSection = () => (
  <SectionWrapper id="tools">
    <h2 className="text-3xl md:text-4xl font-heading font-bold mb-2">
      Tools I <span className="text-gradient">Use</span>
    </h2>
    <div className="w-16 h-0.5 bg-primary mb-10" />

    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
      {tools.map((tool) => (
        <div
          key={tool}
          className="bg-card border border-border rounded-lg flex items-center justify-center py-5 px-4 text-sm font-medium hover:border-primary/40 transition-colors"
        >
          {tool}
        </div>
      ))}
    </div>
  </SectionWrapper>
);

export default ToolsSection;
