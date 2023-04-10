/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['d36p6ty9wanxdj.cloudfront.net'],
    unoptimized: true
  },
}

module.exports = nextConfig
