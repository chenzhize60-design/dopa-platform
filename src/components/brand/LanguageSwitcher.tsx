"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/routing";
import { Globe } from "lucide-react";

export function LanguageSwitcher() {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  const toggleLocale = () => {
    const nextLocale = locale === "zh" ? "en" : "zh";
    router.replace(pathname, { locale: nextLocale });
  };

  return (
    <button
      onClick={toggleLocale}
      className="fixed bottom-24 right-4 z-50 flex items-center gap-2 rounded-full bg-bg-surface border border-border-default px-3 py-2 text-sm text-text-secondary hover:text-text-primary hover:border-brand shadow-lg transition-all duration-200"
      aria-label={`Switch to ${locale === "zh" ? "English" : "中文"}`}
    >
      <Globe className="h-4 w-4" />
      <span className="font-medium text-xs uppercase tracking-wide">
        {locale === "zh" ? "EN" : "中文"}
      </span>
    </button>
  );
}
