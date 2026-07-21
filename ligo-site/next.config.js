/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  typescript: {
    ignoreBuildErrors: true, // Forces build even with TypeScript errors
  },
  eslint: {
    ignoreDuringBuilds: true, // Forces build even with syntax/style warnings
  },
};

module.exports = nextConfig;
