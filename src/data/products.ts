export interface Product {
  slug: string;
  brand: string;
  name: string;
  price: string;
  originalPrice?: string;
  description: string;
  story: string;
  images: string[];
  category: string;
  mood: "boost" | "heal" | "indulge";
  badge?: {
    label: string;
    variant: "new" | "limited" | "verified" | "hot";
  };
  rating: number;
  reviews: number;
}

export const products: Product[] = [
  {
    slug: "celine-triomphe-bag",
    brand: "Celine",
    name: "Triomphe Shoulder Bag in Shiny Calfskin",
    price: "¥28,500",
    description:
      "Classic Triomphe shoulder bag crafted in shiny calfskin with gold-finish metal clasp. A timeless piece for the modern wardrobe.",
    story:
      "Inspired by the Arc de Triomphe chain motif from the 1970s, the Triomphe bag carries the spirit of Parisian elegance. Each piece is hand-stitched by artisans in Florence.",
    images: [
      "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=800&q=80",
      "https://images.unsplash.com/photo-1591561954557-26941169b49e?w=800&q=80",
    ],
    category: "bags",
    mood: "boost",
    badge: { label: "Hot", variant: "hot" },
    rating: 4.9,
    reviews: 234,
  },
  {
    slug: "loewe-puzzle-edge",
    brand: "Loewe",
    name: "Puzzle Edge Bag in Classic Calfskin",
    price: "¥23,900",
    description:
      "The iconic Puzzle bag reimagined with folded geometric panels. An architectural masterpiece in soft calfskin.",
    story:
      "Jonathan Anderson's debut bag for Loewe. The Puzzle can be folded completely flat, inspired by origami. Each bag requires 524 precision cuts and 9 hours of hand assembly.",
    images: [
      "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=800&q=80",
      "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=800&q=80",
    ],
    category: "bags",
    mood: "indulge",
    badge: { label: "Verified", variant: "verified" },
    rating: 4.8,
    reviews: 189,
  },
  {
    slug: "bv-cassette-bag",
    brand: "Bottega Veneta",
    name: "Cassette Bag in Intrecciato Leather",
    price: "¥32,000",
    originalPrice: "¥38,000",
    description:
      "The Cassette bag features the iconic intrecciato weave. Padded leather with a magnetic closure and interior zip pocket.",
    story:
      "Bottega Veneta's intrecciato weave was born in the 1960s when the brand's sewing machines were too delicate for thick leather. The artisans invented a weaving technique that became the house's signature.",
    images: [
      "https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?w=800&q=80",
      "https://images.unsplash.com/photo-1575032617751-6ddec2089882?w=800&q=80",
    ],
    category: "bags",
    mood: "indulge",
    badge: { label: "Limited", variant: "limited" },
    rating: 4.7,
    reviews: 156,
  },
  {
    slug: "jacquemus-le-chiquito",
    brand: "Jacquemus",
    name: "Le Chiquito Mini Leather Bag",
    price: "¥5,800",
    description:
      "The cult-favorite mini bag. Surprisingly spacious for its size. A playful addition to any look.",
    story:
      "Simon Porte Jacquemus designed Le Chiquito as a joke — a bag so small it could barely hold anything. It became a viral sensation and redefined the mini bag trend.",
    images: [
      "https://images.unsplash.com/photo-1598532163257-ae3c6b2524b6?w=800&q=80",
      "https://images.unsplash.com/photo-1601924638867-3a6de6b7a500?w=800&q=80",
    ],
    category: "bags",
    mood: "boost",
    badge: { label: "New", variant: "new" },
    rating: 4.6,
    reviews: 312,
  },
  {
    slug: "hermes-avalon-blanket",
    brand: "Hermes",
    name: "Avalon III Throw Blanket in Cashmere",
    price: "¥12,800",
    description:
      "Luxurious cashmere throw blanket with contrast saddle-stitched hem. The ultimate home comfort piece.",
    story:
      "Named after the mythical island paradise, the Avalon blanket wraps you in the warmth of Hermes' finest cashmere. Each blanket passes through 18 quality checks before leaving the atelier.",
    images: [
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&q=80",
      "https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?w=800&q=80",
    ],
    category: "home",
    mood: "heal",
    badge: { label: "Verified", variant: "verified" },
    rating: 5.0,
    reviews: 89,
  },
  {
    slug: "diptyque-roses-candle",
    brand: "Diptyque",
    name: "Roses Scented Candle 190g",
    price: "¥560",
    description:
      "A bouquet of freshly picked roses captured in wax. The scent of a blooming garden in Paris.",
    story:
      "Founded in 1961 at 34 Boulevard Saint-Germain, Diptyque started as a boutique for fabric and wallpaper designs. The founders' passion for travel and art led them to create the world's most beloved candles.",
    images: [
      "https://images.unsplash.com/photo-1602028915047-37269d1a73f7?w=800&q=80",
      "https://images.unsplash.com/photo-1600612253971-422e7f7faeb6?w=800&q=80",
    ],
    category: "home",
    mood: "heal",
    badge: { label: "Hot", variant: "hot" },
    rating: 4.8,
    reviews: 456,
  },
  {
    slug: "cartier-tank-watch",
    brand: "Cartier",
    name: "Tank Must Watch, Small Model",
    price: "¥24,500",
    description:
      "The iconic Tank watch with a quartz movement. Clean lines inspired by the Renault tank of WWI.",
    story:
      "Louis Cartier designed the Tank in 1917, inspired by the aerial view of a Renault tank. The parallel brancards became the defining feature of a design that has remained virtually unchanged for over 100 years.",
    images: [
      "https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=800&q=80",
      "https://images.unsplash.com/photo-1547996160-81dfa63595aa?w=800&q=80",
    ],
    category: "watches",
    mood: "boost",
    badge: { label: "Verified", variant: "verified" },
    rating: 4.9,
    reviews: 178,
  },
  {
    slug: "byredo-gypsy-water",
    brand: "Byredo",
    name: "Gypsy Water Eau de Parfum 50ml",
    price: "¥1,450",
    description:
      "A woody aromatic fragrance evoking the romance of the nomadic lifestyle. Bergamot, juniper berries, and sandalwood.",
    story:
      "Ben Gorham founded Byredo in Stockholm in 2006 with a vision to translate memories and emotions into scent. Gypsy Water captures the scent of fresh soil, deep forests, and campfires under a starry sky.",
    images: [
      "https://images.unsplash.com/photo-1541643600914-78b084683601?w=800&q=80",
      "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=800&q=80",
    ],
    category: "fragrance",
    mood: "heal",
    badge: { label: "New", variant: "new" },
    rating: 4.7,
    reviews: 523,
  },
];

export const moods = [
  {
    id: "boost",
    label: "Boost",
    description: "Energize your presence with bold statement pieces",
    color: "var(--brand)",
    borderColor: "rgba(255,59,92,0.2)",
    glowColor: "rgba(255,59,92,0.15)",
    bgMuted: "rgba(255,59,92,0.08)",
    icon: "Zap",
  },
  {
    id: "heal",
    label: "Heal",
    description: "Find comfort in soft textures and calming scents",
    color: "var(--heal)",
    borderColor: "rgba(0,212,200,0.2)",
    glowColor: "rgba(0,212,200,0.15)",
    bgMuted: "rgba(0,212,200,0.08)",
    icon: "Heart",
  },
  {
    id: "indulge",
    label: "Indulge",
    description: "Treat yourself to the extraordinary",
    color: "var(--joy)",
    borderColor: "rgba(255,214,10,0.2)",
    glowColor: "rgba(255,214,10,0.15)",
    bgMuted: "rgba(255,214,10,0.08)",
    icon: "Crown",
  },
];

export const categories = [
  "bags",
  "watches",
  "fragrance",
  "home",
  "accessories",
  "shoes",
  "jewelry",
];

export function getProductsByMood(mood: string): Product[] {
  return products.filter((p) => p.mood === mood);
}

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getProductsByCategory(category: string): Product[] {
  if (category === "all") return products;
  return products.filter((p) => p.category === category);
}
