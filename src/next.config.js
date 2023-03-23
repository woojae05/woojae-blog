/** @type {import('next').NextConfig} */
const nextConfig = {
  // reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.esdrop.com",
        port: "",
        pathname: "/d/f/5oROXSHVce/**",
      },
    ],
  },
};

module.exports = {
  compiler: {
    emotion: true,
  },
};

module.exports = nextConfig;
