"use client";

import Link from "next/link";
import { Trash2, Minus, Plus, ShoppingBag, ArrowRight } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { BrandButton } from "@/components/brand/BrandButton";
import { useCartStore } from "@/stores/cart";

export default function CartPage() {
  const items = useCartStore((s) => s.items);
  const removeItem = useCartStore((s) => s.removeItem);
  const updateQuantity = useCartStore((s) => s.updateQuantity);
  const totalPrice = useCartStore((s) => s.totalPrice());
  const totalItems = useCartStore((s) => s.totalItems());

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 max-w-3xl mx-auto px-4 sm:px-6 py-12 w-full">
        <h1 className="text-3xl font-display font-bold text-text-primary mb-8">
          Shopping Cart
        </h1>

        {items.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-20 text-text-muted">
            <ShoppingBag className="size-16 mb-4" />
            <p className="text-lg mb-2">Your cart is empty</p>
            <Link
              href="/"
              className="text-brand hover:text-brand-hover transition-colors duration-150 text-sm"
            >
              Start Shopping
            </Link>
          </div>
        ) : (
          <>
            {/* Items */}
            <div className="flex flex-col gap-4">
              {items.map((item) => (
                <div
                  key={item.product.slug}
                  className="flex items-center gap-4 p-4 rounded-xl bg-bg-surface border border-border-default"
                >
                  <div className="size-20 rounded-lg overflow-hidden bg-bg-elevated shrink-0">
                    <img
                      src={item.product.images[0]}
                      alt={item.product.name}
                      className="size-full object-cover"
                    />
                  </div>

                  <div className="flex-1 min-w-0">
                    <span className="text-xs text-text-muted">
                      {item.product.brand}
                    </span>
                    <p className="text-sm text-text-primary truncate">
                      {item.product.name}
                    </p>
                    <span className="text-sm font-bold text-text-primary">
                      {item.product.price}
                    </span>
                  </div>

                  {/* Quantity */}
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() =>
                        updateQuantity(
                          item.product.slug,
                          item.quantity - 1
                        )
                      }
                      className="size-8 rounded-full border border-border-default flex items-center justify-center text-text-secondary hover:border-brand hover:text-brand transition-colors duration-150"
                    >
                      <Minus className="size-3" />
                    </button>
                    <span className="text-sm font-medium text-text-primary w-6 text-center">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() =>
                        updateQuantity(
                          item.product.slug,
                          item.quantity + 1
                        )
                      }
                      className="size-8 rounded-full border border-border-default flex items-center justify-center text-text-secondary hover:border-brand hover:text-brand transition-colors duration-150"
                    >
                      <Plus className="size-3" />
                    </button>
                  </div>

                  {/* Remove */}
                  <button
                    onClick={() => removeItem(item.product.slug)}
                    className="size-8 rounded-full flex items-center justify-center text-text-muted hover:text-brand hover:bg-brand-muted transition-colors duration-150"
                  >
                    <Trash2 className="size-4" />
                  </button>
                </div>
              ))}
            </div>

            {/* Summary */}
            <div className="mt-8 p-6 rounded-2xl bg-bg-surface border border-border-default">
              <div className="flex items-center justify-between pb-4 border-b border-border-default">
                <span className="text-text-secondary">
                  Subtotal ({totalItems} items)
                </span>
                <span className="text-xl font-display font-bold text-text-primary">
                  {totalPrice}
                </span>
              </div>
              <div className="mt-4 flex justify-end">
                <Link href="/checkout">
                  <BrandButton variant="coral" size="lg" showGlimmer>
                    Proceed to Checkout
                    <ArrowRight className="size-4" />
                  </BrandButton>
                </Link>
              </div>
            </div>
          </>
        )}
      </main>

      <Footer />
    </div>
  );
}
