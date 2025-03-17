/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        unoptimized: true, // Prevents Next.js from optimizing images (important for static export)
    },
};

export default nextConfig;
