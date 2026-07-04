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
];

export const liveCategories = ["bags", "beauty", "sneakers", "watches", "tea", "skincare", "jewelry", "fashion"];

export function getLiveByMood(mood: string): LiveItem[] {
  return liveItems.filter((l) => l.mood === mood);
}

export function getHotLive(): LiveItem[] {
  return liveItems.filter((l) => l.viewers > 25000).sort((a, b) => b.viewers - a.viewers);
}
