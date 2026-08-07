import type { ProjectMockupKind } from "@/components/ProjectsSection";

/** Lightweight CSS mockups so each project reads as a real artefact. */
const ProjectMockup = ({ kind }: { kind: ProjectMockupKind }) => {
  if (kind === "reel") {
    return (
      <div className="flex h-40 items-end justify-center gap-3">
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            className={`relative w-[4.5rem] overflow-hidden rounded-xl border border-border bg-surface shadow-soft transition-transform duration-500 group-hover:-translate-y-1 ${
              i === 1 ? "h-36" : "h-28 opacity-80"
            }`}
            style={{ transitionDelay: `${i * 60}ms` }}
          >
            <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/45 to-transparent" />
            <span className="absolute bottom-2 left-2 h-1 w-8 rounded-full bg-white/70" />
            <span className="absolute left-1/2 top-1/2 h-6 w-6 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/70" />
          </div>
        ))}
      </div>
    );
  }

  if (kind === "ad") {
    return (
      <div className="flex h-40 items-center justify-center">
        <div className="w-full max-w-[15rem] rounded-2xl border border-border bg-card p-4 shadow-soft transition-transform duration-500 group-hover:-translate-y-1">
          <div className="mb-3 h-16 rounded-lg bg-gradient-to-br from-accent/25 via-accent/10 to-transparent" />
          <div className="h-2 w-3/4 rounded-full bg-foreground/15" />
          <div className="mt-2 h-2 w-1/2 rounded-full bg-foreground/10" />
          <div className="mt-3 h-6 w-24 rounded-full bg-primary" />
        </div>
      </div>
    );
  }

  if (kind === "web") {
    return (
      <div className="flex h-40 items-center justify-center">
        <div className="w-full max-w-[17rem] overflow-hidden rounded-xl border border-border bg-card shadow-soft transition-transform duration-500 group-hover:-translate-y-1">
          <div className="flex items-center gap-1.5 border-b border-border bg-muted px-3 py-2">
            <span className="h-2 w-2 rounded-full bg-foreground/15" />
            <span className="h-2 w-2 rounded-full bg-foreground/15" />
            <span className="h-2 w-2 rounded-full bg-foreground/15" />
            <span className="ml-2 h-2 w-24 rounded-full bg-foreground/10" />
          </div>
          <div className="space-y-2 p-4">
            <div className="h-2.5 w-2/3 rounded-full bg-foreground/20" />
            <div className="h-2 w-full rounded-full bg-foreground/10" />
            <div className="grid grid-cols-3 gap-2 pt-2">
              {[0, 1, 2].map((i) => (
                <div key={i} className="h-10 rounded-md bg-muted" />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="grid h-40 grid-cols-3 grid-rows-2 gap-2.5">
      {[
        "bg-gradient-to-br from-accent/30 to-accent/5",
        "bg-surface",
        "bg-card",
        "bg-card",
        "bg-gradient-to-tr from-foreground/15 to-transparent",
        "bg-surface/70",
      ].map((c, i) => (
        <div
          key={i}
          className={`rounded-xl border border-border shadow-soft transition-transform duration-500 group-hover:-translate-y-1 ${c}`}
          style={{ transitionDelay: `${i * 40}ms` }}
        />
      ))}
    </div>
  );
};

export default ProjectMockup;