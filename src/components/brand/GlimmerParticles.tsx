"use client";

import { useMemo } from "react";

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  color: string;
  delay: number;
  duration: number;
  opacity: number;
}

interface GlimmerParticlesProps {
  count?: number;
  colors?: string[];
  className?: string;
}

const defaultColors = [
  "var(--brand)",
  "var(--joy)",
  "var(--heal)",
  "var(--alert)",
];

function seededRandom(seed: number) {
  const x = Math.sin(seed) * 10000;
  return x - Math.floor(x);
}

export function GlimmerParticles({
  count = 20,
  colors = defaultColors,
  className,
}: GlimmerParticlesProps) {
  const particles = useMemo(() => {
    const items: Particle[] = [];
    for (let i = 0; i < count; i++) {
      items.push({
        id: i,
        x: seededRandom(i * 7 + 1) * 100,
        y: seededRandom(i * 13 + 5) * 100,
        size: 2 + seededRandom(i * 3) * 6,
        color: colors[Math.floor(seededRandom(i * 11 + 3) * colors.length)],
        delay: seededRandom(i * 17 + 2) * 3,
        duration: 2 + seededRandom(i * 5 + 7) * 4,
        opacity: 0.2 + seededRandom(i * 19 + 9) * 0.4,
      });
    }
    return items;
  }, [count, colors]);

  return (
    <div
      className={className}
      aria-hidden="true"
      style={{ position: "absolute", inset: 0, overflow: "hidden", pointerEvents: "none" }}
    >
      {particles.map((p) => (
        <div
          key={p.id}
          className="absolute rounded-full"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.size,
            height: p.size,
            backgroundColor: p.color,
            boxShadow: `0 0 ${p.size * 2}px ${p.color}`,
            opacity: p.opacity,
            animation: `glimmer-breathe ${p.duration}s var(--easing-smooth) ${p.delay}s infinite`,
          }}
        />
      ))}
    </div>
  );
}
