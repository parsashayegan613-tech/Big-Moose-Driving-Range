import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "bigmoosedrivingrange.ca",
          },
        ],
        destination: "https://www.bigmoosedrivingrange.ca/:path*",
        permanent: true,
      },
    ];
  },
  images: {
    qualities: [60, 65, 75],
  },
  turbopack: {
    root: process.cwd(),
  },
};

export default nextConfig;
