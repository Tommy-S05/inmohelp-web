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
            {
                protocol: 'https',
                hostname: 'inmohelp-backend.fly.dev',
                port: '',
                pathname: '/storage/**',
            },
        ],
    },
}

module.exports = nextConfig
