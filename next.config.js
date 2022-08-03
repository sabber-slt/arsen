const withPWA = require("next-pwa");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["res.cloudinary.com"],
  },
  compiler: {
    removeConsole: process.env.NODE_ENV !== "development",
  },
  pwa: {
    dest: "public",
    // disabled has bug, will fix on next version
    disable: process.env.NODE_ENV === "development",
    register: true,
    buildExcludes: [/manifest.json$/],
  },
};

module.exports = () => {
  const plugins = [withPWA];
  const config = plugins.reduce((acc, next) => next(acc), {
    ...nextConfig,
  });
  return config;
};
