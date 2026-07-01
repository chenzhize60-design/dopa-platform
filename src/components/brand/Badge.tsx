import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { Sparkles, Flame, Clock, ShieldCheck } from "lucide-react";

const badgeVariants = cva(
  "inline-flex items-center gap-1 px-2.5 py-0.5 text-[11px] font-medium rounded-[var(--radius-full)] border",
  {
    variants: {
      variant: {
        new: "bg-brand-muted text-brand border-brand/20",
        limited: "bg-alert-muted text-alert border-alert/20",
        verified: "bg-heal-muted text-heal border-heal/20",
        hot: "bg-joy-muted text-joy border-joy/20",
      },
    },
    defaultVariants: {
      variant: "new",
    },
  }
);

const iconMap = {
  new: Sparkles,
  limited: Clock,
  verified: ShieldCheck,
  hot: Flame,
};

interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {
  showIcon?: boolean;
}

export function Badge({
  className,
  variant = "new",
  showIcon = true,
  children,
  ...props
}: BadgeProps) {
  const Icon = showIcon ? iconMap[variant ?? "new"] : null;

  return (
    <span className={cn(badgeVariants({ variant, className }))} {...props}>
      {Icon && <Icon className="size-3" />}
      {children}
    </span>
  );
}
