import { exploreCards } from "@/data/explore";
import { FadeIn } from "@/components/shared/fade-in";
import { PlaceholderImage } from "@/components/shared/placeholder-image";
import { SectionHeading } from "@/components/shared/section-heading";
import { Card, CardContent } from "@/components/ui/card";

export const ExploreSection = () => {
  return (
    <section id="explore" className="py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <FadeIn>
          <SectionHeading
            eyebrow="Discover"
            title="Explore North Devon"
            description="From wild beaches to hidden villages — the best of the coast is on your doorstep."
            align="center"
            className="mx-auto"
          />
        </FadeIn>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {exploreCards.map((card, index) => (
            <FadeIn key={card.id} delay={index * 0.04}>
              <Card className="group overflow-hidden border-border/80 bg-card transition-shadow hover:shadow-lg">
                <PlaceholderImage
                  src={card.image}
                  alt={card.imageAlt}
                  label={card.title}
                  className="aspect-[3/2] w-full"
                />
                <CardContent className="p-5">
                  <h3 className="font-serif text-xl text-navy dark:text-warm-white">
                    {card.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {card.description}
                  </p>
                  {card.highlights?.length ? (
                    <ul className="mt-4 flex flex-wrap gap-2">
                      {card.highlights.map((h) => (
                        <li
                          key={h}
                          className="rounded-full bg-muted px-3 py-1 text-xs text-muted-foreground"
                        >
                          {h}
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </CardContent>
              </Card>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};
