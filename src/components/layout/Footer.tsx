"use client";

import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";
import { GlimmerDot } from "@/components/brand/GlimmerDot";

export function Footer() {
  const t = useTranslations();
  const locale = useLocale();

  return (
    <footer className="border-t border-border-default bg-bg-primary">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link
              href={`/${locale}`}
              className="flex items-center gap-2 font-display text-lg font-bold text-text-primary"
            >
              <GlimmerDot size={8} color="var(--brand)" />
              <span className="text-gradient-brand">DOPA·LUX</span>
            </Link>
            <p className="mt-3 text-sm text-text-muted leading-relaxed">
              {t("footer.tagline")}
            </p>
          </div>

          {/* Shop */}
          <div>
            <h4 className="text-xs font-medium text-text-secondary uppercase tracking-wider mb-4">
              {t("header.nav.shop")}
            </h4>
            <ul className="space-y-2">
              <li>
                <Link href={`/${locale}/browse/boost`} className="text-sm text-text-muted hover:text-text-primary transition-colors duration-150">
                  {t("moods.boost.label")}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/browse/heal`} className="text-sm text-text-muted hover:text-text-primary transition-colors duration-150">
                  {t("moods.heal.label")}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/browse/indulge`} className="text-sm text-text-muted hover:text-text-primary transition-colors duration-150">
                  {t("moods.indulge.label")}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/category/all`} className="text-sm text-text-muted hover:text-text-primary transition-colors duration-150">
                  {t("category.all")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Account */}
          <div>
            <h4 className="text-xs font-medium text-text-secondary uppercase tracking-wider mb-4">
              Account
            </h4>
            <ul className="space-y-2">
              <li>
                <Link href={`/${locale}/profile`} className="text-sm text-text-muted hover:text-text-primary transition-colors duration-150">
                  {t("header.nav.profile")}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/orders`} className="text-sm text-text-muted hover:text-text-primary transition-colors duration-150">
                  {t("header.nav.orders")}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/cart`} className="text-sm text-text-muted hover:text-text-primary transition-colors duration-150">
                  {t("header.nav.cart")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-xs font-medium text-text-secondary uppercase tracking-wider mb-4">
              Support
            </h4>
            <ul className="space-y-2">
              <li>
                <span className="text-sm text-text-muted">
                  help@dopamineluxury.com
                </span>
              </li>
              <li>
                <span className="text-sm text-text-muted">
                  Shanghai, China
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border-default flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="text-xs text-text-muted">
            {t("footer.copyright")}
          </span>
          <div className="flex items-center gap-6">
            <span className="text-xs text-text-muted hover:text-text-secondary cursor-pointer transition-colors duration-150">
              Privacy
            </span>
            <span className="text-xs text-text-muted hover:text-text-secondary cursor-pointer transition-colors duration-150">
              Terms
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
