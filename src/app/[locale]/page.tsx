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
  const trending = getTrendingProducts().slice(0, 6);
  const hotFood = foodItems.slice(0, 4);
  const hotLive = getHotLive().slice(0, 4);

  return (
    <div>
      <Header />

      {/* HERO — Deep aubergine block */}
      <section className="block-1 block-grain block-breathe relative min-h-[85vh] flex items-center overflow-hidden">
        <div className="max-w-7xl mx-auto w-full relative z-10">
          <div className="max-w-3xl">
            <p className="text-text-1 text-sm tracking-[0.25em] uppercase mb-8 animate-fade-up">
              {t("home.badge")}
            </p>
            <h1 className="headline-xl text-text-0 animate-fade-up" style={{ animationDelay: "0.1s" }}>
              <span className="block">{t("home.heroLine1")}</span>
              <span style={{ color: "var(--accent-coral)" }}>{t("home.heroLine2")}</span>
            </h1>
            <p className="text-text-1 text-lg mt-8 max-w-md animate-fade-up" style={{ animationDelay: "0.25s" }}>
              {t("home.subtitle")}
            </p>
            <div className="flex flex-wrap gap-4 mt-10 animate-fade-up" style={{ animationDelay: "0.4s" }}>
              <Link href={`/${locale}/channel/luxury/browse/boost`}
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-base font-bold transition-all duration-300 hover:scale-105"
                style={{ backgroundColor: "var(--accent-coral)", color: "#fff" }}>
                {t("moods.boost.label")} <ArrowRight className="size-4" />
              </Link>
              <Link href={`/${locale}/channel/food`}
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-base font-bold border transition-all duration-300 hover:scale-105"
                style={{ borderColor: "rgba(255,255,255,0.15)", color: "var(--text-0)" }}>
                {t("channels.food.name")}
              </Link>
              <Link href={`/${locale}/channel/live`}
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-base font-bold border transition-all duration-300 hover:scale-105"
                style={{ borderColor: "rgba(255,255,255,0.15)", color: "var(--text-0)" }}>
                <span className="size-2 rounded-full animate-pulse-subtle" style={{ backgroundColor: "var(--accent-coral)" }} />
                {t("channels.live.name")}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* MOODS — Deep indigo block */}
      <section className="block-2 block-grain block-comfortable">
        <div className="max-w-7xl mx-auto">
          <h2 className="headline-lg text-text-0 mb-12">{t("home.titleHighlight")}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 stagger">
            {[
              { key: "boost", label: t("moods.boost.label"), desc: t("moods.boost.description"), icon: Zap, accent: "var(--accent-coral)" },
              { key: "heal", label: t("moods.heal.label"), desc: t("moods.heal.description"), icon: Heart, accent: "var(--accent-mint)" },
              { key: "indulge", label: t("moods.indulge.label"), desc: t("moods.indulge.description"), icon: Crown, accent: "var(--accent-gold)" },
            ].map((m) => (
              <Link key={m.key} href={`/${locale}/channel/luxury/browse/${m.key}`}
                className="card-block cursor-pointer flex flex-col gap-5 group">
                <div className="size-14 rounded-2xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                  style={{ backgroundColor: `${m.accent}15` }}>
                  <m.icon className="size-6" style={{ color: m.accent }} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-text-0 mb-2">{m.label}</h3>
                  <p className="text-text-2 text-sm leading-relaxed">{m.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* TRENDING — Dark block */}
      <section className="block-0 block-grain block-comfortable">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-end justify-between mb-12">
            <div>
              <p className="text-text-3 text-xs tracking-[0.2em] uppercase mb-4">{t("home.trending")}</p>
              <h2 className="headline-lg text-text-0">{t("home.trendingTitle")}</h2>
            </div>
            <Link href={`/${locale}/channel/luxury/browse/boost`}
              className="text-sm font-bold transition-colors hover:underline" style={{ color: "var(--accent-coral)" }}>
              {t("home.viewAll")}
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 stagger">
            {trending.map((p) => (
              <Link key={p.slug} href={`/${locale}/channel/luxury/product/${p.slug}`}>
                <div className="card-block group cursor-pointer">
                  <div className="aspect-[4/3] rounded-xl overflow-hidden mb-5">
                    <img src={p.images[0]} alt={p.name} className="size-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
                  </div>
                  <span className="text-xs text-text-3 uppercase tracking-wider">{p.brand}</span>
                  <h3 className="text-base font-bold text-text-0 mt-1 line-clamp-1">{p.name}</h3>
                  <p className="text-lg font-black mt-2" style={{ color: "var(--accent-coral)" }}>{p.price}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CHANNELS — Deep teal block */}
      <section className="block-3 block-grain block-comfortable">
        <div className="max-w-7xl mx-auto">
          <h2 className="headline-lg text-text-0 mb-12">{t("home.pickChannel")}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 stagger">
            {[
              { id: "luxury", label: t("channels.luxury.name"), desc: t("channels.luxury.description"), icon: Gem, href: "/channel/luxury/browse/boost", accent: "var(--accent-coral)" },
              { id: "food", label: t("channels.food.name"), desc: t("channels.food.description"), icon: UtensilsCrossed, href: "/channel/food", accent: "var(--accent-mint)" },
              { id: "live", label: t("channels.live.name"), desc: t("channels.live.description"), icon: Radio, href: "/channel/live", accent: "var(--accent-gold)" },
            ].map((c) => (
              <Link key={c.id} href={`/${locale}${c.href}`}
                className="card-block cursor-pointer flex flex-col gap-5 group" style={{ backgroundColor: "rgba(255,255,255,0.02)" }}>
                <div className="size-14 rounded-2xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                  style={{ backgroundColor: `${c.accent}12` }}>
                  <c.icon className="size-6" style={{ color: c.accent }} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-text-0 mb-2">{c.label}</h3>
                  <p className="text-text-2 text-sm leading-relaxed">{c.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FOOD PREVIEW — Warm dark block */}
      <section className="block-4 block-grain block-comfortable">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-end justify-between mb-12">
            <div>
              <p className="text-text-3 text-xs tracking-[0.2em] uppercase mb-4">{t("channels.food.name")}</p>
              <h2 className="headline-lg text-text-0">{t("home.newArrivalsTitle")}</h2>
            </div>
            <Link href={`/${locale}/channel/food`} className="text-sm font-bold transition-colors hover:underline" style={{ color: "var(--accent-mint)" }}>
              {t("home.viewAll")}
            </Link>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 stagger">
            {hotFood.map((f) => (
              <Link key={f.slug} href={`/${locale}/channel/food`} className="card-block cursor-pointer group" style={{ backgroundColor: "rgba(255,255,255,0.02)" }}>
                <div className="aspect-square rounded-xl overflow-hidden mb-4">
                  <img src={f.image} alt={f.name} className="size-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
                </div>
                <span className="text-xs text-text-3">{f.restaurant}</span>
                <p className="text-sm font-medium text-text-0 mt-1 line-clamp-1">{f.name}</p>
                <p className="text-sm font-bold mt-1.5" style={{ color: "var(--accent-coral)" }}>{f.price}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* LIVE PREVIEW */}
      <section className="block-0 block-grain block-comfortable">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-end justify-between mb-12">
            <div className="flex items-center gap-3">
              <span className="size-2.5 rounded-full animate-pulse-subtle" style={{ backgroundColor: "var(--accent-coral)" }} />
              <div>
                <p className="text-text-3 text-xs tracking-[0.2em] uppercase mb-4">{t("channels.live.name")}</p>
                <h2 className="headline-lg text-text-0">{t("leaderboard.title")}</h2>
              </div>
            </div>
            <Link href={`/${locale}/channel/live`} className="text-sm font-bold transition-colors hover:underline" style={{ color: "var(--accent-gold)" }}>
              {t("home.viewAll")}
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 stagger">
            {hotLive.map((live) => (
              <Link key={live.slug} href={`/${locale}/channel/live`} className="card-block cursor-pointer group">
                <div className="aspect-video rounded-xl overflow-hidden mb-4 relative">
                  <img src={live.image} alt={live.title} className="size-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
                  <span className="absolute top-2 left-2 px-2.5 py-0.5 rounded-full text-[10px] font-bold text-white"
                    style={{ backgroundColor: "var(--accent-coral)" }}>LIVE</span>
                </div>
                <span className="text-xs text-text-3">{live.streamer}</span>
                <p className="text-sm font-medium text-text-0 mt-1 line-clamp-1">{live.title}</p>
                <p className="text-sm font-bold mt-1.5" style={{ color: "var(--accent-coral)" }}>{live.price}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="block-1 block-grain block-breathe text-center">
        <div className="max-w-xl mx-auto">
          <h2 className="headline-lg text-text-0 mb-6">Ready to feel something?</h2>
          <p className="text-text-1 text-lg mb-10">Browse. Pretend. Get dopamine. No credit card required.</p>
          <Link href={`/${locale}/sim-order`}
            className="inline-flex items-center gap-3 px-10 py-5 rounded-full text-lg font-black transition-all duration-300 hover:scale-105"
            style={{ backgroundColor: "var(--accent-coral)", color: "#fff" }}>
            {t("simOrder.submitButton")} <Zap className="size-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
