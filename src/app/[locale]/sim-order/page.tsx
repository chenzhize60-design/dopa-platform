"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Sparkles,
  CheckCircle2,
  Share2,
  ArrowRight,
  Zap,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { BrandButton } from "@/components/brand/BrandButton";
import { GlimmerDot } from "@/components/brand/GlimmerDot";
import { GlimmerParticles } from "@/components/brand/GlimmerParticles";
import { products } from "@/data/products";

const steps = [
  { id: "select", label: "Select Items" },
  { id: "process", label: "Processing" },
  { id: "burst", label: "Dopamine Burst" },
  { id: "done", label: "Complete" },
];

const simProducts = products.slice(0, 3);

export default function SimOrderPage() {
  const [step, setStep] = useState(0);
  const [selectedItems, setSelectedItems] = useState<string[]>([]);

  const toggleItem = (slug: string) => {
    setSelectedItems((prev) =>
      prev.includes(slug)
        ? prev.filter((s) => s !== slug)
        : [...prev, slug]
    );
  };

  const handleNext = () => {
    if (step < 3) {
      setStep((s) => s + 1);
    }
  };


  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 relative overflow-hidden">
        {/* Progress dots */}
        <div className="max-w-2xl mx-auto px-4 sm:px-6 pt-12">
          <div className="flex items-center justify-center gap-3 mb-12">
            {steps.map((s, i) => (
              <div key={s.id} className="flex items-center gap-3">
                <div
                  className={`flex items-center justify-center size-8 rounded-full border-2 transition-all duration-300 ${
                    i < step
                      ? "bg-heal border-heal"
                      : i === step
                      ? "border-brand bg-brand-muted"
                      : "border-border-default"
                  }`}
                >
                  {i < step ? (
                    <CheckCircle2 className="size-4 text-text-inverse" />
                  ) : (
                    <GlimmerDot size={6} color={i === step ? "var(--brand)" : "var(--text-muted)"} />
                  )}
                </div>
                {i < steps.length - 1 && (
                  <div
                    className={`w-8 h-px transition-colors duration-300 ${
                      i < step ? "bg-heal" : "bg-border-default"
                    }`}
                  />
                )}
              </div>
            ))}
          </div>
        </div>

        <AnimatePresence mode="wait">
          {/* Step 0: Select */}
          {step === 0 && (
            <motion.div
              key="select"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="max-w-2xl mx-auto px-4 sm:px-6 pb-12"
            >
              <h2 className="text-2xl font-display font-bold text-text-primary text-center mb-2">
                Build Your Fantasy Cart
              </h2>
              <p className="text-text-secondary text-center mb-8">
                Select items for your virtual shopping spree — no payment required
              </p>

              <div className="flex flex-col gap-3">
                {simProducts.map((p) => (
                  <button
                    key={p.slug}
                    onClick={() => toggleItem(p.slug)}
                    className={`flex items-center gap-4 p-4 rounded-xl border transition-all duration-200 text-left ${
                      selectedItems.includes(p.slug)
                        ? "border-brand bg-brand-muted"
                        : "border-border-default bg-bg-surface hover:border-border-default/60"
                    }`}
                  >
                    <div className="size-16 rounded-lg overflow-hidden bg-bg-elevated shrink-0">
                      <img
                        src={p.images[0]}
                        alt={p.name}
                        className="size-full object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <span className="text-xs text-text-muted">{p.brand}</span>
                      <p className="text-sm text-text-primary truncate">{p.name}</p>
                      <span className="text-sm font-bold text-brand">{p.price}</span>
                    </div>
                    <div
                      className={`size-6 rounded-full border-2 flex items-center justify-center transition-colors ${
                        selectedItems.includes(p.slug)
                          ? "border-brand bg-brand"
                          : "border-border-default"
                      }`}
                    >
                      {selectedItems.includes(p.slug) && (
                        <CheckCircle2 className="size-4 text-white" />
                      )}
                    </div>
                  </button>
                ))}
              </div>

              <div className="mt-8 flex justify-center">
                <BrandButton
                  variant="coral"
                  size="lg"
                  disabled={selectedItems.length === 0}
                  onClick={handleNext}
                  showGlimmer
                >
                  Start Sim Order
                  <ArrowRight className="size-4" />
                </BrandButton>
              </div>
            </motion.div>
          )}

          {/* Step 1: Processing */}
          {step === 1 && (
            <motion.div
              key="process"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="flex flex-col items-center justify-center px-4 py-20"
            >
              <div className="relative mb-8">
                <div className="size-24 rounded-full border-2 border-brand/30 flex items-center justify-center">
                  <GlimmerDot size={12} color="var(--brand)" mode="breathe" />
                </div>
                <motion.div
                  className="absolute inset-0 rounded-full border-2 border-brand animate-pulse-dot"
                  style={{ transform: "scale(1.5)", opacity: 0 }}
                />
              </div>
              <h2 className="text-2xl font-display font-bold text-text-primary mb-2">
                Processing Your Order
              </h2>
              <p className="text-text-secondary text-center max-w-sm">
                Our AI is curating the perfect packaging experience...
              </p>
              {/* Auto-advance */}
              <div className="mt-8">
                <BrandButton variant="coral" size="lg" onClick={handleNext}>
                  Continue
                </BrandButton>
              </div>
            </motion.div>
          )}

          {/* Step 2: Dopamine Burst */}
          {step === 2 && (
            <motion.div
              key="burst"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, y: -20 }}
              className="relative flex flex-col items-center justify-center px-4 py-20 overflow-hidden"
            >
              <GlimmerParticles count={40} className="absolute inset-0" />

              <div className="relative z-10 flex flex-col items-center">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
                  className="mb-6"
                >
                  <div className="size-20 rounded-full bg-joy-muted flex items-center justify-center">
                    <Zap className="size-10 text-joy" />
                  </div>
                </motion.div>

                <h2 className="text-3xl font-display font-bold text-text-primary mb-2 text-center">
                  Dopamine Burst!
                </h2>
                <p className="text-text-secondary text-center max-w-sm mb-2">
                  You just experienced the thrill of luxury shopping — without spending a cent.
                </p>
                <div className="flex items-center gap-2 text-joy font-display font-bold text-xl">
                  <Sparkles className="size-5" />
                  +150 Points Earned
                  <Sparkles className="size-5" />
                </div>

                <div className="flex gap-3 mt-8">
                  <BrandButton variant="coral" size="lg" onClick={handleNext}>
                    View Result
                  </BrandButton>
                  <BrandButton variant="dopamine" size="lg">
                    <Share2 className="size-4" />
                    Share
                  </BrandButton>
                </div>
              </div>
            </motion.div>
          )}

          {/* Step 3: Done */}
          {step === 3 && (
            <motion.div
              key="done"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-lg mx-auto px-4 sm:px-6 pb-12"
            >
              <div className="flex flex-col items-center text-center">
                <div className="size-16 rounded-full bg-heal-muted flex items-center justify-center mb-6">
                  <CheckCircle2 className="size-8 text-heal" />
                </div>
                <h2 className="text-2xl font-display font-bold text-text-primary mb-2">
                  Sim Order Complete
                </h2>
                <p className="text-text-secondary mb-8">
                  Your fantasy cart has been recorded. Share the joy with friends!
                </p>

                {/* Cart summary */}
                <div className="w-full p-6 rounded-2xl bg-bg-surface border border-border-default mb-8">
                  <h3 className="text-sm font-medium text-text-secondary uppercase tracking-wider mb-4 text-left">
                    Your Fantasy Cart
                  </h3>
                  {selectedItems.map((slug) => {
                    const product = products.find((p) => p.slug === slug);
                    if (!product) return null;
                    return (
                      <div
                        key={slug}
                        className="flex items-center gap-3 py-3 border-b border-border-default last:border-0"
                      >
                        <div className="size-12 rounded-lg overflow-hidden bg-bg-elevated">
                          <img
                            src={product.images[0]}
                            alt={product.name}
                            className="size-full object-cover"
                          />
                        </div>
                        <div className="flex-1 text-left">
                          <span className="text-xs text-text-muted">{product.brand}</span>
                          <p className="text-sm text-text-primary">{product.name}</p>
                        </div>
                        <span className="text-sm font-bold text-text-primary">
                          {product.price}
                        </span>
                      </div>
                    );
                  })}
                </div>

                <div className="flex gap-3 w-full">
                  <Link href="/share/sim-order/demo-001" className="flex-1">
                    <BrandButton variant="coral" size="lg" className="w-full">
                      Share Card
                    </BrandButton>
                  </Link>
                  <Link href="/" className="flex-1">
                    <BrandButton variant="ghost" size="lg" className="w-full">
                      Back to Home
                    </BrandButton>
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      <Footer />
    </div>
  );
}
