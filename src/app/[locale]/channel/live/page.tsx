"use client";

import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";
import { Radio, Zap, Heart, Crown, Eye, Flame, Clock, Sparkles } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { GlimmerParticles } from "@/components/brand/GlimmerParticles";
import { BrandButton } from "@/components/brand/BrandButton";
import { Badge } from "@/components/brand/Badge";
import { liveItems } from "@/data/channel/live";

export default function LiveChannelPage() {
  const t = useTranslations();
  const locale = useLocale();
  const hot = liveItems.filter((l) => l.viewers > 25000).sort((a, b) => b.viewers - a.viewers);
  const all = liveItems;

  return (
    <div className="min-h-screen flex flex-col page-enter">
      <Header />
      <main className="flex-1">
        {/* Hero — LIVE energy */}
        <section className="relative flex flex-col items-center justify-center px-4 pt-20 sm:pt-28 pb-10 overflow-hidden">
          <GlimmerParticles count={25} className="absolute inset-0 opacity-25" />
          <div className="relative z-10 flex flex-col items-center text-center max-w-2xl">
            <div className="flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full border border-joy/20 bg-joy-subtle animate-fade-up">
              <span className="size-2 rounded-full bg-joy animate-pulse" />
              <span className="text-[10px] tracking-[0.3em] uppercase font-semibold text-joy">🔴 LIVE</span>
            </div>
            <h1 className="animate-fade-up font-display font-black text-5xl sm:text-6xl text-text-0 leading-[0.95] tracking-tight" style={{ animationDelay: "0.1s" }}>
              <span className="block">3—2—1</span>
              <span className="text-gradient-joy">上链接！</span>
            </h1>
            <p className="animate-fade-up mt-6 text-text-1 max-w-md" style={{ animationDelay: "0.2s" }}>
              李佳琦、小杨哥、董先生...假装在直播间疯狂抢购。肾上腺素是真的。
            </p>
          </div>
        </section>

        {/* 🔴 LIVE NOW — Hot streams */}
        <section className="px-4 sm:px-8 max-w-7xl mx-auto w-full pb-12">
          <div className="flex items-center gap-3 mb-8">
            <span className="size-2.5 rounded-full bg-brand animate-pulse" />
            <h2 className="text-2xl font-display font-bold text-text-0">正在直播 · {hot.length}场</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {hot.map((live, i) => (
              <Link key={live.slug} href="#" className="card-luxury group relative rounded-2xl overflow-hidden bg-bg-secondary border border-border-subtle"
                style={{ animation: "fade-up 0.5s var(--ease-out-expo) both", animationDelay: `${i * 0.08}s` }}>
                <div className="relative aspect-video overflow-hidden">
                  <img src={live.image} alt={live.title} className="size-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-bg-primary/60 via-transparent to-transparent" />
                  {/* LIVE badge */}
                  <div className="absolute top-3 left-3 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-brand text-[10px] font-bold text-white animate-pulse">
                    <span className="size-1.5 rounded-full bg-white" />LIVE
                  </div>
                  {/* Viewers */}
                  <div className="absolute top-3 right-3 flex items-center gap-1 text-[10px] text-white/90 bg-black/50 backdrop-blur rounded-full px-2.5 py-1">
                    <Eye className="size-3" />{(live.viewers / 1000).toFixed(1)}K
                  </div>
                </div>
                <div className="p-4">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-[10px] text-text-2 uppercase tracking-wider">{live.streamer}</span>
                    {live.countdown && (
                      <span className="flex items-center gap-1 text-[10px] text-alert"><Clock className="size-3" />{Math.floor(live.countdown / 60)}:{String(live.countdown % 60).padStart(2, '0')}</span>
                    )}
                  </div>
                  <p className="text-sm font-medium text-text-0 line-clamp-1">{live.title}</p>
                  <div className="flex items-center justify-between mt-2">
                    <div>
                      <span className="text-base font-display font-bold text-text-0">{live.price}</span>
                      {live.originalPrice && <span className="text-xs text-text-3 line-through ml-1.5">{live.originalPrice}</span>}
                    </div>
                    <span className="text-[10px] text-text-3">已售{live.sales.toLocaleString()}</span>
                  </div>
                  {live.stock > 0 && live.stock <= 10 && (
                    <p className="text-[10px] text-alert mt-2">⚡仅剩{live.stock}件</p>
                  )}
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* All live streams */}
        <section className="px-4 sm:px-8 max-w-7xl mx-auto w-full pb-20">
          <h2 className="text-xl font-display font-bold text-text-0 mb-6">全部直播间</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {all.map((live, i) => (
              <Link key={live.slug} href="#" className="card-luxury group relative rounded-2xl overflow-hidden bg-bg-secondary border border-border-subtle"
                style={{ animation: "fade-up 0.5s var(--ease-out-expo) both", animationDelay: `${i * 0.05}s` }}>
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img src={live.image} alt={live.title} className="size-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
                  {live.viewers > 30000 && (
                    <div className="absolute top-2 left-2 flex items-center gap-1 px-2 py-0.5 rounded-full bg-brand text-[9px] font-bold text-white">LIVE</div>
                  )}
                </div>
                <div className="p-3">
                  <span className="text-[10px] text-text-2">{live.streamer}</span>
                  <p className="text-xs text-text-0 mt-0.5 line-clamp-1">{live.title}</p>
                  <div className="flex items-center justify-between mt-1.5">
                    <span className="text-sm font-display font-bold text-text-0">{live.price}</span>
                    <span className="text-[10px] text-text-3"><Eye className="size-3 inline" />{(live.viewers / 1000).toFixed(1)}K</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div className="flex justify-center mt-10">
            <BrandButton variant="dopamine" size="lg" showGlimmer><Sparkles className="size-4" />加载更多直播间</BrandButton>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
