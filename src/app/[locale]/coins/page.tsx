"use client";

import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";
import { Coins, Package, Zap, Gift, ArrowLeft, Sparkles } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { BrandButton } from "@/components/brand/BrandButton";
import { GlimmerDot } from "@/components/brand/GlimmerDot";

const packages = [
  { id: "small", coins: 60, priceKey: "coins.packages.smallPrice", color: "#A1A1A6", bonus: null },
  { id: "medium", coins: 300, priceKey: "coins.packages.mediumPrice", color: "var(--brand)", bonus: "+8%", popular: true },
  { id: "large", coins: 980, priceKey: "coins.packages.largePrice", color: "var(--joy)", bonus: "+15%" },
  { id: "mega", coins: 1980, priceKey: "coins.packages.megaPrice", color: "var(--heal)", bonus: "+25%" },
];

export default function CoinsPage() {
  const t = useTranslations();
  const locale = useLocale();

  return (
    <div className="min-h-screen flex flex-col page-enter">
      <Header />
      <main className="flex-1">
        <section className="relative px-4 py-14 sm:py-20 text-center" style={{ background: "linear-gradient(180deg, rgba(255,214,10,0.05) 0%, transparent 100%)" }}>
          <div className="max-w-xl mx-auto">
            <div className="inline-flex items-center justify-center size-20 rounded-2xl mb-5" style={{ backgroundColor: "rgba(255,214,10,0.1)" }}>
              <Coins className="size-10" style={{ color: "var(--joy)" }} />
            </div>
            <h1 className="text-4xl sm:text-5xl font-display font-black text-text-primary mb-3">{t("coins.title")}</h1>
            <p className="text-text-secondary text-lg">{t("coins.subtitle")}</p>
            <div className="mt-6 inline-flex items-center gap-3 px-6 py-3 rounded-full bg-bg-surface border border-border-default">
              <Coins className="size-5 text-joy" />
              <span className="text-text-secondary text-sm">{t("coins.balance")}:</span>
              <span className="text-joy font-display font-bold text-xl">1,280</span>
              <Sparkles className="size-4 text-joy" />
            </div>
          </div>
        </section>

        <section className="px-4 sm:px-6 pb-8 max-w-4xl mx-auto -mt-8 stagger">
          {packages.map((pkg) => (
            <div key={pkg.id}
              className={`relative rounded-2xl border p-6 flex flex-col items-center text-center transition-all duration-300 card-magnetic ${
                pkg.popular ? "border-brand bg-brand-muted" : "border-border-default bg-bg-surface"}`}>
              {pkg.popular && <span className="absolute -top-3 px-3 py-0.5 rounded-full text-xs font-bold text-white bg-brand">{t("coins.popular")}</span>}
              <div className="size-14 rounded-xl flex items-center justify-center mb-3" style={{ backgroundColor: "rgba(255,214,10,0.1)" }}>
                <GlimmerDot size={10} color="var(--joy)" mode="breathe" />
              </div>
              <div className="text-3xl font-display font-black mb-1" style={{ color: pkg.color }}>{pkg.coins}</div>
              <p className="text-xs text-text-muted mb-3">{t("coins.unit")}</p>
              <span className="text-sm font-medium text-text-primary">{t(pkg.priceKey)}</span>
              {pkg.bonus && <span className="text-xs mt-1" style={{ color: "var(--heal)" }}>{pkg.bonus} {t("coins.bonus")}</span>}
              <BrandButton variant="dopamine" size="sm" className="w-full mt-4">{t("coins.buy")}</BrandButton>
            </div>
          ))}
        </section>

        <section className="px-4 sm:px-6 pb-20 max-w-3xl mx-auto">
          <h2 className="text-xl font-display font-bold text-text-primary text-center mb-6">{t("coins.useTitle")}</h2>
          <div className="flex flex-col sm:flex-row gap-3">
            {[
              { icon: Package, key: "coins.useSim", color: "var(--brand)" },
              { icon: Zap, key: "coins.useSkin", color: "var(--joy)" },
              { icon: Gift, key: "coins.useGift", color: "var(--heal)" },
            ].map((item) => (
              <div key={item.key} className="flex-1 flex flex-col items-center gap-2 p-5 rounded-xl bg-bg-surface border border-border-subtle text-center card-magnetic">
                <div className="size-10 rounded-xl flex items-center justify-center" style={{ backgroundColor: item.color + "15" }}>
                  <item.icon className="size-5" style={{ color: item.color }} />
                </div>
                <p className="text-sm text-text-secondary">{t(item.key)}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
