"use client";

import { ReactNode } from "react";
import { SkinProvider } from "@/contexts/SkinContext";

export function ClientProviders({ children }: { children: ReactNode }) {
  return <SkinProvider>{children}</SkinProvider>;
}
