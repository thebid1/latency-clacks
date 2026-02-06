"use client";

import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Github, Twitter, MessageCircle, Terminal } from "lucide-react";

const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/thebid1",
    icon: Github,
  },
  {
    label: "X (Twitter)",
    href: "https://x.com/thebidfr_",
    icon: Twitter,
  },
  {
    label: "Telegram",
    href: "https://t.me/thebidfr",
    icon: MessageCircle,
  },
];

export function Footer() {
  return (
    <footer className="border-t border-zinc-800/50 bg-zinc-950/50">
      <Container>
        <div className="py-12 md:py-16">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            {/* Logo & Tagline */}
            <div className="flex flex-col items-center md:items-start gap-2">
              <Link href="/" className="flex items-center gap-2 group">
                <Terminal className="w-5 h-5 text-emerald-500" />
                <span className="font-mono font-bold text-zinc-100">
                  the<span className="text-emerald-500">bid</span>
                </span>
              </Link>
              <p className="text-sm text-zinc-500">
                Built with Next.js & Web3 passion.
              </p>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              {socialLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 text-zinc-500 hover:text-emerald-400 hover:bg-zinc-800/50 rounded-lg transition-colors"
                    aria-label={link.label}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-12 pt-8 border-t border-zinc-800/50 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-zinc-600">
              &copy; {new Date().getFullYear()} thebid. All rights reserved.
            </p>
            <div className="flex items-center gap-2">
              <span className="status-dot" />
              <span className="text-xs text-zinc-500 font-mono">
                Systems Operational
              </span>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
