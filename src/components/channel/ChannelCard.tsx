"use client";

import type { LucideIcon } from "lucide-react";

interface ChannelCardProps {
  icon: LucideIcon;
  name: string;
  description: string;
  color: string;
  glowColor: string;
  bgMuted: string;
}

export function ChannelCard({
  icon: Icon,
  name,
  description,
  color,
  glowColor,
  bgMuted,
}: ChannelCardProps) {
  return (
    <div
      className="group relative flex flex-col items-center rounded-2xl border border-border-subtle p-6 text-center transition-all duration-200 hover:-translate-y-1 cursor-pointer"
      style={{
        backgroundColor: bgMuted,
        borderColor: "rgba(255,255,255,0.06)",
      }}
    >
      {/* Glow on hover */}
      <div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{ boxShadow: `0 0 40px ${glowColor}` }}
      />

      {/* Icon */}
      <div
        className="flex size-14 items-center justify-center rounded-xl mb-4 relative z-10"
        style={{ backgroundColor: bgMuted }}
      >
        <Icon className="size-7" style={{ color }} />
      </div>

      {/* Name */}
      <h3
        className="text-base font-display font-bold text-text-primary mb-1.5 relative z-10"
      >
        {name}
      </h3>

      {/* Description */}
      <p className="text-xs text-text-muted leading-relaxed relative z-10">
        {description}
      </p>
    </div>
  );
}
