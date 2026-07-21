"use client";

import { motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";

export default function CTASection() {
  return (
    <section className="relative px-6 py-28 lg:px-10 lg:py-36">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="mx-auto max-w-content rounded-3xl border border-line bg-surface/40 px-8 py-16 text-center lg:px-16 lg:py-20"
      >
        <h2 className="text-balance font-display text-3xl font-semibold leading-[1.1] tracking-tightest text-ligo-white sm:text-4xl lg:text-5xl">
          Spend less time organizing.
          <br />
          Spend more time playing.
        </h2>
        <p className="mx-auto mt-5 max-w-md text-balance text-ligo-white/55">
          Ligo is opening to community volleyball organizers first. Join the
          waitlist to get early access.
        </p>
        <div className="mt-9 flex justify-center">
          <button className="group flex items-center gap-2 rounded-full bg-ligo-yellow px-7 py-3.5 text-sm font-medium text-charcoal transition-transform duration-300 ease-premium hover:scale-[1.03] active:scale-[0.98]">
            Join Waitlist
            <FiArrowUpRight className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>
        </div>
      </motion.div>
    </section>
  );
}
