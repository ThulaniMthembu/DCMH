/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	transpilePackages: ['framer-motion'],
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'placeholder.com',
			},
			{
				protocol: 'https',
				hostname: 'dotcommediahouse.com',
			},
		],
	},
	async headers() {
		return [
			{
				source: '/(.*)',
				headers: [
					{
						key: 'X-Content-Type-Options',
						value: 'nosniff',
					},
					{
						key: 'X-Frame-Options',
						value: 'DENY',
					},
					{
						key: 'X-XSS-Protection',
						value: '1; mode=block',
					},
				],
			},
		];
	},
	async rewrites() {
		return [
			{
				source: '/api/:path*',
				destination: 'https://api.dotcommediahouse.com/:path*',
			},
		];
	},
};

module.exports = nextConfig;
