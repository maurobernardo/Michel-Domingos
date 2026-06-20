"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

type SectionProps = {
  id: string;
  eyebrow: string;
  title: string;
  description?: string;
  children: ReactNode;
  className?: string;
};

export function Section({
  id,
  eyebrow,
  title,
  description,
  children,
  className = "",
}: SectionProps) {
  return (
    <section id={id} className={`relative px-4 py-16 sm:px-6 sm:py-20 lg:px-8 ${className}`}>
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.65, ease: "easeOut" }}
          className="mx-auto mb-10 max-w-3xl text-center sm:mb-12"
        >
          <p className="mx-auto mb-4 inline-flex rounded-full border border-violet-300/70 bg-white/60 px-4 py-2 text-xs font-black uppercase tracking-[0.24em] text-violet-600 shadow-lg shadow-violet-950/5 backdrop-blur-xl dark:border-violet-400/50 dark:bg-white/10 dark:text-violet-300 sm:text-sm">
            {eyebrow}
          </p>
          <h2 className="text-3xl font-black tracking-tight text-violet-950 dark:text-white sm:text-4xl lg:text-5xl">
            {title}
          </h2>
          {description ? (
            <p className="mt-5 text-base leading-8 text-slate-600 dark:text-violet-100/75 sm:text-lg">
              {description}
            </p>
          ) : null}
        </motion.div>
        {children}
      </div>
    </section>
  );
}
