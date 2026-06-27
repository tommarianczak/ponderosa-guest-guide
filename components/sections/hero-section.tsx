"use client";

import { BookOpen, MapPin, Wifi } from "lucide-react";
import { property } from "@/data/property";
import { FadeIn } from "@/components/shared/fade-in";
import { PlaceholderImage } from "@/components/shared/placeholder-image";
import { Button } from "@/components/ui/button";
import { scrollToSection } from "@/lib/utils";

const handleCopyWifi = async () => {
  const text = `Network: ${property.wifi.ssid}\nPassword: ${property.wifi.password}`;
  try {
    await navigator.clipboard.writeText(text);
  } catch {
    /* clipboard unavailable */
  }
  scrollToSection("quick-info");
};

export const HeroSection = () => {
  return (
    <section id="hero" className="relative min-h-[85vh] scroll-mt-0">
      <PlaceholderImage
        src={property.heroImage}
        alt={property.heroImageAlt}
        label="Coastal photograph"
        className="absolute inset-0 min-h-[85vh]"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-navy/40 to-navy/20" />

      <div className="relative mx-auto flex min-h-[85vh] max-w-6xl flex-col justify-end px-4 pb-16 pt-32 sm:px-6 sm:pb-20">
        <FadeIn>
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.35em] text-gold">
            Ilfracombe · North Devon
          </p>
          <h1 className="font-serif text-5xl font-light tracking-[0.2em] text-warm-white sm:text-7xl">
            {property.name.toUpperCase()}
          </h1>
          <p className="mt-4 max-w-lg text-lg text-warm-white/90">
            {property.tagline}
          </p>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-warm-white/75">
            {property.welcome}
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            <Button
              variant="gold"
              size="lg"
              onClick={handleCopyWifi}
              aria-label="Connect to WiFi — copy credentials"
            >
              <Wifi className="h-4 w-4" />
              Connect to WiFi
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-warm-white/30 text-warm-white hover:bg-warm-white/10"
              onClick={() => scrollToSection("house-guide")}
            >
              <BookOpen className="h-4 w-4" />
              House Guide
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-warm-white/30 text-warm-white hover:bg-warm-white/10"
              onClick={() => scrollToSection("explore")}
            >
              <MapPin className="h-4 w-4" />
              Local Recommendations
            </Button>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};
