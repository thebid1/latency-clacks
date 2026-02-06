"use client";

import { cn } from "@/lib/utils";
import { Copy, Check } from "lucide-react";
import { useState } from "react";

interface CodeBlockProps {
  code: string;
  language?: string;
  filename?: string;
  className?: string;
}

export function CodeBlock({
  code,
  language = "typescript",
  filename,
  className,
}: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const highlightedCode = code
    .replace(
      /(const|let|var|function|return|if|else|async|await|import|from|export|default|class|interface|type)/g,
      '<span class="text-violet-400">$1</span>'
    )
    .replace(
      /('[^']*'|"[^"]*"|`[^`]*`)/g,
      '<span class="text-emerald-400">$1</span>'
    )
    .replace(
      /(\/\/.*$)/gm,
      '<span class="text-zinc-500">$1</span>'
    )
    .replace(
      /\b(true|false|null|undefined)\b/g,
      '<span class="text-amber-400">$1</span>'
    )
    .replace(
      /\b(\d+)\b/g,
      '<span class="text-orange-400">$1</span>'
    );

  return (
    <div
      className={cn(
        "rounded-lg border border-zinc-800 bg-zinc-950 overflow-hidden",
        className
      )}
    >
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-2.5 bg-zinc-900/50 border-b border-zinc-800">
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-500/80" />
            <div className="w-3 h-3 rounded-full bg-amber-500/80" />
            <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
          </div>
          {filename && (
            <span className="ml-3 text-xs text-zinc-500 font-mono">
              {filename}
            </span>
          )}
        </div>
        <button
          onClick={handleCopy}
          className="p-1.5 rounded-md text-zinc-500 hover:text-zinc-300 hover:bg-zinc-800 transition-colors"
          aria-label="Copy code"
        >
          {copied ? (
            <Check className="w-4 h-4 text-emerald-400" />
          ) : (
            <Copy className="w-4 h-4" />
          )}
        </button>
      </div>

      {/* Code */}
      <div className="relative">
        <pre className="p-4 overflow-x-auto text-sm leading-relaxed">
          <code
            className="font-mono text-zinc-300"
            dangerouslySetInnerHTML={{ __html: highlightedCode }}
          />
        </pre>
      </div>
    </div>
  );
}
