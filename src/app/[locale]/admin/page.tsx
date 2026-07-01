"use client";

import Link from "next/link";
import { ArrowLeft, Edit, Trash2, Plus } from "lucide-react";
import { Badge } from "@/components/brand/Badge";
import { BrandButton } from "@/components/brand/BrandButton";
import { products } from "@/data/products";

export default function AdminPage() {
  return (
    <div className="min-h-screen bg-bg-primary">
      {/* Admin header */}
      <div className="border-b border-border-default bg-bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link
              href="/"
              className="text-text-secondary hover:text-text-primary transition-colors duration-150"
            >
              <ArrowLeft className="size-5" />
            </Link>
            <h1 className="text-lg font-display font-bold text-text-primary">
              Admin — Products
            </h1>
          </div>
          <BrandButton variant="coral" size="sm">
            <Plus className="size-4" />
            Add Product
          </BrandButton>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
        <div className="rounded-xl border border-border-default overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border-default bg-bg-surface">
                <th className="text-left px-4 py-3 text-xs font-medium text-text-secondary uppercase tracking-wider">
                  Product
                </th>
                <th className="text-left px-4 py-3 text-xs font-medium text-text-secondary uppercase tracking-wider hidden sm:table-cell">
                  Brand
                </th>
                <th className="text-left px-4 py-3 text-xs font-medium text-text-secondary uppercase tracking-wider hidden md:table-cell">
                  Category
                </th>
                <th className="text-left px-4 py-3 text-xs font-medium text-text-secondary uppercase tracking-wider">
                  Price
                </th>
                <th className="text-left px-4 py-3 text-xs font-medium text-text-secondary uppercase tracking-wider hidden sm:table-cell">
                  Status
                </th>
                <th className="text-right px-4 py-3 text-xs font-medium text-text-secondary uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr
                  key={product.slug}
                  className="border-b border-border-default last:border-0 hover:bg-bg-surface/50 transition-colors duration-150"
                >
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-3">
                      <div className="size-10 rounded-lg overflow-hidden bg-bg-elevated shrink-0">
                        <img
                          src={product.images[0]}
                          alt={product.name}
                          className="size-full object-cover"
                        />
                      </div>
                      <span className="text-sm text-text-primary truncate max-w-[180px]">
                        {product.name}
                      </span>
                    </div>
                  </td>
                  <td className="px-4 py-3 text-sm text-text-secondary hidden sm:table-cell">
                    {product.brand}
                  </td>
                  <td className="px-4 py-3 text-sm text-text-secondary hidden md:table-cell capitalize">
                    {product.category}
                  </td>
                  <td className="px-4 py-3 text-sm font-medium text-text-primary">
                    {product.price}
                  </td>
                  <td className="px-4 py-3 hidden sm:table-cell">
                    {product.badge ? (
                      <Badge variant={product.badge.variant} showIcon={false}>
                        {product.badge.label}
                      </Badge>
                    ) : (
                      <span className="text-xs text-text-muted">—</span>
                    )}
                  </td>
                  <td className="px-4 py-3">
                    <div className="flex items-center justify-end gap-1">
                      <button className="size-8 rounded-lg flex items-center justify-center text-text-muted hover:text-text-primary hover:bg-bg-elevated transition-colors duration-150">
                        <Edit className="size-4" />
                      </button>
                      <button className="size-8 rounded-lg flex items-center justify-center text-text-muted hover:text-brand hover:bg-brand-muted transition-colors duration-150">
                        <Trash2 className="size-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}
