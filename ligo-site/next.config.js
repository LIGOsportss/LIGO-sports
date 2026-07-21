/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/LIGO-sports', // <-- ADD THIS LINE (Match repository name exactly)
  images: {
    unoptimized: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;
