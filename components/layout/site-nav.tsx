"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { navItems } from "@/data/navigation";
import { property } from "@/data/property";
import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import { cn, scrollToSection } from "@/lib/utils";

export const SiteNav = () => {
  const [open, setOpen] = useState(false);
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: 0 },
    );

    navItems.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleNavClick = (id: string) => {
    setOpen(false);
    scrollToSection(id);
  };

  return (
    <header>
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
        <button
          type="button"
          onClick={() => scrollToSection("hero")}
          className="font-serif text-lg tracking-[0.15em] text-navy dark:text-warm-white"
          aria-label={`${property.name} — back to top`}
        >
          {property.name.toUpperCase()}
        </button>

        <nav
          className="hidden items-center gap-1 lg:flex"
          aria-label="Main navigation"
        >
          {navItems.map(({ id, label }) => (
            <button
              key={id}
              type="button"
              onClick={() => handleNavClick(id)}
              className={cn(
                "rounded-md px-3 py-2 text-xs font-medium tracking-wide transition-colors",
                activeId === id
                  ? "text-navy dark:text-gold"
                  : "text-muted-foreground hover:text-navy dark:hover:text-warm-white",
              )}
            >
              {label}
            </button>
          ))}
          <ThemeToggle />
        </nav>

        <div className="flex items-center gap-2 lg:hidden">
          <ThemeToggle />
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setOpen((prev) => !prev)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {open ? (
        <nav
          className="border-t border-border bg-background px-4 py-4 lg:hidden"
          aria-label="Mobile navigation"
        >
          <ul className="grid gap-1">
            {navItems.map(({ id, label }) => (
              <li key={id}>
                <button
                  type="button"
                  onClick={() => handleNavClick(id)}
                  className={cn(
                    "w-full rounded-lg px-4 py-3 text-left text-sm font-medium transition-colors",
                    activeId === id
                      ? "bg-muted text-navy dark:text-gold"
                      : "text-muted-foreground hover:bg-muted/60",
                  )}
                >
                  {label}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      ) : null}
    </header>
  );
};
