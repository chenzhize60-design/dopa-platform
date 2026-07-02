"use client";

import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";
import { Trophy, Medal, Crown, Zap, ArrowLeft } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { BrandButton } from "@/components/brand/BrandButton";
import { GlimmerDot } from "@/components/brand/GlimmerDot";

const topUsers = [
  { rank: 1, name: "多巴胺王者", points: 5247, level: 7, titleKey: "leaderboard.titles.king" },
  { rank: 2, name: "时尚猎人", points: 4218, level: 6, titleKey: "leaderboard.titles.guru" },
  { rank: 3, name: "快乐收集家", points: 3891, level: 6, titleKey: "leaderboard.titles.guru" },
  { rank: 4, name: "VirtualVIP", points: 3150, level: 5, titleKey: "leaderboard.titles.connoisseur" },
  { rank: 5, name: "DopaQueen", points: 2890, level: 5, titleKey: "leaderboard.titles.connoisseur" },
  { rank: 6, name: "逛逛不买", points: 2456, level: 4, titleKey: "leaderboard.titles.hunter" },
  { rank: 7, name: "幻想买家", points: 2103, level: 4, titleKey: "leaderboard.titles.hunter" },
  { rank: 8, name: "LuxuryDream", points: 1850, level: 4, titleKey: "leaderboard.titles.hunter" },
];

function RankIcon({ rank }: { rank: number }) {
  if (rank === 1) return <Trophy className="size-5 text-joy" />;
  if (rank === 2) return <Medal className="size-5 text-text-secondary" />;
  if (rank === 3) return <Medal className="size-5" style={{ color: "#CD7F32" }} />;
  return <span className="text-sm font-bold text-text-muted w-5 text-center">{rank}</span>;
}

export default function LeaderboardPage() {
  const t = useTranslations();
  const locale = useLocale();

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero */}
        <section className="relative px-4 py-10 sm:py-16 text-center" style={{ background: "linear-gradient(135deg, rgba(255,59,92,0.06) 0%, rgba(255,214,10,0.08) 50%, rgba(0,212,200,0.04) 100%)" }}>
          <div className="max-w-xl mx-auto">
            <div className="flex justify-center mb-4">
              <div className="size-16 rounded-2xl flex items-center justify-center" style={{ backgroundColor: "rgba(255,214,10,0.12)" }}>
                <Trophy className="size-8" style={{ color: "var(--joy)" }} />
              </div>
            </div>
            <h1 className="text-3xl sm:text-4xl font-display font-bold text-text-primary mb-3">
              {t("leaderboard.title")}
            </h1>
            <p className="text-text-secondary text-lg max-w-md mx-auto">
              {t("leaderboard.subtitle")}
            </p>

            {/* My rank */}
            <div className="mt-6 inline-flex items-center gap-4 px-6 py-4 rounded-2xl bg-bg-surface border border-border-default">
              <div className="text-left">
                <span className="text-xs text-text-muted">{t("leaderboard.myRank")}</span>
                <p className="text-sm font-bold text-text-primary">
                  #{t("leaderboard.notRanked")}
                </p>
              </div>
              <div className="w-px h-8 bg-border-default" />
              <div className="text-left">
                <span className="text-xs text-text-muted">{t("profile.dopaminePoints")}</span>
                <p className="text-sm font-bold text-joy">1,247</p>
              </div>
              <div className="w-px h-8 bg-border-default" />
              <div className="text-left">
                <span className="text-xs text-text-muted">{t("leaderboard.level")}</span>
                <p className="text-sm font-bold text-heal">Lv.7</p>
              </div>
            </div>

            {/* Boost CTA */}
            <div className="mt-4">
              <Link href={`/${locale}/vip`}>
                <BrandButton variant="dopamine" size="sm">
                  <Zap className="size-4" />
                  {t("leaderboard.getBoost")}
                </BrandButton>
              </Link>
            </div>
          </div>
        </section>

        {/* Leaderboard */}
        <section className="px-4 sm:px-6 pb-24 max-w-2xl mx-auto -mt-6">
          <div className="rounded-2xl border border-border-default bg-bg-surface overflow-hidden">
            {topUsers.map((user) => (
              <div
                key={user.rank}
                className={`flex items-center gap-3 px-4 sm:px-6 py-3.5 border-b border-border-subtle last:border-0 transition-colors ${
                  user.rank <= 3 ? "bg-bg-elevated" : ""
                }`}
              >
                <div className="flex items-center justify-center w-8 shrink-0">
                  <RankIcon rank={user.rank} />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-text-primary truncate">
                    {user.name}
                  </p>
                  <p className="text-xs text-text-muted">{t(user.titleKey)}</p>
                </div>
                <div className="flex items-center gap-1.5 shrink-0">
                  <GlimmerDot
                    size={6}
                    color={user.rank <= 3 ? "var(--joy)" : "var(--brand)"}
                  />
                  <span className="text-sm font-display font-bold text-text-primary">
                    {user.points.toLocaleString()}
                  </span>
                </div>
              </div>
            ))}
          </div>
          <Link href={`/${locale}`} className="inline-flex items-center gap-1.5 text-sm text-text-secondary hover:text-brand transition-colors duration-150 mt-6">
            <ArrowLeft className="size-3.5" />
            {t("browse.back")}
          </Link>
        </section>
      </main>
      <Footer />
    </div>
  );
}
