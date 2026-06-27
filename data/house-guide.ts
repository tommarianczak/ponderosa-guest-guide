import type { LucideIcon } from "lucide-react";
import {
  Armchair,
  Coffee,
  Flame,
  Microwave,
  Monitor,
  Refrigerator,
  ShowerHead,
  Sofa,
  Thermometer,
  Trash2,
  Tv,
  UtensilsCrossed,
  WashingMachine,
  Waves,
  Wind,
} from "lucide-react";

export type HouseGuideItem = {
  id: string;
  title: string;
  icon: LucideIcon;
  content: string;
  tips?: string[];
  links?: { label: string; href: string }[];
};

export type HouseGuideGroup = {
  id: string;
  title: string;
  items: HouseGuideItem[];
};

export const houseGuideGroups: HouseGuideGroup[] = [
  {
    id: "kitchen",
    title: "Kitchen",
    items: [
      {
        id: "coffee",
        title: "Coffee machine",
        icon: Coffee,
        content:
          "Tassimo machine on the counter. Coffee pods are supplied at check-in — you can buy more locally at Tesco or other shops in Ilfracombe and Barnstaple.",
        tips: ["Fill the water tank before first use", "Empty the pod drawer when full"],
      },
      {
        id: "oven",
        title: "Oven",
        icon: Flame,
        content:
          "Electric fan oven with grill. Preheat for 10 minutes. Controls are on the front panel — turn the dial to select function and temperature.",
      },
      {
        id: "hob",
        title: "Hob",
        icon: UtensilsCrossed,
        content:
          "Induction hob — use only induction-compatible pans (provided). Wipe clean once cool. Child lock: hold the key symbol for 3 seconds.",
      },
      {
        id: "microwave",
        title: "Microwave",
        icon: Microwave,
        content: "Combination microwave above the oven.",
      },
      {
        id: "dishwasher",
        title: "Dishwasher",
        icon: Waves,
        content:
          "Tablets under the sink. Load with dirty items facing the spray arms. Select Eco 50°C for a standard cycle.",
      },
      {
        id: "fridge",
        title: "Fridge & freezer",
        icon: Refrigerator,
        content:
          "60/40 fridge-freezer split. Fridge is set to 4°C on arrival. Please leave doors closed when not in use.",
      },
    ],
  },
  {
    id: "laundry",
    title: "Laundry",
    items: [
      {
        id: "washing-machine",
        title: "Washing machine",
        icon: WashingMachine,
        content:
          "Located in the utility cupboard. Detergent pods are provided. Select Cotton 40°C for most loads. Leave the door ajar after use to prevent odours.",
      },
      {
        id: "dryer",
        title: "Dryer",
        icon: Wind,
        content:
          "Tumble dryer in the utility cupboard, next to the washing machine. Check the lint filter before each use and empty after drying.",
      },
    ],
  },
  {
    id: "comfort",
    title: "Heating & hot water",
    items: [
      {
        id: "heating",
        title: "Heating",
        icon: Thermometer,
        content:
          "Underfloor heating, centrally controlled — no adjustment necessary or possible. The system keeps the house at a constant 21°C unless it is warmer outside.",
      },
      {
        id: "hot-water",
        title: "Hot water",
        icon: ShowerHead,
        content:
          "Hot water is centrally controlled and will continually supply hot water. No boost is available or required. If hot water runs out, wait 15 minutes and the supply will replenish.",
      },
    ],
  },
  {
    id: "entertainment",
    title: "Televisions & streaming",
    items: [
      {
        id: "televisions",
        title: "Televisions",
        icon: Tv,
        content:
          "Smart TVs in all bedrooms and the living room. Use the remote to power on — allow a moment for the system to connect to WiFi.",
      },
      {
        id: "streaming",
        title: "Streaming services",
        icon: Monitor,
        content:
          "Please sign in to your own Netflix, iPlayer, or Disney+ accounts. Remember to sign out before departure.",
      },
    ],
  },
  {
    id: "outdoor",
    title: "Outdoor",
    items: [
      {
        id: "outdoor-furniture",
        title: "Outdoor furniture",
        icon: Armchair,
        content:
          "Teak dining set and deck chairs on the deck. Cushions are stored in the outdoor box — please return them if rain is forecast.",
      },
      {
        id: "bbq",
        title: "BBQ",
        icon: Flame,
        content:
          "Charcoal BBQ on the deck. Please clean after use and dispose of cooled ash in the general waste bin. Do not leave unattended while lit.",
        tips: ["Never use the BBQ indoors"],
      },
    ],
  },
  {
    id: "practical",
    title: "Waste, rules & departure",
    items: [
      {
        id: "waste",
        title: "Waste",
        icon: Trash2,
        content:
          "General waste goes in the black bin outside, stored behind the end of the house. Black bin collection is every second Friday — please check your dates before putting the bin out.",
        tips: ["Put the black bin out by 6:00 am on collection morning"],
        links: [
          {
            label: "North Devon Council bin collection calendar",
            href: "https://my.northdevon.gov.uk/service/WasteRecyclingCollectionCalendar",
          },
        ],
      },
      {
        id: "house-rules",
        title: "House rules",
        icon: Sofa,
        content:
          "No smoking anywhere on the property. No pets. Quiet hours after 10 pm. Maximum occupancy as per booking. Please treat the property with care — it is a home, not just a rental.",
      },
      {
        id: "departure",
        title: "Departure checklist",
        icon: Trash2,
        content:
          "Check-out by 10:00 am. Close windows and lock all doors. Leave keys as instructed in your arrival email.",
        tips: [
          "Turn off all unnecessary lights",
          "Sign out of streaming accounts",
          "Report any breakages to guest support",
        ],
      },
    ],
  },
];