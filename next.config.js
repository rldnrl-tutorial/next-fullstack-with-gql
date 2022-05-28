/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'nextjs.org',
      'www.prisma.io',
      'tailwindcss.com',
      'www.apollographql.com',
    ],
  },
}

module.exports = nextConfig
