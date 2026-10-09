"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "motion/react";

export default function FestiveBanner() {
  return (
    <section
      aria-label="Festive Promotional Banner"
      className="relative w-full overflow-hidden bg-[#102D20] select-none my-6 sm:my-10 border-y border-[#B58A48]/30"
    >
      {/* 
        Exact aspect ratio (2172/724 = 3:1) ensures ZERO cropped text or broken graphics on mobile!
      */}
      <div className="relative w-full aspect-[2172/724] min-h-[125px] sm:min-h-[200px] max-h-[500px]">
        <Link href="#catalogue" className="relative block w-full h-full cursor-pointer overflow-hidden group">
          <Image
            src="/herobanners/radiantbanner.png"
            alt="Festive Care, Naturally Yours - Flat 10% Off on orders above ₹999"
            fill
            sizes="100vw"
            className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.01]"
          />

          {/* Ambient Festive Warm Light Overlay */}
          <div className="absolute inset-0 bg-radial from-amber-400/10 via-transparent to-transparent pointer-events-none opacity-50 group-hover:opacity-80 transition-opacity" />
        </Link>

        {/* Carousel Navigation Buttons matching reference screenshot */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => {
            const el = document.getElementById("catalogue");
            if (el) el.scrollIntoView({ behavior: "smooth" });
          }}
          aria-label="Previous promotional slide"
          className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 z-10 w-6 h-6 sm:w-10 sm:h-10 rounded-full bg-white/95 text-[#24231F] shadow-md flex items-center justify-center border border-[#B58A48]/30 hover:bg-white transition-all"
        >
          <ChevronLeft className="w-3.5 h-3.5 sm:w-5 sm:h-5" />
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => {
            const el = document.getElementById("catalogue");
            if (el) el.scrollIntoView({ behavior: "smooth" });
          }}
          aria-label="Next promotional slide"
          className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 z-10 w-6 h-6 sm:w-10 sm:h-10 rounded-full bg-white/95 text-[#24231F] shadow-md flex items-center justify-center border border-[#B58A48]/30 hover:bg-white transition-all"
        >
          <ChevronRight className="w-3.5 h-3.5 sm:w-5 sm:h-5" />
        </motion.button>
      </div>
    </section>
  );
}
