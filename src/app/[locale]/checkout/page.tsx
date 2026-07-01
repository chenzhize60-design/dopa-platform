"use client";

import Link from "next/link";
import { ChevronLeft, MapPin, CreditCard, CheckCircle2 } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { BrandButton } from "@/components/brand/BrandButton";
import { GlimmerDot } from "@/components/brand/GlimmerDot";
import { useCartStore } from "@/stores/cart";

const steps = ["Cart", "Shipping", "Payment", "Confirm"];

const addresses = [
  {
    id: "1",
    name: "Home",
    address: "Room 1201, Building 3, Lujiazui Financial Center, Pudong, Shanghai",
  },
  {
    id: "2",
    name: "Office",
    address: "Floor 28, Tower A, Jing'an Kerry Centre, Jing'an, Shanghai",
  },
];

export default function CheckoutPage() {
  const items = useCartStore((s) => s.items);
  const totalPrice = useCartStore((s) => s.totalPrice());

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 max-w-3xl mx-auto px-4 sm:px-6 py-12 w-full">
        <Link
          href="/cart"
          className="inline-flex items-center gap-1 text-sm text-text-secondary hover:text-text-primary transition-colors duration-150 mb-8"
        >
          <ChevronLeft className="size-4" />
          Back to Cart
        </Link>

        <h1 className="text-3xl font-display font-bold text-text-primary mb-8">
          Checkout
        </h1>

        {/* Progress */}
        <div className="flex items-center justify-center gap-2 mb-12">
          {steps.map((s, i) => (
            <div key={s} className="flex items-center gap-2">
              <div
                className={`flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium transition-colors duration-300 ${
                  i === 0
                    ? "bg-brand text-white"
                    : "bg-bg-surface text-text-muted"
                }`}
              >
                {i < 1 ? (
                  <CheckCircle2 className="size-3" />
                ) : (
                  <GlimmerDot size={4} color="var(--text-muted)" />
                )}
                {s}
              </div>
              {i < steps.length - 1 && (
                <div className="w-6 h-px bg-border-default" />
              )}
            </div>
          ))}
        </div>

        {/* Address */}
        <section className="mb-8">
          <h2 className="text-lg font-display font-bold text-text-primary mb-4 flex items-center gap-2">
            <MapPin className="size-5 text-brand" />
            Shipping Address
          </h2>
          <div className="flex flex-col gap-3">
            {addresses.map((addr) => (
              <label
                key={addr.id}
                className="flex items-start gap-4 p-4 rounded-xl border border-border-default bg-bg-surface cursor-pointer hover:border-brand/30 transition-colors duration-150"
              >
                <input
                  type="radio"
                  name="address"
                  defaultChecked={addr.id === "1"}
                  className="mt-0.5 accent-brand"
                />
                <div>
                  <span className="text-sm font-medium text-text-primary">
                    {addr.name}
                  </span>
                  <p className="text-sm text-text-muted mt-0.5">
                    {addr.address}
                  </p>
                </div>
              </label>
            ))}
          </div>
        </section>

        {/* Order summary */}
        <section className="mb-8">
          <h2 className="text-lg font-display font-bold text-text-primary mb-4 flex items-center gap-2">
            <CreditCard className="size-5 text-brand" />
            Order Summary
          </h2>
          <div className="p-6 rounded-2xl bg-bg-surface border border-border-default">
            {items.length === 0 ? (
              <p className="text-text-muted text-sm">No items in cart.</p>
            ) : (
              items.map((item) => (
                <div
                  key={item.product.slug}
                  className="flex items-center gap-3 py-3 border-b border-border-default last:border-0"
                >
                  <span className="text-sm text-text-secondary flex-1 truncate">
                    {item.product.brand} {item.product.name}
                    <span className="text-text-muted ml-2">x{item.quantity}</span>
                  </span>
                  <span className="text-sm font-medium text-text-primary">
                    {item.product.price}
                  </span>
                </div>
              ))
            )}
            <div className="flex justify-between items-center pt-4 mt-4 border-t border-border-default">
              <span className="text-text-secondary">Total</span>
              <span className="text-xl font-display font-bold text-text-primary">
                {items.length > 0 ? totalPrice : "¥0"}
              </span>
            </div>
          </div>
        </section>

        {/* Place order */}
        <BrandButton
          variant="coral"
          size="xl"
          className="w-full"
          showGlimmer
          disabled={items.length === 0}
        >
          Place Order
        </BrandButton>
      </main>

      <Footer />
    </div>
  );
}
