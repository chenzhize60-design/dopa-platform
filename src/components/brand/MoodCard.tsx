"use client";

import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface MoodCardProps {
  icon: LucideIcon;
  label: string;
  description: string;
  color: string;
  borderColor: string;
  glowColor: string;
  bgMuted: string;
  onClick?: () => void;
  className?: string;
}

export function MoodCard({
  icon: Icon,
  label,
  description,
  color,
  borderColor,
  glowColor,
  bgMuted,
  onClick,
  className,
}: MoodCardProps) {
  return (
    <motion.button
      onClick={onClick}
      whileHover={{ scale: 1.02, y: -2 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.2, ease: [0.4, 0, 0.2, 1] }}
      className={cn(
        "group relative flex flex-col items-center gap-4 p-8 rounded-[var(--radius-card)] border cursor-pointer text-left w-full",
        "transition-shadow duration-250 ease-[cubic-bezier(0.4,0,0.2,1)]",
        className
      )}
      style={{
        backgroundColor: "var(--bg-elevated)",
        borderColor: borderColor,
        boxShadow: "0 1px 2px rgba(0,0,0,0.04), 0 4px 8px rgba(0,0,0,0.06)",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.boxShadow = `0 0 60px ${glowColor}`;
        (e.currentTarget as HTMLElement).style.borderColor = color;
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.boxShadow =
          "0 1px 2px rgba(0,0,0,0.04), 0 4px 8px rgba(0,0,0,0.06)";
        (e.currentTarget as HTMLElement).style.borderColor = borderColor;
      }}
    >
      {/* Icon container */}
      <div
        className="flex items-center justify-center size-16 rounded-2xl transition-transform duration-250 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:scale-110"
        style={{
          backgroundColor: bgMuted,
        }}
      >
        <Icon className="size-8" style={{ color }} />
      </div>

      {/* Label */}
      <span
        className="text-lg font-display font-bold"
        style={{ color: "var(--text-primary)" }}
      >
        {label}
      </span>

      {/* Description */}
      <span className="text-sm text-text-secondary text-center leading-relaxed">
        {description}
      </span>
    </motion.button>
  );
}
