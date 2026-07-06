"use client";

import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";
import { ArrowRight, Gem, UtensilsCrossed, Radio, Zap, Star, Eye } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { getTrendingProducts } from "@/data/products";
import { foodItems } from "@/data/channel/food";
import { getHotLive } from "@/data/channel/live";

export default function HomePage() {
  const t = useTranslations();
  const locale = useLocale();
  const trending = getTrendingProducts().slice(0, 5);
  const hotFood = foodItems.slice(0, 4);
  const hotLive = getHotLive().slice(0, 4);

  const channels = [
    { id: "luxury", label: t("channels.luxury.name"), desc: t("channels.luxury.description"), icon: Gem, href: "/channel/luxury/browse/boost", accent: "var(--accent)" },
    { id: "food", label: t("channels.food.name"), desc: t("channels.food.description"), icon: UtensilsCrossed, href: "/channel/food", accent: "var(--cool)" },
    { id: "live", label: t("channels.live.name"), desc: t("channels.live.description"), icon: Radio, href: "/channel/live", accent: "var(--warm)" },
  ];

  return (
    <main className="overflow-x-hidden w-full max-w-full">
      <Header />

      {/* HERO */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={trending[0]?.images[0] || "https://picsum.photos/seed/dopa-hero/1920/1280"} alt=""
            className="w-full h-full object-cover opacity-40" style={{ filter: "brightness(0.35) saturate(0.6)", transform: "scale(1.1)" }} />
          <div className="absolute inset-0 bg-gradient-to-r from-[#060609] via-[#060609]/70 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-[#060609] to-transparent" />
        </div>
        <div className="absolute w-[600px] h-[600px] rounded-full left-[-10%] top-[-20%] pointer-events-none" style={{ background: "rgba(255,90,110,0.06)", filter: "blur(120px)" }} />
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-12 lg:px-24 pt-20">
          <div className="max-w-4xl">
            <h1 className="text-[#F2F0F5]" style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2.8rem, 6vw, 6rem)", fontWeight: 800, lineHeight: 0.96, letterSpacing: "-0.04em", animation: "fade-up 0.8s cubic-bezier(0.22,1,0.36,1) both" }}>
              {t("home.heroLine1")}<br />
              <span style={{ color: "var(--accent)" }}>{t("home.heroLine2")}</span>
            </h1>
            <p className="mt-8 text-lg sm:text-xl" style={{ color: "#9490A0", maxWidth: "30rem", animation: "fade-up 0.8s cubic-bezier(0.22,1,0.36,1) both", animationDelay: "0.15s" }}>
              {t("home.subtitle")}
            </p>
          </div>
          <div className="flex flex-wrap gap-4 mt-12" style={{ animation: "fade-up 0.8s cubic-bezier(0.22,1,0.36,1) both", animationDelay: "0.3s" }}>
            <Link href={`/${locale}/channel/luxury/browse/boost`}
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full text-base font-bold transition-all duration-300 hover:scale-105"
              style={{ background: "var(--accent)", color: "#fff" }}>
              {t("moods.boost.label")} <ArrowRight className="size-4" />
            </Link>
            <Link href={`/${locale}/channel/food`}
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full text-base font-bold border transition-all duration-300 hover:scale-105"
              style={{ borderColor: "rgba(255,255,255,0.12)", color: "#F2F0F5" }}>
              {t("channels.food.name")}
            </Link>
            <Link href={`/${locale}/channel/live`}
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full text-base font-bold border transition-all duration-300 hover:scale-105"
              style={{ borderColor: "rgba(255,255,255,0.12)", color: "#F2F0F5" }}>
              <span className="size-2 rounded-full" style={{ background: "var(--accent)", animation: "pulse-subtle 4s ease-in-out infinite" }} />
              {t("channels.live.name")}
            </Link>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* BENTO */}
      <section className="section-cinema px-6 sm:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-end justify-between mb-16">
            <div>
              <p className="text-xs tracking-[0.25em] uppercase mb-4" style={{ color: "#565260" }}>{t("home.trending")}</p>
              <h2 className="text-[#F2F0F5]" style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.8rem, 4vw, 3.2rem)", fontWeight: 700, lineHeight: 1.08, letterSpacing: "-0.03em" }}>{t("home.trendingTitle")}</h2>
            </div>
            <Link href={`/${locale}/channel/luxury/browse/boost`} className="hidden sm:flex items-center gap-1.5 text-sm font-semibold hover:gap-2.5 transition-all" style={{ color: "var(--accent)" }}>
              {t("home.viewAll")}
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 grid-flow-dense gap-4">
            {trending[0] && (
              <Link href={`/${locale}/channel/luxury/product/${trending[0].slug}`} className="card-cinema lg:col-span-2 lg:row-span-2 group cursor-pointer relative">
                <div className="absolute inset-0">
                  <img src={trending[0].images[0]} alt={trending[0].name} className="w-full h-full object-cover" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#060609] via-[#060609]/40 to-transparent" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-8 z-10">
                  <span className="text-xs uppercase tracking-widest" style={{ color: "#565260" }}>{trending[0].brand}</span>
                  <h3 className="text-2xl font-bold mt-2 text-[#F2F0F5]">{trending[0].name}</h3>
                  <p className="text-xl font-bold mt-3" style={{ color: "var(--accent)" }}>{trending[0].price}</p>
                  <div className="flex items-center gap-3 mt-2">
                    <span className="text-xs" style={{ color: "#9490A0" }}><Star className="size-3 inline text-[var(--warm)]" /> {trending[0].rating}</span>
                    {trending[0].viewers && <span className="text-xs" style={{ color: "#9490A0" }}><Eye className="size-3 inline mr-0.5" />{trending[0].viewers}</span>}
                  </div>
                </div>
              </Link>
            )}
            {trending.slice(1, 5).map((p) => (
              <Link key={p.slug} href={`/${locale}/channel/luxury/product/${p.slug}`} className="card-cinema group cursor-pointer">
                <div className="aspect-[3/4] overflow-hidden">
                  <img src={p.images[0]} alt={p.name} className="w-full h-full object-cover" loading="lazy" />
                </div>
                <div className="p-5">
                  <span className="text-[11px] uppercase tracking-wider" style={{ color: "#565260" }}>{p.brand}</span>
                  <p className="text-sm font-medium mt-1 text-[#F2F0F5] line-clamp-1">{p.name}</p>
                  <div className="flex items-center justify-between mt-2">
                    <span className="text-sm font-bold" style={{ color: "var(--accent)" }}>{p.price}</span>
                    <span className="text-xs" style={{ color: "#9490A0" }}><Star className="size-3 inline text-[var(--warm)]" />{p.rating}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* MARQUEE */}
      <section className="section-cinema overflow-hidden">
        <div className="flex gap-20 whitespace-nowrap" style={{ width: "max-content", animation: "marquee 30s linear infinite" }}>
          {[...Array(3)].map((_, r) => trending.map((p, i) => (
            <span key={`${r}-${i}`} className="text-6xl sm:text-8xl font-black tracking-tighter select-none"
              style={{ color: "#F2F0F5", fontFamily: "var(--font-display)", opacity: 0.04 }}>{p.brand}</span>
          )))}
        </div>
      </section>

      <div className="section-divider" />

      {/* CHANNELS */}
      <section className="section-cinema px-6 sm:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-[#F2F0F5] mb-16" style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.8rem, 4vw, 3.2rem)", fontWeight: 700 }}>{t("home.pickChannel")}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {channels.map((c) => (
              <Link key={c.id} href={`/${locale}${c.href}`} className="card-cinema p-8 group cursor-pointer flex flex-col gap-6">
                <div className="size-16 rounded-2xl flex items-center justify-center transition-transform duration-500 group-hover:scale-110" style={{ backgroundColor: `${c.accent}15` }}>
                  <c.icon className="size-7" style={{ color: c.accent }} />
                </div>
                <div className="flex-1"><h3 className="text-xl font-bold text-[#F2F0F5] mb-2">{c.label}</h3><p style={{ color: "#9490A0", lineHeight: "1.7" }}>{c.desc}</p></div>
                <div className="flex items-center gap-2 text-sm font-semibold transition-all duration-300 group-hover:gap-3" style={{ color: c.accent }}>{t("home.viewAll").replace(" →", "")} <ArrowRight className="size-4" /></div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* FOOD + LIVE */}
      <section className="section-cinema px-6 sm:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="card-cinema p-8">
            <div className="flex items-center gap-3 mb-8">
              <UtensilsCrossed className="size-6" style={{ color: "var(--cool)" }} />
              <h3 className="text-xl font-bold text-[#F2F0F5]">{t("channels.food.name")}</h3>
              <Link href={`/${locale}/channel/food`} className="ml-auto text-xs font-semibold hover:underline" style={{ color: "var(--cool)" }}>{t("home.viewAll")}</Link>
            </div>
            <div className="space-y-3">
              {hotFood.map((f) => (
                <Link key={f.slug} href={`/${locale}/channel/food`} className="flex items-center gap-4 p-4 rounded-xl hover:bg-white/[0.02] transition-colors group cursor-pointer">
                  <div className="size-16 rounded-xl overflow-hidden shrink-0"><img src={f.image} alt={f.name} className="size-full object-cover" /></div>
                  <div className="flex-1 min-w-0"><span className="text-xs" style={{ color: "#565260" }}>{f.restaurant}</span><p className="text-sm font-medium text-[#F2F0F5] line-clamp-1">{f.name}</p></div>
                  <span className="text-sm font-bold shrink-0" style={{ color: "var(--accent)" }}>{f.price}</span>
                </Link>
              ))}
            </div>
          </div>
          <div className="card-cinema p-8">
            <div className="flex items-center gap-3 mb-8">
              <Radio className="size-6" style={{ color: "var(--warm)" }} />
              <h3 className="text-xl font-bold text-[#F2F0F5]">{t("channels.live.name")}</h3>
              <span className="size-2 rounded-full" style={{ background: "var(--accent)", animation: "pulse-subtle 4s ease-in-out infinite" }} />
              <Link href={`/${locale}/channel/live`} className="ml-auto text-xs font-semibold hover:underline" style={{ color: "var(--warm)" }}>{t("home.viewAll")}</Link>
            </div>
            <div className="space-y-3">
              {hotLive.map((live) => (
                <Link key={live.slug} href={`/${locale}/channel/live`} className="flex items-center gap-4 p-4 rounded-xl hover:bg-white/[0.02] transition-colors group cursor-pointer">
                  <div className="size-16 rounded-xl overflow-hidden shrink-0"><img src={live.image} alt={live.title} className="size-full object-cover" /></div>
                  <div className="flex-1 min-w-0"><span className="text-xs" style={{ color: "#565260" }}>{live.streamer}</span><p className="text-sm font-medium text-[#F2F0F5] line-clamp-1">{live.title}</p></div>
                  <span className="text-sm font-bold shrink-0" style={{ color: "var(--accent)" }}>{live.price}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* CTA */}
      <section className="section-cinema px-6 sm:px-12 lg:px-24 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-[#F2F0F5] mb-8" style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.8rem, 4vw, 3.2rem)", fontWeight: 700 }}>准备好了吗？</h2>
          <p className="text-lg mb-12" style={{ color: "#9490A0" }}>浏览、假装、多巴胺。不需要信用卡。</p>
          <Link href={`/${locale}/sim-order`} className="inline-flex items-center gap-3 px-12 py-5 rounded-full text-lg font-bold transition-all duration-300 hover:scale-105" style={{ background: "var(--accent)", color: "#fff" }}>
            {t("simOrder.submitButton")} <Zap className="size-5" />
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
