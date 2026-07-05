"use client";

import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";
import { Package, ChevronRight } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const orders = [
  { id: "D20260705", date: "2026-07-05", items: 2, total: "¥31,480", status: "paid", statusLabel: "已付款" },
  { id: "D20260703", date: "2026-07-03", items: 1, total: "¥12,800", status: "shipped", statusLabel: "已发货" },
  { id: "D20260628", date: "2026-06-28", items: 3, total: "¥89,500", status: "completed", statusLabel: "已完成" },
];

export default function OrdersPage() {
  const t = useTranslations();
  const locale = useLocale();

  return (
    <main className="overflow-x-hidden w-full max-w-full min-h-screen">
      <Header />
      <section className="section-cinema px-6 sm:px-12 lg:px-24">
        <div className="max-w-2xl mx-auto">
          <h1 className="h2-cinema text-[var(--t-high)] mb-12">{t("orders.title")}</h1>

          <div className="flex gap-2 mb-8">
            {["全部", "待付款", "已付款", "已发货", "已完成"].map((s, i) => (
              <button key={s} className={`px-4 py-2 rounded-full text-xs font-medium transition-all ${i === 0 ? "text-white" : ""}`}
                style={i === 0 ? { backgroundColor: "rgba(255,255,255,0.06)" } : { color: "var(--t-mid)" }}>
                {s}
              </button>
            ))}
          </div>

          {orders.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-20">
              <Package className="size-16 mb-6" style={{ color: "var(--t-low)" }} />
              <p className="text-lg text-[var(--t-mid)] mb-2">{t("orders.emptyTitle")}</p>
              <Link href={`/${locale}`} className="text-sm font-bold hover:underline" style={{ color: "var(--accent)" }}>{t("orders.emptyAction")}</Link>
            </div>
          ) : (
            <div className="space-y-4">
              {orders.map((o) => (
                <Link key={o.id} href={`/${locale}/orders/${o.id}`} className="card-cinema p-5 flex items-center gap-5 cursor-pointer group">
                  <div className="size-12 rounded-xl flex items-center justify-center" style={{ backgroundColor: "rgba(255,255,255,0.03)" }}>
                    <Package className="size-5" style={{ color: "var(--t-mid)" }} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-[var(--t-high)]">#{o.id}</span>
                      <span className="text-xs px-2.5 py-0.5 rounded-full font-medium"
                        style={{ backgroundColor: o.status === "paid" ? "rgba(255,90,110,0.12)" : o.status === "shipped" ? "rgba(232,195,0,0.12)" : "rgba(0,201,182,0.12)", color: o.status === "paid" ? "var(--accent)" : o.status === "shipped" ? "var(--warm)" : "var(--cool)" }}>
                        {o.statusLabel}
                      </span>
                    </div>
                    <div className="flex items-center gap-3 mt-1">
                      <span className="text-xs" style={{ color: "var(--t-low)" }}>{o.date}</span>
                      <span className="text-xs" style={{ color: "var(--t-low)" }}>{o.items} 件</span>
                      <span className="text-sm font-bold" style={{ color: "var(--accent)" }}>{o.total}</span>
                    </div>
                  </div>
                  <ChevronRight className="size-4" style={{ color: "var(--t-low)" }} />
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
      <Footer />
    </main>
  );
}
