"use client";

import { useMemo } from "react";
import Link from "next/link";
import { Zap, Heart, Crown } from "lucide-react";
import { useTranslations, useLocale } from "next-intl";
import { motion } from "framer-motion";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { GlimmerParticles } from "@/components/brand/GlimmerParticles";
import { MoodCard } from "@/components/brand/MoodCard";
import { ChannelCard } from "@/components/channel/ChannelCard";
import { channels, iconMap } from "@/data/channels";

const moodDefs = [
  { key: "boost", icon: Zap, labelKey: "moods.boost.label", descKey: "moods.boost.description", color: "var(--brand)", borderColor: "rgba(255,59,92,0.15)", glowColor: "rgba(255,59,92,0.15)", bgMuted: "rgba(255,59,92,0.08)" },
  { key: "heal", icon: Heart, labelKey: "moods.heal.label", descKey: "moods.heal.description", color: "var(--heal)", borderColor: "rgba(0,212,200,0.15)", glowColor: "rgba(0,212,200,0.15)", bgMuted: "rgba(0,212,200,0.08)" },
  { key: "indulge", icon: Crown, labelKey: "moods.indulge.label", descKey: "moods.indulge.description", color: "var(--joy)", borderColor: "rgba(255,214,10,0.15)", glowColor: "rgba(255,214,10,0.15)", bgMuted: "rgba(255,214,10,0.08)" },
];

export default function HomePage() {
  const t = useTranslations();
  const locale = useLocale();

  return (
    <div className="min-h-screen flex flex-col page-enter">
      <Header />

      {/* Hero — emotional gateway */}
      <section className="relative flex flex-col items-center justify-center px-4 pt-24 sm:pt-36 pb-16 overflow-hidden">
        <GlimmerParticles count={35} className="absolute inset-0" />

        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-10 flex flex-col items-center text-center max-w-3xl"
        >
          <span className="text-[11px] tracking-[0.25em] uppercase font-medium mb-5 px-4 py-1.5 rounded-full border border-brand/20 bg-brand-muted"
            style={{ color: "var(--brand)" }}>
            {t("home.badge")}
          </span>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-black text-text-primary text-balance leading-[1.08] tracking-tight">
            {t("home.title")}{" "}
            <span className="text-gradient-brand">{t("home.titleHighlight")}</span>
            <br />
            {t("home.titleEnd")}
          </h1>

          <p className="mt-6 text-base sm:text-lg text-text-secondary max-w-lg text-balance leading-relaxed">
            {t("home.subtitle")}
          </p>
        </motion.div>
      </section>

      {/* Mood Cards — three emotional doors */}
      <section className="relative px-4 sm:px-6 max-w-3xl mx-auto w-full pb-8 stagger">
        {moodDefs.map((mood) => (
          <Link key={mood.key} href={`/${locale}/channel/luxury/browse/${mood.key}`}>
            <div className="card-magnetic">
              <MoodCard
                icon={mood.icon}
                label={t(mood.labelKey)}
                description={t(mood.descKey)}
                color={mood.color}
                borderColor={mood.borderColor}
                glowColor={mood.glowColor}
                bgMuted={mood.bgMuted}
              />
            </div>
          </Link>
        ))}
      </section>

      {/* Section Divider */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 w-full py-4">
        <div className="section-divider" />
      </div>

      {/* Channels — the multi-verse marketplace */}
      <section className="relative px-4 sm:px-6 max-w-5xl mx-auto w-full pb-24">
        <div className="text-center mb-10">
          <span className="text-[10px] tracking-[0.2em] uppercase text-text-muted mb-3 block">
            {t("home.pickChannel")}
          </span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 stagger">
          {channels.map((ch) => {
            const Icon = iconMap[ch.icon];
            return (
              <Link key={ch.id} href={`/${locale}/${ch.route}`}>
                <div className="card-magnetic">
                  <ChannelCard
                    icon={Icon}
                    name={t(ch.nameKey)}
                    description={t(ch.descriptionKey)}
                    color={ch.color}
                    glowColor={ch.glowColor}
                    bgMuted={ch.bgMuted}
                  />
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      <Footer />
    </div>
  );
}
