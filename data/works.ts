export type WorksSection = {
  id: string;
  title: string;
  paragraphs: string[];
};

export const worksPage = {
  title: "Creating Ponderosa",
  eyebrow: "The works",
  intro:
    "How a house on Worth Road became the Ponderosa you stay in today — the design choices, craftsmanship, and care that shaped every room, view, and outdoor space. Historic mapping suggests the house first appeared beside Combe Cottage between the mid-1970s and 1980s; this page will tell the story of the works that created Ponderosa as guests experience it now.",
  comingSoon: true,
  sections: [
    {
      id: "vision",
      title: "The vision",
      paragraphs: [
        "This chapter will tell the story of why Ponderosa was reimagined — a contemporary coastal retreat rooted in North Devon light, materials, and outlook over the harbour and channel.",
      ],
    },
    {
      id: "build",
      title: "The build",
      paragraphs: [
        "Coming soon: the works themselves — structure, interiors, outdoor spaces, and the details guests notice from the first cup of coffee to evening on the deck. (The original house dates from roughly the mid-1970s to 1980s; the transformation into today’s Ponderosa is the story we will add here.)",
      ],
    },
    {
      id: "today",
      title: "Ponderosa today",
      paragraphs: [
        "Coming soon: how the finished house is meant to be lived in — calm, generous, and ready for families and groups exploring Ilfracombe and the North Devon coast.",
      ],
    },
  ] satisfies WorksSection[],
} as const;
