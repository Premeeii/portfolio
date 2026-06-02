"use client";

import { useRef, useEffect, useState, useCallback } from "react";

interface AsciiImageProps {
  src: string;
  alt: string;
  className?: string;
  /** Number of columns in the ASCII grid */
  cols?: number;
  /** Duration of the reveal animation in milliseconds */
  revealDuration?: number;
  /** ASCII character set ordered from dark to light */
  charSet?: string;
  /** Color of the ASCII characters */
  charColor?: string;
}

interface AsciiCell {
  char: string;
  revealed: boolean;
}

export default function AsciiImage({
  src,
  alt,
  className = "",
  cols = 80,
  revealDuration = 2500,
  charSet = "@%#*+=-:. ",
  charColor = "#CEC5BA",
}: AsciiImageProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);
  const phaseRef = useRef<"ascii" | "transitioning" | "image">("ascii");
  const gridRef = useRef<AsciiCell[][]>([]);
  const imageRef = useRef<HTMLImageElement | null>(null);
  const animFrameRef = useRef<number>(0);

  // Observe when element enters viewport
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 },
    );

    observer.observe(container);
    return () => observer.disconnect();
  }, []);

  // Build the ASCII grid from the image
  const buildGrid = useCallback(
    (img: HTMLImageElement, canvasWidth: number, canvasHeight: number) => {
      const offscreen = document.createElement("canvas");
      const octx = offscreen.getContext("2d");
      if (!octx) return;

      // Scale down to our column count
      const cellWidth = canvasWidth / cols;
      const rows = Math.floor((canvasHeight / cellWidth) * 0.55);

      offscreen.width = cols;
      offscreen.height = rows;
      octx.drawImage(img, 0, 0, cols, rows);

      const imageData = octx.getImageData(0, 0, cols, rows);
      const pixels = imageData.data;

      const grid: AsciiCell[][] = [];
      for (let y = 0; y < rows; y++) {
        const row: AsciiCell[] = [];
        for (let x = 0; x < cols; x++) {
          const i = (y * cols + x) * 4;
          const r = pixels[i];
          const g = pixels[i + 1];
          const b = pixels[i + 2];
          const brightness = (r + g + b) / 3;
          const charIndex = Math.floor(
            (brightness / 255) * (charSet.length - 1),
          );
          row.push({ char: charSet[charIndex], revealed: false });
        }
        grid.push(row);
      }

      gridRef.current = grid;
    },
    [cols, charSet],
  );

  // Draw ASCII frame
  const drawAscii = useCallback(
    (ctx: CanvasRenderingContext2D, width: number, height: number) => {
      const grid = gridRef.current;
      if (grid.length === 0) return;

      const rows = grid.length;
      const cellWidth = width / cols;
      const cellHeight = height / rows;
      const fontSize = Math.max(cellWidth * 0.9, 6);

      ctx.clearRect(0, 0, width, height);
      ctx.fillStyle = "#0E141C";
      ctx.fillRect(0, 0, width, height);

      ctx.font = `${fontSize}px monospace`;
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";

      for (let y = 0; y < rows; y++) {
        for (let x = 0; x < cols; x++) {
          if (!grid[y][x].revealed) {
            ctx.fillStyle = charColor;
            ctx.fillText(
              grid[y][x].char,
              x * cellWidth + cellWidth / 2,
              y * cellHeight + cellHeight / 2,
            );
          }
        }
      }
    },
    [cols, charColor],
  );

  // Reveal animation: progressively mark cells as revealed
  const runReveal = useCallback(
    (
      ctx: CanvasRenderingContext2D,
      img: HTMLImageElement,
      width: number,
      height: number,
    ) => {
      const grid = gridRef.current;
      if (grid.length === 0) return;

      const rows = grid.length;
      const totalCells = rows * cols;
      const cellWidth = width / cols;
      const cellHeight = height / rows;
      const fontSize = Math.max(cellWidth * 0.9, 6);

      // Build a shuffled list of cell indices for random reveal
      const indices: [number, number][] = [];
      for (let y = 0; y < rows; y++) {
        for (let x = 0; x < cols; x++) {
          indices.push([y, x]);
        }
      }
      // Fisher-Yates shuffle
      for (let i = indices.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [indices[i], indices[j]] = [indices[j], indices[i]];
      }

      const startTime = performance.now();

      let revealedCount = 0;

      const animate = (now: number) => {
        const elapsed = now - startTime;
        const progress = Math.min(elapsed / revealDuration, 1);
        const targetRevealed = Math.floor(progress * totalCells);

        // Reveal more cells
        while (
          revealedCount < targetRevealed &&
          revealedCount < indices.length
        ) {
          const [cy, cx] = indices[revealedCount];
          grid[cy][cx].revealed = true;
          revealedCount++;
        }

        // Draw image first (full), then overlay unrevealed ASCII
        ctx.clearRect(0, 0, width, height);
        ctx.drawImage(img, 0, 0, width, height);

        ctx.font = `${fontSize}px monospace`;
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";

        for (let y = 0; y < rows; y++) {
          for (let x = 0; x < cols; x++) {
            if (!grid[y][x].revealed) {
              // Draw background cell
              ctx.fillStyle = "#0E141C";
              ctx.fillRect(
                x * cellWidth,
                y * cellHeight,
                cellWidth,
                cellHeight,
              );
              // Draw ASCII char
              ctx.fillStyle = charColor;
              ctx.fillText(
                grid[y][x].char,
                x * cellWidth + cellWidth / 2,
                y * cellHeight + cellHeight / 2,
              );
            }
          }
        }

        if (progress < 1) {
          animFrameRef.current = requestAnimationFrame(animate);
        } else {
          // Fully revealed - draw the clean image
          ctx.clearRect(0, 0, width, height);
          ctx.drawImage(img, 0, 0, width, height);
          phaseRef.current = "image";
        }
      };

      phaseRef.current = "transitioning";
      animFrameRef.current = requestAnimationFrame(animate);
    },
    [cols, revealDuration, charColor],
  );

  // Main effect: load image and start animation when in view
  useEffect(() => {
    if (!isInView) return;

    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const img = new Image();
    img.crossOrigin = "anonymous";
    img.src = src;

    img.onload = () => {
      imageRef.current = img;

      // Set canvas size to match container
      const rect = container.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;
      canvas.width = rect.width * dpr;
      canvas.height = rect.width * dpr; // square aspect
      canvas.style.width = `${rect.width}px`;
      canvas.style.height = `${rect.width}px`;
      ctx.scale(dpr, dpr);

      const displayWidth = rect.width;
      const displayHeight = rect.width;

      // Build grid and draw initial ASCII
      buildGrid(img, displayWidth, displayHeight);
      drawAscii(ctx, displayWidth, displayHeight);

      // After a short pause, begin the reveal
      setTimeout(() => {
        runReveal(ctx, img, displayWidth, displayHeight);
      }, 200);
    };

    return () => {
      if (animFrameRef.current) {
        cancelAnimationFrame(animFrameRef.current);
      }
    };
  }, [isInView, src, buildGrid, drawAscii, runReveal]);

  return (
    <div ref={containerRef} className={className}>
      <canvas
        ref={canvasRef}
        className="w-full rounded-4xl"
        role="img"
        aria-label={alt}
      />
    </div>
  );
}
