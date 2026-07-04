"use client";

import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";
import { Zap, Heart, Crown, ArrowRight, Gem, UtensilsCrossed, Radio } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { getTrendingProducts, getFeaturedProducts } from "@/data/products";
import { foodItems } from "@/data/channel/food";
import { getHotLive } from "@/data/channel/live";

export default function HomePage() {
  const t = useTranslations();
  const locale = useLocale();
  const trending = getTrendingProducts();
  const hotFood = foodItems.slice(0, 3);
  const hotLive = getHotLive().slice(0, 3);

  return (
    <div>
      <Header />

      {/* HERO — Full-bleed Coral Block */}
      <section className="block-coral block-dots relative min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: "radial-gradient(circle at 70% 30%, rgba(255,255,255,0.3) 0%, transparent 60%)"
        }} />
        <div className="max-w-7xl mx-auto w-full relative z-10">
          <div className="max-w-3xl">
            <p className="text-white/60 text-sm tracking-[0.3em] uppercase mb-6 animate-fade-up">
              {t("home.badge")}
            </p>
            <h1 className="headline-xl text-white animate-fade-up" style={{ animationDelay: "0.15s" }}>
              {t("home.heroLine1")}<br />
              {t("home.heroLine2")}
            </h1>
            <p className="text-white/70 text-xl mt-8 max-w-md animate-fade-up" style={{ animationDelay: "0.3s" }}>
              {t("home.subtitle")}
            </p>
            <div className="flex gap-4 mt-10 animate-fade-up" style={{ animationDelay: "0.45s" }}>
              <Link href={`/${locale}/channel/luxury/browse/boost`}
                className="inline-flex items-center gap-2 bg-white text-coral font-bold px-8 py-4 rounded-full text-lg hover:scale-105 transition-transform">
                {t("browse.boostMode")} <ArrowRight className="size-5" />
              </Link>
              <Link href={`/${locale}/channel/food`}
                className="inline-flex items-center gap-2 border-2 border-white/30 text-white font-bold px-8 py-4 rounded-full text-lg hover:bg-white/10 transition-all">
                {t("channels.food.name")}
              </Link>
            </div>
          </div>
        </div>
        {/* Floating product image */}
        <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 w-[45%] h-[80%]">
          <img src={trending[0]?.images[0]} alt="" className="w-full h-full object-cover rounded-3xl opacity-90 shadow-2xl" />
        </div>
      </section>

      {/* MOODS — Violet Block */}
      <section className="block-violet block-grid py-24">
        <div className="max-w-7xl mx-auto">
          <p className="text-violet-200 text-sm tracking-[0.3em] uppercase mb-4">Pick Your Mood</p>
          <h2 className="headline-lg text-white mb-12">How are you feeling?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 stagger">
            {[
              { key: "boost", label: t("moods.boost.label"), desc: t("moods.boost.description"), icon: Zap, bg: "bg-black/20", hover: "hover:bg-black/40" },
              { key: "heal", label: t("moods.heal.label"), desc: t("moods.heal.description"), icon: Heart, bg: "bg-black/20", hover: "hover:bg-black/40" },
              { key: "indulge", label: t("moods.indulge.label"), desc: t("moods.indulge.description"), icon: Crown, bg: "bg-black/20", hover: "hover:bg-black/40" },
            ].map((m) => (
              <Link key={m.key} href={`/${locale}/channel/luxury/browse/${m.key}`}
                className={`${m.bg} ${m.hover} rounded-3xl p-8 flex flex-col gap-4 transition-all duration-300 hover:-translate-y-2 cursor-pointer border border-white/10`}>
                <m.icon className="size-10 text-white" />
                <div>
                  <h3 className="text-2xl font-black text-white mb-2">{m.label}</h3>
                  <p className="text-white/60 text-sm">{m.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CHANNELS — Cyan Block */}
      <section className="block-cyan py-24">
        <div className="max-w-7xl mx-auto">
          <p className="text-cyan-800 text-sm tracking-[0.3em] uppercase mb-4">{t("home.moreWorlds")}</p>
          <h2 className="headline-lg mb-12" style={{ color: "#050508" }}>Three worlds. One dopamine.</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 stagger">
            {[
              { id: "luxury", label: t("channels.luxury.name"), desc: t("channels.luxury.description"), icon: Gem, href: `/channel/luxury/browse/boost`, bg: "bg-black/10", color: "#050508" },
              { id: "food", label: t("channels.food.name"), desc: t("channels.food.description"), icon: UtensilsCrossed, href: `/channel/food`, bg: "bg-black/10", color: "#050508" },
              { id: "live", label: t("channels.live.name"), desc: t("channels.live.description"), icon: Radio, href: `/channel/live`, bg: "bg-black/10", color: "#050508" },
            ].map((c) => (
              <Link key={c.id} href={`/${locale}${c.href}`}
                className={`${c.bg} rounded-3xl p-8 flex flex-col gap-4 transition-all duration-300 hover:-translate-y-2 hover:bg-black/20 cursor-pointer`}>
                <c.icon className="size-10" style={{ color: c.color }} />
                <div>
                  <h3 className="text-2xl font-black mb-2" style={{ color: c.color }}>{c.label}</h3>
                  <p className="text-sm opacity-70" style={{ color: c.color }}>{c.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* TRENDING — Dark Block */}
      <section className="block-abyss block-dots py-24">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-end justify-between mb-12">
            <div>
              <p className="text-text-2 text-sm tracking-[0.3em] uppercase mb-4">{t("home.trending")}</p>
              <h2 className="headline-lg text-text-0">{t("home.trendingTitle")}</h2>
            </div>
            <Link href={`/${locale}/channel/luxury/browse/boost`} className="text-coral font-bold text-sm hover:underline">
              {t("home.viewAll")}
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 stagger">
            {trending.slice(0, 3).map((p) => (
              <Link key={p.slug} href={`/${locale}/channel/luxury/product/${p.slug}`}>
                <div className="card-block group cursor-pointer">
                  <div className="aspect-square rounded-2xl overflow-hidden mb-6 bg-bg-elevated">
                    <img src={p.images[0]} alt={p.name} className="size-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                  </div>
                  <span className="text-xs text-text-2 uppercase tracking-wider">{p.brand}</span>
                  <h3 className="text-lg font-bold text-text-0 mt-1">{p.name}</h3>
                  <p className="text-xl font-black text-coral mt-2">{p.price}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FOOD + LIVE — Amber Block */}
      <section className="block-amber py-24">
        <div className="max-w-7xl mx-auto">
          <h2 className="headline-lg mb-12" style={{ color: "#050508" }}>More dopamine. More channels.</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Food */}
            <div className="bg-black/10 rounded-3xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <UtensilsCrossed className="size-8 shrink-0" style={{ color: "#050508" }} />
                <h3 className="text-2xl font-black" style={{ color: "#050508" }}>{t("channels.food.name")}</h3>
              </div>
              <div className="space-y-4">
                {hotFood.map((f) => (
                  <Link key={f.slug} href={`/${locale}/channel/food`}
                    className="flex items-center gap-4 p-4 rounded-2xl bg-black/5 hover:bg-black/15 transition-all group cursor-pointer">
                    <div className="size-16 rounded-xl overflow-hidden shrink-0">
                      <img src={f.image} alt={f.name} className="size-full object-cover" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs opacity-60" style={{ color: "#050508" }}>{f.restaurant}</p>
                      <p className="font-bold line-clamp-1" style={{ color: "#050508" }}>{f.name}</p>
                    </div>
                    <span className="font-black text-lg shrink-0" style={{ color: "#050508" }}>{f.price}</span>
                  </Link>
                ))}
              </div>
            </div>
            {/* Live */}
            <div className="bg-black/10 rounded-3xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <Radio className="size-8 shrink-0" style={{ color: "#050508" }} />
                <h3 className="text-2xl font-black" style={{ color: "#050508" }}>{t("channels.live.name")}</h3>
                <span className="size-2.5 rounded-full bg-coral animate-pulse" />
              </div>
              <div className="space-y-4">
                {hotLive.map((l) => (
                  <Link key={l.slug} href={`/${locale}/channel/live`}
                    className="flex items-center gap-4 p-4 rounded-2xl bg-black/5 hover:bg-black/15 transition-all group cursor-pointer">
                    <div className="size-16 rounded-xl overflow-hidden shrink-0">
                      <img src={l.image} alt={l.title} className="size-full object-cover" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs opacity-60" style={{ color: "#050508" }}>{l.streamer}</p>
                      <p className="font-bold line-clamp-1" style={{ color: "#050508" }}>{l.title}</p>
                    </div>
                    <span className="font-black text-lg shrink-0" style={{ color: "#050508" }}>{l.price}</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA — Coral Block */}
      <section className="block-coral py-24 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="headline-lg text-white mb-6">Ready to feel something?</h2>
          <p className="text-white/70 text-lg mb-10">Browse. Pretend. Get dopamine. No credit card required.</p>
          <Link href={`/${locale}/sim-order`}
            className="inline-flex items-center gap-3 bg-white text-coral font-black px-10 py-5 rounded-full text-xl hover:scale-105 transition-transform">
            {t("simOrder.submitButton")} <Zap className="size-6" />
          </Link>
        </div>
      </section>
    </div>
  );
}
