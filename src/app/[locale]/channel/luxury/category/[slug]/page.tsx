"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ProductCard } from "@/components/brand/ProductCard";
import { getProductsByCategory, categories } from "@/data/products";

export default function CategoryPage() {
  const params = useParams();
  const slug = params.slug as string;

  const categoryProducts = getProductsByCategory(slug);
  const displayName =
    slug === "all"
      ? "All Products"
      : slug.charAt(0).toUpperCase() + slug.slice(1);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 py-12 w-full">
        <Link
          href="/"
          className="inline-flex items-center gap-1 text-sm text-text-secondary hover:text-text-primary transition-colors duration-150 mb-8"
        >
          <ChevronLeft className="size-4" />
          Back
        </Link>

        <h1 className="text-3xl font-display font-bold text-text-primary mb-8">
          {displayName}
        </h1>

        {/* Category pills */}
        <div className="flex flex-wrap items-center gap-2 mb-8">
          <Link
            href="/channel/luxury/category/all"
            className={`px-4 py-1.5 rounded-full text-xs font-medium border transition-colors duration-150 ${
              slug === "all"
                ? "bg-brand text-white border-brand"
                : "border-border-default text-text-secondary hover:text-text-primary hover:border-border-default/60"
            }`}
          >
            All
          </Link>
          {categories.map((cat) => (
            <Link
              key={cat}
              href={`/channel/luxury/category/${cat}`}
              className={`px-4 py-1.5 rounded-full text-xs font-medium border capitalize transition-colors duration-150 ${
                slug === cat
                  ? "bg-brand text-white border-brand"
                  : "border-border-default text-text-secondary hover:text-text-primary hover:border-border-default/60"
              }`}
            >
              {cat}
            </Link>
          ))}
        </div>

        {/* 2-column waterfall grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          {categoryProducts.map((product) => (
            <Link key={product.slug} href={`/channel/luxury/product/${product.slug}`}>
              <ProductCard
                image={product.images[0]}
                brand={product.brand}
                name={product.name}
                price={product.price}
                originalPrice={product.originalPrice}
                badge={product.badge}
              />
            </Link>
          ))}
        </div>

        {categoryProducts.length === 0 && (
          <div className="flex flex-col items-center justify-center py-20 text-text-muted">
            <p className="text-lg">No products in this category yet.</p>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}
