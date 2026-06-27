"use client";

import { useState } from "react";
import { mapCategories, mapEmbedUrl, mapPins } from "@/data/map";
import { FadeIn } from "@/components/shared/fade-in";
import { SectionHeading } from "@/components/shared/section-heading";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const MapSection = () => {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const filteredPins =
    activeCategory === "all"
      ? mapPins
      : mapPins.filter((pin) => pin.category === activeCategory);

  return (
    <section id="map" className="py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <FadeIn>
          <SectionHeading
            eyebrow="Navigate"
            title="Interactive map"
            description="Ponderosa and our favourite spots — beaches, restaurants, walks, and essentials."
            align="center"
            className="mx-auto"
          />
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="mb-6 flex flex-wrap justify-center gap-2">
            <Button
              variant={activeCategory === "all" ? "default" : "outline"}
              size="sm"
              onClick={() => setActiveCategory("all")}
            >
              All
            </Button>
            {mapCategories.map((cat) => (
              <Button
                key={cat.id}
                variant={activeCategory === cat.id ? "default" : "outline"}
                size="sm"
                onClick={() => setActiveCategory(cat.id)}
              >
                {cat.label}
              </Button>
            ))}
          </div>

          <div className="overflow-hidden rounded-2xl border border-border shadow-sm">
            <iframe
              title="Map of Ponderosa and North Devon"
              src={mapEmbedUrl}
              className="aspect-[16/10] w-full min-h-[320px] border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>

          <ul className="mt-6 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
            {filteredPins.map((pin) => (
              <li
                key={pin.id}
                className={cn(
                  "rounded-lg border border-border bg-card px-4 py-3 text-sm",
                  pin.category === "property" && "border-gold/40 bg-gold/5",
                )}
              >
                <span className="font-medium text-navy dark:text-warm-white">
                  {pin.label}
                </span>
                <span className="ml-2 text-xs capitalize text-muted-foreground">
                  {pin.category.replace("-", " ")}
                </span>
              </li>
            ))}
          </ul>
        </FadeIn>
      </div>
    </section>
  );
};
