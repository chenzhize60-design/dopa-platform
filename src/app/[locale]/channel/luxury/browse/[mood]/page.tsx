"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";
import { ChevronLeft, Star, Sparkles } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { GlimmerDot } from "@/components/brand/GlimmerDot";
import { Badge } from "@/components/brand/Badge";
import { BrandButton } from "@/components/brand/BrandButton";
import { getProductsByMood } from "@/data/products";

const accentMap: Record<string, string> = { boost: "var(--accent)", heal: "var(--cool)", indulge: "var(--warm)" };

export default function BrowseMoodPage() {
  const { mood } = useParams<{ mood: string }>();
  const t = useTranslations();
  const locale = useLocale();
  const accent = accentMap[mood] || "var(--accent)";
  const products = getProductsByMood(mood);
  const hero = products[0];
  const grid = products.slice(1);

  const titles: Record<string, string> = {
    boost: t("browse.boostMode"), heal: t("browse.healMode"), indulge: t("browse.indulgeMode"),
  };
  const descs: Record<string, string> = {
    boost: t("browse.boostDesc"), heal: t("browse.healDesc"), indulge: t("browse.indulgeDesc"),
  };

  return (
    <main className="overflow-x-hidden w-full max-w-full">
      <Header />
      <section className="section-cinema px-6 sm:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <Link href={`/${locale}`} className="inline-flex items-center gap-1.5 text-sm mb-12 transition-colors hover:opacity-80" style={{ color: "var(--t-low)" }}>
            <ChevronLeft className="size-3.5" />{t("browse.back")}
          </Link>
          <div className="flex items-center gap-3 mb-4">
            <GlimmerDot size={8} color={accent} mode="breathe" />
            <h1 className="h2-cinema text-[var(--t-high)]">{titles[mood] || mood}</h1>
          </div>
          <p className="text-lg mb-3" style={{ color: "var(--t-mid)", maxWidth: "36rem" }}>
            {descs[mood] || ""}
          </p>
          <p className="text-sm" style={{ color: "var(--t-low)" }}>{products.length} {t("browse.pieces")}</p>
        </div>
      </section>

      <section className="px-6 sm:px-12 lg:px-24 pb-24">
        <div className="max-w-7xl mx-auto">
          {products.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-32">
              <Sparkles className="size-12 mb-4" style={{ color: "var(--t-low)" }} />
              <p className="text-lg" style={{ color: "var(--t-low)" }}>{t("browse.empty")}</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {hero && (
                <Link href={`/${locale}/channel/luxury/product/${hero.slug}`} className="lg:col-span-2 card-cinema group cursor-pointer relative">
                  <div className="aspect-[21/9] overflow-hidden">
                    <img src={hero.images[0]} alt={hero.name} className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105" loading="lazy" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[var(--void)]/80 via-transparent to-transparent" />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    {hero.badge && <Badge variant={hero.badge.variant}>{hero.badge.label}</Badge>}
                    <span className="block text-xs uppercase tracking-wider mt-3" style={{ color: "var(--t-low)" }}>{hero.brand}</span>
                    <h2 className="text-2xl font-bold mt-1 text-[var(--t-high)]">{hero.name}</h2>
                    <div className="flex items-center gap-4 mt-3">
                      <span className="text-xl font-bold" style={{ color: "var(--accent)" }}>{hero.price}</span>
                      {hero.originalPrice && <span className="text-sm line-through" style={{ color: "var(--t-low)" }}>{hero.originalPrice}</span>}
                      <span className="text-sm" style={{ color: "var(--t-mid)" }}><Star className="size-3.5 inline" style={{ color: "var(--warm)" }} />{hero.rating}</span>
                    </div>
                  </div>
                </Link>
              )}
              {grid.map((p) => (
                <Link key={p.slug} href={`/${locale}/channel/luxury/product/${p.slug}`} className="card-cinema group cursor-pointer">
                  <div className="aspect-[4/5] overflow-hidden">
                    <img src={p.images[0]} alt={p.name} className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105" loading="lazy" />
                  </div>
                  <div className="p-5">
                    <span className="text-[11px] uppercase tracking-wider" style={{ color: "var(--t-low)" }}>{p.brand}</span>
                    <p className="text-sm font-medium mt-1 text-[var(--t-high)] line-clamp-1">{p.name}</p>
                    <div className="flex items-center justify-between mt-2">
                      <span className="text-sm font-bold" style={{ color: "var(--accent)" }}>{p.price}</span>
                      <span className="text-xs" style={{ color: "var(--t-mid)" }}><Star className="size-3 inline" style={{ color: "var(--warm)" }} />{p.rating}</span>
                    </div>
                    {p.tags && <div className="flex gap-1.5 mt-2">{p.tags.slice(0, 2).map((tag) => <span key={tag} className="text-[10px] rounded-full px-2 py-0.5" style={{ color: "var(--t-low)", background: "rgba(255,255,255,0.03)" }}>{tag}</span>)}</div>}
                    {p.stock != null && p.stock <= 3 && p.stock > 0 && <p className="text-[10px] font-medium mt-2" style={{ color: "var(--accent)" }}>{t("browse.onlyLeft", { count: p.stock })}</p>}
                  </div>
                  {p.badge && <div className="absolute top-3 left-3"><Badge variant={p.badge.variant}>{p.badge.label}</Badge></div>}
                </Link>
              ))}
            </div>
          )}
          <div className="flex justify-center mt-16">
            <BrandButton variant="coral" size="lg" showGlimmer><Sparkles className="size-4" />{t("browse.loadMore")}</BrandButton>
          </div>
        </div>
      </section>
    </main>
  );
}
