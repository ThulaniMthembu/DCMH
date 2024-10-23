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
	async headers() {
		return [
			{
				source: '/site.webmanifest',
				headers: [
					{
						key: 'Content-Type',
						value: 'application/manifest+json',
					},
				],
			},
		];
	},
	webpack: (config, { isServer }) => {
		if (!isServer) {
			config.resolve.fallback = {
				fs: false,
				net: false,
				tls: false,
				crypto: false,
			};
		}
		return config;
	},
	poweredByHeader: false,
	generateEtags: false,
	trailingSlash: false,
	output: 'standalone',
};

module.exports = nextConfig;
