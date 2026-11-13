
import HeroCarousel from "@/components/HeroCarousel";
import MobileHeroCarousel from "@/components/MobileHeroCarousel";

import HomeFeatures from "@/components/HomeFeatures";
import MobileHomeFeatures from "@/components/MobileHomeFeatures";

import HomeCompanyOverview from "@/components/HomeCompanyOverview";
import MobileHomeCompanyOverview from "@/components/MobileHomeCompanyOverview";

import HomeProductsShowcase from "@/components/HomeProductsShowcase";
import MobileHomeProductsShowcase from "@/components/MobileHomeProductsShowcase";

import HomeToolingCategories from "@/components/HomeToolingCategories";
import HomeWhyChooseUs from "@/components/HomeWhyChooseUs";

import ClientsSection from "@/components/ClientsSection";
import MobileClientsSection from "@/components/MobileClientsSection";

import HomeMissionVision from "@/components/HomeMissionVision";
import MobileHomeMissionVision from "@/components/MobileHomeMissionVision";

import HomeCTA from "@/components/HomeCTA";

export default function HomePage() {
  return (
    <main className="bg-slate-950 font-sans text-white">
      {/* ==========================================
          1. HERO CAROUSEL
      ========================================== */}

      <div className="md:hidden">
        <MobileHeroCarousel />
      </div>

      <div className="hidden md:block">
        <HeroCarousel />
      </div>

      {/* ==========================================
          2. TRUST & FEATURES
      ========================================== */}

      <div className="md:hidden">
        <MobileHomeFeatures />
      </div>

      <div className="hidden md:block">
        <HomeFeatures />
      </div>

      {/* ==========================================
          3. COMPANY OVERVIEW
      ========================================== */}

      <div className="md:hidden">
        <MobileHomeCompanyOverview />
      </div>

      <div className="hidden md:block">
        <HomeCompanyOverview />
      </div>

      {/* ==========================================
          4. PRODUCTS SHOWCASE
      ========================================== */}

      <div className="md:hidden">
        <MobileHomeProductsShowcase />
      </div>

      <div className="hidden md:block">
        <HomeProductsShowcase />
      </div>

      {/* ==========================================
          5. CORE TOOLING CATEGORIES
      ========================================== */}

      <HomeToolingCategories />

      {/* ==========================================
          6. WHY CHOOSE US
      ========================================== */}

      <HomeWhyChooseUs />

      {/* ==========================================
          7. OUR VALUED CLIENTS
      ========================================== */}

      <div className="md:hidden">
        <MobileClientsSection />
      </div>

      <div className="hidden md:block">
        <ClientsSection />
      </div>

      {/* ==========================================
          8. MISSION & VISION
      ========================================== */}

      <div className="md:hidden">
        <MobileHomeMissionVision />
      </div>

      <div className="hidden md:block">
        <HomeMissionVision />
      </div>

      {/* ==========================================
          9. CALL TO ACTION
      ========================================== */}

      <HomeCTA />
    </main>
  );
}
