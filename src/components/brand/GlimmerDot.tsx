"use client";

import { motion, type Transition } from "framer-motion";
import { cn } from "@/lib/utils";

type GlimmerMode = "breathe" | "trail" | "burst";

interface GlimmerDotProps {
  mode?: GlimmerMode;
  size?: number;
  color?: string;
  className?: string;
  delay?: number;
}

const smoothEase: Transition["ease"] = [0.4, 0, 0.2, 1];

export function GlimmerDot({
  mode = "breathe",
  size = 8,
  color = "var(--brand)",
  className,
  delay = 0,
}: GlimmerDotProps) {
  if (mode === "burst") {
    return (
      <motion.div
        initial={{ scale: 0.3, opacity: 1 }}
        animate={{ scale: [0.3, 2.5, 0], opacity: [1, 0.5, 0] }}
        transition={{ duration: 0.8, ease: smoothEase }}
        className={cn("rounded-full absolute pointer-events-none", className)}
        style={{
          width: size,
          height: size,
          backgroundColor: color,
          boxShadow: `0 0 ${size * 2}px ${color}, 0 0 ${size * 4}px ${color}`,
        }}
      />
    );
  }

  if (mode === "trail") {
    return (
      <motion.div
        animate={{ opacity: [0, 1, 0], scale: [0.8, 1.2, 0.8] }}
        transition={{
          duration: 1.5,
          ease: smoothEase,
          repeat: Infinity,
          delay,
        }}
        className={cn("rounded-full absolute pointer-events-none", className)}
        style={{
          width: size,
          height: size,
          backgroundColor: color,
          boxShadow: `0 0 ${size * 1.5}px ${color}, 0 0 ${size * 3}px ${color}`,
        }}
      />
    );
  }

  // Breathe (default)
  return (
    <motion.div
      animate={{ scale: [1, 1.3, 1], opacity: [0.4, 1, 0.4] }}
      transition={{
        duration: 2,
        ease: smoothEase,
        repeat: Infinity,
      }}
      className={cn("rounded-full pointer-events-none", className)}
      style={{
        width: size,
        height: size,
        backgroundColor: color,
        boxShadow: `0 0 ${size * 1.5}px ${color}, 0 0 ${size * 3}px ${color}`,
      }}
    />
  );
}
