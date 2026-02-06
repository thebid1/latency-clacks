"use client";

import { Container } from "@/components/ui/Container";
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { ArrowRight, MessageCircle } from "lucide-react";
import Link from "next/link";
import { projects } from "@/lib/projects";

export function FeaturedProjects() {
  const featuredProjects = projects.slice(0, 3);

  return (
    <section className="py-24">
      <Container>
        <div className="flex items-end justify-between mb-12">
          <div>
            <h2 className="text-2xl font-bold text-zinc-100 mb-2 font-mono">
              Selected Work
            </h2>
            <p className="text-zinc-500">
              Production-grade systems I&apos;ve built
            </p>
          </div>
          <Link
            href="/projects/"
            className="hidden sm:flex items-center gap-2 text-sm text-emerald-400 hover:text-emerald-300 transition-colors"
          >
            View all projects
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredProjects.map((project) => (
            <Card key={project.slug} className="h-full flex flex-col group">
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-emerald-500/20 to-violet-500/20 flex items-center justify-center text-2xl">
                    {project.icon}
                  </div>
                  <Badge variant={project.status === "Building" ? "amber" : "emerald"}>
                    {project.status}
                  </Badge>
                </div>
                <h3 className="text-xl font-bold text-zinc-100 mb-2 group-hover:text-emerald-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-zinc-400 line-clamp-2">
                  {project.description}
                </p>
              </CardHeader>

              <CardContent className="flex-1">
                <div className="flex flex-wrap gap-2">
                  {project.technologies.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-2 py-1 rounded-md bg-zinc-800 text-zinc-400 font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </CardContent>

              <CardFooter className="flex items-center gap-3">
                <Link href={`/projects/${project.slug}/`} className="flex-1">
                  <Button variant="secondary" className="w-full text-sm">
                    Case Study
                  </Button>
                </Link>
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-lg border border-zinc-700 text-zinc-400 hover:text-emerald-400 hover:border-emerald-500/30 transition-colors"
                    aria-label="Open bot in Telegram"
                  >
                    <MessageCircle className="w-4 h-4" />
                  </a>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="mt-8 text-center sm:hidden">
          <Link href="/projects/">
            <Button variant="terminal" size="sm">
              View all projects
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </Link>
        </div>
      </Container>
    </section>
  );
}
