/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  // Optimize images and fonts
  images: {
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
