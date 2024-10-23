/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	transpilePackages: ['framer-motion'],
	images: {
		domains: ['dotcommediahouse.com', 'www.dotcommediahouse.com'],
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
				protocol: 'https',
				hostname: '*.vercel.app',
			},
		],
		unoptimized: true,
	},
	async rewrites() {
		return [
			{
				source: '/:path*',
				destination: '/:path*',
			},
		];
	},
	trailingSlash: false,
	output: 'standalone',
	assetPrefix: '',
	basePath: '',
};

module.exports = nextConfig;
