import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Instagram, Mail, ArrowDown, MessageCircle } from "lucide-react";
import MagneticButton from "@/components/ui/MagneticButton";
import TerminalCard from "@/components/hero/TerminalCard";
import ContributionGrid from "@/components/hero/ContributionGrid";
import CodeSnippetCard from "@/components/hero/CodeSnippetCard";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { EASE, reveal, stagger } from "@/lib/motion";

const roles = [
  "I build things that get noticed.",
  "Code. Design. Create.",
  "Turning ideas into impact since 2022.",
];

const badges = ["React", "JavaScript", "Python", "Canva", "DaVinci"];

const HeroSection = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);
  const reduced = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const contentY = useTransform(scrollYProgress, [0, 1], [0, 90]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.75], [1, 0]);

  useEffect(() => {
    if (reduced) {
      setDisplayed(roles[0]);
      return;
    }
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
  }, [displayed, deleting, roleIndex, reduced]);

  return (
    <section
      id="home"
      ref={sectionRef}
      className="relative min-h-dvh overflow-hidden px-5 pb-28 pt-28 md:px-10 md:pb-32 md:pt-32 lg:px-16"
    >
      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="shell relative z-10 grid min-h-[calc(100dvh-14rem)] items-center gap-16 lg:grid-cols-[minmax(0,1fr)_22rem]"
      >
        <motion.div
          variants={stagger(0.1, 0.11)}
          initial="hidden"
          animate="show"
          className="max-w-[38rem]"
        >
          <motion.div variants={reveal} className="mb-7 flex items-center gap-3">
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card/80 px-3 py-1.5 text-[11px] font-medium tracking-wide text-muted-foreground shadow-soft">
              <span className="h-1.5 w-1.5 animate-dot-pulse rounded-full bg-[hsl(140_55%_42%)]" />
              Available for work
            </span>
          </motion.div>

          <motion.h1
            variants={reveal}
            className="font-heading text-display font-semibold"
          >
            MANAS
          </motion.h1>

          <motion.p
            variants={reveal}
            className="mt-6 text-[11px] font-medium uppercase tracking-[0.3em] text-muted-foreground md:text-xs"
          >
            Developer · Creative Technologist · Freelancer
          </motion.p>

          <motion.p
            variants={reveal}
            className="mt-5 min-h-[3.5rem] max-w-md text-lg leading-relaxed text-foreground/75 md:text-xl"
          >
            {displayed}
            <span className="ml-0.5 inline-block h-[1.1em] w-[2px] translate-y-[3px] animate-cursor-blink bg-accent align-middle" />
          </motion.p>

          <motion.div variants={reveal} className="mt-9 flex flex-wrap items-center gap-3">
            <MagneticButton
              onClick={() =>
                document.querySelector("#work")?.scrollIntoView({ behavior: "smooth" })
              }
            >
              View selected work
            </MagneticButton>
            <MagneticButton
              variant="outline"
              href="mailto:manas.kumar.3100@gmail.com"
              ariaLabel="Email Manas"
            >
              <Mail size={15} aria-hidden="true" />
              Get in touch
            </MagneticButton>

            <div className="ml-1 flex items-center gap-1">
              {[
                { href: "https://instagram.com/manasmads1", Icon: Instagram, label: "Instagram" },
                { href: "https://wa.me/918510946344", Icon: MessageCircle, label: "WhatsApp" },
              ].map(({ href, Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full text-muted-foreground transition-colors duration-300 hover:bg-muted hover:text-foreground"
                >
                  <Icon size={17} aria-hidden="true" />
                </a>
              ))}
            </div>
          </motion.div>

          <motion.ul variants={reveal} className="mt-8 flex flex-wrap gap-2">
            {badges.map((b) => (
              <li
                key={b}
                className="rounded-full border border-border bg-card/70 px-3 py-1 font-mono text-[10.5px] uppercase tracking-[0.14em] text-muted-foreground"
              >
                {b}
              </li>
            ))}
          </motion.ul>
        </motion.div>

        {/* calm editorial column of existing developer cards */}
        <div className="hidden justify-self-end lg:flex lg:flex-col lg:items-end lg:gap-6">
          <motion.div
            initial={{ opacity: 0, y: 24, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ delay: 0.55, duration: 0.9, ease: EASE }}
          >
            <motion.div
              animate={reduced ? undefined : { y: [0, -7, 0] }}
              transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            >
              <TerminalCard />
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ delay: 0.7, duration: 0.9, ease: EASE }}
          >
            <CodeSnippetCard />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ delay: 0.85, duration: 0.9, ease: EASE }}
          >
            <motion.div
              animate={reduced ? undefined : { y: [0, 8, 0] }}
              transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
            >
              <ContributionGrid />
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.3 }}
        onClick={() => document.querySelector("#work")?.scrollIntoView({ behavior: "smooth" })}
        className="absolute bottom-8 left-1/2 z-20 inline-flex -translate-x-1/2 items-center gap-2 rounded-full px-4 py-2 text-[10px] uppercase tracking-[0.3em] text-muted-foreground transition-colors hover:text-foreground"
      >
        Scroll to explore
        <motion.span
          animate={{ y: [0, 4, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown size={12} aria-hidden="true" />
        </motion.span>
      </motion.button>
    </section>
  );
};

export default HeroSection;
