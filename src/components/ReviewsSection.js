"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { customerReviews } from "@/data/siteData";

export default function ReviewsSection() {
  const [activeReviewIndex, setActiveReviewIndex] = useState(0);

  const prevReview = () => {
    setActiveReviewIndex((prev) =>
      prev === 0 ? customerReviews.length - 1 : prev - 1
    );
  };

  const nextReview = () => {
    setActiveReviewIndex((prev) => (prev + 1) % customerReviews.length);
  };

  return (
    <section
      id="reviews"
      aria-label="Customer Reviews"
      className="relative w-full bg-[#FAF4EA] py-14 sm:py-20 border-b border-[#EFE7D8] overflow-hidden"
    >
      <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-10">
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
              Real Experiences
            </h2>
            <span className="w-8 h-[1px] bg-[#B58A48]" />
          </div>
          <h3 className="font-serif text-2xl sm:text-4xl text-[#153D2A] font-bold mb-2">
            What Our Customers Say
          </h3>
          <p className="text-stone-600 text-xs sm:text-base font-normal">
            Trusted by thousands for natural, effective skincare.
          </p>
        </motion.div>

        {/* Reviews Container with Navigation Arrows */}
        <div className="relative max-w-6xl mx-auto flex items-center">
          {/* Left Arrow */}
          <motion.button
            whileHover={{ scale: 1.15 }}
            whileTap={{ scale: 0.85 }}
            onClick={prevReview}
            aria-label="Previous review"
            className="w-8 h-8 sm:w-11 sm:h-11 rounded-full bg-white text-[#24231F] shadow-sm border border-[#E0D5C3] flex items-center justify-center hover:bg-[#FAF4EA] shrink-0 z-10 transition-colors"
          >
            <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
          </motion.button>

          {/* Cards Grid / Carousel */}
          <div className="flex-1 px-3 sm:px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
              {customerReviews.map((rev, idx) => (
                <motion.div
                  key={rev.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  whileHover={{ y: -4 }}
                  className="bg-white/85 rounded-xl border border-[#E6DCBA] p-5 sm:p-6 flex flex-col justify-between shadow-xs hover:shadow-lg transition-all duration-300 hover:border-[#B58A48]/50"
                >
                  <div className="flex items-start gap-4 mb-4">
                    {/* Customer Avatar with subtle halo */}
                    <div className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-full overflow-hidden shrink-0 border-2 border-[#FAF4EA] shadow-xs">
                      <Image
                        src={rev.avatar}
                        alt={rev.name}
                        fill
                        sizes="60px"
                        className="object-cover object-center"
                      />
                    </div>

                    <div className="flex-1">
                      {/* Star Rating */}
                      <div className="flex items-center text-[#B58A48] mb-1.5">
                        {[...Array(rev.rating)].map((_, i) => (
                          <Star
                            key={i}
                            className="w-3.5 h-3.5 fill-[#B58A48] text-[#B58A48]"
                          />
                        ))}
                      </div>

                      {/* Review Quote */}
                      <p className="text-xs sm:text-[13px] text-stone-700 leading-relaxed italic">
                        &ldquo;{rev.review}&rdquo;
                      </p>
                    </div>
                  </div>

                  {/* Customer Name */}
                  <div className="pt-2 border-t border-[#F2E5D5] text-right">
                    <span className="font-serif text-xs sm:text-sm font-semibold text-[#153D2A]">
                      — {rev.name}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Arrow */}
          <motion.button
            whileHover={{ scale: 1.15 }}
            whileTap={{ scale: 0.85 }}
            onClick={nextReview}
            aria-label="Next review"
            className="w-8 h-8 sm:w-11 sm:h-11 rounded-full bg-white text-[#24231F] shadow-sm border border-[#E0D5C3] flex items-center justify-center hover:bg-[#FAF4EA] shrink-0 z-10 transition-colors"
          >
            <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
          </motion.button>
        </div>

        {/* Carousel Pagination Dots */}
        <div className="flex items-center justify-center gap-2 mt-8 sm:mt-10">
          {[0, 1, 2, 3, 4].map((idx) => {
            const isSelected = idx === activeReviewIndex;
            return (
              <button
                key={idx}
                onClick={() => setActiveReviewIndex(idx)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  isSelected ? "bg-[#B58A48] w-6" : "bg-stone-300 w-2 hover:bg-stone-400"
                }`}
                aria-label={`Review page ${idx + 1}`}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
