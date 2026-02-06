import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "emerald" | "violet" | "outline" | "glow" | "amber";
  className?: string;
}

export function Badge({
  children,
  variant = "default",
  className,
}: BadgeProps) {
  const variants = {
    default: "bg-zinc-800 text-zinc-300 border-zinc-700",
    emerald:
      "bg-emerald-500/10 text-emerald-400 border-emerald-500/30",
    amber:
      "bg-amber-500/10 text-amber-400 border-amber-500/30",
    violet: "bg-violet-500/10 text-violet-400 border-violet-500/30",
    outline: "bg-transparent text-zinc-400 border-zinc-700",
    glow: "bg-emerald-500/20 text-emerald-400 border-emerald-400/50 shadow-[0_0_10px_rgba(16,185,129,0.3)]",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border",
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
