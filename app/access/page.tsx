import type { Metadata } from "next";
import { property } from "@/data/property";
import { AccessGate } from "@/components/access/access-gate";

export const metadata: Metadata = {
  title: `Guest access — ${property.name}`,
  robots: { index: false, follow: false },
};

type AccessPageProps = {
  searchParams: Promise<{ error?: string; from?: string }>;
};

export default async function AccessPage({ searchParams }: AccessPageProps) {
  const { error, from } = await searchParams;

  return (
    <div className="flex min-h-[calc(100vh-0px)] items-center justify-center px-4 py-16">
      <AccessGate hasError={error === "invalid"} redirectTo={from ?? "/"} />
    </div>
  );
}
