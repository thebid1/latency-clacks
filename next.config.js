/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  distDir: 'dist',
  images: {
    unoptimized: true,
  },
  // Fix lockfile detection warning
  outputFileTracingRoot: process.cwd(),
  // Ensure trailing slashes for static export
  trailingSlash: true,
  // Disable type checking during build (we'll check manually)
  typescript: {
    ignoreBuildErrors: false,
  },
  // Disable eslint during build
  eslint: {
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;
