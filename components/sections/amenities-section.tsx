"use client";

import {
  Clock,
  ExternalLink,
  Fuel,
  MapPin,
  Moon,
  Phone,
  Shirt,
  ShoppingBasket,
  ShoppingCart,
  Sparkles,
} from "lucide-react";
import { useState } from "react";
import {
  amenityCategories,
  amenities,
  type AmenityCategory,
} from "@/data/amenities";
import { FadeIn } from "@/components/shared/fade-in";
import { SectionHeading } from "@/components/shared/section-heading";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const categoryIcons: Record<AmenityCategory, React.ReactNode> = {
  supermarkets: <ShoppingCart className="h-5 w-5" />,
  petrol: <Fuel className="h-5 w-5" />,
  "late-night": <Moon className="h-5 w-5" />,
  convenience: <ShoppingBasket className="h-5 w-5" />,
  laundry: <Shirt className="h-5 w-5" />,
};

const getPrimaryCategory = (
  categories: AmenityCategory[],
): AmenityCategory => categories[0];

export const AmenitiesSection = () => {
  const [activeCategory, setActiveCategory] = useState<
    AmenityCategory | "all"
  >("all");

  const filteredAmenities =
    activeCategory === "all"
      ? amenities
      : amenities.filter((item) => item.categories.includes(activeCategory));

  return (
    <section id="amenities" className="py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <FadeIn>
          <SectionHeading
            eyebrow="Practical info"
            title="Local amenities"
            description="Supermarkets, petrol, late-night shops, and everyday essentials near Ponderosa."
            align="center"
            className="mx-auto"
          />
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="mb-8 flex flex-wrap justify-center gap-2">
            {amenityCategories.map((cat) => (
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

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {filteredAmenities.map((item, index) => {
              const primary = getPrimaryCategory(item.categories);

              return (
                <FadeIn key={item.id} delay={index * 0.04}>
                  <Card className="flex h-full flex-col border-border/80 bg-card transition-shadow hover:shadow-md">
                    <CardContent className="flex flex-1 flex-col p-5">
                      <div className="mb-3 flex items-start justify-between gap-3">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gold/15 text-gold">
                          {categoryIcons[primary]}
                        </div>
                        <div className="flex flex-wrap justify-end gap-1.5">
                          {item.categories.map((cat) => (
                            <span
                              key={cat}
                              className="rounded-full bg-muted px-2 py-0.5 text-[10px] font-medium uppercase tracking-wide text-muted-foreground"
                            >
                              {cat.replace("-", " ")}
                            </span>
                          ))}
                        </div>
                      </div>

                      <h3 className="font-serif text-lg text-navy dark:text-warm-white">
                        {item.name}
                      </h3>
                      <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                        {item.description}
                      </p>

                      <div className="mt-4 space-y-1.5 text-sm">
                        <p className="text-muted-foreground">{item.address}</p>
                        <p>
                          <span className="text-muted-foreground">
                            Distance ·{" "}
                          </span>
                          {item.distance}
                        </p>
                        <p className="flex items-start gap-1.5">
                          <Clock
                            className="mt-0.5 h-3.5 w-3.5 shrink-0 text-muted-foreground"
                            aria-hidden="true"
                          />
                          {item.openingHours}
                        </p>
                        {item.phone ? (
                          <p className="flex items-center gap-1.5">
                            <Phone
                              className="h-3.5 w-3.5 shrink-0 text-muted-foreground"
                              aria-hidden="true"
                            />
                            <a
                              href={`tel:${item.phone.replace(/\s/g, "")}`}
                              className="text-navy underline-offset-2 hover:underline dark:text-warm-white"
                            >
                              {item.phone}
                            </a>
                          </p>
                        ) : null}
                      </div>

                      <div
                        className={cn(
                          "mt-4 rounded-lg bg-gold/10 p-3 text-sm",
                        )}
                      >
                        <p className="flex items-start gap-2">
                          <Sparkles
                            className="mt-0.5 h-4 w-4 shrink-0 text-gold"
                            aria-hidden="true"
                          />
                          <span>{item.tip}</span>
                        </p>
                      </div>

                      <div className="mt-4 flex flex-wrap gap-2">
                        <Button variant="outline" size="sm" asChild>
                          <a
                            href={item.mapsUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <MapPin className="h-3.5 w-3.5" />
                            Maps
                          </a>
                        </Button>
                        {item.websiteUrl ? (
                          <Button variant="ghost" size="sm" asChild>
                            <a
                              href={item.websiteUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <ExternalLink className="h-3.5 w-3.5" />
                              Website
                            </a>
                          </Button>
                        ) : null}
                      </div>
                    </CardContent>
                  </Card>
                </FadeIn>
              );
            })}
          </div>
        </FadeIn>
      </div>
    </section>
  );
};
