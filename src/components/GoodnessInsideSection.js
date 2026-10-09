"use client";

import React from "react";
import Image from "next/image";
import { motion } from "motion/react";
import { ingredients } from "@/data/siteData";

export default function GoodnessInsideSection() {
  return (
    <section
      id="ingredients"
      aria-label="The Goodness Inside - Ingredients"
      className="relative w-full bg-[#FAF4EA] py-12 sm:py-18 overflow-hidden border-b border-[#EFE7D8]"
    >
      {/* Decorative Botanical Leaf Accents with Gentle Wind Sway */}
      <div className="absolute -top-8 -left-8 w-44 h-44 opacity-20 pointer-events-none text-[#153D2A] animate-leaf-sway">
        <svg viewBox="0 0 100 100" fill="currentColor">
          <path d="M10 90 Q 50 10 90 10 Q 90 50 50 70 Z" />
          <path d="M10 90 Q 20 40 70 30 Q 60 70 30 80 Z" opacity="0.6" />
        </svg>
      </div>
      <div className="absolute -top-8 -right-8 w-44 h-44 opacity-20 pointer-events-none text-[#153D2A] scale-x-[-1] animate-leaf-sway">
        <svg viewBox="0 0 100 100" fill="currentColor">
          <path d="M10 90 Q 50 10 90 10 Q 90 50 50 70 Z" />
          <path d="M10 90 Q 20 40 70 30 Q 60 70 30 80 Z" opacity="0.6" />
        </svg>
      </div>

      <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
        {/* Header with reveal animation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-10 sm:mb-14"
        >
          <div className="flex items-center justify-center gap-2 mb-2">
            <span className="w-8 h-[1px] bg-[#B58A48]" />
            <h2 className="text-xs sm:text-sm uppercase tracking-[0.25em] text-[#B58A48] font-semibold">
              Nature&apos;s Finest Ingredients
            </h2>
            <span className="w-8 h-[1px] bg-[#B58A48]" />
          </div>
          <h3 className="font-serif text-2xl sm:text-4xl text-[#153D2A] font-bold mb-2">
            The Goodness Inside
          </h3>
          <p className="text-stone-600 text-xs sm:text-base font-normal">
            Thoughtfully chosen natural ingredients for healthy, radiant skin.
          </p>
        </motion.div>

        {/* 6 Circular Items Grid with Staggered Entrance & Floating Motion */}
        <div className="grid grid-cols-3 sm:grid-cols-6 gap-4 sm:gap-6 lg:gap-8">
          {ingredients.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.85, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="group flex flex-col items-center text-center cursor-pointer"
            >
              {/* Circular Image Container with Floating Breathing Animation */}
              <motion.div
                animate={{
                  y: [0, idx % 2 === 0 ? -6 : 6, 0],
                }}
                transition={{
                  duration: 3.5 + (idx % 3) * 0.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                whileHover={{ scale: 1.08, rotate: idx % 2 === 0 ? 3 : -3 }}
                className="relative w-20 h-20 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full p-1 bg-white shadow-xs border border-[#E8DFC8] mb-3 group-hover:border-[#B58A48] group-hover:shadow-lg transition-all duration-300"
              >
                <div className="relative w-full h-full rounded-full overflow-hidden bg-[#FAF4EA]">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    sizes="(max-width: 640px) 30vw, 140px"
                    className="object-cover object-center transition-transform duration-500 ease-out group-hover:scale-115"
                  />
                </div>
              </motion.div>

              {/* Title & Benefit */}
              <h4 className="font-serif text-xs sm:text-base font-bold text-[#153D2A] group-hover:text-[#B58A48] transition-colors leading-tight">
                {item.name}
              </h4>
              <p className="text-[10px] sm:text-xs text-stone-500 mt-0.5 sm:mt-1 font-medium leading-snug">
                {item.benefit}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
