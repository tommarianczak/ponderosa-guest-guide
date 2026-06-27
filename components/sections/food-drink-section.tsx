"use client";

import { ExternalLink, MapPin, Star } from "lucide-react";
import { foodCategories, restaurants } from "@/data/restaurants";
import { FadeIn } from "@/components/shared/fade-in";
import { PlaceholderImage } from "@/components/shared/placeholder-image";
import { SectionHeading } from "@/components/shared/section-heading";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export const FoodDrinkSection = () => {
  return (
    <section id="food-drink" className="bg-muted/40 py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <FadeIn>
          <SectionHeading
            eyebrow="Local flavour"
            title="Food & drink"
            description="Our curated recommendations — tried, tested, and loved."
            align="center"
            className="mx-auto"
          />
        </FadeIn>

        <Tabs defaultValue="breakfast" className="w-full">
          <TabsList className="mb-8 h-auto w-full justify-start overflow-x-auto">
            {foodCategories.map((cat) => (
              <TabsTrigger key={cat.id} value={cat.id} className="shrink-0">
                {cat.label}
              </TabsTrigger>
            ))}
          </TabsList>

          {foodCategories.map((cat) => {
            const items = restaurants.filter((r) => r.category === cat.id);

            return (
              <TabsContent key={cat.id} value={cat.id}>
                <div className="grid gap-6 md:grid-cols-2">
                  {items.map((item) => (
                    <FadeIn key={item.id} immediate>
                      <Card className="overflow-hidden border-border/80 bg-card">
                        <PlaceholderImage
                          src={item.image}
                          alt={item.imageAlt}
                          label={item.name}
                          className="aspect-[16/9] w-full"
                        />
                        <CardContent className="p-5">
                          <h3 className="font-serif text-xl text-navy dark:text-warm-white">
                            {item.name}
                          </h3>
                          <p className="mt-2 text-sm text-muted-foreground">
                            {item.description}
                          </p>

                          <div className="mt-4 space-y-1 text-sm">
                            <p>
                              <span className="text-muted-foreground">Distance · </span>
                              {item.distance}
                            </p>
                            <p>
                              <span className="text-muted-foreground">Hours · </span>
                              {item.openingHours}
                            </p>
                          </div>

                          <div className="mt-4 rounded-lg bg-gold/10 p-3">
                            <p className="flex items-start gap-2 text-sm">
                              <Star className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                              <span>
                                <span className="font-medium text-navy dark:text-gold">
                                  Our recommendation ·{" "}
                                </span>
                                {item.ourRecommendation}
                              </span>
                            </p>
                          </div>

                          <div className="mt-5 flex flex-wrap gap-2">
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
                  ))}
                </div>
              </TabsContent>
            );
          })}
        </Tabs>
      </div>
    </section>
  );
};
