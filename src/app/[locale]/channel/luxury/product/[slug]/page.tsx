"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";
import { ChevronLeft, Star, Share2, Heart, ShoppingBag, Eye } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { BrandButton } from "@/components/brand/BrandButton";
import { Badge } from "@/components/brand/Badge";
import { products } from "@/data/products";

export default function ProductDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const t = useTranslations();
  const locale = useLocale();
  const product = products.find(p => p.slug === slug);
  const related = products.filter(p => p.slug !== slug && p.category === product?.category).slice(0, 4);

  if (!product) {
    return (
      <main className="overflow-x-hidden w-full max-w-full min-h-screen">
        <Header />
        <div className="flex flex-col items-center justify-center py-32">
          <p className="text-xl text-[var(--t-mid)] mb-4">{t("product.notFound")}</p>
          <Link href={`/${locale}`} className="text-sm font-bold hover:underline" style={{ color: "var(--accent)" }}>{t("product.returnHome")}</Link>
        </div>
        <Footer />
</main>
    );
  }

  return (
    <main className="overflow-x-hidden w-full max-w-full">
      <Header />
      <section className="px-6 sm:px-12 lg:px-24 pt-16 pb-8">
        <div className="max-w-7xl mx-auto">
          <Link href={`/${locale}/channel/luxury/browse/${product.mood}`} className="inline-flex items-center gap-1.5 text-sm mb-8 transition-colors hover:opacity-80" style={{ color: "var(--t-low)" }}>
            <ChevronLeft className="size-3.5" />{t("product.back")}
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Gallery */}
            <div className="space-y-4">
              <div className="aspect-[4/5] rounded-3xl overflow-hidden">
                <img src={product.images[0]} alt={product.name} className="w-full h-full object-cover" />
              </div>
              <div className="grid grid-cols-3 gap-3">
                {product.images.slice(1, 4).map((img, i) => (
                  <div key={i} className="aspect-square rounded-2xl overflow-hidden">
                    <img src={img} alt={`${product.name} ${i + 1}`} className="w-full h-full object-cover" loading="lazy" />
                  </div>
                ))}
              </div>
            </div>

            {/* Info */}
            <div>
              {product.badge && <Badge variant={product.badge.variant}>{product.badge.label}</Badge>}
              <span className="block text-xs uppercase tracking-wider mt-4" style={{ color: "var(--t-low)" }}>{product.brand}</span>
              <h1 className="h2-cinema text-[var(--t-high)] mt-2">{product.name}</h1>

              <div className="flex items-center gap-4 mt-6">
                <span className="text-3xl font-black" style={{ color: "var(--accent)" }}>{product.price}</span>
                {product.originalPrice && <span className="text-lg line-through" style={{ color: "var(--t-low)" }}>{product.originalPrice}</span>}
              </div>

              <div className="flex items-center gap-4 mt-4">
                <span className="text-sm" style={{ color: "var(--t-mid)" }}>
                  <Star className="size-4 inline" style={{ color: "var(--warm)" }} /> {product.rating} ({product.reviews} {t("product.reviews", { count: product.reviews })})
                </span>
                {product.viewers && <span className="text-sm" style={{ color: "var(--t-mid)" }}><Eye className="size-4 inline mr-1" />{t("product.viewingNow", { count: product.viewers })}</span>}
              </div>

              <p className="mt-6 leading-relaxed" style={{ color: "var(--t-mid)" }}>{product.description}</p>

              {/* Stock & Urgency */}
              {product.stock !== undefined && product.stock <= 5 && product.stock > 0 && (
                <p className="mt-4 text-sm font-medium" style={{ color: "var(--accent)" }}>{t("product.onlyLeft", { count: product.stock })}</p>
              )}
              {product.stock === 0 && <p className="mt-4 text-sm font-medium" style={{ color: "var(--t-low)" }}>{t("product.soldOut")}</p>}

              {/* VIP gate */}
              {product.isVip && (
                <div className="mt-6 p-4 rounded-2xl" style={{ backgroundColor: "rgba(232,195,0,0.06)", border: "1px solid rgba(232,195,0,0.12)" }}>
                  <p className="text-sm font-bold" style={{ color: "var(--warm)" }}>VIP 专属商品</p>
                  <p className="text-xs mt-1" style={{ color: "var(--t-mid)" }}>开通 VIP 会员后解锁购买权限</p>
                </div>
              )}

              {/* Coin gate */}
              {product.coinPrice && (
                <div className="mt-4 p-4 rounded-2xl" style={{ backgroundColor: "rgba(0,201,182,0.06)", border: "1px solid rgba(0,201,182,0.12)" }}>
                  <p className="text-sm font-bold" style={{ color: "var(--cool)" }}>{product.coinPrice} 虚拟币解锁</p>
                </div>
              )}

              {/* Actions */}
              <div className="flex gap-3 mt-8">
                <Link href={`/${locale}/sim-order`}>
                  <BrandButton variant="coral" size="lg" showGlimmer>{t("product.simOrder")}</BrandButton>
                </Link>
                <BrandButton variant="dopamine" size="lg"><ShoppingBag className="size-5" />{t("product.addToCart")}</BrandButton>
                <button className="size-12 rounded-full flex items-center justify-center transition-colors hover:bg-white/[0.04]" style={{ color: "var(--t-mid)" }}>
                  <Heart className="size-5" />
                </button>
                <button className="size-12 rounded-full flex items-center justify-center transition-colors hover:bg-white/[0.04]" style={{ color: "var(--t-mid)" }}>
                  <Share2 className="size-5" />
                </button>
              </div>

              {/* Tags */}
              {product.tags && (
                <div className="flex gap-2 mt-6">
                  {product.tags.map(tag => <span key={tag} className="text-xs px-3 py-1 rounded-full" style={{ color: "var(--t-low)", backgroundColor: "rgba(255,255,255,0.03)" }}>{tag}</span>)}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Brand Story */}
      <section className="section-cinema px-6 sm:px-12 lg:px-24 grain-overlay">
        <div className="max-w-7xl mx-auto">
          <h2 className="h2-cinema text-[var(--t-high)] mb-8">{t("product.brandStory")}</h2>
          <p className="max-w-2xl leading-relaxed text-lg" style={{ color: "var(--t-mid)" }}>{product.story}</p>
        </div>
      </section>

      {/* Related */}
      <section className="px-6 sm:px-12 lg:px-24 pb-24">
        <div className="max-w-7xl mx-auto">
          <h2 className="h2-cinema text-[var(--t-high)] mb-8">{t("product.youMayLike")}</h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {related.map(p => (
              <Link key={p.slug} href={`/${locale}/channel/luxury/product/${p.slug}`} className="card-cinema group cursor-pointer">
                <div className="aspect-square overflow-hidden">
                  <img src={p.images[0]} alt={p.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
                </div>
                <div className="p-4">
                  <span className="text-[11px] uppercase tracking-wider" style={{ color: "var(--t-low)" }}>{p.brand}</span>
                  <p className="text-sm font-medium text-[var(--t-high)] mt-1 line-clamp-1">{p.name}</p>
                  <p className="text-sm font-bold mt-1.5" style={{ color: "var(--accent)" }}>{p.price}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <Footer />
</main>
  );
}
