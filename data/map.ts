export type MapPin = {
  id: string;
  label: string;
  category:
    | "property"
    | "beach"
    | "restaurant"
    | "supermarket"
    | "petrol"
    | "attraction"
    | "walk";
  lat: number;
  lng: number;
};

export const mapPins: MapPin[] = [
  {
    id: "ponderosa",
    label: "Ponderosa",
    category: "property",
    lat: 51.2089,
    lng: -4.1124,
  },
  {
    id: "tunnels-beach",
    label: "Tunnels Beach",
    category: "beach",
    lat: 51.2108,
    lng: -4.1147,
  },
  {
    id: "woolacombe",
    label: "Woolacombe Beach",
    category: "beach",
    lat: 51.1718,
    lng: -4.2056,
  },
  {
    id: "landmark",
    label: "The Landmark",
    category: "restaurant",
    lat: 51.2095,
    lng: -4.1108,
  },
  {
    id: "tesco",
    label: "Tesco Express",
    category: "supermarket",
    lat: 51.2078,
    lng: -4.1089,
  },
  {
    id: "morrisons",
    label: "Morrisons",
    category: "supermarket",
    lat: 51.2065,
    lng: -4.1056,
  },
  {
    id: "bp",
    label: "BP Petrol Station",
    category: "petrol",
    lat: 51.2056,
    lng: -4.1034,
  },
  {
    id: "aquarium",
    label: "Ilfracombe Aquarium",
    category: "attraction",
    lat: 51.2102,
    lng: -4.1134,
  },
  {
    id: "coast-path",
    label: "South West Coast Path",
    category: "walk",
    lat: 51.2112,
    lng: -4.1156,
  },
];

export const mapEmbedUrl =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2530.5!2d-4.1124!3d51.2089!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x486c4b8b8b8b8b8b%3A0x0!2sWorth+Road%2C+Ilfracombe+EX34+9JA!5e0!3m2!1sen!2suk!4v1";

export const mapCategories = [
  { id: "property", label: "Ponderosa" },
  { id: "beach", label: "Beaches" },
  { id: "restaurant", label: "Restaurants" },
  { id: "supermarket", label: "Supermarkets" },
  { id: "petrol", label: "Petrol" },
  { id: "attraction", label: "Attractions" },
  { id: "walk", label: "Walks" },
] as const;
