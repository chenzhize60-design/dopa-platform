"use client";

import { useState } from "react";
import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";
import { Check, CreditCard } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { BrandButton } from "@/components/brand/BrandButton";
import { useCartStore } from "@/stores/cart";

export default function CheckoutPage() {
  const t = useTranslations();
  const locale = useLocale();
  const totalPrice = useCartStore((s) => s.totalPrice());
  const items = useCartStore((s) => s.items);
  const [step, setStep] = useState(0);
  const done = step === 2;

  return (
    <main className="overflow-x-hidden w-full max-w-full min-h-screen">
      <Header />
      <section className="section-cinema px-6 sm:px-12 lg:px-24">
        <div className="max-w-lg mx-auto">
          <h1 className="h2-cinema text-[var(--t-high)] mb-12">{t("checkout.title")}</h1>

          {done ? (
            <div className="card-cinema p-10 text-center">
              <div className="size-16 rounded-full flex items-center justify-center mx-auto mb-6" style={{ backgroundColor: "rgba(0,201,182,0.12)" }}>
                <Check className="size-8" style={{ color: "var(--cool)" }} />
              </div>
              <h2 className="text-xl font-bold text-[var(--t-high)] mb-2">{t("checkout.success.title")}</h2>
              <p className="text-sm mb-8" style={{ color: "var(--t-mid)" }}>{t("checkout.success.delivery")}</p>
              <Link href={`/${locale}`} className="text-sm font-bold hover:underline" style={{ color: "var(--accent)" }}>
                {t("checkout.success.continueShopping")}
              </Link>
            </div>
          ) : (
            <div className="card-cinema p-8">
              <div className="flex items-center justify-between mb-6">
                <span className="text-sm" style={{ color: "var(--t-mid)" }}>{t("cart.subtotal")} ({items.length})</span>
                <span className="text-2xl font-black" style={{ color: "var(--accent)" }}>{totalPrice}</span>
              </div>
              <div className="p-4 rounded-xl mb-8" style={{ backgroundColor: "rgba(255,255,255,0.02)" }}>
                <p className="text-sm text-[var(--t-high)]"><CreditCard className="size-4 inline mr-2" />{t("orderDetail.paymentMethod")}</p>
              </div>
              <BrandButton variant="coral" size="lg" className="w-full" showGlimmer onClick={() => setStep(step + 1)}>
                {step === 0 ? t("checkout.next") : step === 1 ? t("checkout.confirmPay") : t("checkout.pay")}
              </BrandButton>
            </div>
          )}
        </div>
      </section>
      <Footer />
    </main>
  );
}
