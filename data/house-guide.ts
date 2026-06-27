import type { LucideIcon } from "lucide-react";
import {
  Armchair,
  Coffee,
  Flame,
  Microwave,
  Monitor,
  Recycle,
  Refrigerator,
  ShowerHead,
  Sofa,
  Thermometer,
  Trash2,
  Tv,
  UtensilsCrossed,
  WashingMachine,
  Waves,
} from "lucide-react";

export type HouseGuideItem = {
  id: string;
  title: string;
  icon: LucideIcon;
  content: string;
  tips?: string[];
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
          "Nespresso machine on the counter. Pods are provided for your arrival — additional pods are in the cupboard above.",
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
        content: "Combination microwave above the oven. Quick-start guide is on the inside of the door.",
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
          "Fridge is set to 4°C on arrival. Freezer compartment is in the top section. Please leave doors closed when not in use.",
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
          "Central heating is controlled via the wall thermostat in the hallway. Recommended setting: 20°C. Radiator valves can be adjusted in individual rooms.",
        tips: ["Please do not cover radiators with towels or clothing"],
      },
      {
        id: "hot-water",
        title: "Hot water",
        icon: ShowerHead,
        content:
          "Hot water is on a timer linked to the boiler. If supply runs low, wait 30 minutes for the tank to reheat. Emergency boost instructions are on the boiler panel.",
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
          "Smart TVs in the living room and main bedroom. Use the remote to power on — allow a moment for the system to connect to WiFi.",
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
          "Teak dining set and lounge chairs on the terrace. Cushions are stored in the outdoor box — please return them if rain is forecast.",
      },
      {
        id: "bbq",
        title: "BBQ",
        icon: Flame,
        content:
          "Charcoal BBQ on the terrace. Please clean after use and dispose of cooled ash in the general waste bin. Do not leave unattended while lit.",
        tips: ["Never use the BBQ indoors or on the decking edge"],
      },
    ],
  },
  {
    id: "practical",
    title: "Waste, rules & departure",
    items: [
      {
        id: "waste",
        title: "Waste & recycling",
        icon: Recycle,
        content:
          "Recycling bins are in the utility area — please sort glass, plastic/tins, and paper. General waste goes in the black bin. Collection day: Thursday.",
        tips: ["Bins are stored in the side passage — pull out on Wednesday evening"],
      },
      {
        id: "house-rules",
        title: "House rules",
        icon: Sofa,
        content:
          "No smoking inside. Quiet hours after 10 pm. Maximum occupancy as per booking. Please treat the property with care — it is a home, not just a rental.",
      },
      {
        id: "departure",
        title: "Departure checklist",
        icon: Trash2,
        content:
          "Check-out by 10:00 am. Strip used beds, start the dishwasher, take rubbish to bins, close windows, and lock all doors. Leave keys as instructed in your arrival email.",
        tips: [
          "Turn off all lights and heating",
          "Sign out of streaming accounts",
          "Report any breakages to guest support",
        ],
      },
    ],
  },
];