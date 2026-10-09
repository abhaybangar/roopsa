"use client";

import React, { useState, useMemo, useRef } from "react";
import { ChevronLeft, ChevronRight, SlidersHorizontal } from "lucide-react";
import ProductCard from "./ProductCard";
import { categories, products } from "@/data/products";

export default function CatalogueSection() {
  const [selectedCategory, setSelectedCategory] = useState("All Products");
  const [sortBy, setSortBy] = useState("featured");
  const scrollContainerRef = useRef(null);

  // Filter products by category
  const filteredProducts = useMemo(() => {
    let list =
      selectedCategory === "All Products"
        ? [...products]
        : products.filter((p) => p.category === selectedCategory);

    // Sort products
    if (sortBy === "price-low") {
      list.sort((a, b) => a.price - b.price);
    } else if (sortBy === "price-high") {
      list.sort((a, b) => b.price - a.price);
    } else if (sortBy === "rating") {
      list.sort((a, b) => b.rating - a.rating || b.reviewsCount - a.reviewsCount);
    } else {
      // Default featured order matching screenshot:
      // Sea Buckthorn Face Wash, Premium Gulab Jal, Forever Young Cream, Saffron Honey
      const order = [
        "sea-buckthorn-facewash",
        "premium-gulab-jal",
        "forever-young-cream",
        "saffron-honey",
        "forever-young-jar",
        "kashmiri-badam-hair-oil",
        "rose-sandal-body-mist",
        "royal-ayurvedic-gift-box",
      ];
      list.sort((a, b) => {
        const idxA = order.indexOf(a.id);
        const idxB = order.indexOf(b.id);
        return (idxA === -1 ? 99 : idxA) - (idxB === -1 ? 99 : idxB);
      });
    }

    return list;
  }, [selectedCategory, sortBy]);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -320, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 320, behavior: "smooth" });
    }
  };

  return (
    <section
      id="catalogue"
      aria-label="Product Catalogue"
      className="w-full bg-[#FAF4EA] py-12 sm:py-16 border-b border-[#EFE7D8]"
    >
      <div className="w-full max-w-[1600px] mx-auto px-3 sm:px-6 lg:px-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
          <div className="flex items-center justify-center gap-2 mb-2">
            <span className="w-8 h-[1px] bg-[#B58A48]" />
            <h2 className="text-xs sm:text-sm uppercase tracking-[0.25em] text-[#B58A48] font-semibold">
              Our Products
            </h2>
            <span className="w-8 h-[1px] bg-[#B58A48]" />
          </div>
          <h3 className="font-serif text-2xl sm:text-4xl text-[#153D2A] font-bold mb-2">
            Explore Our Ayurvedic Range
          </h3>
          <p className="text-stone-600 text-xs sm:text-base font-normal">
            Pure. Natural. Thoughtfully Crafted for Your Well-Being.
          </p>
        </div>

        {/* Filter Chips & Sort Controls */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8">
          {/* Category Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar w-full md:w-auto pb-1">
            {categories.map((category) => {
              const isSelected = selectedCategory === category;
              return (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 sm:px-5 py-2 rounded-full text-xs sm:text-[13px] font-medium whitespace-nowrap transition-all duration-200 active:scale-95 ${
                    isSelected
                      ? "bg-[#153D2A] text-white shadow-sm"
                      : "bg-[#F3EBE1] hover:bg-[#EAE0D3] text-[#24231F] border border-[#E0D5C3]"
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>

          {/* Sort By Dropdown */}
          <div className="flex items-center gap-2 self-end md:self-auto shrink-0 text-xs text-stone-600">
            <SlidersHorizontal className="w-3.5 h-3.5 text-stone-400" />
            <span className="font-medium text-stone-500">Sort by:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="bg-transparent border border-[#E0D5C3] rounded-md px-2.5 py-1.5 text-xs text-[#24231F] font-medium focus:outline-none focus:border-[#153D2A] cursor-pointer"
            >
              <option value="featured">Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Top Rated</option>
            </select>
          </div>
        </div>

        {/* Product Carousel Container with Nav Arrows */}
        <div className="relative group">
          {/* Left Arrow */}
          <button
            onClick={scrollLeft}
            aria-label="Scroll left in products"
            className="hidden sm:flex absolute -left-4 lg:-left-6 top-1/2 -translate-y-1/2 z-20 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-white text-[#24231F] shadow-md border border-[#E0D5C3] items-center justify-center transition-all hover:scale-105 active:scale-95 hover:bg-[#FAF4EA]"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          {/* Product Grid / Row */}
          {filteredProducts.length > 0 ? (
            <div
              ref={scrollContainerRef}
              className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-6"
            >
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="w-full py-16 text-center bg-[#F7EFE4] rounded-xl border border-dashed border-[#DACBB8]">
              <p className="font-serif text-lg text-[#153D2A] font-semibold mb-1">
                No products found in this category
              </p>
              <p className="text-xs text-stone-500 mb-4">
                We are constantly crafting pure botanical formulations.
              </p>
              <button
                onClick={() => setSelectedCategory("All Products")}
                className="px-5 py-2 rounded-full bg-[#153D2A] text-white text-xs font-medium"
              >
                View All Products
              </button>
            </div>
          )}

          {/* Right Arrow */}
          <button
            onClick={scrollRight}
            aria-label="Scroll right in products"
            className="hidden sm:flex absolute -right-4 lg:-right-6 top-1/2 -translate-y-1/2 z-20 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-white text-[#24231F] shadow-md border border-[#E0D5C3] items-center justify-center transition-all hover:scale-105 active:scale-95 hover:bg-[#FAF4EA]"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
        </div>
      </div>
    </section>
  );
}
