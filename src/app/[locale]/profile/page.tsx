"use client";

import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";
import {
  User,
  Package,
  Heart,
  Settings,
  LogOut,
  Sparkles,
  ChevronRight,
  Crown,
  Coins,
  Palette,
  Trophy,
  ShoppingBag,
  MapPin,
  CreditCard,
  HelpCircle,
} from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { GlimmerDot } from "@/components/brand/GlimmerDot";
import { Badge } from "@/components/brand/Badge";

export default function ProfilePage() {
  const t = useTranslations();
  const locale = useLocale();

  const isVip = true; // simulate VIP status
  const coins = 1280;
  const rank = 42;
  const points = 2450;

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 max-w-2xl mx-auto px-4 sm:px-6 py-12 w-full">
        {/* Profile header */}
        <div className="flex items-center gap-4 mb-10">
          <div className="relative">
            <div className="size-16 rounded-full bg-brand-muted flex items-center justify-center border-2 border-brand">
              <User className="size-7 text-brand" />
            </div>
            {isVip && (
              <div className="absolute -bottom-1 -right-1 size-6 rounded-full bg-joy flex items-center justify-center">
                <Crown className="size-3.5 text-black" />
              </div>
            )}
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-2">
              <h1 className="text-2xl font-display font-bold text-text-primary">
                Alex Chen
              </h1>
              {isVip && <Badge variant="hot">VIP</Badge>}
            </div>
            <span className="text-sm text-text-secondary">
              alex.chen@email.com
            </span>
          </div>
        </div>

        {/* VIP Promotion (if not VIP) */}
        {!isVip && (
          <Link
            href={`/${locale}/vip`}
            className="flex items-center gap-3 p-4 rounded-xl mb-8 border border-joy/30 bg-joy-muted transition-all duration-200 hover:border-joy"
          >
            <div className="size-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: "rgba(255,214,10,0.2)" }}>
              <Crown className="size-5 text-joy" />
            </div>
            <div className="flex-1">
              <p className="text-sm font-medium text-text-primary">Unlock DOPA VIP</p>
              <p className="text-xs text-text-muted">2x points, unlimited sim orders, exclusive skins</p>
            </div>
            <span className="text-xs font-bold text-joy">¥19.9/mo</span>
          </Link>
        )}

        {/* Stats */}
        <div className="grid grid-cols-4 gap-3 mb-8">
          {[
            { label: t("profile.dopaminePoints"), value: points.toLocaleString(), icon: Sparkles, color: "var(--joy)" },
            { label: "Coins", value: coins.toLocaleString(), icon: Coins, color: "var(--joy)", link: `/${locale}/coins` },
            { label: t("leaderboard.myRank"), value: `#${rank}`, icon: Trophy, color: "var(--brand)", link: `/${locale}/leaderboard` },
            { label: "Orders", value: "12", icon: Package, color: "var(--heal)" },
          ].map((stat) => {
            const content = (
              <div className="flex flex-col items-center gap-1.5 p-3 rounded-xl bg-bg-surface border border-border-default text-center transition-all duration-150 hover:border-brand/30">
                <stat.icon className="size-4" style={{ color: stat.color }} />
                <span className="text-base font-display font-bold text-text-primary">
                  {stat.value}
                </span>
                <span className="text-[11px] text-text-muted leading-tight">{stat.label}</span>
              </div>
            );
            if (stat.link) {
              return (
                <Link key={stat.label} href={stat.link} className="contents">
                  {content}
                </Link>
              );
            }
            return <div key={stat.label}>{content}</div>;
          })}
        </div>

        {/* Monetization Banner */}
        {isVip && (
          <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-bg-surface border border-border-default mb-8">
            <GlimmerDot size={8} color="var(--joy)" mode="breathe" />
            <span className="text-sm text-text-secondary flex-1">
              VIP Member · 2x points active · Expires Dec 2026
            </span>
            <Link href={`/${locale}/vip`} className="text-xs text-brand hover:underline">
              Manage
            </Link>
          </div>
        )}

        {/* Menu */}
        <div className="flex flex-col gap-1 mb-4">
          {[
            { icon: Package, label: t("profile.menu.orders"), href: `/${locale}/orders` },
            { icon: Coins, label: t("coins.title"), href: `/${locale}/coins` },
            { icon: Palette, label: t("skins.title"), href: `/${locale}/skins` },
            { icon: Trophy, label: t("leaderboard.title"), href: `/${locale}/leaderboard` },
            { icon: Heart, label: t("profile.menu.favorites"), href: "#" },
            { icon: MapPin, label: t("profile.menu.addresses"), href: "#" },
            { icon: CreditCard, label: t("profile.menu.payment"), href: "#" },
            { icon: Settings, label: t("profile.menu.settings"), href: "#" },
            { icon: HelpCircle, label: t("profile.menu.help"), href: "#" },
          ].map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-bg-surface transition-colors duration-150"
            >
              <item.icon className="size-5 text-text-secondary" />
              <span className="flex-1 text-sm text-text-primary">
                {item.label}
              </span>
              <ChevronRight className="size-4 text-text-muted" />
            </Link>
          ))}
        </div>

        {/* Logout */}
        <button className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-bg-surface transition-colors duration-150 w-full text-text-muted hover:text-brand">
          <LogOut className="size-5" />
          <span className="text-sm">{t("profile.menu.logout")}</span>
        </button>
      </main>
      <Footer />
    </div>
  );
}
