"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";

type PlaceholderImageProps = {
  src?: string;
  alt: string;
  label?: string;
  className?: string;
  priority?: boolean;
  fill?: boolean;
  sizes?: string;
};

export const PlaceholderImage = ({
  src,
  alt,
  label,
  className,
  priority = false,
  fill = true,
  sizes = "100vw",
}: PlaceholderImageProps) => {
  if (src?.startsWith("/images/")) {
    return (
      <div className={cn("relative overflow-hidden bg-sand-light", className)}>
        <div
          className="absolute inset-0 bg-gradient-to-br from-sand via-sand-light to-navy/10"
          aria-hidden="true"
        />
        {label ? (
          <span className="absolute bottom-4 left-4 z-10 rounded-full bg-white/80 px-3 py-1 text-xs font-medium text-navy backdrop-blur">
            {label}
          </span>
        ) : null}
        <span className="sr-only">{alt}</span>
      </div>
    );
  }

  if (!src) {
    return (
      <div
        className={cn(
          "relative overflow-hidden bg-gradient-to-br from-sand via-sand-light to-navy/10",
          className,
        )}
        role="img"
        aria-label={alt}
      >
        {label ? (
          <span className="absolute bottom-4 left-4 rounded-full bg-white/80 px-3 py-1 text-xs font-medium text-navy backdrop-blur">
            {label}
          </span>
        ) : null}
      </div>
    );
  }

  return (
    <div className={cn("relative overflow-hidden", className)}>
      <Image
        src={src}
        alt={alt}
        fill={fill}
        priority={priority}
        sizes={sizes}
        className="object-cover"
      />
    </div>
  );
};
