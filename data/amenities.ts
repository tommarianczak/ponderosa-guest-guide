export type AmenityCategory =

  | "supermarkets"

  | "petrol"

  | "late-night"

  | "convenience"

  | "laundry";



export type Amenity = {

  id: string;

  name: string;

  categories: AmenityCategory[];

  description: string;

  tip: string;

  address: string;

  distance: string;

  openingHours: string;

  phone?: string;

  mapsUrl: string;

  websiteUrl?: string;

};



export const amenityCategories: { id: AmenityCategory | "all"; label: string }[] =

  [

    { id: "all", label: "All" },

    { id: "supermarkets", label: "Supermarkets" },

    { id: "petrol", label: "Petrol" },

    { id: "late-night", label: "24-Hour & Late Night" },

    { id: "convenience", label: "Convenience" },

    { id: "laundry", label: "Laundry" },

  ];



export const amenities: Amenity[] = [

  {

    id: "tesco-superstore",

    name: "Tesco Superstore",

    categories: ["supermarkets"],

    description:

      "Main supermarket for the area — full grocery shop, bakery, clothing, and household essentials.",

    tip: "Your closest big shop — less than a minute up the hill. Clubcard accepted. Quieter hours Wed & Sat 9–10 am.",

    address: "Two Potts, Old Barnstaple Road, EX34 8PQ",

    distance: "Less than 1 min drive (up the hill)",

    openingHours:

      "Mon 8:00 am – 6:00 pm · Tue–Sat 7:00 am – 11:00 pm · Sun 10:00 am – 4:00 pm",

    phone: "0345 026 9517",

    mapsUrl:

      "https://www.google.com/maps/search/?api=1&query=Tesco+Superstore+Two+Potts+Ilfracombe+EX34+8PQ",

    websiteUrl: "https://www.tesco.com/store-locator/ilfracombe/tesco",

  },

  {

    id: "lidl",

    name: "Lidl",

    categories: ["supermarkets"],

    description:

      "Discount supermarket on Wilder Road in town — good value groceries, bakery, and household essentials.",

    tip: "Worth the trip when you're already heading into Ilfracombe — Tesco is much closer to the house.",

    address: "Wilder Road, EX34 8BS",

    distance: "Approximately 1 mile (~5 min drive into town)",

    openingHours:

      "Mon–Sat 7:00 am – 10:00 pm · Sun 10:00 am – 4:00 pm",

    mapsUrl:

      "https://www.google.com/maps/search/?api=1&query=Lidl+Wilder+Road+Ilfracombe+EX34+8BS",

    websiteUrl: "https://www.lidl.co.uk/",

  },

  {

    id: "morrisons-daily",

    name: "Morrisons Daily",

    categories: ["convenience", "late-night"],

    description:

      "Town-centre convenience store on the High Street — groceries, Costa Coffee, Post Office, PayPoint, and National Lottery.",

    tip: "Open until 11 pm every day — ideal for milk, bread, and essentials after the big shops close.",

    address: "26 High Street, EX34 9DA",

    distance: "0.9 miles",

    openingHours: "Daily 7:00 am – 11:00 pm",

    phone: "01271 863755",

    mapsUrl:

      "https://www.google.com/maps/search/?api=1&query=Morrisons+Daily+26+High+Street+Ilfracombe+EX34+9DA",

    websiteUrl:

      "https://my.morrisons.com/storefinder/65974/morrisons-daily-ilfracombe-26-high-street/",

  },

  {

    id: "nisa-local",

    name: "Nisa Local",

    categories: ["convenience"],

    description:

      "Neighbourhood convenience store at Twitchen Park — branded and Co-op own-label groceries, fresh produce, and household basics.",

    tip: "Useful if you're heading towards Woolacombe or Morthoe — open Sundays until 8 pm.",

    address: "Twitchen Park, Old Station Road, Morthoe, EX34 7ES",

    distance: "2.0 miles",

    openingHours: "Daily 8:00 am – 8:00 pm",

    phone: "01271 871780",

    mapsUrl:

      "https://www.google.com/maps/search/?api=1&query=Nisa+Local+Twitchen+Park+Ilfracombe+EX34+7ES",

    websiteUrl:

      "https://www.nisalocally.co.uk/stores/devon/ilfracombe/twitchen-park",

  },

  {

    id: "on-a-hill-garage",

    name: "On-A-Hill Garage (Texaco)",

    categories: ["petrol"],

    description:

      "Self-serve Texaco pumps at Lynton Cross — card payment only. No shop, no attendant; just fuel 24 hours a day.",

    tip: "Useful for late-night or early-morning top-ups — bring a debit or credit card; there is nowhere to buy snacks or milk here.",

    address: "Lynton Cross, EX34 9RQ",

    distance: "1.0 mile",

    openingHours: "24-hour self-serve pumps (card only)",

    mapsUrl:

      "https://www.google.com/maps/search/?api=1&query=On-A-Hill+Garage+Texaco+Lynton+Cross+Ilfracombe+EX34+9RQ",

  },

  {

    id: "ilfracombe-service-station",

    name: "Ilfracombe Service Station",

    categories: ["petrol", "convenience"],

    description:
      "Murco forecourt on the High Street — the only petrol station in the heart of Ilfracombe, with a convenience shop for groceries, snacks, and essentials.",

    tip: "Handy when you're in town — competitively priced fuel and a good selection in-store. Closes at 9 pm.",

    address: "91–95 High Street, EX34 9NH",

    distance: "0.9 miles",

    openingHours: "Daily 6:30 am – 9:00 pm",

    phone: "01271 649994",

    mapsUrl:

      "https://www.google.com/maps/search/?api=1&query=Ilfracombe+Service+Station+91+High+Street+EX34+9NH",

    websiteUrl: "https://www.murco.co.uk/stations/ilfracombe-service-station/",

  },

  {

    id: "ilfracombe-launderette",

    name: "The Ilfracombe Launderette",

    categories: ["laundry"],

    description:

      "Self-service launderette on Wilder Road — washing and drying machines for guest use.",

    tip: "Bring coins or check payment options before you go — useful if you're staying longer than a week.",

    address: "15 Wilder Road, EX34 8BL",

    distance: "0.8 miles",

    openingHours: "Self-service — call ahead to confirm access",

    phone: "01271 867719",

    mapsUrl:

      "https://www.google.com/maps/search/?api=1&query=Ilfracombe+Launderette+15+Wilder+Road+EX34+8BL",

  },

];


