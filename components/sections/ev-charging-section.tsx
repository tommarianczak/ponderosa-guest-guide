"use client";

import {
  CheckCircle2,
  ExternalLink,
  MapPin,
  PlugZap,
  QrCode,
  Zap,
} from "lucide-react";
import { property } from "@/data/property";
import { FadeIn } from "@/components/shared/fade-in";
import { SectionHeading } from "@/components/shared/section-heading";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export const EvChargingSection = () => {
  const { evCharger } = property;

  return (
    <section id="ev-charging" className="scroll-mt-24 bg-navy py-20 text-warm-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <FadeIn>
          <SectionHeading
            eyebrow="On-site amenity"
            title="EV charging"
            description={evCharger.summary}
            className="[&_h2]:text-warm-white [&_p:last-child]:text-warm-white/70 [&_p:first-child]:text-gold"
          />
        </FadeIn>

        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <FadeIn delay={0.05}>
            <Card className="border-warm-white/15 bg-warm-white/5 text-warm-white shadow-none">
              <CardContent className="p-6 sm:p-8">
                <div className="mb-6 flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-gold/20 text-gold">
                    <PlugZap className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-serif text-2xl text-warm-white">
                      {evCharger.name}
                    </h3>
                    <p className="mt-1 flex items-center gap-1.5 text-sm text-warm-white/70">
                      <MapPin className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                      {evCharger.location}
                    </p>
                  </div>
                </div>

                <p className="flex items-start gap-2 text-sm leading-relaxed text-warm-white/85">
                  <Zap className="mt-0.5 h-4 w-4 shrink-0 text-gold" aria-hidden="true" />
                  {evCharger.rangeNote}
                </p>

                <ol className="mt-8 space-y-4">
                  {evCharger.steps.map((step, index) => (
                    <li key={step} className="flex gap-4">
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gold text-sm font-semibold text-navy">
                        {index + 1}
                      </span>
                      <p className="pt-1 text-sm leading-relaxed text-warm-white/90">
                        {step}
                      </p>
                    </li>
                  ))}
                </ol>

                <div className="mt-8 rounded-lg border border-gold/30 bg-gold/10 p-4">
                  <p className="flex items-start gap-2 text-sm leading-relaxed text-warm-white">
                    <CheckCircle2
                      className="mt-0.5 h-4 w-4 shrink-0 text-gold"
                      aria-hidden="true"
                    />
                    {evCharger.paymentNote}
                  </p>
                </div>

                <div className="mt-8 flex flex-wrap gap-3">
                  <Button variant="gold" size="lg" asChild>
                    <a
                      href={evCharger.guestUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Open guest EV charging page"
                    >
                      <QrCode className="h-4 w-4" />
                      Start guest charging
                      <ExternalLink className="h-3.5 w-3.5 opacity-70" aria-hidden="true" />
                    </a>
                  </Button>
                </div>

                <p className="mt-4 break-all text-xs text-warm-white/50">
                  {evCharger.guestUrl}
                </p>
              </CardContent>
            </Card>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="flex h-full flex-col gap-4">
              <Card className="border-warm-white/15 bg-warm-white/5 text-warm-white shadow-none">
                <CardContent className="p-6">
                  <h3 className="font-serif text-xl text-warm-white">Good to know</h3>
                  <ul className="mt-4 space-y-3">
                    {evCharger.tips.map((tip) => (
                      <li
                        key={tip}
                        className="flex items-start gap-2 text-sm leading-relaxed text-warm-white/80"
                      >
                        <span
                          className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold"
                          aria-hidden="true"
                        />
                        {tip}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card className="flex flex-1 flex-col justify-center border-warm-white/15 bg-warm-white/5 text-warm-white shadow-none">
                <CardContent className="p-6">
                  <h3 className="font-serif text-xl text-warm-white">QR code on site</h3>
                  <p className="mt-3 text-sm leading-relaxed text-warm-white/80">
                    There is a QR code by the charger. Scanning it opens the same guest
                    page as the button above — plug in, choose a session, pay, and charge.
                  </p>
                  <p className="mt-4 text-sm leading-relaxed text-warm-white/80">
                    Prefer the website link? Use{" "}
                    <span className="font-medium text-gold">Start guest charging</span>{" "}
                    on this page — no Go Zero app needed.
                  </p>
                </CardContent>
              </Card>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};
