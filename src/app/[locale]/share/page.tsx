"use client";

import { useMemo, useRef } from "react";
import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";
import { Zap, Sparkles, Download, Share2, ArrowLeft } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { BrandButton } from "@/components/brand/BrandButton";
import { products } from "@/data/products";

export default function ShareCardPage() {
  const t = useTranslations();
  const locale = useLocale();
  const cardRef = useRef<HTMLDivElement>(null);

  // Pick 3 random products to simulate a purchase
  const items = useMemo(() => {
    const shuffled = [...products].sort(() => Math.random() - 0.5).slice(0, 3);
    return shuffled;
  }, []);
  const total = items.reduce((sum, p) => sum + parseInt(p.price.replace(/[^0-9]/g, "")), 0).toLocaleString();

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 block-0 block-grain block-comfortable">
        <div className="max-w-md mx-auto">
          <Link href={`/${locale}`} className="inline-flex items-center gap-1.5 text-sm text-text-2 hover:text-text-0 transition-colors mb-8">
            <ArrowLeft className="size-3.5" />{t("browse.back")}
          </Link>

          {/* Share Card Preview */}
          <div ref={cardRef}
            className="rounded-3xl overflow-hidden border mb-8"
            style={{ backgroundColor: "var(--block-1)", borderColor: "rgba(255,255,255,0.08)" }}>
            {/* Header */}
            <div className="p-8 text-center">
              <div className="flex justify-center gap-2 mb-5">
                {[...Array(3)].map((_, i) => (
                  <span key={i} className="size-2 rounded-full" style={{ backgroundColor: `var(--accent-${i === 0 ? 'coral' : i === 1 ? 'gold' : 'mint'})` }} />
                ))}
              </div>
              <p className="text-xs text-text-3 uppercase tracking-[0.2em] mb-4">{t("share.title")}</p>
              <p className="text-5xl font-black mb-6" style={{ color: "var(--accent-coral)" }}>
                ¥{total}
              </p>

              {/* Items */}
              <div className="border-y py-4 mb-6 space-y-3" style={{ borderColor: "rgba(255,255,255,0.06)" }}>
                {items.map((p) => (
                  <div key={p.slug} className="flex items-center gap-3">
                    <div className="size-12 rounded-lg overflow-hidden bg-black/20 shrink-0">
                      <img src={p.images[0]} alt={p.name} className="size-full object-cover" />
                    </div>
                    <div className="text-left flex-1 min-w-0">
                      <p className="text-xs text-text-3">{p.brand}</p>
                      <p className="text-sm text-text-0 truncate">{p.name}</p>
                    </div>
                    <span className="text-sm font-bold text-text-0 shrink-0">{p.price}</span>
                  </div>
                ))}
              </div>

              {/* Dopamine score */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold"
                style={{ backgroundColor: "rgba(0,201,182,0.1)", color: "var(--accent-mint)" }}>
                <Zap className="size-4" />{t("simOrder.result.dopamine")} +{Math.floor(parseInt(total) * 10)}
              </div>

              {/* Footer */}
              <p className="text-[10px] text-text-3 mt-6">DOPA — {t("home.badge")}</p>
            </div>
          </div>

          {/* Actions */}
          <div className="flex gap-3">
            <button className="flex-1" onClick={() => {
              // Screenshot logic would go here in production
            }}>
              <BrandButton variant="coral" size="lg" className="w-full" showGlimmer>
                <Download className="size-4" />{t("simOrder.sharePrompt.saveImage")}
              </BrandButton>
            </button>
            <BrandButton variant="dopamine" size="lg">
              <Share2 className="size-4" />{t("simOrder.result.share")}
            </BrandButton>
          </div>
        </div>
      </main>
    </div>
  );
}
