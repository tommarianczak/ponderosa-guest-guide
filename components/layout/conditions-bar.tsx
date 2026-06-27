"use client";

import { Cloud, Sun, Waves } from "lucide-react";
import type { KeyboardEvent, ReactNode } from "react";
import { useConditions } from "@/components/layout/conditions-context";
import { weatherLabel } from "@/lib/weather";
import { scrollToSection } from "@/lib/utils";

const BarDivider = () => (
  <span
    className="hidden h-3 w-px shrink-0 bg-border sm:block"
    aria-hidden="true"
  />
);

const BarSection = ({
  label,
  icon,
  children,
}: {
  label: string;
  icon: ReactNode;
  children: ReactNode;
}) => (
  <span className="inline-flex shrink-0 items-center gap-1.5">
    <span className="inline-flex items-center gap-1 text-muted-foreground">
      {icon}
      <span className="text-[10px] font-medium uppercase tracking-wider sm:text-xs">
        {label}
      </span>
    </span>
    <span className="font-medium text-navy dark:text-warm-white">{children}</span>
  </span>
);

export const ConditionsBar = () => {
  const { conditions, loading } = useConditions();

  const handleClick = () => {
    scrollToSection("weather");
  };

  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      scrollToSection("weather");
    }
  };

  const tomorrow = conditions?.forecast[1];
  const nextTides = conditions?.tides.slice(0, 2) ?? [];

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      className="w-full border-t border-border/50 bg-muted/30 px-4 py-2 text-left transition-colors hover:bg-muted/50 sm:px-6"
      aria-label="View full weather and tide forecast"
    >
      <div className="mx-auto flex max-w-6xl items-center gap-3 overflow-x-auto text-xs sm:gap-5 sm:text-sm">
        {loading ? (
          <span className="text-muted-foreground">Loading conditions…</span>
        ) : conditions ? (
          <>
            <BarSection
              label="Now"
              icon={<Cloud className="h-3.5 w-3.5 text-gold" aria-hidden="true" />}
            >
              {conditions.current.temperature}° ·{" "}
              {weatherLabel(conditions.current.weatherCode)}
            </BarSection>

            {tomorrow ? (
              <>
                <BarDivider />
                <BarSection
                  label="Tomorrow"
                  icon={<Sun className="h-3.5 w-3.5 text-gold" aria-hidden="true" />}
                >
                  {tomorrow.tempMax}° · {weatherLabel(tomorrow.weatherCode)}
                  <span className="font-normal text-muted-foreground">
                    {" "}
                    · Low {tomorrow.tempMin}°
                  </span>
                </BarSection>
              </>
            ) : null}

            {nextTides.length ? (
              <>
                <BarDivider />
                <span className="inline-flex shrink-0 items-center gap-2">
                  <span className="inline-flex items-center gap-1 text-muted-foreground">
                    <Waves className="h-3.5 w-3.5 text-gold" aria-hidden="true" />
                    <span className="text-[10px] font-medium uppercase tracking-wider sm:text-xs">
                      Next tides
                    </span>
                  </span>
                  {nextTides.map((tide, index) => (
                    <span
                      key={`${tide.type}-${tide.time}`}
                      className="inline-flex shrink-0 items-center gap-1.5 font-medium text-navy dark:text-warm-white"
                    >
                      {index > 0 ? (
                        <span className="text-muted-foreground" aria-hidden="true">
                          ·
                        </span>
                      ) : null}
                      <span>
                        {tide.type} {tide.time}
                        <span className="font-normal text-muted-foreground">
                          {" "}
                          · {tide.height}
                        </span>
                      </span>
                    </span>
                  ))}
                </span>
              </>
            ) : null}

            <span className="ml-auto hidden shrink-0 text-muted-foreground lg:inline">
              Full forecast →
            </span>
          </>
        ) : (
          <span className="text-muted-foreground">
            Conditions unavailable — tap for details
          </span>
        )}
      </div>
    </button>
  );
};
