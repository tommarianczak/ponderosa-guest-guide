"use client";

import { motion, useInView, useReducedMotion } from "framer-motion";
import { useEffect, useLayoutEffect, useRef, useState, type ReactNode } from "react";

type FadeInProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  /** Skip scroll detection — use inside tabs, modals, etc. */
  immediate?: boolean;
};

const isElementInViewport = (element: HTMLElement): boolean => {
  const rect = element.getBoundingClientRect();
  return rect.top < window.innerHeight && rect.bottom > 0;
};

export const FadeIn = ({
  children,
  className,
  delay = 0,
  immediate = false,
}: FadeInProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.01 });
  const [isVisible, setIsVisible] = useState(immediate);
  const prefersReducedMotion = useReducedMotion();

  useLayoutEffect(() => {
    if (immediate) {
      setIsVisible(true);
      return;
    }

    const element = ref.current;
    if (element && isElementInViewport(element)) {
      setIsVisible(true);
    }
  }, [immediate]);

  useEffect(() => {
    if (isInView) {
      setIsVisible(true);
    }
  }, [isInView]);

  if (prefersReducedMotion || immediate) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 24 }}
      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
};
