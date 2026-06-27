export type ExploreCard = {
  id: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  highlights?: string[];
};

export const exploreCards: ExploreCard[] = [
  {
    id: "beaches",
    title: "Beaches",
    description:
      "Wild coves and sandy stretches along the North Devon coast — from Ilfracombe harbour beach to the golden sands of Woolacombe and Croyde.",
    image: "/images/explore-beaches.jpg",
    imageAlt: "North Devon beach",
    highlights: ["Tunnels Beach", "Woolacombe", "Croyde Bay"],
  },
  {
    id: "walks",
    title: "Walks",
    description:
      "The South West Coast Path passes through Ilfracombe. Dramatic cliff walks, woodland trails, and gentle harbour strolls await.",
    image: "/images/explore-walks.jpg",
    imageAlt: "Coastal walking path",
    highlights: ["Coast Path to Lee", "Hillsborough Nature Reserve", "Tarka Trail"],
  },
  {
    id: "surfing",
    title: "Surfing",
    description:
      "World-class breaks at Croyde and Woolacombe. Local surf schools offer lessons for all abilities — boards and wetsuits available to hire.",
    image: "/images/explore-surfing.jpg",
    imageAlt: "Surfing at Croyde",
    highlights: ["Croyde Bay", "Woolacombe", "Surf South West"],
  },
  {
    id: "boat-trips",
    title: "Boat trips",
    description:
      "Harbour cruises, fishing charters, and trips to Lundy Island — a granite outcrop teeming with puffins and seals.",
    image: "/images/explore-boats.jpg",
    imageAlt: "Boat trip from Ilfracombe harbour",
    highlights: ["MS Oldenburg to Lundy", "Ilfracombe Sea Safari", "Fishing charters"],
  },
  {
    id: "family",
    title: "Family activities",
    description:
      "Aquariums, adventure parks, and rock pools — North Devon keeps little ones entertained from dawn to dusk.",
    image: "/images/explore-family.jpg",
    imageAlt: "Family activities in North Devon",
    highlights: ["Ilfracombe Aquarium", "The Big Sheep", "Rock pooling at Lee"],
  },
  {
    id: "rainy-day",
    title: "Rainy day ideas",
    description:
      "When the Atlantic weather rolls in, retreat to museums, independent cinemas, and cosy cafés with a view.",
    image: "/images/explore-rainy.jpg",
    imageAlt: "Rainy day in Devon",
    highlights: ["Museum of Barnstaple", "Local cinema", "Pottery painting"],
  },
  {
    id: "villages",
    title: "Villages",
    description:
      "Honey-stone villages tucked into combes — Clovelly's cobbled streets, Appledore's arts scene, and Braunton's surf culture.",
    image: "/images/explore-villages.jpg",
    imageAlt: "Devon village",
    highlights: ["Clovelly", "Appledore", "Combe Martin"],
  },
  {
    id: "markets",
    title: "Markets",
    description:
      "Farmers' markets and harbour-side stalls — local produce, artisan cheese, and fresh seafood straight from the boat.",
    image: "/images/explore-markets.jpg",
    imageAlt: "Local market",
    highlights: ["Barnstaple Pannier Market", "Ilfracombe harbour stalls"],
  },
  {
    id: "national-trust",
    title: "National Trust",
    description:
      "Arlington Court, Heddon Valley, and Brownsham — gardens, estates, and valleys preserved for generations.",
    image: "/images/explore-nt.jpg",
    imageAlt: "National Trust property",
    highlights: ["Arlington Court", "Heddon Valley", "Brownsham"],
  },
];
