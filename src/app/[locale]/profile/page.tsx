"use client";

import Link from "next/link";
import {
  User,
  Package,
  Heart,
  Settings,
  LogOut,
  Sparkles,
  ChevronRight,
} from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const stats = [
  { label: "Dopamine Points", value: "2,450", icon: Sparkles, color: "var(--joy)" },
  { label: "Orders", value: "12", icon: Package, color: "var(--brand)" },
  { label: "Favorites", value: "28", icon: Heart, color: "var(--heal)" },
];

const menuItems = [
  { label: "My Orders", href: "/orders", icon: Package },
  { label: "Favorites", href: "#", icon: Heart },
  { label: "Settings", href: "#", icon: Settings },
];

export default function ProfilePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 max-w-2xl mx-auto px-4 sm:px-6 py-12 w-full">
        {/* Profile header */}
        <div className="flex items-center gap-4 mb-10">
          <div className="size-16 rounded-full bg-brand-muted flex items-center justify-center">
            <User className="size-7 text-brand" />
          </div>
          <div>
            <h1 className="text-2xl font-display font-bold text-text-primary">
              Alex Chen
            </h1>
            <span className="text-sm text-text-secondary">
              alex.chen@email.com
            </span>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 mb-10">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col items-center gap-2 p-4 rounded-xl bg-bg-surface border border-border-default text-center"
            >
              <stat.icon className="size-5" style={{ color: stat.color }} />
              <span className="text-xl font-display font-bold text-text-primary">
                {stat.value}
              </span>
              <span className="text-xs text-text-muted">{stat.label}</span>
            </div>
          ))}
        </div>

        {/* Menu */}
        <div className="flex flex-col gap-1">
          {menuItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="flex items-center gap-3 px-4 py-3.5 rounded-xl hover:bg-bg-surface transition-colors duration-150"
            >
              <item.icon className="size-5 text-text-secondary" />
              <span className="flex-1 text-sm text-text-primary">
                {item.label}
              </span>
              <ChevronRight className="size-4 text-text-muted" />
            </Link>
          ))}
        </div>

        {/* Logout */}
        <button className="flex items-center gap-3 px-4 py-3.5 rounded-xl hover:bg-bg-surface transition-colors duration-150 w-full mt-4 text-text-muted hover:text-brand">
          <LogOut className="size-5" />
          <span className="text-sm">Sign Out</span>
        </button>
      </main>

      <Footer />
    </div>
  );
}
