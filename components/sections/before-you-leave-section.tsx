"use client";

import { BookOpen, Check, Star } from "lucide-react";
import { useState } from "react";
import { beforeYouLeave, departureChecklist } from "@/data/departure";
import { FadeIn } from "@/components/shared/fade-in";
import { SectionHeading } from "@/components/shared/section-heading";
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
                  <ul className="mt-4 space-y-4 text-sm leading-relaxed text-muted-foreground">
                    <li className="flex gap-3">
                      <BookOpen
                        className="mt-0.5 h-4 w-4 shrink-0 text-gold"
                        aria-hidden="true"
                      />
                      <span>{beforeYouLeave.reviewGuestBook}</span>
                    </li>
                    <li className="flex gap-3">
                      <Star
                        className="mt-0.5 h-4 w-4 shrink-0 text-gold"
                        aria-hidden="true"
                      />
                      <span>{beforeYouLeave.reviewPlatform}</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
};
