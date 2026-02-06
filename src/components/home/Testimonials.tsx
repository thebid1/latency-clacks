"use client";

import { Container } from "@/components/ui/Container";
import { Card, CardContent } from "@/components/ui/Card";
import { Quote, Twitter } from "lucide-react";

interface Testimonial {
  id: string;
  name: string;
  handle: string;
  platform: "X" | "Other";
  content: string;
}

const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Mickyblizz0",
    handle: "@Mickyblizz0",
    platform: "X",
    content:
      "Yo thanks for that tg tool, i just caught $PENGUIN, and i'm up crazyyyy",
  },
  {
    id: "2",
    name: "CampusSafeAfrica",
    handle: "@CampusSafeAfrica",
    platform: "Other",
    content:
      "Excellent Aminu, you've cut our cost of hiring video editor, and surprisingly you do so real fast",
  },
];

export function Testimonials() {
  return (
    <section className="py-24 border-t border-zinc-800/50">
      <Container>
        <div className="mb-12 text-center">
          <h2 className="text-2xl font-bold text-zinc-100 mb-2 font-mono">
            Feedback
          </h2>
          <p className="text-zinc-500">What people are saying</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="h-full" hover>
              <CardContent className="p-6">
                {/* Quote Icon */}
                <Quote className="w-8 h-8 text-emerald-500/30 mb-4" />

                {/* Content */}
                <p className="text-zinc-300 mb-6 leading-relaxed text-lg">
                  &ldquo;{testimonial.content}&rdquo;
                </p>

                {/* Author */}
                <div className="flex items-center gap-3 pt-4 border-t border-zinc-800">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-emerald-500/20 to-violet-500/20 flex items-center justify-center text-sm font-bold text-zinc-400">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-medium text-zinc-200">
                      {testimonial.name}
                    </div>
                    <div className="text-xs text-zinc-500 flex items-center gap-1">
                      {testimonial.platform === "X" && (
                        <Twitter className="w-3 h-3" />
                      )}
                      {testimonial.handle}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
