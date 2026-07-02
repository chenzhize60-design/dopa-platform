import { NextRequest, NextResponse } from "next/server";
import { products } from "@/data/products";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const category = searchParams.get("category");
  const mood = searchParams.get("mood");
  const minPrice = searchParams.get("minPrice");
  const maxPrice = searchParams.get("maxPrice");
  const page = parseInt(searchParams.get("page") || "1");
  const limit = parseInt(searchParams.get("limit") || "20");

  let filtered = [...products];

  if (mood) {
    filtered = filtered.filter((p) => p.mood === mood);
  }
  if (minPrice) {
    filtered = filtered.filter((p) => {
      const num = parseFloat(p.price.replace(/[^0-9,]/g, "").replace(",", ""));
      return num >= parseFloat(minPrice);
    });
  }
  if (maxPrice) {
    filtered = filtered.filter((p) => {
      const num = parseFloat(p.price.replace(/[^0-9,]/g, "").replace(",", ""));
      return num <= parseFloat(maxPrice);
    });
  }

  const total = filtered.length;
  const start = (page - 1) * limit;
  const items = filtered.slice(start, start + limit);

  return NextResponse.json({
    code: 0,
    data: { items, total, page, limit },
    message: "ok",
  });
}
