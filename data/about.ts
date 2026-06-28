export type AboutBlock = {
  id: string;
  title: string;
  description: string;
  image?: string;
  imageAlt: string;
};

export const aboutBlocks: AboutBlock[] = [
  {
    id: "sea-views",
    title: "The sea views",
    description:
      "Floor-to-ceiling windows frame the Bristol Channel — watch fishing boats trace the harbour, sunsets paint the horizon gold, and gulls wheel over the water from your morning coffee.",
    imageAlt: "Sea views from Ponderosa",
  },
  {
    id: "architecture",
    title: "The architecture",
    description:
      "Clean lines, natural materials, and a palette drawn from the coast. Every room has been considered — light oak, soft linens, and spaces that feel both refined and welcoming.",
    imageAlt: "Interior architecture at Ponderosa",
  },
  {
    id: "location",
    title: "The peaceful location",
    description:
      "Set on Worth Road above the harbour, Ponderosa offers tranquillity without isolation. Ilfracombe's restaurants, harbour walks, and beaches are minutes away — yet the house feels a world apart.",
    imageAlt: "Peaceful location near Ilfracombe",
  },
  {
    id: "families",
    title: "Designed for families & groups",
    description:
      "Generous living spaces, a well-equipped kitchen, and room for everyone to spread out. Whether you're gathering for a celebration or a quiet family break, Ponderosa adapts to the way you stay.",
    imageAlt: "Family-friendly living space",
  },
];
