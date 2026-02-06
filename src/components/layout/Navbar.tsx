"use client";

import { useState } from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/utils";
import { Menu, X, Terminal } from "lucide-react";

const navItems = [
  { label: "Work", href: "/projects/" },
  { label: "Media", href: "/media/" },
  { label: "Contact", href: "/contact/" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-40">
      <div className="glass-strong border-b border-zinc-800/50">
        <Container>
          <nav className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 group">
              <div className="relative">
                <Terminal className="w-6 h-6 text-emerald-500 transition-transform group-hover:scale-110" />
                <div className="absolute inset-0 bg-emerald-500/20 blur-xl rounded-full" />
              </div>
              <span className="font-mono font-bold text-lg text-zinc-100">
                the<span className="text-emerald-500">bid</span>
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-1">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className={cn(
                    "px-4 py-2 text-sm font-medium text-zinc-400 hover:text-zinc-100 rounded-lg transition-colors",
                    "hover:bg-zinc-800/50"
                  )}
                >
                  {item.label}
                </Link>
              ))}
              <a
                href="https://github.com/thebid1"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-4 px-4 py-2 text-sm font-medium text-emerald-400 border border-emerald-500/30 rounded-lg hover:bg-emerald-500/10 transition-colors"
              >
                GitHub
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 text-zinc-400 hover:text-zinc-100 rounded-lg hover:bg-zinc-800/50"
              aria-label="Toggle menu"
              aria-expanded={isOpen}
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </nav>
        </Container>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden glass-strong border-b border-zinc-800/50">
          <Container>
            <div className="py-4 space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-4 py-3 text-sm font-medium text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800/50 rounded-lg transition-colors"
                >
                  {item.label}
                </Link>
              ))}
              <a
                href="https://github.com/thebid1"
                target="_blank"
                rel="noopener noreferrer"
                className="block px-4 py-3 mt-2 text-sm font-medium text-emerald-400 border border-emerald-500/30 rounded-lg hover:bg-emerald-500/10 transition-colors"
              >
                GitHub
              </a>
            </div>
          </Container>
        </div>
      )}
    </header>
  );
}
