"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function FestiveBanner() {
  return (
    <section
      aria-label="Festive Promotional Banner"
      className="relative w-full overflow-hidden bg-[#102D20] select-none my-6 sm:my-10"
    >
      <div className="relative w-full aspect-[16/9] sm:aspect-[21/9] lg:aspect-[3.2/1] min-h-[190px] max-h-[500px]">
        <Link href="#catalogue" className="block w-full h-full relative cursor-pointer group">
          <Image
            src="/herobanners/radiantbanner.png"
            alt="Festive Care, Naturally Yours - Flat 10% Off on orders above ₹999"
            fill
            sizes="100vw"
            className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.01]"
          />
        </Link>

        {/* Decorative Navigation Buttons matching screenshot */}
        <button
          onClick={() => {
            const el = document.getElementById("catalogue");
            if (el) el.scrollIntoView({ behavior: "smooth" });
          }}
          aria-label="Previous promotional slide"
          className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-10 w-7 h-7 sm:w-10 sm:h-10 rounded-full bg-white/90 hover:bg-white text-[#24231F] shadow-lg flex items-center justify-center transition-all duration-200 hover:scale-105 active:scale-95 border border-[#B58A48]/30"
        >
          <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>

        <button
          onClick={() => {
            const el = document.getElementById("catalogue");
            if (el) el.scrollIntoView({ behavior: "smooth" });
          }}
          aria-label="Next promotional slide"
          className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-10 w-7 h-7 sm:w-10 sm:h-10 rounded-full bg-white/90 hover:bg-white text-[#24231F] shadow-lg flex items-center justify-center transition-all duration-200 hover:scale-105 active:scale-95 border border-[#B58A48]/30"
        >
          <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>
      </div>
    </section>
  );
}
