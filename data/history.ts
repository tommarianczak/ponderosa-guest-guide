export type HistorySection = {
  id: string;
  title: string;
  paragraphs: string[];
};

export const historyPage = {
  title: "A place with deep roots",
  eyebrow: "History",
  intro:
    "Ponderosa sits on Worth Road above Ilfracombe harbour — and the meadow behind the house is part of a much older story. Local records and maps place Ilfracombe Castle in the field immediately above Ponderosa, looking out over the town and the Bristol Channel.",
  sections: [
    {
      id: "castle-meadow",
      title: "The castle in the meadow",
      paragraphs: [
        "Ilfracombe Museum holds notes describing Ilfracombe Fort — or castle — as standing in the field on Worth Road immediately above a house called Ponderosa. The ruin was photographed in the early twentieth century and is said to have been finally destroyed after the Second World War.",
        "Those same notes place the fort in the first half of the thirteenth century, describing a round form typical of that period. The first written mention of a fort here is often dated to 1278 — the year Ilfracombe also received its market grant — with later references during the Civil War in the 1640s.",
        "Below the site lie Warfield Villas, where cannon balls have been found in gardens, and Castle Hill — place-names that still echo the fortification that once crowned this ridge.",
      ],
    },
    {
      id: "the-worth",
      title: "The Worth — fields behind the house",
      paragraphs: [
        "Long before Ponderosa stood here, this hillside was known as the Worth. A lease of 1694 already names closes called Newpark, the Worth, and the Worth Meadow. By the Ilfracombe tithe survey of around 1840, the land appears as Lower Worth and Higher Worth — pasture belonging to George and John Vye, part of a notable local family connected with the Manor House and neighbouring Laston (or Larkstone) House.",
        "Historic landscape characterisation records these enclosures as medieval strip fields that were later consolidated. The 1804 surveyors’ draft map shows long, curved field boundaries typical of that older farming pattern, with Ilfracombe still concentrated to the north-west and the harbour below.",
        "A 2021 archaeological desk-based assessment and geophysical survey of land off Worth Road (South West Archaeology) confirmed that picture: the fields sit in a medieval enclosure landscape overlooking Hillsborough’s Iron Age fort. The survey mapped earlier boundary and drainage features rather than castle masonry in the parcels examined, and judged the archaeological potential of those plots to be low — while the local castle tradition continues to point to the platform in the meadow above Ponderosa.",
      ],
    },
    {
      id: "maps-and-photographs",
      title: "Maps, photographs, and the ridge",
      paragraphs: [
        "Nineteenth-century maps help pin the castle story to this hillside. W. Stewart’s town map (published in the 1860s–1870s, with a later 1876 version often cited) marks a castle above Highfield Road / Lower Worth Road, near what is now Warfield Villas and Castle Terrace.",
        "The Ordnance Survey First Edition 25-inch map of 1888 shows the hillside as Worth fields with Worth Barn nearby, and local historians note the castle marked just above a track off Worth Road on the early detailed OS. Photographs in Ilfracombe Museum from around 1900–1904, including views from Hillsborough, show a cylindrical or segmented castellated building between Highfield Road and Worth Road, with Castle Terrace in the frame.",
        "By 1932 the modern field layout is clear on the OS map, with houses spreading along the northern and eastern edges. Historic mapping suggests Ponderosa itself was built next to Combe Cottage between the mid-1970s and 1980s — a late chapter on a much older ridge.",
      ],
    },
    {
      id: "civil-war",
      title: "Harbour, pirates, and Civil War",
      paragraphs: [
        "Ilfracombe was already a significant harbour in the Middle Ages — assembling fleets for Ireland, answering royal shipping demands, and in 1346 sending six ships and 82 mariners toward Calais. In 1418 the town gained permission to raise money for stone towers and walls to protect the port. A fortress above the town made sense: the Bristol Channel was long troubled by pirates, and a strongpoint on the ridge could watch both harbour and approach roads.",
        "In August 1644, during the Civil War, Royalist forces under Sir Francis Doddington attacked Parliamentarian Ilfracombe, entering from the Combe Martin direction and “passing the castle.” Townspeople and sailors resisted; houses were burned; and the fort changed hands in the fighting that followed. Warfield — the name surviving below the site — is traditionally linked with that struggle for the castle.",
      ],
    },
    {
      id: "wider-landscape",
      title: "Older than the castle",
      paragraphs: [
        "The wider landscape around Ponderosa is older still. To the north-east, Hillsborough Nature Reserve preserves a scheduled Iron Age promontory fort — the “sleeping elephant” headland that guards Hele Bay — with related settlement traces and flint finds recorded toward Larkstone. Ilfracombe itself appears at Domesday as Alfreincoma (held of the honour of Okehampton), and may have earlier roots; the harbour and farming settlements grew as distinct communities for centuries.",
        "So when you look from Ponderosa across the meadow and out to sea, you are looking across layers of North Devon history: prehistoric headland fort, medieval Worth fields, Civil War fortification, Victorian and Edwardian maps — and a late-twentieth-century house now reimagined as a coastal retreat.",
      ],
    },
    {
      id: "uncertainty",
      title: "A note on the sources",
      paragraphs: [
        "As with many coastal fortifications, not every historian agrees on a single footprint. Some earlier writers placed a castellated building nearer the harbour — around Castle House or Quayfield — and eighteenth-century views can be ambiguous. The strongest local evidence for the Worth Road meadow site is the combination of museum notes naming Ponderosa, Stewart’s map, early Ordnance Survey sheets, period photographs, and surviving place-names on the ridge.",
        "We share this history as a guest story rooted in those local sources and in the 2021 Worth Road archaeological appraisal, not as a claim that every ditch in the meadow is castle wall. If you are curious, Ilfracombe Museum holds photographs and the castle folder notes that bring the ruin back into view.",
      ],
    },
  ] satisfies HistorySection[],
  sources: [
    {
      label:
        "John H. Moore — Middle Ages in Hele Bay (Ilfracombe Castle notes, maps, and museum photo references; includes the Ponderosa / Worth Road field note)",
      href: "https://johnhmoore.co.uk/hele/middle_ages.htm",
    },
    {
      label:
        "Balmond & Webb / South West Archaeology Ltd. (2021) — Land off Worth Road, Ilfracombe: desk-based assessment, walkover & geophysical survey (OASIS SOUTHWES1-508361)",
      href: "https://doi.org/10.5284/1108558",
    },
    {
      label: "Ilfracombe Museum — castle photographs and archive notes",
      href: "https://www.ilfracombemuseum.co.uk/",
    },
    {
      label: "Wikipedia — History of Ilfracombe (harbour town overview)",
      href: "https://en.wikipedia.org/wiki/History_of_Ilfracombe",
    },
    {
      label:
        "North Devon Council — Ilfracombe Conservation Area Character Appraisal (Civil War and town history)",
      href: "https://www.northdevon.gov.uk/media/316980/ilfracombe-appraisal-low-res.pdf",
    },
    {
      label: "Wikipedia — Hillsborough, Devon (Iron Age promontory fort / nature reserve)",
      href: "https://en.wikipedia.org/wiki/Hillsborough,_Devon",
    },
    {
      label:
        "North Devon Coast National Landscape — Hillsborough hillfort heritage notes",
      href: "https://www.northdevoncoast-nl.org.uk/coastalheritage/hillsborough-hillfort/iron-age-victorian-connections",
    },
  ],
} as const;
