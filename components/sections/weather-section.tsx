"use client";

import { Cloud, Droplets, Sun, Sunrise, Sunset, Waves } from "lucide-react";
import { useConditions } from "@/components/layout/conditions-context";
import { FadeIn } from "@/components/shared/fade-in";
import { SectionHeading } from "@/components/shared/section-heading";
import { Card, CardContent } from "@/components/ui/card";
import { weatherLabel } from "@/lib/weather";

export const WeatherSection = () => {
  const { conditions, loading } = useConditions();

  return (
    <section id="weather" className="py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <FadeIn>
          <SectionHeading
            eyebrow="Conditions"
            title="Weather & tides"
            description="Live weather forecast and tide predictions for Ilfracombe."
            align="center"
            className="mx-auto"
          />
        </FadeIn>

        {loading ? (
          <p className="text-center text-muted-foreground">Loading forecast…</p>
        ) : conditions ? (
          <div className="grid gap-6 lg:grid-cols-3">
            <FadeIn>
              <Card className="border-border/80 bg-card lg:col-span-1">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 text-gold">
                    <Cloud className="h-6 w-6" />
                    <span className="text-sm uppercase tracking-widest">
                      Now
                    </span>
                  </div>
                  <p className="mt-4 font-serif text-5xl font-light text-navy dark:text-warm-white">
                    {conditions.current.temperature}°
                  </p>
                  <p className="mt-1 text-muted-foreground">
                    {weatherLabel(conditions.current.weatherCode)}
                  </p>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Wind {conditions.current.windSpeed} km/h
                  </p>
                </CardContent>
              </Card>
            </FadeIn>

            <FadeIn delay={0.05}>
              <Card className="border-border/80 bg-card lg:col-span-2">
                <CardContent className="p-6">
                  <p className="mb-4 text-sm uppercase tracking-widest text-gold">
                    3-day forecast
                  </p>
                  <div className="grid gap-4 sm:grid-cols-3">
                    {conditions.forecast.map((day) => (
                      <div
                        key={day.date}
                        className="rounded-lg bg-muted/60 p-4 text-center"
                      >
                        <p className="text-sm font-medium">{day.label}</p>
                        <p className="mt-2 font-serif text-2xl text-navy dark:text-warm-white">
                          {day.tempMax}°
                        </p>
                        <p className="text-sm text-muted-foreground">
                          Low {day.tempMin}° · {weatherLabel(day.weatherCode)}
                        </p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </FadeIn>

            <FadeIn delay={0.1}>
              <Card className="border-border/80 bg-card">
                <CardContent className="p-6">
                  <div className="mb-4 flex items-center gap-2 text-gold">
                    <Sunrise className="h-5 w-5" />
                    <span className="text-sm uppercase tracking-widest">
                      Sun
                    </span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <div>
                      <p className="text-muted-foreground">Sunrise</p>
                      <p className="font-medium">{conditions.sun.sunrise}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-muted-foreground">Sunset</p>
                      <p className="font-medium">{conditions.sun.sunset}</p>
                    </div>
                  </div>
                  <div className="mt-4 flex justify-center gap-8 text-gold/60">
                    <Sunrise className="h-8 w-8" />
                    <Sun className="h-8 w-8" />
                    <Sunset className="h-8 w-8" />
                  </div>
                </CardContent>
              </Card>
            </FadeIn>

            <FadeIn delay={0.15}>
              <Card className="border-border/80 bg-card lg:col-span-2">
                <CardContent className="p-6">
                  <div className="mb-4 flex items-center gap-2 text-gold">
                    <Waves className="h-5 w-5" />
                    <span className="text-sm uppercase tracking-widest">
                      Tide times
                    </span>
                    <span className="text-xs text-muted-foreground">
                      (Ilfracombe —{" "}
                      <a
                        href="https://easytide.admiralty.co.uk/?PortID=0535"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline-offset-2 hover:underline"
                      >
                        ADMIRALTY EasyTide
                      </a>
                      )
                    </span>
                  </div>
                  {conditions.tides.length ? (
                    <div className="grid gap-3 sm:grid-cols-2">
                      {conditions.tides.map((tide) => (
                        <div
                          key={`${tide.time}-${tide.type}-${tide.height}`}
                          className="flex items-center justify-between rounded-lg bg-muted/60 px-4 py-3 text-sm"
                        >
                          <span className="flex items-center gap-2">
                            <Droplets className="h-4 w-4 text-gold" />
                            {tide.type} tide
                          </span>
                          <span>
                            {tide.time} · {tide.height}
                          </span>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className="text-sm text-muted-foreground">
                      Tide times unavailable — check{" "}
                      <a
                        href="https://easytide.admiralty.co.uk/?PortID=0535"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-medium text-navy underline-offset-2 hover:underline dark:text-gold"
                      >
                        ADMIRALTY EasyTide
                      </a>
                      .
                    </p>
                  )}
                </CardContent>
              </Card>
            </FadeIn>
          </div>
        ) : (
          <p className="text-center text-muted-foreground">
            Weather unavailable — check again shortly.
          </p>
        )}
      </div>
    </section>
  );
};
