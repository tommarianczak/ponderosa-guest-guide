"use client";

import type { ReactNode } from "react";
import { ConditionsBar } from "@/components/layout/conditions-bar";
import { ConditionsProvider } from "@/components/layout/conditions-context";
import { SiteNav } from "@/components/layout/site-nav";

export const GuideShell = ({ children }: { children: ReactNode }) => (
  <ConditionsProvider>
    <div className="sticky top-0 z-50 border-b border-border/60 bg-background/90 backdrop-blur-md">
      <SiteNav />
      <ConditionsBar />
    </div>
    {children}
  </ConditionsProvider>
);
