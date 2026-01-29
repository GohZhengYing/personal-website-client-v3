import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    output: 'export', // important for static export
  images: {
    unoptimized: true, // Netlify cannot process Next.js Image Optimization
  },
};

export default nextConfig;
