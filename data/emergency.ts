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
    description:
      "Nearest hospital with a 24/7 Emergency Department (A&E). For all emergencies, call 999 — ambulance staff will advise where to go. The switchboard below is for general enquiries only, not medical advice.",
    phone: "01271 322577",
    address: "Raleigh Park, Barnstaple EX31 4JB",
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=North+Devon+District+Hospital+EX31+4JB",
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
    distance: "Approx. 25 min drive",
    emergencyDepartment: "24/7 Emergency Department (A&E)",
    emergencyAdvice: "For all emergencies, call 999.",
    switchboardPhone: "01271 322577",
    switchboardNote:
      "Main switchboard (24/7). Ask for the Emergency Department — not for medical advice by phone.",
    address: "Raleigh Park, Barnstaple EX31 4JB",
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=North+Devon+District+Hospital+EX31+4JB",
  },
  pharmacy: {
    name: "Superdrug Pharmacy",
    address: "25 High Street, Ilfracombe EX34 9DA",
    distance: "Approx. 0.7 miles",
    phone: "01271 862122",
    openingHours: "Mon–Fri 8:30 am–5:30 pm, Sat 9:00 am–5:30 pm (closed Sun)",
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Superdrug+Pharmacy+Ilfracombe+EX34+9DA",
  },
  pharmacyOutOfHours: {
    headline: "No 24-hour pharmacy in Ilfracombe",
    advice:
      "For urgent medication when local pharmacies are closed, call NHS 111 — available 24/7. They can arrange an emergency prescription or direct you to the on-call duty pharmacy.",
    nhs111Phone: "111",
    lateOpening: {
      name: "Tesco Pharmacy, Barnstaple",
      distance: "Approx. 20 min drive",
      openingHours: "Until 9:00 pm Mon–Sat, 10:00 am–4:00 pm Sun",
      note: "Nearest late opening — phone ahead to confirm availability.",
      phone: "01271 308447",
      mapsUrl:
        "https://www.google.com/maps/search/?api=1&query=Tesco+Pharmacy+Barnstaple+Retail+Park+EX31+2AS",
    },
  },
};
