"use client";

import { create } from "zustand";
import type { Product } from "@/data/products";

interface CartItem {
  product: Product;
  quantity: number;
}

interface CartState {
  items: CartItem[];
  addItem: (product: Product) => void;
  removeItem: (slug: string) => void;
  updateQuantity: (slug: string, quantity: number) => void;
  clearCart: () => void;
  totalItems: () => number;
  totalPrice: () => string;
}

export const useCartStore = create<CartState>((set, get) => ({
  items: [],

  addItem: (product) => {
    set((state) => {
      const existing = state.items.find(
        (item) => item.product.slug === product.slug
      );
      if (existing) {
        return {
          items: state.items.map((item) =>
            item.product.slug === product.slug
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        };
      }
      return { items: [...state.items, { product, quantity: 1 }] };
    });
  },

  removeItem: (slug) => {
    set((state) => ({
      items: state.items.filter((item) => item.product.slug !== slug),
    }));
  },

  updateQuantity: (slug, quantity) => {
    if (quantity <= 0) {
      get().removeItem(slug);
      return;
    }
    set((state) => ({
      items: state.items.map((item) =>
        item.product.slug === slug ? { ...item, quantity } : item
      ),
    }));
  },

  clearCart: () => set({ items: [] }),

  totalItems: () => get().items.reduce((sum, item) => sum + item.quantity, 0),

  totalPrice: () => {
    const total = get().items.reduce((sum, item) => {
      const price = parseFloat(
        item.product.price.replace(/[¥,]/g, "")
      );
      return sum + price * item.quantity;
    }, 0);
    return `¥${total.toLocaleString("zh-CN", {
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    })}`;
  },
}));
