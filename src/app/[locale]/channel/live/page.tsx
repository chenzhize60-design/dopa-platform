"use client";

import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";
import { Radio, ArrowLeft, Sparkles } from "lucide-react";
import { Header } from "@/components/layout/Header";

export default function LiveChannelPage() {
  const t = useTranslations();
  const locale = useLocale();

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 flex flex-col items-center justify-center px-4 py-24 text-center">
        <div
          className="flex size-20 items-center justify-center rounded-2xl mb-6"
          style={{ backgroundColor: "rgba(255,214,10,0.10)" }}
        >
          <Radio className="size-10" style={{ color: "var(--joy)" }} />
        </div>
        <h1 className="text-3xl font-display font-bold text-text-primary mb-3">
          {t("channels.live.name")}
        </h1>
        <p className="text-text-secondary max-w-md mb-8">
          感受3-2-1上链接的肾上腺素——假装在直播间疯狂抢购。即将上线。
        </p>
        <div className="flex items-center gap-3 text-sm text-text-muted mb-8">
          <Sparkles className="size-4" style={{ color: "var(--joy)" }} />
          <span>Coming Soon</span>
        </div>
        <Link
          href={`/${locale}`}
          className="inline-flex items-center gap-2 rounded-full border border-border-default px-6 py-3 text-sm text-text-secondary hover:text-text-primary hover:border-brand transition-all duration-200"
        >
          <ArrowLeft className="size-4" />
          {t("browse.back")}
        </Link>
      </main>
    </div>
  );
}
