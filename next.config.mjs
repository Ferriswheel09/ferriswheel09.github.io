/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    basePath: "/portfolio-site",
    images: {
        unoptimized: true,
      },
      typescript: {
        // !! WARN !!
        // Ignoring build errors can be dangerous in production!
        ignoreBuildErrors: true,
    },
};

export default nextConfig;
