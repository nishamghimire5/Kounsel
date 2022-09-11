/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = {
  images: {
    domains:[
      "img.freepik.com","storyset.com","static.vecteezy.com", "cdn.dribbble.com"
    ],
  },
}
