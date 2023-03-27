const API_ROOT = "http://host.docker.internal:8000";

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  output: "standalone",
  reactStrictMode: true,
  rewrites: async () => [
    {
      source: "/api/proxy/:path*",
      destination: `${API_ROOT}/:path*`,
    },
  ],
};

module.exports = nextConfig;
