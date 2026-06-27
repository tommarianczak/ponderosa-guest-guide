# Ponderosa — Guest Guide

Premium, mobile-first guest information site for **Ponderosa**, Ilfracombe. Designed for QR code access during stays — single page, smooth scrolling, boutique hotel feel.

```bash
cd guest-info-app
npm install
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

## QR code

Point your QR code to the deployed URL (e.g. `https://guide.ponderosa.dev`). Guests land on the single-page guide with no login.
