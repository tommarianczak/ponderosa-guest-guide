import { property } from "@/data/property";
import type { TideEvent } from "@/lib/tides";

export type ForecastDay = {
  date: string;
  label: string;
  tempMax: number;
  tempMin: number;
  weatherCode: number;
};

export type GuestConditions = {
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
  tides: TideEvent[];
};

export const weatherLabel = (code: number): string => {
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
    timeZone: "Europe/London",
  });

const formatDay = (iso: string) =>
  new Date(iso).toLocaleDateString("en-GB", {
    weekday: "short",
    day: "numeric",
    month: "short",
    timeZone: "Europe/London",
  });

export const fetchGuestConditions = async (): Promise<GuestConditions | null> => {
  try {
    const { lat, lng } = property.coordinates;
    const weatherUrl =
      `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lng}` +
      "&current=temperature_2m,weather_code,wind_speed_10m" +
      "&daily=weather_code,temperature_2m_max,temperature_2m_min,sunrise,sunset" +
      "&timezone=Europe%2FLondon&forecast_days=4";

    const [weatherRes, tidesRes] = await Promise.all([
      fetch(weatherUrl),
      fetch("/api/tides"),
    ]);

    if (!weatherRes.ok) return null;

    const data = await weatherRes.json();

    const forecast: ForecastDay[] = data.daily.time
      .slice(0, 3)
      .map((date: string, i: number) => ({
        date,
        label: formatDay(date),
        tempMax: Math.round(data.daily.temperature_2m_max[i]),
        tempMin: Math.round(data.daily.temperature_2m_min[i]),
        weatherCode: data.daily.weather_code[i],
      }));

    let tides: TideEvent[] = [];
    if (tidesRes.ok) {
      const tidesData = (await tidesRes.json()) as { tides?: TideEvent[] };
      tides = tidesData.tides ?? [];
    }

    return {
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
      tides,
    };
  } catch {
    return null;
  }
};
