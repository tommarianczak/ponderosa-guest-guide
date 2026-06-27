export type EmergencyContact = {
  id: string;
  name: string;
  description: string;
  phone?: string;
  address?: string;
  mapsUrl?: string;
};

export const emergencyServices = {
  emergency: "999",
  nonEmergency: "101",
  coastguard: "999 (ask for Coastguard)",
} as const;

export const emergencyContacts: EmergencyContact[] = [
  {
    id: "doctor",
    name: "Ilfracombe Health Centre",
    description: "GP surgery — call for appointments and out-of-hours advice.",
    phone: "01271 862388",
    address: "St Brannock's Park Road, Ilfracombe EX34 8EG",
    mapsUrl: "https://maps.google.com/?q=Ilfracombe+Health+Centre",
  },
  {
    id: "hospital",
    name: "North Devon District Hospital",
    description: "Nearest A&E — approximately 25 minutes by car.",
    phone: "01271 322577",
    address: "Raleigh Park, Barnstaple EX31 4JB",
    mapsUrl: "https://maps.google.com/?q=North+Devon+District+Hospital",
  },
  {
    id: "vet",
    name: "Ilfracombe Veterinary Surgery",
    description: "For pets — emergencies during opening hours.",
    phone: "01271 862222",
    mapsUrl: "https://maps.google.com/?q=Ilfracombe+Veterinary",
  },
  {
    id: "dentist",
    name: "Harbour Dental Practice",
    description: "Routine and emergency dental care — call for availability.",
    phone: "01271 862495",
    mapsUrl: "https://maps.google.com/?q=Harbour+Dental+Ilfracombe",
  },
  {
    id: "taxi",
    name: "Ilfracombe Taxis",
    description: "Local taxi service — useful for evenings out or station transfers.",
    phone: "01271 863333",
  },
  {
    id: "police",
    name: "Devon & Cornwall Police (non-emergency)",
    description: "Report non-urgent incidents.",
    phone: "101",
  },
  {
    id: "coastguard",
    name: "HM Coastguard",
    description: "For coastal emergencies — dial 999 and ask for Coastguard.",
    phone: "999",
  },
];

export const quickEmergency = {
  hospital: {
    name: "North Devon District Hospital",
    distance: "25 min drive",
    phone: "01271 322577",
  },
  pharmacy: {
    name: "Boots Pharmacy, Ilfracombe",
    distance: "0.7 miles",
    phone: "01271 862001",
  },
};
