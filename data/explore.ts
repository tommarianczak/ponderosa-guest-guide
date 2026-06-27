export type ExploreHighlight = {
  label: string;
  href: string;
};

export type ExploreCard = {
  id: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  highlights?: ExploreHighlight[];
};

export const exploreCards: ExploreCard[] = [
  {
    id: "beaches",
    title: "Beaches",
    description:
      "Wild coves and sandy stretches along the North Devon coast — from Ilfracombe harbour beach to the golden sands of Woolacombe and Croyde.",
    image: "/images/explore-beaches.jpg",
    imageAlt: "North Devon beach",
    highlights: [
      { label: "Tunnels Beach", href: "https://www.tunnelsbeaches.co.uk/" },
      { label: "Woolacombe", href: "https://www.woolacombetourism.co.uk/" },
      {
        label: "Croyde Bay",
        href: "https://www.nationaltrust.org.uk/visit/devon/croyde-bay",
      },
    ],
  },
  {
    id: "walks",
    title: "Walks",
    description:
      "The South West Coast Path passes through Ilfracombe. Dramatic cliff walks, woodland trails, and gentle harbour strolls await.",
    image: "/images/explore-walks.jpg",
    imageAlt: "Coastal walking path",
    highlights: [
      {
        label: "Coast Path to Lee",
        href: "https://www.southwestcoastpath.org.uk/walksdb/105/",
      },
      {
        label: "Hillsborough Nature Reserve",
        href: "https://www.southwestcoastpath.org.uk/walksdb/104/",
      },
      {
        label: "Tarka Trail",
        href: "https://www.devon.gov.uk/roadsandtransport/cycling/walking/tarka-trail/",
      },
    ],
  },
  {
    id: "surfing",
    title: "Surfing",
    description:
      "World-class breaks at Croyde and Woolacombe. Local surf schools offer lessons for all abilities — boards and wetsuits available to hire.",
    image: "/images/explore-surfing.jpg",
    imageAlt: "Surfing at Croyde",
    highlights: [
      {
        label: "Croyde Bay",
        href: "https://www.nationaltrust.org.uk/visit/devon/croyde-bay",
      },
      { label: "Woolacombe", href: "https://www.woolacombetourism.co.uk/" },
      { label: "Surf South West", href: "https://www.surfsouthwest.co.uk/" },
    ],
  },
  {
    id: "boat-trips",
    title: "Boat trips",
    description:
      "Harbour cruises, fishing charters, and trips to Lundy Island — a granite outcrop teeming with puffins and seals.",
    image: "/images/explore-boats.jpg",
    imageAlt: "Boat trip from Ilfracombe harbour",
    highlights: [
      {
        label: "MS Oldenburg to Lundy",
        href: "https://www.landmarktrust.org.uk/lundyisland/ms-oldenburg/",
      },
      { label: "Ilfracombe Sea Safari", href: "https://ilfracombeseasafari.co.uk/" },
      {
        label: "Fishing charters",
        href: "https://www.ilfracombe-princess.co.uk/",
      },
    ],
  },
  {
    id: "family",
    title: "Family activities",
    description:
      "Aquariums, adventure parks, and rock pools — North Devon keeps little ones entertained from dawn to dusk.",
    image: "/images/explore-family.jpg",
    imageAlt: "Family activities in North Devon",
    highlights: [
      { label: "Ilfracombe Aquarium", href: "https://ilfracombeaquarium.co.uk/" },
      { label: "The Big Sheep", href: "https://www.thebigsheep.co.uk/" },
      {
        label: "Rock pooling at Lee",
        href: "https://www.nationaltrust.org.uk/visit/devon/lee-bay-and-llantic-bay",
      },
    ],
  },
  {
    id: "rainy-day",
    title: "Rainy day ideas",
    description:
      "When the Atlantic weather rolls in, retreat to museums, independent cinemas, and cosy cafés with a view.",
    image: "/images/explore-rainy.jpg",
    imageAlt: "Rainy day in Devon",
    highlights: [
      {
        label: "Museum of Barnstaple",
        href: "https://www.barnstaplemuseum.org.uk/",
      },
      {
        label: "Ilfracombe Pavilion Cinema",
        href: "https://www.ilfracombepavilion.co.uk/",
      },
      {
        label: "Paint a Pot, Braunton",
        href: "https://www.paintapot-braunton.co.uk/",
      },
    ],
  },
  {
    id: "villages",
    title: "Villages",
    description:
      "Honey-stone villages tucked into combes — Clovelly's cobbled streets, Appledore's arts scene, and Braunton's surf culture.",
    image: "/images/explore-villages.jpg",
    imageAlt: "Devon village",
    highlights: [
      { label: "Clovelly", href: "https://www.clovelly.co.uk/" },
      {
        label: "Appledore",
        href: "https://www.visitdevon.co.uk/explore/places/appledore-p658273",
      },
      {
        label: "Combe Martin",
        href: "https://www.visitdevon.co.uk/explore/places/combe-martin-p658283",
      },
    ],
  },
  {
    id: "markets",
    title: "Markets",
    description:
      "Farmers' markets and harbour-side stalls — local produce, artisan cheese, and fresh seafood straight from the boat.",
    image: "/images/explore-markets.jpg",
    imageAlt: "Local market",
    highlights: [
      {
        label: "Barnstaple Pannier Market",
        href: "https://www.barnstaplepanniermarket.co.uk/",
      },
      {
        label: "Ilfracombe harbour",
        href: "https://www.visitilfracombe.co.uk/",
      },
    ],
  },
  {
    id: "national-trust",
    title: "National Trust",
    description:
      "Arlington Court, Heddon Valley, and Brownsham — gardens, estates, and valleys preserved for generations.",
    image: "/images/explore-nt.jpg",
    imageAlt: "National Trust property",
    highlights: [
      {
        label: "Arlington Court",
        href: "https://www.nationaltrust.org.uk/visit/devon/arlington-court-and-the-national-trust-carriage-museum",
      },
      {
        label: "Heddon Valley",
        href: "https://www.nationaltrust.org.uk/visit/devon/heddons-mouth",
      },
      {
        label: "Brownsham",
        href: "https://www.nationaltrust.org.uk/visit/devon/brownsham",
      },
    ],
  },
];
