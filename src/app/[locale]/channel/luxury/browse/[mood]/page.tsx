"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { ChevronLeft, Sparkles } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ProductCard } from "@/components/brand/ProductCard";
import { GlimmerDot } from "@/components/brand/GlimmerDot";
import { getProductsByMood, moods } from "@/data/products";

export default function BrowseMoodPage() {
  const params = useParams();
  const mood = params.mood as string;

  const moodData = moods.find((m) => m.id === mood);
  const moodProducts = getProductsByMood(mood);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Mood header */}
        <section
          className="relative px-4 sm:px-6 py-16 overflow-hidden"
          style={{ backgroundColor: "var(--bg-surface)" }}
        >
          <div className="max-w-5xl mx-auto">
            <Link
              href="/"
              className="inline-flex items-center gap-1 text-sm text-text-secondary hover:text-text-primary transition-colors duration-150 mb-8"
            >
              <ChevronLeft className="size-4" />
              Back
            </Link>

            <div className="flex items-center gap-4 mb-4">
              <GlimmerDot
                size={12}
                color={moodData?.color ?? "var(--brand)"}
              />
              <h1 className="text-4xl font-display font-bold text-text-primary">
                {moodData?.label ?? mood}
              </h1>
            </div>
            <p className="text-text-secondary text-lg max-w-lg">
              {moodData?.description ?? "Discover pieces that match your mood"}
            </p>
          </div>
        </section>

        {/* Products */}
        <section className="px-4 sm:px-6 py-12 max-w-7xl mx-auto w-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {moodProducts.map((product) => (
              <Link key={product.slug} href={`/product/${product.slug}`}>
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

          {moodProducts.length === 0 && (
            <div className="flex flex-col items-center justify-center py-20 text-text-muted">
              <Sparkles className="size-12 mb-4" />
              <p className="text-lg">No products found for this mood yet.</p>
            </div>
          )}
        </section>
      </main>

      <Footer />
    </div>
  );
}
