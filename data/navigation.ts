export type NavItem = {
  id: string;
  label: string;
};

export type NavGroup = {
  id: string;
  label: string;
  items: NavItem[];
};

export const navGroups: NavGroup[] = [
  {
    id: "stay",
    label: "Your stay",
    items: [
      { id: "quick-info", label: "Essentials" },
      { id: "ev-charging", label: "EV Charging" },
      { id: "about", label: "About" },
      { id: "house-guide", label: "House Guide" },
    ],
  },
  {
    id: "local",
    label: "Local area",
    items: [
      { id: "explore", label: "Explore" },
      { id: "beaches", label: "Beaches" },
      { id: "food-drink", label: "Food & Drink" },
      { id: "amenities", label: "Amenities" },
    ],
  },
  {
    id: "practical",
    label: "Practical",
    items: [
      { id: "faq", label: "FAQ" },
      { id: "weather", label: "Weather" },
      { id: "emergency", label: "Emergency" },
      { id: "before-you-leave", label: "Departure" },
    ],
  },
];

export const navItems: NavItem[] = navGroups.flatMap((group) => group.items);
