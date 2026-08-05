"use client";

import { motion, useReducedMotion, Variants } from "framer-motion";
import { ReactNode } from "react";

interface AnimateInProps {
  children: ReactNode;
  className?: string;
  /** Stagger delay in seconds, useful when animating a list of siblings */
  delay?: number;
  direction?: "up" | "left" | "right" | "none";
  as?: "div" | "li";
}

const offsets = {
  up: { y: 28, x: 0 },
  left: { y: 0, x: -28 },
  right: { y: 0, x: 28 },
  none: { y: 0, x: 0 },
};

export function AnimateIn({
  children,
  className,
  delay = 0,
  direction = "up",
  as = "div",
}: AnimateInProps) {
  const shouldReduceMotion = useReducedMotion();
  const offset = offsets[direction];

  const variants: Variants = {
    hidden: {
      opacity: 0,
      y: shouldReduceMotion ? 0 : offset.y,
      x: shouldReduceMotion ? 0 : offset.x,
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: {
        duration: 0.6,
        delay,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const MotionTag = as === "li" ? motion.li : motion.div;

  return (
    <MotionTag
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={variants}
    >
      {children}
    </MotionTag>
  );
}
