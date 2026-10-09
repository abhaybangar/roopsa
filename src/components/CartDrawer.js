"use client";

import React from "react";
import Image from "next/image";
import { X, Plus, Minus, Trash2, ShoppingBag, ArrowRight } from "lucide-react";
import { useApp } from "@/context/AppContext";

export default function CartDrawer() {
  const {
    cart,
    isCartOpen,
    setIsCartOpen,
    updateQuantity,
    removeFromCart,
    cartTotal,
    freeShippingThreshold,
    amountNeededForFreeShipping,
  } = useApp();

  if (!isCartOpen) return null;

  const progressPercent = Math.min(
    100,
    Math.round((cartTotal / freeShippingThreshold) * 100)
  );

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Shopping Cart Drawer"
      className="fixed inset-0 z-50 overflow-hidden"
    >
      {/* Backdrop */}
      <div
        onClick={() => setIsCartOpen(false)}
        className="absolute inset-0 bg-black/50 backdrop-blur-xs transition-opacity"
      />

      <div className="absolute inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#FAF4EA] text-[#24231F] shadow-2xl flex flex-col justify-between border-l border-[#E6DCBA]">
          {/* Header */}
          <div className="p-5 border-b border-[#E6DCBA] flex items-center justify-between bg-[#F4EBD9]/60">
            <div className="flex items-center gap-2">
              <ShoppingBag className="w-5 h-5 text-[#153D2A]" />
              <h2 className="font-serif text-lg font-bold text-[#153D2A]">
                Your Ayurvedic Cart ({cart.reduce((s, i) => s + i.quantity, 0)})
              </h2>
            </div>
            <button
              onClick={() => setIsCartOpen(false)}
              aria-label="Close cart drawer"
              className="p-1.5 rounded-full hover:bg-stone-200 text-stone-500 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Free Shipping Progress Indicator */}
          <div className="px-5 py-3 bg-[#FAF4EA] border-b border-[#E8DFC8]">
            {amountNeededForFreeShipping > 0 ? (
              <p className="text-xs text-stone-700 font-medium mb-1.5">
                Add <span className="font-bold text-[#153D2A]">₹{amountNeededForFreeShipping}</span> more to unlock <span className="font-bold text-[#B58A48]">FREE Shipping</span>!
              </p>
            ) : (
              <p className="text-xs text-[#153D2A] font-bold mb-1.5 flex items-center gap-1">
                🎉 Congratulations! You have unlocked FREE Shipping!
              </p>
            )}
            <div className="w-full h-2 bg-stone-200 rounded-full overflow-hidden">
              <div
                className="h-full bg-[#153D2A] rounded-full transition-all duration-500"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
          </div>

          {/* Cart Items List */}
          <div className="flex-1 overflow-y-auto p-5 space-y-4">
            {cart.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center p-6 text-stone-500">
                <div className="w-16 h-16 rounded-full bg-stone-100 border border-stone-200 flex items-center justify-center mb-4 text-stone-400">
                  <ShoppingBag className="w-8 h-8" />
                </div>
                <h3 className="font-serif text-lg font-bold text-[#153D2A] mb-1">
                  Your cart is empty
                </h3>
                <p className="text-xs text-stone-500 max-w-xs mb-6">
                  Experience timeless beauty with our pure Ayurvedic preparations.
                </p>
                <button
                  onClick={() => setIsCartOpen(false)}
                  className="px-6 py-2.5 rounded-full bg-[#153D2A] text-white text-xs font-semibold hover:bg-[#102D20] transition-colors"
                >
                  Start Shopping
                </button>
              </div>
            ) : (
              cart.map((item) => (
                <div
                  key={item.product.id}
                  className="flex gap-4 p-3 bg-white rounded-lg border border-[#E8DFC8] shadow-2xs"
                >
                  {/* Product Thumbnail */}
                  <div className="relative w-18 h-18 rounded-md overflow-hidden bg-stone-50 shrink-0 border border-stone-200">
                    <Image
                      src={item.product.image}
                      alt={item.product.name}
                      fill
                      sizes="80px"
                      className="object-cover object-center"
                    />
                  </div>

                  {/* Info */}
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-start justify-between gap-2">
                        <h4 className="font-serif text-xs font-bold text-[#153D2A] line-clamp-1">
                          {item.product.name}
                        </h4>
                        <button
                          onClick={() => removeFromCart(item.product.id)}
                          aria-label={`Remove ${item.product.name} from cart`}
                          className="text-stone-400 hover:text-red-500 transition-colors p-1"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                      <p className="text-[10px] text-stone-500 line-clamp-1">
                        {item.product.subtitle}
                      </p>
                    </div>

                    <div className="flex items-center justify-between mt-2">
                      {/* Quantity Controls */}
                      <div className="flex items-center border border-stone-300 rounded-md overflow-hidden bg-stone-50">
                        <button
                          onClick={() => updateQuantity(item.product.id, -1)}
                          aria-label="Decrease quantity"
                          className="p-1 hover:bg-stone-200 text-stone-600 transition-colors"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="px-2.5 text-xs font-bold text-stone-800">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.product.id, 1)}
                          aria-label="Increase quantity"
                          className="p-1 hover:bg-stone-200 text-stone-600 transition-colors"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>

                      {/* Line Price */}
                      <span className="font-sans text-xs font-bold text-[#153D2A]">
                        ₹{item.product.price * item.quantity}
                      </span>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer / Summary */}
          {cart.length > 0 && (
            <div className="p-5 border-t border-[#E6DCBA] bg-[#F4EBD9]/60 space-y-3">
              <div className="flex items-center justify-between text-xs text-stone-600">
                <span>Subtotal</span>
                <span className="font-bold text-sm text-[#153D2A]">
                  ₹{cartTotal}
                </span>
              </div>
              <div className="flex items-center justify-between text-xs text-stone-600">
                <span>Shipping</span>
                <span className="font-medium text-[#153D2A]">
                  {amountNeededForFreeShipping === 0 ? "FREE" : "₹50"}
                </span>
              </div>
              <div className="pt-2 border-t border-[#E6DCBA] flex items-center justify-between">
                <span className="font-serif font-bold text-base text-[#153D2A]">
                  Total
                </span>
                <span className="font-sans font-bold text-lg text-[#153D2A]">
                  ₹{amountNeededForFreeShipping === 0 ? cartTotal : cartTotal + 50}
                </span>
              </div>

              <button
                onClick={() => {
                  alert(
                    "This is a demonstration store. Real payment checkout is disabled."
                  );
                }}
                className="w-full py-3 px-4 rounded-md bg-[#153D2A] hover:bg-[#102D20] text-white text-xs sm:text-sm font-semibold flex items-center justify-center gap-2 shadow-sm transition-all active:scale-[0.98]"
              >
                <span>Proceed to Checkout</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <p className="text-[10px] text-center text-stone-500">
                🔒 Guaranteed Safe & Secure 256-bit Encrypted Checkout
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
