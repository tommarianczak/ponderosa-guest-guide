export type FaqItem = {
  id: string;
  question: string;
  answer: string;
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
      "Use the private driveway — space for two cars. Please do not block the access path or park on Worth Road.",
  },
  {
    id: "bins",
    question: "Where are the bins?",
    answer:
      "Recycling and general waste bins are in the utility area and side passage. Collection is on Thursday — please pull bins out on Wednesday evening if staying over.",
  },
  {
    id: "bbq",
    question: "How do I use the BBQ?",
    answer:
      "The charcoal BBQ is on the terrace. Clean after use, dispose of cooled ash in general waste, and never leave it unattended while lit. Do not use indoors.",
  },
  {
    id: "dogs-beaches",
    question: "Can I bring dogs to local beaches?",
    answer:
      "Many beaches have seasonal dog restrictions (typically May–September). Tunnels Beach and some stretches of Woolacombe allow dogs year-round — check local signage.",
  },
  {
    id: "checkout",
    question: "What time is checkout?",
    answer:
      "Check-out is by 10:00 am. Please strip used beds, start the dishwasher, take rubbish to bins, and lock up. Key return instructions are in your arrival email.",
  },
  {
    id: "heating",
    question: "How do I adjust the heating?",
    answer:
      "Use the wall thermostat in the hallway. We recommend 20°C. Individual radiator valves can be turned in each room.",
  },
  {
    id: "streaming",
    question: "Can I use Netflix or iPlayer?",
    answer:
      "Yes — sign in with your own accounts on the smart TVs. Please remember to sign out before you leave.",
  },
];
