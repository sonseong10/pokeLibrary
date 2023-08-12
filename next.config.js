/** @type {import('next').NextConfig} */
const path = require('path');

const nextConfig = {
  swcMinify: true, // babel대신 swc사용
  reactStrictMode: false,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  async rewrites() {
    return [
      {
        source: '/:slug.xml',
        destination: '/[slug].xml',
      },
    ];
  },
};

module.exports = nextConfig;
