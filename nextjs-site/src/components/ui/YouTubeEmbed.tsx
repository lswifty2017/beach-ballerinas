"use client";

import { useMediaQuery } from "@/hooks/useMediaQuery";

interface YouTubeEmbedProps {
  videoId: string;
  title?: string;
}

export function YouTubeEmbed({ videoId, title = "YouTube video" }: YouTubeEmbedProps) {
  const isTablet = useMediaQuery("(min-width: 768px)");

  const width = isTablet ? 800 : 300;
  const height = isTablet ? 450 : 169;

  return (
    <div className="flex justify-center">
      <iframe
        width={width}
        height={height}
        src={`https://www.youtube.com/embed/${videoId}`}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="rounded-lg shadow-lg max-w-full"
      />
    </div>
  );
}
