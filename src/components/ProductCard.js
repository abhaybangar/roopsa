"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Heart, ShoppingBag, Star, Eye, Check } from "lucide-react";
import { motion } from "motion/react";
import { useApp } from "@/context/AppContext";

export default function ProductCard({ product, index = 0 }) {
  const { addToCart, isInWishlist, toggleWishlist, setQuickViewProduct } = useApp();
  const wishlisted = isInWishlist(product.id);
  const [isAdding, setIsAdding] = useState(false);
  const [justAdded, setJustAdded] = useState(false);

  const handleAdd = (e) => {
    e.stopPropagation();
    setIsAdding(true);
    addToCart(product, 1);
    setJustAdded(true);
    setTimeout(() => {
      setIsAdding(false);
      setJustAdded(false);
    }, 1200);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: "easeOut" }}
      whileHover={{ y: -5 }}
      className="group relative bg-[#FAF4EA] rounded-xl border border-[#E8DFC8] p-2.5 sm:p-4 flex flex-col justify-between transition-shadow duration-300 hover:shadow-xl hover:border-[#B58A48]/60 ayur-card-shadow"
    >
      {/* Top Bar inside Card: Bestseller Badge & Wishlist Heart */}
      <div className="flex items-center justify-between mb-2 z-10">
        {product.isBestseller ? (
          <span className="relative overflow-hidden bg-[#B58A48] text-white text-[9px] sm:text-[11px] font-semibold tracking-wider px-2.5 py-0.5 rounded-full shadow-xs uppercase">
            <span>Bestseller</span>
            {/* Subtle light shimmer sweep */}
            <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-linear-to-r from-transparent via-white/40 to-transparent" />
          </span>
        ) : (
          <span className="text-[9px] sm:text-[11px] text-[#B58A48] font-semibold tracking-wide px-2 py-0.5">
            {product.category}
          </span>
        )}

        {/* Heart Wishlist Button with Pop Animation */}
        <motion.button
          whileHover={{ scale: 1.15 }}
          whileTap={{ scale: 0.8 }}
          onClick={(e) => {
            e.stopPropagation();
            toggleWishlist(product.id, product.name);
          }}
          aria-label={wishlisted ? "Remove from wishlist" : "Add to wishlist"}
          className="p-1 sm:p-1.5 rounded-full text-stone-400 hover:text-red-500 hover:bg-stone-100/80 transition-colors"
        >
          <motion.div
            animate={wishlisted ? { scale: [1, 1.35, 1] } : { scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            <Heart
              className={`w-4 h-4 sm:w-5 sm:h-5 transition-colors ${
                wishlisted ? "fill-red-500 text-red-500" : "text-stone-500"
              }`}
            />
          </motion.div>
        </motion.button>
      </div>

      {/* Product Image Frame */}
      <div
        onClick={() => setQuickViewProduct(product)}
        className="relative w-full aspect-square rounded-lg overflow-hidden bg-white/80 border border-[#EFE7D8] cursor-pointer mb-3 shadow-2xs group-hover:border-[#B58A48]/30 transition-colors"
      >
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(max-width: 640px) 45vw, (max-width: 1024px) 25vw, 300px"
          className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-108"
        />

        {/* Floating Quick View button on hover */}
        <div className="absolute inset-0 bg-black/15 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none sm:pointer-events-auto">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={(e) => {
              e.stopPropagation();
              setQuickViewProduct(product);
            }}
            className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/95 text-[#153D2A] text-xs font-semibold shadow-lg hover:bg-white transition-all backdrop-blur-xs"
          >
            <Eye className="w-3.5 h-3.5 text-[#B58A48]" />
            <span>Quick View</span>
          </motion.button>
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

          {/* Subtitle */}
          <p
            className="text-[10px] sm:text-xs text-stone-600 line-clamp-1 mt-0.5 sm:mt-1 font-normal"
            title={product.subtitle}
          >
            {product.subtitle}
          </p>

          {/* Star Rating with Gold Sparkle */}
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

        {/* Price & Action Button */}
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

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.96 }}
            onClick={handleAdd}
            aria-label={`Add ${product.name} to Cart`}
            className={`w-full py-2 sm:py-2.5 px-2 sm:px-3 text-[11px] sm:text-xs font-semibold rounded-md flex items-center justify-center gap-1.5 transition-all shadow-xs ${
              justAdded
                ? "bg-[#102D20] text-emerald-300"
                : "bg-[#153D2A] hover:bg-[#102D20] text-white"
            }`}
          >
            {justAdded ? (
              <>
                <Check className="w-3.5 h-3.5 shrink-0" />
                <span className="truncate">Added to Cart!</span>
              </>
            ) : (
              <>
                <ShoppingBag className="w-3.5 h-3.5 shrink-0" />
                <span className="truncate">Add to Cart</span>
              </>
            )}
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}
