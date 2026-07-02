"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";
import { Sparkles, CheckCircle2, Share2, ArrowRight, Zap, ShoppingBag, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { BrandButton } from "@/components/brand/BrandButton";
import { GlimmerDot } from "@/components/brand/GlimmerDot";
import { GlimmerParticles } from "@/components/brand/GlimmerParticles";
import { products } from "@/data/products";

const simProducts = products.slice(0, 4);

export default function SimOrderPage() {
  const t = useTranslations();
  const locale = useLocale();
  const [step, setStep] = useState(0);
  const [selected, setSelected] = useState<string[]>([]);

  const toggle = (slug: string) =>
    setSelected((p) => (p.includes(slug) ? p.filter((s) => s !== slug) : [...p, slug]));

  const selectedItems = simProducts.filter((p) => selected.includes(p.slug));
  const total = selectedItems
    .reduce((sum, p) => sum + parseFloat(p.price.replace(/[^0-9]/g, "")), 0)
    .toLocaleString();

  // Auto-advance processing step
  useEffect(() => {
    if (step === 1) {
      const t = setTimeout(() => setStep(2), 2200);
      return () => clearTimeout(t);
    }
  }, [step]);

  return (
    <div className="min-h-screen flex flex-col page-enter">
      <Header />
      <main className="flex-1 relative overflow-hidden">
        {/* Progress track */}
        <div className="max-w-2xl mx-auto px-4 sm:px-6 pt-10">
          <div className="flex items-center justify-center gap-2 mb-12">
            {["select", "process", "burst", "done"].map((s, i) => (
              <div key={s} className="flex items-center gap-2">
                <div
                  className={`flex items-center justify-center size-8 rounded-full border-2 transition-all duration-500 ${
                    i < step ? "bg-heal border-heal" : i === step ? "border-brand bg-brand-muted animate-pulse-glow" : "border-border-default"
                  }`}
                >
                  {i < step ? <CheckCircle2 className="size-4 text-bg-primary" /> : i === step ? <GlimmerDot size={6} color="var(--brand)" mode="breathe" /> : <span className="text-xs text-text-muted">{i + 1}</span>}
                </div>
                {i < 3 && <div className={`w-8 h-px transition-all duration-500 ${i < step ? "bg-heal" : "bg-border-default"}`} />}
              </div>
            ))}
          </div>
        </div>

        <AnimatePresence mode="wait">
          {/* Step 0: Select */}
          {step === 0 && (
            <motion.div key="select" initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -16 }} transition={{ duration: 0.4 }} className="max-w-xl mx-auto px-4 sm:px-6 pb-12">
              <h2 className="text-2xl font-display font-bold text-text-primary text-center mb-1">{t("simOrder.title")}</h2>
              <p className="text-text-secondary text-center text-sm mb-8">{t("simOrder.subtitle")}</p>
              <div className="flex flex-col gap-2.5 stagger">
                {simProducts.map((p) => (
                  <button key={p.slug} onClick={() => toggle(p.slug)}
                    className={`flex items-center gap-4 p-4 rounded-xl border transition-all duration-200 text-left card-magnetic ${
                      selected.includes(p.slug) ? "border-brand bg-brand-muted" : "border-border-default bg-bg-surface"}`}>
                    <div className="size-14 rounded-xl overflow-hidden bg-bg-elevated shrink-0 border border-border-subtle">
                      <img src={p.images[0]} alt={p.name} className="size-full object-cover" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <span className="text-[11px] text-text-muted uppercase tracking-wider">{p.brand}</span>
                      <p className="text-sm font-medium text-text-primary truncate">{p.name}</p>
                      <span className="text-sm font-display font-bold" style={{ color: "var(--brand)" }}>{p.price}</span>
                    </div>
                    <div className={`size-6 rounded-full border-2 flex items-center justify-center transition-all duration-200 ${
                      selected.includes(p.slug) ? "border-brand bg-brand scale-110" : "border-border-default"}`}>
                      {selected.includes(p.slug) && <CheckCircle2 className="size-3.5 text-white" />}
                    </div>
                  </button>
                ))}
              </div>
              <div className="mt-8 flex justify-center">
                <BrandButton variant="coral" size="lg" disabled={selected.length === 0} onClick={() => setStep(1)} showGlimmer>
                  {t("simOrder.submitButton")}
                  <ArrowRight className="size-4" />
                </BrandButton>
              </div>
            </motion.div>
          )}

          {/* Step 1: Processing */}
          {step === 1 && (
            <motion.div key="process" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex flex-col items-center justify-center px-4 py-24">
              <div className="relative mb-8">
                <div className="size-28 rounded-full border-2 border-brand/20 flex items-center justify-center">
                  <GlimmerDot size={14} color="var(--brand)" mode="breathe" />
                </div>
                <motion.div className="absolute inset-0 rounded-full border-2 border-brand/40"
                  animate={{ scale: [1, 1.6, 1], opacity: [0.3, 0, 0.3] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }} />
              </div>
              <h2 className="text-2xl font-display font-bold text-text-primary mb-2">{t("simOrder.processing.preparing")}</h2>
              <p className="text-text-secondary text-sm">✨ --- ✨</p>
            </motion.div>
          )}

          {/* Step 2: Dopamine Burst */}
          {step === 2 && (
            <motion.div key="burst" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="relative flex flex-col items-center justify-center px-4 py-20 overflow-hidden">
              <GlimmerParticles count={50} className="absolute inset-0" />
              <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring", stiffness: 180, damping: 12, delay: 0.2 }} className="relative z-10 mb-6">
                <div className="size-24 rounded-full bg-joy-muted flex items-center justify-center glow-ring-joy">
                  <Zap className="size-12 text-joy" />
                </div>
              </motion.div>
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} className="relative z-10 text-center">
                <p className="text-text-secondary text-sm mb-2">{t("simOrder.result.boughtTitle")}</p>
                <h2 className="text-4xl sm:text-5xl font-display font-black text-gradient-joy mb-3">¥{total}</h2>
                <p className="text-text-secondary text-sm mb-1">{t("simOrder.result.stuff")}</p>
                <p className="text-text-secondary text-sm mb-2">{t("simOrder.result.saved")} <span className="text-joy font-bold text-lg">¥{total} 🎉</span></p>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-heal-muted border border-heal/20 mt-2">
                  <Sparkles className="size-4 text-heal" />
                  <span className="text-sm font-display font-bold text-heal">{t("simOrder.result.dopamine")} +{Math.floor(parseInt(total) * 0.1)}</span>
                </div>
                <div className="flex gap-3 mt-8 justify-center">
                  <BrandButton variant="coral" size="lg" onClick={() => setStep(3)}>{t("simOrder.result.share")}</BrandButton>
                  <BrandButton variant="dopamine" size="lg"><Share2 className="size-4" /></BrandButton>
                </div>
              </motion.div>
            </motion.div>
          )}

          {/* Step 3: Share card */}
          {step === 3 && (
            <motion.div key="done" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-sm mx-auto px-4 pb-12">
              <div className="rounded-2xl border border-border-default bg-bg-surface overflow-hidden">
                <div className="p-8 text-center bg-bg-primary">
                  <div className="flex justify-center gap-2 mb-6">
                    {[...Array(3)].map((_, i) => (<GlimmerDot key={i} size={6} color="var(--joy)" />))}
                  </div>
                  <p className="text-xs text-text-muted uppercase tracking-[0.2em] mb-4">{t("share.title")}</p>
                  <h3 className="text-4xl font-display font-black text-gradient-joy mb-6">¥{total}</h3>
                  <div className="border-t border-b border-border-subtle py-3 space-y-1.5 mb-6">
                    {selectedItems.map((p) => (
                      <p key={p.slug} className="text-sm text-text-secondary">{p.brand} {p.name}</p>
                    ))}
                  </div>
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-heal-muted text-xs font-bold text-heal">
                    {t("simOrder.result.dopamine")} +{Math.floor(parseInt(total) * 0.1)}
                  </div>
                </div>
              </div>
              <div className="flex gap-3 mt-6">
                <Link href={`/${locale}`} className="flex-1"><BrandButton variant="ghost" size="lg" className="w-full">{t("simOrder.result.continue")}</BrandButton></Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  );
}
