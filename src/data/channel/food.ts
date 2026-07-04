export interface FoodItem {
  slug: string;
  name: string;
  nameEn: string;
  restaurant: string;
  price: string;
  originalPrice?: string;
  description: string;
  image: string;
  category: string;
  mood: "boost" | "heal" | "indulge";
  rating: number;
  reviews: number;
  viewers?: number;
  tags?: string[];
  deliveryTime?: string;
}

export const foodItems: FoodItem[] = [
  // ── MICHELIN / FINE DINING ──
  { slug: "narisawa-satoyama", name: "里山の恵み 季節のコース", nameEn: "Satoyama Seasonal Course", restaurant: "Narisawa · 東京", price: "¥38,800", description: "世界50佳レストラン。森のエッセンスを皿に閉じ込めた全12品。", image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80", category: "fine-dining", mood: "indulge", rating: 4.9, reviews: 342, viewers: 89, tags: ["ミシュラン二つ星", "世界50佳"], deliveryTime: "要予約" },
  { slug: "sushi-saito-omakase", name: "鮨 さいとう おまかせ", nameEn: "Sushi Saito Omakase", restaurant: "鮨 さいとう · 東京", price: "¥42,000", description: "予約3年待ちの伝説。一貫一貫が芸術。", image: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=800&q=80", category: "fine-dining", mood: "indulge", rating: 5.0, reviews: 156, viewers: 234, tags: ["ミシュラン三つ星", "伝説"], deliveryTime: "3年待ち" },
  { slug: "jiro-ramen-dream", name: "二郎系ラーメン 夢盛り", nameEn: "Jiro-Style Dream Bowl", restaurant: "ラーメン二郎 · 東京", price: "¥1,280", description: "山盛りモヤシ、分厚いチャーシュー、ニンニクマシマシ。", image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=800&q=80", category: "ramen", mood: "boost", rating: 4.7, reviews: 892, viewers: 156, tags: ["二郎系", "ガッツリ"], deliveryTime: "25-35分" },

  // ── KOREAN ──
  { slug: "kbbq-hanwoo-set", name: "韓牛カルビ スペシャルセット", nameEn: "Hanwoo Galbi Special Set", restaurant: "Maple Tree House · ソウル", price: "¥8,800", description: "1++等級韓牛。炭火の香りと蕩ける脂身。", image: "https://images.unsplash.com/photo-1611143669185-af224c5e3252?w=800&q=80", category: "korean", mood: "indulge", rating: 4.8, reviews: 567, viewers: 78, tags: ["韓牛", "サムギョプサル"], deliveryTime: "40-50分" },
  { slug: "tteokbokki-rose", name: "ロゼトッポギ チーズフォンデュ", nameEn: "Rose Tteokbokki Fondue", restaurant: "シンダンドン · ソウル", price: "¥1,580", description: "クリーミーなロゼソースにモッツァレラ。韓国屋台の革新。", image: "https://images.unsplash.com/photo-1635363638580-c2809d049eee?w=800&q=80", category: "street-food", mood: "boost", rating: 4.6, reviews: 1234, viewers: 345, tags: ["韓国屋台", "チーズ"], deliveryTime: "20-30分" },

  // ── DESSERT ──
  { slug: "ichigo-daifuku", name: "あまおう苺大福 宝石箱", nameEn: "Amaou Strawberry Mochi Box", restaurant: "鈴懸 · 福岡", price: "¥3,200", description: "福岡あまおう苺をまるごと一粒。羽二重餅で包んだ宝石。", image: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=800&q=80", category: "dessert", mood: "heal", rating: 4.9, reviews: 678, viewers: 89, tags: ["和スイーツ", "季節限定"], deliveryTime: "当日便" },
  { slug: "matcha-tiramisu", name: "宇治抹茶ティラミス 濃茶", nameEn: "Uji Matcha Tiramisu", restaurant: "中村藤吉 · 京都", price: "¥2,480", description: "創業安政元年。濃厚な宇治抹茶をたっぷり使った和洋折衷。", image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=800&q=80", category: "dessert", mood: "heal", rating: 4.8, reviews: 445, viewers: 56, tags: ["抹茶", "京都"], deliveryTime: "翌日便" },

  // ── COMFORT FOOD ──
  { slug: "tonkatsu-maisen", name: "特上ロースかつ定食", nameEn: "Premium Loin Katsu Set", restaurant: "まい泉 · 東京", price: "¥2,980", description: "サクサクの衣、ジューシーな豚肉。幸せの音。", image: "https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?w=800&q=80", category: "comfort", mood: "heal", rating: 4.7, reviews: 2345, viewers: 123, tags: ["とんかつ", "定番"], deliveryTime: "25-35分" },
  { slug: "unagi-kabayaki", name: "うな重 特上 二段重ね", nameEn: "Premium Unagi Double-Decker", restaurant: "野田岩 · 東京", price: "¥12,800", description: "五代続く老舗。備長炭で焼き上げた江戸前の味。", image: "https://images.unsplash.com/photo-1569058242253-93a9c6236ec7?w=800&q=80", category: "comfort", mood: "indulge", rating: 4.9, reviews: 567, viewers: 67, tags: ["うなぎ", "老舗"], deliveryTime: "40-50分" },

  // ── CAFE ──
  { slug: "pour-over-geisha", name: "ゲイシャ パナマ ハンドドリップ", nameEn: "Panama Geisha Pour Over", restaurant: "About Life · 東京", price: "¥1,800", description: "パナマ・エスメラルダ農園。ジャスミンとベルガモットの香り。", image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&q=80", category: "cafe", mood: "boost", rating: 4.8, reviews: 234, viewers: 45, tags: ["スペシャルティ", "浅煎り"], deliveryTime: "15-20分" },
  { slug: "croissant-almond", name: "アーモンドクロワッサン 焼きたて", nameEn: "Fresh Almond Croissant", restaurant: "PAUL · パリ", price: "¥680", description: "パリから直輸入。バターの香りが漂う焼きたてサクサク。", image: "https://images.unsplash.com/photo-1555507036-ab1f4038024a?w=800&q=80", category: "bakery", mood: "heal", rating: 4.6, reviews: 890, viewers: 98, tags: ["パン", "焼きたて"], deliveryTime: "15-25分" },
];

export const foodCategories = ["fine-dining", "ramen", "korean", "street-food", "dessert", "comfort", "cafe", "bakery"];

export function getFoodByMood(mood: string): FoodItem[] {
  return foodItems.filter((f) => f.mood === mood);
}
