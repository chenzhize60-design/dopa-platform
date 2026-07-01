import { Zap, ShoppingBag, Share2 } from "lucide-react";
import { GlimmerDot } from "@/components/brand/GlimmerDot";

export default function ShareSimOrderPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-bg-primary p-4">
      {/* Card */}
      <div className="w-full max-w-sm rounded-2xl overflow-hidden border border-border-default bg-bg-surface">
        {/* Header gradient */}
        <div className="relative bg-gradient-brand px-6 py-8 text-center overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-4 left-8">
              <GlimmerDot size={6} color="#fff" />
            </div>
            <div className="absolute top-12 right-6">
              <GlimmerDot size={4} color="#fff" />
            </div>
            <div className="absolute bottom-4 left-1/2">
              <GlimmerDot size={5} color="#fff" />
            </div>
          </div>

          <div className="relative z-10">
            <span className="text-xs tracking-[0.2em] uppercase text-white/70 font-medium">
              Dopamine Sim Order
            </span>
            <h2 className="mt-2 text-2xl font-display font-bold text-white">
              Fantasy Cart Revealed
            </h2>
          </div>
        </div>

        {/* Items */}
        <div className="px-6 py-5 flex flex-col gap-3">
          <div className="flex items-center gap-3 pb-3 border-b border-border-default">
            <div className="size-14 rounded-lg bg-bg-elevated flex items-center justify-center text-text-muted">
              <ShoppingBag className="size-5" />
            </div>
            <div className="flex-1">
              <span className="text-xs text-text-muted">Celine</span>
              <p className="text-sm text-text-primary truncate">
                Triomphe Shoulder Bag
              </p>
              <span className="text-xs text-brand font-medium">¥28,500</span>
            </div>
          </div>
          <div className="flex items-center gap-3 pb-3 border-b border-border-default">
            <div className="size-14 rounded-lg bg-bg-elevated flex items-center justify-center text-text-muted">
              <ShoppingBag className="size-5" />
            </div>
            <div className="flex-1">
              <span className="text-xs text-text-muted">Byredo</span>
              <p className="text-sm text-text-primary truncate">
                Gypsy Water EDP
              </p>
              <span className="text-xs text-brand font-medium">¥1,450</span>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="size-14 rounded-lg bg-bg-elevated flex items-center justify-center text-text-muted">
              <ShoppingBag className="size-5" />
            </div>
            <div className="flex-1">
              <span className="text-xs text-text-muted">Cartier</span>
              <p className="text-sm text-text-primary truncate">Tank Must Watch</p>
              <span className="text-xs text-brand font-medium">¥24,500</span>
            </div>
          </div>
        </div>

        {/* Points + CTA */}
        <div className="px-6 py-5 border-t border-border-default flex flex-col items-center gap-4">
          <div className="flex items-center gap-2 bg-joy-muted px-4 py-2 rounded-full">
            <Zap className="size-4 text-joy" />
            <span className="text-sm font-bold text-joy">
              +150 Points Earned
            </span>
          </div>
          <button className="flex items-center gap-2 text-sm text-brand hover:text-brand-hover transition-colors duration-150">
            <Share2 className="size-4" />
            Share Your Cart
          </button>
          <span className="text-xs text-text-muted">
            dopamine-luxury.com/share/sim-order/demo-001
          </span>
        </div>
      </div>
    </div>
  );
}
