"use client";

import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";
import { ChevronLeft, Star, UtensilsCrossed, Zap, Heart, Crown } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { GlimmerDot } from "@/components/brand/GlimmerDot";
import { BrandButton } from "@/components/brand/BrandButton";
import { foodItems } from "@/data/channel/food";

export default function FoodChannelPage() {
  const t = useTranslations();
  const locale = useLocale();
  const trending = foodItems.slice(0, 4);
  const indulge = foodItems.filter((f) => f.mood === "indulge").slice(0, 3);
  const heal = foodItems.filter((f) => f.mood === "heal").slice(0, 3);

  return (
    <main className="overflow-x-hidden w-full max-w-full">
      <Header />
      <section className="section-cinema px-6 sm:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <h1 className="h2-cinema text-[var(--t-high)] mb-4">
            <span className="block">{t("channels.food.name")}</span>
          </h1>
          <p className="text-lg mb-12" style={{ color: "var(--t-mid)", maxWidth: "32rem" }}>
            {t("channels.food.description")}
          </p>
          <div className="grid grid-cols-3 gap-4 max-w-lg mb-16">
            {[
              { key: "boost", label: t("moods.boost.label"), icon: Zap, accent: "var(--accent)", href: `/${locale}/channel/food/browse/boost` },
              { key: "heal", label: t("moods.heal.label"), icon: Heart, accent: "var(--cool)", href: `/${locale}/channel/food/browse/heal` },
              { key: "indulge", label: t("moods.indulge.label"), icon: Crown, accent: "var(--warm)", href: `/${locale}/channel/food/browse/indulge` },
            ].map((m) => (
              <Link key={m.key} href={m.href} className="card-cinema p-6 flex flex-col items-center gap-3 text-center group cursor-pointer">
                <div className="size-12 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110" style={{ backgroundColor: `${m.accent}15` }}>
                  <m.icon className="size-5" style={{ color: m.accent }} />
                </div>
                <span className="text-sm font-bold text-[var(--t-high)]">{m.label}</span>
              </Link>
            ))}
          </div>

          <h2 className="h2-cinema text-[var(--t-high)] mb-10">{t("home.trending")}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {trending.map((f) => (
              <Link key={f.slug} href={`/${locale}/channel/food`} className="card-cinema group cursor-pointer">
                <div className="aspect-square overflow-hidden">
                  <img src={f.image} alt={f.name} className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105" loading="lazy" />
                </div>
                <div className="p-4">
                  <span className="text-[11px] uppercase tracking-wider" style={{ color: "var(--t-low)" }}>{f.restaurant}</span>
                  <p className="text-sm font-medium mt-1 text-[var(--t-high)] line-clamp-1">{f.name}</p>
                  <p className="text-sm font-bold mt-1.5" style={{ color: "var(--accent)" }}>{f.price}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 sm:px-12 lg:px-24 pb-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
          {[
            { title: t("moods.indulge.label"), items: indulge },
            { title: t("moods.heal.label"), items: heal },
          ].map((section) => (
            <div key={section.title} className="card-cinema p-8">
              <h3 className="text-xl font-bold text-[var(--t-high)] mb-6">{section.title}</h3>
              <div className="space-y-4">
                {section.items.map((f) => (
                  <Link key={f.slug} href={`/${locale}/channel/food`} className="flex items-center gap-4 p-4 rounded-xl hover:bg-white/[0.02] transition-colors group cursor-pointer">
                    <div className="size-16 rounded-xl overflow-hidden shrink-0">
                      <img src={f.image} alt={f.name} className="size-full object-cover transition-transform duration-500 group-hover:scale-105" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <span className="text-xs" style={{ color: "var(--t-low)" }}>{f.restaurant}</span>
                      <p className="text-sm font-medium text-[var(--t-high)] line-clamp-1">{f.name}</p>
                    </div>
                    <span className="text-sm font-bold shrink-0" style={{ color: "var(--accent)" }}>{f.price}</span>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="flex justify-center pb-24">
        <BrandButton variant="coral" size="lg" showGlimmer>
          <UtensilsCrossed className="size-4" />{t("browse.loadMore")}
        </BrandButton>
      </div>
    </main>
  );
}
