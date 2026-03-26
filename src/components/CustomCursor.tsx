import { useState, useEffect } from "react";

const CustomCursor = () => {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const isTouchDevice = window.matchMedia("(hover: none)").matches;
    if (isTouchDevice) return;

    const move = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      setVisible(true);
    };
    const leave = () => setVisible(false);

    window.addEventListener("mousemove", move);
    document.addEventListener("mouseleave", leave);
    document.addEventListener("mouseenter", () => setVisible(true));

    return () => {
      window.removeEventListener("mousemove", move);
      document.removeEventListener("mouseleave", leave);
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      className="fixed top-0 left-0 z-[10000] pointer-events-none hidden md:block"
      style={{ transform: `translate(${pos.x - 6}px, ${pos.y - 6}px)` }}
    >
      <div className="w-3 h-3 rounded-full bg-primary mix-blend-difference" />
    </div>
  );
};

export default CustomCursor;
