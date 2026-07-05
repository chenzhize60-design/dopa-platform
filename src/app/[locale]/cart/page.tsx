"use client";

import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";
import { ShoppingBag, Trash2, Minus, Plus, ArrowRight } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { BrandButton } from "@/components/brand/BrandButton";
import { useCartStore } from "@/stores/cart";

export default function CartPage() {
  const t = useTranslations();
  const locale = useLocale();
  const items = useCartStore((s) => s.items);
  const removeItem = useCartStore((s) => s.removeItem);
  const updateQuantity = useCartStore((s) => s.updateQuantity);
  const totalPrice = useCartStore((s) => s.totalPrice());
  const totalItems = useCartStore((s) => s.totalItems());

  return (
    <main className="overflow-x-hidden w-full max-w-full min-h-screen">
      <Header />
      <section className="section-cinema px-6 sm:px-12 lg:px-24">
        <div className="max-w-3xl mx-auto">
          <h1 className="h2-cinema text-[var(--t-high)] mb-12">{t("cart.title")}</h1>

          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-20">
              <ShoppingBag className="size-16 mb-6" style={{ color: "var(--t-low)" }} />
              <p className="text-lg mb-2 text-[var(--t-mid)]">{t("cart.emptyTitle")}</p>
              <Link href={`/${locale}`} className="text-sm font-bold hover:underline" style={{ color: "var(--accent)" }}>{t("cart.emptyAction")}</Link>
            </div>
          ) : (
            <>
              <div className="space-y-4">
                {items.map((item) => (
                  <div key={item.product.slug} className="card-cinema p-4 flex items-center gap-4">
                    <div className="size-20 rounded-xl overflow-hidden shrink-0">
                      <img src={item.product.images[0]} alt={item.product.name} className="size-full object-cover" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <span className="text-xs" style={{ color: "var(--t-low)" }}>{item.product.brand}</span>
                      <p className="text-sm font-medium text-[var(--t-high)] truncate">{item.product.name}</p>
                      <span className="text-sm font-bold" style={{ color: "var(--accent)" }}>{item.product.price}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <button onClick={() => updateQuantity(item.product.slug, item.quantity - 1)} className="size-8 rounded-full flex items-center justify-center transition-colors" style={{ border: "1px solid rgba(255,255,255,0.08)", color: "var(--t-mid)" }}>
                        <Minus className="size-3" />
                      </button>
                      <span className="text-sm font-medium w-6 text-center text-[var(--t-high)]">{item.quantity}</span>
                      <button onClick={() => updateQuantity(item.product.slug, item.quantity + 1)} className="size-8 rounded-full flex items-center justify-center transition-colors" style={{ border: "1px solid rgba(255,255,255,0.08)", color: "var(--t-mid)" }}>
                        <Plus className="size-3" />
                      </button>
                    </div>
                    <button onClick={() => removeItem(item.product.slug)} className="size-8 rounded-full flex items-center justify-center transition-colors hover:bg-white/[0.04]" style={{ color: "var(--t-mid)" }}>
                      <Trash2 className="size-4" />
                    </button>
                  </div>
                ))}
              </div>

              <div className="card-cinema mt-8 p-6">
                <div className="flex items-center justify-between pb-4 mb-4" style={{ borderBottom: "1px solid rgba(255,255,255,0.04)" }}>
                  <span style={{ color: "var(--t-mid)" }}>{t("cart.subtotal")} ({totalItems})</span>
                  <span className="text-xl font-bold text-[var(--t-high)]">{totalPrice}</span>
                </div>
                <div className="flex justify-end">
                  <Link href={`/${locale}/checkout`}>
                    <BrandButton variant="coral" size="lg" showGlimmer>{t("cart.checkout")}<ArrowRight className="size-4" /></BrandButton>
                  </Link>
                </div>
              </div>
            </>
          )}
        </div>
      </section>
      <Footer />
    </main>
  );
}
