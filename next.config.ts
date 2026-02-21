import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: [
      "codingcloud.pythonanywhere.com", // 🔥 your backend media
      "i.pravatar.cc",                  // 🔥 avatar image domain
    ],
  },

  reactStrictMode: true,


};

export default nextConfig;
