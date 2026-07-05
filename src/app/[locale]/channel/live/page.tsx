"use client";

import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";
import { Radio, Eye } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { BrandButton } from "@/components/brand/BrandButton";
import { liveItems } from "@/data/channel/live";

export default function LiveChannelPage() {
  const t = useTranslations();
  const locale = useLocale();
  const hot = liveItems.filter((l) => l.viewers > 25000).sort((a, b) => b.viewers - a.viewers);
  const all = liveItems;

  return (
    <main className="overflow-x-hidden w-full max-w-full">
      <Header />
      <section className="section-cinema px-6 sm:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <span className="size-3 rounded-full animate-pulse" style={{ backgroundColor: "var(--accent)" }} />
            <span className="text-sm uppercase tracking-[0.3em] font-semibold" style={{ color: "var(--accent)" }}>LIVE</span>
          </div>
          <h1 className="h2-cinema text-[var(--t-high)] mb-4">{t("channels.live.name")}</h1>
          <p className="text-lg mb-6" style={{ color: "var(--t-mid)", maxWidth: "32rem" }}>
            {t("channels.live.description")}
          </p>
        </div>
      </section>

      <section className="px-6 sm:px-12 lg:px-24 pb-12">
        <div className="max-w-7xl mx-auto">
          <h2 className="h2-cinema text-[var(--t-high)] mb-10">正在直播</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {hot.map((live) => (
              <Link key={live.slug} href={`/${locale}/channel/live`} className="card-cinema group cursor-pointer">
                <div className="aspect-video overflow-hidden relative">
                  <img src={live.image} alt={live.title} className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105" loading="lazy" />
                  <span className="absolute top-3 left-3 px-3 py-0.5 rounded-full text-[10px] font-bold text-white" style={{ backgroundColor: "var(--accent)" }}>LIVE</span>
                  <span className="absolute top-3 right-3 px-2.5 py-0.5 rounded-full text-[10px] text-white/90" style={{ background: "rgba(0,0,0,0.5)", backdropFilter: "blur(4px)" }}>
                    <Eye className="size-3 inline mr-1" />{(live.viewers / 1000).toFixed(1)}K
                  </span>
                </div>
                <div className="p-5">
                  <span className="text-[11px] uppercase tracking-wider" style={{ color: "var(--t-low)" }}>{live.streamer}</span>
                  <p className="text-sm font-medium mt-1 text-[var(--t-high)] line-clamp-1">{live.title}</p>
                  <div className="flex items-center justify-between mt-2">
                    <div>
                      <span className="text-base font-bold" style={{ color: "var(--accent)" }}>{live.price}</span>
                      {live.originalPrice && <span className="text-xs line-through ml-2" style={{ color: "var(--t-low)" }}>{live.originalPrice}</span>}
                    </div>
                    <span className="text-xs" style={{ color: "var(--t-low)" }}>已售{live.sales.toLocaleString()}</span>
                  </div>
                  {live.stock > 0 && live.stock <= 10 && <p className="text-[10px] font-medium mt-2" style={{ color: "var(--accent)" }}>仅剩{live.stock}件</p>}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 sm:px-12 lg:px-24 pb-24">
        <div className="max-w-7xl mx-auto">
          <h2 className="h2-cinema text-[var(--t-high)] mb-10">全部直播间</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {all.map((live) => (
              <Link key={live.slug} href={`/${locale}/channel/live`} className="card-cinema group cursor-pointer">
                <div className="aspect-[4/3] overflow-hidden relative">
                  <img src={live.image} alt={live.title} className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105" loading="lazy" />
                </div>
                <div className="p-4">
                  <span className="text-[11px]" style={{ color: "var(--t-low)" }}>{live.streamer}</span>
                  <p className="text-xs font-medium mt-0.5 text-[var(--t-high)] line-clamp-1">{live.title}</p>
                  <div className="flex items-center justify-between mt-1.5">
                    <span className="text-sm font-bold" style={{ color: "var(--accent)" }}>{live.price}</span>
                    <span className="text-[10px]" style={{ color: "var(--t-low)" }}>{(live.viewers / 1000).toFixed(1)}K</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <Footer />
</main>
  );
}
