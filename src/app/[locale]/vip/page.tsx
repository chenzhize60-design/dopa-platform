"use client";

import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";
import { Crown, Zap, Infinity, Palette, Sparkles, ArrowLeft, Check } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { BrandButton } from "@/components/brand/BrandButton";

const plans = [
  { id: "monthly", priceKey: "vip.monthlyPrice", periodKey: "vip.monthly", popular: false, highlight: "var(--brand)" },
  { id: "yearly", priceKey: "vip.yearlyPrice", periodKey: "vip.yearly", popular: true, highlight: "var(--joy)", saveKey: "vip.savePercent" },
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
    <div className="min-h-screen flex flex-col page-enter">
      <Header />
      <main className="flex-1">
        {/* Hero */}
        <section className="relative px-4 py-16 sm:py-24 text-center overflow-hidden" style={{ background: "linear-gradient(180deg, rgba(255,59,92,0.06) 0%, transparent 100%)" }}>
          <div className="max-w-2xl mx-auto">
            <div className="inline-flex items-center justify-center size-20 rounded-2xl mb-6 animate-pulse-glow" style={{ backgroundColor: "rgba(255,59,92,0.1)" }}>
              <Crown className="size-10" style={{ color: "var(--brand)" }} />
            </div>
            <h1 className="text-4xl sm:text-5xl font-display font-black text-text-primary mb-3">{t("vip.title")}</h1>
            <p className="text-text-secondary text-lg max-w-sm mx-auto">{t("vip.subtitle")}</p>
          </div>
        </section>

        {/* Plans */}
        <section className="px-4 sm:px-6 pb-8 max-w-3xl mx-auto -mt-10 stagger">
          {plans.map((plan) => (
            <div key={plan.id}
              className={`relative rounded-2xl border p-7 flex flex-col items-center text-center transition-all duration-300 card-magnetic ${
                plan.popular ? "border-joy bg-joy-muted" : "border-border-default bg-bg-surface"}`}>
              {plan.popular && <span className="absolute -top-3 px-3 py-0.5 rounded-full text-xs font-bold text-black bg-joy">{t("vip.popular")}</span>}
              <h3 className="text-lg font-display font-bold text-text-primary mb-1">{t(plan.periodKey)}</h3>
              <div className="flex items-baseline gap-1 mb-4">
                <span className="text-4xl font-display font-black" style={{ color: plan.highlight }}>{t(plan.priceKey)}</span>
                <span className="text-sm text-text-muted">/{t("vip.perMonth")}</span>
              </div>
              {plan.saveKey && <span className="text-xs px-2.5 py-1 rounded-full mb-4" style={{ backgroundColor: "rgba(0,212,200,0.12)", color: "var(--heal)" }}>{t(plan.saveKey)}</span>}
              <BrandButton variant={plan.popular ? "coral" : "ghost"} size="lg" className="w-full" showGlimmer={plan.popular}>{t("vip.subscribe")}</BrandButton>
            </div>
          ))}
        </section>

        {/* Benefits */}
        <section className="px-4 sm:px-6 pb-20 max-w-3xl mx-auto">
          <h2 className="text-xl font-display font-bold text-text-primary text-center mb-8">{t("vip.benefitsTitle")}</h2>
          <div className="flex flex-col gap-2.5 stagger">
            {benefits.map((b) => (
              <div key={b.key} className="flex items-center gap-3 p-4 rounded-xl bg-bg-surface border border-border-subtle card-magnetic">
                <div className="size-10 rounded-xl flex items-center justify-center shrink-0" style={{ backgroundColor: "rgba(0,212,200,0.1)" }}>
                  <b.icon className="size-5" style={{ color: "var(--heal)" }} />
                </div>
                <span className="flex-1 text-sm font-medium text-text-primary">{t(b.key)}</span>
                <Check className="size-4 text-heal shrink-0" />
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
