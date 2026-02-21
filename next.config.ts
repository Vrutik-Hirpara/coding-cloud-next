// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   images: {
//     domains: [
//       "codingcloud.pythonanywhere.com", // 🔥 your backend media
//       "i.pravatar.cc",                  // 🔥 avatar image domain
//     ],
//   },

//   reactStrictMode: true,


// };

// export default nextConfig;
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "codingcloud.pythonanywhere.com",
      },
      {
        protocol: "https",
        hostname: "i.pravatar.cc",
      },
    ],
  },
};

export default nextConfig;