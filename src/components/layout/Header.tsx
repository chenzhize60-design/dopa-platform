"use client";

import Link from "next/link";
import { ShoppingBag, Menu, User, Search } from "lucide-react";
import { useTranslations, useLocale } from "next-intl";
import { GlimmerDot } from "@/components/brand/GlimmerDot";

export function Header() {
  const t = useTranslations();
  const locale = useLocale();

  return (
    <header className="sticky top-0 z-50 glass">
      <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-4 sm:px-6">
        {/* Logo */}
        <Link
          href={`/${locale}`}
          className="flex items-center gap-2 font-display text-lg font-bold text-text-primary hover:opacity-80 transition-opacity duration-150"
        >
          <GlimmerDot size={8} color="var(--brand)" />
          <span className="text-gradient-brand">DOPA·LUX</span>
        </Link>

        {/* Nav — desktop */}
        <nav className="hidden md:flex items-center gap-5">
          <Link
            href={`/${locale}/channel/luxury/browse/boost`}
            className="text-sm text-text-secondary hover:text-text-primary transition-colors duration-150"
          >
            {t("header.nav.shop")}
          </Link>
          <Link
            href={`/${locale}/sim-order`}
            className="text-sm text-text-secondary hover:text-brand transition-colors duration-150"
          >
            {t("header.nav.sim")}
          </Link>
          <Link
            href={`/${locale}/vip`}
            className="text-sm font-medium text-joy hover:brightness-110 transition-all duration-150"
          >
            VIP
          </Link>
          <Link
            href={`/${locale}/leaderboard`}
            className="text-sm text-text-secondary hover:text-text-primary transition-colors duration-150"
          >
            {t("leaderboard.title")}
          </Link>
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <button
            className="flex items-center justify-center size-9 rounded-full text-text-secondary hover:text-text-primary hover:bg-bg-elevated transition-colors duration-150"
            aria-label="Search"
          >
            <Search className="size-5" />
          </button>
          <Link
            href={`/${locale}/cart`}
            className="relative flex items-center justify-center size-9 rounded-full text-text-secondary hover:text-text-primary hover:bg-bg-elevated transition-colors duration-150"
            aria-label={t("header.nav.cart")}
          >
            <ShoppingBag className="size-5" />
            <span className="absolute -top-0.5 -right-0.5 flex items-center justify-center size-4 rounded-full bg-brand text-[10px] font-bold text-white">
              3
            </span>
          </Link>
          <Link
            href={`/${locale}/profile`}
            className="flex items-center justify-center size-9 rounded-full text-text-secondary hover:text-text-primary hover:bg-bg-elevated transition-colors duration-150"
            aria-label={t("header.nav.profile")}
          >
            <User className="size-5" />
          </Link>
          <button
            className="md:hidden flex items-center justify-center size-9 rounded-full text-text-secondary hover:text-text-primary hover:bg-bg-elevated transition-colors duration-150"
            aria-label="Menu"
          >
            <Menu className="size-5" />
          </button>
        </div>
      </div>
    </header>
  );
}
