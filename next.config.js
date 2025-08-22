/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  // Add these additional settings for better compatibility
  experimental: {
    esmExternals: true,
  },
  // Ensure proper handling of external packages
  transpilePackages: ['@radix-ui/react-accordion', '@radix-ui/react-alert-dialog', /* add other Radix UI packages here */],
}

export default nextConfig