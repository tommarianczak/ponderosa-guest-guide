export type FoodCategory =
  | "breakfast"
  | "lunch"
  | "dinner"
  | "pubs"
  | "fish-and-chips"
  | "fine-dining"
  | "cafes"
  | "takeaways"
  | "farm-shops"
  | "delivery";

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
  websiteLabel?: string;
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
  { id: "delivery", label: "Delivery" },
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
    id: "little-mamas",
    name: "Little Mama's",
    category: "breakfast",
    description:
      "High-street café specialising in breakfast, homemade cakes, treats, and unique afternoon teas.",
    ourRecommendation:
      "Great for a leisurely brunch — the afternoon tea is a local favourite.",
    distance: "0.9 miles",
    openingHours: "Daily — check before visiting (seasonal hours)",
    image: "/images/food-breakfast.jpg",
    imageAlt: "Breakfast café on Ilfracombe High Street",
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Little+Mama's+70+High+Street+Ilfracombe+EX34+9QE",
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
    id: "sp-fish-shop",
    name: "S & P Fish Shop & Café",
    category: "lunch",
    description:
      "Harbour-front café metres from the sea — fresh locally caught seafood platters, salads, and sandwiches. Licensed, dog-friendly.",
    ourRecommendation:
      "Seafood platter with a cold glass of wine overlooking the boats — book ahead at weekends.",
    distance: "1.0 mile",
    openingHours: "Tue–Sat 10:00 am – 3:30 pm",
    image: "/images/food-lunch.jpg",
    imageAlt: "Seafood lunch at Ilfracombe harbour",
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=S+and+P+Fish+Shop+1+The+Cove+Ilfracombe+EX34+9FA",
    websiteUrl: "https://www.sandpfish.co.uk/the-cafe",
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
    id: "santiagos",
    name: "Santiago's",
    category: "dinner",
    description:
      "Cosy restaurant on St James Place — relaxed evening dining a short walk from the harbour.",
    ourRecommendation:
      "A welcoming spot for a unhurried dinner — ideal when you want somewhere intimate and local.",
    distance: "0.9 miles",
    openingHours: "Evenings — call ahead to confirm",
    image: "/images/food-dinner.jpg",
    imageAlt: "Santiago's restaurant, Ilfracombe",
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Santiago's+6+St+James+Place+Ilfracombe+EX34+9BH",
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
    id: "the-thatched-inn",
    name: "The Thatched Inn",
    category: "pubs",
    description:
      "17th-century family-run pub on Hillsborough Road — real ales, fine wines, and locally sourced seasonal food.",
    ourRecommendation:
      "Sunday lunch is the highlight — book ahead, especially in summer.",
    distance: "1.0 mile",
    openingHours: "Mon–Sat 3:00 – 10:00 pm · Sun 12:00 – 6:00 pm · Food from 5 pm (Mon–Sat) & Sun lunch",
    image: "/images/food-pub.jpg",
    imageAlt: "The Thatched Inn, Ilfracombe",
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=The+Thatched+Inn+Hillsborough+Road+Ilfracombe+EX34+9PG",
    websiteUrl: "https://www.thethatchedinn.pub/",
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
    id: "lynbay-fish-and-chips",
    name: "Lyn Bay Fish & Chips",
    category: "fish-and-chips",
    description:
      "Quay-side fish and chip shop — eat in or takeaway with harbour views. A local alternative on the waterfront.",
    ourRecommendation:
      "Handy if The Dolphin is busy — grab a box and eat on the harbour steps.",
    distance: "1.0 mile",
    openingHours: "Daily — check before visiting (seasonal hours)",
    image: "/images/food-fish.jpg",
    imageAlt: "Lyn Bay fish and chips, Ilfracombe harbour",
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Lyn+Bay+Fish+and+Chips+6+The+Quay+Ilfracombe",
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
    id: "terrace-tapas",
    name: "The Terrace Tapas & Wine Bar",
    category: "fine-dining",
    description:
      "Award-winning Spanish tapas and wine bar on Fore Street — authentic small plates in a relaxed, continental atmosphere.",
    ourRecommendation:
      "Share a few dishes between the table — patatas bravas and garlic prawns to start.",
    distance: "0.9 miles",
    openingHours: "Wed–Sat evenings (seasonal — book ahead)",
    image: "/images/food-fine.jpg",
    imageAlt: "Terrace Tapas and Wine Bar, Ilfracombe",
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Terrace+Tapas+62+Fore+Street+Ilfracombe+EX34+9ED",
    websiteUrl: "https://www.terracetapasbar.co.uk/",
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
    id: "stacc",
    name: "Stacc",
    category: "cafes",
    description:
      "Promenade café and patisserie — coffee, cakes, and a calm spot to pause overlooking the seafront.",
    ourRecommendation:
      "Perfect mid-afternoon pick-me-up after a walk along the coast path.",
    distance: "0.9 miles",
    openingHours: "Daily — check before visiting",
    image: "/images/food-cafe.jpg",
    imageAlt: "Stacc café on Ilfracombe promenade",
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Stacc+13+The+Promenade+Ilfracombe+EX34+9BD",
  },
  {
    id: "spice-lounge",
    name: "Spice Lounge",
    category: "takeaways",
    description:
      "Highly rated Indian restaurant and takeaway on Greenclose Road — dine in or order for collection.",
    ourRecommendation:
      "Chicken tikka masala with garlic naan — also available on Just Eat for delivery.",
    distance: "1.1 miles",
    openingHours: "Daily 5:00 pm – 10:30 pm",
    image: "/images/food-takeaway.jpg",
    imageAlt: "Indian takeaway in Ilfracombe",
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Spice+Lounge+36+Greenclose+Road+Ilfracombe+EX34+8BT",
    websiteUrl: "http://www.spiceloungeonline.co.uk/",
  },
  {
    id: "ilfracombe-tandoori",
    name: "Ilfracombe Tandoori",
    category: "takeaways",
    description:
      "Long-established Indian and Bangladeshi restaurant and takeaway on the High Street — licensed, dine in or collect.",
    ourRecommendation:
      "Reliable classics since 1987 — balti and biryani are popular orders.",
    distance: "0.9 miles",
    openingHours: "Daily 5:00 pm – 10:00 pm",
    image: "/images/food-takeaway.jpg",
    imageAlt: "Ilfracombe Tandoori on the High Street",
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Ilfracombe+Tandoori+13+High+Street+Ilfracombe+EX34+9DA",
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
  {
    id: "the-dinki-deli",
    name: "The Dinki Deli",
    category: "farm-shops",
    description:
      "Deli on St James Place packed with local North Devon produce — cheese, charcuterie, preserves, and picnic supplies.",
    ourRecommendation:
      "Build a harbour picnic — grab local cheese, chutney, and fresh bread for a sunset on the quay.",
    distance: "0.9 miles",
    openingHours: "Mon–Sat — check before visiting",
    image: "/images/food-farm.jpg",
    imageAlt: "The Dinki Deli, Ilfracombe",
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=The+Dinki+Deli+28+St+James+Place+Ilfracombe+EX34+9BJ",
  },
  {
    id: "just-eat",
    name: "Just Eat",
    category: "delivery",
    description:
      "Order from local Ilfracombe takeaways and restaurants for delivery straight to Ponderosa — Indian, pizza, fish and chips, and more.",
    ourRecommendation:
      "Enter postcode EX34 9JA at checkout — Spice Lounge, pizza, and other local favourites are on the app.",
    distance: "Delivers to Ponderosa",
    openingHours: "Varies by restaurant — typically from 5:00 pm",
    image: "/images/food-takeaway.jpg",
    imageAlt: "Just Eat delivery to Ilfracombe",
    mapsUrl: "https://www.just-eat.co.uk/takeaway/ilfracombe",
    websiteUrl: "https://www.just-eat.co.uk/takeaway/ilfracombe",
    websiteLabel: "Order on Just Eat",
  },
  {
    id: "slice-of-devon-delivery",
    name: "Slice of Devon",
    category: "delivery",
    description:
      "Harbour-side gourmet pizza and local seafood — order online for delivery or pick up on The Quay. Gluten-free and vegan friendly.",
    ourRecommendation:
      "Order ahead for a cosy night in — the seafood specials change with the catch.",
    distance: "Delivers locally · 1.0 mile to collect",
    openingHours: "Tue–Sat from 11:30 am · Delivery from 4:30 pm",
    image: "/images/food-takeaway.jpg",
    imageAlt: "Slice of Devon delivery, Ilfracombe harbour",
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Slice+of+Devon+3+The+Quay+Ilfracombe+EX34+9EQ",
    websiteUrl: "https://www.slicedevon.co.uk/",
    websiteLabel: "Order online",
  },
];
