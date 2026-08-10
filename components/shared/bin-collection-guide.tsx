"use client";

import { AlertTriangle } from "lucide-react";
import { useEffect, useState } from "react";
import {
  BIN_PUT_OUT_NOTE,
  formatBinCollectionDate,
  getBinPutOutAlert,
  getUpcomingBinCollections,
  type BinPutOutAlert,
} from "@/data/bins";

type BinCollectionGuideProps = {
  className?: string;
};

export const BinCollectionGuide = ({ className }: BinCollectionGuideProps) => {
  const [upcoming, setUpcoming] = useState<Date[]>([]);
  const [alert, setAlert] = useState<BinPutOutAlert | null>(null);

  useEffect(() => {
    const now = new Date();
    setUpcoming(getUpcomingBinCollections(now, 8));
    setAlert(getBinPutOutAlert(now));
  }, []);

  return (
    <div className={className}>
      {alert ? (
        <div
          role="alert"
          className="mb-4 flex gap-3 rounded-lg border border-amber-500/40 bg-amber-500/10 px-3 py-3 text-sm text-navy dark:text-warm-white"
        >
          <AlertTriangle
            className="mt-0.5 h-4 w-4 shrink-0 text-amber-600 dark:text-amber-400"
            aria-hidden="true"
          />
          <p className="leading-relaxed">{alert.message}</p>
        </div>
      ) : null}

      <p className="leading-relaxed">
        General waste goes in the black bin outside, stored behind the end of
        the house. Collection is every other Friday.
      </p>

      <p className="mt-3 text-sm font-medium text-navy dark:text-warm-white">
        Upcoming collection dates
      </p>

      {upcoming.length > 0 ? (
        <ul className="mt-2 space-y-1.5 border-l border-border/80 pl-4 text-sm leading-relaxed text-muted-foreground">
          {upcoming.map((date) => (
            <li key={date.toISOString()}>{formatBinCollectionDate(date)}</li>
          ))}
        </ul>
      ) : (
        <p className="mt-2 text-sm text-muted-foreground">
          No upcoming dates currently listed.
        </p>
      )}

      <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-relaxed">
        <li>{BIN_PUT_OUT_NOTE}</li>
      </ul>
    </div>
  );
};
