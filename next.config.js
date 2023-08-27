/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	images: {
		domains: ['www.placecage.com', 'www.fillmurray.com', 'gravatar.com', 'robohash.org']
	}
}

module.exports = nextConfig
