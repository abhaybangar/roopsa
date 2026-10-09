"use client";

import React from "react";
import Image from "next/image";
import { Heart, ShoppingBag, Star, Eye } from "lucide-react";
import { useApp } from "@/context/AppContext";

export default function ProductCard({ product }) {
  const { addToCart, isInWishlist, toggleWishlist, setQuickViewProduct } = useApp();
  const wishlisted = isInWishlist(product.id);

  return (
    <div className="group relative bg-[#FAF4EA] rounded-xl border border-[#E8DFC8] p-2.5 sm:p-4 flex flex-col justify-between transition-all duration-300 hover:shadow-lg hover:border-[#B58A48]/50 hover:-translate-y-0.5">
      {/* Top Bar inside Card: Bestseller Badge & Wishlist Heart */}
      <div className="flex items-center justify-between mb-2">
        {product.isBestseller ? (
          <span className="bg-[#B58A48] text-white text-[9px] sm:text-[11px] font-medium tracking-wider px-2 py-0.5 rounded-full shadow-xs uppercase">
            Bestseller
          </span>
        ) : (
          <span className="text-[9px] sm:text-[11px] text-[#B58A48] font-medium px-2 py-0.5">
            {product.category}
          </span>
        )}

        <button
          onClick={(e) => {
            e.stopPropagation();
            toggleWishlist(product.id, product.name);
          }}
          aria-label={wishlisted ? "Remove from wishlist" : "Add to wishlist"}
          className="p-1 sm:p-1.5 rounded-full text-stone-400 hover:text-red-500 hover:bg-stone-100 transition-colors"
        >
          <Heart
            className={`w-4 h-4 sm:w-5 sm:h-5 transition-transform active:scale-125 ${
              wishlisted ? "fill-red-500 text-red-500" : "text-stone-500"
            }`}
          />
        </button>
      </div>

      {/* Product Image Frame */}
      <div
        onClick={() => setQuickViewProduct(product)}
        className="relative w-full aspect-square rounded-lg overflow-hidden bg-white/70 border border-[#EFE7D8] cursor-pointer mb-3"
      >
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(max-width: 640px) 45vw, (max-width: 1024px) 25vw, 300px"
          className="object-cover object-center transition-transform duration-500 ease-out group-hover:scale-105"
        />

        {/* Quick View Button overlay on hover */}
        <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none sm:pointer-events-auto">
          <button
            onClick={(e) => {
              e.stopPropagation();
              setQuickViewProduct(product);
            }}
            className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/95 text-[#153D2A] text-xs font-semibold shadow-md hover:bg-white hover:scale-105 transition-all"
          >
            <Eye className="w-3.5 h-3.5" />
            <span>Quick View</span>
          </button>
        </div>
      </div>

      {/* Content Details */}
      <div className="flex-1 flex flex-col justify-between">
        <div>
          {/* Product Title */}
          <h3
            onClick={() => setQuickViewProduct(product)}
            className="font-serif text-xs sm:text-base font-bold text-[#153D2A] line-clamp-1 cursor-pointer hover:text-[#B58A48] transition-colors leading-snug"
            title={product.name}
          >
            {product.name}
          </h3>

          {/* Subtitle / Key info */}
          <p
            className="text-[10px] sm:text-xs text-stone-600 line-clamp-1 mt-0.5 sm:mt-1 font-normal"
            title={product.subtitle}
          >
            {product.subtitle}
          </p>

          {/* Star Rating & Review Count */}
          <div className="flex items-center gap-1 mt-1 sm:mt-2">
            <div className="flex items-center text-[#B58A48]">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 fill-[#B58A48] text-[#B58A48]"
                />
              ))}
            </div>
            <span className="text-[10px] sm:text-xs text-stone-500 font-medium">
              ({product.reviewsCount})
            </span>
          </div>
        </div>

        {/* Price & Action */}
        <div className="mt-2.5 sm:mt-3.5">
          <div className="flex items-baseline gap-1.5 mb-2">
            <span className="font-sans font-bold text-sm sm:text-lg text-[#153D2A]">
              ₹{product.price}
            </span>
            {product.originalPrice && (
              <span className="text-[10px] sm:text-xs text-stone-400 line-through">
                ₹{product.originalPrice}
              </span>
            )}
          </div>

          <button
            onClick={() => addToCart(product, 1)}
            aria-label={`Add ${product.name} to Cart`}
            className="w-full py-2 sm:py-2.5 px-2 sm:px-3 bg-[#153D2A] hover:bg-[#102D20] text-white text-[11px] sm:text-xs font-semibold rounded-md flex items-center justify-center gap-1.5 transition-all active:scale-[0.98] shadow-xs"
          >
            <ShoppingBag className="w-3.5 h-3.5 shrink-0" />
            <span className="truncate">Add to Cart</span>
          </button>
        </div>
      </div>
    </div>
  );
}
