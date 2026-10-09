"use client";

import React from "react";
import { Truck, ShieldCheck, RotateCcw, Headphones } from "lucide-react";
import { motion } from "motion/react";
import { serviceBenefits } from "@/data/siteData";

export default function ServiceBenefits() {
  const getIcon = (type) => {
    switch (type) {
      case "truck":
        return <Truck className="w-5 h-5 sm:w-6 sm:h-6 text-[#153D2A]" />;
      case "shield":
        return <ShieldCheck className="w-5 h-5 sm:w-6 sm:h-6 text-[#153D2A]" />;
      case "refresh":
        return <RotateCcw className="w-5 h-5 sm:w-6 sm:h-6 text-[#153D2A]" />;
      case "headphones":
        return <Headphones className="w-5 h-5 sm:w-6 sm:h-6 text-[#153D2A]" />;
      default:
        return <Truck className="w-5 h-5 sm:w-6 sm:h-6 text-[#153D2A]" />;
    }
  };

  return (
    <section
      aria-label="Service Benefits"
      className="w-full bg-[#FAF4EA] py-7 sm:py-9 border-t border-b border-[#E8DFC8]"
    >
      <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {serviceBenefits.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              whileHover={{ y: -3 }}
              className="flex items-center gap-3 p-2.5 rounded-lg hover:bg-white/60 transition-colors group cursor-default"
            >
              <motion.div
                whileHover={{ rotate: 10, scale: 1.1 }}
                className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white border border-[#E6DCBA] flex items-center justify-center shrink-0 shadow-xs group-hover:border-[#B58A48] transition-colors"
              >
                {getIcon(item.icon)}
              </motion.div>
              <div>
                <h4 className="font-serif text-xs sm:text-sm font-bold text-[#153D2A] leading-tight group-hover:text-[#B58A48] transition-colors">
                  {item.title}
                </h4>
                <p className="text-[10px] sm:text-xs text-stone-500 font-medium mt-0.5">
                  {item.subtitle}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
