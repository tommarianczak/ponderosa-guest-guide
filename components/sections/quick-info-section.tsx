"use client";

import {
  AlertCircle,
  Car,
  Clock,
  Copy,
  ExternalLink,
  Hospital,
  MapPin,
  Phone,
  Pill,
  Wifi,
} from "lucide-react";
import { useState } from "react";
import { quickEmergency } from "@/data/emergency";
import { property } from "@/data/property";
import { FadeIn } from "@/components/shared/fade-in";
import { SectionHeading } from "@/components/shared/section-heading";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

type QuickCardProps = {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
  highlight?: boolean;
};

const QuickCard = ({ icon, title, children, highlight }: QuickCardProps) => (
  <Card
    className={
      highlight
        ? "border-gold/30 bg-card shadow-md"
        : "border-border/80 bg-card/80 backdrop-blur"
    }
  >
    <CardContent className="p-5">
      <div className="mb-3 flex items-center gap-2 text-gold">{icon}</div>
      <h3 className="font-serif text-lg text-navy dark:text-warm-white">{title}</h3>
      <div className="mt-2 text-sm leading-relaxed text-muted-foreground">
        {children}
      </div>
    </CardContent>
  </Card>
);

export const QuickInfoSection = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyWifi = async () => {
    const text = `Network: ${property.wifi.ssid}\nPassword: ${property.wifi.password}`;
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* ignore */
    }
  };

  return (
    <section id="quick-info" className="bg-warm-white py-20 dark:bg-background">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <FadeIn>
          <SectionHeading
            eyebrow="Essentials"
            title="Quick information"
            description="Everything you need at a glance — save this page to your home screen for instant access."
          />
        </FadeIn>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <FadeIn delay={0.05}>
            <QuickCard icon={<Wifi className="h-5 w-5" />} title="WiFi" highlight>
              <p className="font-mono text-navy dark:text-warm-white">
                {property.wifi.ssid}
              </p>
              <p className="mt-1 font-mono">{property.wifi.password}</p>
              <Button
                variant="ghost"
                size="sm"
                className="mt-3 h-8 px-0 text-gold hover:bg-transparent hover:text-gold-muted"
                onClick={handleCopyWifi}
              >
                <Copy className="mr-1 h-3.5 w-3.5" />
                {copied ? "Copied" : "Copy credentials"}
              </Button>
            </QuickCard>
          </FadeIn>

          <FadeIn delay={0.1}>
            <QuickCard icon={<Clock className="h-5 w-5" />} title="Check-in">
              {property.checkIn}
            </QuickCard>
          </FadeIn>

          <FadeIn delay={0.15}>
            <QuickCard icon={<Clock className="h-5 w-5" />} title="Check-out">
              {property.checkOut}
            </QuickCard>
          </FadeIn>

          <FadeIn delay={0.2}>
            <QuickCard icon={<Car className="h-5 w-5" />} title="Parking">
              {property.parking}
            </QuickCard>
          </FadeIn>

          <FadeIn delay={0.25}>
            <QuickCard icon={<Phone className="h-5 w-5" />} title="Emergency contact">
              <p>{property.emergencyContact.name}</p>
              <a
                href={`tel:${property.emergencyContact.phone.replace(/\s/g, "")}`}
                className="mt-1 block font-medium text-navy underline-offset-2 hover:underline dark:text-gold"
              >
                {property.emergencyContact.phone}
              </a>
            </QuickCard>
          </FadeIn>

          <FadeIn delay={0.3}>
            <QuickCard icon={<AlertCircle className="h-5 w-5" />} title="Emergency services">
              <a
                href="tel:999"
                className="text-2xl font-light text-navy dark:text-gold"
              >
                999
              </a>
              <p className="mt-1">Fire, police, ambulance, coastguard</p>
            </QuickCard>
          </FadeIn>

          <FadeIn delay={0.35}>
            <QuickCard icon={<Hospital className="h-5 w-5" />} title="Nearest hospital">
              <p className="font-medium text-navy dark:text-warm-white">
                {quickEmergency.hospital.name}
              </p>
              <p className="mt-1">{quickEmergency.hospital.emergencyDepartment}</p>
              <p className="mt-1">{quickEmergency.hospital.distance}</p>
              <p className="mt-3 rounded-md bg-rose-50 px-3 py-2 text-sm font-medium text-rose-900 dark:bg-rose-950/40 dark:text-rose-100">
                {quickEmergency.hospital.emergencyAdvice}{" "}
                <a href="tel:999" className="underline underline-offset-2">
                  999
                </a>
              </p>
              <p className="mt-3 text-xs leading-relaxed">
                Switchboard{" "}
                <a
                  href={`tel:${quickEmergency.hospital.switchboardPhone.replace(/\s/g, "")}`}
                  className="font-medium text-navy hover:underline dark:text-gold"
                >
                  {quickEmergency.hospital.switchboardPhone}
                </a>
                {" — "}
                {quickEmergency.hospital.switchboardNote}
              </p>
              <a
                href={quickEmergency.hospital.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-navy hover:underline dark:text-gold"
              >
                <MapPin className="h-3.5 w-3.5" />
                Open in Maps
                <ExternalLink className="h-3 w-3 opacity-60" aria-hidden="true" />
              </a>
            </QuickCard>
          </FadeIn>

          <FadeIn delay={0.4}>
            <QuickCard icon={<Pill className="h-5 w-5" />} title="Nearest pharmacy">
              <p className="font-medium text-navy dark:text-warm-white">
                {quickEmergency.pharmacy.name}
              </p>
              <p className="mt-1">{quickEmergency.pharmacy.address}</p>
              <p className="mt-1">{quickEmergency.pharmacy.distance}</p>
              <p className="mt-2 text-xs leading-relaxed">
                {quickEmergency.pharmacy.openingHours}
              </p>
              <a
                href={`tel:${quickEmergency.pharmacy.phone.replace(/\s/g, "")}`}
                className="mt-3 block font-medium text-navy hover:underline dark:text-gold"
              >
                {quickEmergency.pharmacy.phone}
              </a>
              <a
                href={quickEmergency.pharmacy.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-flex items-center gap-1.5 text-sm font-medium text-navy hover:underline dark:text-gold"
              >
                <MapPin className="h-3.5 w-3.5" />
                Open in Maps
                <ExternalLink className="h-3 w-3 opacity-60" aria-hidden="true" />
              </a>
            </QuickCard>
          </FadeIn>

          <FadeIn delay={0.45}>
            <QuickCard
              icon={<Clock className="h-5 w-5" />}
              title="Out-of-hours pharmacy"
            >
              <p className="font-medium text-navy dark:text-warm-white">
                {quickEmergency.pharmacyOutOfHours.headline}
              </p>
              <p className="mt-2 text-sm leading-relaxed">
                {quickEmergency.pharmacyOutOfHours.advice}
              </p>
              <p className="mt-3">
                <a
                  href={`tel:${quickEmergency.pharmacyOutOfHours.nhs111Phone}`}
                  className="text-lg font-light text-navy dark:text-gold"
                >
                  NHS {quickEmergency.pharmacyOutOfHours.nhs111Phone}
                </a>
              </p>
              <div className="mt-4 border-t border-border pt-4">
                <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                  Latest nearby opening
                </p>
                <p className="mt-2 font-medium text-navy dark:text-warm-white">
                  {quickEmergency.pharmacyOutOfHours.lateOpening.name}
                </p>
                <p className="mt-1 text-sm">
                  {quickEmergency.pharmacyOutOfHours.lateOpening.distance} ·{" "}
                  {quickEmergency.pharmacyOutOfHours.lateOpening.openingHours}
                </p>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                  {quickEmergency.pharmacyOutOfHours.lateOpening.note}
                </p>
                <a
                  href={`tel:${quickEmergency.pharmacyOutOfHours.lateOpening.phone.replace(/\s/g, "")}`}
                  className="mt-2 block text-sm font-medium text-navy hover:underline dark:text-gold"
                >
                  {quickEmergency.pharmacyOutOfHours.lateOpening.phone}
                </a>
                <a
                  href={quickEmergency.pharmacyOutOfHours.lateOpening.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-flex items-center gap-1.5 text-sm font-medium text-navy hover:underline dark:text-gold"
                >
                  <MapPin className="h-3.5 w-3.5" />
                  Open in Maps
                  <ExternalLink className="h-3 w-3 opacity-60" aria-hidden="true" />
                </a>
              </div>
            </QuickCard>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};
