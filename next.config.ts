import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  images: {
    qualities: [60, 65, 75],
  },
  turbopack: {
    root: process.cwd(),
  },
};

export default nextConfig;
