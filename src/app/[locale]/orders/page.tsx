"use client";

import Link from "next/link";
import { Package, ChevronRight } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Badge } from "@/components/brand/Badge";
import { useTranslations } from "next-intl";

const orders = [
  {
    id: "DOP-20240001",
    date: "2024-07-01",
    status: "delivered" as const,
    items: "Celine Triomphe Bag + Byredo Gypsy Water",
    total: "¥29,950",
  },
  {
    id: "DOP-20240002",
    date: "2024-06-28",
    status: "shipping" as const,
    items: "Loewe Puzzle Edge Bag",
    total: "¥23,900",
  },
  {
    id: "DOP-20240003",
    date: "2024-06-25",
    status: "processing" as const,
    items: "Diptyque Roses Candle x3",
    total: "¥1,680",
  },
];

const statusConfig = {
  delivered: { label: "Delivered", variant: "verified" as const },
  shipping: { label: "Shipping", variant: "hot" as const },
  processing: { label: "Processing", variant: "new" as const },
};

export default function OrdersPage() {
  const t = useTranslations();
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 max-w-3xl mx-auto px-4 sm:px-6 py-12 w-full">
        <h1 className="text-3xl font-display font-bold text-text-primary mb-8">
          {t("orders.title")}
        </h1>

        {orders.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-20 text-text-muted">
            <Package className="size-16 mb-4" />
            <p className="text-lg">{t("orders.emptyTitle")}</p>
          </div>
        ) : (
          <div className="flex flex-col gap-4">
            {orders.map((order) => {
              const status = statusConfig[order.status];
              return (
                <Link
                  key={order.id}
                  href={`/orders/${order.id}`}
                  className="flex items-center gap-4 p-5 rounded-xl bg-bg-surface border border-border-default hover:border-border-default/60 transition-shadow duration-250"
                  style={{
                    boxShadow:
                      "0 1px 2px rgba(0,0,0,0.04), 0 4px 8px rgba(0,0,0,0.06)",
                  }}
                >
                  <div className="size-12 rounded-xl bg-bg-elevated flex items-center justify-center">
                    <Package className="size-5 text-text-secondary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-sm font-medium text-text-primary">
                        {order.id}
                      </span>
                      <Badge variant={status.variant} showIcon={false}>
                        {status.label}
                      </Badge>
                    </div>
                    <p className="text-sm text-text-muted truncate">
                      {order.items}
                    </p>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-xs text-text-muted">
                        {order.date}
                      </span>
                      <span className="text-sm font-bold text-text-primary">
                        {order.total}
                      </span>
                    </div>
                  </div>
                  <ChevronRight className="size-5 text-text-muted shrink-0" />
                </Link>
              );
            })}
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}
