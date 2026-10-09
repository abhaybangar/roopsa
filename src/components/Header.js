"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Search, User, Heart, ShoppingBag, Menu, X, ChevronRight } from "lucide-react";
import Logo from "./Logo";
import { useApp } from "@/context/AppContext";

export default function Header() {
  const {
    cartCount,
    wishlist,
    setIsCartOpen,
    setIsSearchOpen,
    setIsContactOpen,
  } = useApp();

  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Shop", href: "#catalogue" },
    { name: "Skincare", href: "#catalogue" },
    { name: "Natural Waters", href: "#catalogue" },
    { name: "Ayurvedic Foods", href: "#catalogue" },
    { name: "Our Story", href: "#story" },
    { name: "Gifting", href: "#catalogue" },
  ];

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-300 ${
        isScrolled
          ? "bg-[#FAF4EA]/95 backdrop-blur-md shadow-sm border-b border-[#E6DCBA]"
          : "bg-[#FAF4EA] border-b border-[#EFE7D8]"
      }`}
    >
      <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-10 flex items-center justify-between h-20 sm:h-22">
        {/* Brand Logo */}
        <div className="shrink-0 flex items-center">
          <Logo />
        </div>

        {/* Desktop Navigation Links */}
        <nav
          aria-label="Main Navigation"
          className="hidden xl:flex items-center gap-7 2xl:gap-9 text-[14.5px] font-medium tracking-wide text-[#24231F]"
        >
          {navLinks.map((link, idx) => (
            <Link
              key={idx}
              href={link.href}
              className="relative py-1 text-[#24231F] hover:text-[#153D2A] transition-colors group"
            >
              <span>{link.name}</span>
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#153D2A] transition-all duration-300 group-hover:w-full rounded-full" />
            </Link>
          ))}
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-2 sm:gap-4 text-[#153D2A]">
          {/* Search Button */}
          <button
            onClick={() => setIsSearchOpen(true)}
            aria-label="Search products"
            className="p-2 sm:p-2.5 rounded-full hover:bg-[#153D2A]/8 text-[#24231F] hover:text-[#153D2A] transition-all active:scale-95"
          >
            <Search className="w-5 h-5 sm:w-[22px] sm:h-[22px]" />
          </button>

          {/* Account Button */}
          <button
            onClick={() => setIsContactOpen(true)}
            aria-label="User account or contact"
            className="p-2 sm:p-2.5 rounded-full hover:bg-[#153D2A]/8 text-[#24231F] hover:text-[#153D2A] transition-all active:scale-95 hidden sm:flex"
            title="Account / Inquiries"
          >
            <User className="w-5 h-5 sm:w-[22px] sm:h-[22px]" />
          </button>

          {/* Wishlist Button */}
          <button
            onClick={() => {
              const el = document.getElementById("catalogue");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
            aria-label={`Wishlist items (${wishlist.length})`}
            className="p-2 sm:p-2.5 rounded-full hover:bg-[#153D2A]/8 text-[#24231F] hover:text-[#153D2A] transition-all relative active:scale-95"
          >
            <Heart className="w-5 h-5 sm:w-[22px] sm:h-[22px]" />
            {wishlist.length > 0 && (
              <span className="absolute top-1 right-1 w-4 h-4 bg-[#B58A48] text-white text-[10px] font-bold rounded-full flex items-center justify-center animate-in zoom-in">
                {wishlist.length}
              </span>
            )}
          </button>

          {/* Cart Button */}
          <button
            onClick={() => setIsCartOpen(true)}
            aria-label={`Shopping Cart (${cartCount} items)`}
            className="p-2 sm:p-2.5 rounded-full hover:bg-[#153D2A]/8 text-[#24231F] hover:text-[#153D2A] transition-all relative active:scale-95"
          >
            <ShoppingBag className="w-5 h-5 sm:w-[22px] sm:h-[22px]" />
            <span className="absolute top-1 right-1 min-w-4 h-4 px-1 bg-[#153D2A] text-white text-[10px] font-bold rounded-full flex items-center justify-center">
              {cartCount}
            </span>
          </button>

          {/* Mobile Menu Hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle mobile menu"
            className="xl:hidden p-2 rounded-lg hover:bg-[#153D2A]/8 text-[#24231F] ml-1"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-[#FAF4EA] border-b border-[#E6DCBA] px-6 py-6 shadow-xl transition-all">
          <nav className="flex flex-col gap-3">
            {navLinks.map((link, idx) => (
              <Link
                key={idx}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between py-2.5 text-[15px] font-medium text-[#24231F] border-b border-[#EFE7D8] hover:text-[#153D2A]"
              >
                <span>{link.name}</span>
                <ChevronRight className="w-4 h-4 text-stone-400" />
              </Link>
            ))}
          </nav>

          <div className="mt-6 pt-4 border-t border-[#E6DCBA] flex flex-col gap-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                setIsContactOpen(true);
              }}
              className="w-full py-2.5 px-4 rounded-full bg-[#153D2A] text-white font-medium text-sm flex items-center justify-center gap-2"
            >
              <User className="w-4 h-4" />
              <span>Contact / Customer Care</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
