import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Image optimization for faster loading
  images: {
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
