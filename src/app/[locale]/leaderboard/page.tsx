"use client";

import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";
import { Trophy, Medal, Crown, Zap, ArrowLeft } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { BrandButton } from "@/components/brand/BrandButton";
import { GlimmerDot } from "@/components/brand/GlimmerDot";

const topUsers = [
  { rank: 1, name: "DopaKing", points: 5247, level: 7, titleKey: "leaderboard.titles.king" },
  { rank: 2, name: "FashionGuru", points: 4218, level: 6, titleKey: "leaderboard.titles.guru" },
  { rank: 3, name: "JoyCollector", points: 3891, level: 6, titleKey: "leaderboard.titles.guru" },
  { rank: 4, name: "VirtualVIP", points: 3150, level: 5, titleKey: "leaderboard.titles.connoisseur" },
  { rank: 5, name: "DopaQueen", points: 2890, level: 5, titleKey: "leaderboard.titles.connoisseur" },
  { rank: 6, name: "WindowShopper", points: 2456, level: 4, titleKey: "leaderboard.titles.hunter" },
  { rank: 7, name: "DreamBuyer", points: 2103, level: 4, titleKey: "leaderboard.titles.hunter" },
  { rank: 8, name: "LuxuryDream", points: 1850, level: 4, titleKey: "leaderboard.titles.hunter" },
];

function RankBadge({ rank }: { rank: number }) {
  if (rank === 1) return <Trophy className="size-5 text-joy drop-shadow-[0_0_6px_rgba(255,214,10,0.5)]" />;
  if (rank === 2) return <Medal className="size-5 text-text-secondary" />;
  if (rank === 3) return <Medal className="size-5" style={{ color: "#CD7F32" }} />;
  return <span className="text-sm font-bold text-text-muted w-5 text-center">{rank}</span>;
}

export default function LeaderboardPage() {
  const t = useTranslations();
  const locale = useLocale();

  return (
    <div className="min-h-screen flex flex-col page-enter">
      <Header />
      <main className="flex-1">
        <section className="relative px-4 py-14 sm:py-20 text-center" style={{ background: "linear-gradient(180deg, rgba(255,214,10,0.06) 0%, rgba(0,212,200,0.03) 100%)" }}>
          <div className="max-w-xl mx-auto">
            <div className="inline-flex items-center justify-center size-20 rounded-2xl mb-5" style={{ backgroundColor: "rgba(255,214,10,0.1)" }}>
              <Trophy className="size-10" style={{ color: "var(--joy)" }} />
            </div>
            <h1 className="text-4xl sm:text-5xl font-display font-black text-text-primary mb-3">{t("leaderboard.title")}</h1>
            <p className="text-text-secondary text-lg max-w-sm mx-auto">{t("leaderboard.subtitle")}</p>

            <div className="mt-8 inline-flex items-center gap-5 px-6 py-4 rounded-2xl bg-bg-surface border border-border-default">
              <div className="text-left"><span className="text-xs text-text-muted">{t("leaderboard.myRank")}</span><p className="text-sm font-bold text-text-primary">#{t("leaderboard.notRanked")}</p></div>
              <div className="w-px h-8 bg-border-default" />
              <div className="text-left"><span className="text-xs text-text-muted">{t("profile.dopaminePoints")}</span><p className="text-sm font-bold text-joy">1,247</p></div>
              <div className="w-px h-8 bg-border-default" />
              <div className="text-left"><span className="text-xs text-text-muted">{t("leaderboard.level")}</span><p className="text-sm font-bold text-heal">Lv.7</p></div>
            </div>

            <div className="mt-4">
              <Link href={`/${locale}/vip`}>
                <BrandButton variant="dopamine" size="sm"><Zap className="size-4" />{t("leaderboard.getBoost")}</BrandButton>
              </Link>
            </div>
          </div>
        </section>

        <section className="px-4 sm:px-6 pb-20 max-w-2xl mx-auto -mt-6">
          <div className="rounded-2xl border border-border-default bg-bg-surface overflow-hidden stagger">
            {topUsers.map((user) => (
              <div key={user.rank}
                className={`flex items-center gap-3 px-4 sm:px-6 py-4 border-b border-border-subtle last:border-0 transition-colors hover:bg-bg-elevated ${
                  user.rank <= 3 ? "bg-bg-elevated" : ""}`}>
                <div className="flex items-center justify-center w-8 shrink-0"><RankBadge rank={user.rank} /></div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-1.5">
                    <p className="text-sm font-medium text-text-primary truncate">{user.name}</p>
                    {user.rank === 1 && <Crown className="size-3.5 text-joy" />}
                  </div>
                  <p className="text-xs text-text-muted">{t(user.titleKey)}</p>
                </div>
                <div className="flex items-center gap-1.5 shrink-0">
                  <GlimmerDot size={6} color={user.rank <= 3 ? "var(--joy)" : "var(--brand)"} />
                  <span className="text-sm font-display font-bold text-text-primary">{user.points.toLocaleString()}</span>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
