"use client";

import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";
import { Coins, Package, Zap, Gift, ArrowLeft } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { BrandButton } from "@/components/brand/BrandButton";
import { GlimmerDot } from "@/components/brand/GlimmerDot";

const packages = [
  { id: "small", coins: 60, priceKey: "coins.packages.smallPrice", color: "#A1A1A6" },
  { id: "medium", coins: 300, priceKey: "coins.packages.mediumPrice", color: "var(--brand)", popular: true },
  { id: "large", coins: 980, priceKey: "coins.packages.largePrice", color: "var(--joy)" },
  { id: "mega", coins: 1980, priceKey: "coins.packages.megaPrice", color: "var(--heal)" },
];

export default function CoinsPage() {
  const t = useTranslations();
  const locale = useLocale();

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero */}
        <section className="relative px-4 py-12 sm:py-16 text-center" style={{ background: "linear-gradient(135deg, rgba(255,214,10,0.06) 0%, rgba(0,212,200,0.04) 100%)" }}>
          <div className="max-w-xl mx-auto">
            <div className="flex justify-center mb-4">
              <div className="size-16 rounded-2xl flex items-center justify-center" style={{ backgroundColor: "rgba(255,214,10,0.12)" }}>
                <Coins className="size-8" style={{ color: "var(--joy)" }} />
              </div>
            </div>
            <h1 className="text-3xl sm:text-4xl font-display font-bold text-text-primary mb-3">
              {t("coins.title")}
            </h1>
            <p className="text-text-secondary text-lg">
              {t("coins.subtitle")}
            </p>

            {/* Balance */}
            <div className="mt-6 inline-flex items-center gap-3 px-6 py-3 rounded-full bg-bg-surface border border-border-default">
              <Coins className="size-5 text-joy" />
              <span className="text-text-secondary text-sm">{t("coins.balance")}: </span>
              <span className="text-joy font-display font-bold text-lg">1,280</span>
            </div>
          </div>
        </section>

        {/* Packages */}
        <section className="px-4 sm:px-6 pb-12 max-w-4xl mx-auto -mt-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {packages.map((pkg) => (
              <div
                key={pkg.id}
                className={`relative rounded-2xl border p-5 flex flex-col items-center text-center transition-all duration-200 hover:-translate-y-1 ${
                  pkg.popular
                    ? "border-brand bg-brand-muted"
                    : "border-border-default bg-bg-surface"
                }`}
              >
                {pkg.popular && (
                  <span className="absolute -top-3 px-3 py-0.5 rounded-full text-xs font-bold text-white bg-brand">
                    {t("coins.popular")}
                  </span>
                )}
                <div className="size-12 rounded-xl flex items-center justify-center mb-3" style={{ backgroundColor: "rgba(255,214,10,0.1)" }}>
                  <GlimmerDot size={10} color="var(--joy)" />
                </div>
                <div className="text-2xl font-display font-black mb-1" style={{ color: pkg.color }}>
                  {pkg.coins}
                </div>
                <p className="text-xs text-text-muted mb-3">{t("coins.unit")}</p>
                <span className="text-sm font-medium text-text-primary">{t(pkg.priceKey)}</span>
                {pkg.coins > 300 && (
                  <span className="text-xs mt-1" style={{ color: "var(--heal)" }}>
                    {pkg.coins >= 1980 ? "+25%" : pkg.coins >= 980 ? "+15%" : "+8%"} {t("coins.bonus")}
                  </span>
                )}
                <BrandButton variant="dopamine" size="sm" className="w-full mt-3">
                  {t("coins.buy")}
                </BrandButton>
              </div>
            ))}
          </div>
        </section>

        {/* Use cases */}
        <section className="px-4 sm:px-6 pb-24 max-w-3xl mx-auto">
          <h2 className="text-xl font-display font-bold text-text-primary text-center mb-6">
            {t("coins.useTitle")}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {[
              { icon: Package, key: "coins.useSim" },
              { icon: Zap, key: "coins.useSkin" },
              { icon: Gift, key: "coins.useGift" },
            ].map((item) => (
              <div key={item.key} className="flex flex-col items-center gap-2 p-5 rounded-xl bg-bg-surface border border-border-subtle text-center">
                <div className="size-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: "rgba(0,212,200,0.1)" }}>
                  <item.icon className="size-5" style={{ color: "var(--heal)" }} />
                </div>
                <p className="text-sm text-text-secondary">{t(item.key)}</p>
              </div>
            ))}
          </div>
          <Link href={`/${locale}`} className="inline-flex items-center gap-1.5 text-sm text-text-secondary hover:text-brand transition-colors duration-150 mt-8">
            <ArrowLeft className="size-3.5" />
            {t("browse.back")}
          </Link>
        </section>
      </main>
      <Footer />
    </div>
  );
}
