import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";

export function Footer() {
  const t = useTranslations();
  const locale = useLocale();

  return (
    <footer className="section-cinema px-6 sm:px-12 lg:px-24 grain-overlay" style={{ borderTop: "1px solid rgba(255,255,255,0.04)" }}>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          <div>
            <p className="font-bold text-sm mb-4 text-[var(--t-high)]">DOPA</p>
            <div className="space-y-2 text-sm" style={{ color: "var(--t-mid)" }}>
              <p>{t("channels.luxury.name")}</p>
              <p>{t("channels.food.name")}</p>
              <p>{t("channels.live.name")}</p>
              <p>{t("header.nav.sim")}</p>
            </div>
          </div>
          <div>
            <p className="font-bold text-sm mb-4 text-[var(--t-high)]">{t("profile.title")}</p>
            <div className="space-y-2 text-sm" style={{ color: "var(--t-mid)" }}>
              <p>{t("profile.menu.orders")}</p>
              <p>{t("profile.menu.favorites")}</p>
              <p>{t("leaderboard.title")}</p>
            </div>
          </div>
          <div>
            <p className="font-bold text-sm mb-4 text-[var(--t-high)]">{t("vip.title")}</p>
            <div className="space-y-2 text-sm" style={{ color: "var(--t-mid)" }}>
              <p>{t("vip.benefitsTitle")}</p>
              <p>{t("coins.title")}</p>
              <p>{t("skins.title")}</p>
            </div>
          </div>
          <div>
            <p className="font-bold text-sm mb-4 text-[var(--t-high)]">{t("language.switch")}</p>
            <div className="space-y-2 text-sm" style={{ color: "var(--t-mid)" }}>
              <Link href={`/${locale === "zh" ? "en" : "zh"}`} className="hover:underline">{locale === "zh" ? "English" : "中文"}</Link>
            </div>
          </div>
        </div>
        <div className="pt-8 text-center text-xs" style={{ color: "var(--t-low)", borderTop: "1px solid rgba(255,255,255,0.04)" }}>
          {t("footer.tagline")}
        </div>
      </div>
    </footer>
  );
}
