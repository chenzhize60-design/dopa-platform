"use client";

import { motion } from "framer-motion";
import { ShoppingBag, Heart } from "lucide-react";
import { cn } from "@/lib/utils";
import { Badge } from "./Badge";

interface ProductCardProps {
  image: string;
  brand: string;
  name: string;
  price: string;
  originalPrice?: string;
  badge?: { label: string; variant: "new" | "limited" | "verified" | "hot" };
  onAddToCart?: () => void;
  onFavorite?: () => void;
  className?: string;
}

export function ProductCard({
  image,
  brand,
  name,
  price,
  originalPrice,
  badge,
  onAddToCart,
  onFavorite,
  className,
}: ProductCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
      className={cn(
        "group relative flex flex-col rounded-[var(--radius-card)] overflow-hidden",
        "bg-bg-surface border border-border-default",
        "transition-shadow duration-250 ease-[cubic-bezier(0.4,0,0.2,1)]",
        className
      )}
      style={{
        boxShadow:
          "0 1px 2px rgba(0,0,0,0.04), 0 4px 8px rgba(0,0,0,0.06)",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.boxShadow =
          "0 2px 4px rgba(0,0,0,0.06), 0 8px 16px rgba(0,0,0,0.12)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.boxShadow =
          "0 1px 2px rgba(0,0,0,0.04), 0 4px 8px rgba(0,0,0,0.06)";
      }}
    >
      {/* Image */}
      <div className="relative aspect-[3/4] overflow-hidden bg-bg-elevated">
        <img
          src={image}
          alt={name}
          className="size-full object-cover transition-transform duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:scale-105"
        />

        {/* Badge overlay */}
        {badge && (
          <div className="absolute top-3 left-3">
            <Badge variant={badge.variant}>{badge.label}</Badge>
          </div>
        )}

        {/* Quick actions overlay */}
        <div className="absolute bottom-3 right-3 flex gap-2 opacity-0 translate-y-2 transition-all duration-250 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:opacity-100 group-hover:translate-y-0">
          <button
            onClick={onFavorite}
            className="flex items-center justify-center size-9 rounded-full bg-bg-primary/80 text-text-secondary hover:text-brand transition-colors duration-150"
            aria-label="Add to favorites"
          >
            <Heart className="size-4" />
          </button>
          <button
            onClick={onAddToCart}
            className="flex items-center justify-center size-9 rounded-full bg-brand text-white hover:bg-brand-hover transition-colors duration-150"
            aria-label="Add to cart"
          >
            <ShoppingBag className="size-4" />
          </button>
        </div>
      </div>

      {/* Info */}
      <div className="flex flex-col gap-1 p-4">
        <span className="text-xs text-text-muted uppercase tracking-wider font-medium">
          {brand}
        </span>
        <span className="text-sm text-text-primary line-clamp-2 leading-snug">
          {name}
        </span>
        <div className="flex items-baseline gap-2 mt-1">
          <span className="text-base font-display font-bold text-text-primary">
            {price}
          </span>
          {originalPrice && (
            <span className="text-xs text-text-muted line-through">
              {originalPrice}
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );
}
