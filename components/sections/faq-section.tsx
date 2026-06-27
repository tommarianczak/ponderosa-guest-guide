import { faqs } from "@/data/faqs";
import { FadeIn } from "@/components/shared/fade-in";
import { SectionHeading } from "@/components/shared/section-heading";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const FaqSection = () => {
  return (
    <section id="faq" className="bg-muted/40 py-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <FadeIn>
          <SectionHeading
            eyebrow="Help"
            title="Frequently asked questions"
            description="Quick answers to common questions during your stay."
            align="center"
            className="mx-auto"
          />
        </FadeIn>

        <FadeIn delay={0.1}>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq) => (
              <AccordionItem key={faq.id} value={faq.id}>
                <AccordionTrigger className="text-left font-serif text-base">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="leading-relaxed">
                  <p>{faq.answer}</p>
                  {faq.links?.length ? (
                    <ul className="mt-3 space-y-2">
                      {faq.links.map((link) => (
                        <li key={link.href}>
                          <a
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-medium text-navy underline-offset-2 hover:underline dark:text-gold"
                          >
                            {link.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </FadeIn>
      </div>
    </section>
  );
};
