"use client";

import { useEffect } from "react";

interface InstagramFeedProps {
  handle: string;
  posts: string[];
}

export function InstagramFeed({ handle, posts }: InstagramFeedProps) {
  useEffect(() => {
    // Load Instagram embed script
    const loadInstagramScript = () => {
      if (!document.querySelector('script[src*="instagram.com/embed.js"]')) {
        const script = document.createElement("script");
        script.src = "https://www.instagram.com/embed.js";
        script.async = true;
        document.body.appendChild(script);
      } else if ((window as unknown as { instgrm?: { Embeds: { process: () => void } } }).instgrm) {
        (window as unknown as { instgrm: { Embeds: { process: () => void } } }).instgrm.Embeds.process();
      }
    };

    // Small delay to ensure DOM is ready
    const timer = setTimeout(loadInstagramScript, 100);
    return () => clearTimeout(timer);
  }, [posts]);

  if (!posts || posts.length === 0) {
    return null;
  }

  return (
    <section className="py-16 bg-white">
      <div className="max-w-desktop mx-auto px-4">
        <h2 className="font-montaga text-3xl tablet:text-4xl text-primary-text text-center mb-12">
          <a
            href={`https://www.instagram.com/${handle}/`}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary-pink transition-colors"
          >
            @{handle}
          </a>
        </h2>
        <div className="grid grid-cols-1 tablet:grid-cols-3 gap-6 justify-items-center">
          {posts.map((postUrl) => (
            <blockquote
              key={postUrl}
              className="instagram-media"
              data-instgrm-permalink={postUrl}
              data-instgrm-version="14"
              style={{
                background: "#FFF",
                border: 0,
                borderRadius: "3px",
                boxShadow: "0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)",
                margin: "1px",
                maxWidth: "540px",
                minWidth: "280px",
                padding: 0,
                width: "100%",
              }}
            >
              <a
                href={postUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block p-4 text-center text-primary-blue hover:underline"
              >
                View this post on Instagram
              </a>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
