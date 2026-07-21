"use client";

import { motion } from "framer-motion";

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className={`max-w-2xl ${align === "center" ? "mx-auto text-center" : ""}`}
    >
      {eyebrow && (
        <span className="mb-4 inline-block text-xs font-medium uppercase tracking-[0.2em] text-ligo-yellow">
          {eyebrow}
        </span>
      )}
      <h2 className="text-balance font-display text-3xl font-semibold leading-[1.1] tracking-tightest text-ligo-white sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {description && (
        <p className="mt-5 text-balance text-base leading-relaxed text-ligo-white/60 sm:text-lg">
          {description}
        </p>
      )}
    </motion.div>
  );
}
