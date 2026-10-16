import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

type Particle = {
  u: number;
  v: number;
  ink: number;
  phase: number;
  accent: boolean;
  startX: number;
  startY: number;
};

const PORTRAIT_URL = "/MANAS.webp";
const DURATION_MS = 1900;
const FAILSAFE_MS = 2200;
const IMAGE_TIMEOUT_MS = 650;
const SAMPLE_SIZE = 176;

const noiseAt = (x: number, y: number) => {
  const value = Math.sin(x * 127.1 + y * 311.7) * 43758.5453;
  return value - Math.floor(value);
};

const readPortraitParticles = (image: HTMLImageElement, limit: number): Omit<Particle, "startX" | "startY">[] => {
  const sample = document.createElement("canvas");
  sample.width = SAMPLE_SIZE;
  sample.height = SAMPLE_SIZE;
  const sampleContext = sample.getContext("2d", { willReadFrequently: true });
  if (!sampleContext) return [];

  sampleContext.drawImage(image, 0, 0, SAMPLE_SIZE, SAMPLE_SIZE);
  const pixels = sampleContext.getImageData(0, 0, SAMPLE_SIZE, SAMPLE_SIZE).data;
  const candidates: Omit<Particle, "startX" | "startY">[] = [];

  for (let y = 0; y < SAMPLE_SIZE; y += 1) {
    for (let x = 0; x < SAMPLE_SIZE; x += 1) {
      const offset = (y * SAMPLE_SIZE + x) * 4;
      const opacity = pixels[offset + 3] / 255;
      if (opacity < 0.035) continue;
      const luminance =
        pixels[offset] * 0.2126 + pixels[offset + 1] * 0.7152 + pixels[offset + 2] * 0.0722;
      const ink = (255 - luminance) * opacity;
      if (ink < 8) continue;

      const seed = noiseAt(x, y);
      const inclusionChance = 0.12 + Math.pow(ink / 255, 0.82) * 0.86;
      if (seed > inclusionChance) continue;

      candidates.push({
        u: (x + 0.5) / SAMPLE_SIZE,
        v: (y + 0.5) / SAMPLE_SIZE,
        ink,
        phase: seed * Math.PI * 2,
        accent: seed > 0.982,
      });
    }
  }

  if (candidates.length <= limit) return candidates;
  const stride = candidates.length / limit;
  return Array.from({ length: limit }, (_, index) => candidates[Math.floor((index + 0.5) * stride)]);
};

const LoadingScreen = () => {
  const [done, setDone] = useState(
    () => typeof window !== "undefined" && window.matchMedia?.("(prefers-reduced-motion: reduce)").matches === true,
  );
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (done) return;

    let cancelled = false;
    let started = false;
    let finished = false;
    let frameId = 0;
    let finishTimer = 0;
    let imageTimer = 0;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    const finish = () => {
      if (cancelled || finished) return;
      finished = true;
      setDone(true);
    };

    const onMotionPreference = () => {
      if (reduceMotion.matches) finish();
    };
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") finish();
    };

    reduceMotion.addEventListener("change", onMotionPreference);
    window.addEventListener("keydown", onKeyDown);
    const failsafe = window.setTimeout(finish, FAILSAFE_MS);
    imageTimer = window.setTimeout(finish, IMAGE_TIMEOUT_MS);

    const image = new Image();
    image.decoding = "async";

    const startAnimation = () => {
      if (cancelled || started || !image.naturalWidth) return;
      started = true;
      window.clearTimeout(imageTimer);

      const canvas = canvasRef.current;
      const context = canvas?.getContext("2d", { alpha: true });
      if (!canvas || !context) {
        finish();
        return;
      }

      let width = 0;
      let height = 0;
      const resize = () => {
        width = window.innerWidth;
        height = window.innerHeight;
        const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
        canvas.width = Math.round(width * dpr);
        canvas.height = Math.round(height * dpr);
        context.setTransform(dpr, 0, 0, dpr, 0, 0);
      };
      resize();

      const maxParticles = width < 640 ? 1500 : 3000;
      const particles = readPortraitParticles(image, maxParticles).map((particle) => ({
        ...particle,
        startX: Math.random() * width,
        startY: Math.random() * height,
      }));
      if (!particles.length) {
        finish();
        return;
      }

      const startedAt = performance.now();
      const draw = (now: number) => {
        if (cancelled) return;
        const progress = Math.min(1, (now - startedAt) / DURATION_MS);
        const settle = 1 - Math.pow(1 - progress, 3.1);
        const drift = 1 - settle;
        context.clearRect(0, 0, width, height);

        const size = Math.min(width * 0.72, height * 0.68, 520);
        const portraitX = (width - size) / 2;
        const portraitY = Math.max(24, height * 0.44 - size / 2);

        for (const particle of particles) {
          const targetX = portraitX + particle.u * size;
          const targetY = portraitY + particle.v * size;
          const orbit = (10 + particle.ink * 0.06) * drift;
          const x = particle.startX + (targetX - particle.startX) * settle + Math.sin(now * 0.002 + particle.phase) * orbit;
          const y = particle.startY + (targetY - particle.startY) * settle + Math.cos(now * 0.0017 + particle.phase) * orbit;
          const alpha = (0.2 + settle * 0.66) * (0.35 + (particle.ink / 255) * 0.65);
          const radius = 0.5 + (particle.ink / 255) * 1.05;

          context.beginPath();
          context.fillStyle = particle.accent
            ? `rgba(83, 126, 176, ${alpha * 0.82})`
            : `rgba(37, 41, 47, ${alpha})`;
          context.arc(x, y, radius, 0, Math.PI * 2);
          context.fill();
        }

        const reveal = Math.max(0, Math.min(1, (progress - 0.78) / 0.22));
        if (reveal > 0) {
          context.globalAlpha = reveal * reveal * (3 - 2 * reveal);
          context.drawImage(image, portraitX, portraitY, size, size);
          context.globalAlpha = 1;
        }

        if (progress < 1) frameId = window.requestAnimationFrame(draw);
        else finishTimer = window.setTimeout(finish, 110);
      };

      frameId = window.requestAnimationFrame(draw);
      window.addEventListener("resize", resize, { passive: true });
      resizeCleanup = () => window.removeEventListener("resize", resize);
    };

    let resizeCleanup = () => {};
    image.onload = startAnimation;
    image.onerror = finish;
    image.src = PORTRAIT_URL;
    if (image.complete) {
      if (image.naturalWidth) startAnimation();
      else finish();
    } else {
      image.decode?.().then(startAnimation).catch(() => {
        if (image.complete && !image.naturalWidth) finish();
      });
    }

    return () => {
      cancelled = true;
      window.clearTimeout(failsafe);
      window.clearTimeout(imageTimer);
      window.clearTimeout(finishTimer);
      window.cancelAnimationFrame(frameId);
      resizeCleanup();
      reduceMotion.removeEventListener("change", onMotionPreference);
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [done]);

  useEffect(() => {
    if (done) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [done]);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          key="portrait-intro"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-[100] overflow-hidden bg-background text-foreground"
          role="status"
          aria-live="polite"
        >
          <span className="sr-only">
            A short portrait animation is playing. Choose Skip intro to continue immediately.
          </span>
          <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" aria-hidden="true" />

          <span
            aria-hidden="true"
            className="absolute bottom-8 left-1/2 -translate-x-1/2 font-display text-xl tracking-[0.18em] text-foreground/85 md:bottom-10 md:text-2xl"
          >
            MANAS
          </span>

          <button
            type="button"
            onClick={() => setDone(true)}
            className="absolute right-5 top-5 inline-flex h-11 items-center rounded-full border border-border bg-card/80 px-4 text-[11px] font-medium tracking-wide text-foreground shadow-soft transition-colors hover:bg-card focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent md:right-8 md:top-8"
          >
            Skip intro
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;
