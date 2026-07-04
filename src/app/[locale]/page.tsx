"use client";

import Link from "next/link";
import { Zap, Heart, Crown, Star, Eye } from "lucide-react";
import { useTranslations, useLocale } from "next-intl";
import { motion } from "framer-motion";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { GlimmerParticles } from "@/components/brand/GlimmerParticles";
import { MoodCard } from "@/components/brand/MoodCard";
import { ChannelCard } from "@/components/channel/ChannelCard";
import { Badge } from "@/components/brand/Badge";
import { channels, iconMap } from "@/data/channels";
import { getFeaturedProducts, getTrendingProducts, products } from "@/data/products";

const moodDefs = [
  { key: "boost", icon: Zap, labelKey: "moods.boost.label", descKey: "moods.boost.description", color: "var(--brand)", borderColor: "rgba(255,59,92,0.15)", glowColor: "rgba(255,59,92,0.15)", bgMuted: "rgba(255,59,92,0.08)" },
  { key: "heal", icon: Heart, labelKey: "moods.heal.label", descKey: "moods.heal.description", color: "var(--heal)", borderColor: "rgba(0,212,200,0.15)", glowColor: "rgba(0,212,200,0.15)", bgMuted: "rgba(0,212,200,0.08)" },
  { key: "indulge", icon: Crown, labelKey: "moods.indulge.label", descKey: "moods.indulge.description", color: "var(--joy)", borderColor: "rgba(255,214,10,0.15)", glowColor: "rgba(255,214,10,0.15)", bgMuted: "rgba(255,214,10,0.08)" },
];

export default function HomePage() {
  const t = useTranslations();
  const locale = useLocale();
  const trending = getTrendingProducts();
  const featured = getFeaturedProducts();

  return (
    <div className="min-h-screen flex flex-col page-enter">
      <Header />

      {/* Hero — emotional gateway */}
      <section className="relative flex flex-col items-center justify-center px-4 pt-24 sm:pt-36 pb-16 overflow-hidden">
        <GlimmerParticles count={35} className="absolute inset-0" />
        <motion.div initial={{ opacity: 0, y: 32 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }} className="relative z-10 flex flex-col items-center text-center max-w-3xl">
          <span className="text-[11px] tracking-[0.25em] uppercase font-medium mb-5 px-4 py-1.5 rounded-full border border-brand/20 bg-brand-muted" style={{ color: "var(--brand)" }}>
            {t("home.badge")}
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-black text-text-primary text-balance leading-[1.08] tracking-tight">
            {t("home.title")}{" "}<span className="text-gradient-brand">{t("home.titleHighlight")}</span><br />{t("home.titleEnd")}
          </h1>
          <p className="mt-6 text-base sm:text-lg text-text-secondary max-w-lg text-balance leading-relaxed">{t("home.subtitle")}</p>
        </motion.div>
      </section>

      {/* Mood Cards */}
      <section className="relative px-4 sm:px-6 max-w-3xl mx-auto w-full pb-8 stagger">
        {moodDefs.map((mood) => (
          <Link key={mood.key} href={`/${locale}/channel/luxury/browse/${mood.key}`}>
            <div className="card-magnetic"><MoodCard icon={mood.icon} label={t(mood.labelKey)} description={t(mood.descKey)} color={mood.color} borderColor={mood.borderColor} glowColor={mood.glowColor} bgMuted={mood.bgMuted} /></div>
          </Link>
        ))}
      </section>

      {/* Trending Now — Most Viewed */}
      <section className="relative px-4 sm:px-6 max-w-7xl mx-auto w-full pb-12">
        <div className="flex items-center justify-between mb-8">
          <div>
            <span className="text-[10px] tracking-[0.2em] uppercase text-text-muted block mb-2">Trending Now</span>
            <h2 className="text-2xl font-display font-bold text-text-primary">🔥 Everyone's Watching</h2>
          </div>
          <Link href={`/${locale}/channel/luxury/browse/boost`} className="text-sm text-brand hover:text-brand-hover transition-colors">View all →</Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {trending.map((p, i) => (
            <Link key={p.slug} href={`/${locale}/channel/luxury/product/${p.slug}`}>
              <div className="group relative rounded-2xl overflow-hidden bg-bg-surface border border-border-subtle transition-all duration-400 hover:-translate-y-1 hover:border-white/10"
                style={{ animation: "fade-up 0.5s cubic-bezier(0.16, 1, 0.3, 1) both", animationDelay: `${i * 60}ms` }}>
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img src={p.images[0]} alt={p.name} className="size-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
                  {p.badge && <div className="absolute top-3 left-3"><Badge variant={p.badge.variant}>{p.badge.label}</Badge></div>}
                  <div className="absolute bottom-3 left-3 flex items-center gap-1 text-[11px] text-white/80 bg-black/40 backdrop-blur rounded-full px-2.5 py-1">
                    <Eye className="size-3" /> {p.viewers} viewing
                  </div>
                </div>
                <div className="p-4">
                  <span className="text-[11px] text-text-muted uppercase tracking-wider">{p.brand}</span>
                  <div className="flex items-center gap-1.5 mt-0.5">
                    <Star className="size-3 text-joy fill-joy" /><span className="text-[11px] text-text-muted">{p.rating} ({p.reviews})</span>
                  </div>
                  <h3 className="text-sm font-medium text-text-primary mt-1.5 line-clamp-1">{p.name}</h3>
                  <div className="flex items-baseline gap-2 mt-1.5">
                    <span className="text-base font-display font-bold text-text-primary">{p.price}</span>
                    {p.originalPrice && <span className="text-xs text-text-muted line-through">{p.originalPrice}</span>}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Channels */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 w-full pb-4"><div className="section-divider" /></div>
      <section className="relative px-4 sm:px-6 max-w-5xl mx-auto w-full pb-12">
        <div className="text-center mb-8"><span className="text-[10px] tracking-[0.2em] uppercase text-text-muted">{t("home.pickChannel")}</span></div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 stagger">
          {channels.map((ch) => {
            const Icon = iconMap[ch.icon];
            return <Link key={ch.id} href={`/${locale}/${ch.route}`}><div className="card-magnetic"><ChannelCard icon={Icon} name={t(ch.nameKey)} description={t(ch.descriptionKey)} color={ch.color} glowColor={ch.glowColor} bgMuted={ch.bgMuted} /></div></Link>;
          })}
        </div>
      </section>

      {/* Featured — Just Dropped */}
      <section className="relative px-4 sm:px-6 max-w-7xl mx-auto w-full pb-24">
        <div className="flex items-center justify-between mb-8">
          <div>
            <span className="text-[10px] tracking-[0.2em] uppercase text-text-muted block mb-2">New Arrivals</span>
            <h2 className="text-2xl font-display font-bold text-text-primary">✨ Just Dropped</h2>
          </div>
          <Link href={`/${locale}/channel/luxury/category/all`} className="text-sm text-brand hover:text-brand-hover transition-colors">View all →</Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {featured.map((p, i) => (
            <Link key={p.slug} href={`/${locale}/channel/luxury/product/${p.slug}`}>
              <div className="group relative rounded-2xl overflow-hidden bg-bg-surface border border-border-subtle transition-all duration-400 hover:-translate-y-1 hover:border-white/10"
                style={{ animation: "fade-up 0.5s cubic-bezier(0.16, 1, 0.3, 1) both", animationDelay: `${i * 60}ms` }}>
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img src={p.images[0]} alt={p.name} className="size-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
                  {p.badge && <div className="absolute top-3 left-3"><Badge variant={p.badge.variant}>{p.badge.label}</Badge></div>}
                  {p.stock !== undefined && p.stock <= 3 && p.stock > 0 && (
                    <div className="absolute top-3 right-3 text-[10px] font-medium text-alert bg-bg-primary/90 backdrop-blur rounded-full px-2.5 py-1">Only {p.stock} left</div>
                  )}
                </div>
                <div className="p-4">
                  <span className="text-[11px] text-text-muted uppercase tracking-wider">{p.brand}</span>
                  <h3 className="text-sm font-medium text-text-primary mt-1.5 line-clamp-1">{p.name}</h3>
                  <div className="flex items-baseline gap-2 mt-1.5">
                    <span className="text-base font-display font-bold text-text-primary">{p.price}</span>
                    {p.originalPrice && <span className="text-xs text-text-muted line-through">{p.originalPrice}</span>}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
