"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { heroSlides } from "@/data/siteData";

export default function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [progress, setProgress] = useState(0);
  const touchStartX = useRef(null);
  const touchEndX = useRef(null);

  const SLIDE_DURATION = 6000; // 6 seconds

  // Handle slide progression and smooth progress indicator
  useEffect(() => {
    if (isPaused) return;

    setProgress(0);
    const startTime = Date.now();

    const progressInterval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const pct = Math.min(100, (elapsed / SLIDE_DURATION) * 100);
      setProgress(pct);
    }, 50);

    const slideTimer = setTimeout(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, SLIDE_DURATION);

    return () => {
      clearInterval(progressInterval);
      clearTimeout(slideTimer);
    };
  }, [currentSlide, isPaused]);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? heroSlides.length - 1 : prev - 1));
    setProgress(0);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    setProgress(0);
  };

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const diff = touchStartX.current - touchEndX.current;
    if (diff > 45) {
      nextSlide();
    } else if (diff < -45) {
      prevSlide();
    }
    touchStartX.current = null;
    touchEndX.current = null;
  };

  return (
    <section
      aria-label="Hero Carousel"
      className="relative w-full overflow-hidden bg-[#FAF4EA] select-none group border-b border-[#EFE7D8]"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* 
        Full-width container matching exact banner aspect ratio (2172 x 724 = 3:1).
        This guarantees ZERO cropped text, ZERO broken banners, and full responsiveness on 390px mobile up to 4K desktop!
      */}
      <div className="relative w-full aspect-[2172/724] min-h-[125px] sm:min-h-[220px] max-h-[640px]">
        <AnimatePresence mode="wait">
          {heroSlides.map((slide, index) => {
            if (index !== currentSlide) return null;
            return (
              <motion.div
                key={slide.id}
                initial={{ opacity: 0, scale: 1.015 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.995 }}
                transition={{ duration: 0.65, ease: "easeInOut" }}
                className="absolute inset-0 w-full h-full"
              >
                <a
                  href={slide.ctaLink || "#catalogue"}
                  className="relative block w-full h-full cursor-pointer overflow-hidden"
                >
                  <Image
                    src={slide.image}
                    alt={slide.alt}
                    fill
                    priority
                    sizes="100vw"
                    className="object-cover object-center w-full h-full transition-transform duration-700 ease-out group-hover:scale-[1.01]"
                  />
                </a>
              </motion.div>
            );
          })}
        </AnimatePresence>

        {/* Ambient Floating Dust / Light Shimmer Particles */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-40">
          <motion.div
            animate={{
              y: [0, -15, 0],
              x: [0, 8, 0],
              opacity: [0.3, 0.7, 0.3],
            }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/4 left-1/3 w-3 h-3 rounded-full bg-[#B58A48] blur-xs"
          />
          <motion.div
            animate={{
              y: [0, 18, 0],
              x: [0, -10, 0],
              opacity: [0.2, 0.6, 0.2],
            }}
            transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute bottom-1/3 right-1/4 w-4 h-4 rounded-full bg-[#E9B5B7] blur-xs"
          />
        </div>

        {/* Carousel Navigation Arrows */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={prevSlide}
          aria-label="Previous Slide"
          className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 z-20 w-7 h-7 sm:w-11 sm:h-11 rounded-full bg-white/95 text-[#24231F] shadow-md flex items-center justify-center transition-shadow duration-200 border border-[#B58A48]/30 backdrop-blur-xs hover:shadow-lg"
        >
          <ChevronLeft className="w-4 h-4 sm:w-6 sm:h-6" />
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={nextSlide}
          aria-label="Next Slide"
          className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 z-20 w-7 h-7 sm:w-11 sm:h-11 rounded-full bg-white/95 text-[#24231F] shadow-md flex items-center justify-center transition-shadow duration-200 border border-[#B58A48]/30 backdrop-blur-xs hover:shadow-lg"
        >
          <ChevronRight className="w-4 h-4 sm:w-6 sm:h-6" />
        </motion.button>

        {/* Dynamic Indicator Dots + Slide Progress Bar */}
        <div className="absolute bottom-2 sm:bottom-4 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2 px-3 py-1 rounded-full bg-black/25 backdrop-blur-sm border border-white/20">
          {heroSlides.map((_, idx) => {
            const isActive = idx === currentSlide;
            return (
              <button
                key={idx}
                onClick={() => {
                  setCurrentSlide(idx);
                  setProgress(0);
                }}
                aria-label={`Go to slide ${idx + 1}`}
                className="relative h-2 rounded-full overflow-hidden transition-all duration-300 focus:outline-none"
                style={{ width: isActive ? "28px" : "8px" }}
              >
                <div
                  className={`w-full h-full rounded-full ${
                    isActive ? "bg-white/40" : "bg-white/60 hover:bg-white"
                  }`}
                />
                {isActive && (
                  <motion.div
                    className="absolute inset-y-0 left-0 bg-[#B58A48] rounded-full"
                    style={{ width: `${progress}%` }}
                  />
                )}
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
