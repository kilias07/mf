/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["cdn.sanity.io"]
  },
  env: {
    MAPBOX_ACCESS_TOKEN:
        "[pk.eyJ1Ijoia2lsaWFzMDciLCJhIjoiY2w0M3QwZzNrMWt1azNqcXlzeG1jOWxuNSJ9.hTM49Z7VQ7DChxRiD3nNDQ]"
  }
}

module.exports = nextConfig;
