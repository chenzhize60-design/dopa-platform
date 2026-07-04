"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";
import { ChevronLeft, Sparkles, Star, Eye, Heart } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { GlimmerDot } from "@/components/brand/GlimmerDot";
import { Badge } from "@/components/brand/Badge";
import { BrandButton } from "@/components/brand/BrandButton";
import { getProductsByMood, moods } from "@/data/products";

export default function BrowseMoodPage() {
  const { mood } = useParams<{ mood: string }>();
  const t = useTranslations();
  const locale = useLocale();

  const moodData = moods.find((m) => m.id === mood);
  const moodProducts = getProductsByMood(mood);

  const moodMeta: Record<string, { title: string; desc: string; gradient: string }> = {
    boost: { title: "Power Mode", desc: "Bold pieces that command attention. Energy you can wear.", gradient: "from-brand/5 to-transparent" },
    heal: { title: "Healing Mode", desc: "Soft textures and calming beauty. A sanctuary for your senses.", gradient: "from-heal/5 to-transparent" },
    indulge: { title: "Indulgence Mode", desc: "The extraordinary. Because you deserve nothing less.", gradient: "from-joy/5 to-transparent" },
  };
  const meta = moodMeta[mood] || { title: mood, desc: "", gradient: "from-transparent to-transparent" };

  return (
    <div className="min-h-screen flex flex-col page-enter">
      <Header />
      <main className="flex-1">
        {/* Mood Hero */}
        <section className="relative px-4 sm:px-6 pt-12 pb-8 overflow-hidden" style={{ background: `linear-gradient(180deg, ${moodData?.color || "var(--brand)"}08 0%, transparent 100%)` }}>
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center gap-1.5 text-sm text-text-secondary hover:text-text-primary mb-8">
              <Link href={`/${locale}`} className="inline-flex items-center gap-1 transition-colors duration-150 hover:text-brand">
                <ChevronLeft className="size-3.5" />{t("browse.back")}
              </Link>
            </div>
            <div className="flex items-center gap-3 mb-3">
              <GlimmerDot size={10} color={moodData?.color || "var(--brand)"} mode="breathe" />
              <h1 className="text-3xl sm:text-4xl font-display font-black text-text-primary tracking-tight">{meta.title}</h1>
            </div>
            <p className="text-text-secondary text-lg max-w-lg">{meta.desc}</p>
            <div className="flex items-center gap-3 mt-4 text-sm text-text-muted">
              <span>{moodProducts.length} pieces curated</span>
              <span>·</span>
              <span>Updated today</span>
            </div>
          </div>
        </section>

        {/* Product Grid — magazine layout */}
        <section className="px-4 sm:px-6 py-8 max-w-7xl mx-auto w-full">
          {moodProducts.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-24 text-text-muted">
              <Sparkles className="size-12 mb-4 opacity-40" />
              <p className="text-lg">No products for this mood yet.</p>
              <Link href={`/${locale}`} className="mt-4 text-sm text-brand hover:underline">Back to moods</Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
              {moodProducts.map((product, i) => (
                <Link key={product.slug} href={`/${locale}/channel/luxury/product/${product.slug}`}>
                  <div
                    className="group relative rounded-2xl overflow-hidden bg-bg-surface border border-border-subtle transition-all duration-400 hover:-translate-y-1 hover:border-white/10"
                    style={{ animationDelay: `${i * 50}ms`, animation: "fade-up 0.5s cubic-bezier(0.16, 1, 0.3, 1) both" }}
                  >
                    {/* Image */}
                    <div className="relative aspect-[3/4] overflow-hidden">
                      <img src={product.images[0]} alt={product.name} className="size-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
                      {/* Badge */}
                      {product.badge && (
                        <div className="absolute top-3 left-3"><Badge variant={product.badge.variant}>{product.badge.label}</Badge></div>
                      )}
                      {/* Quick add on hover */}
                      <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                        <div className="size-10 rounded-full bg-bg-primary/90 backdrop-blur border border-white/10 flex items-center justify-center shadow-lg">
                          <Heart className="size-4 text-brand" />
                        </div>
                      </div>
                      {/* Viewers */}
                      {product.viewers && (
                        <div className="absolute bottom-3 left-3 flex items-center gap-1 text-[11px] text-white/70 bg-black/40 backdrop-blur rounded-full px-2.5 py-1">
                          <Eye className="size-3" />{product.viewers} viewing
                        </div>
                      )}
                      {/* Stock warning */}
                      {product.stock !== undefined && product.stock <= 3 && product.stock > 0 && (
                        <div className="absolute top-3 right-3 text-[10px] font-medium text-alert bg-bg-primary/90 backdrop-blur rounded-full px-2.5 py-1">
                          Only {product.stock} left
                        </div>
                      )}
                    </div>
                    {/* Info */}
                    <div className="p-4">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-[11px] text-text-muted uppercase tracking-wider font-medium">{product.brand}</span>
                        <div className="flex items-center gap-1 text-[11px] text-text-muted">
                          <Star className="size-3 text-joy fill-joy" />
                          {product.rating}
                        </div>
                      </div>
                      <h3 className="text-sm font-medium text-text-primary leading-snug line-clamp-2 mb-2">{product.name}</h3>
                      <div className="flex items-baseline gap-2">
                        <span className="text-base font-display font-bold text-text-primary">{product.price}</span>
                        {product.originalPrice && (
                          <span className="text-xs text-text-muted line-through">{product.originalPrice}</span>
                        )}
                      </div>
                      {product.tags && (
                        <div className="flex gap-1.5 mt-3 flex-wrap">
                          {product.tags.slice(0, 2).map((tag) => (
                            <span key={tag} className="text-[10px] text-text-muted bg-bg-elevated rounded-full px-2 py-0.5">{tag}</span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}

          {/* Bottom CTA */}
          <div className="flex justify-center mt-12 pb-8">
            <BrandButton variant="dopamine" size="lg" showGlimmer>
              <Sparkles className="size-4" />
              Load More Treasures
            </BrandButton>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
