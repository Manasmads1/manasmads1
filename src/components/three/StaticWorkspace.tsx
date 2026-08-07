/**
 * Flat, motion-free stand-in used when the visitor prefers reduced motion.
 * Mirrors the composition of the 3D scene so the layout never shifts.
 */
const StaticWorkspace = () => (
  <div className="absolute inset-0 flex items-center justify-center p-8" aria-hidden="true">
    <div className="relative w-full max-w-md">
      <div className="rounded-2xl border border-border bg-surface p-4 shadow-soft-lg">
        <div className="mb-3 flex gap-1.5">
          {["#FF6058", "#FFBD2E", "#28CA41"].map((c) => (
            <span key={c} className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: c }} />
          ))}
        </div>
        <div className="space-y-2 rounded-lg bg-[#12161B] p-4 font-mono text-[11px] leading-relaxed">
          <p className="text-[#7C8794]">// workspace.tsx</p>
          <p className="text-[#B197FC]">const <span className="text-[#9BE39B]">manas</span> = {"{"}</p>
          <p className="pl-4 text-[#8FB8FF]">role: <span className="text-[#FFD8A8]">"creative technologist"</span>,</p>
          <p className="pl-4 text-[#8FB8FF]">status: <span className="text-[#FFD8A8]">"available"</span>,</p>
          <p className="text-[#B197FC]">{"}"};</p>
        </div>
      </div>
      <div className="mx-auto mt-3 h-2 w-2/3 rounded-full bg-border" />
    </div>
  </div>
);

export default StaticWorkspace;