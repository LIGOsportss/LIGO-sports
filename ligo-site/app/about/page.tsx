"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";

const roadmap = [
  { sport: "Volleyball", status: "Live", detail: "Where Ligo started — indoor courts, tight-knit communities." },
  { sport: "Basketball", status: "Next", detail: "Pickup runs and league nights, organized the same way." },
  { sport: "Badminton", status: "Planned", detail: "Court-heavy, schedule-heavy — built for Ligo." },
  { sport: "Football", status: "Planned", detail: "Bigger rosters, same infrastructure underneath." },
  { sport: "Running", status: "Planned", detail: "Group runs, verified attendance, no courts required." },
];

export default function AboutPage() {
  return (
    <div className="px-6 pb-28 pt-40 lg:px-10 lg:pt-52">
      <div className="mx-auto max-w-content">
        <SectionHeading
          eyebrow="About Ligo"
          title="We aren't building another sports social platform."
          description="We're building the operating system for community sports — the infrastructure organizers use to run better games, without the noise of a social feed."
        />

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mt-16 max-w-3xl rounded-2xl border border-line bg-surface/40 p-8 lg:p-10"
        >
          <p className="font-display text-xl font-medium leading-relaxed text-ligo-white lg:text-2xl">
            Every community has an organizer — the person collecting cash in a
            group chat, chasing no-shows, and guessing who&apos;s actually
            coming. Ligo replaces the guesswork with infrastructure: payments,
            verified attendance, skill matching, and court discovery, so
            organizing takes minutes instead of hours.
          </p>
        </motion.div>

        <div className="mt-28">
          <SectionHeading eyebrow="Where we're headed" title="Starting with volleyball. Built for every sport." />

          <div className="mt-14 flex flex-col">
            {roadmap.map((item, i) => (
              <motion.div
                key={item.sport}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
                className="flex items-center gap-6 border-b border-line py-6 last:border-none"
              >
                <span className="w-8 shrink-0 font-display text-sm text-ligo-white/30">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="flex-1">
                  <p className="font-display text-lg font-medium text-ligo-white sm:text-xl">
                    {item.sport}
                  </p>
                  <p className="mt-1 text-sm text-ligo-white/50">{item.detail}</p>
                </div>
                <span
                  className={`shrink-0 rounded-full border px-3 py-1 text-xs font-medium ${
                    item.status === "Live"
                      ? "border-ligo-lime/30 text-ligo-lime"
                      : item.status === "Next"
                      ? "border-ligo-yellow/30 text-ligo-yellow"
                      : "border-line text-ligo-white/40"
                  }`}
                >
                  {item.status}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
