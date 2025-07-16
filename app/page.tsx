"use client"

import EnhancedLoadingScreen from "@/components/enhanced-loading-screen"
import HeroSection from "@/components/hero-section"
import BrandsSlider from "@/components/brands-slider"
import PortfolioSlider from "@/components/portfolio-slider"
import AboutSection from "@/components/about-section"
import ContactSection from "@/components/contact-section"

export default function Home() {
  return (
    <main className="min-h-screen">
      <EnhancedLoadingScreen />
      <HeroSection />
      <BrandsSlider />
      <PortfolioSlider />
      <AboutSection />
      <ContactSection />
    </main>
  )
}
