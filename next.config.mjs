/** @type {import('next').NextConfig} */
const nextConfig = {
  // i18n: {
  //   locales: ["en-US", "ar"],
  //   defaultLocale: "en-US",
  // },
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
