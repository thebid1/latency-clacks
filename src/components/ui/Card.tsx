import { cn } from "@/lib/utils";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  variant?: "default" | "glass" | "bordered";
}

export function Card({
  children,
  className,
  hover = true,
  variant = "glass",
}: CardProps) {
  const variants = {
    default: "bg-zinc-900 border border-zinc-800",
    glass: "glass",
    bordered: "bg-transparent border border-zinc-800",
  };

  return (
    <div
      className={cn(
        "rounded-xl overflow-hidden transition-all duration-300",
        hover && "hover:-translate-y-1 hover:border-emerald-500/30 hover:bg-zinc-900/80",
        variants[variant],
        className
      )}
    >
      {children}
    </div>
  );
}

export function CardHeader({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <div className={cn("p-6", className)}>{children}</div>;
}

export function CardContent({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <div className={cn("px-6 pb-6", className)}>{children}</div>;
}

export function CardFooter({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("px-6 py-4 border-t border-zinc-800/50", className)}>
      {children}
    </div>
  );
}
