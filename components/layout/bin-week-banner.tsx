"use client";

import { AlertTriangle } from "lucide-react";
import { useEffect, useState, type KeyboardEvent } from "react";
import { getBinPutOutAlert, type BinPutOutAlert } from "@/data/bins";
import { scrollToSection } from "@/lib/utils";

export const BinWeekBanner = () => {
  const [alert, setAlert] = useState<BinPutOutAlert | null>(null);

  useEffect(() => {
    setAlert(getBinPutOutAlert(new Date()));
  }, []);

  if (!alert) return null;

  const handleClick = () => {
    scrollToSection("house-guide");
  };

  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      scrollToSection("house-guide");
    }
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      className="w-full border-t border-amber-500/30 bg-amber-500/15 px-4 py-2.5 text-left transition-colors hover:bg-amber-500/25 sm:px-6"
      aria-label={`${alert.message} View bin guide`}
    >
      <div className="mx-auto flex max-w-6xl items-start gap-2.5 text-xs sm:items-center sm:text-sm">
        <AlertTriangle
          className="mt-0.5 h-4 w-4 shrink-0 text-amber-600 dark:text-amber-400 sm:mt-0"
          aria-hidden="true"
        />
        <p className="leading-snug text-navy dark:text-warm-white">
          <span className="font-semibold">Bin week · </span>
          {alert.message}
          <span className="ml-2 hidden font-medium text-amber-800/80 dark:text-amber-300/90 sm:inline">
            Details →
          </span>
        </p>
      </div>
    </button>
  );
};
