import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";
import AnimatedBackground from "@/components/AnimatedBackground";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ligo — Bound by the Game",
  description:
    "Ligo is the operating system for community sports organizers. Collect payments, verify attendance with QR check-in, match players by skill, and find great indoor courts — all in one place.",
  keywords: [
    "Ligo",
    "sports organizer software",
    "QR check-in sports",
    "indoor court booking",
    "skill matching sports app",
  ],
  openGraph: {
    title: "Ligo — Bound by the Game",
    description:
      "The operating system for community sports organizers.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${inter.variable}`}>
      <body className="has-custom-cursor bg-charcoal font-body antialiased">
        <AnimatedBackground />
        <CustomCursor />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
