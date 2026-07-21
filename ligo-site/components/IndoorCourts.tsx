"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";

const stats = [
  { value: "33°C+", label: "Average outdoor court temperature in Hong Kong summer" },
  { value: "2.4×", label: "More heat-exhaustion incidents reported in outdoor play" },
  { value: "+40 min", label: "Longer average session length indoors, air-conditioned" },
];

export default function IndoorCourts() {
  return (
    <section className="relative px-6 py-28 lg:px-10 lg:py-36">
      <div className="mx-auto max-w-content">
        <div className="grid gap-16 lg:grid-cols-[1fr_1fr] lg:items-center">
          <SectionHeading
            eyebrow="Why indoor, first"
            title="Hong Kong heat ends games early. Indoor courts don't."
            description="Outdoor sessions in peak summer routinely get cut short by heat exhaustion. Air-conditioned indoor courts keep players safer and games running longer — so we surface and rank the best ones first."
          />

          <div className="flex flex-col gap-3">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="flex items-center gap-6 rounded-2xl border border-line bg-surface/40 p-6"
              >
                <p className="font-display text-3xl font-semibold text-ligo-cyan sm:text-4xl">
                  {stat.value}
                </p>
                <p className="text-sm leading-relaxed text-ligo-white/55">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
