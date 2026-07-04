"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";
import { ArrowRight, Gem, UtensilsCrossed, Radio, Zap } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Header } from "@/components/layout/Header";
import { getTrendingProducts } from "@/data/products";
import { foodItems } from "@/data/channel/food";
import { getHotLive } from "@/data/channel/live";

gsap.registerPlugin(ScrollTrigger);

export default function HomePage() {
  const t = useTranslations();
  const locale = useLocale();
  const trending = getTrendingProducts().slice(0, 5);
  const hotFood = foodItems.slice(0, 4);
  const hotLive = getHotLive().slice(0, 4);

  const heroRef = useRef<HTMLDivElement>(null);
  const bentoRef = useRef<HTMLDivElement>(null);
  const marqueeRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero fade-in
      if (heroRef.current) {
        gsap.fromTo(".hero-text", { y: 60, opacity: 0 }, { y: 0, opacity: 1, duration: 1, ease: "power3.out", stagger: 0.15 });
        gsap.fromTo(".hero-img", { x: 80, opacity: 0 }, { x: 0, opacity: 1, duration: 1.2, ease: "power3.out", delay: 0.4 });
      }

      // Bento cards reveal on scroll
      if (bentoRef.current) {
        gsap.fromTo(".bento-card", { y: 60, opacity: 0, scale: 0.95 },
          { y: 0, opacity: 1, scale: 1, duration: 0.7, stagger: 0.1, ease: "power3.out",
            scrollTrigger: { trigger: bentoRef.current, start: "top 75%" } });
      }

      // Marquee
      if (marqueeRef.current) {
        gsap.to(".marquee-track", {
          xPercent: -50, duration: 20, ease: "none", repeat: -1,
          scrollTrigger: { trigger: marqueeRef.current, start: "top bottom", end: "bottom top", toggleActions: "play pause resume pause" }
        });
      }

      // CTA scale-up
      if (ctaRef.current) {
        gsap.fromTo(".cta-content", { scale: 0.92, opacity: 0 },
          { scale: 1, opacity: 1, duration: 0.9, ease: "power3.out",
            scrollTrigger: { trigger: ctaRef.current, start: "top 85%" } });
      }
    });

    return () => ctx.revert();
  }, []);

  const channels = [
    { id: "luxury", label: t("channels.luxury.name"), desc: t("channels.luxury.description"), icon: Gem, href: "/channel/luxury/browse/boost", accent: "var(--accent)" },
    { id: "food", label: t("channels.food.name"), desc: t("channels.food.description"), icon: UtensilsCrossed, href: "/channel/food", accent: "var(--cool)" },
    { id: "live", label: t("channels.live.name"), desc: t("channels.live.description"), icon: Radio, href: "/channel/live", accent: "var(--warm)" },
  ];

  return (
    <main className="overflow-x-hidden w-full max-w-full">
      <Header />

      {/* ──────── HERO: Artistic Asymmetry ──────── */}
      <section ref={heroRef} className="relative min-h-screen flex items-center px-6 sm:px-12 lg:px-24 overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0" style={{
          background: "radial-gradient(ellipse 80% 60% at 30% 50%, rgba(255,90,110,0.06) 0%, transparent 70%), radial-gradient(ellipse 60% 50% at 80% 30%, rgba(232,195,0,0.04) 0%, transparent 70%)"
        }} />

        <div className="w-full max-w-7xl mx-auto relative z-10">
          <div className="max-w-5xl hero-text">
            <h1 className="h1-cinema text-[var(--t-high)]">
              {t("home.heroLine1")}<br />
              <span style={{ color: "var(--accent)" }}>{t("home.heroLine2")}</span>
            </h1>
            <p className="mt-8 text-lg sm:text-xl" style={{ color: "var(--t-mid)", maxWidth: "32rem" }}>
              {t("home.subtitle")}
            </p>
            <div className="flex flex-wrap gap-4 mt-10 hero-text">
              <Link href={`/${locale}/channel/luxury/browse/boost`}
                className="inline-flex items-center gap-3 px-8 py-4 rounded-full text-base font-semibold transition-all duration-300 hover:scale-105"
                style={{ background: "var(--accent)", color: "#fff" }}>
                {t("moods.boost.label")} <ArrowRight className="size-4" />
              </Link>
              <Link href={`/${locale}/channel/food`}
                className="inline-flex items-center gap-3 px-8 py-4 rounded-full text-base font-semibold transition-all duration-300 hover:scale-105"
                style={{ background: "rgba(255,255,255,0.06)", color: "var(--t-high)", border: "1px solid rgba(255,255,255,0.08)" }}>
                {t("channels.food.name")}
              </Link>
            </div>
          </div>
        </div>

        {/* Floating product image — artistic asymmetry */}
        <div className="hero-img hidden xl:block absolute right-0 bottom-0 h-[85%] w-[40%]">
          <div className="relative h-full w-full">
            <img
              src={trending[0]?.images[0] || "https://picsum.photos/seed/luxury-hero/800/1200"}
              alt=""
              className="w-full h-full object-cover"
              style={{
                maskImage: "linear-gradient(to top, black 60%, transparent 100%)",
                WebkitMaskImage: "linear-gradient(to top, black 60%, transparent 100%)",
              }}
            />
          </div>
        </div>
      </section>

      {/* ──────── INTEREST: Bento Grid ──────── */}
      <section ref={bentoRef} className="section-cinema px-6 sm:px-12 lg:px-24 grain-overlay">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-end justify-between mb-16">
            <div>
              <h2 className="h2-cinema text-[var(--t-high)]">{t("home.trendingTitle")}</h2>
            </div>
            <Link href={`/${locale}/channel/luxury/browse/boost`}
              className="text-sm font-semibold transition-colors hover:opacity-80 hidden sm:block" style={{ color: "var(--accent)" }}>
              {t("home.viewAll")}
            </Link>
          </div>

          {/* Bento — grid-flow-dense, no gaps */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 grid-flow-dense gap-4">
            {/* Hero card — spans 2 cols, 2 rows */}
            {trending[0] && (
              <Link href={`/${locale}/channel/luxury/product/${trending[0].slug}`}
                className="bento-card card-cinema lg:col-span-2 lg:row-span-2 group cursor-pointer relative">
                <div className="absolute inset-0">
                  <img src={trending[0].images[0]} alt={trending[0].name}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--void)] via-[var(--void)]/30 to-transparent" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <span className="text-xs uppercase tracking-widest" style={{ color: "var(--t-low)" }}>{trending[0].brand}</span>
                  <h3 className="text-2xl font-bold mt-2 text-[var(--t-high)]">{trending[0].name}</h3>
                  <p className="text-xl font-bold mt-3" style={{ color: "var(--accent)" }}>{trending[0].price}</p>
                </div>
              </Link>
            )}

            {/* Other cards — 1 col each */}
            {trending.slice(1, 5).map((p) => (
              <Link key={p.slug} href={`/${locale}/channel/luxury/product/${p.slug}`}
                className="bento-card card-cinema group cursor-pointer">
                <div className="aspect-[3/4] overflow-hidden">
                  <img src={p.images[0]} alt={p.name}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    loading="lazy" />
                </div>
                <div className="p-5">
                  <span className="text-[11px] uppercase tracking-wider" style={{ color: "var(--t-low)" }}>{p.brand}</span>
                  <p className="text-sm font-medium mt-1 text-[var(--t-high)] line-clamp-1">{p.name}</p>
                  <p className="text-sm font-bold mt-2" style={{ color: "var(--accent)" }}>{p.price}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ──────── DESIRE: Infinite Marquee ──────── */}
      <section ref={marqueeRef} className="section-cinema overflow-hidden">
        <div className="marquee-track flex gap-8 whitespace-nowrap" style={{ width: "max-content" }}>
          {[...Array(2)].map((_, round) => (
            <div key={round} className="flex gap-16 items-center">
              {trending.map((p) => (
                <span key={`${round}-${p.slug}`} className="text-6xl sm:text-8xl font-black tracking-tighter opacity-10 hover:opacity-30 transition-opacity duration-500 cursor-default select-none"
                  style={{ color: "var(--accent)", fontFamily: "var(--font-display)" }}>
                  {p.brand}
                </span>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* ──────── DESIRE: Channel Accordions ──────── */}
      <section className="section-cinema px-6 sm:px-12 lg:px-24 grain-overlay">
        <div className="max-w-7xl mx-auto">
          <h2 className="h2-cinema text-[var(--t-high)] mb-16">{t("home.pickChannel")}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {channels.map((c) => (
              <Link key={c.id} href={`/${locale}${c.href}`}
                className="card-cinema p-8 group cursor-pointer flex flex-col gap-5">
                <div className="size-14 rounded-2xl flex items-center justify-center transition-transform duration-500 ease-out group-hover:scale-110"
                  style={{ backgroundColor: `${c.accent}15` }}>
                  <c.icon className="size-6" style={{ color: c.accent }} />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-[var(--t-high)] mb-2">{c.label}</h3>
                  <p style={{ color: "var(--t-mid)", lineHeight: "1.6" }}>{c.desc}</p>
                </div>
                <div className="flex items-center gap-2 text-sm font-semibold transition-all duration-300 group-hover:gap-3"
                  style={{ color: c.accent }}>
                  {t("home.viewAll").replace(" →", "")} <ArrowRight className="size-4" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ──────── FOOD + LIVE Dual Grid ──────── */}
      <section className="section-cinema px-6 sm:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Food */}
          <div className="card-cinema p-8">
            <div className="flex items-center gap-3 mb-8">
              <UtensilsCrossed className="size-6" style={{ color: "var(--cool)" }} />
              <h3 className="text-xl font-bold text-[var(--t-high)]">{t("channels.food.name")}</h3>
            </div>
            <div className="space-y-4">
              {hotFood.map((f) => (
                <Link key={f.slug} href={`/${locale}/channel/food`}
                  className="flex items-center gap-4 p-4 rounded-xl hover:bg-white/[0.03] transition-colors group cursor-pointer">
                  <div className="size-14 rounded-lg overflow-hidden shrink-0">
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

          {/* Live */}
          <div className="card-cinema p-8">
            <div className="flex items-center gap-3 mb-8">
              <Radio className="size-6" style={{ color: "var(--warm)" }} />
              <h3 className="text-xl font-bold text-[var(--t-high)]">{t("channels.live.name")}</h3>
              <span className="size-2 rounded-full animate-pulse" style={{ backgroundColor: "var(--accent)" }} />
            </div>
            <div className="space-y-4">
              {hotLive.map((live) => (
                <Link key={live.slug} href={`/${locale}/channel/live`}
                  className="flex items-center gap-4 p-4 rounded-xl hover:bg-white/[0.03] transition-colors group cursor-pointer">
                  <div className="size-14 rounded-lg overflow-hidden shrink-0">
                    <img src={live.image} alt={live.title} className="size-full object-cover transition-transform duration-500 group-hover:scale-105" />
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

      {/* ──────── ACTION: CTA ──────── */}
      <section ref={ctaRef} className="section-cinema px-6 sm:px-12 lg:px-24 text-center">
        <div className="max-w-3xl mx-auto cta-content">
          <h2 className="h2-cinema text-[var(--t-high)] mb-8">Ready to feel something?</h2>
          <p className="text-lg mb-12" style={{ color: "var(--t-mid)" }}>
            Browse. Pretend. Get dopamine. No credit card required.
          </p>
          <Link href={`/${locale}/sim-order`}
            className="inline-flex items-center gap-3 px-12 py-5 rounded-full text-lg font-bold transition-all duration-300 hover:scale-105"
            style={{ background: "var(--accent)", color: "#fff" }}>
            {t("simOrder.submitButton")} <Zap className="size-5" />
          </Link>
        </div>
      </section>
    </main>
  );
}
