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
    id: "the-onthewaterfront",
    name: "On the Waterfront",
    category: "breakfast",
    description: "Harbour-side café with panoramic views and excellent full English.",
    ourRecommendation: "Arrive early for a window table — the harbour view at sunrise is unforgettable.",
    distance: "0.8 miles",
    openingHours: "Daily 8:00 am – 4:00 pm",
    image: "/images/food-breakfast.jpg",
    imageAlt: "Harbour breakfast café",
    mapsUrl: "https://maps.google.com/?q=On+the+Waterfront+Ilfracombe",
    websiteUrl: "https://www.example.com",
  },
  {
    id: "th-eat",
    name: "The Eat",
    category: "lunch",
    description: "Relaxed lunch spot serving fresh salads, sandwiches, and daily specials.",
    ourRecommendation: "Try the crab sandwich — locally caught and perfectly dressed.",
    distance: "0.6 miles",
    openingHours: "Tue–Sun 11:30 am – 3:00 pm",
    image: "/images/food-lunch.jpg",
    imageAlt: "Casual lunch restaurant",
    mapsUrl: "https://maps.google.com/?q=The+Eat+Ilfracombe",
  },
  {
    id: "the-landmark",
    name: "The Landmark",
    category: "dinner",
    description: "Contemporary dining with a focus on Devon produce and seasonal menus.",
    ourRecommendation: "Book ahead — the tasting menu is exceptional and changes weekly.",
    distance: "0.7 miles",
    openingHours: "Wed–Sat 6:00 pm – 9:30 pm",
    image: "/images/food-dinner.jpg",
    imageAlt: "Fine dinner restaurant",
    mapsUrl: "https://maps.google.com/?q=The+Landmark+Ilfracombe",
    websiteUrl: "https://www.example.com",
  },
  {
    id: "the-George-and-dragon",
    name: "The George & Dragon",
    category: "pubs",
    description: "Traditional pub with real ales, open fire, and a warm welcome.",
    ourRecommendation: "Sunday roast is a local institution — arrive before noon to secure a table.",
    distance: "0.5 miles",
    openingHours: "Daily 11:00 am – 11:00 pm",
    image: "/images/food-pub.jpg",
    imageAlt: "Traditional Devon pub",
    mapsUrl: "https://maps.google.com/?q=George+and+Dragon+Ilfracombe",
  },
  {
    id: "chippie- harbour",
    name: "Harbour Fish Bar",
    category: "fish-and-chips",
    description: "Classic fish and chips wrapped in paper — eat on the harbour wall.",
    ourRecommendation: "Cod and chips with mushy peas. Cash preferred.",
    distance: "0.8 miles",
    openingHours: "Daily 12:00 pm – 8:00 pm",
    image: "/images/food-fish.jpg",
    imageAlt: "Fish and chips",
    mapsUrl: "https://maps.google.com/?q=Harbour+Fish+Bar+Ilfracombe",
  },
  {
    id: "hele-restaurant",
    name: "Hele Restaurant",
    category: "fine-dining",
    description: "Award-winning fine dining in a converted chapel with tasting menus.",
    ourRecommendation: "Allow three hours — this is an occasion, not a quick meal.",
    distance: "1.2 miles",
    openingHours: "Thu–Sat 7:00 pm – 10:00 pm",
    image: "/images/food-fine.jpg",
    imageAlt: "Fine dining restaurant",
    mapsUrl: "https://maps.google.com/?q=Hele+Restaurant+Ilfracombe",
    websiteUrl: "https://www.example.com",
  },
  {
    id: "jones-coffee",
    name: "Jones Coffee House",
    category: "cafes",
    description: "Speciality coffee, homemade cakes, and a sunny terrace.",
    ourRecommendation: "The almond croissant and a flat white — perfect mid-morning pause.",
    distance: "0.6 miles",
    openingHours: "Daily 8:30 am – 5:00 pm",
    image: "/images/food-cafe.jpg",
    imageAlt: "Coffee house",
    mapsUrl: "https://maps.google.com/?q=Jones+Coffee+Ilfracombe",
  },
  {
    id: "spice-route",
    name: "Spice Route",
    category: "takeaways",
    description: "Indian takeaway with generous portions and reliable delivery.",
    ourRecommendation: "Chicken tikka masala with garlic naan — our go-to rainy evening order.",
    distance: "0.9 miles",
    openingHours: "Daily 5:00 pm – 10:30 pm",
    image: "/images/food-takeaway.jpg",
    imageAlt: "Indian takeaway",
    mapsUrl: "https://maps.google.com/?q=Spice+Route+Ilfracombe",
  },
  {
    id: "west-country-farm",
    name: "West Country Farm Shop",
    category: "farm-shops",
    description: "Local meat, cheese, vegetables, and Devon treats — perfect for self-catering.",
    ourRecommendation: "Pick up clotted cream and scones for a proper Devon cream tea at the house.",
    distance: "3.5 miles",
    openingHours: "Mon–Sat 9:00 am – 5:00 pm",
    image: "/images/food-farm.jpg",
    imageAlt: "Farm shop",
    mapsUrl: "https://maps.google.com/?q=West+Country+Farm+Shop+Devon",
    websiteUrl: "https://www.example.com",
  },
];
