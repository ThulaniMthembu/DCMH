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
	webpack: (config, { isServer }) => {
		if (!isServer) {
			config.resolve.fallback = { fs: false, module: false };
		}
		return config;
	},
};

module.exports = nextConfig;
