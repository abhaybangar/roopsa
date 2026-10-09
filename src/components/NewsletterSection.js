"use client";

import React, { useState } from "react";
import { ArrowRight, Check } from "lucide-react";
import { useApp } from "@/context/AppContext";

export default function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const { showToast } = useApp();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !email.includes("@")) {
      showToast("Please enter a valid email address", "error");
      return;
    }
    setSubmitted(true);
    showToast("Thank you for joining our Ayurvedic journey!");
    setTimeout(() => {
      setEmail("");
      setSubmitted(false);
    }, 4000);
  };

  return (
    <section
      aria-label="Newsletter Subscription"
      className="w-full bg-[#153D2A] text-white py-8 sm:py-10 border-b border-[#B58A48]/20"
    >
      <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-10 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left Info */}
        <div className="flex items-center gap-4 text-center md:text-left">
          {/* Decorative Emblem */}
          <div className="w-12 h-12 rounded-full border border-[#B58A48]/50 flex items-center justify-center shrink-0 hidden sm:flex text-[#B58A48]">
            <svg viewBox="0 0 40 40" className="w-6 h-6" fill="currentColor">
              <path d="M20 5 C15 15 10 20 20 35 C30 20 25 15 20 5 Z" />
            </svg>
          </div>

          <div>
            <h3 className="font-serif text-lg sm:text-2xl font-bold text-white mb-1">
              Join Our Ayurvedic Journey
            </h3>
            <p className="text-stone-300 text-xs sm:text-sm font-normal">
              Subscribe to get exclusive offers, skincare tips and updates.
            </p>
          </div>
        </div>

        {/* Right Form */}
        <form
          onSubmit={handleSubmit}
          className="flex w-full md:w-auto max-w-md items-center bg-white rounded-md p-1 shadow-md border border-[#B58A48]/30"
        >
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email address"
            className="flex-1 px-3 sm:px-4 py-2 text-xs sm:text-sm text-stone-900 placeholder-stone-400 focus:outline-none bg-transparent"
            required
          />
          <button
            type="submit"
            className="px-4 sm:px-5 py-2.5 rounded bg-[#B58A48] hover:bg-[#9E763B] text-white text-xs font-bold tracking-wider uppercase flex items-center gap-1.5 transition-all shrink-0 active:scale-95"
          >
            {submitted ? (
              <>
                <span>Subscribed</span>
                <Check className="w-3.5 h-3.5" />
              </>
            ) : (
              <>
                <span>Subscribe</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </>
            )}
          </button>
        </form>
      </div>
    </section>
  );
}
