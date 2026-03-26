import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Instagram, Mail, ArrowDown } from "lucide-react";
import avatar from "@/assets/avatar.png";

const roles = [
  "I build things that get noticed.",
  "Code. Design. Create.",
  "Turning ideas into impact since 2022.",
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
        timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 50);
      } else {
        timeout = setTimeout(() => setDeleting(true), 2500);
      }
    } else {
      if (displayed.length > 0) {
        timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 25);
      } else {
        setDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      }
    }
    return () => clearTimeout(timeout);
  }, [displayed, deleting, roleIndex]);

  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-center px-5 md:px-8 lg:px-16 overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="flex items-center gap-6 md:gap-10">
            <img src={avatar} alt="Manas avatar" className="w-24 h-24 md:w-36 md:h-36 lg:w-44 lg:h-44 rounded-full object-cover flex-shrink-0" />
            <h1 className="font-heading font-bold leading-[0.85] tracking-tight" style={{ fontSize: 'clamp(4rem, 14vw, 11rem)' }}>
              MANAS
            </h1>
          </div>
        </motion.div>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
          className="h-px bg-primary my-6 md:my-8 origin-left max-w-2xl"
        />

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="text-[11px] md:text-xs font-body font-medium tracking-[0.35em] uppercase text-muted-foreground mb-6"
        >
          Creative Technologist · Freelancer · Content Creator
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
          className="text-base md:text-lg font-body text-muted-foreground h-7 mb-8"
        >
          <span className="italic">{displayed}</span>
          <span className="border-r-2 border-primary animate-cursor-blink ml-0.5">&nbsp;</span>
        </motion.div>
      </div>

      {/* Bottom bar */}
      <div className="absolute bottom-8 left-5 md:left-8 lg:left-16 right-5 md:right-8 lg:right-16 flex items-end justify-between z-10">
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          onClick={() => document.querySelector("#work")?.scrollIntoView({ behavior: "smooth" })}
          className="flex items-center gap-2 text-[10px] font-body tracking-[0.3em] uppercase text-muted-foreground hover:text-foreground transition-colors"
        >
          Scroll to explore
          <motion.span
            animate={{ y: [0, 4, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ArrowDown size={12} />
          </motion.span>
        </motion.button>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="flex items-center gap-4"
        >
          <a href="https://instagram.com/manasmads1" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
            <Instagram size={16} />
          </a>
          <a href="mailto:manas.kumar.3100@gmail.com" className="text-muted-foreground hover:text-foreground transition-colors">
            <Mail size={16} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
