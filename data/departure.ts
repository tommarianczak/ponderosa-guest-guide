export type DepartureItem = {
  id: string;
  label: string;
  required: boolean;
};

export const departureChecklist: DepartureItem[] = [
  { id: "beds", label: "Strip used beds and leave linen in the laundry basket", required: true },
  { id: "dishwasher", label: "Start the dishwasher with final load", required: true },
  { id: "rubbish", label: "Take rubbish and recycling to bins", required: true },
  { id: "windows", label: "Close all windows and external doors", required: true },
  { id: "heating", label: "Turn off heating and unnecessary lights", required: true },
  { id: "streaming", label: "Sign out of streaming accounts on TVs", required: true },
  { id: "keys", label: "Return keys as per arrival instructions", required: true },
  { id: "breakages", label: "Report any accidental damage to guest support", required: false },
];

export const beforeYouLeave = {
  reviewPrompt:
    "If Ponderosa made your stay special, we'd be grateful for a review — it helps other guests discover this corner of Devon.",
  directBookingPrompt:
    "Planning a return visit? Book directly with us during owner weeks for the best rates and a personal welcome.",
  followPrompt: "Follow our journey — renovations, seasonal tips, and North Devon inspiration.",
};
