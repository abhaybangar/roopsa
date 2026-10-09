"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import { useApp } from "@/context/AppContext";

export default function ContactBanner() {
  const { setIsContactOpen } = useApp();

  return (
    <section
      id="contact"
      aria-label="Get In Touch"
      className="w-full bg-[#FAF4EA] py-10 sm:py-16"
    >
      <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-[#FAF4EA] rounded-2xl overflow-hidden border border-[#E6DCBA] grid grid-cols-1 md:grid-cols-2 shadow-sm hover:shadow-md transition-shadow group"
        >
          {/* Left Side: Photo of woman holding rose */}
          <div className="relative min-h-[280px] sm:min-h-[380px] w-full bg-stone-100 overflow-hidden">
            <Image
              src="/contact-rose.png"
              alt="Ayurvedic beauty consultation and customer care"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover object-center transition-transform duration-1000 ease-out group-hover:scale-104"
            />
          </div>

          {/* Right Side: Content */}
          <div className="flex flex-col justify-center p-6 sm:p-10 lg:p-16 bg-[#FAF4EA]">
            <div className="flex items-center gap-2 mb-2">
              <span className="w-8 h-[1px] bg-[#B58A48]" />
              <span className="text-xs uppercase tracking-[0.25em] text-[#B58A48] font-semibold">
                Get In Touch
              </span>
              <span className="w-8 h-[1px] bg-[#B58A48]" />
            </div>

            <h3 className="font-serif text-2xl sm:text-4xl text-[#153D2A] font-bold mb-4 leading-tight">
              We&apos;d Love to Hear from You
            </h3>

            <p className="text-stone-600 text-xs sm:text-base leading-relaxed mb-6 max-w-lg font-normal">
              Have a question about our products, need skincare advice, or want to collaborate? We&apos;re here to help.
            </p>

            <div>
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.96 }}
                onClick={() => setIsContactOpen(true)}
                className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-[#153D2A] hover:bg-[#102D20] text-white text-xs sm:text-sm font-semibold transition-all hover:gap-3.5 shadow-sm active:scale-95 group/btn"
              >
                <span>Contact Us</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
