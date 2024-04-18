/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
        return {
            fallback: [
                {
                    source: '/:path*',
                    destination: "https://qa.dodo.medismart.live/:path*",
                },
            ],

        }
    }
};

export default nextConfig;
