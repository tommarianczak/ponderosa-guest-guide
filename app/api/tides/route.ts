import { NextResponse } from "next/server";
import { fetchIlfracombeTides } from "@/lib/tides";

export const GET = async () => {
  try {
    const tides = await fetchIlfracombeTides();

    return NextResponse.json({
      location: "Ilfracombe",
      source: "ADMIRALTY EasyTide",
      tides,
    });
  } catch {
    return NextResponse.json(
      { error: "Tide data unavailable." },
      { status: 503 },
    );
  }
};
