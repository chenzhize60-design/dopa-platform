"use client";

import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";
import { UtensilsCrossed, ArrowLeft, Sparkles } from "lucide-react";
import { Header } from "@/components/layout/Header";

export default function FoodChannelPage() {
  const t = useTranslations();
  const locale = useLocale();

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 flex flex-col items-center justify-center px-4 py-24 text-center">
        <div
          className="flex size-20 items-center justify-center rounded-2xl mb-6"
          style={{ backgroundColor: "rgba(0,212,200,0.10)" }}
        >
          <UtensilsCrossed
            className="size-10"
            style={{ color: "var(--heal)" }}
          />
        </div>
        <h1 className="text-3xl font-display font-bold text-text-primary mb-3">
          {t("channels.food.name")}
        </h1>
        <p className="text-text-secondary max-w-md mb-8">
          假装点米其林、怀石料理、深夜烧烤——视觉盛宴，零卡路里。即将上线。
        </p>
        <div className="flex items-center gap-3 text-sm text-text-muted mb-8">
          <Sparkles className="size-4" style={{ color: "var(--heal)" }} />
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
