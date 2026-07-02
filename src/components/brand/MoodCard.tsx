"use client";

import type { LucideIcon } from "lucide-react";

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
    <div
      onClick={onClick}
      onMouseEnter={(e) => {
        const el = e.currentTarget;
        el.style.boxShadow = `0 0 80px ${glowColor}, 0 0 0 1px ${color}`;
        el.style.borderColor = color;
        el.style.backgroundColor = bgMuted;
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget;
        el.style.boxShadow = "0 4px 24px rgba(0,0,0,0.4), 0 0 0 1px rgba(255,255,255,0.06)";
        el.style.borderColor = borderColor;
        el.style.backgroundColor = "var(--bg-elevated)";
      }}
      className={[
        "group relative flex flex-col items-center gap-4 p-8 rounded-2xl border cursor-pointer text-left w-full",
        "transition-all duration-300 ease-out",
        className,
      ].join(" ")}
      style={{
        backgroundColor: "var(--bg-elevated)",
        borderColor,
        boxShadow: "0 4px 24px rgba(0,0,0,0.4), 0 0 0 1px rgba(255,255,255,0.06)",
      }}
    >
      {/* Glow blob behind icon on hover */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-24 h-24 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{ backgroundColor: glowColor }}
      />

      {/* Icon */}
      <div
        className="relative flex items-center justify-center size-16 rounded-2xl transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg"
        style={{ backgroundColor: bgMuted }}
      >
        <Icon className="size-7 transition-transform duration-300 group-hover:scale-110" style={{ color }} />
      </div>

      {/* Label */}
      <span className="text-lg font-display font-bold relative z-10" style={{ color: "var(--text-primary)" }}>
        {label}
      </span>

      {/* Description */}
      <span className="text-sm text-center leading-relaxed relative z-10" style={{ color: "var(--text-secondary)" }}>
        {description}
      </span>
    </div>
  );
}
