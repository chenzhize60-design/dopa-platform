"use client";

import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";
import { Palette, Sparkles, Clock, ArrowLeft } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { BrandButton } from "@/components/brand/BrandButton";
import { Badge } from "@/components/brand/Badge";

const skins = [
  { id: "jacquemus", nameKey: "skins.jacquemus.name", coinPrice: 699, price: "¥6.99", color: "#FFB347", bgColor: "rgba(255,179,71,0.12)", type: "联名", limited: true },
  { id: "offwhite", nameKey: "skins.offwhite.name", coinPrice: 899, price: "¥8.99", color: "#FFD60A", bgColor: "rgba(255,214,10,0.12)", type: "联名", permanent: true },
  { id: "gentlemonster", nameKey: "skins.gm.name", coinPrice: 1299, price: "¥12.99", color: "#00D4C8", bgColor: "rgba(0,212,200,0.12)", type: "联名", permanent: true },
  { id: "spring", nameKey: "skins.spring.name", coinPrice: 399, price: "¥3.99", color: "#FF3B5C", bgColor: "rgba(255,59,92,0.12)", type: "限定", limited: true },
];

export default function SkinsPage() {
  const t = useTranslations();
  const locale = useLocale();

  return (
    <div className="min-h-screen flex flex-col page-enter">
      <Header />
      <main className="flex-1">
        <section className="relative px-4 py-14 sm:py-20 text-center" style={{ background: "linear-gradient(180deg, rgba(0,212,200,0.05) 0%, rgba(255,59,92,0.03) 100%)" }}>
          <div className="max-w-2xl mx-auto">
            <div className="inline-flex items-center justify-center size-20 rounded-2xl mb-5" style={{ backgroundColor: "rgba(0,212,200,0.1)" }}>
              <Palette className="size-10" style={{ color: "var(--heal)" }} />
            </div>
            <h1 className="text-4xl sm:text-5xl font-display font-black text-text-primary mb-3">{t("skins.title")}</h1>
            <p className="text-text-secondary text-lg max-w-sm mx-auto">{t("skins.subtitle")}</p>
          </div>
        </section>

        <section className="px-4 sm:px-6 pb-20 max-w-5xl mx-auto -mt-8 stagger">
          {skins.map((skin) => (
            <div key={skin.id} className="rounded-2xl border border-border-default bg-bg-surface overflow-hidden transition-all duration-300 card-magnetic">
              <div className="aspect-video flex items-center justify-center relative" style={{ backgroundColor: skin.bgColor }}>
                <div className="flex flex-col items-center gap-2">
                  <Sparkles className="size-12" style={{ color: skin.color }} />
                  <span className="text-sm font-display font-bold" style={{ color: skin.color }}>{t(skin.nameKey)}</span>
                </div>
              </div>
              <div className="p-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    {skin.limited && <span className="flex items-center gap-1 text-xs text-alert"><Clock className="size-3" />{t("skins.limited")}</span>}
                    {skin.permanent && <Badge variant="verified">{t("skins.permanent")}</Badge>}
                  </div>
                  <span className="text-xs text-text-muted">{skin.type}</span>
                </div>
                <div className="flex items-center justify-between">
                  <div><span className="text-sm font-display font-bold text-joy">{skin.coinPrice} {t("coins.unit")}</span><span className="text-xs text-text-muted ml-1">{skin.price}</span></div>
                  <BrandButton variant="dopamine" size="sm">{t("skins.buy")}</BrandButton>
                </div>
              </div>
            </div>
          ))}
        </section>
      </main>
      <Footer />
    </div>
  );
}
