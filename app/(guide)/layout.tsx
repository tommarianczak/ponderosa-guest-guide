import { GuideShell } from "@/components/layout/guide-shell";

export default function GuideLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <GuideShell>
      <main>{children}</main>
      <footer className="border-t border-border bg-muted/30 py-10">
        <div className="mx-auto max-w-6xl px-4 text-center sm:px-6">
          <p className="font-serif text-lg tracking-[0.15em] text-navy dark:text-warm-white">
            PONDEROSA
          </p>
          <p className="mt-2 text-sm text-muted-foreground">
            Worth Road, Ilfracombe EX34 9JA
          </p>
        </div>
      </footer>
    </GuideShell>
  );
}
