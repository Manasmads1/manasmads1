/** Syntax-highlighted snippet used as an ambient hero accent. */
const CodeSnippetCard = () => (
  <div aria-hidden="true" className="w-[17rem] rounded-2xl glass p-4">
    <div className="mb-2.5 flex items-center justify-between">
      <span className="font-mono text-[9.5px] uppercase tracking-[0.2em] text-muted-foreground">
        manas.ts
      </span>
      <span className="inline-flex items-center gap-1.5 rounded-full bg-[hsl(140_60%_45%/0.12)] px-2 py-0.5 font-mono text-[9px] text-[hsl(140_55%_32%)]">
        <span className="h-1.5 w-1.5 rounded-full bg-[hsl(140_55%_40%)]" />
        deployed · main
      </span>
    </div>
    <pre className="font-mono text-[10.5px] leading-[1.75] text-foreground/80">
      <span className="text-[hsl(262_70%_50%)]">export const</span>{" "}
      <span className="text-accent">craft</span> = () <span className="text-[hsl(262_70%_50%)]">{"=>"}</span> {"{"}
      {"\n"}  <span className="text-[hsl(262_70%_50%)]">return</span>{" "}
      <span className="text-[hsl(24_80%_42%)]">"design + code"</span>;{"\n"}
      {"}"};
    </pre>
  </div>
);

export default CodeSnippetCard;