"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import { Search, X, ShoppingBag } from "lucide-react";
import { useApp } from "@/context/AppContext";
import { products } from "@/data/products";

export default function SearchModal() {
  const { isSearchOpen, setIsSearchOpen, addToCart, setQuickViewProduct } = useApp();
  const [query, setQuery] = useState("");

  const searchResults = useMemo(() => {
    if (!query.trim()) return [];
    const q = query.toLowerCase();
    return products.filter(
      (p) =>
        p.name.toLowerCase().includes(q) ||
        p.subtitle.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q) ||
        (p.keyIngredients &&
          p.keyIngredients.some((ing) => ing.toLowerCase().includes(q)))
    );
  }, [query]);

  if (!isSearchOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Search Products"
      className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4 overflow-y-auto"
    >
      {/* Backdrop */}
      <div
        onClick={() => {
          setIsSearchOpen(false);
          setQuery("");
        }}
        className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity"
      />

      {/* Search Container */}
      <div className="relative bg-[#FAF4EA] text-[#24231F] rounded-2xl max-w-2xl w-full overflow-hidden shadow-2xl border border-[#E6DCBA] z-10">
        {/* Input Bar */}
        <div className="p-4 sm:p-5 border-b border-[#E8DFC8] flex items-center gap-3 bg-white">
          <Search className="w-5 h-5 text-[#153D2A] shrink-0" />
          <input
            type="text"
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search rose water, face cream, saffron honey, cleanser..."
            className="flex-1 text-sm sm:text-base bg-transparent text-stone-900 placeholder-stone-400 focus:outline-none"
          />
          {query && (
            <button
              onClick={() => setQuery("")}
              className="text-stone-400 hover:text-stone-600 p-1"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            onClick={() => {
              setIsSearchOpen(false);
              setQuery("");
            }}
            className="p-1 text-stone-500 hover:text-stone-800"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Quick Suggestion Tags */}
        <div className="px-5 py-3 bg-[#FAF4EA] border-b border-[#E8DFC8] flex items-center gap-2 overflow-x-auto text-xs">
          <span className="text-stone-500 font-medium shrink-0">Popular:</span>
          {["Rose Water", "Face Cream", "Saffron Honey", "Face Wash", "Aloe"].map(
            (tag, idx) => (
              <button
                key={idx}
                onClick={() => setQuery(tag)}
                className="px-2.5 py-1 bg-white hover:bg-stone-100 rounded-full border border-stone-200 text-stone-700 shrink-0 transition-colors"
              >
                {tag}
              </button>
            )
          )}
        </div>

        {/* Results List */}
        <div className="max-h-96 overflow-y-auto p-4 space-y-3">
          {query.trim() === "" ? (
            <div className="text-center py-10 text-stone-500">
              <p className="text-xs">Type to discover authentic Ayurvedic formulations.</p>
            </div>
          ) : searchResults.length > 0 ? (
            searchResults.map((product) => (
              <div
                key={product.id}
                className="flex items-center gap-4 p-3 bg-white rounded-lg border border-[#E8DFC8] hover:border-[#153D2A]/40 transition-colors cursor-pointer group"
                onClick={() => {
                  setQuickViewProduct(product);
                  setIsSearchOpen(false);
                }}
              >
                <div className="relative w-14 h-14 rounded-md overflow-hidden bg-stone-100 shrink-0 border border-stone-200">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    sizes="60px"
                    className="object-cover object-center group-hover:scale-105 transition-transform"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <span className="text-[10px] text-[#B58A48] font-bold uppercase tracking-wider">
                    {product.category}
                  </span>
                  <h4 className="font-serif text-sm font-bold text-[#153D2A] truncate">
                    {product.name}
                  </h4>
                  <p className="text-[11px] text-stone-500 truncate">
                    {product.subtitle}
                  </p>
                </div>
                <div className="text-right shrink-0">
                  <p className="font-sans text-sm font-bold text-[#153D2A]">
                    ₹{product.price}
                  </p>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      addToCart(product, 1);
                      setIsSearchOpen(false);
                    }}
                    className="mt-1 px-3 py-1 bg-[#153D2A] text-white text-[11px] font-medium rounded hover:bg-[#102D20] flex items-center gap-1"
                  >
                    <ShoppingBag className="w-3 h-3" />
                    <span>Add</span>
                  </button>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-12 text-stone-500">
              <p className="font-serif text-base text-[#153D2A] font-semibold mb-1">
                No matching products found
              </p>
              <p className="text-xs text-stone-500">
                Try searching for &apos;Rose Water&apos;, &apos;Honey&apos;, or &apos;Cream&apos;.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
