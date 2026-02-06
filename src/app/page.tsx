import { Hero } from "@/components/home/Hero";
import { MetricsGrid } from "@/components/home/MetricsGrid";
import { TechTicker } from "@/components/home/TechTicker";
import { FeaturedProjects } from "@/components/home/FeaturedProjects";
import { Testimonials } from "@/components/home/Testimonials";

export default function HomePage() {
  return (
    <>
      <Hero />
      <MetricsGrid />
      <TechTicker />
      <FeaturedProjects />
      <Testimonials />
    </>
  );
}
