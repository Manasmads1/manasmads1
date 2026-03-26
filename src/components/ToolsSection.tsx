import { motion } from "framer-motion";

const tools = ["CAPCUT", "ALIGHT MOTION", "CANVA", "FIGMA", "DAVINCI RESOLVE", "PYTHON", "HTML", "AI TOOLS"];

const ToolsSection = () => {
  const marqueeContent = tools.map((t) => `${t} ·`).join(" ") + " ";
  const doubled = marqueeContent + marqueeContent;

  return (
    <section className="py-16 md:py-24 overflow-hidden border-y border-border">
      <motion.span
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="section-label px-5 md:px-8 lg:px-16"
      >
        05 / Tools
      </motion.span>

      <div className="relative mt-6">
        <div className="animate-marquee whitespace-nowrap">
          <span className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold text-foreground/10 tracking-wide">
            {doubled}
          </span>
        </div>
      </div>
    </section>
  );
};

export default ToolsSection;
