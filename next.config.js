/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'http',
                hostname: 'inmohelp-backend.test',
                port: '',
                pathname: '/storage/**',
            },
        ],
    },
}

module.exports = nextConfig
