import { NextResponse } from "next/server";
import {
  ACCESS_COOKIE_MAX_AGE,
  ACCESS_COOKIE_NAME,
  getGuestAccessToken,
  timingSafeEqual,
} from "@/lib/access";

export const POST = async (request: Request) => {
  const token = getGuestAccessToken();

  if (!token) {
    return NextResponse.json(
      { error: "Access is not configured." },
      { status: 503 },
    );
  }

  let code = "";
  try {
    const body = (await request.json()) as { code?: string };
    code = body.code?.trim() ?? "";
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  if (!code || !timingSafeEqual(code, token)) {
    return NextResponse.json({ error: "Incorrect access code." }, { status: 401 });
  }

  const response = NextResponse.json({ ok: true });
  response.cookies.set(ACCESS_COOKIE_NAME, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    maxAge: ACCESS_COOKIE_MAX_AGE,
    path: "/",
  });

  return response;
};
