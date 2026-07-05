"use client";

import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";
import { User, Crown, Coins, ShoppingBag, Heart, ChevronRight, Settings, LogOut } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { BrandButton } from "@/components/brand/BrandButton";

export default function ProfilePage() {
  const t = useTranslations();
  const locale = useLocale();

  const menu = [
    { icon: ShoppingBag, label: t("profile.menu.orders"), href: "/orders" },
    { icon: Heart, label: t("profile.menu.favorites"), href: "/cart" },
    { icon: Coins, label: t("coins.title"), href: "/coins" },
    { icon: Crown, label: t("vip.title"), href: "/vip" },
    { icon: Settings, label: t("profile.menu.settings"), href: "#" },
  ];

  return (
    <main className="overflow-x-hidden w-full max-w-full min-h-screen">
      <Header />
      <section className="section-cinema px-6 sm:px-12 lg:px-24">
        <div className="max-w-lg mx-auto">
          {/* Avatar + Stats */}
          <div className="flex items-center gap-5 mb-10">
            <div className="size-16 rounded-full flex items-center justify-center" style={{ backgroundColor: "rgba(255,90,110,0.1)" }}>
              <User className="size-8" style={{ color: "var(--accent)" }} />
            </div>
            <div>
              <h1 className="text-xl font-bold text-[var(--t-high)]">多巴胺猎人</h1>
              <p className="text-sm mt-1" style={{ color: "var(--t-mid)" }}>Lv.18 · 23,400 pts</p>
            </div>
          </div>

          {/* VIP upsell */}
          <Link href={`/${locale}/vip`} className="card-cinema p-5 flex items-center gap-4 mb-8 cursor-pointer" style={{ borderColor: "rgba(232,195,0,0.15)", background: "rgba(232,195,0,0.03)" }}>
            <Crown className="size-8" style={{ color: "var(--warm)" }} />
            <div className="flex-1">
              <p className="text-sm font-bold" style={{ color: "var(--warm)" }}>{t("profile.unlockVip")}</p>
              <p className="text-xs mt-0.5" style={{ color: "var(--t-mid)" }}>{t("profile.unlockVipDesc")}</p>
            </div>
            <ChevronRight className="size-5" style={{ color: "var(--t-low)" }} />
          </Link>

          {/* Menu */}
          <div className="card-cinema overflow-hidden" style={{ padding: 0 }}>
            {menu.map((item, i) => (
              <Link key={i} href={`/${locale}${item.href}`}
                className="flex items-center gap-4 px-6 py-4 transition-colors hover:bg-white/[0.02] cursor-pointer"
                style={{ borderBottom: i < menu.length - 1 ? "1px solid rgba(255,255,255,0.04)" : "none" }}>
                <item.icon className="size-5" style={{ color: "var(--t-mid)" }} />
                <span className="flex-1 text-sm text-[var(--t-high)]">{item.label}</span>
                <ChevronRight className="size-4" style={{ color: "var(--t-low)" }} />
              </Link>
            ))}
          </div>

          <div className="mt-8 flex justify-center">
            <button className="text-sm transition-colors hover:opacity-80 flex items-center gap-2" style={{ color: "var(--t-low)" }}>
              <LogOut className="size-4" />{t("profile.menu.logout")}
            </button>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
