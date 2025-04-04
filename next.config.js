/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  /* config options here */
  eslint: {
    ignoreDuringBuilds: true
  },
  typescript: {
    ignoreBuildErrors: true
  }
};

module.exports = nextConfig; 