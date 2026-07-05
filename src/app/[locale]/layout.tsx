import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { LanguageSwitcher } from "@/components/brand/LanguageSwitcher";
import { ClientProviders } from "@/components/ClientProviders";
import type { Metadata } from "next";

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export function generateMetadata(): Metadata {
  return {
    title: "DOPA·LUX — Dopamine Luxury",
    description:
      "A dopamine-fueled luxury shopping experience. Shop by mood, not by category.",
    keywords: ["luxury", "shopping", "dopamine", "mood", "fashion"],
  };
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as "zh" | "en")) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <NextIntlClientProvider messages={messages}>
      <ClientProviders>
        {children}
      </ClientProviders>
      <LanguageSwitcher />
    </NextIntlClientProvider>
  );
}
