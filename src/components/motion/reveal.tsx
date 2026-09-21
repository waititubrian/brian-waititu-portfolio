"use client";

import { motion, useReducedMotion, type Transition } from "motion/react";
import type { ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  className?: string;
  /** Delay in seconds before the animation starts. */
  delay?: number;
  /** Vertical offset (px) the element animates in from. */
  y?: number;
  once?: boolean;
};

const transition: Transition = { duration: 0.5, ease: [0.21, 0.47, 0.32, 0.98] };

export function Reveal({ children, className, delay = 0, y = 16, once = true }: RevealProps) {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, margin: "-80px" }}
      transition={{ ...transition, delay }}
    >
      {children}
    </motion.div>
  );
}
