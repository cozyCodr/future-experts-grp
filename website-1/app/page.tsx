"use client";

import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import StatsSection from "@/components/StatsSection";
import BusinessSolutionsSection from "@/components/BusinessSolutionsSection";
import FeaturesSection from "@/components/FeaturesSection";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <StatsSection />
      <BusinessSolutionsSection />
      <FeaturesSection />
      <Footer />
    </div>
  )
}
