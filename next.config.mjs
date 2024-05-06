/** @type {import('next').NextConfig} */
const nextConfig = {
  domains: ["utfs.io"],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "utfs.io",
        port: "",
      },
    ],
  },
};

export default nextConfig;
