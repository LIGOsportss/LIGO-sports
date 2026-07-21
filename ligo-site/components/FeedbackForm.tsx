"use client";

import { useState, FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiCheck } from "react-icons/fi";

const sports = ["Volleyball", "Basketball", "Badminton", "Football", "Running", "Other"];
const sources = ["Instagram", "Friend or teammate", "A court or venue", "Search", "Other"];
const usageOptions = ["Yes, definitely", "Maybe", "Not sure yet"];

const inputClasses =
  "w-full rounded-xl border border-line bg-charcoal-soft/60 px-4 py-3 text-sm text-ligo-white placeholder:text-ligo-white/30 outline-none transition-colors duration-300 focus:border-ligo-yellow/50";

export default function FeedbackForm() {
  const [submitted, setSubmitted] = useState(false);
  const [sport, setSport] = useState("");
  const [source, setSource] = useState("");
  const [usage, setUsage] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="flex flex-col items-center gap-5 rounded-2xl border border-line bg-surface/40 px-8 py-20 text-center"
      >
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-ligo-lime/15">
          <FiCheck className="h-6 w-6 text-ligo-lime" />
        </div>
        <p className="font-display text-2xl font-semibold text-ligo-white">
          Thanks — that helps a lot.
        </p>
        <p className="max-w-sm text-sm text-ligo-white/55">
          We read every response. If we have a follow-up question, we&apos;ll
          reach out directly.
        </p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-8">
      <div className="grid gap-6 sm:grid-cols-2">
        <label className="flex flex-col gap-2">
          <span className="text-sm font-medium text-ligo-white/70">Name</span>
          <input required type="text" name="name" placeholder="Your name" className={inputClasses} />
        </label>
        <label className="flex flex-col gap-2">
          <span className="text-sm font-medium text-ligo-white/70">Country</span>
          <input required type="text" name="country" placeholder="Where you play" className={inputClasses} />
        </label>
      </div>

      <div>
        <span className="text-sm font-medium text-ligo-white/70">Sport</span>
        <div className="mt-3 flex flex-wrap gap-2">
          {sports.map((option) => (
            <button
              type="button"
              key={option}
              onClick={() => setSport(option)}
              className={`rounded-full border px-4 py-2 text-sm transition-colors duration-300 ${
                sport === option
                  ? "border-ligo-yellow bg-ligo-yellow/10 text-ligo-yellow"
                  : "border-line text-ligo-white/60 hover:border-ligo-white/30"
              }`}
            >
              {option}
            </button>
          ))}
        </div>
      </div>

      <div>
        <span className="text-sm font-medium text-ligo-white/70">
          How did you hear about us?
        </span>
        <div className="mt-3 flex flex-wrap gap-2">
          {sources.map((option) => (
            <button
              type="button"
              key={option}
              onClick={() => setSource(option)}
              className={`rounded-full border px-4 py-2 text-sm transition-colors duration-300 ${
                source === option
                  ? "border-ligo-yellow bg-ligo-yellow/10 text-ligo-yellow"
                  : "border-line text-ligo-white/60 hover:border-ligo-white/30"
              }`}
            >
              {option}
            </button>
          ))}
        </div>
      </div>

      <div>
        <span className="text-sm font-medium text-ligo-white/70">
          Would you actually use this?
        </span>
        <div className="mt-3 flex flex-wrap gap-2">
          {usageOptions.map((option) => (
            <button
              type="button"
              key={option}
              onClick={() => setUsage(option)}
              className={`rounded-full border px-4 py-2 text-sm transition-colors duration-300 ${
                usage === option
                  ? "border-ligo-yellow bg-ligo-yellow/10 text-ligo-yellow"
                  : "border-line text-ligo-white/60 hover:border-ligo-white/30"
              }`}
            >
              {option}
            </button>
          ))}
        </div>
      </div>

      <label className="flex flex-col gap-2">
        <span className="text-sm font-medium text-ligo-white/70">
          Biggest frustration organizing sports?
        </span>
        <textarea
          name="frustration"
          rows={4}
          placeholder="Chasing payments, no-shows, finding a court..."
          className={inputClasses}
        />
      </label>

      <label className="flex flex-col gap-2">
        <span className="text-sm font-medium text-ligo-white/70">
          Feature request
        </span>
        <textarea
          name="feature"
          rows={3}
          placeholder="What would make this a must-have for you?"
          className={inputClasses}
        />
      </label>

      <AnimatePresence>
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          type="submit"
          className="mt-2 w-full rounded-full bg-ligo-yellow py-3.5 text-sm font-medium text-charcoal transition-colors duration-300 sm:w-fit sm:px-10"
        >
          Submit
        </motion.button>
      </AnimatePresence>
    </form>
  );
}
