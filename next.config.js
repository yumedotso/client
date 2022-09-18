/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['www.placecage.com', 'www.fillmurray.com', 'https://gravatar.com']
  }
}

module.exports = nextConfig
