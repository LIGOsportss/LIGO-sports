"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FiMapPin, FiCreditCard, FiCheckCircle } from "react-icons/fi";
import { HiQrCode } from "react-icons/hi2";

const screens = [
  {
    label: "Browse matches",
    icon: FiMapPin,
    render: () => (
      <div className="flex h-full flex-col gap-3 p-5">
        <p className="text-xs uppercase tracking-[0.2em] text-ligo-white/40">
          Tonight · Kowloon
        </p>
        {[
          { name: "Sunset Volleyball", meta: "6:30 PM · Intermediate", spots: "3 spots left" },
          { name: "Court 2 Runs", meta: "8:00 PM · All levels", spots: "Full" },
        ].map((m) => (
          <div
            key={m.name}
            className="rounded-2xl border border-line bg-surface/80 p-4"
          >
            <p className="text-sm font-medium text-ligo-white">{m.name}</p>
            <p className="mt-1 text-xs text-ligo-white/50">{m.meta}</p>
            <p className="mt-2 text-xs font-medium text-ligo-lime">{m.spots}</p>
          </div>
        ))}
      </div>
    ),
  },
  {
    label: "Pay",
    icon: FiCreditCard,
    render: () => (
      <div className="flex h-full flex-col items-center justify-center gap-4 p-5 text-center">
        <p className="text-xs uppercase tracking-[0.2em] text-ligo-white/40">
          Sunset Volleyball
        </p>
        <p className="font-display text-4xl font-semibold text-ligo-white">
          HK$80
        </p>
        <div className="mt-2 w-full rounded-full bg-ligo-yellow py-3 text-sm font-medium text-charcoal">
          Confirm &amp; Pay
        </div>
        <p className="text-[11px] text-ligo-white/40">Secured checkout · No-show protected</p>
      </div>
    ),
  },
  {
    label: "Receive QR",
    icon: HiQrCode,
    render: () => (
      <div className="flex h-full flex-col items-center justify-center gap-4 p-5">
        <div className="grid h-32 w-32 grid-cols-5 grid-rows-5 gap-1 rounded-xl bg-ligo-white p-3">
          {Array.from({ length: 25 }).map((_, i) => (
            <span
              key={i}
              className={`rounded-[2px] ${
                [0, 2, 4, 6, 8, 12, 16, 18, 20, 22, 24].includes(i)
                  ? "bg-charcoal"
                  : "bg-transparent"
              }`}
            />
          ))}
        </div>
        <p className="text-sm font-medium text-ligo-white">You&apos;re in</p>
        <p className="text-xs text-ligo-white/50">Show this at check-in</p>
      </div>
    ),
  },
  {
    label: "Organizer scans",
    icon: FiCheckCircle,
    render: () => (
      <div className="flex h-full flex-col items-center justify-center gap-4 p-5 text-center">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-ligo-lime/15">
          <FiCheckCircle className="h-8 w-8 text-ligo-lime" />
        </div>
        <p className="text-sm font-medium text-ligo-white">Attendance verified</p>
        <p className="text-xs text-ligo-white/50">14 of 16 players checked in</p>
      </div>
    ),
  },
];

export default function AppMockup() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setActive((prev) => (prev + 1) % screens.length);
    }, 2800);
    return () => clearInterval(id);
  }, []);

  const ActiveScreen = screens[active];

  return (
    <div className="relative">
      <div className="relative h-[560px] w-[280px] overflow-hidden rounded-[2.75rem] border border-line bg-surface/60 shadow-[0_0_80px_-20px_rgba(244,197,30,0.15)] backdrop-blur-xl sm:h-[600px] sm:w-[300px]">
        <div className="absolute left-1/2 top-3 z-10 h-6 w-24 -translate-x-1/2 rounded-full bg-charcoal" />
        <div className="flex h-14 items-center justify-center border-b border-line">
          <p className="text-xs font-medium text-ligo-white/60">
            {ActiveScreen.label}
          </p>
        </div>
        <div className="h-[calc(100%-3.5rem)]">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="h-full"
            >
              {ActiveScreen.render()}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      <div className="mt-6 flex items-center justify-center gap-2">
        {screens.map((s, i) => (
          <button
            key={s.label}
            aria-label={`Show ${s.label} screen`}
            onClick={() => setActive(i)}
            className="group flex flex-col items-center gap-2"
          >
            <span
              className={`h-1.5 rounded-full transition-all duration-500 ${
                i === active ? "w-6 bg-ligo-yellow" : "w-1.5 bg-ligo-white/20"
              }`}
            />
          </button>
        ))}
      </div>
    </div>
  );
}
