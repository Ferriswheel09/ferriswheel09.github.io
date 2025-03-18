/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: {
        unoptimized: true
    },
    reactStrictMode: true,
      typescript: {
        // !! WARN !!
        // Ignoring build errors can be dangerous in production!
        ignoreBuildErrors: true,
    },
};

export default nextConfig;
