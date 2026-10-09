"use client";

import React from "react";
import Link from "next/link";

export default function Logo({ isDark = false, className = "" }) {
  const goldColor = "#B58A48";
  const greenColor = isDark ? "#A3C9A8" : "#153D2A";
  const textColor = isDark ? "#FFFFFF" : "#153D2A";
  const subtextColor = isDark ? "#E6DCBA" : "#59554E";

  return (
    <Link
      href="/"
      className={`inline-flex items-center gap-2.5 sm:gap-3 group select-none transition-transform active:scale-95 ${className}`}
      aria-label="Roopasa Ayurveda Home"
    >
      {/* Botanical Sun/Lotus Emblem */}
      <svg
        viewBox="0 0 100 100"
        className="w-9 h-9 sm:w-11 sm:h-11 shrink-0 drop-shadow-sm transition-transform duration-300 group-hover:rotate-6"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Outer dotted/notched halo */}
        <circle
          cx="50"
          cy="50"
          r="45"
          stroke={goldColor}
          strokeWidth="3"
          strokeDasharray="4 6"
        />
        <circle
          cx="50"
          cy="50"
          r="41"
          stroke={greenColor}
          strokeWidth="1.5"
          opacity="0.6"
        />

        {/* Central Lotus & Golden Flame */}
        {/* Flame / Inner Glow */}
        <path
          d="M50 22C46 32 44 38 46 47C47.5 44 49 42 50 42C51 42 52.5 44 54 47C56 38 54 32 50 22Z"
          fill="#D4AF37"
        />
        <circle cx="50" cy="46" r="3.5" fill="#B58A48" />

        {/* Lotus Petals / Leaves */}
        <path
          d="M50 49C44 55 33 60 27 70C38 72 46 64 50 56C54 64 62 72 73 70C67 60 56 55 50 49Z"
          fill={greenColor}
        />
        {/* Center Bud */}
        <path
          d="M50 46C47 53 43 62 43 69C46 72 54 72 57 69C57 62 53 53 50 46Z"
          fill={goldColor}
          opacity="0.9"
        />
      </svg>

      {/* Typography */}
      <div className="flex flex-col">
        <span
          className="text-lg sm:text-2xl font-serif font-bold tracking-[0.16em] uppercase leading-none transition-colors"
          style={{ color: textColor }}
        >
          Roopasa
        </span>
        <span
          className="text-[9px] sm:text-[10px] tracking-[0.3em] uppercase font-sans font-medium mt-1 transition-colors"
          style={{ color: subtextColor }}
        >
          — Ayurveda —
        </span>
      </div>
    </Link>
  );
}
