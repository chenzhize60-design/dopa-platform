"use client";

import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";
import { Coins, Sparkles, Zap, Gift, Palette } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { BrandButton } from "@/components/brand/BrandButton";

export default function CoinsPage() {
  const t = useTranslations();
  const locale = useLocale();

  const packages = [
    { coins: 100, price: t("coins.packages.smallPrice"), bonus: 10, color: "var(--accent)" },
    { coins: 500, price: t("coins.packages.mediumPrice"), bonus: 60, color: "var(--cool)", popular: true },
    { coins: 2000, price: t("coins.packages.largePrice"), bonus: 300, color: "var(--warm)" },
    { coins: 5000, price: t("coins.packages.megaPrice"), bonus: 1000, color: "var(--accent)" },
  ];

  return (
    <main className="overflow-x-hidden w-full max-w-full min-h-screen">
      <Header />
      <section className="section-cinema px-6 sm:px-12 lg:px-24 text-center">
        <div className="max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-8" style={{ backgroundColor: "rgba(255,90,110,0.1)", color: "var(--accent)", border: "1px solid rgba(255,90,110,0.15)" }}>
            <Coins className="size-4" />{t("coins.title")}
          </div>
          <h1 className="h2-cinema text-[var(--t-high)] mb-4">{t("coins.subtitle")}</h1>
          <p className="text-lg mb-4" style={{ color: "var(--t-mid)" }}>
            {t("coins.balance")}: <span className="font-black" style={{ color: "var(--warm)" }}>1,280 {t("coins.unit")}</span>
          </p>
        </div>
      </section>

      {/* Coin packs */}
      <section className="px-6 sm:px-12 lg:px-24 pb-12">
        <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {packages.map((pkg, i) => (
            <div key={i} className="card-cinema p-6 text-center relative" style={pkg.popular ? { borderColor: "rgba(232,195,0,0.2)" } : undefined}>
              {pkg.popular && <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full text-[10px] font-bold text-white" style={{ background: "var(--warm)" }}>{t("coins.popular")}</span>}
              <p className="text-3xl font-black mb-2" style={{ color: pkg.color }}>{pkg.coins}</p>
              <p className="text-xs mb-4" style={{ color: "var(--t-mid)" }}>{t("coins.unit")}</p>
              <p className="text-lg font-bold text-[var(--t-high)] mb-1">{pkg.price}</p>
              <p className="text-xs mb-6" style={{ color: "var(--cool)" }}>+{pkg.bonus} {t("coins.bonus")}</p>
              <BrandButton variant="coral" size="sm" className="w-full">{t("coins.buy")}</BrandButton>
            </div>
          ))}
        </div>
      </section>

      {/* What coins can do */}
      <section className="section-cinema px-6 sm:px-12 lg:px-24 grain-overlay">
        <div className="max-w-4xl mx-auto">
          <h2 className="h2-cinema text-[var(--t-high)] text-center mb-12">{t("coins.useTitle")}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[{ icon: Sparkles, text: t("coins.useSim"), color: "var(--accent)" }, { icon: Palette, text: t("coins.useSkin"), color: "var(--cool)" }, { icon: Gift, text: t("coins.useGift"), color: "var(--warm)" }].map((u, i) => (
              <div key={i} className="card-cinema p-6 text-center">
                <u.icon className="size-8 mx-auto mb-4" style={{ color: u.color }} />
                <p className="text-sm text-[var(--t-high)]">{u.text}</p>
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
