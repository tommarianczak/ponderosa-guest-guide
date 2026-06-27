import { NextResponse, type NextRequest } from "next/server";
import {
  ACCESS_COOKIE_MAX_AGE,
  ACCESS_COOKIE_NAME,
  getGuestAccessToken,
  isAccessGranted,
  timingSafeEqual,
} from "@/lib/access";

const isPublicPath = (pathname: string): boolean =>
  pathname === "/access" ||
  pathname === "/api/access" ||
  pathname.startsWith("/g/");

export const middleware = (request: NextRequest) => {
  const token = getGuestAccessToken();

  if (!token) {
    if (process.env.NODE_ENV === "production") {
      return new NextResponse("Guest access is not configured.", { status: 503 });
    }
    return NextResponse.next();
  }

  const { pathname } = request.nextUrl;

  if (pathname.startsWith("/g/")) {
    const pathToken = decodeURIComponent(pathname.slice("/g/".length));
    if (pathToken && timingSafeEqual(pathToken, token)) {
      const response = NextResponse.redirect(new URL("/", request.url));
      response.cookies.set(ACCESS_COOKIE_NAME, token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax",
        maxAge: ACCESS_COOKIE_MAX_AGE,
        path: "/",
      });
      return response;
    }
    return NextResponse.redirect(new URL("/access?error=invalid", request.url));
  }

  if (isPublicPath(pathname)) {
    return NextResponse.next();
  }

  const accessCookie = request.cookies.get(ACCESS_COOKIE_NAME)?.value;
  if (isAccessGranted(accessCookie)) {
    return NextResponse.next();
  }

  const accessUrl = new URL("/access", request.url);
  if (pathname !== "/") {
    accessUrl.searchParams.set("from", pathname);
  }
  return NextResponse.redirect(accessUrl);
};

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
};
