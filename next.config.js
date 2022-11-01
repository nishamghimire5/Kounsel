/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = {
  images: {
    domains:['cdn.dribbble.com', 'images.unsplash.com']
  },
}
