// Skin definitions for theme switching
// Free skins + VIP skins → feeds monetization
export interface Skin {
  id: string;
  name: string;
  nameEn: string;
  tier: "free" | "vip";
  price?: number; // coin price for VIP skins
  colors: {
    primary: string;    // hero block
    secondary: string;  // mood block
    tertiary: string;   // channel block
    accent: string;     // CTA block
    base: string;       // dark sections
    textLight: string;
    textDark: string;
  };
}

export const skins: Skin[] = [
  {
    id: "midnight",
    name: "暗夜",
    nameEn: "Midnight",
    tier: "free",
    colors: {
      primary: "#1A1520",    // deep aubergine
      secondary: "#1E1B2E",  // deep indigo
      tertiary: "#152022",   // deep teal
      accent: "#1E1A15",     // warm dark
      base: "#0D0B10",
      textLight: "#F0EDF5",
      textDark: "#050508",
    },
  },
  {
    id: "rose",
    name: "暗玫",
    nameEn: "Noir Rose",
    tier: "free",
    colors: {
      primary: "#1C1116",    // deep burgundy
      secondary: "#181420",  // plum
      tertiary: "#121A1A",   // dark sage
      accent: "#1C1512",     // warm brown
      base: "#0E0A0C",
      textLight: "#F5EFF2",
      textDark: "#050508",
    },
  },
  {
    id: "ocean",
    name: "深海",
    nameEn: "Deep Ocean",
    tier: "free",
    colors: {
      primary: "#0F1A1F",    // deep navy
      secondary: "#141820",  // slate
      tertiary: "#121D1C",   // dark mint
      accent: "#1A1A15",     // olive dark
      base: "#080D10",
      textLight: "#EDF2F5",
      textDark: "#050508",
    },
  },
  {
    id: "jacquemus",
    name: "Jacquemus",
    nameEn: "Jacquemus Sun",
    tier: "vip",
    price: 699,
    colors: {
      primary: "#1C1510",
      secondary: "#1C1914",
      tertiary: "#171C13",
      accent: "#1C1315",
      base: "#0D0A08",
      textLight: "#F5F0EB",
      textDark: "#050508",
    },
  },
  {
    id: "offwhite",
    name: "Off-White",
    nameEn: "Off-White Lab",
    tier: "vip",
    price: 899,
    colors: {
      primary: "#1A1A1D",
      secondary: "#1D1D22",
      tertiary: "#181A1D",
      accent: "#1D1A1A",
      base: "#0E0E10",
      textLight: "#F2F2F5",
      textDark: "#050508",
    },
  },
  {
    id: "gentlemonster",
    name: "Gentle Monster",
    nameEn: "GM Surreal",
    tier: "vip",
    price: 1299,
    colors: {
      primary: "#151A1C",
      secondary: "#1A181D",
      tertiary: "#151C18",
      accent: "#1C1815",
      base: "#0B0D0E",
      textLight: "#EFF2F3",
      textDark: "#050508",
    },
  },
];

export function getSkin(id: string): Skin {
  return skins.find((s) => s.id === id) || skins[0];
}
