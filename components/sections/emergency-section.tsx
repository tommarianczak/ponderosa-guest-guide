import { ExternalLink, Phone } from "lucide-react";
import { emergencyContacts, emergencyServices } from "@/data/emergency";
import { FadeIn } from "@/components/shared/fade-in";
import { SectionHeading } from "@/components/shared/section-heading";
import { Card, CardContent } from "@/components/ui/card";

export const EmergencySection = () => {
  return (
    <section id="emergency" className="bg-navy py-20 text-warm-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <FadeIn>
          <SectionHeading
            eyebrow="Safety"
            title="Emergency information"
            description="Important contacts — we hope you won't need them, but they're here if you do."
            className="[&_h2]:text-warm-white [&_p]:text-warm-white/70"
          />
        </FadeIn>

        <FadeIn delay={0.05}>
          <div className="mb-10 grid gap-4 sm:grid-cols-3">
            <Card className="border-warm-white/10 bg-warm-white/5 text-warm-white">
              <CardContent className="p-5 text-center">
                <p className="text-xs uppercase tracking-widest text-gold">
                  Emergency
                </p>
                <a href="tel:999" className="mt-2 block font-serif text-4xl">
                  {emergencyServices.emergency}
                </a>
              </CardContent>
            </Card>
            <Card className="border-warm-white/10 bg-warm-white/5 text-warm-white">
              <CardContent className="p-5 text-center">
                <p className="text-xs uppercase tracking-widest text-gold">
                  Non-emergency
                </p>
                <a href="tel:101" className="mt-2 block font-serif text-4xl">
                  {emergencyServices.nonEmergency}
                </a>
              </CardContent>
            </Card>
            <Card className="border-warm-white/10 bg-warm-white/5 text-warm-white">
              <CardContent className="p-5 text-center">
                <p className="text-xs uppercase tracking-widest text-gold">
                  Coastguard
                </p>
                <p className="mt-2 text-sm">{emergencyServices.coastguard}</p>
              </CardContent>
            </Card>
          </div>
        </FadeIn>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {emergencyContacts.map((contact, index) => (
            <FadeIn key={contact.id} delay={index * 0.04}>
              <Card className="border-warm-white/10 bg-warm-white/5 text-warm-white">
                <CardContent className="p-5">
                  <h3 className="font-serif text-lg">{contact.name}</h3>
                  <p className="mt-1 text-sm text-warm-white/70">
                    {contact.description}
                  </p>
                  {contact.address ? (
                    <p className="mt-2 text-xs text-warm-white/50">
                      {contact.address}
                    </p>
                  ) : null}
                  <div className="mt-4 flex flex-wrap gap-3">
                    {contact.phone ? (
                      <a
                        href={`tel:${contact.phone.replace(/\s/g, "")}`}
                        className="inline-flex items-center gap-1 text-sm text-gold hover:underline"
                      >
                        <Phone className="h-3.5 w-3.5" />
                        {contact.phone}
                      </a>
                    ) : null}
                    {contact.mapsUrl ? (
                      <a
                        href={contact.mapsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-sm text-warm-white/70 hover:text-gold"
                      >
                        <ExternalLink className="h-3.5 w-3.5" />
                        Map
                      </a>
                    ) : null}
                  </div>
                </CardContent>
              </Card>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};
