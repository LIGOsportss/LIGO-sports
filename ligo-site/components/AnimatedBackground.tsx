"use client";

import { motion } from "framer-motion";

const orbs = [
  {
    color: "#F4C51E",
    size: 560,
    top: "-10%",
    left: "8%",
    duration: 26,
    opacity: 0.14,
  },
  {
    color: "#49E3C4",
    size: 460,
    top: "35%",
    left: "70%",
    duration: 32,
    opacity: 0.1,
  },
  {
    color: "#C7F24B",
    size: 380,
    top: "68%",
    left: "18%",
    duration: 30,
    opacity: 0.08,
  },
];

export default function AnimatedBackground() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden bg-charcoal"
    >
      {orbs.map((orb, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full blur-[120px] will-change-transform"
          style={{
            width: orb.size,
            height: orb.size,
            top: orb.top,
            left: orb.left,
            backgroundColor: orb.color,
            opacity: orb.opacity,
          }}
          animate={{
            x: [0, 60, -40, 0],
            y: [0, -50, 30, 0],
          }}
          transition={{
            duration: orb.duration,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "radial-gradient(circle, #F6F3EC 1px, transparent 1px)",
          backgroundSize: "34px 34px",
        }}
      />

      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-charcoal/60" />
    </div>
  );
}
