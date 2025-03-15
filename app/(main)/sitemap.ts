import {MetadataRoute} from "next";
import {getURL} from "@/lib/utils";
import {getAllPosts} from "@/lib/get-posts";
import {page_routes} from "@/docs.config";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
	const routes = ["/", "/tos", "/privacy-policy", "/docs", "/blog"].map((route) => ({
		url: getURL(route),
		lastModified: new Date().toISOString(),
		changeFrequency: "weekly" as const,
		priority: 1,
	}));

	const posts = getAllPosts();
	const postsUrls = posts.map((post) => ({
		url: getURL(`/blog/${post.slug}`),
		lastModified: new Date(post.date).toISOString(),
		priority: 0.5,
	}));

	const docs = page_routes;
	const docsUrls = docs.map((doc) => ({
		url: getURL(`/docs/${doc.href}`),
		priority: 0.5,
	}));

	return [...routes, ...postsUrls, ...docsUrls];
}
