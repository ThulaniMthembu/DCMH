/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	transpilePackages: ['framer-motion'],
	images: {
		domains: ['dotcommediahouse.com'],
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'dotcommediahouse.com',
			},
			{
				protocol: 'https',
				hostname: '*.dotcommediahouse.com',
			},
			{
				protocol: 'http',
				hostname: 'localhost',
			},
		],
	},
	async rewrites() {
		return [
			{
				source: '/:path*',
				destination: '/:path*',
			},
		];
	},
};

module.exports = nextConfig;
