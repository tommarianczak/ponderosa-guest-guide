export const property = {
  name: "Ponderosa",
  tagline: "Welcome to your North Devon escape.",
  welcome:
    "Perched above Ilfracombe with sweeping coastal views, Ponderosa is a thoughtfully restored retreat where Scandinavian calm meets Devon character. Settle in, breathe the sea air, and let the pace of the coast restore you.",
  address: {
    line1: "Worth Road",
    town: "Ilfracombe",
    county: "Devon",
    postcode: "EX34 9JA",
  },
  coordinates: {
    lat: 51.2089,
    lng: -4.1124,
  },
  checkIn: "From 4:00 pm",
  checkOut: "By 10:00 am",
  parking:
    "Private driveway with space for more than four cars, plus on-street parking nearby. Please park considerately.",
  wifi: {
    ssid: "Ponderosa Guest",
    password: "Ilfracombe",
  },
  emergencyContact: {
    name: "Holiday Cottages Guest Support",
    phone: "01237 426727",
  },
  heroImage: "/images/hero-coast.jpg",
  heroImageAlt: "North Devon coastline at golden hour",
} as const;

export type Property = typeof property;
