import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion, useScroll, useSpring } from "framer-motion";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";
import { useActiveSection } from "@/hooks/useActiveSection";
import { EASE } from "@/lib/motion";

const navItems = [
  { label: "About", id: "about" },
  { label: "Achievements", id: "achievements" },
  { label: "Skills", id: "skills" },
  { label: "Work", id: "work" },
  { label: "Contact", id: "contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const trackedIds = useMemo(
    () => ["home", "about", "achievements", "skills", "tools", "work", "journey", "contact"],
    [],
  );
  const active = useActiveSection(trackedIds);

  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 26, mass: 0.4 });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const go = (id: string) => {
    setMobileOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <motion.div
        animate={{
          backgroundColor: scrolled ? "hsl(210 17% 98% / 0.72)" : "hsl(210 17% 98% / 0)",
          borderColor: scrolled ? "hsl(210 16% 93% / 1)" : "hsl(210 16% 93% / 0)",
          backdropFilter: scrolled ? "blur(18px) saturate(160%)" : "blur(0px)",
        }}
        transition={{ duration: 0.5, ease: EASE }}
        className="border-b"
      >
        <nav
          aria-label="Primary"
          className="shell flex items-center justify-between px-5 py-3.5 md:px-10 lg:px-16"
        >
          <button
            onClick={() => go("home")}
            aria-label="Back to top"
            className="flex items-center gap-2.5 rounded-full"
          >
            <img
              src={logo}
              alt=""
              width={36}
              height={36}
              className="h-9 w-9 rounded-full object-cover shadow-soft"
            />
            <span className="font-heading text-sm font-semibold tracking-tight">Manas</span>
          </button>

          <ul className="hidden items-center gap-1 md:flex">
            {navItems.map((item) => {
              const isActive = active === item.id;
              return (
                <li key={item.id}>
                  <button
                    onClick={() => go(item.id)}
                    aria-current={isActive ? "true" : undefined}
                    className="relative rounded-full px-4 py-2 text-[13px] font-medium text-muted-foreground transition-colors duration-300 hover:text-foreground"
                  >
                    {isActive && (
                      <motion.span
                        layoutId="nav-pill"
                        transition={{ type: "spring", stiffness: 320, damping: 30 }}
                        className="absolute inset-0 rounded-full bg-muted"
                      />
                    )}
                    <span className={isActive ? "relative text-foreground" : "relative"}>
                      {item.label}
                    </span>
                  </button>
                </li>
              );
            })}
          </ul>

          <div className="hidden items-center gap-2 md:flex">
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card/70 px-3 py-1.5 text-[11px] text-muted-foreground">
              <span className="h-1.5 w-1.5 animate-dot-pulse rounded-full bg-[hsl(140_55%_42%)]" />
              Available
            </span>
          </div>

          <button
            className="inline-flex h-11 w-11 items-center justify-center rounded-full text-foreground md:hidden"
            onClick={() => setMobileOpen((o) => !o)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
          </button>
        </nav>

        {/* scroll progress */}
        <motion.div
          style={{ scaleX: progress }}
          className="h-[2px] origin-left bg-accent"
          aria-hidden="true"
        />
      </motion.div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.35, ease: EASE }}
            className="glass mx-4 mt-3 rounded-3xl p-3 md:hidden"
          >
            <ul className="flex flex-col">
              {navItems.map((item, i) => (
                <motion.li
                  key={item.id}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 + i * 0.05, ease: EASE }}
                >
                  <button
                    onClick={() => go(item.id)}
                    className="w-full rounded-2xl px-4 py-3.5 text-left text-[15px] font-medium text-foreground transition-colors hover:bg-muted"
                  >
                    {item.label}
                  </button>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
