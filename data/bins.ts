/** Seeded fortnightly Friday collections, then every 14 days onwards. */
export const BIN_COLLECTION_SEED_DATES = [
  "2026-08-14",
  "2026-08-28",
  "2026-09-11",
  "2026-09-25",
  "2026-10-09",
  "2026-10-23",
] as const;

export const BIN_PUT_OUT_NOTE =
  "Please put the black bin out on Thursday night before collection, on the edge of the driveway.";

const parseIsoDate = (iso: string): Date => {
  const [year, month, day] = iso.split("-").map(Number);
  return new Date(year, month - 1, day);
};

const startOfLocalDay = (date: Date): Date =>
  new Date(date.getFullYear(), date.getMonth(), date.getDate());

const addDays = (date: Date, days: number): Date =>
  new Date(date.getFullYear(), date.getMonth(), date.getDate() + days);

/** Monday 00:00 of the calendar week containing `date` (UK-style week). */
const startOfWeekMonday = (date: Date): Date => {
  const day = date.getDay(); // 0 Sun … 6 Sat
  const offset = day === 0 ? -6 : 1 - day;
  return addDays(startOfLocalDay(date), offset);
};

export const formatBinCollectionDate = (date: Date): string =>
  date.toLocaleDateString("en-GB", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

export const getUpcomingBinCollections = (
  from: Date = new Date(),
  count = 8,
): Date[] => {
  const today = startOfLocalDay(from);
  const dates = BIN_COLLECTION_SEED_DATES.map(parseIsoDate);

  let cursor = dates[dates.length - 1];
  const generateUntil = addDays(today, 14 * (count + 2));

  while (cursor.getTime() < generateUntil.getTime()) {
    cursor = addDays(cursor, 14);
    dates.push(cursor);
  }

  return dates
    .filter((date) => startOfLocalDay(date).getTime() >= today.getTime())
    .slice(0, count);
};

export type BinPutOutAlert = {
  collectionDate: Date;
  message: string;
};

/** Alert when collection falls later this week (Mon–Sun), including today. */
export const getBinPutOutAlert = (
  from: Date = new Date(),
): BinPutOutAlert | null => {
  const today = startOfLocalDay(from);
  const weekStart = startOfWeekMonday(today);
  const weekEnd = addDays(weekStart, 6);
  const upcoming = getUpcomingBinCollections(today, 4);
  const collectionThisWeek = upcoming.find((date) => {
    const day = startOfLocalDay(date);
    return day.getTime() >= weekStart.getTime() && day.getTime() <= weekEnd.getTime();
  });

  if (!collectionThisWeek) return null;

  const label = formatBinCollectionDate(collectionThisWeek);
  const isToday = startOfLocalDay(collectionThisWeek).getTime() === today.getTime();

  return {
    collectionDate: collectionThisWeek,
    message: isToday
      ? `Bin collection today (${label}). Please put the black bin out on the edge of the driveway.`
      : `Bin collection this week on ${label}. Please put the black bin out on Thursday night on the edge of the driveway.`,
  };
};
