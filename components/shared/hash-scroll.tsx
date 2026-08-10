"use client";

import { useEffect } from "react";
import { scrollToSection } from "@/lib/utils";

/** Scroll to `#section` when arriving from another page (e.g. /history → /#about). */
export const HashScroll = () => {
  useEffect(() => {
    const hash = window.location.hash.replace(/^#/, "");
    if (!hash) return;

    const timeout = window.setTimeout(() => {
      scrollToSection(hash);
    }, 50);

    return () => window.clearTimeout(timeout);
  }, []);

  return null;
};
