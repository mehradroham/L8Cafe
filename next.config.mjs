/** @type {import('next').NextConfig} */
import path from "path";

const __dirname = new URL(".", import.meta.url).pathname;

const nextConfig = {
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      "@": path.resolve(__dirname, "./"),
    };
    return config;
  },
  webpack: (config2) => {
    config2.externals = [...config2.externals, "bcrypt"];
    return config2;
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "mehrad.storage.iran.liara.space",
      },
    ],
  },
};
export default nextConfig;
