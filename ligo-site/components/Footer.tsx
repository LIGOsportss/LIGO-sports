import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-line">
      <div className="mx-auto flex max-w-content flex-col gap-6 px-6 py-10 text-sm text-ligo-white/50 sm:flex-row sm:items-center sm:justify-between lg:px-10">
        <p className="font-display text-base text-ligo-white/80">Ligo</p>
        <p>Bound by the Game. Built for organizers, made for players.</p>
        <div className="flex gap-6">
          <Link href="/about" className="hover:text-ligo-white transition-colors">
            About
          </Link>
          <Link href="/feedback" className="hover:text-ligo-white transition-colors">
            Feedback
          </Link>
        </div>
      </div>
    </footer>
  );
}
