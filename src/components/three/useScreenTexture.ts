import { useMemo } from "react";
import * as THREE from "three";

type Options = {
  accent: string;
  rows?: number;
  width?: number;
  height?: number;
};

/**
 * Procedural "editor screen" texture — syntax-coloured code lines drawn to a
 * canvas. Cheap, no network assets, animated by offsetting the texture.
 */
export const useScreenTexture = ({ accent, rows = 26, width = 512, height = 320 }: Options) => {
  return useMemo(() => {
    const canvas = document.createElement("canvas");
    canvas.width = width;
    canvas.height = height;
    const ctx = canvas.getContext("2d");
    if (!ctx) return new THREE.CanvasTexture(canvas);

    ctx.fillStyle = "#12161B";
    ctx.fillRect(0, 0, width, height);

    // gutter
    ctx.fillStyle = "#171C22";
    ctx.fillRect(0, 0, 34, height);

    const colors = ["#7C8794", accent, "#22B8CF", "#B197FC", "#9BE39B", "#FFD8A8"];
    const rowH = height / rows;

    for (let r = 0; r < rows; r++) {
      const y = r * rowH + rowH * 0.32;
      // line number
      ctx.fillStyle = "#3A424C";
      ctx.fillRect(10, y + 2, 14, 3);

      let x = 44 + ((r * 13) % 3) * 12;
      const tokens = 2 + ((r * 7) % 4);
      for (let t = 0; t < tokens; t++) {
        const w = 18 + ((r * 31 + t * 17) % 70);
        ctx.fillStyle = colors[(r + t) % colors.length];
        ctx.globalAlpha = 0.85;
        ctx.fillRect(x, y, w, 4.5);
        x += w + 10;
        if (x > width - 60) break;
      }
      ctx.globalAlpha = 1;
    }

    const tex = new THREE.CanvasTexture(canvas);
    tex.wrapS = THREE.RepeatWrapping;
    tex.wrapT = THREE.RepeatWrapping;
    tex.colorSpace = THREE.SRGBColorSpace;
    return tex;
  }, [accent, rows, width, height]);
};

/** Chart-style texture used on the secondary monitor. */
export const useDashboardTexture = (accent: string) => {
  return useMemo(() => {
    const canvas = document.createElement("canvas");
    canvas.width = 512;
    canvas.height = 320;
    const ctx = canvas.getContext("2d");
    if (!ctx) return new THREE.CanvasTexture(canvas);

    ctx.fillStyle = "#12161B";
    ctx.fillRect(0, 0, 512, 320);

    ctx.fillStyle = "#1B2026";
    ctx.fillRect(24, 24, 464, 60);
    ctx.fillStyle = accent;
    ctx.fillRect(40, 46, 90, 8);
    ctx.fillStyle = "#38414B";
    ctx.fillRect(150, 48, 200, 5);

    // bars
    const bars = 12;
    for (let i = 0; i < bars; i++) {
      const h = 30 + ((i * 47) % 130);
      ctx.fillStyle = i % 3 === 0 ? accent : "#2C333B";
      ctx.fillRect(40 + i * 36, 280 - h, 22, h);
    }

    // sparkline
    ctx.strokeStyle = "#22B8CF";
    ctx.lineWidth = 3;
    ctx.beginPath();
    for (let i = 0; i <= 40; i++) {
      const x = 40 + i * 11;
      const y = 200 - Math.sin(i * 0.4) * 34 - (i % 5) * 2;
      i === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
    }
    ctx.stroke();

    const tex = new THREE.CanvasTexture(canvas);
    tex.colorSpace = THREE.SRGBColorSpace;
    return tex;
  }, [accent]);
};