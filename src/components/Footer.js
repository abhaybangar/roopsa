"use client";

import React from "react";
import Link from "next/link";
import { Smartphone } from "lucide-react";
import Logo from "./Logo";
import { useApp } from "@/context/AppContext";

export default function Footer() {
  const { setIsContactOpen } = useApp();

  return (
    <footer
      aria-label="Footer"
      className="w-full bg-[#0C2317] text-stone-300 pt-14 pb-8 border-t border-[#153D2A]"
    >
      <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-10 pb-12 border-b border-stone-800/80">
          {/* Column 1: Brand & Socials */}
          <div className="lg:col-span-1 flex flex-col justify-between">
            <div>
              <div className="mb-4">
                <Logo isDark={true} />
              </div>
              <p className="font-serif text-sm text-[#E6DCBA] font-medium mb-1">
                Pure. Natural. Timeless.
              </p>
              <p className="text-xs text-stone-400 leading-relaxed max-w-xs mb-6">
                Ayurvedic skincare and wellness for a healthier, more radiant you.
              </p>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-3 text-stone-400">
              {/* Instagram */}
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="w-8 h-8 rounded-full border border-stone-700 flex items-center justify-center hover:text-[#B58A48] hover:border-[#B58A48] transition-colors"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>

              {/* Facebook */}
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="w-8 h-8 rounded-full border border-stone-700 flex items-center justify-center hover:text-[#B58A48] hover:border-[#B58A48] transition-colors"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.374 14.5 5 15.5 5H18V0h-3.808C10.597 0 9 1.582 9 4.615V8z" />
                </svg>
              </a>

              {/* YouTube */}
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                aria-label="YouTube"
                className="w-8 h-8 rounded-full border border-stone-700 flex items-center justify-center hover:text-[#B58A48] hover:border-[#B58A48] transition-colors"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>

              {/* Pinterest */}
              <a
                href="https://pinterest.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Pinterest"
                className="w-8 h-8 rounded-full border border-stone-700 flex items-center justify-center hover:text-[#B58A48] hover:border-[#B58A48] transition-colors"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.373 0 0 5.372 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345-.09.375-.291 1.199-.334 1.357-.053.225-.172.271-.401.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.354-.629-2.758-1.379l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: Shop */}
          <div>
            <h4 className="font-serif text-sm font-bold text-white uppercase tracking-wider mb-4">
              Shop
            </h4>
            <ul className="flex flex-col gap-2.5 text-xs text-stone-300">
              {[
                "All Products",
                "Skincare",
                "Natural Waters",
                "Ayurvedic Foods",
                "Hair Care",
                "Body Care",
                "Gifting",
              ].map((item, idx) => (
                <li key={idx}>
                  <Link
                    href="#catalogue"
                    className="hover:text-[#B58A48] transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: About */}
          <div>
            <h4 className="font-serif text-sm font-bold text-white uppercase tracking-wider mb-4">
              About
            </h4>
            <ul className="flex flex-col gap-2.5 text-xs text-stone-300">
              <li>
                <Link href="#story" className="hover:text-[#B58A48] transition-colors">
                  Our Story
                </Link>
              </li>
              <li>
                <Link href="#ingredients" className="hover:text-[#B58A48] transition-colors">
                  Ingredients
                </Link>
              </li>
              <li>
                <Link href="#story" className="hover:text-[#B58A48] transition-colors">
                  Sustainability
                </Link>
              </li>
              <li>
                <button
                  onClick={() => setIsContactOpen(true)}
                  className="hover:text-[#B58A48] transition-colors text-left"
                >
                  Contact Us
                </button>
              </li>
              <li>
                <Link href="#story" className="hover:text-[#B58A48] transition-colors">
                  FAQs
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Help */}
          <div>
            <h4 className="font-serif text-sm font-bold text-white uppercase tracking-wider mb-4">
              Help
            </h4>
            <ul className="flex flex-col gap-2.5 text-xs text-stone-300">
              <li>
                <Link href="#contact" className="hover:text-[#B58A48] transition-colors">
                  Shipping Policy
                </Link>
              </li>
              <li>
                <Link href="#contact" className="hover:text-[#B58A48] transition-colors">
                  Returns & Refunds
                </Link>
              </li>
              <li>
                <Link href="#contact" className="hover:text-[#B58A48] transition-colors">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link href="#contact" className="hover:text-[#B58A48] transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 5: Download Our App */}
          <div>
            <h4 className="font-serif text-sm font-bold text-white uppercase tracking-wider mb-2">
              Download Our App
            </h4>
            <p className="text-xs text-stone-400 mb-4">
              Get exclusive offers and updates
            </p>
            <div className="flex flex-col gap-2.5">
              {/* App Store Badge */}
              <a
                href="#"
                onClick={(e) => e.preventDefault()}
                className="flex items-center gap-2.5 bg-stone-900/90 hover:bg-stone-800 border border-stone-700/80 rounded-md px-3 py-2 text-white transition-all w-fit group"
              >
                <Smartphone className="w-5 h-5 text-white" />
                <div className="text-left">
                  <div className="text-[9px] uppercase tracking-wider text-stone-400">
                    Download on the
                  </div>
                  <div className="text-xs font-semibold leading-tight">
                    App Store
                  </div>
                </div>
              </a>

              {/* Google Play Badge */}
              <a
                href="#"
                onClick={(e) => e.preventDefault()}
                className="flex items-center gap-2.5 bg-stone-900/90 hover:bg-stone-800 border border-stone-700/80 rounded-md px-3 py-2 text-white transition-all w-fit group"
              >
                <div className="w-5 h-5 flex items-center justify-center font-bold text-green-400 text-sm">
                  ▶
                </div>
                <div className="text-left">
                  <div className="text-[9px] uppercase tracking-wider text-stone-400">
                    Get it on
                  </div>
                  <div className="text-xs font-semibold leading-tight">
                    Google Play
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Legal / Copyright */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-[11px] text-stone-500 gap-3">
          <p>© 2026 Roopasa Ayurveda. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <Link href="#contact" className="hover:text-stone-300">
              Terms
            </Link>
            <span>|</span>
            <Link href="#contact" className="hover:text-stone-300">
              Privacy
            </Link>
            <span>|</span>
            <Link href="#contact" className="hover:text-stone-300">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
