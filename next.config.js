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
	webpack: (config, { isServer, dev }) => {
		if (!isServer && !dev) {
			config.optimization.splitChunks = {
				chunks: 'all',
				minSize: 20000,
				maxSize: 244000,
				minChunks: 1,
				maxAsyncRequests: 30,
				maxInitialRequests: 30,
				enforceSizeThreshold: 50000,
				cacheGroups: {
					defaultVendors: false,
					default: false,
					framework: {
						chunks: 'all',
						name: 'framework',
						test: /(?<!node_modules.*)[\\/]node_modules[\\/](react|react-dom|scheduler|prop-types|use-subscription)[\\/]/,
						priority: 40,
						enforce: true,
					},
					commons: {
						name: 'commons',
						chunks: 'initial',
						minChunks: 2,
						priority: 20,
					},
					lib: {
						test(module) {
							return (
								module.size() > 160000 &&
								/node_modules[/\\]/.test(module.identifier())
							);
						},
						name(module) {
							const hash = crypto.createHash('sha1');
							hash.update(module.identifier());
							return hash.digest('hex').substring(0, 8);
						},
						priority: 30,
						minChunks: 1,
						reuseExistingChunk: true,
					},
				},
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
