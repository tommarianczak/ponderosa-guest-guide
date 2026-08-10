"use client";

import { useEffect, useId, useRef, useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { navGroups, navItems } from "@/data/navigation";
import { property } from "@/data/property";
import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import { cn, scrollToSection } from "@/lib/utils";

export const SiteNav = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openGroupId, setOpenGroupId] = useState<string | null>(null);
  const [activeId, setActiveId] = useState<string>("");
  const desktopNavRef = useRef<HTMLElement>(null);
  const menuId = useId();

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

  useEffect(() => {
    if (!openGroupId) return;

    const handlePointerDown = (event: MouseEvent) => {
      if (!desktopNavRef.current?.contains(event.target as Node)) {
        setOpenGroupId(null);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpenGroupId(null);
      }
    };

    document.addEventListener("mousedown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("mousedown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [openGroupId]);

  const handleNavClick = (id: string) => {
    setMobileOpen(false);
    setOpenGroupId(null);
    scrollToSection(id);
  };

  const activeGroupId =
    navGroups.find((group) =>
      group.items.some((item) => item.id === activeId),
    )?.id ?? null;

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
          ref={desktopNavRef}
          className="hidden items-center gap-1 lg:flex"
          aria-label="Main navigation"
        >
          {navGroups.map((group) => {
            const isOpen = openGroupId === group.id;
            const isActiveGroup = activeGroupId === group.id;
            const panelId = `${menuId}-${group.id}`;

            return (
              <div key={group.id} className="relative">
                <button
                  type="button"
                  onClick={() =>
                    setOpenGroupId((current) =>
                      current === group.id ? null : group.id,
                    )
                  }
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  className={cn(
                    "inline-flex items-center gap-1 rounded-md px-3 py-2 text-xs font-medium tracking-wide transition-colors",
                    isActiveGroup || isOpen
                      ? "text-navy dark:text-gold"
                      : "text-muted-foreground hover:text-navy dark:hover:text-warm-white",
                  )}
                >
                  {group.label}
                  <ChevronDown
                    className={cn(
                      "h-3.5 w-3.5 transition-transform",
                      isOpen && "rotate-180",
                    )}
                    aria-hidden="true"
                  />
                </button>

                {isOpen ? (
                  <div
                    id={panelId}
                    role="menu"
                    aria-label={group.label}
                    className="absolute left-0 top-full z-50 mt-2 min-w-[12rem] rounded-xl border border-border/80 bg-background p-1.5 shadow-lg"
                  >
                    {group.items.map((item) => (
                      <button
                        key={item.id}
                        type="button"
                        role="menuitem"
                        onClick={() => handleNavClick(item.id)}
                        className={cn(
                          "flex w-full rounded-lg px-3 py-2.5 text-left text-sm transition-colors",
                          activeId === item.id
                            ? "bg-muted text-navy dark:text-gold"
                            : "text-muted-foreground hover:bg-muted/70 hover:text-navy dark:hover:text-warm-white",
                        )}
                      >
                        {item.label}
                      </button>
                    ))}
                  </div>
                ) : null}
              </div>
            );
          })}
          <ThemeToggle />
        </nav>

        <div className="flex items-center gap-2 lg:hidden">
          <ThemeToggle />
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </Button>
        </div>
      </div>

      {mobileOpen ? (
        <nav
          className="border-t border-border bg-background px-4 py-4 lg:hidden"
          aria-label="Mobile navigation"
        >
          <div className="grid gap-5">
            {navGroups.map((group) => (
              <div key={group.id}>
                <p className="px-4 text-[11px] font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                  {group.label}
                </p>
                <ul className="mt-2 grid gap-1">
                  {group.items.map((item) => (
                    <li key={item.id}>
                      <button
                        type="button"
                        onClick={() => handleNavClick(item.id)}
                        className={cn(
                          "w-full rounded-lg px-4 py-3 text-left text-sm font-medium transition-colors",
                          activeId === item.id
                            ? "bg-muted text-navy dark:text-gold"
                            : "text-muted-foreground hover:bg-muted/60",
                        )}
                      >
                        {item.label}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </nav>
      ) : null}
    </header>
  );
};
