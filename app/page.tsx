import { AboutSection } from "@/components/sections/about-section";
import { BeforeYouLeaveSection } from "@/components/sections/before-you-leave-section";
import { EmergencySection } from "@/components/sections/emergency-section";
import { ExploreSection } from "@/components/sections/explore-section";
import { FaqSection } from "@/components/sections/faq-section";
import { FoodDrinkSection } from "@/components/sections/food-drink-section";
import { HeroSection } from "@/components/sections/hero-section";
import { HouseGuideSection } from "@/components/sections/house-guide-section";
import { MapSection } from "@/components/sections/map-section";
import { QuickInfoSection } from "@/components/sections/quick-info-section";
import { WeatherSection } from "@/components/sections/weather-section";

export default function GuestGuidePage() {
  return (
    <>
      <HeroSection />
      <QuickInfoSection />
      <AboutSection />
      <HouseGuideSection />
      <ExploreSection />
      <FoodDrinkSection />
      <MapSection />
      <FaqSection />
      <WeatherSection />
      <EmergencySection />
      <BeforeYouLeaveSection />
    </>
  );
}
