"use client";

import { useRef } from "react";
import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";
import { ArrowRight, Gem, UtensilsCrossed, Radio, Zap, Star, Eye } from "lucide-react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { getTrendingProducts } from "@/data/products";
import { foodItems } from "@/data/channel/food";
import { getHotLive } from "@/data/channel/live";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function HomePage() {
  const t = useTranslations();
  const locale = useLocale();
  const trending = getTrendingProducts().slice(0, 5);
  const hotFood = foodItems.slice(0, 4);
  const hotLive = getHotLive().slice(0, 4);
  const mainRef = useRef<HTMLDivElement>(null);

  // Hero entrance
  useGSAP(() => {
    gsap.fromTo(".hero-text", { y: 80, opacity: 0 }, { y: 0, opacity: 1, duration: 1, stagger: 0.1, ease: "power4.out" });
    gsap.fromTo(".hero-cta", { y: 40, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, delay: 0.6, ease: "power3.out" });
  });

  // Bento cards
  useGSAP(() => {
    ScrollTrigger.batch(".bento-card", {
      interval: 0.05, batchMax: 6,
      onEnter: (batch) => gsap.fromTo(batch, { y: 80, opacity: 0, scale: 0.94 }, { y: 0, opacity: 1, scale: 1, duration: 0.7, stagger: 0.08, ease: "power3.out" }),
      start: "top 85%", once: true,
    });
  });

  // Marquee
  useGSAP(() => {
    gsap.to(".marquee-track", {
      xPercent: -50, ease: "none", duration: 18, repeat: -1,
      scrollTrigger: { trigger: ".marquee-section", start: "top bottom", end: "bottom top", toggleActions: "play pause resume pause" },
    });
  });

  // Channel cards
  useGSAP(() => {
    ScrollTrigger.batch(".channel-card", {
      interval: 0.08,
      onEnter: (batch) => gsap.fromTo(batch, { y: 60, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6, stagger: 0.1, ease: "power3.out" }),
      start: "top 85%", once: true,
    });
  });

  // Preview cards
  useGSAP(() => {
    ScrollTrigger.batch(".preview-card", {
      interval: 0.06,
      onEnter: (batch) => gsap.fromTo(batch, { y: 40, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5, stagger: 0.06, ease: "power2.out" }),
      start: "top 88%", once: true,
    });
  });

  // CTA
  useGSAP(() => {
    gsap.fromTo(".cta-content", { scale: 0.9, opacity: 0 }, {
      scale: 1, opacity: 1, duration: 0.9, ease: "power4.out",
      scrollTrigger: { trigger: ".cta-section", start: "top 80%", toggleActions: "play none none none" },
    });
  });

  // Reduced motion
  useGSAP(() => {
    const mm = gsap.matchMedia();
    mm.add("(prefers-reduced-motion: reduce)", () => { gsap.set("*", { clearProps: "all" }); });
  });

  const channels = [
    { id: "luxury", label: t("channels.luxury.name"), desc: t("channels.luxury.description"), icon: Gem, href: "/channel/luxury/browse/boost", accent: "var(--accent)" },
    { id: "food", label: t("channels.food.name"), desc: t("channels.food.description"), icon: UtensilsCrossed, href: "/channel/food", accent: "var(--cool)" },
    { id: "live", label: t("channels.live.name"), desc: t("channels.live.description"), icon: Radio, href: "/channel/live", accent: "var(--warm)" },
  ];

  return (
    <main ref={mainRef} className="overflow-x-hidden w-full max-w-full">
      <Header />

      {/* ━━━ HERO — Full-bleed image background ━━━ */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Full-bleed background image */}
        <div className="absolute inset-0">
          <img
            src={trending[0]?.images[0] || "https://picsum.photos/seed/dopa-hero/1920/1280"}
            alt=""
            className="w-full h-full object-cover opacity-40 scale-110"
            style={{ filter: "brightness(0.35) saturate(0.6)" }}
          />
          {/* Left gradient wash */}
          <div className="absolute inset-0 bg-gradient-to-r from-[var(--abyss)] via-[var(--abyss)]/70 to-transparent" />
          {/* Bottom fade */}
          <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-[var(--abyss)] to-transparent" />
        </div>

        {/* Glow orbs */}
        <div className="hero-glow w-[600px] h-[600px] left-[-10%] top-[-20%]" style={{ background: "rgba(255,90,110,0.08)" }} />
        <div className="hero-glow w-[400px] h-[400px] right-[-5%] bottom-[-10%]" style={{ background: "rgba(232,196,0,0.05)" }} />

        {/* Content */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-12 lg:px-24 pt-20">
          <div className="max-w-4xl hero-text">
            <h1 className="h1-cinema text-[var(--t-high)]">
              {t("home.heroLine1")}
              <br />
              <span style={{ color: "var(--accent)" }}>{t("home.heroLine2")}</span>
            </h1>
            <p className="hero-text mt-8 text-lg sm:text-xl" style={{ color: "var(--t-mid)", maxWidth: "30rem" }}>
              {t("home.subtitle")}
            </p>
          </div>

          <div className="hero-cta flex flex-wrap gap-4 mt-12">
            <Link href={`/${locale}/channel/luxury/browse/boost`}
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full text-base font-bold transition-all duration-300 hover:scale-105 hover:shadow-lg"
              style={{ background: "var(--accent)", color: "#fff" }}>
              {t("moods.boost.label")} <ArrowRight className="size-4" />
            </Link>
            <Link href={`/${locale}/channel/food`}
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full text-base font-bold border transition-all duration-300 hover:scale-105"
              style={{ borderColor: "rgba(255,255,255,0.12)", color: "var(--t-high)" }}>
              {t("channels.food.name")}
            </Link>
            <Link href={`/${locale}/channel/live`}
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full text-base font-bold border transition-all duration-300 hover:scale-105"
              style={{ borderColor: "rgba(255,255,255,0.12)", color: "var(--t-high)" }}>
              <span className="size-2 rounded-full animate-pulse-subtle" style={{ backgroundColor: "var(--accent)" }} />
              {t("channels.live.name")}
            </Link>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* ━━━ BENTO — Trending ━━━ */}
      <section className="section-cinema px-6 sm:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-end justify-between mb-16">
            <div>
              <p className="text-xs tracking-[0.25em] uppercase mb-4" style={{ color: "var(--t-low)" }}>{t("home.trending")}</p>
              <h2 className="h2-cinema text-[var(--t-high)]">{t("home.trendingTitle")}</h2>
            </div>
            <Link href={`/${locale}/channel/luxury/browse/boost`} className="hidden sm:flex items-center gap-1.5 text-sm font-semibold transition-all hover:gap-2.5" style={{ color: "var(--accent)" }}>
              {t("home.viewAll")}
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 grid-flow-dense gap-4">
            {trending[0] && (
              <Link href={`/${locale}/channel/luxury/product/${trending[0].slug}`}
                className="bento-card card-cinema lg:col-span-2 lg:row-span-2 group cursor-pointer relative">
                <div className="absolute inset-0">
                  <img src={trending[0].images[0]} alt={trending[0].name}
                    className="w-full h-full object-cover" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--abyss)] via-[var(--abyss)]/40 to-transparent" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <span className="text-xs uppercase tracking-widest" style={{ color: "var(--t-low)" }}>{trending[0].brand}</span>
                  <h3 className="text-2xl font-bold mt-2 text-[var(--t-high)]">{trending[0].name}</h3>
                  <p className="text-xl font-bold mt-3" style={{ color: "var(--accent)" }}>{trending[0].price}</p>
                  <div className="flex items-center gap-3 mt-2">
                    <span className="text-xs" style={{ color: "var(--t-mid)" }}><Star className="size-3 inline text-[var(--warm)]" /> {trending[0].rating}</span>
                    {trending[0].viewers && <span className="text-xs" style={{ color: "var(--t-mid)" }}><Eye className="size-3 inline mr-0.5" />{trending[0].viewers}</span>}
                  </div>
                </div>
              </Link>
            )}
            {trending.slice(1, 5).map((p) => (
              <Link key={p.slug} href={`/${locale}/channel/luxury/product/${p.slug}`}
                className="bento-card card-cinema group cursor-pointer">
                <div className="aspect-[3/4] overflow-hidden">
                  <img src={p.images[0]} alt={p.name} className="w-full h-full object-cover" loading="lazy" />
                </div>
                <div className="p-5">
                  <span className="text-[11px] uppercase tracking-wider" style={{ color: "var(--t-low)" }}>{p.brand}</span>
                  <p className="text-sm font-medium mt-1 text-[var(--t-high)] line-clamp-1">{p.name}</p>
                  <div className="flex items-center justify-between mt-2">
                    <span className="text-sm font-bold" style={{ color: "var(--accent)" }}>{p.price}</span>
                    <span className="text-xs" style={{ color: "var(--t-mid)" }}><Star className="size-3 inline text-[var(--warm)]" />{p.rating}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* ━━━ MARQUEE ━━━ */}
      <section className="marquee-section section-cinema overflow-hidden">
        <div className="marquee-track flex gap-8 whitespace-nowrap" style={{ width: "max-content" }}>
          {[...Array(2)].map((_, round) => (
            <div key={round} className="flex gap-20 items-center">
              {trending.map((p) => (
                <span key={`${round}-${p.slug}`}
                  className="text-6xl sm:text-8xl font-black tracking-tighter opacity-8 hover:opacity-20 transition-opacity duration-700 cursor-default select-none"
                  style={{ color: "var(--t-high)", fontFamily: "var(--font-display)", opacity: 0.06 }}>
                  {p.brand}
                </span>
              ))}
            </div>
          ))}
        </div>
      </section>

      <div className="section-divider" />

      {/* ━━━ CHANNELS ━━━ */}
      <section className="section-cinema px-6 sm:px-12 lg:px-24 grain-overlay relative">
        <div className="max-w-7xl mx-auto">
          <h2 className="h2-cinema text-[var(--t-high)] mb-16">{t("home.pickChannel")}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {channels.map((c) => (
              <Link key={c.id} href={`/${locale}${c.href}`}
                className="channel-card card-cinema p-8 group cursor-pointer flex flex-col gap-6">
                <div className="size-16 rounded-2xl flex items-center justify-center transition-all duration-500 ease-out group-hover:scale-110 group-hover:shadow-lg"
                  style={{ backgroundColor: `${c.accent}12` }}>
                  <c.icon className="size-7" style={{ color: c.accent }} />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-[var(--t-high)] mb-2">{c.label}</h3>
                  <p style={{ color: "var(--t-mid)", lineHeight: "1.7" }}>{c.desc}</p>
                </div>
                <div className="flex items-center gap-2 text-sm font-semibold transition-all duration-300 group-hover:gap-3" style={{ color: c.accent }}>
                  {t("home.viewAll").replace(" →", "")} <ArrowRight className="size-4" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* ━━━ FOOD + LIVE PREVIEW ━━━ */}
      <section className="section-cinema px-6 sm:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Food */}
          <div className="card-cinema p-8">
            <div className="flex items-center gap-3 mb-8">
              <UtensilsCrossed className="size-6" style={{ color: "var(--cool)" }} />
              <h3 className="text-xl font-bold text-[var(--t-high)]">{t("channels.food.name")}</h3>
              <Link href={`/${locale}/channel/food`} className="ml-auto text-xs font-semibold hover:underline" style={{ color: "var(--cool)" }}>
                {t("home.viewAll")}
              </Link>
            </div>
            <div className="space-y-3">
              {hotFood.map((f) => (
                <Link key={f.slug} href={`/${locale}/channel/food`}
                  className="preview-card flex items-center gap-4 p-4 rounded-xl hover:bg-white/[0.02] transition-colors group cursor-pointer">
                  <div className="size-16 rounded-xl overflow-hidden shrink-0">
                    <img src={f.image} alt={f.name} className="size-full object-cover" />
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

          {/* Live */}
          <div className="card-cinema p-8">
            <div className="flex items-center gap-3 mb-8">
              <Radio className="size-6" style={{ color: "var(--warm)" }} />
              <h3 className="text-xl font-bold text-[var(--t-high)]">{t("channels.live.name")}</h3>
              <span className="size-2 rounded-full animate-pulse-subtle ml-1" style={{ backgroundColor: "var(--accent)" }} />
              <Link href={`/${locale}/channel/live`} className="ml-auto text-xs font-semibold hover:underline" style={{ color: "var(--warm)" }}>
                {t("home.viewAll")}
              </Link>
            </div>
            <div className="space-y-3">
              {hotLive.map((live) => (
                <Link key={live.slug} href={`/${locale}/channel/live`}
                  className="preview-card flex items-center gap-4 p-4 rounded-xl hover:bg-white/[0.02] transition-colors group cursor-pointer">
                  <div className="size-16 rounded-xl overflow-hidden shrink-0">
                    <img src={live.image} alt={live.title} className="size-full object-cover" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className="text-xs" style={{ color: "var(--t-low)" }}>{live.streamer}</span>
                    <p className="text-sm font-medium text-[var(--t-high)] line-clamp-1">{live.title}</p>
                  </div>
                  <span className="text-sm font-bold shrink-0" style={{ color: "var(--accent)" }}>{live.price}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* ━━━ CTA ━━━ */}
      <section className="cta-section section-cinema px-6 sm:px-12 lg:px-24 text-center">
        <div className="max-w-2xl mx-auto cta-content">
          <h2 className="h2-cinema text-[var(--t-high)] mb-8">准备好了吗？</h2>
          <p className="text-lg mb-12" style={{ color: "var(--t-mid)" }}>浏览、假装、多巴胺。不需要信用卡。</p>
          <Link href={`/${locale}/sim-order`}
            className="inline-flex items-center gap-3 px-12 py-5 rounded-full text-lg font-bold transition-all duration-300 hover:scale-105"
            style={{ background: "var(--accent)", color: "#fff" }}>
            {t("simOrder.submitButton")} <Zap className="size-5" />
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
