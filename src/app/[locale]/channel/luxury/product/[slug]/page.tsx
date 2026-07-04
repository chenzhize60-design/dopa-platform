"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { ChevronLeft, ShoppingBag, Heart, Star, Share2, Eye } from "lucide-react";
import { useTranslations, useLocale } from "next-intl";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Badge } from "@/components/brand/Badge";
import { BrandButton } from "@/components/brand/BrandButton";
import { GlimmerDot } from "@/components/brand/GlimmerDot";
import { getProductBySlug, products } from "@/data/products";
import { useCartStore } from "@/stores/cart";

export default function ProductDetailPage() {
  const t = useTranslations();
  const locale = useLocale();
  const { slug } = useParams<{ slug: string }>();
  const product = getProductBySlug(slug);

  const addToCart = useCartStore((s) => s.addItem);

  // Related products
  const related = products.filter(p => p.slug !== slug && p.category === product?.category).slice(0, 4);
  if (related.length < 4) {
    const others = products.filter(p => p.slug !== slug && p.category !== product?.category).slice(0, 4 - related.length);
    related.push(...others);
  }

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-display font-bold text-text-primary">
              Product Not Found
            </h1>
            <Link
              href="/"
              className="mt-4 inline-block text-brand hover:text-brand-hover transition-colors duration-150"
            >
              Return Home
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Back */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-6">
          <Link
            href="/"
            className="inline-flex items-center gap-1 text-sm text-text-secondary hover:text-text-primary transition-colors duration-150"
          >
            <ChevronLeft className="size-4" />
            Back
          </Link>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Images */}
          <div className="flex flex-col gap-4">
            <div className="aspect-[3/4] rounded-2xl overflow-hidden bg-bg-elevated">
              <img
                src={product.images[0]}
                alt={product.name}
                className="size-full object-cover"
              />
            </div>
            {product.images[1] && (
              <div className="aspect-[3/4] rounded-2xl overflow-hidden bg-bg-elevated">
                <img
                  src={product.images[1]}
                  alt={`${product.name} detail`}
                  className="size-full object-cover"
                />
              </div>
            )}
          </div>

          {/* Details */}
          <div className="flex flex-col gap-6">
            {/* Badge */}
            {product.badge && (
              <div>
                <Badge variant={product.badge.variant}>
                  {product.badge.label}
                </Badge>
              </div>
            )}

            {/* Brand */}
            <span className="text-sm text-text-muted uppercase tracking-wider font-medium">
              {product.brand}
            </span>

            {/* Name */}
            <h1 className="text-3xl font-display font-bold text-text-primary leading-tight">
              {product.name}
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`size-4 ${
                      i < Math.floor(product.rating)
                        ? "text-joy fill-joy"
                        : "text-text-muted"
                    }`}
                  />
                ))}
              </div>
              <span className="text-sm text-text-secondary">
                {product.rating} ({product.reviews} reviews)
              </span>
            </div>

            {/* Price */}
            <div className="flex items-baseline gap-3">
              <span className="text-3xl font-display font-bold text-text-primary">
                {product.price}
              </span>
              {product.originalPrice && (
                <span className="text-lg text-text-muted line-through">
                  {product.originalPrice}
                </span>
              )}
            </div>

            {/* Social proof */}
            {product.viewers && (
              <div className="flex items-center gap-2 text-sm text-text-muted">
                <Eye className="size-4" />
                <span className="text-brand font-medium">{product.viewers} people</span> viewing now
              </div>
            )}

            {/* Description */}
            <p className="text-text-secondary leading-relaxed">
              {product.description}
            </p>

            {/* Story */}
            <div className="p-6 rounded-2xl bg-bg-surface border border-border-default">
              <h3 className="text-sm font-medium text-text-secondary uppercase tracking-wider mb-3">
                Brand Story
              </h3>
              <p className="text-sm text-text-muted leading-relaxed">
                {product.story}
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 pt-4">
              <BrandButton
                variant="coral"
                size="xl"
                className="flex-1"
                showGlimmer
                onClick={() => addToCart(product)}
              >
                <ShoppingBag className="size-5" />
                Add to Cart
              </BrandButton>
              <Link href="/sim-order" className="flex-1">
                <BrandButton
                  variant="dopamine"
                  size="xl"
                  showGlimmer
                  className="w-full"
                >
                  Sim Order
                  <GlimmerDot size={6} color="var(--joy)" className="ml-1" />
                </BrandButton>
              </Link>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-4 pt-2">
              <button className="flex items-center gap-1.5 text-sm text-text-secondary hover:text-brand transition-colors duration-150">
                <Heart className="size-4" />
                Save
              </button>
              <button className="flex items-center gap-1.5 text-sm text-text-secondary hover:text-text-primary transition-colors duration-150">
                <Share2 className="size-4" />
                Share
              </button>
            </div>
          </div>
        </div>

        {/* Recommendations */}
        {related.length > 0 && (
          <section className="max-w-7xl mx-auto px-4 sm:px-6 pb-20 w-full">
            <div className="section-divider mb-12" />
            <h2 className="text-2xl font-display font-bold text-text-primary mb-8">{t("product.youMayLike")}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {related.map((p, i) => (
                <Link key={p.slug} href={`/${locale}/channel/luxury/product/${p.slug}`}>
                  <div className="group relative rounded-2xl overflow-hidden bg-bg-surface border border-border-subtle transition-all duration-400 hover:-translate-y-1 hover:border-white/10"
                    style={{ animation: "fade-up 0.4s cubic-bezier(0.16,1,0.3,1) both", animationDelay: `${i * 60}ms` }}>
                    <div className="relative aspect-square overflow-hidden">
                      <img src={p.images[0]} alt={p.name} className="size-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
                    </div>
                    <div className="p-3">
                      <span className="text-[11px] text-text-muted uppercase tracking-wider">{p.brand}</span>
                      <h3 className="text-sm font-medium text-text-primary mt-1 line-clamp-1">{p.name}</h3>
                      <span className="text-sm font-display font-bold text-text-primary mt-1">{p.price}</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}
      </main>

      <Footer />
    </div>
  );
}
