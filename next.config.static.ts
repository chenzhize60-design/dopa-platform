import type { NextConfig } from "next";

// Static export config for CloudStudio deployment
const nextConfig: NextConfig = {
  output: "export",
  distDir: "out",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
