import { motion } from "framer-motion";
import { reveal, viewportOnce } from "@/lib/motion";
import { cn } from "@/lib/utils";

type Props = {
  index: string;
  label: string;
  title?: React.ReactNode;
  lead?: string;
  align?: "left" | "center";
  className?: string;
};

const SectionHeading = ({ index, label, title, lead, align = "left", className }: Props) => (
  <motion.div
    initial="hidden"
    whileInView="show"
    viewport={viewportOnce}
    variants={reveal}
    className={cn(
      "flex flex-col gap-5",
      align === "center" && "items-center text-center",
      className,
    )}
  >
    <span className="inline-flex items-center gap-3 text-[11px] font-mono uppercase tracking-[0.28em] text-muted-foreground">
      <span className="text-accent">{index}</span>
      <span className="h-px w-8 bg-border" aria-hidden="true" />
      {label}
    </span>

    {title && (
      <h2 className="font-heading font-semibold text-headline max-w-3xl text-balance">{title}</h2>
    )}

    {lead && (
      <p className="max-w-xl text-base leading-relaxed text-muted-foreground">{lead}</p>
    )}
  </motion.div>
);

export default SectionHeading;