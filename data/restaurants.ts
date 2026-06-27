export type FoodCategory =
  | "breakfast"
  | "lunch"
  | "dinner"
  | "pubs"
  | "fish-and-chips"
  | "fine-dining"
  | "cafes"
  | "takeaways"
  | "farm-shops";

export type Restaurant = {
  id: string;
  name: string;
  category: FoodCategory;
  description: string;
  ourRecommendation: string;
  distance: string;
  openingHours: string;
  image: string;
  imageAlt: string;
  mapsUrl: string;
  websiteUrl?: string;
};

export const foodCategories: { id: FoodCategory; label: string }[] = [
  { id: "breakfast", label: "Breakfast" },
  { id: "lunch", label: "Lunch" },
  { id: "dinner", label: "Dinner" },
  { id: "pubs", label: "Pubs" },
  { id: "fish-and-chips", label: "Fish & Chips" },
  { id: "fine-dining", label: "Fine Dining" },
  { id: "cafes", label: "Cafés" },
  { id: "takeaways", label: "Takeaways" },
  { id: "farm-shops", label: "Farm Shops" },
];

export const restaurants: Restaurant[] = [
  {
    id: "adeles-cafe",
    name: "Adele's Café",
    category: "breakfast",
    description:
      "Independent high-street café serving full English breakfasts, light lunches, homemade cakes, and traditional Devon cream teas. Dog-friendly.",
    ourRecommendation:
      "Start the day with a full English — opens early and is quieter before 9 am.",
    distance: "1.0 mile",
    openingHours: "Daily 7:30 am – 3:00 pm",
    image: "/images/food-breakfast.jpg",
    imageAlt: "Full English breakfast at a Devon café",
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Adele's+Café+8+Broad+Street+Ilfracombe+EX34+9EE",
  },
  {
    id: "the-pier-cafe",
    name: "The Pier Café",
    category: "lunch",
    description:
      "Harbour-side café in the Old Lifeboat House — fairtrade coffee, award-winning savouries, cream teas, and ice cream with views of Verity and the quay.",
    ourRecommendation:
      "Cream tea on the sun terrace when the weather allows — unbeatable harbour views.",
    distance: "1.0 mile",
    openingHours: "Feb–Nov, typically 10:00 am – 4:30 pm (seasonal — check before visiting)",
    image: "/images/food-lunch.jpg",
    imageAlt: "Harbour-side lunch café on Ilfracombe pier",
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=The+Pier+Café+Old+Lifeboat+House+Ilfracombe+EX34+9EQ",
    websiteUrl: "https://ilfracombeaquarium.co.uk/",
  },
  {
    id: "giovanni-and-luca",
    name: "Giovanni & Luca",
    category: "dinner",
    description:
      "Family-run authentic Italian restaurant on the seafront — pasta, seafood, and wood-fired pizza since 2010.",
    ourRecommendation:
      "Call ahead to reserve — the seafood linguine and tiramisu are standouts.",
    distance: "0.9 miles",
    openingHours: "Tue–Sun: lunch 12:00 – 2:00 pm, dinner 5:30 – 9:00 pm",
    image: "/images/food-dinner.jpg",
    imageAlt: "Italian dinner restaurant in Ilfracombe",
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Giovanni+and+Luca+Wilder+Road+Ilfracombe+EX34+9AR",
    websiteUrl: "https://www.giovanniandluca.co.uk/",
  },
  {
    id: "george-and-dragon",
    name: "George & Dragon",
    category: "pubs",
    description:
      "Ilfracombe's oldest pub (circa 1360) on Fore Street — real ales, log fire, live music, and food served all day. Dog and family friendly.",
    ourRecommendation:
      "Pull up a seat by the fire for a pint of local ale — quiz nights and live music most weeks.",
    distance: "0.9 miles",
    openingHours: "Daily 12:00 noon – 11:00 pm",
    image: "/images/food-pub.jpg",
    imageAlt: "The George and Dragon pub, Ilfracombe",
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=George+and+Dragon+Fore+Street+Ilfracombe+EX34+9ED",
    websiteUrl: "https://www.georgeanddragonilfracombe.co.uk/",
  },
  {
    id: "the-dolphin",
    name: "The Dolphin",
    category: "fish-and-chips",
    description:
      "Harbour-front fish and chip restaurant and takeaway — eat in with sea views or grab a box for the quay wall. Gluten-free options available.",
    ourRecommendation:
      "Cod and chips with mushy peas — eat on the harbour wall while it's still hot.",
    distance: "1.0 mile",
    openingHours: "Daily 11:00 am – 8:00 pm (seasonal — call to confirm)",
    image: "/images/food-fish.jpg",
    imageAlt: "Fish and chips on Ilfracombe harbour",
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=The+Dolphin+7+The+Quay+Ilfracombe+EX34+9EQ",
    websiteUrl: "https://www.dolphinilfracombe.co.uk/",
  },
  {
    id: "the-antidote",
    name: "The Antidote",
    category: "fine-dining",
    description:
      "Intimate modern British bistro on St James Place — seasonal set menus, local produce, and a curated wine list. MICHELIN Bib Gourmand.",
    ourRecommendation:
      "Book direct well ahead — the set menu changes regularly and is worth the wait.",
    distance: "0.9 miles",
    openingHours: "Wed–Sat evenings (book direct for times)",
    image: "/images/food-fine.jpg",
    imageAlt: "Fine dining at The Antidote, Ilfracombe",
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=The+Antidote+20+St+James+Place+Ilfracombe+EX34+9BJ",
    websiteUrl: "https://www.theantidoteilfracombe.com/",
  },
  {
    id: "hand-plant",
    name: "hand:plant",
    category: "cafes",
    description:
      "Cosy high-street coffee shop combined with a local art gallery — speciality coffee, homemade cakes, and plants. Vegan-friendly with oat milk as standard.",
    ourRecommendation:
      "Flat white and a slice of cake, then browse the local art and crafts on display.",
    distance: "0.9 miles",
    openingHours: "Tue–Sat 9:30 am – 3:00 pm",
    image: "/images/food-cafe.jpg",
    imageAlt: "hand:plant coffee shop, Ilfracombe High Street",
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=hand:plant+76+High+Street+Ilfracombe+EX34+9NQ",
    websiteUrl: "https://handplant.square.site/",
  },
  {
    id: "spice-lounge",
    name: "Spice Lounge",
    category: "takeaways",
    description:
      "Highly rated Indian restaurant and takeaway on Greenclose Road — dine in or order delivery to the house.",
    ourRecommendation:
      "Chicken tikka masala with garlic naan — ideal for a relaxed evening in.",
    distance: "1.1 miles",
    openingHours: "Daily 5:00 pm – 10:30 pm",
    image: "/images/food-takeaway.jpg",
    imageAlt: "Indian takeaway in Ilfracombe",
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Spice+Lounge+36+Greenclose+Road+Ilfracombe+EX34+8BT",
    websiteUrl: "http://www.spiceloungeonline.co.uk/",
  },
  {
    id: "combe-martin-farm-shop",
    name: "Combe Martin Farm Shop",
    category: "farm-shops",
    description:
      "Family-run farm shop in neighbouring Combe Martin — butcher's counter, local cheese, clotted cream, seasonal veg, Devon ales, and deli treats.",
    ourRecommendation:
      "Pick up clotted cream, scones, and local cheese for a cream tea back at Ponderosa.",
    distance: "3.5 miles",
    openingHours: "Mon–Sat 9:00 am – 5:00 pm",
    image: "/images/food-farm.jpg",
    imageAlt: "Combe Martin Farm Shop, North Devon",
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Combe+Martin+Farm+Shop+4+Borough+Road+Combe+Martin+EX34+0AN",
    websiteUrl: "https://combemartinfarmshop.co.uk/",
  },
];
