"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

/*
  Sanftes Einblenden beim Scrollen (Scroll-Reveal).
  - blendet Elemente leicht von unten ein, sobald sie in den Blick kommen
  - respektiert "Bewegung reduzieren" im Betriebssystem: dann kein Effekt
  Bewusst als kleine, wiederverwendbare Huelle gebaut.
*/
export function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={reduceMotion ? false : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
