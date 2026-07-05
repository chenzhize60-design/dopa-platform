"use client";

import { createContext, useContext, useState, useCallback, type ReactNode } from "react";
import { skins, getSkin, type Skin } from "@/lib/skins";

interface SkinContextType {
  current: Skin;
  switchSkin: (id: string) => void;
  available: Skin[];
}

const SkinContext = createContext<SkinContextType>({
  current: skins[0],
  switchSkin: () => {},
  available: skins,
});

export function SkinProvider({ children }: { children: ReactNode }) {
  const [skinId, setSkinId] = useState("midnight");

  const switchSkin = useCallback((id: string) => {
    const skin = getSkin(id);
    if (skin) {
      setSkinId(id);
      // Apply skin colors as CSS variables
      const root = document.documentElement;
      root.style.setProperty("--block-1", skin.colors.primary);
      root.style.setProperty("--block-2", skin.colors.secondary);
      root.style.setProperty("--block-3", skin.colors.tertiary);
      root.style.setProperty("--block-4", skin.colors.accent);
      root.style.setProperty("--void", skin.colors.base);
    }
  }, []);

  return (
    <SkinContext.Provider value={{ current: getSkin(skinId), switchSkin, available: skins }}>
      {children}
    </SkinContext.Provider>
  );
}

export const useSkin = () => useContext(SkinContext);
