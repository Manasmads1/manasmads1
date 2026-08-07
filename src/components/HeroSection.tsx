import { lazy, Suspense, useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Instagram, Mail, ArrowDown, MessageCircle } from "lucide-react";
import avatar from "@/assets/avatar.png";
import MagneticButton from "@/components/ui/MagneticButton";
import TerminalCard from "@/components/hero/TerminalCard";
import ContributionGrid from "@/components/hero/ContributionGrid";
import CodeSnippetCard from "@/components/hero/CodeSnippetCard";
import StaticWorkspace from "@/components/three/StaticWorkspace";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { EASE, reveal, stagger } from "@/lib/motion";

const HeroCanvas = lazy(() => import("@/components/three/HeroCanvas"));

const roles = [
  "I build things that get noticed.",
  "Code. Design. Create.",
  "Turning ideas into impact since 2022.",
];

const badges = ["React", "Python", "Canva", "DaVinci", "AI Tools"];

const HeroSection = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);
  const [mountScene, setMountScene] = useState(false);
  const reduced = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const contentY = useTransform(scrollYProgress, [0, 1], [0, 90]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.75], [1, 0]);
  const sceneScale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);

  /* defer the WebGL bundle until the browser is idle */
  useEffect(() => {
    if (reduced) return;
    const ric = (window as unknown as {
      requestIdleCallback?: (cb: () => void, o?: { timeout: number }) => number;
      cancelIdleCallback?: (id: number) => void;
    });
    const id = ric.requestIdleCallback
      ? ric.requestIdleCallback(() => setMountScene(true), { timeout: 1800 })
      : window.setTimeout(() => setMountScene(true), 600);
    return () => {
      if (ric.cancelIdleCallback) ric.cancelIdleCallback(id);
      else window.clearTimeout(id);
    };
  }, [reduced]);

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
      {/* 3D workspace layer */}
      <motion.div
        style={{ scale: sceneScale }}
        className="pointer-events-none absolute inset-x-0 bottom-[4%] top-[10%] opacity-70 md:left-[34%] md:opacity-100 lg:left-[40%]"
      >
        {reduced || !mountScene ? (
          <StaticWorkspace />
        ) : (
          <Suspense fallback={<StaticWorkspace />}>
            <HeroCanvas />
          </Suspense>
        )}
      </motion.div>

      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="shell relative z-10 flex min-h-[calc(100dvh-14rem)] flex-col justify-center"
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
            <img
              src={avatar}
              alt="Portrait of Manas"
              width={36}
              height={36}
              className="h-9 w-9 rounded-full border border-border object-cover shadow-soft"
            />
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
            Creative Technologist · Freelancer · Content Creator
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
      </motion.div>

      {/* Floating workspace UI layer */}
      <div className="pointer-events-none absolute inset-0 z-20 hidden lg:block">
        <motion.div
          initial={{ opacity: 0, y: 26, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ delay: 0.7, duration: 1, ease: EASE }}
          className="absolute right-[4%] top-[18%]"
        >
          <motion.div
            animate={{ y: [0, -9, 0] }}
            transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
          >
            <TerminalCard />
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 26, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ delay: 0.9, duration: 1, ease: EASE }}
          className="absolute bottom-[16%] right-[13%]"
        >
          <motion.div
            animate={{ y: [0, 11, 0] }}
            transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
          >
            <ContributionGrid />
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 26, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ delay: 1.05, duration: 1, ease: EASE }}
          className="absolute left-[43%] top-[13%] xl:left-[47%]"
        >
          <motion.div
            animate={{ y: [0, -7, 0] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          >
            <CodeSnippetCard />
          </motion.div>
        </motion.div>
      </div>

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
