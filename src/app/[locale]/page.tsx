"use client";

import Link from "next/link";
import { Zap, Heart, Crown, Star, Eye, ArrowRight } from "lucide-react";
import { useTranslations, useLocale } from "next-intl";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { GlimmerParticles } from "@/components/brand/GlimmerParticles";
import { MoodCard } from "@/components/brand/MoodCard";
import { ChannelCard } from "@/components/channel/ChannelCard";
import { Badge } from "@/components/brand/Badge";
import { channels, iconMap } from "@/data/channels";
import { getTrendingProducts, getFeaturedProducts } from "@/data/products";

const moodDefs = [
  { key: "boost", icon: Zap, labelKey: "moods.boost.label", descKey: "moods.boost.description", color: "var(--brand)", borderColor: "rgba(255,59,92,0.12)", glowColor: "rgba(255,59,92,0.1)", bgMuted: "rgba(255,59,92,0.04)" },
  { key: "heal", icon: Heart, labelKey: "moods.heal.label", descKey: "moods.heal.description", color: "var(--heal)", borderColor: "rgba(0,212,200,0.12)", glowColor: "rgba(0,212,200,0.1)", bgMuted: "rgba(0,212,200,0.04)" },
  { key: "indulge", icon: Crown, labelKey: "moods.indulge.label", descKey: "moods.indulge.description", color: "var(--joy)", borderColor: "rgba(255,214,10,0.12)", glowColor: "rgba(255,214,10,0.1)", bgMuted: "rgba(255,214,10,0.04)" },
];

export default function HomePage() {
  const t = useTranslations();
  const locale = useLocale();
  const trending = getTrendingProducts();
  const featured = getFeaturedProducts();

  return (
    <div className="min-h-screen flex flex-col page-enter">
      <Header />

      {/* ── Hero — pure typography drama ── */}
      <section className="relative flex flex-col items-center justify-center px-4 pt-28 sm:pt-40 pb-20 overflow-hidden">
        <GlimmerParticles count={20} className="absolute inset-0 opacity-30" />

        <div className="relative z-10 flex flex-col items-center text-center max-w-4xl">
          {/* Brand badge */}
          <div className="animate-fade-up flex items-center gap-2 mb-8 px-4 py-1.5 rounded-full border border-brand/15 bg-brand-subtle">
            <span className="size-1.5 rounded-full bg-brand animate-pulse" />
            <span className="text-[10px] tracking-[0.3em] uppercase font-semibold text-brand">Dopamine Hub</span>
          </div>

          {/* Main headline */}
          <h1 className="animate-fade-up font-display font-black text-5xl sm:text-6xl lg:text-7xl text-text-0 leading-[0.95] tracking-tight" style={{ animationDelay: "0.1s" }}>
            Mood is<br />
            <span className="text-gradient-brand">currency.</span>
          </h1>

          {/* Subtitle */}
          <p className="animate-fade-up mt-8 text-base sm:text-lg text-text-1 max-w-md leading-relaxed" style={{ animationDelay: "0.25s" }}>
            Not what you buy. How you feel when you browse. Pick a mood. Enter a world.
          </p>

          {/* Mood cards — subtle, below hero */}
          <div className="animate-fade-up grid grid-cols-3 gap-3 mt-12 w-full max-w-lg" style={{ animationDelay: "0.4s" }}>
            {moodDefs.map((mood) => (
              <Link key={mood.key} href={`/${locale}/channel/luxury/browse/${mood.key}`}>
                <div className="group flex flex-col items-center gap-2 p-4 rounded-2xl border border-transparent hover:border-white/[0.06] bg-bg-secondary/50 hover:bg-bg-tertiary transition-all duration-500 cursor-pointer">
                  <div className="size-12 rounded-xl flex items-center justify-center transition-transform duration-500 group-hover:scale-110" style={{ backgroundColor: mood.bgMuted }}>
                    <mood.icon className="size-5" style={{ color: mood.color }} />
                  </div>
                  <span className="text-xs font-display font-bold text-text-1 group-hover:text-text-0 transition-colors duration-300">
                    {t(mood.labelKey)}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Trending — bento grid ── */}
      <section className="relative px-4 sm:px-8 max-w-7xl mx-auto w-full pb-16">
        <div className="flex items-end justify-between mb-10">
          <div>
            <span className="text-[10px] tracking-[0.25em] uppercase text-text-3 mb-3 block">Trending</span>
            <h2 className="text-3xl sm:text-4xl font-display font-black text-text-0 tracking-tight">What they're<br />watching.</h2>
          </div>
          <Link href={`/${locale}/channel/luxury/browse/boost`} className="hidden sm:flex items-center gap-1.5 text-sm text-text-2 hover:text-brand transition-colors duration-200">
            View all <ArrowRight className="size-3.5" />
          </Link>
        </div>

        {/* Bento grid — asymmetric */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {/* Large hero card */}
          {trending[0] && (
            <Link href={`/${locale}/channel/luxury/product/${trending[0].slug}`} className="sm:col-span-2 sm:row-span-2 card-luxury group relative rounded-2xl overflow-hidden bg-bg-secondary border border-border-subtle">
              <div className="absolute inset-0">
                <img src={trending[0].images[0]} alt={trending[0].name} className="size-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-bg-primary via-bg-primary/20 to-transparent" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                {trending[0].badge && <Badge variant={trending[0].badge.variant}>{trending[0].badge.label}</Badge>}
                <span className="block text-[11px] text-text-2 uppercase tracking-wider mt-3">{trending[0].brand}</span>
                <h3 className="text-xl font-display font-bold text-text-0 mt-1 leading-tight">{trending[0].name}</h3>
                <div className="flex items-center gap-3 mt-3">
                  <span className="text-lg font-display font-black text-text-0">{trending[0].price}</span>
                  <div className="flex items-center gap-1 text-sm text-text-2">
                    <Star className="size-3.5 text-joy fill-joy" />{trending[0].rating}
                  </div>
                </div>
              </div>
            </Link>
          )}

          {/* Secondary cards */}
          {trending.slice(1, 5).map((p, i) => (
            <Link key={p.slug} href={`/${locale}/channel/luxury/product/${p.slug}`}
              className="card-luxury group relative rounded-2xl overflow-hidden bg-bg-secondary border border-border-subtle"
              style={{ animation: "fade-up 0.5s var(--ease-out-expo) both", animationDelay: `${0.3 + i * 0.06}s` }}>
              <div className="aspect-[4/5] overflow-hidden">
                <img src={p.images[0]} alt={p.name} className="size-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-bg-primary/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <span className="text-[10px] text-text-2 uppercase tracking-wider">{p.brand}</span>
                <p className="text-sm font-medium text-text-0 mt-0.5 line-clamp-1">{p.name}</p>
                <div className="flex items-center justify-between mt-2">
                  <span className="text-sm font-display font-bold text-text-0">{p.price}</span>
                  {p.viewers && <span className="text-[10px] text-text-3 flex items-center gap-1"><Eye className="size-3" />{p.viewers}</span>}
                </div>
              </div>
              {p.badge && <div className="absolute top-3 left-3"><Badge variant={p.badge.variant}>{p.badge.label}</Badge></div>}
            </Link>
          ))}
        </div>

        <div className="mt-8 flex sm:hidden justify-center">
          <Link href={`/${locale}/channel/luxury/browse/boost`} className="text-sm text-brand hover:underline">View all trending →</Link>
        </div>
      </section>

      {/* ── Channels ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 w-full pb-8"><div className="section-divider" /></div>
      <section className="relative px-4 sm:px-8 max-w-7xl mx-auto w-full pb-12">
        <span className="text-[10px] tracking-[0.25em] uppercase text-text-3 mb-8 block text-center">More Worlds</span>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 stagger">
          {channels.map((ch) => {
            const Icon = iconMap[ch.icon];
            return <Link key={ch.id} href={`/${locale}/${ch.route}`}><div className="card-luxury"><ChannelCard icon={Icon} name={t(ch.nameKey)} description={t(ch.descriptionKey)} color={ch.color} glowColor={ch.glowColor} bgMuted={ch.bgMuted} /></div></Link>;
          })}
        </div>
      </section>

      {/* ── Just Dropped ── */}
      <section className="relative px-4 sm:px-8 max-w-7xl mx-auto w-full pb-24">
        <div className="flex items-end justify-between mb-10">
          <div>
            <span className="text-[10px] tracking-[0.25em] uppercase text-text-3 mb-3 block">New Arrivals</span>
            <h2 className="text-3xl sm:text-4xl font-display font-black text-text-0 tracking-tight">Just dropped.</h2>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {featured.map((p, i) => (
            <Link key={p.slug} href={`/${locale}/channel/luxury/product/${p.slug}`}
              className="card-luxury group relative rounded-2xl overflow-hidden bg-bg-secondary border border-border-subtle"
              style={{ animation: "fade-up 0.5s var(--ease-out-expo) both", animationDelay: `${0.2 + i * 0.06}s` }}>
              <div className="aspect-[4/3] overflow-hidden">
                <img src={p.images[0]} alt={p.name} className="size-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
              </div>
              <div className="p-5">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-[11px] text-text-2 uppercase tracking-wider">{p.brand}</span>
                  <div className="flex items-center gap-1 text-xs text-text-3"><Star className="size-3 text-joy fill-joy" />{p.rating}</div>
                </div>
                <h3 className="text-sm font-medium text-text-0 line-clamp-1">{p.name}</h3>
                <div className="flex items-baseline gap-2 mt-2">
                  <span className="text-base font-display font-bold text-text-0">{p.price}</span>
                  {p.originalPrice && <span className="text-xs text-text-3 line-through">{p.originalPrice}</span>}
                </div>
                {p.stock && p.stock <= 3 && (
                  <p className="text-[10px] text-alert mt-2">Only {p.stock} left</p>
                )}
              </div>
              {p.badge && <div className="absolute top-3 left-3"><Badge variant={p.badge.variant}>{p.badge.label}</Badge></div>}
            </Link>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
