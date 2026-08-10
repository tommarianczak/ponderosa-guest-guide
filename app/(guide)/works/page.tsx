import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { worksPage } from "@/data/works";
import { FadeIn } from "@/components/shared/fade-in";
import { SectionHeading } from "@/components/shared/section-heading";
import { Button } from "@/components/ui/button";

export default function WorksPage() {
  return (
    <div className="pb-20">
      <div className="border-b border-border/60 bg-muted/30">
        <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6 sm:py-14">
          <FadeIn>
            <Button variant="ghost" size="sm" className="mb-6 -ml-2" asChild>
              <Link href="/#about" aria-label="Back to About Ponderosa">
                <ArrowLeft className="h-4 w-4" aria-hidden="true" />
                Back to guide
              </Link>
            </Button>
            <SectionHeading
              eyebrow={worksPage.eyebrow}
              title={worksPage.title}
              description={worksPage.intro}
            />
            {worksPage.comingSoon ? (
              <p
                role="status"
                className="mt-6 inline-flex rounded-full bg-gold/15 px-3 py-1 text-xs font-medium uppercase tracking-wider text-navy dark:text-gold"
              >
                Story coming soon
              </p>
            ) : null}
          </FadeIn>
        </div>
      </div>

      <div className="mx-auto max-w-3xl space-y-14 px-4 py-14 sm:px-6">
        {worksPage.sections.map((section, index) => (
          <FadeIn key={section.id} delay={index * 0.04}>
            <article id={section.id}>
              <h2 className="font-serif text-2xl font-light text-navy dark:text-warm-white">
                {section.title}
              </h2>
              <div className="mt-4 space-y-4 text-base leading-relaxed text-muted-foreground">
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph.slice(0, 48)}>{paragraph}</p>
                ))}
              </div>
            </article>
          </FadeIn>
        ))}

        <FadeIn>
          <div className="flex flex-wrap gap-2 border-t border-border/60 pt-8">
            <Button variant="outline" size="sm" asChild>
              <Link href="/history">Read the history →</Link>
            </Button>
            <Button variant="ghost" size="sm" asChild>
              <Link href="/#about">Back to About</Link>
            </Button>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}
