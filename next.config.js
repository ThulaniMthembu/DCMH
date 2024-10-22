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
		],
	},
};

module.exports = nextConfig;
