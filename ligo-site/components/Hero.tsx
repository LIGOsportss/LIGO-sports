"use client";

import { motion } from "framer-motion";
import { FiPlay, FiArrowUpRight } from "react-icons/fi";
import AppMockup from "@/components/AppMockup";

const ease = [0.16, 1, 0.3, 1] as const;

export default function Hero() {
  return (
    <section className="relative overflow-hidden px-6 pb-16 pt-40 lg:px-10 lg:pt-52">
      <div className="mx-auto max-w-content">
        <div className="flex flex-col items-start">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease }}
            className="mb-8 inline-flex items-center gap-2 rounded-full border border-line px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-ligo-white/60"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-ligo-lime" />
            Now onboarding organizers
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease, delay: 0.05 }}
            className="font-display text-[15vw] font-semibold leading-[0.9] tracking-tightest text-ligo-white sm:text-[9rem] lg:text-[10rem]"
          >
            Ligo
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease, delay: 0.15 }}
            className="mt-4 font-display text-2xl font-medium text-ligo-yellow sm:text-3xl"
          >
            Bound by the Game.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease, delay: 0.25 }}
            className="mt-6 max-w-xl text-balance text-lg leading-relaxed text-ligo-white/60"
          >
            Ligo is the operating system for community sports organizers.
            Collect payments, verify attendance, match players by skill, and
            find great indoor courts — so you spend less time organizing and
            more time playing.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease, delay: 0.35 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <button className="group flex items-center gap-2 rounded-full border border-line px-6 py-3.5 text-sm font-medium text-ligo-white transition-colors duration-300 hover:border-ligo-white/30">
              <FiPlay className="text-ligo-white/70 transition-transform duration-300 group-hover:scale-110" />
              Watch Demo
            </button>
            <button className="group flex items-center gap-2 rounded-full bg-ligo-yellow px-6 py-3.5 text-sm font-medium text-charcoal transition-transform duration-300 ease-premium hover:scale-[1.03] active:scale-[0.98]">
              Join Waitlist
              <FiArrowUpRight className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease, delay: 0.45 }}
          className="mt-20 flex justify-center lg:mt-28"
        >
          <AppMockup />
        </motion.div>
      </div>
    </section>
  );
}
