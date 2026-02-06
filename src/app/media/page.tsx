"use client";

import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { Film, ExternalLink } from "lucide-react";

interface VideoItem {
  id: string;
  title: string;
  description: string;
  duration: string;
  videoSrc: string;
}

// Videos from public/media/videos/
const videos: VideoItem[] = [
  {
    id: "1",
    title: "Snoopers Tenfold",
    description: "Paper trading bot demo showcasing the Snoopers Tenfold bot in operation with real-time portfolio tracking and simulated trades.",
    duration: "Demo",
    videoSrc: "/media/videos/snoopers-tenfold.mp4",
  },
  {
    id: "2",
    title: "Campus Safe Survey Campaign 1",
    description: "Campus Safe Survey Campaign 1.",
    duration: "0:24",
    videoSrc: "/media/videos/campus-safe-1.mp4",
  },
  {
    id: "3",
    title: "Campus Safe Campaign 2",
    description: "Campus Safe Survey Campaign 2.",
    duration: "0:25",
    videoSrc: "/media/videos/campus-safe-2.mp4",
  },
];

function VideoCard({ video }: { video: VideoItem }) {
  return (
    <div className="rounded-xl overflow-hidden border border-zinc-800 bg-zinc-900/50">
      {/* Video Player */}
      <div className="relative aspect-video bg-zinc-950">
        <video
          src={video.videoSrc}
          controls
          className="w-full h-full"
          style={{ display: "block" }}
          preload="metadata"
          playsInline
        >
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Info */}
      <div className="p-5">
        <div className="flex items-center gap-2 mb-2">
          <Badge variant="violet">Remotion</Badge>
          <span className="text-xs text-zinc-500 font-mono">{video.duration}</span>
        </div>
        <h3 className="text-lg font-bold text-zinc-100 mb-1">{video.title}</h3>
        <p className="text-sm text-zinc-400">{video.description}</p>
      </div>
    </div>
  );
}

export default function MediaPage() {
  return (
    <div className="pt-32 pb-24">
      <Container>
        {/* Header */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-4">
            <Film className="w-8 h-8 text-emerald-500" />
            <Badge variant="emerald">Remotion Gallery</Badge>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-zinc-100 mb-4 font-mono">
            Media
          </h1>
          <p className="text-lg text-zinc-400 max-w-2xl">
            Videos generated with code. Programmatic video production using React and Remotion.
          </p>
        </div>

        {/* Videos Grid */}
        <div className="mb-16">
          <h2 className="text-xl font-bold text-zinc-100 mb-8 font-mono flex items-center gap-2">
            <span className="w-8 h-px bg-emerald-500/50" />
            Remotion Projects
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {videos.map((video) => (
              <VideoCard key={video.id} video={video} />
            ))}
          </div>
        </div>

        {/* Remotion CTA */}
        <div className="mt-16">
          <div className="glass rounded-2xl p-8 md:p-12">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div>
                <h2 className="text-2xl font-bold text-zinc-100 mb-2 font-mono">
                  Powered by Remotion
                </h2>
                <p className="text-zinc-400 max-w-xl">
                  These videos were programmatically generated using React components. 
                  Videos-as-code enables version-controlled, scalable content production.
                </p>
              </div>
              <a
                href="https://www.remotion.dev"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-shrink-0 px-6 py-3 rounded-lg bg-white text-zinc-950 font-medium hover:bg-zinc-200 transition-colors flex items-center gap-2"
              >
                Learn Remotion
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
