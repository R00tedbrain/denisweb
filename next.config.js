/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  experimental: {
    optimizeCss: true,
  },
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'r00tedbrain.github.io',
      },
    ],
  },
  // Desactivar la telemetría
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true
  },
  // Asegurarnos de que las rutas funcionen en GitHub Pages
  basePath: '/DennysFisio',
  assetPrefix: '/DennysFisio',
  trailingSlash: true,
  distDir: 'out',
}

module.exports = nextConfig; 