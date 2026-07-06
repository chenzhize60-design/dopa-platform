"use client";

import { useState, useRef, useCallback } from "react";
import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";
import { Sparkles, CheckCircle2, Share2, ArrowRight, Zap, Download, ShoppingBag } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { BrandButton } from "@/components/brand/BrandButton";
import { products } from "@/data/products";

const simProducts = products.slice(0, 6);

export default function SimOrderPage() {
  const t = useTranslations();
  const locale = useLocale();
  const [step, setStep] = useState(0);
  const [selected, setSelected] = useState<string[]>([]);
  const shareRef = useRef<HTMLDivElement>(null);

  const toggle = (slug: string) => setSelected((p) => p.includes(slug) ? p.filter((s) => s !== slug) : [...p, slug]);
  const selectedItems = simProducts.filter((p) => selected.includes(p.slug));
  const total = selectedItems.reduce((sum, p) => sum + parseInt(p.price.replace(/[^0-9]/g, "")), 0).toLocaleString();
  const dopamine = Math.floor(parseInt(total) * 10);

  const handleSave = useCallback(async () => {
    if (!shareRef.current) return;
    const html2canvas = (await import("html2canvas")).default;
    const canvas = await html2canvas(shareRef.current, { backgroundColor: "#0C0C12", scale: 2 });
    const link = document.createElement("a");
    link.download = `dopa-receipt-${Date.now()}.png`;
    link.href = canvas.toDataURL("image/png");
    link.click();
  }, []);

  return (
    <main className="overflow-x-hidden w-full max-w-full min-h-screen">
      <Header />

      {/* Progress dots */}
      <div className="max-w-md mx-auto px-6 pt-16 pb-6">
        <div className="flex items-center justify-center gap-2">
          {[t("simOrder.title"), t("simOrder.processing.preparing"), "Dopamine!", t("simOrder.result.share")].map((label, i) => (
            <div key={i} className="flex items-center gap-2">
              <div className="flex items-center justify-center size-8 rounded-full border transition-all duration-500"
                style={i < step ? { borderColor: "var(--cool)", background: "var(--cool)" } : i === step ? { borderColor: "var(--accent)" } : { borderColor: "rgba(255,255,255,0.06)" }}>
                {i < step ? <CheckCircle2 className="size-4 text-white" /> :
                 i === step ? <span className="size-2 rounded-full" style={{ background: "var(--accent)", animation: "pulse-subtle 4s ease-in-out infinite" }} /> :
                 <span className="text-xs" style={{ color: "#565260" }}>{i + 1}</span>}
              </div>
              {i < 3 && <div className="w-6 h-px" style={{ backgroundColor: i < step ? "var(--cool)" : "rgba(255,255,255,0.06)" }} />}
            </div>
          ))}
        </div>
      </div>

      {/* Step 0: Select products */}
      {step === 0 && (
        <div className="max-w-xl mx-auto px-6 pb-12">
          <h2 className="h2-cinema text-center mb-2 text-[#F2F0F5]">{t("simOrder.title")}</h2>
          <p className="text-center mb-10" style={{ color: "#9490A0" }}>{t("simOrder.subtitle")}</p>
          <div className="flex flex-col gap-3">
            {simProducts.map((p) => (
              <button key={p.slug} onClick={() => toggle(p.slug)}
                className={`flex items-center gap-4 p-5 rounded-2xl text-left transition-all duration-300 ${
                  selected.includes(p.slug) ? "border" : "border"
                }`}
                style={selected.includes(p.slug) ? { borderColor: "var(--accent)", background: "rgba(255,90,110,0.08)" } : { borderColor: "rgba(255,255,255,0.04)", background: "#0C0C12" }}>
                <div className="size-16 rounded-xl overflow-hidden shrink-0">
                  <img src={p.images[0]} alt={p.name} className="size-full object-cover" />
                </div>
                <div className="flex-1 min-w-0">
                  <span className="text-xs uppercase tracking-wider" style={{ color: "#565260" }}>{p.brand}</span>
                  <p className="text-sm font-medium text-[#F2F0F5] truncate">{p.name}</p>
                  <span className="text-sm font-bold" style={{ color: "var(--accent)" }}>{p.price}</span>
                </div>
                <div className="size-6 rounded-full border-2 flex items-center justify-center transition-all shrink-0"
                  style={selected.includes(p.slug) ? { borderColor: "var(--accent)", background: "var(--accent)" } : { borderColor: "rgba(255,255,255,0.1)" }}>
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
        <div className="flex flex-col items-center justify-center py-24">
          <div className="relative mb-8">
            <div className="size-24 rounded-full border-2 flex items-center justify-center animate-pulse" style={{ borderColor: "rgba(255,90,110,0.15)" }}>
              <Sparkles className="size-10 opacity-60" style={{ color: "var(--accent)" }} />
            </div>
          </div>
          <h2 className="text-2xl font-bold text-[#F2F0F5] mb-2">{t("simOrder.processing.preparing")}</h2>
          <div className="flex gap-6 mt-6">
            {/* Auto-advance after brief pause */}
            <button onClick={() => setStep(2)} className="text-sm underline hover:opacity-80" style={{ color: "var(--accent)" }}>
              {t("common.continue") || "Continue"} →
            </button>
          </div>
        </div>
      )}

      {/* Step 2: Dopamine Burst */}
      {step === 2 && (
        <div className="relative flex flex-col items-center justify-center py-16 px-6 overflow-hidden">
          <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(circle at 50% 50%, rgba(255,90,110,0.06) 0%, transparent 70%)" }} />
          <div className="relative z-10 mb-8" style={{ animation: "scale-in-burst 0.6s cubic-bezier(0.34,1.56,0.64,1) both" }}>
            <div className="size-24 rounded-full flex items-center justify-center" style={{ background: "rgba(255,90,110,0.1)" }}>
              <Zap className="size-12" style={{ color: "var(--accent)" }} />
            </div>
          </div>
          <div className="text-center relative z-10" style={{ animation: "fade-up 0.7s cubic-bezier(0.22,1,0.36,1) both", animationDelay: "0.3s" }}>
            <p style={{ color: "#9490A0" }} className="text-sm mb-2">{t("simOrder.result.boughtTitle")}</p>
            <h2 className="h2-cinema mb-4" style={{ color: "var(--accent)" }}>Y{total}</h2>
            <p style={{ color: "#9490A0" }} className="text-sm mb-1">
              {t("simOrder.result.saved")} <span className="font-bold" style={{ color: "var(--accent)" }}>Y{total}</span>
            </p>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mt-4 text-sm font-bold"
              style={{ background: "rgba(0,201,182,0.1)", color: "var(--cool)" }}>
              <Sparkles className="size-4" />{t("simOrder.result.dopamine")} +{dopamine}
            </div>

            {/* Share Card Preview */}
            <div ref={shareRef} className="card-cinema p-8 text-center mt-8 max-w-sm mx-auto" style={{ background: "#0C0C12" }}>
              <p className="text-xs uppercase tracking-[0.2em] mb-4" style={{ color: "#565260" }}>{t("share.title")}</p>
              <p className="text-5xl font-black mb-6" style={{ color: "var(--accent)" }}>Y{total}</p>
              <div className="border-y py-4 mb-6 space-y-2 text-left" style={{ borderColor: "rgba(255,255,255,0.06)" }}>
                {selectedItems.map((p) => (
                  <div key={p.slug} className="flex items-center gap-3">
                    <div className="size-10 rounded-lg overflow-hidden bg-black/20 shrink-0">
                      <img src={p.images[0]} alt={p.name} className="size-full object-cover" />
                    </div>
                    <span className="text-xs truncate flex-1" style={{ color: "#9490A0" }}>{p.brand} {p.name}</span>
                    <span className="text-xs font-bold shrink-0" style={{ color: "#F2F0F5" }}>{p.price}</span>
                  </div>
                ))}
              </div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold"
                style={{ background: "rgba(0,201,182,0.1)", color: "var(--cool)" }}>
                <Zap className="size-4" />{t("simOrder.result.dopamine")} +{dopamine}
              </div>
              <p className="text-[10px] mt-4" style={{ color: "#565260" }}>DOPA</p>
            </div>

            <div className="flex flex-wrap gap-3 mt-6 justify-center">
              <BrandButton variant="coral" size="lg" onClick={handleSave} showGlimmer>
                <Download className="size-4" />保存战绩
              </BrandButton>
              <BrandButton variant="dopamine" size="lg" onClick={() => { if (navigator.share) navigator.share({ title: "我的多巴胺战绩", text: `我假装花了Y${total}！`, url: window.location.origin }); }}>
                <Share2 className="size-4" />{t("simOrder.result.share")}
              </BrandButton>
            </div>
          </div>
        </div>
      )}

      {/* VIP upsell after burst */}
      <div className="max-w-lg mx-auto px-6 pb-8" style={{ animation: step === 2 ? "fade-up 0.7s ease both 0.5s" : "none" }}>
        <Link href={`/${locale}/vip`}
          className="card-cinema p-5 flex items-center gap-4 cursor-pointer"
          style={{ borderColor: "rgba(232,195,0,0.15)", background: "rgba(232,195,0,0.03)" }}>
          <Sparkles className="size-8" style={{ color: "var(--warm)" }} />
          <div className="flex-1">
            <p className="text-sm font-bold" style={{ color: "var(--warm)" }}>{t("profile.unlockVip")}</p>
            <p className="text-xs mt-0.5" style={{ color: "#9490A0" }}>{t("profile.unlockVipDesc")}</p>
          </div>
          <ArrowRight className="size-5" style={{ color: "#565260" }} />
        </Link>
      </div>

      {/* Continue shopping */}
      <div className="flex justify-center gap-4 pb-24">
        <Link href={`/${locale}/share`}>
          <BrandButton variant="dopamine" size="lg"><Share2 className="size-4" />分享卡</BrandButton>
        </Link>
        <Link href={`/${locale}`}>
          <BrandButton variant="coral" size="lg" showGlimmer><ShoppingBag className="size-4" />{t("simOrder.result.continue")}</BrandButton>
        </Link>
      </div>

      <style jsx global>{`
        @keyframes scale-in-burst { from { transform: scale(0); opacity: 0; } to { transform: scale(1); opacity: 1; } }
      `}</style>
    </main>
  );
}
