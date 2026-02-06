import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { ArrowLeft, MessageCircle, ExternalLink } from "lucide-react";
import Link from "next/link";
import { getProjectBySlug, getProjectSlugs } from "@/lib/mdx";
import { MDXRemote } from "next-mdx-remote/rsc";
import { mdxComponents } from "@/components/mdx/MDXComponents";
import { notFound } from "next/navigation";
import { Metadata } from "next";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = getProjectSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  
  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: `${project.frontmatter.title} | thebid`,
    description: project.frontmatter.description,
  };
}

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const { frontmatter, content } = project;

  return (
    <div className="pt-32 pb-24">
      <Container size="md">
        {/* Back Link */}
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-sm text-zinc-500 hover:text-zinc-300 transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to projects
        </Link>

        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-5xl">{frontmatter.icon}</span>
            <Badge
              variant={
                frontmatter.status === "Live"
                  ? "emerald"
                  : frontmatter.status === "Building"
                  ? "amber"
                  : "default"
              }
              className="text-sm"
            >
              {frontmatter.status}
            </Badge>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-zinc-100 mb-4 font-mono">
            {frontmatter.title}
          </h1>
          
          <p className="text-xl text-zinc-400 mb-6">
            {frontmatter.description}
          </p>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2 mb-8">
            {frontmatter.technologies.map((tech) => (
              <span
                key={tech}
                className="text-sm px-3 py-1.5 rounded-full bg-zinc-800/50 text-zinc-300 border border-zinc-700 font-mono"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-3">
            {frontmatter.liveUrl && (
              <a
                href={frontmatter.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="primary">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Open in Telegram
                </Button>
              </a>
            )}
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-zinc-800 via-zinc-700 to-zinc-800 mb-12" />

        {/* Content */}
        <article className="prose prose-invert prose-zinc max-w-none">
          <MDXRemote source={content} components={mdxComponents} />
        </article>

        {/* Bottom Navigation */}
        <div className="mt-16 pt-8 border-t border-zinc-800">
          <Link href="/projects/">
            <Button variant="ghost" size="sm">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to all projects
            </Button>
          </Link>
        </div>
      </Container>
    </div>
  );
}
