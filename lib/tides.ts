export const ILFRACOMBE_TIDE_STATION_ID = "0535";

export type TideEvent = {
  time: string;
  height: string;
  type: "High" | "Low";
  iso: string;
};

type EasyTideEvent = {
  eventType: number;
  dateTime: string;
  height: number;
};

type EasyTideResponse = {
  tidalEventList?: EasyTideEvent[];
};

const getUkLocalIsoNow = (): string =>
  new Intl.DateTimeFormat("sv-SE", {
    timeZone: "Europe/London",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  })
    .format(new Date())
    .replace(" ", "T");

const formatTideTime = (dateTime: string): string => dateTime.slice(11, 16);

export const parseEasyTideEvents = (
  data: EasyTideResponse,
  limit = 4,
): TideEvent[] => {
  if (!data.tidalEventList?.length) return [];

  const ukNow = getUkLocalIsoNow();

  return data.tidalEventList
    .filter((event) => event.dateTime >= ukNow)
    .slice(0, limit)
    .map((event) => ({
      iso: event.dateTime,
      type: event.eventType === 0 ? ("High" as const) : ("Low" as const),
      time: formatTideTime(event.dateTime),
      height: `${event.height.toFixed(1)}m`,
    }));
};

export const fetchIlfracombeTides = async (): Promise<TideEvent[]> => {
  const url = `https://easytide.admiralty.co.uk/Home/GetPredictionData?stationId=${ILFRACOMBE_TIDE_STATION_ID}`;

  const response = await fetch(url, {
    next: { revalidate: 3600 },
    signal: AbortSignal.timeout(15000),
  });

  if (!response.ok) {
    throw new Error(`EasyTide request failed (${response.status})`);
  }

  const data = (await response.json()) as EasyTideResponse;
  return parseEasyTideEvents(data);
};
