"use client";

import React from "react";
import AnnouncementBar from "@/components/AnnouncementBar";
import Header from "@/components/Header";
import HeroCarousel from "@/components/HeroCarousel";
import BestSellersSection from "@/components/BestSellersSection";
import FestiveBanner from "@/components/FestiveBanner";
import GoodnessInsideSection from "@/components/GoodnessInsideSection";
import CatalogueSection from "@/components/CatalogueSection";
import ReviewsSection from "@/components/ReviewsSection";
import ContactBanner from "@/components/ContactBanner";
import ServiceBenefits from "@/components/ServiceBenefits";
import NewsletterSection from "@/components/NewsletterSection";
import Footer from "@/components/Footer";
import CartDrawer from "@/components/CartDrawer";
import QuickViewModal from "@/components/QuickViewModal";
import SearchModal from "@/components/SearchModal";
import ContactModal from "@/components/ContactModal";
import ToastContainer from "@/components/ToastContainer";

export default function Home() {
  return (
    <div className="min-h-screen w-full flex flex-col bg-[#FAF4EA] text-[#24231F] selection:bg-[#B58A48]/20 selection:text-[#153D2A]">
      {/* 1. Announcement Bar */}
      <AnnouncementBar />

      {/* 2. Full-Width Navigation */}
      <Header />

      {/* Main Content: Full-width container system */}
      <main className="w-full flex-1 flex flex-col">
        {/* 3. Hero Slideshow - short, wide, edge-to-edge */}
        <HeroCarousel />

        {/* 4. Best Sellers - immediately after hero */}
        <BestSellersSection />

        {/* 5. Festive Promotional Banner Strip */}
        <FestiveBanner />

        {/* 6. The Goodness Inside - Natural Ingredients */}
        <GoodnessInsideSection />

        {/* 7. Full Product Catalogue with Functional Category Filters */}
        <CatalogueSection />

        {/* 8. Customer Reviews */}
        <ReviewsSection />

        {/* 9. Contact / Consultation Split Card */}
        <ContactBanner />

        {/* 10. Service Benefits Strip */}
        <ServiceBenefits />

        {/* 11. Newsletter Subscription Strip */}
        <NewsletterSection />
      </main>

      {/* 12. Full-Width Forest-Green Footer */}
      <Footer />

      {/* Interactive Global Drawers & Modals */}
      <CartDrawer />
      <QuickViewModal />
      <SearchModal />
      <ContactModal />
      <ToastContainer />
    </div>
  );
}
