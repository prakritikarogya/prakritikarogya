/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
    minimumCacheTTL: 60,
    domains: ["preview.colorlib.com"]
}
}

module.exports = nextConfig
