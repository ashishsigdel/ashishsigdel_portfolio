import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**", // allows all domains
      },
      {
        protocol: "http",
        hostname: "**", // also allow http (optional)
      },
    ],
  },
};

export default nextConfig;
