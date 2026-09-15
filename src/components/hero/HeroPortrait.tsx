import { motion } from "framer-motion";
import { EASE } from "@/lib/motion";

const stats = [
  { value: "04+ yrs", label: "Digital & creative exploration" },
  { value: "20+", label: "Skills & tools explored" },
  { value: "05+", label: "Tech & creative domains" },
];

/** Portrait + statistics — one editorial identity module. */
const HeroPortrait = () => (
  <div className="w-full">
    <motion.div
      initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      transition={{ delay: 0.35, duration: 1, ease: EASE }}
      className="relative"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-[7%] -z-10 rounded-full border border-accent/20 shadow-[0_0_90px_hsl(var(--accent)/0.12)]">
        <span className="hero-orbit absolute -left-1.5 top-1/2 h-3 w-3 rounded-full bg-accent shadow-[0_0_22px_hsl(var(--accent)/0.8)]" />
        <span className="hero-orbit-reverse absolute right-[14%] top-[8%] h-2 w-2 rounded-full bg-foreground/40" />
      </div>
      <div aria-hidden="true" className="pointer-events-none absolute inset-[17%] -z-10 rounded-full border border-dashed border-foreground/10 hero-orbit-reverse" />
      <img
        src="/MANAS.png"
        alt="Pencil-sketch portrait of Manas"
        loading="eager"
        decoding="async"
        className="mx-auto w-full max-w-[20rem] select-none object-contain mix-blend-multiply lg:max-w-[24rem] xl:max-w-[26rem]"
        style={{
          maskImage:
            "radial-gradient(78% 76% at 50% 44%, #000 38%, transparent 74%)",
          WebkitMaskImage:
            "radial-gradient(78% 76% at 50% 44%, #000 38%, transparent 74%)",
        }}
      />
    </motion.div>

    <motion.dl
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.75, duration: 0.8, ease: EASE }}
      className="relative z-10 mx-auto -mt-2 grid max-w-[24rem] grid-cols-3 divide-x divide-border border-t border-border pt-5 lg:max-w-none"
    >
      {stats.map((s) => (
        <div key={s.value} className="px-3 text-center first:pl-0 last:pr-0">
          <dt className="font-heading text-xl font-semibold tracking-tight text-foreground md:text-2xl">
            {s.value}
          </dt>
          <dd className="mt-1.5 text-[9px] font-medium uppercase leading-snug tracking-[0.14em] text-muted-foreground">
            {s.label}
          </dd>
        </div>
      ))}
    </motion.dl>
  </div>
);

export default HeroPortrait;
