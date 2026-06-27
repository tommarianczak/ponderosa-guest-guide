"use client";

import { Cloud, Droplets, Sun, Sunrise, Sunset, Waves } from "lucide-react";
import { useEffect, useState } from "react";
import { property } from "@/data/property";
import { FadeIn } from "@/components/shared/fade-in";
import { SectionHeading } from "@/components/shared/section-heading";
import { Card, CardContent } from "@/components/ui/card";

type ForecastDay = {
  date: string;
  label: string;
  tempMax: number;
  tempMin: number;
  weatherCode: number;
};

type WeatherData = {
  current: {
    temperature: number;
    weatherCode: number;
    windSpeed: number;
  };
  forecast: ForecastDay[];
  sun: {
    sunrise: string;
    sunset: string;
  };
  tides: { time: string; height: string; type: string }[];
};

const weatherLabel = (code: number): string => {
  if (code === 0) return "Clear";
  if (code <= 3) return "Partly cloudy";
  if (code <= 48) return "Foggy";
  if (code <= 67) return "Rain";
  if (code <= 77) return "Snow";
  if (code <= 82) return "Showers";
  return "Stormy";
};

const formatTime = (iso: string) =>
  new Date(iso).toLocaleTimeString("en-GB", {
    hour: "2-digit",
    minute: "2-digit",
  });

const formatDay = (iso: string) =>
  new Date(iso).toLocaleDateString("en-GB", {
    weekday: "short",
    day: "numeric",
    month: "short",
  });

export const WeatherSection = () => {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const { lat, lng } = property.coordinates;
        const url =
          `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lng}` +
          "&current=temperature_2m,weather_code,wind_speed_10m" +
          "&daily=weather_code,temperature_2m_max,temperature_2m_min,sunrise,sunset" +
          "&timezone=Europe%2FLondon&forecast_days=4";

        const res = await fetch(url);
        const data = await res.json();

        const forecast: ForecastDay[] = data.daily.time
          .slice(0, 3)
          .map((date: string, i: number) => ({
            date,
            label: formatDay(date),
            tempMax: Math.round(data.daily.temperature_2m_max[i]),
            tempMin: Math.round(data.daily.temperature_2m_min[i]),
            weatherCode: data.daily.weather_code[i],
          }));

        setWeather({
          current: {
            temperature: Math.round(data.current.temperature_2m),
            weatherCode: data.current.weather_code,
            windSpeed: Math.round(data.current.wind_speed_10m),
          },
          forecast,
          sun: {
            sunrise: formatTime(data.daily.sunrise[0]),
            sunset: formatTime(data.daily.sunset[0]),
          },
          tides: [
            { time: "05:42", height: "4.2m", type: "High" },
            { time: "11:58", height: "1.1m", type: "Low" },
            { time: "18:06", height: "4.5m", type: "High" },
            { time: "23:47", height: "0.9m", type: "Low" },
          ],
        });
      } catch {
        setWeather(null);
      } finally {
        setLoading(false);
      }
    };

    void fetchWeather();
  }, []);

  return (
    <section id="weather" className="py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <FadeIn>
          <SectionHeading
            eyebrow="Conditions"
            title="Weather & tides"
            description="Live forecast for Ilfracombe — plan beach days and coastal walks."
            align="center"
            className="mx-auto"
          />
        </FadeIn>

        {loading ? (
          <p className="text-center text-muted-foreground">Loading forecast…</p>
        ) : weather ? (
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
                    {weather.current.temperature}°
                  </p>
                  <p className="mt-1 text-muted-foreground">
                    {weatherLabel(weather.current.weatherCode)}
                  </p>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Wind {weather.current.windSpeed} km/h
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
                    {weather.forecast.map((day) => (
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
                      <p className="font-medium">{weather.sun.sunrise}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-muted-foreground">Sunset</p>
                      <p className="font-medium">{weather.sun.sunset}</p>
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
                      (Ilfracombe — indicative)
                    </span>
                  </div>
                  <div className="grid gap-3 sm:grid-cols-2">
                    {weather.tides.map((tide) => (
                      <div
                        key={`${tide.time}-${tide.type}`}
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
