"use client";

import { Container } from "@/components/ui/Container";
import { Activity, Clock, Users, TrendingUp } from "lucide-react";

interface Metric {
  label: string;
  value: string;
  subtext: string;
  icon: React.ElementType;
}

const metrics: Metric[] = [
  {
    label: "System Uptime",
    value: "99.9%",
    subtext: "Last 30 days",
    icon: Activity,
  },
  {
    label: "Alert Latency",
    value: "<400ms",
    subtext: "Average response",
    icon: Clock,
  },
  {
    label: "Active Users",
    value: "7",
    subtext: "Bot subscribers",
    icon: Users,
  },
  {
    label: "Transactions",
    value: "50K+",
    subtext: "Processed monthly",
    icon: TrendingUp,
  },
];

export function MetricsGrid() {
  return (
    <section className="py-24 relative">
      <Container>
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-zinc-100 mb-2 font-mono">
            Trust Battery
          </h2>
          <p className="text-zinc-500">
            Operational metrics from live systems
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {metrics.map((metric) => {
            const Icon = metric.icon;
            return (
              <div
                key={metric.label}
                className="group relative glass rounded-xl p-6 h-full transition-all duration-300 hover:border-emerald-500/30 hover:bg-zinc-900/80"
              >
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity" />

                <div className="relative">
                  {/* Icon */}
                  <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-emerald-500/10 text-emerald-500 mb-4">
                    <Icon className="w-5 h-5" />
                  </div>

                  {/* Value */}
                  <div className="text-3xl font-bold text-zinc-100 mb-1 font-mono">
                    {metric.value}
                  </div>

                  {/* Label */}
                  <div className="text-sm text-zinc-400 mb-1">
                    {metric.label}
                  </div>

                  {/* Subtext */}
                  <div className="text-xs text-zinc-600 font-mono">
                    {metric.subtext}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
