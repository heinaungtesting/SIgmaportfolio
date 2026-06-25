import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "sigmahein.me" },
    ],
  },
};

export default nextConfig;
