/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = {
  nextConfig,
    env: {
    API_URL: 'https://api.shofda.net/api',
  },
    images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'thumbnail-sm.shofda.net',
      }
    ],
  },
}
