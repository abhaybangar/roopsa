"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Search, User, Heart, ShoppingBag, Menu, X, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
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
  const [hoveredNav, setHoveredNav] = useState(null);

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

        {/* Desktop Navigation Links with animated hover indicator */}
        <nav
          aria-label="Main Navigation"
          className="hidden xl:flex items-center gap-7 2xl:gap-9 text-[14.5px] font-medium tracking-wide text-[#24231F]"
        >
          {navLinks.map((link, idx) => (
            <Link
              key={idx}
              href={link.href}
              onMouseEnter={() => setHoveredNav(idx)}
              onMouseLeave={() => setHoveredNav(null)}
              className="relative py-1 text-[#24231F] hover:text-[#153D2A] transition-colors"
            >
              <span>{link.name}</span>
              {hoveredNav === idx && (
                <motion.span
                  layoutId="navUnderline"
                  className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#153D2A] rounded-full"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </Link>
          ))}
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-2 sm:gap-4 text-[#153D2A]">
          {/* Search Button */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsSearchOpen(true)}
            aria-label="Search products"
            className="p-2 sm:p-2.5 rounded-full hover:bg-[#153D2A]/8 text-[#24231F] hover:text-[#153D2A] transition-all"
          >
            <Search className="w-5 h-5 sm:w-[22px] sm:h-[22px]" />
          </motion.button>

          {/* Account Button */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsContactOpen(true)}
            aria-label="User account or consultation"
            className="p-2 sm:p-2.5 rounded-full hover:bg-[#153D2A]/8 text-[#24231F] hover:text-[#153D2A] transition-all hidden sm:flex"
            title="Account / Inquiries"
          >
            <User className="w-5 h-5 sm:w-[22px] sm:h-[22px]" />
          </motion.button>

          {/* Wishlist Button */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => {
              const el = document.getElementById("catalogue");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
            aria-label={`Wishlist items (${wishlist.length})`}
            className="p-2 sm:p-2.5 rounded-full hover:bg-[#153D2A]/8 text-[#24231F] hover:text-[#153D2A] transition-all relative"
          >
            <Heart className="w-5 h-5 sm:w-[22px] sm:h-[22px]" />
            <AnimatePresence>
              {wishlist.length > 0 && (
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0 }}
                  className="absolute top-1 right-1 w-4 h-4 bg-[#B58A48] text-white text-[10px] font-bold rounded-full flex items-center justify-center shadow-xs"
                >
                  {wishlist.length}
                </motion.span>
              )}
            </AnimatePresence>
          </motion.button>

          {/* Cart Button */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsCartOpen(true)}
            aria-label={`Shopping Cart (${cartCount} items)`}
            className="p-2 sm:p-2.5 rounded-full hover:bg-[#153D2A]/8 text-[#24231F] hover:text-[#153D2A] transition-all relative"
          >
            <ShoppingBag className="w-5 h-5 sm:w-[22px] sm:h-[22px]" />
            <AnimatePresence>
              <motion.span
                key={cartCount}
                initial={{ scale: 0.7 }}
                animate={{ scale: 1 }}
                className="absolute top-1 right-1 min-w-4 h-4 px-1 bg-[#153D2A] text-white text-[10px] font-bold rounded-full flex items-center justify-center shadow-xs"
              >
                {cartCount}
              </motion.span>
            </AnimatePresence>
          </motion.button>

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
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="xl:hidden bg-[#FAF4EA] border-b border-[#E6DCBA] px-6 py-6 shadow-xl overflow-hidden"
          >
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
                className="w-full py-2.5 px-4 rounded-full bg-[#153D2A] text-white font-medium text-sm flex items-center justify-center gap-2 shadow-xs"
              >
                <User className="w-4 h-4" />
                <span>Contact / Skincare Consultation</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
