"use client";

import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { GlimmerParticles } from "@/components/brand/GlimmerParticles";
import { MoodCard } from "@/components/brand/MoodCard";
import { ChannelCard } from "@/components/channel/ChannelCard";
import { channels, iconMap } from "@/data/channels";

const moodDefs = [
  {
    key: "boost",
    icon: "Zap",
    labelKey: "moods.boost.label",
    descKey: "moods.boost.description",
    color: "var(--brand)",
    borderColor: "rgba(255,59,92,0.15)",
    glowColor: "rgba(255,59,92,0.15)",
    bgMuted: "rgba(255,59,92,0.08)",
  },
  {
    key: "heal",
    icon: "Heart",
    labelKey: "moods.heal.label",
    descKey: "moods.heal.description",
    color: "var(--heal)",
    borderColor: "rgba(0,212,200,0.15)",
    glowColor: "rgba(0,212,200,0.15)",
    bgMuted: "rgba(0,212,200,0.08)",
  },
  {
    key: "indulge",
    icon: "Crown",
    labelKey: "moods.indulge.label",
    descKey: "moods.indulge.description",
    color: "var(--joy)",
    borderColor: "rgba(255,214,10,0.15)",
    glowColor: "rgba(255,214,10,0.15)",
    bgMuted: "rgba(255,214,10,0.08)",
  },
];

import { Zap, Heart, Crown } from "lucide-react";
const moodIconMap: Record<string, typeof Zap> = { Zap, Heart, Crown };

export default function HomePage() {
  const t = useTranslations();
  const locale = useLocale();

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero — mood picker */}
      <section className="relative flex flex-col items-center justify-center px-4 pt-20 sm:pt-28 pb-12 overflow-hidden">
        <GlimmerParticles count={30} className="absolute inset-0" />
        <div className="relative z-10 flex flex-col items-center text-center max-w-3xl">
          <span className="text-xs tracking-[0.2em] uppercase text-brand font-medium mb-4">
            {t("home.badge")}
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-text-primary text-balance leading-tight">
            {t("home.title")}{" "}
            <span className="text-gradient-brand">{t("home.titleHighlight")}</span>{" "}
            {t("home.titleEnd")}
          </h1>
          <p className="mt-6 text-base sm:text-lg text-text-secondary max-w-xl text-balance">
            {t("home.subtitle")}
          </p>
        </div>
      </section>

      {/* Mood Cards — these now serve as cross-channel mood filters */}
      <section className="relative px-4 sm:px-6 max-w-3xl mx-auto w-full pb-8">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
          {moodDefs.map((mood) => {
            const Icon = moodIconMap[mood.icon];
            return (
              <Link
                key={mood.key}
                href={`/${locale}/channel/luxury/browse/${mood.key}`}
              >
                <MoodCard
                  icon={Icon}
                  label={t(mood.labelKey)}
                  description={t(mood.descKey)}
                  color={mood.color}
                  borderColor={mood.borderColor}
                  glowColor={mood.glowColor}
                  bgMuted={mood.bgMuted}
                />
              </Link>
            );
          })}
        </div>
      </section>

      {/* Channel Grid — the multi-channel marketplace */}
      <section className="relative px-4 sm:px-6 max-w-5xl mx-auto w-full pb-24">
        <h2 className="text-xl font-display font-bold text-text-primary mb-6 text-center">
          {t("home.pickChannel")}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {channels.map((ch) => {
            const Icon = iconMap[ch.icon];
            return (
              <Link key={ch.id} href={`/${locale}/${ch.route}`}>
                <ChannelCard
                  icon={Icon}
                  name={t(ch.nameKey)}
                  description={t(ch.descriptionKey)}
                  color={ch.color}
                  glowColor={ch.glowColor}
                  bgMuted={ch.bgMuted}
                />
              </Link>
            );
          })}
        </div>
      </section>

      <Footer />
    </div>
  );
}
