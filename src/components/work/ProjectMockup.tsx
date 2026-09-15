import { BarChart3, Brush, Code2, FileCode2, Image as ImageIcon, Layers3, MonitorPlay, Palette, Play, Sparkles } from "lucide-react";
import type { ProjectMockupKind } from "@/components/ProjectsSection";

const Badge = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <span className={`project-float-badge ${className}`}>{children}</span>
);

const BrowserChrome = ({ children }: { children: React.ReactNode }) => (
  <div className="relative mx-auto h-[9.5rem] w-[78%] overflow-visible rounded-xl border border-foreground/10 bg-[#18212c] shadow-[0_18px_30px_-18px_hsl(210_11%_15%/0.6)] transition-transform duration-500 group-hover:-translate-y-1">
    <div className="flex items-center gap-1.5 border-b border-white/10 px-3 py-2">
      <span className="h-1.5 w-1.5 rounded-full bg-[#ff605c]" />
      <span className="h-1.5 w-1.5 rounded-full bg-[#ffbd44]" />
      <span className="h-1.5 w-1.5 rounded-full bg-[#00ca4e]" />
      <span className="ml-2 h-1.5 w-20 rounded-full bg-white/10" />
    </div>
    {children}
  </div>
);

/** Reference-inspired CSS compositions: browser artefact + floating elemental badges. */
const ProjectMockup = ({ kind }: { kind: ProjectMockupKind }) => {
  if (kind === "ad") {
    return (
      <div className="relative flex h-40 items-center justify-center overflow-visible">
        <BrowserChrome>
          <div className="relative h-[calc(100%-2rem)] overflow-hidden bg-gradient-to-br from-[#243e5a] via-[#122536] to-[#0e1825] p-4">
            <Sparkles className="absolute right-4 top-3 text-sky-300" size={14} />
            <p className="max-w-[7rem] pt-2 font-heading text-xl font-semibold leading-none text-white">Better<br />Ideas<br /><span className="text-sky-300">Bigger Impact.</span></p>
            <div className="absolute bottom-3 left-4 h-1 w-20 rounded-full bg-white/30" />
            <Play className="absolute bottom-5 right-8 rounded-full bg-white/20 p-2 text-white" size={28} />
          </div>
        </BrowserChrome>
        <Badge className="-left-2 top-5 text-accent"><Sparkles size={19} /></Badge>
        <Badge className="-left-1 bottom-4 text-accent"><BarChart3 size={21} /></Badge>
        <Badge className="-right-3 bottom-2 h-16 w-24"><ImageIcon size={18} className="text-accent" /><span className="h-1.5 w-10 rounded-full bg-foreground/10" /></Badge>
      </div>
    );
  }

  if (kind === "web") {
    return (
      <div className="relative flex h-40 items-center justify-center overflow-visible">
        <BrowserChrome>
          <div className="flex h-[calc(100%-2rem)] gap-3 bg-[#18212c] p-3 text-white">
            <div className="w-1/4 space-y-2 border-r border-white/10 pr-2 font-mono text-[7px] text-white/55"><FileCode2 size={13} /><span className="block">src</span><span className="block">components</span><span className="block">pages</span><span className="block">utils</span></div>
            <div className="flex-1 font-mono text-[7px] text-white/70"><span className="text-pink-300">const</span> App = () =&gt; {'{' }<br /><span className="pl-2 text-sky-300">return</span> (<br /><span className="pl-4">&lt;div className=</span><span className="text-emerald-300">&quot;app&quot;</span><span className="pl-0">&gt;</span><br /><span className="pl-4">&lt;h1&gt;Build. Create.&lt;/h1&gt;</span></div>
          </div>
        </BrowserChrome>
        <Badge className="-left-3 bottom-3 text-[#ffd343]"><span className="font-bold">🐍</span></Badge>
        <Badge className="right-1 top-2 text-sky-500"><Code2 size={21} /></Badge>
        <Badge className="-right-3 bottom-3 text-orange-500"><span className="font-bold">5</span></Badge>
      </div>
    );
  }

  return (
    <div className="relative flex h-40 items-center justify-center overflow-visible">
      <div className="absolute left-[8%] top-1/2 flex h-28 w-12 -translate-y-1/2 flex-col items-center justify-center gap-3 rounded-lg bg-[#202b38] text-white shadow-soft"><Layers3 size={14} /><Brush size={14} /><span className="text-[8px]">Text</span><Palette size={14} /></div>
      <div className="relative flex h-32 w-[56%] items-center justify-center rounded-lg border border-foreground/10 bg-white shadow-soft transition-transform duration-500 group-hover:-translate-y-1"><p className="px-3 font-heading text-lg font-semibold leading-none text-foreground">Good<br />Design<br /><span className="text-accent">Tells a<br />Better Story.</span></p><div className="absolute bottom-3 right-3 h-12 w-9 rounded-t-full bg-gradient-to-br from-accent/70 to-accent/15" /></div>
      <div className="absolute right-[6%] flex h-28 w-20 flex-col gap-2 rounded-lg border border-border bg-card p-2 shadow-soft"><div className="h-9 rounded bg-gradient-to-br from-sky-200 to-accent/60" /><div className="h-7 rounded bg-foreground/10" /><div className="h-7 rounded bg-accent/30" /></div>
      <Badge className="-right-4 top-4 bg-gradient-to-br from-sky-400 to-blue-600 text-white"><span className="font-heading font-semibold">Canva</span></Badge>
    </div>
  );
};

export default ProjectMockup;
