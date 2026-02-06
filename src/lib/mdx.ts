import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { ProjectStatus } from "@/types";

const projectsDirectory = path.join(process.cwd(), "src/content/projects");

export interface ProjectFrontmatter {
  title: string;
  description: string;
  status: ProjectStatus;
  technologies: string[];
  liveUrl?: string;
  icon: string;
}

export interface ProjectContent {
  slug: string;
  frontmatter: ProjectFrontmatter;
  content: string;
}

export function getProjectSlugs(): string[] {
  try {
    const fileNames = fs.readdirSync(projectsDirectory);
    return fileNames
      .filter((fileName) => fileName.endsWith(".mdx"))
      .map((fileName) => fileName.replace(/\.mdx$/, ""));
  } catch {
    return [];
  }
}

export function getProjectBySlug(slug: string): ProjectContent | null {
  try {
    const fullPath = path.join(projectsDirectory, `${slug}.mdx`);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);

    return {
      slug,
      frontmatter: data as ProjectFrontmatter,
      content,
    };
  } catch {
    return null;
  }
}

export function getAllProjects(): ProjectContent[] {
  const slugs = getProjectSlugs();
  const projects = slugs
    .map((slug) => getProjectBySlug(slug))
    .filter((project): project is ProjectContent => project !== null);
  
  return projects;
}
