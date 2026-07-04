"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";
import { ChevronLeft, Star, Eye, Sparkles } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { GlimmerDot } from "@/components/brand/GlimmerDot";
import { Badge } from "@/components/brand/Badge";
import { BrandButton } from "@/components/brand/BrandButton";
import { getProductsByMood } from "@/data/products";

export default function BrowseMoodPage() {
  const { mood } = useParams<{ mood: string }>();
  const t = useTranslations();
  const locale = useLocale();

  const accentMap: Record<string, string> = { boost: "var(--brand)", heal: "var(--heal)", indulge: "var(--joy)" };
  const accent = accentMap[mood] || "var(--brand)";
  const products = getProductsByMood(mood);
  const heroProduct = products[0];
  const gridProducts = products.slice(1);

  const modeTitle = mood === "boost" ? t("browse.boostMode") : mood === "heal" ? t("browse.healMode") : t("browse.indulgeMode");
  const modeDesc = mood === "boost" ? t("browse.boostDesc") : mood === "heal" ? t("browse.healDesc") : t("browse.indulgeDesc");

  return (
    <div className="min-h-screen flex flex-col page-enter">
      <Header />
      <main className="flex-1">
        <section className="relative px-4 sm:px-8 pt-12 pb-8" style={{ background: `linear-gradient(180deg, ${accent}05 0%, transparent 100%)` }}>
          <div className="max-w-7xl mx-auto">
            <Link href={`/${locale}`} className="inline-flex items-center gap-1 text-sm text-text-2 hover:text-text-0 transition-colors mb-8">
              <ChevronLeft className="size-3.5" />{t("browse.back")}
            </Link>
            <div className="flex items-center gap-3 mb-3">
              <GlimmerDot size={8} color={accent} mode="breathe" />
              <h1 className="text-3xl sm:text-4xl font-display font-black text-text-0 tracking-tight">{modeTitle}</h1>
            </div>
            <p className="text-text-1 text-lg max-w-xl">{modeDesc}</p>
            <p className="text-text-3 text-sm mt-3">{products.length} {t("browse.pieces")}</p>
          </div>
        </section>

        <section className="px-4 sm:px-8 py-8 max-w-7xl mx-auto w-full">
          {products.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-24 text-text-3">
              <Sparkles className="size-12 mb-4 opacity-30" />
              <p className="text-lg">{t("browse.empty")}</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {heroProduct && (
                <Link href={`/${locale}/channel/luxury/product/${heroProduct.slug}`} className="lg:col-span-2 card-luxury group relative rounded-2xl overflow-hidden bg-bg-secondary border border-border-subtle animate-fade-up">
                  <div className="relative aspect-[16/9] lg:aspect-[21/9] overflow-hidden">
                    <img src={heroProduct.images[0]} alt={heroProduct.name} className="size-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
                    <div className="absolute inset-0 bg-gradient-to-t from-bg-primary/70 via-transparent to-transparent" />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    {heroProduct.badge && <Badge variant={heroProduct.badge.variant}>{heroProduct.badge.label}</Badge>}
                    <span className="block text-[11px] text-text-2 uppercase tracking-wider mt-3">{heroProduct.brand}</span>
                    <h2 className="text-xl sm:text-2xl font-display font-bold text-text-0 mt-1">{heroProduct.name}</h2>
                    <div className="flex items-center gap-3 mt-3">
                      <span className="text-xl font-display font-black text-text-0">{heroProduct.price}</span>
                      {heroProduct.originalPrice && <span className="text-sm text-text-3 line-through">{heroProduct.originalPrice}</span>}
                      <span className="text-sm text-text-2"><Star className="size-3.5 text-joy fill-joy inline" />{heroProduct.rating}</span>
                      {heroProduct.viewers && <span className="text-xs text-text-3"><Eye className="size-3 inline mr-1" />{heroProduct.viewers}</span>}
                    </div>
                  </div>
                  {heroProduct.stock != null && heroProduct.stock <= 3 && heroProduct.stock > 0 && (
                    <div className="absolute top-4 right-4 text-[10px] font-medium text-alert bg-bg-primary/90 backdrop-blur rounded-full px-3 py-1">{t("browse.onlyLeft", { count: heroProduct.stock })}</div>
                  )}
                </Link>
              )}
              {gridProducts.map((p, i) => (
                <Link key={p.slug} href={`/${locale}/channel/luxury/product/${p.slug}`}
                  className="card-luxury group relative rounded-2xl overflow-hidden bg-bg-secondary border border-border-subtle"
                  style={{ animation: "fade-up 0.5s var(--ease-out-expo) both", animationDelay: `${0.2 + i * 0.06}s` }}>
                  <div className="aspect-[4/5] overflow-hidden">
                    <img src={p.images[0]} alt={p.name} className="size-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-bg-secondary via-bg-secondary/90 to-transparent">
                    <span className="text-[10px] text-text-2 uppercase tracking-wider">{p.brand}</span>
                    <p className="text-sm font-medium text-text-0 mt-0.5 line-clamp-1">{p.name}</p>
                    <div className="flex items-center justify-between mt-2">
                      <span className="text-sm font-display font-bold text-text-0">{p.price}</span>
                      <span className="text-xs text-text-3"><Star className="size-3 text-joy fill-joy inline" />{p.rating}</span>
                    </div>
                    {p.tags && <div className="flex gap-1.5 mt-2">{p.tags.slice(0, 2).map((tag) => <span key={tag} className="text-[10px] text-text-3 bg-bg-primary/50 rounded-full px-2 py-0.5">{tag}</span>)}</div>}
                  </div>
                  {p.badge && <div className="absolute top-3 left-3"><Badge variant={p.badge.variant}>{p.badge.label}</Badge></div>}
                  {p.stock != null && p.stock <= 3 && p.stock > 0 && (
                    <div className="absolute top-3 right-3 text-[10px] font-medium text-alert bg-bg-primary/90 backdrop-blur rounded-full px-2.5 py-1">{t("browse.onlyLeft", { count: p.stock })}</div>
                  )}
                </Link>
              ))}
            </div>
          )}
          <div className="flex justify-center mt-12 pb-8">
            <BrandButton variant="dopamine" size="lg" showGlimmer><Sparkles className="size-4" />{t("browse.loadMore")}</BrandButton>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
