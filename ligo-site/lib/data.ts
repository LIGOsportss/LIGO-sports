import {
  FiCheckSquare,
  FiCreditCard,
  FiTarget,
  FiStar,
  FiMapPin,
  FiGrid,
  FiShield,
  FiUserCheck,
  FiUsers,
  FiLock,
  FiClock,
  FiSlash,
  FiVideo,
  FiSliders,
} from "react-icons/fi";
import type { IconType } from "react-icons";

export type Feature = {
  title: string;
  description: string;
  icon: IconType;
};

export const features: Feature[] = [
  {
    title: "QR check-in",
    description: "Scan players in at the door. No roll call, no guesswork.",
    icon: FiCheckSquare,
  },
  {
    title: "Secure payments",
    description: "Collect fees before kickoff, refund fairly when plans change.",
    icon: FiCreditCard,
  },
  {
    title: "Skill matching",
    description: "Group players by level so every game stays competitive.",
    icon: FiTarget,
  },
  {
    title: "Court ratings",
    description: "Real feedback on surface, lighting, and crowd from real players.",
    icon: FiStar,
  },
  {
    title: "Indoor court discovery",
    description: "Find air-conditioned courts nearby, ranked by quality.",
    icon: FiMapPin,
  },
  {
    title: "Organizer dashboard",
    description: "See rosters, payments, and attendance in one screen.",
    icon: FiGrid,
  },
  {
    title: "Player credibility score",
    description: "A track record that follows players across every game.",
    icon: FiShield,
  },
  {
    title: "Age safety restrictions",
    description: "Set age bounds for games that need them.",
    icon: FiUserCheck,
  },
  {
    title: "Self-assessed skill level",
    description: "Players set their own level, honestly and transparently.",
    icon: FiSliders,
  },
  {
    title: "Team creation",
    description: "Build rosters once, reuse them for every season.",
    icon: FiUsers,
  },
  {
    title: "Private matches",
    description: "Invite-only games for your regular crew.",
    icon: FiLock,
  },
  {
    title: "Cancellation penalties",
    description: "Automatic, fair penalties that cut down on no-shows.",
    icon: FiClock,
  },
  {
    title: "No in-app messaging",
    description: "Ligo organizes the game — it doesn't try to be your inbox.",
    icon: FiSlash,
  },
  {
    title: "Video highlights",
    description: "Relive the best moments after every match.",
    icon: FiVideo,
  },
];
