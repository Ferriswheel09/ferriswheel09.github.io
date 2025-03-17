/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    basePath: "/portfolio-site",
    reactStrictMode: true,
      typescript: {
        // !! WARN !!
        // Ignoring build errors can be dangerous in production!
        ignoreBuildErrors: true,
    },
};

export default nextConfig;
