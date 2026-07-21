"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/feedback", label: "Feedback" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="fixed inset-x-0 top-0 z-50"
    >
      <div className="mx-auto flex max-w-content items-center justify-between px-6 py-5 lg:px-10">
        <Link
          href="/"
          className="font-display text-xl font-semibold tracking-tight text-ligo-white"
        >
          Ligo
        </Link>

        <nav className="hidden items-center gap-8 rounded-full border border-line bg-charcoal-soft/60 px-6 py-2.5 backdrop-blur-md md:flex">
          {links.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative text-sm transition-colors duration-300 ${
                  active
                    ? "text-ligo-white"
                    : "text-ligo-white/55 hover:text-ligo-white"
                }`}
              >
                {link.label}
                {active && (
                  <motion.span
                    layoutId="nav-active"
                    className="absolute -bottom-1 left-0 right-0 h-px bg-ligo-yellow"
                  />
                )}
              </Link>
            );
          })}
        </nav>

        <Link
          href="/feedback"
          className="rounded-full bg-ligo-yellow px-5 py-2.5 text-sm font-medium text-charcoal transition-transform duration-300 ease-premium hover:scale-[1.04] active:scale-[0.98]"
        >
          Join Waitlist
        </Link>
      </div>
    </motion.header>
  );
}
