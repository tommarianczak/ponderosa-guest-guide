"use client";

import { Check, ExternalLink, Heart, Star } from "lucide-react";
import { useState } from "react";
import { beforeYouLeave, departureChecklist } from "@/data/departure";
import { property } from "@/data/property";
import { FadeIn } from "@/components/shared/fade-in";
import { SectionHeading } from "@/components/shared/section-heading";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

export const BeforeYouLeaveSection = () => {
  const [checked, setChecked] = useState<Record<string, boolean>>({});

  const handleToggle = (id: string) => {
    setChecked((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <section id="before-you-leave" className="py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <FadeIn>
          <SectionHeading
            eyebrow="Departure"
            title="Before you leave"
            description="A smooth checkout helps the next guests arrive to the same standard you found."
            align="center"
            className="mx-auto"
          />
        </FadeIn>

        <div className="grid gap-8 lg:grid-cols-2">
          <FadeIn>
            <Card className="border-border/80 bg-card">
              <CardContent className="p-6">
                <h3 className="font-serif text-xl text-navy dark:text-warm-white">
                  Departure checklist
                </h3>
                <ul className="mt-6 space-y-3">
                  {departureChecklist.map((item) => (
                    <li key={item.id}>
                      <button
                        type="button"
                        onClick={() => handleToggle(item.id)}
                        className="flex w-full items-start gap-3 rounded-lg px-2 py-2 text-left text-sm transition-colors hover:bg-muted/60"
                        aria-pressed={checked[item.id] ?? false}
                      >
                        <span
                          className={cn(
                            "mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded border",
                            checked[item.id]
                              ? "border-gold bg-gold text-navy"
                              : "border-border",
                          )}
                        >
                          {checked[item.id] ? (
                            <Check className="h-3 w-3" />
                          ) : null}
                        </span>
                        <span
                          className={
                            checked[item.id] ? "text-muted-foreground line-through" : ""
                          }
                        >
                          {item.label}
                          {!item.required ? (
                            <span className="ml-1 text-xs text-muted-foreground">
                              (if applicable)
                            </span>
                          ) : null}
                        </span>
                      </button>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </FadeIn>

          <div className="space-y-6">
            <FadeIn delay={0.05}>
              <Card className="border-gold/30 bg-gold/5">
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 text-gold">
                    <Star className="h-5 w-5" />
                    <h3 className="font-serif text-xl text-navy dark:text-warm-white">
                      Leave a review
                    </h3>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {beforeYouLeave.reviewPrompt}
                  </p>
                  <Button className="mt-4" variant="default" asChild>
                    <a
                      href={property.reviewUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="h-4 w-4" />
                      Write a review
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </FadeIn>

            <FadeIn delay={0.1}>
              <Card className="border-border/80 bg-card">
                <CardContent className="p-6">
                  <h3 className="font-serif text-xl text-navy dark:text-warm-white">
                    Book directly next time
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {beforeYouLeave.directBookingPrompt}
                  </p>
                  <Button className="mt-4" variant="outline" asChild>
                    <a
                      href={property.directBookingUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Direct booking
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </FadeIn>

            <FadeIn delay={0.15}>
              <Card className="border-border/80 bg-card">
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 text-gold">
                    <Heart className="h-5 w-5" />
                    <h3 className="font-serif text-xl text-navy dark:text-warm-white">
                      Follow us
                    </h3>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {beforeYouLeave.followPrompt}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {property.socialLinks.map((link) => (
                      <Button key={link.label} variant="ghost" size="sm" asChild>
                        <a href={link.href}>{link.label}</a>
                      </Button>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
};
