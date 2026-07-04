"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";
import { ChevronLeft, Star, Eye, Sparkles } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { GlimmerDot } from "@/components/brand/GlimmerDot";
import { BrandButton } from "@/components/brand/BrandButton";
import { getFoodByMood, foodItems } from "@/data/channel/food";

const moodMeta: Record<string, { title: string; desc: string; accent: string }> = {
  boost: { title: "能量美食", desc: "辣、香、重口。吃完就想出门干翻世界。", accent: "var(--brand)" },
  heal: { title: "治愈美食", desc: "温热、甜蜜、柔软。一口下去，世界都安静了。", accent: "var(--heal)" },
  indulge: { title: "犒赏美食", desc: "米其林、和牛、Omakase。你值得。", accent: "var(--joy)" },
};

export default function FoodBrowsePage() {
  const { mood } = useParams<{ mood: string }>();
  const t = useTranslations();
  const locale = useLocale();
  const meta = moodMeta[mood] || moodMeta.boost;
  const products = getFoodByMood(mood);
  const hero = products[0];

  return (
    <div className="min-h-screen flex flex-col page-enter">
      <Header />
      <main className="flex-1">
        <section className="relative px-4 sm:px-8 pt-12 pb-8" style={{ background: `linear-gradient(180deg, ${meta.accent}08 0%, transparent 100%)` }}>
          <div className="max-w-7xl mx-auto">
            <Link href={`/${locale}/channel/food`} className="inline-flex items-center gap-1 text-sm text-text-2 hover:text-text-0 transition-colors mb-8">
              <ChevronLeft className="size-3.5" />{t("browse.back")}
            </Link>
            <div className="flex items-center gap-3 mb-3">
              <GlimmerDot size={8} color={meta.accent} mode="breathe" />
              <h1 className="text-3xl sm:text-4xl font-display font-black text-text-0 tracking-tight">{meta.title}</h1>
            </div>
            <p className="text-text-1 text-lg max-w-xl">{meta.desc}</p>
            <p className="text-text-3 text-sm mt-3">{products.length} 件 · 今日更新</p>
          </div>
        </section>

        <section className="px-4 sm:px-8 py-8 max-w-7xl mx-auto w-full">
          {products.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-24"><Sparkles className="size-12 opacity-30 mb-4" /><p className="text-lg text-text-3">暂无美食</p></div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {hero && (
                <Link href="#" className="lg:col-span-2 card-luxury group relative rounded-2xl overflow-hidden bg-bg-secondary border border-border-subtle animate-fade-up">
                  <div className="relative aspect-[21/9] overflow-hidden">
                    <img src={hero.image} alt={hero.name} className="size-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
                    <div className="absolute inset-0 bg-gradient-to-t from-bg-primary/70 via-transparent to-transparent" />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <span className="text-[11px] text-text-2 uppercase tracking-wider">{hero.restaurant}</span>
                    <h2 className="text-xl sm:text-2xl font-display font-bold text-text-0 mt-1">{hero.name}</h2>
                    <div className="flex items-center gap-3 mt-3">
                      <span className="text-xl font-display font-black text-text-0">{hero.price}</span>
                      <span className="text-sm text-text-2"><Star className="size-3.5 text-joy fill-joy inline" />{hero.rating}</span>
                      {hero.deliveryTime && <span className="text-xs text-text-3">🚀 {hero.deliveryTime}</span>}
                    </div>
                  </div>
                </Link>
              )}
              {products.slice(1).map((p, i) => (
                <Link key={p.slug} href="#" className="card-luxury group relative rounded-2xl overflow-hidden bg-bg-secondary border border-border-subtle"
                  style={{ animation: "fade-up 0.5s var(--ease-out-expo) both", animationDelay: `${0.2 + i * 0.06}s` }}>
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
                    {p.tags && <div className="flex gap-1.5 mt-2">{p.tags.slice(0, 2).map((t) => <span key={t} className="text-[10px] text-text-3 bg-bg-primary/50 rounded-full px-2 py-0.5">{t}</span>)}</div>}
                    {p.deliveryTime && <p className="text-[10px] text-heal mt-1.5">⚡{p.deliveryTime}</p>}
                  </div>
                  {p.viewers && p.viewers > 100 && (
                    <div className="absolute top-3 right-3 text-[10px] font-medium text-joy bg-bg-primary/90 backdrop-blur rounded-full px-2.5 py-1">🔥{p.viewers}在看</div>
                  )}
                </Link>
              ))}
            </div>
          )}
          <div className="flex justify-center mt-12 pb-8">
            <BrandButton variant="dopamine" size="lg" showGlimmer><Sparkles className="size-4" />加载更多</BrandButton>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
