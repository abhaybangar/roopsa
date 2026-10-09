"use client";

import React from "react";
import { Sparkles, Truck, Tag, Leaf } from "lucide-react";
import { announcements } from "@/data/siteData";

export default function AnnouncementBar() {
  const getIcon = (iconName) => {
    switch (iconName) {
      case "leaf":
        return <Leaf className="w-3.5 h-3.5 text-[#B58A48] shrink-0" />;
      case "truck":
        return <Truck className="w-3.5 h-3.5 text-[#B58A48] shrink-0" />;
      case "sparkles":
        return <Sparkles className="w-3.5 h-3.5 text-[#B58A48] shrink-0" />;
      case "tag":
        return <Tag className="w-3.5 h-3.5 text-[#B58A48] shrink-0" />;
      default:
        return <Leaf className="w-3.5 h-3.5 text-[#B58A48] shrink-0" />;
    }
  };

  return (
    <aside
      aria-label="Announcements and offers"
      className="w-full bg-[#102D20] text-[#F2E5D5] border-b border-[#B58A48]/20 text-[11px] sm:text-xs py-2 px-4 transition-colors"
    >
      <div className="w-full max-w-[1600px] mx-auto flex items-center justify-between sm:justify-around overflow-x-auto no-scrollbar gap-6 md:gap-8 whitespace-nowrap">
        {announcements.map((item, idx) => (
          <div
            key={idx}
            className="flex items-center gap-1.5 shrink-0 font-medium tracking-wide text-stone-200/90 hover:text-white transition-colors"
          >
            {getIcon(item.icon)}
            <span>{item.text}</span>
          </div>
        ))}
      </div>
    </aside>
  );
}
