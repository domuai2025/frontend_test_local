/** @type {import('next').NextConfig} */
const nextConfig = {
	transpilePackages: ["next-mdx-remote"],
	reactStrictMode: true,
	images: {
		domains: [
			"avatars.githubusercontent.com",
			"scontent.fbne4-1.fna.fbcdn.net",
			"replicate.delivery",
			"oxeqpoyww6hsc4m4.public.blob.vercel-storage.com",
		],
	},
};

module.exports = nextConfig;
