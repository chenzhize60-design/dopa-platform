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

  // ── MORE FINE DINING ──
  { slug: "jl-robuchon-mash", name: "ジョエル・ロブションの究極マッシュポテト", nameEn: "Joel Robuchon's Ultimate Mash", restaurant: "L'Atelier · 東京", price: "¥3,800", description: "バターとポテトの比率1:1。世界一有名なマッシュポテト。", image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80", category: "fine-dining", mood: "indulge", rating: 4.9, reviews: 456, viewers: 78, tags: ["ミシュラン", "伝説"], deliveryTime: "要予約" },
  { slug: "arpege-egg", name: "アルページュの温玉 メープルシロップ", nameEn: "Arpege Egg with Maple", restaurant: "Arpege · パリ", price: "¥6,800", description: "アラン・パッサールのシグネチャー。4時間低温調理の卵。", image: "https://images.unsplash.com/photo-1482049016688-2d3e1b311543?w=800&q=80", category: "fine-dining", mood: "indulge", rating: 5.0, reviews: 234, viewers: 34, tags: ["三つ星", "シグネチャー"], deliveryTime: "3ヶ月待ち" },

  // ── CHINESE CUISINE ──
  { slug: "peking-duck-da-dong", name: "大董酥不腻烤鸭 整只", nameEn: "Da Dong Crispy Roast Duck", restaurant: "大董烤鸭 · 北京", price: "¥598", description: "酥不腻烤鸭，皮脆肉嫩，蘸白糖吃才地道。", image: "https://images.unsplash.com/photo-1598514983937-3233f0b8f5ef?w=800&q=80", category: "chinese", mood: "indulge", rating: 4.8, reviews: 2345, viewers: 234, tags: ["烤鸭", "北京"], deliveryTime: "要预约" },
  { slug: "xiaolongbao-dintaifung", name: "鼎泰丰小笼包 18个入", nameEn: "Din Tai Fung Xiao Long Bao 18pc", restaurant: "鼎泰丰 · 台北", price: "¥198", description: "18褶小笼包，皮薄汤多。用筷子夹起来的那一瞬间，世界静止。", image: "https://images.unsplash.com/photo-1496116218417-1a781b1c416c?w=800&q=80", category: "chinese", mood: "heal", rating: 4.7, reviews: 5678, viewers: 456, tags: ["小笼包", "经典"], deliveryTime: "20-30分" },
  { slug: "hotpot-haidilao", name: "海底捞麻辣牛油锅底 双人套餐", nameEn: "Haidilao Spicy Hotpot Set for 2", restaurant: "海底捞 · 成都", price: "¥388", description: "正宗川味牛油锅底，配澳洲肥牛、毛肚、黄喉。排队也要吃。", image: "https://images.unsplash.com/photo-1617196034796-73dfa7b1fd56?w=800&q=80", category: "chinese", mood: "boost", rating: 4.6, reviews: 12345, viewers: 567, tags: ["火锅", "川味"], deliveryTime: "40-50分" },

  // ── ITALIAN ──
  { slug: "truffle-pasta-tosca", name: "トリュフのタリオリーニ 白トリュフ", nameEn: "White Truffle Tagliolini", restaurant: "Tosca · ミラノ", price: "¥8,800", description: "アルバ産白トリュフを削り放題。この香りに勝る贅沢はない。", image: "https://images.unsplash.com/photo-1608219992759-8d74ed8d76eb?w=800&q=80", category: "italian", mood: "indulge", rating: 4.9, reviews: 345, viewers: 89, tags: ["トリュフ", "パスタ"], deliveryTime: "当日・要予約" },
  { slug: "margherita-napoli", name: "ナポリピッツァ マルゲリータ 窯焼き", nameEn: "Naples Margherita Wood-Fired", restaurant: "Da Michele · ナポリ", price: "¥1,980", description: "ナポリの老舗。トマト、モッツァレラ、バジル。これ以上要らない。", image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800&q=80", category: "italian", mood: "heal", rating: 4.8, reviews: 1234, viewers: 123, tags: ["ピッツァ", "ナポリ"], deliveryTime: "25-35分" },

  // ── STREET FOOD ──
  { slug: "takoyaki-osaka", name: "たこ焼き ソースマヨ 8個入", nameEn: "Takoyaki 8pc Sauce Mayo", restaurant: "くくる · 大阪", price: "¥680", description: "大阪名物。外カリ中トロ。ソースとマヨネーズが絡み合う。", image: "https://images.unsplash.com/photo-1633321702654-8c39c2c55a33?w=800&q=80", category: "street-food", mood: "boost", rating: 4.5, reviews: 2345, viewers: 178, tags: ["たこ焼き", "大阪"], deliveryTime: "15-25分" },
  { slug: "okonomiyaki-hiroshima", name: "広島風お好み焼き そば入り", nameEn: "Hiroshima Okonomiyaki with Noodles", restaurant: "みっちゃん · 広島", price: "¥1,280", description: "キャベツたっぷり、そば入り。広島のソウルフード。", image: "https://images.unsplash.com/photo-1615361200141-f45040f367be?w=800&q=80", category: "street-food", mood: "boost", rating: 4.6, reviews: 890, viewers: 89, tags: ["お好み焼き", "広島"], deliveryTime: "25-35分" },

  // ── THAI / VIETNAMESE ──
  { slug: "pad-thai-street", name: "パッタイ エビ入り 屋台風", nameEn: "Pad Thai with Prawns Street Style", restaurant: "Thip Samai · バンコク", price: "¥1,080", description: "バンコクNo.1のパッタイ。甘酸っぱいタマリンドソースとプリプリの海老。", image: "https://images.unsplash.com/photo-1559314809-0d155014e29e?w=800&q=80", category: "thai", mood: "boost", rating: 4.7, reviews: 1234, viewers: 145, tags: ["パッタイ", "バンコク"], deliveryTime: "20-30分" },
  { slug: "pho-hanoi", name: "フォー ハノイ風 牛肉だし", nameEn: "Hanoi Beef Pho", restaurant: "Pho Thin · ハノイ", price: "¥980", description: "ハノイ旧市街の名店。透き通ったスープに香草が浮かぶ。", image: "https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?w=800&q=80", category: "thai", mood: "heal", rating: 4.6, reviews: 1567, viewers: 89, tags: ["フォー", "ハノイ"], deliveryTime: "15-20分" },

  // ── DESSERT ──
  { slug: "tiramisu-venice", name: "ベネチアン・ティラミス グラス仕立て", nameEn: "Venetian Tiramisu Glass", restaurant: "I Tre Mercanti · ベネチア", price: "¥1,580", description: "ヴェネチアの路地裏カフェ。マスカルポーネがとろける30層。", image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=800&q=80", category: "dessert", mood: "heal", rating: 4.8, reviews: 567, viewers: 67, tags: ["ティラミス", "イタリア"], deliveryTime: "当日便" },
  { slug: "taiyaki-custard", name: "たい焼き カスタードクリーム 焼きたて", nameEn: "Fresh Taiyaki Custard", restaurant: "浪花家 · 東京", price: "¥380", description: "一匹ずつ手焼き。アツアツのカスタードがとろけ出す。", image: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=800&q=80", category: "dessert", mood: "heal", rating: 4.5, reviews: 3456, viewers: 234, tags: ["たい焼き", "和菓子"], deliveryTime: "10-20分" },

  // ── MORE DRINKS ──
  { slug: "bubble-tea-chunshui", name: "春水堂 タピオカミルクティー", nameEn: "Chun Shui Tang Bubble Tea", restaurant: "春水堂 · 台中", price: "¥580", description: "タピオカ発祥の店。1987年に生まれた世界最初のタピオカミルクティー。", image: "https://images.unsplash.com/photo-1577805947697-89e18249d767?w=800&q=80", category: "cafe", mood: "heal", rating: 4.5, reviews: 8912, viewers: 345, tags: ["タピオカ", "元祖"], deliveryTime: "10-15分" },
  { slug: "sake-dassai-23", name: "獺祭 磨き二割三分 720ml", nameEn: "Dassai 23 Junmai Daiginjo", restaurant: "獺祭 · 山口", price: "¥5,800", description: "山田錦を23%まで磨いた奇跡の純米大吟醸。フルーティな香りと透明感。", image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=800&q=80", category: "cafe", mood: "indulge", rating: 4.9, reviews: 2345, viewers: 156, tags: ["日本酒", "獺祭"], deliveryTime: "翌日便" },
];

export const foodCategories = ["fine-dining", "ramen", "korean", "street-food", "dessert", "comfort", "cafe", "bakery"];

export function getFoodByMood(mood: string): FoodItem[] {
  return foodItems.filter((f) => f.mood === mood);
}
