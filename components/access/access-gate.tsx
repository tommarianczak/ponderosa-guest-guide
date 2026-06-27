"use client";

import { Lock } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { property } from "@/data/property";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

type AccessGateProps = {
  hasError?: boolean;
  redirectTo?: string;
};

export const AccessGate = ({ hasError = false, redirectTo = "/" }: AccessGateProps) => {
  const router = useRouter();
  const [code, setCode] = useState("");
  const [error, setError] = useState(hasError ? "Invalid or expired link." : "");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/access", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ code: code.trim() }),
      });

      if (!res.ok) {
        setError("Incorrect access code. Check your welcome information.");
        return;
      }

      router.push(redirectTo);
      router.refresh();
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card className="w-full max-w-md border-border/80 bg-card shadow-lg">
      <CardContent className="p-8">
        <div className="mb-6 flex flex-col items-center text-center">
          <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-navy/5 text-gold">
            <Lock className="h-5 w-5" aria-hidden="true" />
          </div>
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-gold">
            {property.name}
          </p>
          <h1 className="mt-2 font-serif text-2xl font-light text-navy dark:text-warm-white">
            Guest access
          </h1>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            This guide is for Ponderosa guests only. Enter the access code from
            your welcome pack or booking confirmation.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="access-code" className="sr-only">
              Access code
            </label>
            <input
              id="access-code"
              type="password"
              inputMode="text"
              autoComplete="off"
              autoCapitalize="off"
              autoCorrect="off"
              spellCheck={false}
              value={code}
              onChange={(event) => setCode(event.target.value)}
              placeholder="Access code"
              required
              className="h-12 w-full rounded-md border border-border bg-background px-4 text-center font-mono text-sm tracking-widest text-foreground placeholder:tracking-normal placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-navy/30"
              aria-invalid={Boolean(error)}
              aria-describedby={error ? "access-error" : undefined}
            />
          </div>

          {error ? (
            <p id="access-error" className="text-center text-sm text-rose-600" role="alert">
              {error}
            </p>
          ) : null}

          <Button type="submit" className="w-full" size="lg" disabled={loading}>
            {loading ? "Checking…" : "Enter guide"}
          </Button>
        </form>

        <p className="mt-6 text-center text-xs text-muted-foreground">
          Scan the QR code in the property for instant access.
        </p>
      </CardContent>
    </Card>
  );
};
