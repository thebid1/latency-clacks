"use client";

import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { ArrowRight, Zap } from "lucide-react";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-emerald-500/5 via-transparent to-transparent" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none" />

      <Container className="relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-900/80 border border-zinc-800 mb-8">
            <span className="status-dot" />
            <span className="text-sm text-zinc-400 font-mono">
              Available for new projects
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-zinc-100 mb-6">
            <span className="block">Web3 Full-Stack Developer</span>
            <span className="block mt-2">
              <span className="text-emerald-500 terminal-glow">
                Building Web3 Solutions
              </span>
            </span>
          </h1>

          {/* Tech Stack Line */}
          <div className="flex items-center justify-center gap-2 text-sm text-zinc-500 font-mono mb-10">
            <Zap className="w-4 h-4 text-emerald-500" />
            <span>Solidity</span>
            <span className="text-zinc-700">|</span>
            <span>Rust</span>
            <span className="text-zinc-700">|</span>
            <span>TypeScript</span>
            <span className="text-zinc-700">|</span>
            <span>400ms Latency</span>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/projects/">
              <Button variant="primary" size="lg" className="group">
                View Systems
                <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
            <Link href="/contact/">
              <Button variant="terminal" size="lg">
                $ contact --init
              </Button>
            </Link>
          </div>
        </div>
      </Container>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="w-6 h-10 rounded-full border-2 border-zinc-700 flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-emerald-500 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
}
