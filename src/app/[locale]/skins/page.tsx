"use client";

import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";
import { Palette, Sparkles, Crown, ArrowLeft, Clock } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { BrandButton } from "@/components/brand/BrandButton";
import { Badge } from "@/components/brand/Badge";

const skins = [
  {
    id: "jacquemus",
    nameKey: "skins.jacquemus.name",
    coinPrice: 699,
    price: "¥6.99",
    color: "#FFB347",
    bgColor: "rgba(255,179,71,0.1)",
    type: "联名",
    limited: true,
  },
  {
    id: "offwhite",
    nameKey: "skins.offwhite.name",
    coinPrice: 899,
    price: "¥8.99",
    color: "#FFD60A",
    bgColor: "rgba(255,214,10,0.1)",
    type: "联名",
    permanent: true,
  },
  {
    id: "gentlemonster",
    nameKey: "skins.gm.name",
    coinPrice: 1299,
    price: "¥12.99",
    color: "#00D4C8",
    bgColor: "rgba(0,212,200,0.1)",
    type: "联名",
    permanent: true,
  },
  {
    id: "spring",
    nameKey: "skins.spring.name",
    coinPrice: 399,
    price: "¥3.99",
    color: "#FF3B5C",
    bgColor: "rgba(255,59,92,0.1)",
    type: "限定",
    limited: true,
  },
];

export default function SkinsPage() {
  const t = useTranslations();
  const locale = useLocale();

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="relative px-4 py-12 sm:py-16 text-center overflow-hidden" style={{ background: "linear-gradient(135deg, rgba(0,212,200,0.06) 0%, rgba(255,59,92,0.04) 100%)" }}>
          <div className="max-w-2xl mx-auto">
            <div className="flex justify-center mb-4">
              <div className="size-16 rounded-2xl flex items-center justify-center" style={{ backgroundColor: "rgba(0,212,200,0.12)" }}>
                <Palette className="size-8" style={{ color: "var(--heal)" }} />
              </div>
            </div>
            <h1 className="text-3xl sm:text-4xl font-display font-bold text-text-primary mb-3">
              {t("skins.title")}
            </h1>
            <p className="text-text-secondary text-lg max-w-md mx-auto">
              {t("skins.subtitle")}
            </p>
          </div>
        </section>

        <section className="px-4 sm:px-6 pb-24 max-w-5xl mx-auto -mt-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {skins.map((skin) => (
              <div key={skin.id} className="rounded-2xl border border-border-default bg-bg-surface overflow-hidden transition-all duration-200 hover:-translate-y-1 hover:border-brand/30">
                {/* Preview */}
                <div className="aspect-video flex items-center justify-center" style={{ backgroundColor: skin.bgColor }}>
                  <div className="flex flex-col items-center gap-2">
                    <Sparkles className="size-10" style={{ color: skin.color }} />
                    <span className="text-xs font-medium" style={{ color: skin.color }}>
                      {skin.type}
                    </span>
                  </div>
                </div>
                {/* Info */}
                <div className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-sm font-display font-bold text-text-primary">
                      {t(skin.nameKey)}
                    </h3>
                    {skin.limited && (
                      <span className="flex items-center gap-1 text-xs text-alert">
                        <Clock className="size-3" />
                        {t("skins.limited")}
                      </span>
                    )}
                    {skin.permanent && (
                      <Badge variant="verified">{t("skins.permanent")}</Badge>
                    )}
                  </div>
                  <div className="flex items-center justify-between mt-3">
                    <div>
                      <span className="text-sm font-display font-bold text-joy">
                        {skin.coinPrice} {t("coins.unit")}
                      </span>
                      <span className="text-xs text-text-muted ml-1">{skin.price}</span>
                    </div>
                    <BrandButton variant="dopamine" size="sm">
                      {t("skins.buy")}
                    </BrandButton>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <Link href={`/${locale}`} className="inline-flex items-center gap-1.5 text-sm text-text-secondary hover:text-brand transition-colors duration-150 mt-8">
            <ArrowLeft className="size-3.5" />
            {t("browse.back")}
          </Link>
        </section>
      </main>
      <Footer />
    </div>
  );
}
