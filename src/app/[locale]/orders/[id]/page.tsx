"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { ChevronLeft, CheckCircle2, MapPin } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Badge } from "@/components/brand/Badge";
import { GlimmerDot } from "@/components/brand/GlimmerDot";

const orderData: Record<string, {
  id: string;
  date: string;
  status: "delivered" | "shipping" | "processing";
  items: { brand: string; name: string; price: string; image: string }[];
  total: string;
  address: string;
  timeline: { label: string; date: string; done: boolean }[];
}> = {
  "DOP-20240001": {
    id: "DOP-20240001",
    date: "2024-07-01",
    status: "delivered",
    items: [
      {
        brand: "Celine",
        name: "Triomphe Shoulder Bag in Shiny Calfskin",
        price: "¥28,500",
        image:
          "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=200&q=80",
      },
      {
        brand: "Byredo",
        name: "Gypsy Water Eau de Parfum 50ml",
        price: "¥1,450",
        image:
          "https://images.unsplash.com/photo-1541643600914-78b084683601?w=200&q=80",
      },
    ],
    total: "¥29,950",
    address: "Room 1201, Building 3, Lujiazui Financial Center, Pudong, Shanghai",
    timeline: [
      { label: "Order Placed", date: "2024-07-01 09:30", done: true },
      { label: "Payment Confirmed", date: "2024-07-01 09:32", done: true },
      { label: "Processing", date: "2024-07-01 14:00", done: true },
      { label: "Shipped", date: "2024-07-02 10:15", done: true },
      { label: "Delivered", date: "2024-07-03 16:45", done: true },
    ],
  },
};

export default function OrderDetailPage() {
  const params = useParams();
  const id = params.id as string;
  const order = orderData[id];

  if (!order) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-display font-bold text-text-primary">
              Order Not Found
            </h1>
            <Link
              href="/orders"
              className="mt-4 inline-block text-brand hover:text-brand-hover transition-colors duration-150"
            >
              View All Orders
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

      <main className="flex-1 max-w-3xl mx-auto px-4 sm:px-6 py-12 w-full">
        <Link
          href="/orders"
          className="inline-flex items-center gap-1 text-sm text-text-secondary hover:text-text-primary transition-colors duration-150 mb-8"
        >
          <ChevronLeft className="size-4" />
          All Orders
        </Link>

        <div className="flex items-center gap-3 mb-8">
          <h1 className="text-3xl font-display font-bold text-text-primary">
            {order.id}
          </h1>
          <Badge variant="verified" showIcon={false}>
            {order.status === "delivered" ? "Delivered" : "Processing"}
          </Badge>
        </div>

        {/* Timeline */}
        <div className="mb-10">
          <h2 className="text-sm font-medium text-text-secondary uppercase tracking-wider mb-4">
            Order Timeline
          </h2>
          <div className="relative pl-8">
            {/* Vertical line */}
            <div className="absolute left-[11px] top-2 bottom-2 w-px bg-border-default" />

            {order.timeline.map((event, i) => (
              <div key={i} className="relative pb-6 last:pb-0">
                <div
                  className={`absolute -left-[23px] size-[22px] rounded-full border-2 flex items-center justify-center ${
                    event.done
                      ? "border-heal bg-heal"
                      : "border-border-default bg-bg-surface"
                  }`}
                >
                  {event.done ? (
                    <CheckCircle2 className="size-3 text-text-inverse" />
                  ) : (
                    <GlimmerDot size={4} color="var(--text-muted)" />
                  )}
                </div>
                <span className="text-sm font-medium text-text-primary">
                  {event.label}
                </span>
                <span className="block text-xs text-text-muted mt-0.5">
                  {event.date}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Items */}
        <div className="mb-8">
          <h2 className="text-sm font-medium text-text-secondary uppercase tracking-wider mb-4">
            Items
          </h2>
          <div className="flex flex-col gap-3">
            {order.items.map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-4 p-4 rounded-xl bg-bg-surface border border-border-default"
              >
                <div className="size-16 rounded-lg overflow-hidden bg-bg-elevated">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="size-full object-cover"
                  />
                </div>
                <div className="flex-1">
                  <span className="text-xs text-text-muted">{item.brand}</span>
                  <p className="text-sm text-text-primary">{item.name}</p>
                </div>
                <span className="text-sm font-bold text-text-primary">
                  {item.price}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Address + Total */}
        <div className="p-6 rounded-2xl bg-bg-surface border border-border-default">
          <div className="flex items-start gap-3 pb-4 border-b border-border-default">
            <MapPin className="size-5 text-brand mt-0.5" />
            <div>
              <span className="text-sm font-medium text-text-primary">
                Shipping Address
              </span>
              <p className="text-sm text-text-muted mt-0.5">{order.address}</p>
            </div>
          </div>
          <div className="flex items-center justify-between pt-4">
            <span className="text-text-secondary">Total</span>
            <span className="text-xl font-display font-bold text-text-primary">
              {order.total}
            </span>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
