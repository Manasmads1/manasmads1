import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const roles = [
  "Creative Technologist",
  "Freelancer & Content Creator",
  "Turning Ideas into Impact",
];

const HeroSection = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting) {
      if (displayed.length < current.length) {
        timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 60);
      } else {
        timeout = setTimeout(() => setDeleting(true), 2000);
      }
    } else {
      if (displayed.length > 0) {
        timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 30);
      } else {
        setDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      }
    }
    return () => clearTimeout(timeout);
  }, [displayed, deleting, roleIndex]);

  const scrollTo = (id: string) =>
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center section-padding overflow-hidden">
      {/* Subtle grid background */}
      <div className="absolute inset-0 opacity-[0.04]" style={{
        backgroundImage: `linear-gradient(hsl(var(--primary)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)`,
        backgroundSize: '60px 60px'
      }} />

      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-primary font-medium text-sm tracking-widest uppercase mb-4"
        >
          Portfolio
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl md:text-7xl font-heading font-bold tracking-tight mb-6"
        >
          Manas<span className="text-gradient">.</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-xl md:text-2xl font-heading italic text-primary mb-6 h-9"
        >
          <span>{displayed}</span>
          <span className="border-r-2 border-primary animate-cursor-blink ml-0.5">&nbsp;</span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-muted-foreground text-base md:text-lg max-w-xl mx-auto mb-10 leading-relaxed"
        >
          19-year-old creator, coder, and storyteller — building real things that get noticed.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <button
            onClick={() => scrollTo("#work")}
            className="px-8 py-3 bg-primary text-primary-foreground font-medium rounded-md hover:bg-primary-glow transition-colors"
          >
            See My Work
          </button>
          <button
            onClick={() => scrollTo("#contact")}
            className="px-8 py-3 border border-primary text-primary font-medium rounded-md hover:bg-primary/10 transition-colors"
          >
            Let's Connect
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
