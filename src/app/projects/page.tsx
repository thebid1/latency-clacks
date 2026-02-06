import { Container } from "@/components/ui/Container";
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { ArrowRight, MessageCircle } from "lucide-react";
import Link from "next/link";
import { getAllProjects } from "@/lib/mdx";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects | thebid",
  description: "Production-grade Web3 systems and automation tools I've built.",
};

export default function ProjectsPage() {
  const projects = getAllProjects();

  return (
    <div className="pt-32 pb-24">
      <Container>
        {/* Header */}
        <div className="mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-zinc-100 mb-4 font-mono">
            Projects
          </h1>
          <p className="text-lg text-zinc-400 max-w-2xl">
            Production-grade systems demonstrating expertise in smart contract
            development, high-frequency automation, and full-stack Web3
            applications. All bots are live and operational.
          </p>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <Card key={project.slug} className="h-full flex flex-col group">
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-emerald-500/20 to-violet-500/20 flex items-center justify-center text-3xl">
                    {project.frontmatter.icon}
                  </div>
                  <Badge
                    variant={
                      project.frontmatter.status === "Live"
                        ? "emerald"
                        : project.frontmatter.status === "Building"
                        ? "amber"
                        : "default"
                    }
                  >
                    {project.frontmatter.status}
                  </Badge>
                </div>
                <h2 className="text-2xl font-bold text-zinc-100 mb-2 group-hover:text-emerald-400 transition-colors">
                  {project.frontmatter.title}
                </h2>
                <p className="text-zinc-400">
                  {project.frontmatter.description}
                </p>
              </CardHeader>

              <CardContent className="flex-1">
                <div className="flex flex-wrap gap-2">
                  {project.frontmatter.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-2.5 py-1 rounded-md bg-zinc-800 text-zinc-400 font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </CardContent>

              <CardFooter className="flex items-center gap-3">
                <Link href={`/projects/${project.slug}/`} className="flex-1">
                  <Button variant="primary" className="w-full group/btn">
                    Read Case Study
                    <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                  </Button>
                </Link>
                {project.frontmatter.liveUrl && (
                  <a
                    href={project.frontmatter.liveUrl}
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
      </Container>
    </div>
  );
}
