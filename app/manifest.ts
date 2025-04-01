import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Yahia Elazhar Portfolio",
    short_name: "Yahia Elazhar",
    description:
      "Web Developer specializing in React, Next.js, and modern web technologies.",
    start_url: "/",
    display: "standalone",
    background_color: "#f3f6f5",
    theme_color: "#71a295",
    icons: [
      {
        src: "/icon.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icon.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
