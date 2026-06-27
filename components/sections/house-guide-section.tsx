import { houseGuideGroups } from "@/data/house-guide";
import { FadeIn } from "@/components/shared/fade-in";
import { SectionHeading } from "@/components/shared/section-heading";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const HouseGuideSection = () => {
  return (
    <section id="house-guide" className="bg-muted/40 py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <FadeIn>
          <SectionHeading
            eyebrow="Your stay"
            title="House guide"
            description="Everything you need to feel at home — from morning coffee to evening on the terrace."
          />
        </FadeIn>

        <div className="grid gap-6 lg:grid-cols-2">
          {houseGuideGroups.map((group, groupIndex) => (
            <FadeIn key={group.id} delay={groupIndex * 0.05}>
              <Card className="border-border/80 bg-card">
                <CardHeader className="pb-2">
                  <CardTitle>{group.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <Accordion type="multiple" className="w-full">
                    {group.items.map((item) => {
                      const Icon = item.icon;
                      return (
                        <AccordionItem key={item.id} value={item.id}>
                          <AccordionTrigger className="gap-3 text-sm">
                            <span className="flex items-center gap-3">
                              <Icon className="h-4 w-4 shrink-0 text-gold" />
                              {item.title}
                            </span>
                          </AccordionTrigger>
                          <AccordionContent>
                            <p>{item.content}</p>
                            {item.tips?.length ? (
                              <ul className="mt-3 list-disc space-y-1 pl-5">
                                {item.tips.map((tip) => (
                                  <li key={tip}>{tip}</li>
                                ))}
                              </ul>
                            ) : null}
                          </AccordionContent>
                        </AccordionItem>
                      );
                    })}
                  </Accordion>
                </CardContent>
              </Card>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};
