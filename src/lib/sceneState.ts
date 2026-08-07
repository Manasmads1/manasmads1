export type SceneSection =
  | "home"
  | "work"
  | "about"
  | "skills"
  | "tools"
  | "journey"
  | "achievements"
  | "contact";

/**
 * Mutable, render-free bridge between scroll/pointer input and the 3D scene.
 * Written by DOM listeners, read inside useFrame — never triggers React renders.
 */
export const sceneState = {
  section: "home" as SceneSection,
  /** 0..1 document scroll progress */
  progress: 0,
  /** -1..1 normalised pointer */
  pointerX: 0,
  pointerY: 0,
  reducedMotion: false,
};