/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['s3.eu-central-1.amazonaws.com'],
  },
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'https://coin-api.ruanpasta.com/api/:path*',
      },
    ]
  },
}

module.exports = nextConfig
