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
  { slug: "narisawa-satoyama", name: "里山馈赠 季节限定套餐", nameEn: "Satoyama Seasonal Course", restaurant: "Narisawa · 东京", price: "¥38,800", description: "世界50佳餐厅。将森林的精髓收入盘中的12道菜。", image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80", category: "fine-dining", mood: "indulge", rating: 4.9, reviews: 342, viewers: 89, tags: ["米其林二星", "世界50佳"], deliveryTime: "要予約" },
  { slug: "sushi-saito-omakase", name: "寿司斋藤 主厨套餐", nameEn: "Sushi Saito Omakase", restaurant: "寿司斋藤 · 东京", price: "¥42,000", description: "预约等3年的传说。每一贯都是艺术。", image: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=800&q=80", category: "fine-dining", mood: "indulge", rating: 5.0, reviews: 156, viewers: 234, tags: ["米其林三星", "伝説"], deliveryTime: "3年待ち" },
  { slug: "jiro-ramen-dream", name: "二郎系拉面 梦幻大盛", nameEn: "Jiro-Style Dream Bowl", restaurant: "拉面二郎 · 东京", price: "¥1,280", description: "堆成山的豆芽、分厚いチャーシュー、ニンニクマシマシ。", image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=800&q=80", category: "ramen", mood: "boost", rating: 4.7, reviews: 892, viewers: 156, tags: ["二郎系", "爆量"], deliveryTime: "25-35分" },

  // ── KOREAN ──
  { slug: "kbbq-hanwoo-set", name: "韩牛肋排 特选套餐", nameEn: "Hanwoo Galbi Special Set", restaurant: "枫树屋 · 首尔", price: "¥8,800", description: "1++等级韩牛。炭火香气与入口即化的油脂。", image: "https://images.unsplash.com/photo-1611143669185-af224c5e3252?w=800&q=80", category: "korean", mood: "indulge", rating: 4.8, reviews: 567, viewers: 78, tags: ["韓牛", "サムギョプサル"], deliveryTime: "40-50分" },
  { slug: "tteokbokki-rose", name: "玫瑰炒年糕 芝士火锅", nameEn: "Rose Tteokbokki Fondue", restaurant: "新堂洞 · 首尔", price: "¥1,580", description: "奶油玫瑰酱配马苏里拉芝士。韩国路边摊的革命。", image: "https://images.unsplash.com/photo-1635363638580-c2809d049eee?w=800&q=80", category: "street-food", mood: "boost", rating: 4.6, reviews: 1234, viewers: 345, tags: ["韓国屋台", "チーズ"], deliveryTime: "20-30分" },

  // ── DESSERT ──
  { slug: "ichigo-daifuku", name: "甘王草莓大福 宝石盒", nameEn: "Amaou Strawberry Mochi Box", restaurant: "铃悬 · 福冈", price: "¥3,200", description: "一整颗福冈甘王草莓。棉花糖般柔软で包んだ宝石。", image: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=800&q=80", category: "dessert", mood: "heal", rating: 4.9, reviews: 678, viewers: 89, tags: ["和果子", "季節限定"], deliveryTime: "当日便" },
  { slug: "matcha-tiramisu", name: "宇治抹茶提拉米苏 浓茶版", nameEn: "Uji Matcha Tiramisu", restaurant: "中村藤吉 · 京都", price: "¥2,480", description: "创业于安政元年。大量使用浓郁宇治抹茶的日西合璧。", image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=800&q=80", category: "dessert", mood: "heal", rating: 4.8, reviews: 445, viewers: 56, tags: ["抹茶", "京都"], deliveryTime: "翌日便" },

  // ── COMFORT FOOD ──
  { slug: "tonkatsu-maisen", name: "特上里脊炸猪排定食", nameEn: "Premium Loin Katsu Set", restaurant: "舞泉 · 东京", price: "¥2,980", description: "酥脆的面衣、多汁猪肉。幸福的声音。", image: "https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?w=800&q=80", category: "comfort", mood: "heal", rating: 4.7, reviews: 2345, viewers: 123, tags: ["とんかつ", "定番"], deliveryTime: "25-35分" },
  { slug: "unagi-kabayaki", name: "鳗鱼饭 特上 双层叠", nameEn: "Premium Unagi Double-Decker", restaurant: "野田岩 · 东京", price: "¥12,800", description: "五代続く老舗。备长炭で焼き上げた江戸前の味。", image: "https://images.unsplash.com/photo-1569058242253-93a9c6236ec7?w=800&q=80", category: "comfort", mood: "indulge", rating: 4.9, reviews: 567, viewers: 67, tags: ["うなぎ", "老舗"], deliveryTime: "40-50分" },

  // ── CAFE ──
  { slug: "pour-over-geisha", name: "瑰夏 巴拿马 手冲咖啡", nameEn: "Panama Geisha Pour Over", restaurant: "About Life · 东京", price: "¥1,800", description: "巴拿马翡翠庄园。茉莉花与佛手柑的香气。", image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&q=80", category: "cafe", mood: "boost", rating: 4.8, reviews: 234, viewers: 45, tags: ["スペシャルティ", "浅煎り"], deliveryTime: "15-20分" },
  { slug: "croissant-almond", name: "杏仁可颂 现烤出炉", nameEn: "Fresh Almond Croissant", restaurant: "PAUL · 巴黎", price: "¥680", description: "巴黎直送。黄油香气四溢的现烤酥脆。", image: "https://images.unsplash.com/photo-1555507036-ab1f4038024a?w=800&q=80", category: "bakery", mood: "heal", rating: 4.6, reviews: 890, viewers: 98, tags: ["パン", "焼きたて"], deliveryTime: "15-25分" },

  // ── MORE FINE DINING ──
  { slug: "jl-robuchon-mash", name: "乔尔·卢布松 终极土豆泥", nameEn: "Joel Robuchon's Ultimate Mash", restaurant: "工坊 · 东京", price: "¥3,800", description: "黄油与土豆比例1:1。世界上最有名的土豆泥。", image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80", category: "fine-dining", mood: "indulge", rating: 4.9, reviews: 456, viewers: 78, tags: ["ミシュラン", "伝説"], deliveryTime: "要予約" },
  { slug: "arpege-egg", name: "琶音 温泉蛋 枫糖浆", nameEn: "Arpege Egg with Maple", restaurant: "琶音 · 巴黎", price: "¥6,800", description: "阿兰·帕萨尔的招牌菜。4小时低温慢煮的鸡蛋。", image: "https://images.unsplash.com/photo-1482049016688-2d3e1b311543?w=800&q=80", category: "fine-dining", mood: "indulge", rating: 5.0, reviews: 234, viewers: 34, tags: ["三つ星", "シグネチャー"], deliveryTime: "3ヶ月待ち" },

  // ── CHINESE CUISINE ──
  { slug: "peking-duck-da-dong", name: "大董酥不腻烤鸭 整只", nameEn: "Da Dong Crispy Roast Duck", restaurant: "大董烤鸭 · 北京", price: "¥598", description: "酥不腻烤鸭，皮脆肉嫩，蘸白糖吃才地道。", image: "https://images.unsplash.com/photo-1598514983937-3233f0b8f5ef?w=800&q=80", category: "chinese", mood: "indulge", rating: 4.8, reviews: 2345, viewers: 234, tags: ["烤鸭", "北京"], deliveryTime: "要预约" },
  { slug: "xiaolongbao-dintaifung", name: "鼎泰丰小笼包 18个入", nameEn: "Din Tai Fung Xiao Long Bao 18pc", restaurant: "鼎泰丰 · 台北", price: "¥198", description: "18褶小笼包，皮薄汤多。用筷子夹起来的那一瞬间，世界静止。", image: "https://images.unsplash.com/photo-1496116218417-1a781b1c416c?w=800&q=80", category: "chinese", mood: "heal", rating: 4.7, reviews: 5678, viewers: 456, tags: ["小笼包", "经典"], deliveryTime: "20-30分" },
  { slug: "hotpot-haidilao", name: "海底捞麻辣牛油锅底 双人套餐", nameEn: "Haidilao Spicy Hotpot Set for 2", restaurant: "海底捞 · 成都", price: "¥388", description: "正宗川味牛油锅底，配澳洲肥牛、毛肚、黄喉。排队也要吃。", image: "https://images.unsplash.com/photo-1617196034796-73dfa7b1fd56?w=800&q=80", category: "chinese", mood: "boost", rating: 4.6, reviews: 12345, viewers: 567, tags: ["火锅", "川味"], deliveryTime: "40-50分" },

  // ── ITALIAN ──
  { slug: "truffle-pasta-tosca", name: "松露宽面 阿尔巴白松露", nameEn: "White Truffle Tagliolini", restaurant: "托斯卡 · 米兰", price: "¥8,800", description: "阿尔巴白松露不限量削。没有比这更奢侈的香气了。", image: "https://images.unsplash.com/photo-1608219992759-8d74ed8d76eb?w=800&q=80", category: "italian", mood: "indulge", rating: 4.9, reviews: 345, viewers: 89, tags: ["トリュフ", "パスタ"], deliveryTime: "当日・要予約" },
  { slug: "margherita-napoli", name: "那不勒斯披萨 玛格丽特 窑烤", nameEn: "Naples Margherita Wood-Fired", restaurant: "达米凯莱 · 那不勒斯", price: "¥1,980", description: "那不勒斯老店。番茄、马苏里拉、罗勒。不需要更多了。", image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800&q=80", category: "italian", mood: "heal", rating: 4.8, reviews: 1234, viewers: 123, tags: ["ピッツァ", "ナポリ"], deliveryTime: "25-35分" },

  // ── STREET FOOD ──
  { slug: "takoyaki-osaka", name: "章鱼烧 酱汁美乃滋 8粒", nameEn: "Takoyaki 8pc Sauce Mayo", restaurant: "蛸之徹 · 大阪", price: "¥680", description: "大阪名物。外脆内软。ソースとマヨネーズが絡み合う。", image: "https://images.unsplash.com/photo-1633321702654-8c39c2c55a33?w=800&q=80", category: "street-food", mood: "boost", rating: 4.5, reviews: 2345, viewers: 178, tags: ["たこ焼き", "大阪"], deliveryTime: "15-25分" },
  { slug: "okonomiyaki-hiroshima", name: "广岛风御好烧 加炒面", nameEn: "Hiroshima Okonomiyaki with Noodles", restaurant: "美酱 · 广岛", price: "¥1,280", description: "满满卷心菜，加炒面。广岛的灵魂美食。", image: "https://images.unsplash.com/photo-1615361200141-f45040f367be?w=800&q=80", category: "street-food", mood: "boost", rating: 4.6, reviews: 890, viewers: 89, tags: ["お好み焼き", "広島"], deliveryTime: "25-35分" },

  // ── THAI / VIETNAMESE ──
  { slug: "pad-thai-street", name: "泰式炒河粉 大虾 路边摊风", nameEn: "Pad Thai with Prawns Street Style", restaurant: "鬼门炒粉 · 曼谷", price: "¥1,080", description: "曼谷第一的泰式炒粉。酸甜罗望子酱配弹牙大虾。", image: "https://images.unsplash.com/photo-1559314809-0d155014e29e?w=800&q=80", category: "thai", mood: "boost", rating: 4.7, reviews: 1234, viewers: 145, tags: ["パッタイ", "バンコク"], deliveryTime: "20-30分" },
  { slug: "pho-hanoi", name: "河粉 河内风 牛肉汤底", nameEn: "Hanoi Beef Pho", restaurant: "Pho Thin · 河内", price: "¥980", description: "河内旧城区的名店。清澈的汤底上漂浮着香草。", image: "https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?w=800&q=80", category: "thai", mood: "heal", rating: 4.6, reviews: 1567, viewers: 89, tags: ["フォー", "ハノイ"], deliveryTime: "15-20分" },

  // ── DESSERT ──
  { slug: "tiramisu-venice", name: "威尼斯提拉米苏 杯装", nameEn: "Venetian Tiramisu Glass", restaurant: "三商人 · 威尼斯", price: "¥1,580", description: "威尼斯巷弄里的小咖啡馆。马斯卡彭融化出30层。", image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=800&q=80", category: "dessert", mood: "heal", rating: 4.8, reviews: 567, viewers: 67, tags: ["ティラミス", "イタリア"], deliveryTime: "当日便" },
  { slug: "taiyaki-custard", name: "鲷鱼烧 卡仕达奶油 现烤", nameEn: "Fresh Taiyaki Custard", restaurant: "浪花家 · 东京", price: "¥380", description: "一条条手烤。热腾腾的卡仕达融化流出。", image: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=800&q=80", category: "dessert", mood: "heal", rating: 4.5, reviews: 3456, viewers: 234, tags: ["たい焼き", "和菓子"], deliveryTime: "10-20分" },

  // ── MORE DRINKS ──
  { slug: "bubble-tea-chunshui", name: "春水堂 珍珠奶茶", nameEn: "Chun Shui Tang Bubble Tea", restaurant: "春水堂 · 台中", price: "¥580", description: "タピオカ発祥の店。1987年に生まれた世界最初のタピオカミルクティー。", image: "https://images.unsplash.com/photo-1577805947697-89e18249d767?w=800&q=80", category: "cafe", mood: "heal", rating: 4.5, reviews: 8912, viewers: 345, tags: ["タピオカ", "元祖"], deliveryTime: "10-15分" },
  { slug: "sake-dassai-23", name: "獺祭 二割三分 纯米大吟酿 720ml", nameEn: "Dassai 23 Junmai Daiginjo", restaurant: "獺祭 · 山口", price: "¥5,800", description: "将山田锦精米至23%的奇迹纯米大吟酿。フルーティな香りと透明感。", image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=800&q=80", category: "cafe", mood: "indulge", rating: 4.9, reviews: 2345, viewers: 156, tags: ["日本酒", "獺祭"], deliveryTime: "翌日便" },
];

export const foodCategories = ["fine-dining", "ramen", "korean", "street-food", "dessert", "comfort", "cafe", "bakery"];

export function getFoodByMood(mood: string): FoodItem[] {
  return foodItems.filter((f) => f.mood === mood);
}
