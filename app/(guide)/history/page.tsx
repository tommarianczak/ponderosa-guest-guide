import Link from "next/link";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { historyPage } from "@/data/history";
import { FadeIn } from "@/components/shared/fade-in";
import { SectionHeading } from "@/components/shared/section-heading";
import { Button } from "@/components/ui/button";

export default function HistoryPage() {
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
              eyebrow={historyPage.eyebrow}
              title={historyPage.title}
              description={historyPage.intro}
            />
          </FadeIn>
        </div>
      </div>

      <div className="mx-auto max-w-3xl space-y-14 px-4 py-14 sm:px-6">
        {historyPage.sections.map((section, index) => (
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
          <aside className="rounded-2xl border border-border/80 bg-card p-6">
            <h2 className="font-serif text-xl text-navy dark:text-warm-white">
              Further reading
            </h2>
            <ul className="mt-4 space-y-3">
              {historyPage.sources.map((source) => (
                <li key={source.href}>
                  <a
                    href={source.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-start gap-2 text-sm font-medium text-navy underline-offset-2 hover:underline dark:text-gold"
                  >
                    <ExternalLink
                      className="mt-0.5 h-3.5 w-3.5 shrink-0 opacity-60"
                      aria-hidden="true"
                    />
                    {source.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-6 flex flex-wrap gap-2">
              <Button variant="outline" size="sm" asChild>
                <Link href="/works">The works →</Link>
              </Button>
              <Button variant="ghost" size="sm" asChild>
                <Link href="/#about">Back to About</Link>
              </Button>
            </div>
          </aside>
        </FadeIn>
      </div>
    </div>
  );
}
