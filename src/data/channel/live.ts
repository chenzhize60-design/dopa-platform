export interface LiveItem {
  slug: string;
  streamer: string;
  title: string;
  price: string;
  originalPrice?: string;
  stock: number;
  description: string;
  image: string;
  category: string;
  mood: "boost" | "heal" | "indulge";
  viewers: number;
  rating: number;
  sales: number;
  countdown?: number; // seconds remaining
}

export const liveItems: LiveItem[] = [
  { slug: "xiaoyang-bag-flash", streamer: "疯狂小杨哥", title: "LV Neverfull 樱花粉 · 直播间秒杀", price: "¥1,299", originalPrice: "¥18,500", stock: 3, description: "⚠ 真品鉴定！直播专属价！仅剩3只！！", image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=800&q=80", category: "bags", mood: "boost", viewers: 28934, rating: 4.8, sales: 1247, countdown: 45 },
  { slug: "jiaqi-lipstick-set", streamer: "李佳琦Austin", title: "YSL 小金条 12色全套装 OMG买它！", price: "¥1,680", originalPrice: "¥4,200", stock: 56, description: "所有女生！！这个颜色绝了！！黄皮亲妈！！", image: "https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=800&q=80", category: "beauty", mood: "boost", viewers: 45678, rating: 4.9, sales: 8923, countdown: 120 },
  { slug: "xinba-sneaker-drop", streamer: "辛巴", title: "Nike Dunk Low 熊猫配色 限量返场", price: "¥699", originalPrice: "¥1,299", stock: 128, description: "兄弟们！！熊猫Dunk补货了！！上次没抢到的速度！！", image: "https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=800&q=80", category: "sneakers", mood: "boost", viewers: 34123, rating: 4.7, sales: 4521, countdown: 300 },
  { slug: "douyin-watch-auction", streamer: "董先生", title: "Rolex Datejust 直播间0元起拍", price: "¥??,???", stock: 1, description: "🔥历史首次！！劳力士0元起拍！！每次加价¥1,000！！", image: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=800&q=80", category: "watches", mood: "indulge", viewers: 89234, rating: 4.9, sales: 1, countdown: 600 },
  { slug: "guangdong-tea-live", streamer: "广东夫妇", title: "云南古树普洱 200年老枞 半价", price: "¥298", originalPrice: "¥598", stock: 89, description: "200年古树！！回甘一整天！！送礼有面子！！", image: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=800&q=80", category: "tea", mood: "heal", viewers: 12345, rating: 4.6, sales: 3456 },
  { slug: "mcn-skincare-deal", streamer: "骆王宇", title: "La Mer 经典面霜 60ml 跳水价", price: "¥1,299", originalPrice: "¥4,100", stock: 34, description: "保税仓直发！！免税店都拿不到这个价！！", image: "https://images.unsplash.com/photo-1570194065650-d99fb4ee8e39?w=800&q=80", category: "skincare", mood: "heal", viewers: 21345, rating: 4.8, sales: 2341 },
  { slug: "dongfang-jewelry", streamer: "东方甄选", title: "周大福 传承系列 古法金手镯", price: "¥15,800", originalPrice: "¥22,800", stock: 5, description: "东方老师亲自讲解！！古法工艺！！传家之宝！！", image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&q=80", category: "jewelry", mood: "indulge", viewers: 56789, rating: 5.0, sales: 89 },
  { slug: "fashion-week-live", streamer: "深夜徐老师", title: "巴黎时装周走秀款 限量5件", price: "¥8,800", originalPrice: "¥32,000", stock: 2, description: "米兰直邮！！时装周刚下秀台！！全球限量！！", image: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=800&q=80", category: "fashion", mood: "boost", viewers: 34567, rating: 4.7, sales: 23, countdown: 90 },

  // ── MORE STREAMS ──
  { slug: "weiya-lipstick-sale", streamer: "薇娅viya", title: "Tom Ford 黑管唇釉 全场5折封顶", price: "¥199", originalPrice: "¥420", stock: 234, description: "TF唇釉！！黄皮显白！！今晚不买明天后悔！！", image: "https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=800&q=80", category: "beauty", mood: "boost", viewers: 78345, rating: 4.9, sales: 23456 },
  { slug: "liujiaqi-foundation", streamer: "李佳琦Austin", title: "Estee Lauder DW持妆粉底液 买一送一", price: "¥390", originalPrice: "¥780", stock: 156, description: "油皮亲妈！！持妆12小时！！今天买一送一！！", image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=800&q=80", category: "beauty", mood: "boost", viewers: 67890, rating: 4.8, sales: 15678, countdown: 240 },
  { slug: "muji-home-flash", streamer: "东方甄选", title: "MUJI 超声波香薰机 + 精油套装", price: "¥399", originalPrice: "¥780", stock: 89, description: "董宇辉老师推荐！！下班回家打开它！！整个房间都是幸福的味道！！", image: "https://images.unsplash.com/photo-1602028915047-37269d1a73f7?w=800&q=80", category: "home", mood: "heal", viewers: 45678, rating: 4.7, sales: 3456, countdown: 180 },
  { slug: "xiaoyang-iphone", streamer: "疯狂小杨哥", title: "iPhone 17 Pro Max 直播间秒杀 亏本卖", price: "¥7,999", originalPrice: "¥12,999", stock: 5, description: "⚠⚠⚠ 全网最低！！国行正品！！手慢无！！", image: "https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?w=800&q=80", category: "electronics", mood: "boost", viewers: 123456, rating: 4.6, sales: 345, countdown: 30 },
  { slug: "xinba-lv-bag-live", streamer: "辛巴", title: "LV Speedy 30 老花 专柜价3折", price: "¥2,999", originalPrice: "¥9,800", stock: 12, description: "中检鉴定！！日本中古！！9成新！！识货的来！！", image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=800&q=80", category: "bags", mood: "indulge", viewers: 56789, rating: 4.5, sales: 567, countdown: 120 },
  { slug: "guangdong-prawn-live", streamer: "广东夫妇", title: "湛江大虾 活冻 5斤装 码头直发", price: "¥168", originalPrice: "¥298", stock: 345, description: "广东人都吃湛江虾！！Q弹鲜甜！！白灼就很好吃！！", image: "https://images.unsplash.com/photo-1559847844-5315695dadae?w=800&q=80", category: "food", mood: "heal", viewers: 23456, rating: 4.8, sales: 8901 },
  { slug: "mcn-collagen-live", streamer: "骆王宇", title: "Swisse 胶原蛋白口服液 澳洲直邮", price: "¥168", originalPrice: "¥328", stock: 456, description: "25岁以后必须喝！！皮肤肉眼可见变好！！澳洲药房同款！！", image: "https://images.unsplash.com/photo-1577174881658-0f30ed549adc?w=800&q=80", category: "health", mood: "heal", viewers: 18765, rating: 4.6, sales: 4567 },
  { slug: "weiya-watch-flash", streamer: "薇娅viya", title: "天梭力洛克系列 机械腕表 直播间限定", price: "¥2,899", originalPrice: "¥5,800", stock: 23, description: "瑞士机芯！！背透设计！！男生入门第一块机械表！！", image: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=800&q=80", category: "watches", mood: "boost", viewers: 34567, rating: 4.7, sales: 1234, countdown: 90 },
  { slug: "dongfang-jade-auction", streamer: "东方甄选", title: "和田玉 羊脂白玉手镯 传家级", price: "¥28,800", originalPrice: "¥58,000", stock: 1, description: "只有一只！！羊脂白玉！！准备传给孙女的！！", image: "https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?w=800&q=80", category: "jewelry", mood: "indulge", viewers: 89123, rating: 5.0, sales: 1, countdown: 600 },
  { slug: "xushen-fitness-band", streamer: "深夜徐老师", title: "Apple Watch Ultra 2 户外运动版", price: "¥5,299", originalPrice: "¥7,299", stock: 45, description: "户外运动必入！！钛合金表壳！！潜水100米！！", image: "https://images.unsplash.com/photo-1546868871-af0de0ae72be?w=800&q=80", category: "electronics", mood: "boost", viewers: 28901, rating: 4.8, sales: 890 },
  { slug: "xinba-seafood-feast", streamer: "辛巴", title: "波士顿龙虾 1kg+ 帝王蟹 套餐", price: "¥888", originalPrice: "¥1,888", stock: 56, description: "年夜饭C位！！活的发货！！清蒸蒜蓉都好吃！！", image: "https://images.unsplash.com/photo-1559742814-7a61e887b66f?w=800&q=80", category: "food", mood: "indulge", viewers: 45678, rating: 4.6, sales: 2345 },
];

export const liveCategories = ["bags", "beauty", "sneakers", "watches", "tea", "skincare", "jewelry", "fashion"];

export function getLiveByMood(mood: string): LiveItem[] {
  return liveItems.filter((l) => l.mood === mood);
}

export function getHotLive(): LiveItem[] {
  return liveItems.filter((l) => l.viewers > 25000).sort((a, b) => b.viewers - a.viewers);
}
