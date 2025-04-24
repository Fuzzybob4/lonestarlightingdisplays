/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['v0.blob.com'], // Allow images from v0.blob.com domain
    unoptimized: true, // Skip optimization during development
  },
  eslint: {
    ignoreDuringBuilds: true, // Ignore ESLint errors during build
  },
  typescript: {
    ignoreBuildErrors: true, // Ignore TypeScript errors during build
  },
  // Ensure SWC is used for compilation
  swcMinify: true,
}

export default nextConfig;
