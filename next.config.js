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
			{
				protocol: 'https',
				hostname: '*.dotcommediahouse.com',
			},
		],
		domains: ['dotcommediahouse.com'],
	},
};

module.exports = nextConfig;
