"use client";

import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";
import { Crown, Zap, Infinity, Palette, Sparkles, ArrowLeft, Check } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { BrandButton } from "@/components/brand/BrandButton";
import { GlimmerDot } from "@/components/brand/GlimmerDot";

const plans = [
  {
    id: "monthly",
    priceKey: "vip.monthlyPrice",
    periodKey: "vip.monthly",
    popular: false,
    highlight: "#FF3B5C",
  },
  {
    id: "yearly",
    priceKey: "vip.yearlyPrice",
    periodKey: "vip.yearly",
    popular: true,
    highlight: "#FFD60A",
    saveKey: "vip.savePercent",
  },
];

const benefits = [
  { icon: Infinity, key: "vip.benefitUnlimited" },
  { icon: Zap, key: "vip.benefit2x" },
  { icon: Palette, key: "vip.benefitSkins" },
  { icon: Sparkles, key: "vip.benefitGlimmer" },
  { icon: Crown, key: "vip.benefitBadge" },
];

export default function VipPage() {
  const t = useTranslations();
  const locale = useLocale();

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero */}
        <section className="relative px-4 py-12 sm:py-20 text-center overflow-hidden" style={{ background: "linear-gradient(135deg, rgba(255,59,92,0.08) 0%, rgba(255,214,10,0.05) 100%)" }}>
          <div className="max-w-2xl mx-auto">
            <div className="flex justify-center mb-4">
              <div className="size-16 rounded-2xl flex items-center justify-center" style={{ backgroundColor: "rgba(255,59,92,0.12)" }}>
                <Crown className="size-8" style={{ color: "var(--brand)" }} />
              </div>
            </div>
            <h1 className="text-3xl sm:text-4xl font-display font-bold text-text-primary mb-3">
              {t("vip.title")}
            </h1>
            <p className="text-text-secondary text-lg max-w-md mx-auto">
              {t("vip.subtitle")}
            </p>
          </div>
        </section>

        {/* Plans */}
        <section className="px-4 sm:px-6 pb-12 max-w-3xl mx-auto -mt-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {plans.map((plan) => (
              <div
                key={plan.id}
                className={`relative rounded-2xl border p-6 flex flex-col items-center text-center transition-all duration-200 hover:-translate-y-1 ${
                  plan.popular
                    ? "border-joy bg-joy-muted"
                    : "border-border-default bg-bg-surface"
                }`}
              >
                {plan.popular && (
                  <span className="absolute -top-3 px-3 py-0.5 rounded-full text-xs font-bold text-black bg-joy">
                    {t("vip.popular")}
                  </span>
                )}
                <h3 className="text-lg font-display font-bold text-text-primary mb-1">
                  {t(plan.periodKey)}
                </h3>
                <div className="flex items-baseline gap-1 mb-4">
                  <span className="text-3xl font-display font-black" style={{ color: plan.highlight }}>
                    {t(plan.priceKey)}
                  </span>
                  <span className="text-sm text-text-muted">/{t("vip.perMonth")}</span>
                </div>
                {plan.saveKey && (
                  <span className="text-xs px-2 py-0.5 rounded-full mb-4" style={{ backgroundColor: "rgba(0,212,200,0.12)", color: "var(--heal)" }}>
                    {t(plan.saveKey)}
                  </span>
                )}
                <BrandButton variant="coral" size="lg" className="w-full mt-2">
                  {t("vip.subscribe")}
                </BrandButton>
              </div>
            ))}
          </div>
        </section>

        {/* Benefits */}
        <section className="px-4 sm:px-6 pb-24 max-w-3xl mx-auto">
          <h2 className="text-xl font-display font-bold text-text-primary text-center mb-8">
            {t("vip.benefitsTitle")}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {benefits.map((b) => (
              <div key={b.key} className="flex items-center gap-3 p-4 rounded-xl bg-bg-surface border border-border-subtle">
                <div className="size-10 rounded-lg flex items-center justify-center shrink-0" style={{ backgroundColor: "rgba(0,212,200,0.1)" }}>
                  <b.icon className="size-5" style={{ color: "var(--heal)" }} />
                </div>
                <div className="text-left">
                  <p className="text-sm font-medium text-text-primary">{t(b.key)}</p>
                </div>
                <Check className="size-4 text-heal ml-auto shrink-0" />
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
