export type DepartureItem = {
  id: string;
  label: string;
  required: boolean;
};

export const departureChecklist: DepartureItem[] = [
  { id: "windows", label: "Close all windows and external doors", required: true },
  { id: "heating", label: "Leave heating as set — it is centrally controlled", required: false },
  { id: "lights", label: "Turn off unnecessary lights", required: true },
  { id: "streaming", label: "Sign out of streaming accounts on TVs", required: true },
  { id: "keys", label: "Return keys as per arrival instructions", required: true },
  { id: "breakages", label: "Report any accidental damage to guest support", required: false },
];

export const beforeYouLeave = {
  reviewPrompt:
    "If Ponderosa made your stay special, we'd love to hear from you.",
  reviewGuestBook:
    "Please leave a note in the guest book on the desk in the living area — we read every entry and love hearing what made your stay memorable.",
  reviewPlatform:
    "You can also leave a review on the platform you booked through (for example Holiday Cottages, Airbnb, or Booking.com). It helps other guests discover this corner of Devon.",
};
