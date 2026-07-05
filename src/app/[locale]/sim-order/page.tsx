"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";
import { Sparkles, CheckCircle2, Share2, ArrowRight, Zap } from "lucide-react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Header } from "@/components/layout/Header";
import { BrandButton } from "@/components/brand/BrandButton";
import { GlimmerDot } from "@/components/brand/GlimmerDot";
import { products } from "@/data/products";

const simProducts = products.slice(0, 4);

export default function SimOrderPage() {
  const t = useTranslations();
  const locale = useLocale();
  const [step, setStep] = useState(0);
  const [selected, setSelected] = useState<string[]>([]);
  const burstRef = useRef<HTMLDivElement>(null);

  const toggle = (slug: string) => setSelected((p) => p.includes(slug) ? p.filter((s) => s !== slug) : [...p, slug]);
  const selectedItems = simProducts.filter((p) => selected.includes(p.slug));
  const total = selectedItems.reduce((sum, p) => sum + parseInt(p.price.replace(/[^0-9]/g, "")), 0).toLocaleString();

  // GSAP burst animation when step changes to 2
  useGSAP(() => {
    if (step === 2) {
      gsap.fromTo(".burst-item", { scale: 0, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.6, stagger: 0.1, ease: "back.out(1.7)" });
      gsap.fromTo(".burst-text", { y: 40, opacity: 0 }, { y: 0, opacity: 1, duration: 0.7, delay: 0.4, ease: "power3.out" });
      gsap.fromTo(".burst-particles", { scale: 0.5, opacity: 0 }, { scale: 1, opacity: 0.3, duration: 1.5, delay: 0.2, ease: "power3.out" });
    }
  }, { scope: burstRef, dependencies: [step] });

  return (
    <main className="overflow-x-hidden w-full max-w-full min-h-screen">
      <Header />

      {/* Progress */}
      <div className="max-w-md mx-auto px-6 pt-16 pb-8">
        <div className="flex items-center justify-center gap-2">
          {["select", "process", "burst", "done"].map((s, i) => (
            <div key={s} className="flex items-center gap-2">
              <div className={`flex items-center justify-center size-8 rounded-full border-2 transition-all duration-500 ${
                i < step ? "border-[var(--cool)] bg-[var(--cool)]" : i === step ? "border-[var(--accent)]" : ""
              }`} style={i === step ? { borderColor: "var(--accent)" } : i < step ? { borderColor: "var(--cool)", backgroundColor: "var(--cool)" } : { borderColor: "rgba(255,255,255,0.06)" }}>
                {i < step ? <CheckCircle2 className="size-4 text-white" /> : i === step ? <GlimmerDot size={6} color="var(--accent)" mode="breathe" /> : <span className="text-xs" style={{ color: "var(--t-low)" }}>{i + 1}</span>}
              </div>
              {i < 3 && <div className={`w-8 h-px transition-all duration-500 ${i < step ? "" : ""}`} style={{ backgroundColor: i < step ? "var(--cool)" : "rgba(255,255,255,0.06)" }} />}
            </div>
          ))}
        </div>
      </div>

      {/* Step 0: Select */}
      {step === 0 && (
        <div className="max-w-xl mx-auto px-6 pb-12">
          <h2 className="h2-cinema text-[var(--t-high)] text-center mb-2">{t("simOrder.title")}</h2>
          <p className="text-center mb-10" style={{ color: "var(--t-mid)" }}>{t("simOrder.subtitle")}</p>
          <div className="flex flex-col gap-3">
            {simProducts.map((p) => (
              <button key={p.slug} onClick={() => toggle(p.slug)}
                className={`flex items-center gap-4 p-5 rounded-2xl text-left transition-all duration-300 ${
                  selected.includes(p.slug) ? "bg-[var(--accent)]/10 border" : "bg-[var(--void)] border"
                }`}
                style={selected.includes(p.slug) ? { borderColor: "var(--accent)" } : { borderColor: "rgba(255,255,255,0.04)" }}>
                <div className="size-16 rounded-xl overflow-hidden shrink-0">
                  <img src={p.images[0]} alt={p.name} className="size-full object-cover" />
                </div>
                <div className="flex-1 min-w-0">
                  <span className="text-xs uppercase tracking-wider" style={{ color: "var(--t-low)" }}>{p.brand}</span>
                  <p className="text-sm font-medium text-[var(--t-high)] truncate">{p.name}</p>
                  <span className="text-sm font-bold" style={{ color: "var(--accent)" }}>{p.price}</span>
                </div>
                <div className={`size-6 rounded-full border-2 flex items-center justify-center transition-all ${selected.includes(p.slug) ? "border-[var(--accent)] bg-[var(--accent)]" : ""}`}
                  style={!selected.includes(p.slug) ? { borderColor: "rgba(255,255,255,0.1)" } : {}}>
                  {selected.includes(p.slug) && <CheckCircle2 className="size-3.5 text-white" />}
                </div>
              </button>
            ))}
          </div>
          <div className="mt-10 flex justify-center">
            <BrandButton variant="coral" size="lg" disabled={selected.length === 0} onClick={() => setStep(1)} showGlimmer>
              {t("simOrder.submitButton")} <ArrowRight className="size-4" />
            </BrandButton>
          </div>
        </div>
      )}

      {/* Step 1: Processing */}
      {step === 1 && (
        <div className="flex flex-col items-center justify-center py-32">
          <div className="relative mb-8">
            <div className="size-28 rounded-full border-2 flex items-center justify-center" style={{ borderColor: "rgba(255,90,110,0.15)" }}>
              <GlimmerDot size={14} color="var(--accent)" mode="breathe" />
            </div>
          </div>
          <h2 className="text-2xl font-bold text-[var(--t-high)] mb-2">{t("simOrder.processing.preparing")}</h2>
          <p className="text-sm mt-2" style={{ color: "var(--t-mid)" }}>
            <button onClick={() => setStep(2)} className="text-sm underline hover:opacity-80" style={{ color: "var(--accent)" }}>{t("common.continue") || "Continue"}</button>
          </p>
        </div>
      )}

      {/* Step 2: Dopamine Burst — GSAP animated */}
      {step === 2 && (
        <div ref={burstRef} className="relative flex flex-col items-center justify-center py-20 px-6 overflow-hidden">
          <div className="burst-particles absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(circle at 50% 50%, rgba(255,90,110,0.08) 0%, transparent 70%)" }} />
          <div className="burst-item relative z-10 mb-8">
            <div className="size-24 rounded-full flex items-center justify-center" style={{ backgroundColor: "rgba(255,90,110,0.08)" }}>
              <Zap className="size-12" style={{ color: "var(--accent)" }} />
            </div>
          </div>
          <div className="burst-text text-center relative z-10">
            <p style={{ color: "var(--t-mid)" }} className="text-sm mb-2">{t("simOrder.result.boughtTitle")}</p>
            <h2 className="h2-cinema mb-4" style={{ color: "var(--accent)" }}>Y{total}</h2>
            <p style={{ color: "var(--t-mid)" }} className="text-sm mb-1">{t("simOrder.result.saved")} <span className="font-bold" style={{ color: "var(--accent)" }}>Y{total}</span></p>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mt-4 text-sm font-bold" style={{ backgroundColor: "rgba(0,201,182,0.1)", color: "var(--cool)" }}>
              <Sparkles className="size-4" />{t("simOrder.result.dopamine")} +{Math.floor(parseInt(total) * 10)}
            </div>
            <div className="flex gap-3 mt-8 justify-center">
              <BrandButton variant="coral" size="lg" onClick={() => setStep(3)} showGlimmer>{t("simOrder.result.share")}</BrandButton>
              <Link href={`/${locale}/share`}>
                <BrandButton variant="dopamine" size="lg"><Share2 className="size-4" /></BrandButton>
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* Step 3: Share Card Preview */}
      {step === 3 && (
        <div className="max-w-sm mx-auto px-6 pb-12">
          <div className="card-cinema p-8 text-center">
            <p className="text-xs uppercase tracking-[0.2em] mb-4" style={{ color: "var(--t-low)" }}>{t("share.title")}</p>
            <p className="text-5xl font-black mb-6" style={{ color: "var(--accent)" }}>Y{total}</p>
            <div className="border-y py-4 mb-6 space-y-2 text-left" style={{ borderColor: "rgba(255,255,255,0.06)" }}>
              {selectedItems.map((p) => (
                <div key={p.slug} className="flex items-center gap-3">
                  <div className="size-10 rounded-lg overflow-hidden bg-black/20 shrink-0">
                    <img src={p.images[0]} alt={p.name} className="size-full object-cover" />
                  </div>
                  <span className="text-xs text-[var(--t-mid)] truncate flex-1">{p.brand} {p.name}</span>
                  <span className="text-xs font-bold text-[var(--t-high)] shrink-0">{p.price}</span>
                </div>
              ))}
            </div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold" style={{ backgroundColor: "rgba(0,201,182,0.1)", color: "var(--cool)" }}>
              <Zap className="size-4" />{t("simOrder.result.dopamine")} +{Math.floor(parseInt(total) * 10)}
            </div>
            <Link href={`/${locale}`} className="block mt-8 text-sm hover:underline" style={{ color: "var(--accent)" }}>
              {t("simOrder.result.continue")}
            </Link>
          </div>
        </div>
      )}
    </main>
  );
}
