"use client";

import React, { useState } from "react";
import Image from "next/image";
import { X, Star, Heart, ShoppingBag, Plus, Minus, CheckCircle } from "lucide-react";
import { useApp } from "@/context/AppContext";

export default function QuickViewModal() {
  const {
    quickViewProduct,
    setQuickViewProduct,
    addToCart,
    isInWishlist,
    toggleWishlist,
  } = useApp();

  const [quantity, setQuantity] = useState(1);

  if (!quickViewProduct) return null;

  const wishlisted = isInWishlist(quickViewProduct.id);

  const handleAddToCart = () => {
    addToCart(quickViewProduct, quantity);
    setQuickViewProduct(null);
    setQuantity(1);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Product Quick View Modal"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto"
    >
      {/* Backdrop */}
      <div
        onClick={() => {
          setQuickViewProduct(null);
          setQuantity(1);
        }}
        className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity"
      />

      {/* Modal Card */}
      <div className="relative bg-[#FAF4EA] text-[#24231F] rounded-2xl max-w-3xl w-full overflow-hidden shadow-2xl border border-[#E6DCBA] z-10 max-h-[90vh] flex flex-col md:flex-row">
        {/* Close button */}
        <button
          onClick={() => {
            setQuickViewProduct(null);
            setQuantity(1);
          }}
          aria-label="Close modal"
          className="absolute top-3 right-3 z-20 p-2 rounded-full bg-white/80 hover:bg-white text-stone-600 transition-colors shadow-xs"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Left: Product Image */}
        <div className="relative w-full md:w-1/2 aspect-square md:aspect-auto min-h-[300px] bg-stone-100 border-b md:border-b-0 md:border-r border-[#E8DFC8]">
          <Image
            src={quickViewProduct.image}
            alt={quickViewProduct.name}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover object-center"
          />
          {quickViewProduct.isBestseller && (
            <span className="absolute top-4 left-4 bg-[#B58A48] text-white text-xs font-semibold px-3 py-1 rounded-full shadow-sm uppercase tracking-wider">
              Bestseller
            </span>
          )}
        </div>

        {/* Right: Product Details */}
        <div className="w-full md:w-1/2 p-6 sm:p-8 flex flex-col justify-between overflow-y-auto">
          <div>
            <div className="flex items-center justify-between mb-1">
              <span className="text-xs uppercase tracking-wider text-[#B58A48] font-semibold">
                {quickViewProduct.category} • {quickViewProduct.volume}
              </span>
            </div>

            <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#153D2A] mb-1">
              {quickViewProduct.name}
            </h2>

            <p className="text-xs text-stone-600 mb-3">
              {quickViewProduct.subtitle}
            </p>

            {/* Stars */}
            <div className="flex items-center gap-1.5 mb-4">
              <div className="flex items-center text-[#B58A48]">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-3.5 h-3.5 fill-[#B58A48] text-[#B58A48]"
                  />
                ))}
              </div>
              <span className="text-xs text-stone-500 font-medium">
                5.0 ({quickViewProduct.reviewsCount} customer reviews)
              </span>
            </div>

            {/* Price */}
            <div className="flex items-baseline gap-2 mb-4">
              <span className="font-sans text-2xl font-bold text-[#153D2A]">
                ₹{quickViewProduct.price}
              </span>
              {quickViewProduct.originalPrice && (
                <span className="text-sm text-stone-400 line-through">
                  ₹{quickViewProduct.originalPrice}
                </span>
              )}
              <span className="text-xs text-[#153D2A] bg-[#153D2A]/10 font-medium px-2 py-0.5 rounded">
                Save ₹{quickViewProduct.originalPrice - quickViewProduct.price}
              </span>
            </div>

            {/* Description */}
            <p className="text-xs text-stone-600 leading-relaxed mb-4">
              {quickViewProduct.description}
            </p>

            {/* Key Ingredients */}
            {quickViewProduct.keyIngredients && (
              <div className="mb-4">
                <h4 className="text-xs font-bold text-[#153D2A] uppercase tracking-wider mb-2">
                  Key Ayurvedic Ingredients:
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {quickViewProduct.keyIngredients.map((ing, i) => (
                    <span
                      key={i}
                      className="text-[11px] bg-white border border-[#E0D5C3] text-stone-700 px-2.5 py-1 rounded-md"
                    >
                      {ing}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Benefits */}
            {quickViewProduct.benefits && (
              <div className="mb-6 space-y-1">
                {quickViewProduct.benefits.map((benefit, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-1.5 text-xs text-stone-700"
                  >
                    <CheckCircle className="w-3.5 h-3.5 text-[#153D2A] shrink-0" />
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Action Row */}
          <div className="pt-4 border-t border-[#E6DCBA] flex items-center gap-3">
            {/* Quantity Selector */}
            <div className="flex items-center border border-stone-300 rounded-md overflow-hidden bg-white">
              <button
                onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                aria-label="Decrease quantity"
                className="p-2 hover:bg-stone-100 text-stone-600 transition-colors"
              >
                <Minus className="w-3.5 h-3.5" />
              </button>
              <span className="px-3 text-xs font-bold text-stone-800">
                {quantity}
              </span>
              <button
                onClick={() => setQuantity((q) => q + 1)}
                aria-label="Increase quantity"
                className="p-2 hover:bg-stone-100 text-stone-600 transition-colors"
              >
                <Plus className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Add to Cart */}
            <button
              onClick={handleAddToCart}
              className="flex-1 py-3 px-4 bg-[#153D2A] hover:bg-[#102D20] text-white text-xs sm:text-sm font-semibold rounded-md flex items-center justify-center gap-2 shadow-sm transition-all active:scale-[0.98]"
            >
              <ShoppingBag className="w-4 h-4" />
              <span>Add to Cart • ₹{quickViewProduct.price * quantity}</span>
            </button>

            {/* Wishlist button */}
            <button
              onClick={() => toggleWishlist(quickViewProduct.id, quickViewProduct.name)}
              aria-label={wishlisted ? "Remove from wishlist" : "Add to wishlist"}
              className="p-3 rounded-md border border-[#E0D5C3] bg-white hover:bg-stone-50 transition-colors"
            >
              <Heart
                className={`w-4 h-4 ${
                  wishlisted ? "fill-red-500 text-red-500" : "text-stone-500"
                }`}
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
