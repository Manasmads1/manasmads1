import { motion } from "framer-motion";
import portrait from "@/assets/manas-portrait.png.asset.json";
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
      <img
        src={portrait.url}
        alt="Pencil-sketch portrait of Manas"
        loading="eager"
        decoding="async"
        className="mx-auto w-full max-w-[22rem] select-none object-contain mix-blend-multiply drop-shadow-[0_28px_50px_hsl(210_11%_15%/0.10)] lg:max-w-none"
        style={{
          maskImage:
            "radial-gradient(92% 88% at 50% 45%, #000 42%, transparent 82%)",
          WebkitMaskImage:
            "radial-gradient(92% 88% at 50% 45%, #000 42%, transparent 82%)",
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