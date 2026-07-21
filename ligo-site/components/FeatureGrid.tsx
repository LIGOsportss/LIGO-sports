"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import { features } from "@/lib/data";

export default function FeatureGrid() {
  return (
    <section className="relative px-6 py-28 lg:px-10 lg:py-36">
      <div className="mx-auto max-w-content">
        <SectionHeading
          eyebrow="Everything, handled"
          title="Built for how organizers actually run games."
          description="Every feature exists to remove one specific headache from running a community game — nothing added for its own sake."
        />

        <div className="mt-16 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.5,
                delay: (i % 3) * 0.06,
                ease: [0.16, 1, 0.3, 1],
              }}
              whileHover={{ y: -4 }}
              className="group rounded-2xl border border-line bg-surface/40 p-6 transition-colors duration-300 hover:border-ligo-yellow/25 hover:bg-surface/70"
            >
              <feature.icon className="h-5 w-5 text-ligo-yellow" />
              <p className="mt-4 font-display text-base font-medium text-ligo-white">
                {feature.title}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-ligo-white/50">
                {feature.description}
              </p>
            </motion.div>
          ))}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col justify-center rounded-2xl border border-dashed border-line p-6"
          >
            <p className="font-display text-base font-medium text-ligo-white">
              Everything customizable
            </p>
            <p className="mt-2 text-sm leading-relaxed text-ligo-white/50">
              Turn features on or off to match how your community actually plays.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
