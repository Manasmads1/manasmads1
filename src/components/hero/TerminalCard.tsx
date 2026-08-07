import { useEffect, useState } from "react";

const lines = [
  "$ whoami",
  "manas — creative technologist",
  "$ ls skills/",
  "video  design  code  content",
  "$ status --availability",
  "open for freelance ✓",
];

/** Self-typing terminal. Purely decorative, hidden from assistive tech. */
const TerminalCard = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setCount(lines.join("\n").length);
      return;
    }
    const id = window.setInterval(() => {
      setCount((c) => (c >= lines.join("\n").length ? 0 : c + 1));
    }, 55);
    return () => window.clearInterval(id);
  }, []);

  const text = lines.join("\n").slice(0, count);

  return (
    <div
      aria-hidden="true"
      className="w-[16.5rem] rounded-2xl glass-dark p-3.5 shadow-soft-lg"
    >
      <div className="mb-2.5 flex items-center gap-1.5">
        <span className="h-2 w-2 rounded-full bg-[#FF6058]" />
        <span className="h-2 w-2 rounded-full bg-[#FFBD2E]" />
        <span className="h-2 w-2 rounded-full bg-[#28CA41]" />
        <span className="ml-2 font-mono text-[9px] uppercase tracking-[0.18em] text-white/40">
          zsh — manas
        </span>
      </div>
      <pre className="min-h-[5.5rem] whitespace-pre-wrap font-mono text-[10.5px] leading-[1.6] text-[#9BE39B]">
        {text}
        <span className="animate-cursor-blink text-white">▍</span>
      </pre>
    </div>
  );
};

export default TerminalCard;