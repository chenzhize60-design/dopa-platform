"use client";

import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";
import { Trophy, Crown, Medal, Zap } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const mockUsers = [
  { name: "时尚达人小美", level: "Lv.42", points: 128500, rank: 1, icon: Crown, color: "var(--warm)" },
  { name: "奢侈品猎人老K", level: "Lv.39", points: 112300, rank: 2, icon: Medal, color: "#A0A0B0" },
  { name: "假装买全世界", level: "Lv.37", points: 98700, rank: 3, icon: Medal, color: "#D4A574" },
  { name: "多巴胺上瘾者", level: "Lv.35", points: 87600, rank: 4 },
  { name: "我不买我就看看", level: "Lv.33", points: 76500, rank: 5 },
  { name: "深夜下单大师", level: "Lv.31", points: 65400, rank: 6 },
  { name: "冲动消费王者", level: "Lv.29", points: 54300, rank: 7 },
  { name: "理财就是多巴胺", level: "Lv.27", points: 43200, rank: 8 },
];

export default function LeaderboardPage() {
  const t = useTranslations();
  const locale = useLocale();

  return (
    <main className="overflow-x-hidden w-full max-w-full min-h-screen">
      <Header />
      <section className="section-cinema px-6 sm:px-12 lg:px-24 text-center">
        <div className="max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-8" style={{ backgroundColor: "rgba(232,195,0,0.1)", color: "var(--warm)", border: "1px solid rgba(232,195,0,0.15)" }}>
            <Trophy className="size-4" />{t("leaderboard.title")}
          </div>
          <h1 className="h2-cinema text-[var(--t-high)] mb-4">{t("leaderboard.subtitle")}</h1>
        </div>
      </section>

      {/* Your rank */}
      <section className="px-6 sm:px-12 lg:px-24 pb-6">
        <div className="max-w-2xl mx-auto">
          <div className="card-cinema p-6 flex items-center gap-6" style={{ borderColor: "rgba(232,195,0,0.15)" }}>
            <div className="size-16 rounded-full flex items-center justify-center text-2xl font-black" style={{ backgroundColor: "rgba(232,195,0,0.08)", color: "var(--warm)" }}>
              #12
            </div>
            <div className="flex-1">
              <p className="text-sm font-bold text-[var(--t-high)]">{t("leaderboard.myRank")}</p>
              <p className="text-xs mt-0.5" style={{ color: "var(--t-mid)" }}>{t("leaderboard.getBoost")}</p>
            </div>
            <span className="text-xs font-bold" style={{ color: "var(--warm)" }}>Lv.18 · 23,400 pts</span>
          </div>
        </div>
      </section>

      {/* Rankings */}
      <section className="px-6 sm:px-12 lg:px-24 pb-24">
        <div className="max-w-2xl mx-auto">
          <div className="space-y-3">
            {mockUsers.map((u, i) => {
              const Icon = u.icon;
              return (
                <div key={i} className="card-cinema p-4 flex items-center gap-4">
                  <div className="size-10 rounded-full flex items-center justify-center text-sm font-black"
                    style={{ backgroundColor: u.rank <= 3 ? `${u.color || "var(--warm)"}20` : "rgba(255,255,255,0.03)", color: u.color || "var(--t-mid)" }}>
                    {u.rank === 1 ? <Crown className="size-5" style={{ color: "var(--warm)" }} /> : `#${u.rank}`}
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-[var(--t-high)]">{u.name}</p>
                    <p className="text-xs" style={{ color: "var(--t-low)" }}>{u.level}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-bold" style={{ color: "var(--warm)" }}>{u.points.toLocaleString()}</p>
                    <p className="text-[10px]" style={{ color: "var(--t-low)" }}>pts</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <Footer />
</main>
  );
}
