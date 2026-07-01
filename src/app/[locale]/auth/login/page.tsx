"use client";

import Link from "next/link";
import { Mail, Lock, Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import { GlimmerDot } from "@/components/brand/GlimmerDot";
import { BrandButton } from "@/components/brand/BrandButton";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen flex">
      {/* Brand side */}
      <div className="hidden lg:flex flex-1 relative items-center justify-center bg-bg-surface overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="size-96 rounded-full bg-brand-muted opacity-20 blur-3xl" />
        </div>
        <div className="relative z-10 flex flex-col items-center text-center px-8">
          <GlimmerDot size={16} color="var(--brand)" mode="breathe" />
          <h1 className="mt-8 text-4xl font-display font-bold text-text-primary">
            <span className="text-gradient-brand">Dopamine</span> Luxury
          </h1>
          <p className="mt-4 text-text-secondary max-w-sm text-balance">
            Sign in to access your mood-driven shopping experience
          </p>
        </div>
      </div>

      {/* Form side */}
      <div className="flex-1 flex items-center justify-center px-4 sm:px-8">
        <div className="w-full max-w-sm">
          {/* Mobile logo */}
          <div className="lg:hidden flex items-center gap-2 mb-12">
            <GlimmerDot size={8} color="var(--brand)" mode="breathe" />
            <span className="text-gradient-brand font-display font-bold text-lg">
              Dopamine
            </span>
          </div>

          <h2 className="text-2xl font-display font-bold text-text-primary mb-2">
            Welcome back
          </h2>
          <p className="text-text-secondary text-sm mb-8">
            Sign in to your account
          </p>

          <form className="flex flex-col gap-4">
            {/* Email */}
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-text-muted" />
              <input
                type="email"
                placeholder="Email address"
                className="w-full h-12 pl-10 pr-4 rounded-xl bg-bg-surface border border-border-default text-text-primary text-sm placeholder:text-text-muted focus:outline-none focus:border-brand transition-colors duration-150"
              />
            </div>

            {/* Password */}
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-text-muted" />
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                className="w-full h-12 pl-10 pr-12 rounded-xl bg-bg-surface border border-border-default text-text-primary text-sm placeholder:text-text-muted focus:outline-none focus:border-brand transition-colors duration-150"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-text-muted hover:text-text-secondary transition-colors duration-150"
              >
                {showPassword ? (
                  <EyeOff className="size-4" />
                ) : (
                  <Eye className="size-4" />
                )}
              </button>
            </div>

            <BrandButton variant="coral" size="lg" className="w-full mt-2">
              Sign In
            </BrandButton>
          </form>

          <div className="mt-6 text-center">
            <span className="text-sm text-text-muted">
              Don&apos;t have an account?{" "}
              <Link
                href="/auth/register"
                className="text-brand hover:text-brand-hover transition-colors duration-150"
              >
                Sign up
              </Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
