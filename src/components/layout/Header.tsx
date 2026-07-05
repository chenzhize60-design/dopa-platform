"use client";

import Link from "next/link";
import { usePathname, useRouter } from "@/i18n/routing";
import { ShoppingBag, Menu, User, Globe } from "lucide-react";
import { useTranslations, useLocale } from "next-intl";

export function Header() {
  const t = useTranslations();
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  const toggleLocale = () => {
    const nextLocale = locale === "zh" ? "en" : "zh";
    router.replace(pathname, { locale: nextLocale });
  };

  return (
    <header className="sticky top-0 z-50 nav-cinema">
      <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-4 sm:px-6">
        <Link href={`/${locale}`} className="flex items-center gap-2 font-bold text-lg transition-opacity duration-200 hover:opacity-80"
          style={{ fontFamily: "var(--font-display)" }}>
          <span style={{ color: "var(--accent)" }}>DOPA</span>
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          <Link href={`/${locale}/channel/luxury/browse/boost`} className="text-sm transition-colors duration-150 hover:opacity-80"
            style={{ color: "var(--t-mid)" }}>
            {t("channels.luxury.name")}
          </Link>
          <Link href={`/${locale}/channel/food`} className="text-sm transition-colors duration-150 hover:opacity-80"
            style={{ color: "var(--t-mid)" }}>
            {t("channels.food.name")}
          </Link>
          <Link href={`/${locale}/channel/live`} className="text-sm transition-colors duration-150 hover:opacity-80"
            style={{ color: "var(--t-mid)" }}>
            {t("channels.live.name")}
          </Link>
          <Link href={`/${locale}/sim-order`} className="text-sm font-semibold transition-colors duration-150 hover:opacity-80"
            style={{ color: "var(--accent)" }}>
            {t("header.nav.sim")}
          </Link>
          <Link href={`/${locale}/vip`} className="text-sm font-semibold transition-colors duration-150 hover:opacity-80"
            style={{ color: "var(--warm)" }}>
            {t("header.nav.vip")}
          </Link>
        </nav>

        <div className="flex items-center gap-2">
          {/* Language switcher */}
          <button onClick={toggleLocale}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 hover:opacity-80"
            style={{ background: "rgba(255,255,255,0.05)", color: "var(--t-mid)", border: "1px solid rgba(255,255,255,0.08)" }}>
            <Globe className="size-3.5" />
            {locale === "zh" ? "EN" : "中文"}
          </button>

          <Link href={`/${locale}/cart`} className="relative flex items-center justify-center size-9 rounded-full transition-colors duration-150 hover:bg-white/[0.04]"
            style={{ color: "var(--t-mid)" }} aria-label={t("header.nav.cart")}>
            <ShoppingBag className="size-4" />
          </Link>
          <Link href={`/${locale}/profile`} className="flex items-center justify-center size-9 rounded-full transition-colors duration-150 hover:bg-white/[0.04]"
            style={{ color: "var(--t-mid)" }} aria-label={t("header.nav.profile")}>
            <User className="size-4" />
          </Link>
          <button className="md:hidden flex items-center justify-center size-9 rounded-full transition-colors duration-150 hover:bg-white/[0.04]"
            style={{ color: "var(--t-mid)" }} aria-label="Menu">
            <Menu className="size-4" />
          </button>
        </div>
      </div>
    </header>
  );
}
