import { NextRequest, NextResponse } from "next/server";
import { getProductBySlug } from "@/data/products";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    return NextResponse.json(
      { code: 40410, data: null, message: "Product not found" },
      { status: 404 }
    );
  }

  return NextResponse.json({ code: 0, data: product, message: "ok" });
}
