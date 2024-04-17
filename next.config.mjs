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
    },
    async headers() {
        return [
            {
                source: '/:path*',
                headers: [
                    {
                        key: 'Content-Security-Policy',
                        value: 'frame-ancestors https://qa.medical.medismart.live',
                    },
                ],
            },
        ]
    },
};

export default nextConfig;
