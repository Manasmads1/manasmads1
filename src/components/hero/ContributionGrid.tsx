const WEEKS = 17;
const DAYS = 7;

const level = (i: number) => {
  const v = (Math.sin(i * 12.9898) * 43758.5453) % 1;
  const a = Math.abs(v);
  if (a > 0.82) return 4;
  if (a > 0.62) return 3;
  if (a > 0.42) return 2;
  if (a > 0.2) return 1;
  return 0;
};

const shades = [
  "bg-border",
  "bg-accent/25",
  "bg-accent/45",
  "bg-accent/70",
  "bg-accent",
];

/** GitHub-style activity grid — a visual rhythm cue, not real data. */
const ContributionGrid = () => (
  <div aria-hidden="true" className="w-[15rem] rounded-2xl glass p-4">
    <p className="mb-3 font-mono text-[9.5px] uppercase tracking-[0.2em] text-muted-foreground">
      Building since 2022
    </p>
    <div className="flex gap-[3px]">
      {Array.from({ length: WEEKS }).map((_, w) => (
        <div key={w} className="flex flex-col gap-[3px]">
          {Array.from({ length: DAYS }).map((_, d) => (
            <span
              key={d}
              className={`h-[7px] w-[7px] rounded-[2px] ${shades[level(w * DAYS + d)]}`}
            />
          ))}
        </div>
      ))}
    </div>
  </div>
);

export default ContributionGrid;