"use client";

import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";
import { UtensilsCrossed, Zap, Heart, Crown, Star, Eye, Sparkles } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { GlimmerParticles } from "@/components/brand/GlimmerParticles";
import { BrandButton } from "@/components/brand/BrandButton";
import { GlimmerDot } from "@/components/brand/GlimmerDot";
import { foodItems } from "@/data/channel/food";

export default function FoodChannelPage() {
  const t = useTranslations();
  const locale = useLocale();
  const trending = foodItems.filter((f) => f.viewers && f.viewers > 80).slice(0, 4);
  const indulge = foodItems.filter((f) => f.mood === "indulge").slice(0, 3);
  const heal = foodItems.filter((f) => f.mood === "heal").slice(0, 3);

  return (
    <div className="min-h-screen flex flex-col page-enter">
      <Header />
      <main className="flex-1">
        {/* Hero */}
        <section className="relative flex flex-col items-center justify-center px-4 pt-24 sm:pt-32 pb-12 overflow-hidden">
          <GlimmerParticles count={15} className="absolute inset-0 opacity-20" />
          <div className="relative z-10 flex flex-col items-center text-center max-w-2xl">
            <div className="flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full border border-heal/15 bg-heal-subtle animate-fade-up">
              <span className="size-1.5 rounded-full bg-heal animate-pulse" />
              <span className="text-[10px] tracking-[0.3em] uppercase font-semibold text-heal">{t("channels.food.name")}</span>
            </div>
            <h1 className="animate-fade-up font-display font-black text-5xl sm:text-6xl text-text-0 leading-[0.95] tracking-tight" style={{ animationDelay: "0.1s" }}>
              <span className="block">假装点</span>
              <span className="text-gradient-heal">米其林。</span>
            </h1>
            <p className="animate-fade-up mt-6 text-text-1 max-w-md" style={{ animationDelay: "0.2s" }}>
              米其林三星、深夜拉面、韩牛烤肉。假装下单，视觉盛宴，零卡路里。
            </p>

            {/* Mood pills */}
            <div className="animate-fade-up grid grid-cols-3 gap-3 mt-10 w-full max-w-lg" style={{ animationDelay: "0.35s" }}>
              {[
                { key: "boost", label: "来点力量", icon: Zap, color: "var(--brand)" },
                { key: "heal", label: "需要治愈", icon: Heart, color: "var(--heal)" },
                { key: "indulge", label: "犒赏自己", icon: Crown, color: "var(--joy)" },
              ].map((m) => (
                <Link key={m.key} href={`/${locale}/channel/food/browse/${m.key}`}>
                  <div className="group flex flex-col items-center gap-2 p-4 rounded-2xl border border-transparent hover:border-white/[0.06] bg-bg-secondary/50 hover:bg-bg-tertiary transition-all duration-500 cursor-pointer">
                    <div className="size-12 rounded-xl flex items-center justify-center transition-transform duration-500 group-hover:scale-110" style={{ backgroundColor: `${m.color}10` }}>
                      <m.icon className="size-5" style={{ color: m.color }} />
                    </div>
                    <span className="text-xs font-display font-bold text-text-1 group-hover:text-text-0">{m.label}</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Trending */}
        <section className="px-4 sm:px-8 max-w-7xl mx-auto w-full pb-12">
          <div className="flex items-end justify-between mb-8">
            <div><span className="text-[10px] tracking-[0.25em] uppercase text-text-3 mb-2 block">热门</span><h2 className="text-2xl font-display font-bold text-text-0">🔥 大家都在假装点</h2></div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {trending.map((p, i) => (
              <Link key={p.slug} href="#" className="card-luxury group relative rounded-2xl overflow-hidden bg-bg-secondary border border-border-subtle"
                style={{ animation: "fade-up 0.5s var(--ease-out-expo) both", animationDelay: `${i * 0.06}s` }}>
                <div className="aspect-[4/5] overflow-hidden">
                  <img src={p.image} alt={p.name} className="size-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-bg-secondary via-bg-secondary/90 to-transparent">
                  <span className="text-[10px] text-text-2 uppercase tracking-wider">{p.restaurant}</span>
                  <p className="text-sm font-medium text-text-0 mt-0.5 line-clamp-1">{p.name}</p>
                  <div className="flex items-center justify-between mt-2">
                    <span className="text-sm font-display font-bold text-text-0">{p.price}</span>
                    <span className="text-xs text-text-3"><Star className="size-3 text-joy fill-joy inline" />{p.rating}</span>
                  </div>
                  {p.viewers && p.viewers > 100 && <p className="text-[10px] text-joy mt-1">🔥{p.viewers}人在看</p>}
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Indulge row */}
        <section className="px-4 sm:px-8 max-w-7xl mx-auto w-full pb-12">
          <div className="flex items-end justify-between mb-8">
            <div><span className="text-[10px] tracking-[0.25em] uppercase text-text-3 mb-2 block">犒赏</span><h2 className="text-2xl font-display font-bold text-text-0">👑 米其林级别</h2></div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {indulge.map((p, i) => (
              <Link key={p.slug} href="#" className="card-luxury group relative rounded-2xl overflow-hidden bg-bg-secondary border border-border-subtle"
                style={{ animation: "fade-up 0.5s var(--ease-out-expo) both", animationDelay: `${i * 0.06}s` }}>
                <div className="aspect-video overflow-hidden">
                  <img src={p.image} alt={p.name} className="size-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
                </div>
                <div className="p-4">
                  <span className="text-[10px] text-text-2 uppercase tracking-wider">{p.restaurant}</span>
                  <p className="text-sm font-medium text-text-0 mt-1 line-clamp-1">{p.name}</p>
                  <div className="flex items-center justify-between mt-2">
                    <span className="text-base font-display font-bold text-text-0">{p.price}</span>
                    <span className="text-xs text-text-3"><Star className="size-3 text-joy fill-joy inline" />{p.rating}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Heal comfort row */}
        <section className="px-4 sm:px-8 max-w-7xl mx-auto w-full pb-16">
          <div className="flex items-end justify-between mb-8">
            <div><span className="text-[10px] tracking-[0.25em] uppercase text-text-3 mb-2 block">治愈</span><h2 className="text-2xl font-display font-bold text-text-0">🍵 温暖治愈</h2></div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {heal.map((p, i) => (
              <Link key={p.slug} href="#" className="card-luxury group relative rounded-2xl overflow-hidden bg-bg-secondary border border-border-subtle"
                style={{ animation: "fade-up 0.5s var(--ease-out-expo) both", animationDelay: `${i * 0.06}s` }}>
                <div className="aspect-video overflow-hidden">
                  <img src={p.image} alt={p.name} className="size-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
                </div>
                <div className="p-4">
                  <span className="text-[10px] text-text-2 uppercase tracking-wider">{p.restaurant}</span>
                  <p className="text-sm font-medium text-text-0 mt-1 line-clamp-1">{p.name}</p>
                  <div className="flex items-center justify-between mt-2">
                    <span className="text-base font-display font-bold text-text-0">{p.price}</span>
                    <span className="text-xs text-text-3"><Star className="size-3 text-joy fill-joy inline" />{p.rating}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <div className="flex justify-center pb-20">
          <Link href={`/${locale}/channel/food/browse/indulge`}>
            <BrandButton variant="dopamine" size="lg" showGlimmer><Sparkles className="size-4" />浏览全部美食</BrandButton>
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
