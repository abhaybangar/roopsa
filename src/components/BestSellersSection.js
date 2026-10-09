"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import ProductCard from "./ProductCard";
import { products } from "@/data/products";

export default function BestSellersSection() {
  // Take the 4 bestsellers matching the screenshot
  const bestSellers = products.filter((p) => p.isBestseller).slice(0, 4);

  return (
    <section
      id="bestsellers"
      aria-label="Best Sellers"
      className="w-full bg-[#FAF4EA] py-10 sm:py-14 border-b border-[#EFE7D8]"
    >
      <div className="w-full max-w-[1600px] mx-auto px-3 sm:px-6 lg:px-10">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 sm:mb-10 gap-4">
          <div className="text-center sm:text-left mx-auto sm:mx-0">
            <div className="flex items-center justify-center sm:justify-start gap-2 mb-1.5">
              <span className="w-8 h-[1px] bg-[#B58A48]" />
              <h2 className="text-xs sm:text-sm uppercase tracking-[0.25em] text-[#B58A48] font-semibold">
                Best Sellers
              </h2>
              <span className="w-8 h-[1px] bg-[#B58A48]" />
            </div>
            <p className="text-stone-600 text-xs sm:text-sm font-normal">
              Loved for their purity, effectiveness, and natural ingredients.
            </p>
          </div>

          <div className="flex justify-center sm:justify-end">
            <Link
              href="#catalogue"
              className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full border border-stone-300 hover:border-[#153D2A] text-stone-700 hover:text-[#153D2A] text-xs font-medium transition-all group"
            >
              <span>View All</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>
        </div>

        {/* 4 Cards Grid - 2 cols on mobile (390px friendly), 4 cols on desktop */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-6">
          {bestSellers.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
