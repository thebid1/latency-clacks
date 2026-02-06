export type ProjectStatus = "Live" | "Building" | "In Development" | "Open Source";

export interface Project {
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  status: ProjectStatus;
  icon: string;
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
}

export interface Metric {
  label: string;
  value: string;
  subtext: string;
  icon: string;
}

export interface SocialLink {
  label: string;
  href: string;
  icon: string;
}
