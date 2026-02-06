import { Project, ProjectStatus } from "@/types";

export type { Project, ProjectStatus };

export const projects: Project[] = [
  {
    slug: "master-splinter",
    title: "Master Splinter",
    description:
      "High-frequency Telegram bot monitoring Dexscreener for new token launches with real-time alerts and smart filtering.",
    longDescription:
      "An automated monitoring system that tracks new token pairs on decentralized exchanges, filtering noise to surface high-potential opportunities within seconds of launch.",
    technologies: [
      "TypeScript",
      "Node.js",
      "Telegram API",
      "Dexscreener API",
      "Redis",
      "Railway",
    ],
    status: "Live",
    icon: "📡",
    liveUrl: "https://t.me/bidanalyzebot",
    featured: true,
  },
  {
    slug: "octa-enigma",
    title: "Octa Enigma",
    description:
      "Advanced price action tracking with multiplier detection, caching strategies, and event-driven architecture.",
    longDescription:
      "A sophisticated monitoring engine that tracks token dexprice movements, detects significant multipliers, and delivers instant notifications to subscribers.",
    technologies: [
      "TypeScript",
      "WebSocket",
      "PostgreSQL",
      "Bull Queue",
      "Docker",
    ],
    status: "Live",
    icon: "📊",
    liveUrl: "https://t.me/octoenigmabot",
    featured: true,
  },
  {
    slug: "snoopers-tenfold",
    title: "Snoopers Tenfold",
    description:
      "Risk-free trading simulation with state management, simulated order book, and performance analytics.",
    longDescription:
      "A comprehensive paper trading platform that allows users to test strategies without real capital, featuring realistic market simulation and detailed analytics.",
    technologies: [
      "Next.js",
      "TypeScript",
      "Prisma",
      "PostgreSQL",
      "Chart.js",
    ],
    status: "Live",
    icon: "📈",
    liveUrl: "https://t.me/snooperstenbot",
    featured: true,
  },
  {
    slug: "nft-auction",
    title: "Private NFT Auction dApp",
    description:
      "Full-stack NFT marketplace with sealed-bid auctions, on-chain settlement, and IPFS metadata storage.",
    longDescription:
      "A decentralized auction platform for NFTs featuring private bids revealed only at auction end, ensuring fair price discovery without front-running.",
    technologies: [
      "Solidity",
      "Hardhat",
      "Ethers.js",
      "Next.js",
      "IPFS",
      "The Graph",
    ],
    status: "Building",
    icon: "🎨",
    featured: true,
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getAllProjects(): Project[] {
  return projects;
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((p) => p.featured);
}
