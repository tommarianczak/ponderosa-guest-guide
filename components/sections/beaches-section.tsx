import { ExternalLink, MapPin, Sparkles, Waves } from "lucide-react";
import { beaches } from "@/data/beaches";
import { FadeIn } from "@/components/shared/fade-in";
import { SectionHeading } from "@/components/shared/section-heading";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export const BeachesSection = () => {
  return (
    <section id="beaches" className="bg-muted/40 py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <FadeIn>
          <SectionHeading
            eyebrow="By the sea"
            title="Local beaches"
            description="From harbour coves on the doorstep to the golden sands of Woolacombe, Croyde, and Saunton."
            align="center"
            className="mx-auto"
          />
        </FadeIn>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {beaches.map((beach, index) => (
            <FadeIn key={beach.id} delay={index * 0.04}>
              <Card className="flex h-full flex-col border-border/80 bg-card transition-shadow hover:shadow-md">
                <CardContent className="flex flex-1 flex-col p-5">
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-gold/15 text-gold">
                    <Waves className="h-5 w-5" aria-hidden="true" />
                  </div>

                  <h3 className="font-serif text-lg text-navy dark:text-warm-white">
                    {beach.name}
                  </h3>
                  <p className="mt-1 text-xs font-medium uppercase tracking-wide text-muted-foreground">
                    {beach.character}
                  </p>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {beach.description}
                  </p>

                  <p className="mt-4 text-sm">
                    <span className="text-muted-foreground">Distance · </span>
                    {beach.distance}
                  </p>

                  <div className="mt-4 rounded-lg bg-gold/10 p-3 text-sm">
                    <p className="flex items-start gap-2">
                      <Sparkles
                        className="mt-0.5 h-4 w-4 shrink-0 text-gold"
                        aria-hidden="true"
                      />
                      <span>{beach.tip}</span>
                    </p>
                  </div>

                  <div className="mt-4 flex flex-wrap gap-2">
                    <Button variant="outline" size="sm" asChild>
                      <a
                        href={beach.mapsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Open map for ${beach.name}`}
                      >
                        <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
                        Maps
                      </a>
                    </Button>
                    {beach.websiteUrl ? (
                      <Button variant="ghost" size="sm" asChild>
                        <a
                          href={beach.websiteUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`Visit website for ${beach.name}`}
                        >
                          <ExternalLink
                            className="h-3.5 w-3.5"
                            aria-hidden="true"
                          />
                          {beach.websiteLabel ?? "Website"}
                        </a>
                      </Button>
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
