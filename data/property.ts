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
  evCharger: {
    name: "Go Zero Optimus",
    location: "Private driveway at Ponderosa",
    summary:
      "A dedicated EV charger is available for guests during your stay. It is the best way to charge your car while you are here — pay only for the electricity you use.",
    rangeNote:
      "Expect roughly 20–30 miles of range per hour, depending on your electric vehicle.",
    guestUrl: "https://app.gozerocharge.com/ea4ca927_hh",
    paymentNote:
      "You are only charged at the end of the session for the exact amount of electricity used. No app download is required.",
    steps: [
      "Open the guest charging link below, or scan the QR code next to the charger.",
      "Plug your car into the charger.",
      "Choose how long you want to charge for.",
      "Pay to start the session, then wait for charging to begin.",
      "When you finish, unplug and tidy the cable. Your final bill is for the exact kWh used.",
    ],
    tips: [
      "Use the Go Zero guest link or driveway QR code — do not charge from a household socket.",
      "A short session is fine if you only need a top-up before departure.",
      "If the session will not start, try refreshing the guest page or use a different phone/browser.",
    ],
  },
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
