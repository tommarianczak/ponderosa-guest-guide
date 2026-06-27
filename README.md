# Ponderosa — Guest Guide

Premium, mobile-first guest information site for **Ponderosa**, Ilfracombe. Designed for QR code access during stays — single page, smooth scrolling, boutique hotel feel.

```bash
cd guest-info-app
npm install
cp .env.example .env.local   # set GUEST_ACCESS_TOKEN for local testing
npm run dev
```

Open http://localhost:3001

## Stack

- Next.js 15 (App Router)
- TypeScript
- Tailwind CSS + shadcn-style UI (Radix)
- Lucide Icons
- Framer Motion
- next-themes (light / dark)

## Guest access & privacy

The guide is **not public**. Access is gated and search engines are blocked.

### How it works

1. Set `GUEST_ACCESS_TOKEN` in Vercel (Environment Variables) — use a long random string (`openssl rand -hex 24`).
2. **QR code URL** (no typing for guests):
   ```
   https://your-domain.vercel.app/g/YOUR_TOKEN
   ```
   Scanning sets a secure cookie (90 days) and opens the guide.
3. **Manual fallback** — guests can visit the site and enter the same code on the access screen (from welcome pack / booking email).

### Search engine blocking

- `robots.txt` disallows all crawlers
- `noindex, nofollow` metadata on every page
- `X-Robots-Tag` HTTP header on all responses

This is **not** military-grade security — it keeps casual visitors and Google out. Treat the token like a door code: rotate if shared widely, don’t post the URL publicly.

### Vercel setup

1. Project → **Settings** → **Environment Variables**
2. Add `GUEST_ACCESS_TOKEN` = your secret (Production, Preview, Development)
3. Redeploy

Optional extra layer: [Vercel Deployment Protection](https://vercel.com/docs/security/deployment-protection) (Pro plan) — password on the whole deployment.

## Editing content

All guest-facing copy lives in **`data/`** — no React changes needed for most updates:

| File | Contents |
|------|----------|
| `data/property.ts` | WiFi, check-in/out, parking, hero copy, links |
| `data/about.ts` | About Ponderosa story blocks |
| `data/house-guide.ts` | Kitchen, heating, BBQ, rules, departure |
| `data/explore.ts` | North Devon activity cards |
| `data/restaurants.ts` | Food & drink by category |
| `data/faqs.ts` | FAQ accordion |
| `data/emergency.ts` | Emergency contacts |
| `data/map.ts` | Map pins and embed URL |
| `data/departure.ts` | Checkout checklist |
| `data/navigation.ts` | Sticky nav section labels |

Replace placeholder images by adding files under `public/images/` and updating paths in data files.

## QR code

Generate a QR code pointing to:

```
https://YOUR-VERCEL-URL/g/YOUR_GUEST_ACCESS_TOKEN
```

Place in the property (welcome folder, kitchen counter, etc.). Do **not** use the bare homepage URL in the QR — guests need the `/g/…` link once, or the access code.

## Sections

1. Hero — coastal photo, welcome, quick action buttons
2. Quick information — WiFi, times, parking, emergency
3. About Ponderosa
4. House guide — expandable accordion groups
5. Explore North Devon
6. Food & drink — tabbed recommendations
7. Interactive map — Google embed + pin list
8. FAQ
9. Weather — live Open-Meteo forecast + tide placeholders
10. Emergency information
11. Before you leave — checklist, review, direct booking
