"use client";

import { useEffect, useState } from "react";

interface TechItem {
  name: string;
  category: string;
}

const technologies: TechItem[] = [
  { name: "Solidity", category: "Blockchain" },
  { name: "Rust", category: "Systems" },
  { name: "TypeScript", category: "Frontend" },
  { name: "Node.js", category: "Backend" },
  { name: "Next.js", category: "Frontend" },
  { name: "Telegram API", category: "Integration" },
  { name: "Remotion", category: "Video" },
  { name: "Railway", category: "DevOps" },
  { name: "Supabase", category: "Database" },
  { name: "Ethers.js", category: "Blockchain" },
  { name: "Hardhat", category: "Tooling" },
  { name: "Docker", category: "DevOps" },
  { name: "Shell", category: "Linux" },
];

// Double the array for seamless loop
const doubledTech = [...technologies, ...technologies];

export function TechTicker() {
  // Prevent hydration mismatch by only rendering animation on client
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <section className="py-16 overflow-hidden border-y border-zinc-800/50 bg-zinc-950/50">
      <div className="mb-8 text-center">
        <span className="text-xs font-mono text-zinc-500 uppercase tracking-widest">
          Tech Stack
        </span>
      </div>

      <div className="relative">
        {/* Gradient Masks */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-zinc-950 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-zinc-950 to-transparent z-10 pointer-events-none" />

        {/* Ticker - only animate on client to prevent hydration mismatch */}
        <div 
          className="flex"
          style={isClient ? { animation: "ticker 30s linear infinite" } : undefined}
        >
          {doubledTech.map((tech, index) => (
            <div
              key={`${tech.name}-${index}`}
              className="flex-shrink-0 mx-4"
            >
              <div className="flex items-center gap-3 px-5 py-3 rounded-lg border border-zinc-800 bg-zinc-900/30 hover:border-emerald-500/30 hover:bg-zinc-900/50 transition-colors">
                <span className="text-sm font-medium text-zinc-300">
                  {tech.name}
                </span>
                <span className="text-xs text-zinc-600 font-mono">
                  {tech.category}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
