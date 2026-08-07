import { Suspense, lazy, useEffect, useRef, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { sceneState } from "@/lib/sceneState";

const WorkspaceScene = lazy(() => import("./WorkspaceScene"));

/**
 * Lazy, viewport-gated R3F canvas. Frameloop is suspended when the scene
 * scrolls out of view and capped DPR keeps it comfortably at 60fps.
 */
const HeroCanvas = () => {
  const wrapper = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const el = wrapper.current;
    if (!el) return;
    const io = new IntersectionObserver(([entry]) => setVisible(entry.isIntersecting), {
      rootMargin: "200px",
    });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    const onPointer = (e: PointerEvent) => {
      sceneState.pointerX = (e.clientX / window.innerWidth) * 2 - 1;
      sceneState.pointerY = (e.clientY / window.innerHeight) * 2 - 1;
    };
    window.addEventListener("pointermove", onPointer, { passive: true });
    return () => window.removeEventListener("pointermove", onPointer);
  }, []);

  return (
    <div ref={wrapper} className="absolute inset-0" aria-hidden="true">
      <Canvas
        shadows
        dpr={[1, 1.6]}
        frameloop={visible ? "always" : "never"}
        gl={{ antialias: true, powerPreference: "high-performance", alpha: true }}
        camera={{ position: [0.2, 1.7, 10.5], fov: 30 }}
      >
        <Suspense fallback={null}>
          <WorkspaceScene />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default HeroCanvas;