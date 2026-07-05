"use client";

import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";
import { Palette, Sparkles } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { BrandButton } from "@/components/brand/BrandButton";
import { skins } from "@/lib/skins";

export default function SkinsPage() {
  const t = useTranslations();
  const locale = useLocale();
  const free = skins.filter(s => s.tier === "free");
  const vip = skins.filter(s => s.tier === "vip");

  return (
    <main className="overflow-x-hidden w-full max-w-full min-h-screen">
      <Header />
      <section className="section-cinema px-6 sm:px-12 lg:px-24 text-center">
        <div className="max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-8" style={{ backgroundColor: "rgba(168,85,247,0.1)", color: "#A855F7", border: "1px solid rgba(168,85,247,0.15)" }}>
            <Palette className="size-4" />{t("skins.title")}
          </div>
          <h1 className="h2-cinema text-[var(--t-high)] mb-4">{t("skins.subtitle")}</h1>
        </div>
      </section>

      {/* Free */}
      <section className="px-6 sm:px-12 lg:px-24 pb-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl font-bold text-[var(--t-high)] mb-6">{t("skins.permanent")}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {free.map(s => (
              <div key={s.id} className="card-cinema p-6 text-center">
                <div className="w-full aspect-[3/2] rounded-xl mb-4 flex items-center justify-center" style={{
                  background: `linear-gradient(135deg, ${s.colors.primary} 0%, ${s.colors.secondary} 100%)`,
                  color: s.colors.textLight
                }}>
                  <span className="text-xs font-bold tracking-wider">{s.name}</span>
                </div>
                <p className="text-sm font-bold text-[var(--t-high)]">{s.nameEn}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VIP */}
      <section className="px-6 sm:px-12 lg:px-24 pb-12">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl font-bold text-[var(--t-high)] mb-6">{t("skins.limited")} · VIP</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {vip.map(s => (
              <div key={s.id} className="card-cinema p-6 text-center relative overflow-hidden">
                <span className="absolute top-3 right-3 px-2.5 py-0.5 rounded-full text-[10px] font-bold" style={{ background: "var(--accent)", color: "#fff" }}>VIP</span>
                <div className="w-full aspect-[3/2] rounded-xl mb-4 flex items-center justify-center" style={{
                  background: `linear-gradient(135deg, ${s.colors.primary} 0%, ${s.colors.secondary} 100%)`,
                  color: s.colors.textLight
                }}>
                  <span className="text-xs font-bold tracking-wider">{s.name}</span>
                </div>
                <p className="text-sm font-bold text-[var(--t-high)]">{s.nameEn}</p>
                {s.price && <p className="text-xs mt-2 mb-4" style={{ color: "var(--warm)" }}>{s.price} {t("coins.unit")}</p>}
                <BrandButton variant="coral" size="sm" className="w-full">{t("skins.buy")}</BrandButton>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-24 text-center">
        <Link href={`/${locale}`} className="text-sm hover:underline" style={{ color: "var(--accent)" }}>{t("browse.back")}</Link>
      </section>
      <Footer />
</main>
  );
}
