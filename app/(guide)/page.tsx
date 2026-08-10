import { AboutSection } from "@/components/sections/about-section";
import { BeforeYouLeaveSection } from "@/components/sections/before-you-leave-section";
import { EmergencySection } from "@/components/sections/emergency-section";
import { EvChargingSection } from "@/components/sections/ev-charging-section";
import { ExploreSection } from "@/components/sections/explore-section";
import { BeachesSection } from "@/components/sections/beaches-section";
import { FaqSection } from "@/components/sections/faq-section";
import { FoodDrinkSection } from "@/components/sections/food-drink-section";
import { HeroSection } from "@/components/sections/hero-section";
import { HouseGuideSection } from "@/components/sections/house-guide-section";
import { AmenitiesSection } from "@/components/sections/amenities-section";
import { QuickInfoSection } from "@/components/sections/quick-info-section";
import { WeatherSection } from "@/components/sections/weather-section";
import { HashScroll } from "@/components/shared/hash-scroll";

export default function GuestGuidePage() {
  return (
    <>
      <HashScroll />
      <HeroSection />
      <QuickInfoSection />
      <EvChargingSection />
      <AboutSection />
      <HouseGuideSection />
      <ExploreSection />
      <BeachesSection />
      <FoodDrinkSection />
      <AmenitiesSection />
      <FaqSection />
      <WeatherSection />
      <EmergencySection />
      <BeforeYouLeaveSection />
    </>
  );
}
