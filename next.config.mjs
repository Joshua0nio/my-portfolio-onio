/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ["https://joshua0nio.github.io/"], // Replace with your actual domain or image host
        remotePatterns: [
            {
                protocol: "https",
                hostname: "**", // Allows all external images (optional)
            },
        ],
    },
};

export default nextConfig;
