"use client";

import { motion } from "framer-motion";
import { FiX, FiCheck } from "react-icons/fi";
import SectionHeading from "@/components/SectionHeading";

const misconceptions = [
  {
    label: "Another social feed",
    detail: "Scroll, like, repeat — with no game to show for it.",
  },
  {
    label: "Another messaging app",
    detail: "Group chats that lose track of who's actually showing up.",
  },
  {
    label: "A dating app for sports",
    detail: "Swiping dressed up as \"finding a game.\"",
  },
];

export default function ProblemSection() {
  return (
    <section className="relative px-6 py-28 lg:px-10 lg:py-36">
      <div className="mx-auto max-w-content">
        <SectionHeading
          eyebrow="Let's clear this up"
          title="I think most people misunderstand what Ligo is."
        />

        <div className="mt-16 grid gap-4 lg:grid-cols-3">
          {misconceptions.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="rounded-2xl border border-line bg-surface/50 p-6"
            >
              <div className="flex h-9 w-9 items-center justify-center rounded-full border border-line">
                <FiX className="h-4 w-4 text-ligo-white/40" />
              </div>
              <p className="mt-5 font-display text-lg font-medium text-ligo-white/70 line-through decoration-ligo-white/20">
                {item.label}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-ligo-white/45">
                {item.detail}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="relative mt-6 overflow-hidden rounded-2xl border border-ligo-yellow/30 bg-gradient-to-br from-ligo-yellow/[0.08] to-transparent p-8 lg:p-10"
        >
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-ligo-yellow">
            <FiCheck className="h-4 w-4 text-charcoal" />
          </div>
          <p className="mt-5 font-display text-2xl font-semibold text-ligo-white lg:text-3xl">
            Ligo is the operating system for community sports organizers.
          </p>
          <p className="mt-3 max-w-xl text-sm leading-relaxed text-ligo-white/55 lg:text-base">
            Payments, attendance, skill matching, and court discovery — the
            infrastructure behind every great game, handled before the
            whistle blows.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
