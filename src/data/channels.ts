import {
  Gem,
  UtensilsCrossed,
  Radio,
  Plane,
  type LucideIcon,
} from "lucide-react";

export interface Channel {
  id: string;
  nameKey: string;
  descriptionKey: string;
  icon: string; // Lucide icon name
  color: string;
  glowColor: string;
  bgMuted: string;
  moodMapping: {
    boost: string;
    heal: string;
    indulge: string;
  };
  route: string;
}

export const channels: Channel[] = [
  {
    id: "luxury",
    nameKey: "channels.luxury.name",
    descriptionKey: "channels.luxury.description",
    icon: "Gem",
    color: "var(--brand)",
    glowColor: "rgba(255,59,92,0.15)",
    bgMuted: "rgba(255,59,92,0.08)",
    moodMapping: {
      boost: "channel/luxury/browse/boost",
      heal: "channel/luxury/browse/heal",
      indulge: "channel/luxury/browse/indulge",
    },
    route: "channel/luxury",
  },
  {
    id: "food",
    nameKey: "channels.food.name",
    descriptionKey: "channels.food.description",
    icon: "UtensilsCrossed",
    color: "var(--heal)",
    glowColor: "rgba(0,212,200,0.15)",
    bgMuted: "rgba(0,212,200,0.08)",
    moodMapping: {
      boost: "channel/food",
      heal: "channel/food",
      indulge: "channel/food",
    },
    route: "channel/food",
  },
  {
    id: "live",
    nameKey: "channels.live.name",
    descriptionKey: "channels.live.description",
    icon: "Radio",
    color: "var(--joy)",
    glowColor: "rgba(255,214,10,0.15)",
    bgMuted: "rgba(255,214,10,0.08)",
    moodMapping: {
      boost: "channel/live",
      heal: "channel/live",
      indulge: "channel/live",
    },
    route: "channel/live",
  },
  {
    id: "travel",
    nameKey: "channels.travel.name",
    descriptionKey: "channels.travel.description",
    icon: "Plane",
    color: "var(--alert)",
    glowColor: "rgba(255,140,66,0.15)",
    bgMuted: "rgba(255,140,66,0.08)",
    moodMapping: {
      boost: "channel/travel",
      heal: "channel/travel",
      indulge: "channel/travel",
    },
    route: "channel/travel",
  },
];

export const iconMap: Record<string, LucideIcon> = {
  Gem,
  UtensilsCrossed,
  Radio,
  Plane,
};
