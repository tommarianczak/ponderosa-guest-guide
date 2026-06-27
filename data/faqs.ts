export type FaqItem = {
  id: string;
  question: string;
  answer: string;
  links?: { label: string; href: string }[];
};

export const faqs: FaqItem[] = [
  {
    id: "wifi",
    question: "How do I connect to WiFi?",
    answer:
      "Network: Ponderosa Guest · Password: Ilfracombe. The details are also on the card in the kitchen and in the Quick Information section above.",
  },
  {
    id: "parking",
    question: "Where do I park?",
    answer:
      "Use the private driveway — space for more than four cars — or on-street parking nearby. Please park considerately.",
  },
  {
    id: "bins",
    question: "Where are the bins?",
    answer:
      "General waste goes in the black bin outside, stored behind the end of the house. Black bin collection is every second Friday — check your collection dates using the link below. Put the bin out by 6:00 am on collection morning.",
    links: [
      {
        label: "North Devon Council bin collection calendar",
        href: "https://my.northdevon.gov.uk/service/WasteRecyclingCollectionCalendar",
      },
    ],
  },
  {
    id: "bbq",
    question: "How do I use the BBQ?",
    answer:
      "The charcoal BBQ is on the deck. Clean after use, dispose of cooled ash in general waste, and never leave it unattended while lit. Never use indoors.",
  },
  {
    id: "checkout",
    question: "What time is checkout?",
    answer:
      "Check-out is by 10:00 am. Please close windows, lock up, and return keys as per your arrival email.",
  },
  {
    id: "heating",
    question: "How do I adjust the heating?",
    answer:
      "Heating is underfloor and centrally controlled — there is no thermostat or adjustment in the property. The house is kept at a constant 21°C unless it is warmer outside.",
  },
  {
    id: "streaming",
    question: "Can I use Netflix or iPlayer?",
    answer:
      "Yes — sign in with your own accounts on the smart TVs. Please remember to sign out before you leave.",
  },
];
