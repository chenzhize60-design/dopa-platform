"use client";

import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";
import { Crown, Zap, Sparkles, Check, ArrowRight } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { BrandButton } from "@/components/brand/BrandButton";

export default function VipPage() {
  const t = useTranslations();
  const locale = useLocale();

  return (
    <main className="overflow-x-hidden w-full max-w-full min-h-screen">
      <Header />
      <section className="section-cinema px-6 sm:px-12 lg:px-24 text-center">
        <div className="max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-8" style={{ backgroundColor: "rgba(232,195,0,0.1)", color: "var(--warm)", border: "1px solid rgba(232,195,0,0.15)" }}>
            <Crown className="size-4" />{t("vip.title")}
          </div>
          <h1 className="h2-cinema text-[var(--t-high)] mb-4">{t("vip.subtitle")}</h1>
          <p className="text-lg mb-12" style={{ color: "var(--t-mid)" }}>
            每月{Math.floor(Math.random() * 30)}号，会员日双倍积分
          </p>
        </div>
      </section>

      {/* Plans */}
      <section className="px-6 sm:px-12 lg:px-24 pb-12">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            { name: t("vip.monthly"), price: t("vip.monthlyPrice"), desc: "按月订阅，随时取消", popular: false, accent: "rgba(255,255,255,0.05)" },
            { name: t("vip.yearly"), price: t("vip.yearlyPrice"), desc: `${t("vip.savePercent")}，${(199/12).toFixed(0)}${t("vip.perMonth")}`, popular: true, accent: "rgba(232,195,0,0.08)" },
          ].map((plan, i) => (
            <div key={i} className="card-cinema p-8 relative" style={{ background: plan.popular ? "rgba(232,195,0,0.04)" : undefined, borderColor: plan.popular ? "rgba(232,195,0,0.15)" : undefined }}>
              {plan.popular && <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-0.5 rounded-full text-xs font-bold text-white" style={{ background: "var(--warm)" }}>{t("vip.popular")}</span>}
              <h3 className="text-lg font-bold text-[var(--t-high)]">{plan.name}</h3>
              <p className="text-4xl font-black mt-4 mb-2" style={{ color: "var(--warm)" }}>{plan.price}</p>
              <p className="text-sm mb-8" style={{ color: "var(--t-mid)" }}>{plan.desc}</p>
              <BrandButton variant="dopamine" size="lg" className="w-full" showGlimmer>{t("vip.subscribe")}</BrandButton>
            </div>
          ))}
        </div>
      </section>

      {/* Benefits */}
      <section className="section-cinema px-6 sm:px-12 lg:px-24 grain-overlay">
        <div className="max-w-4xl mx-auto">
          <h2 className="h2-cinema text-[var(--t-high)] text-center mb-12">{t("vip.benefitsTitle")}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {[t("vip.benefitUnlimited"), t("vip.benefit2x"), t("vip.benefitSkins"), t("vip.benefitGlimmer"), t("vip.benefitBadge")].map((b, i) => (
              <div key={i} className="card-cinema p-5 text-center">
                <Check className="size-6 mx-auto mb-3" style={{ color: "var(--warm)" }} />
                <p className="text-sm text-[var(--t-high)]">{b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-24 text-center">
        <Link href={`/${locale}`} className="text-sm hover:underline" style={{ color: "var(--accent)" }}>
          {t("browse.back")}
        </Link>
      </section>
      <Footer />
</main>
  );
}
