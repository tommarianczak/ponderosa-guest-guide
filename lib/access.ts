/** Cookie set after successful QR scan or access code entry. */
export const ACCESS_COOKIE_NAME = "ponderosa_access";

/** How long guest access lasts (90 days — covers stay + return visits). */
export const ACCESS_COOKIE_MAX_AGE = 60 * 60 * 24 * 90;

export const ACCESS_PUBLIC_PATHS = ["/access", "/api/access"] as const;

export const timingSafeEqual = (a: string, b: string): boolean => {
  if (a.length !== b.length) return false;
  let result = 0;
  for (let i = 0; i < a.length; i += 1) {
    result |= a.charCodeAt(i) ^ b.charCodeAt(i);
  }
  return result === 0;
};

export const isAccessGranted = (cookieValue: string | undefined): boolean => {
  const secret = process.env.GUEST_ACCESS_TOKEN;
  if (!secret || !cookieValue) return false;
  return timingSafeEqual(cookieValue, secret);
};

export const getGuestAccessToken = (): string | undefined =>
  process.env.GUEST_ACCESS_TOKEN;
