"use client";

import Link from "next/link";
import { Mail, Lock, Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import { useTranslations } from "next-intl";
import { GlimmerDot } from "@/components/brand/GlimmerDot";
import { BrandButton } from "@/components/brand/BrandButton";

export default function LoginPage() {
  const t = useTranslations();
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen flex">
      <div className="hidden lg:flex flex-1 relative items-center justify-center bg-bg-surface overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="size-96 rounded-full bg-brand-muted opacity-20 blur-3xl" />
        </div>
        <div className="relative z-10 flex flex-col items-center text-center px-8">
          <GlimmerDot size={16} color="var(--brand)" mode="breathe" />
          <h1 className="mt-8 text-4xl font-display font-bold text-text-primary">
            <span className="text-gradient-brand">{t("auth.brandName")}</span>
          </h1>
          <p className="mt-4 text-text-secondary max-w-sm text-balance">{t("meta.description")}</p>
        </div>
      </div>

      <div className="flex-1 flex items-center justify-center px-4 sm:px-8">
        <div className="w-full max-w-sm">
          <div className="lg:hidden flex items-center gap-2 mb-12">
            <GlimmerDot size={8} color="var(--brand)" mode="breathe" />
            <span className="text-gradient-brand font-display font-bold text-lg">{t("auth.brandName")}</span>
          </div>
          <h2 className="text-2xl font-display font-bold text-text-primary mb-2">{t("auth.login.title")}</h2>
          <form className="flex flex-col gap-4">
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-text-muted" />
              <input type="email" placeholder={t("auth.login.emailPlaceholder")} className="w-full h-12 pl-10 pr-4 rounded-xl bg-bg-surface border border-border-default text-text-primary text-sm placeholder:text-text-muted focus:outline-none focus:border-brand transition-colors duration-150" />
            </div>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-text-muted" />
              <input type={showPassword ? "text" : "password"} placeholder={t("auth.login.password")} className="w-full h-12 pl-10 pr-12 rounded-xl bg-bg-surface border border-border-default text-text-primary text-sm placeholder:text-text-muted focus:outline-none focus:border-brand transition-colors duration-150" />
              <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-1/2 -translate-y-1/2 text-text-muted hover:text-text-secondary transition-colors duration-150">
                {showPassword ? <EyeOff className="size-4" /> : <Eye className="size-4" />}
              </button>
            </div>
            <BrandButton variant="coral" size="lg" className="w-full mt-2">{t("auth.login.submit")}</BrandButton>
          </form>
          <div className="mt-6 text-center">
            <span className="text-sm text-text-muted">
              {t("auth.login.noAccount")}{" "}
              <Link href="/auth/register" className="text-brand hover:text-brand-hover transition-colors duration-150">{t("auth.register.title")}</Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
