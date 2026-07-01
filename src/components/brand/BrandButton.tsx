"use client";

import { forwardRef } from "react";
import { Loader2 } from "lucide-react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { GlimmerDot } from "./GlimmerDot";

const brandButtonVariants = cva(
  "inline-flex shrink-0 items-center justify-center gap-2 font-medium whitespace-nowrap outline-none select-none relative overflow-hidden transition-all duration-150 ease-[cubic-bezier(0.4,0,0.2,1)] focus-visible:ring-2 focus-visible:ring-brand/50 focus-visible:ring-offset-2 focus-visible:ring-offset-bg-primary disabled:pointer-events-none disabled:opacity-40 active:scale-[0.98] [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        coral:
          "bg-brand text-white hover:bg-brand-hover hover:shadow-[0_0_30px_rgba(255,59,92,0.3)] active:bg-brand",
        ghost:
          "text-text-secondary hover:text-text-primary hover:bg-bg-elevated",
        dopamine:
          "border border-joy text-joy bg-transparent hover:bg-joy-muted hover:shadow-[0_0_30px_rgba(255,214,10,0.15)]",
        outline:
          "border border-border-default text-text-primary bg-transparent hover:border-border-default/60 hover:bg-bg-surface",
        heal: "bg-heal text-text-inverse hover:shadow-[0_0_30px_rgba(0,212,200,0.3)]",
      },
      size: {
        sm: "h-8 text-xs px-4 rounded-[var(--radius-full)]",
        default: "h-10 text-sm px-6 rounded-[var(--radius-full)]",
        lg: "h-12 text-base px-8 rounded-[var(--radius-full)]",
        xl: "h-14 text-lg px-10 rounded-[var(--radius-full)]",
        icon: "size-10 rounded-[var(--radius-full)] p-0",
      },
    },
    defaultVariants: {
      variant: "coral",
      size: "default",
    },
  }
);

interface BrandButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof brandButtonVariants> {
  loading?: boolean;
  showGlimmer?: boolean;
}

const BrandButton = forwardRef<HTMLButtonElement, BrandButtonProps>(
  (
    { className, variant, size, loading, showGlimmer, children, disabled, ...props },
    ref
  ) => {
    return (
      <button
        ref={ref}
        disabled={disabled || loading}
        data-slot="button"
        className={cn(brandButtonVariants({ variant, size, className }))}
        {...props}
      >
        {loading && <Loader2 className="animate-spin" />}
        {!loading && showGlimmer && variant === "dopamine" && (
          <GlimmerDot size={6} color="var(--joy)" className="absolute -top-1 -right-1" />
        )}
        {!loading && showGlimmer && variant === "coral" && (
          <GlimmerDot size={6} color="var(--brand)" className="absolute -top-1 -right-1" />
        )}
        {children}
      </button>
    );
  }
);

BrandButton.displayName = "BrandButton";

export { BrandButton, brandButtonVariants };
