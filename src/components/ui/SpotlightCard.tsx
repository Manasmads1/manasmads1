import { useState, type CSSProperties, type MouseEvent, type ReactNode } from "react";
import { cn } from "@/lib/utils";

type Props = {
  children: ReactNode;
  className?: string;
};

/** A lightweight Aceternity-style spotlight that follows the pointer without a canvas. */
const SpotlightCard = ({ children, className }: Props) => {
  const [spotlight, setSpotlight] = useState({ x: 50, y: 50 });

  const handleMove = (event: MouseEvent<HTMLDivElement>) => {
    const bounds = event.currentTarget.getBoundingClientRect();
    setSpotlight({
      x: ((event.clientX - bounds.left) / bounds.width) * 100,
      y: ((event.clientY - bounds.top) / bounds.height) * 100,
    });
  };

  const style = {
    "--spotlight-x": `${spotlight.x}%`,
    "--spotlight-y": `${spotlight.y}%`,
  } as CSSProperties;

  return (
    <div
      onMouseMove={handleMove}
      onMouseLeave={() => setSpotlight({ x: 50, y: 50 })}
      style={style}
      className={cn("spotlight-card", className)}
    >
      {children}
    </div>
  );
};

export default SpotlightCard;
