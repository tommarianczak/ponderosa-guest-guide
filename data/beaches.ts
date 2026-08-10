export type Beach = {
  id: string;
  name: string;
  description: string;
  tip: string;
  distance: string;
  character: string;
  mapsUrl: string;
  websiteUrl?: string;
  websiteLabel?: string;
};

export const beaches: Beach[] = [
  {
    id: "tunnels-beaches",
    name: "Tunnels Beaches",
    description:
      "Ilfracombe's famous Victorian tunnels lead down to sheltered tidal bathing pools and a pebble cove — unique on this stretch of coast.",
    tip: "Check tide times before you go — the pools and beach are at their best around mid to low tide. Entry fee applies; café and toilets on site.",
    distance: "Approximately 1 mile (~5 min drive / walkable)",
    character: "Tidal pools · family favourite · paid entry",
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Tunnels+Beaches+Ilfracombe",
    websiteUrl: "https://www.tunnelsbeaches.co.uk/",
    websiteLabel: "Tunnels Beaches",
  },
  {
    id: "ilfracombe-harbour-beach",
    name: "Ilfracombe Harbour Beach",
    description:
      "Wildersmouth Beach by the Landmark Theatre and promenade — the town's handy harbour-side stretch of sand and shingle, steps from cafés and the quay.",
    tip: "Ideal for a quick paddle or sunset stroll without leaving town. Combine with ice cream on the promenade or fish and chips on the harbour.",
    distance: "Approximately 1 mile (~5 min drive)",
    character: "Town beach · promenade · easy access",
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Wildersmouth+Beach+Ilfracombe",
    websiteUrl: "https://www.visitilfracombe.co.uk/",
    websiteLabel: "Visit Ilfracombe",
  },
  {
    id: "hele-bay",
    name: "Hele Bay",
    description:
      "A small, sheltered sand and shingle cove just east of Ilfracombe, beside Hillsborough Nature Reserve — quieter than the town beaches.",
    tip: "Great for rock pooling at low tide. Reachable by a short drive or a scenic stretch of the South West Coast Path from the harbour.",
    distance: "Approximately 1.5 miles (~5–10 min drive)",
    character: "Quiet cove · rock pools · Blue Flag waters",
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Hele+Bay+Beach+Ilfracombe",
  },
  {
    id: "lee-beach",
    name: "Lee Beach",
    description:
      "A sheltered north-east facing cove at Lee Bay — grey sand, rocky ridges, and rock pools, tucked into a wooded valley west of Ilfracombe.",
    tip: "Popular for picnics, safe swimming in calm conditions, and rock pooling. Narrow lanes into the village — take care if driving.",
    distance: "Approximately 3.5 miles (~15 min drive)",
    character: "Sheltered cove · rock pools · dogs welcome",
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Lee+Bay+Beach+Ilfracombe",
    websiteUrl:
      "https://www.nationaltrust.org.uk/visit/devon/lee-bay-and-llantic-bay",
    websiteLabel: "National Trust",
  },
  {
    id: "woolacombe",
    name: "Woolacombe",
    description:
      "One of Britain's best-known sandy beaches — nearly three miles of golden sand with dunes behind and Atlantic surf out front.",
    tip: "Arrive early in summer for parking. Excellent for families, bodyboarding, and long beach walks. Surf hire and cafés along the front.",
    distance: "Approximately 8 miles (~20 min drive)",
    character: "Wide sandy beach · surfing · family favourite",
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Woolacombe+Beach+Devon",
    websiteUrl: "https://www.woolacombetourism.co.uk/",
    websiteLabel: "Woolacombe Tourism",
  },
  {
    id: "croyde",
    name: "Croyde",
    description:
      "A classic North Devon surf bay with soft sand, a lively village behind, and breaks that attract beginners and experienced surfers alike.",
    tip: "Surf schools and hire shops are in the village. The bay is busiest in peak summer — early mornings are calmer for a swim or stroll.",
    distance: "Approximately 12 miles (~25 min drive)",
    character: "Surf beach · village · National Trust coastline",
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Croyde+Bay+Beach+Devon",
    websiteUrl: "https://www.nationaltrust.org.uk/visit/devon/croyde-bay",
    websiteLabel: "National Trust",
  },
  {
    id: "saunton",
    name: "Saunton Sands",
    description:
      "A vast three-mile sandy beach backed by Braunton Burrows dunes — open, windswept, and one of the finest long beaches on the north coast.",
    tip: "Superb for long walks, surfing, and kite sports. Limited facilities on the sand itself — use the beach car park and café above.",
    distance: "Approximately 14 miles (~25–30 min drive)",
    character: "Long sandy beach · dunes · surfing",
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Saunton+Sands+Devon",
    websiteUrl: "https://www.sauntonsands.co.uk/",
    websiteLabel: "Saunton Sands",
  },
];
