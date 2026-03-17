"use client";

import HeroSection from "@/components/sections/HeroSection";
import FeatureSection from "@/components/sections/FeatureSection";
import FaqSection from "@/components/sections/FaqSection";
import { dummyData } from "@/data/dummyData";

export default function Home() {
  return (
    <main className="bg-white min-h-screen">
      <HeroSection data={dummyData.heroSection} />
      <FeatureSection data={dummyData.featureSection} />
      <FaqSection data={dummyData.faqSection} />
    </main>
  );
}