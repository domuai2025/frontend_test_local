import fs from "fs";
import matter from "gray-matter";
import {join} from "path";

interface Post {
	slug: string;
	title: string;
	description: string;
	date: string;
	image: string;
	imageAlt: string;
	content: string;
	lastModified: string;
}

const postsDirectory = join(process.cwd(), "blog");

export function getPostSlugs() {
	return fs.readdirSync(postsDirectory);
}

export function getPostBySlug(slug: string) {
	const realSlug = slug.replace(/\.md$/, "");
	const fullPath = join(postsDirectory, `${realSlug}.md`);
	const fileContents = fs.readFileSync(fullPath, "utf8");
	const {data, content} = matter(fileContents);

	return {...data, slug: realSlug, content} as Post;
}

export function getAllPosts(): Post[] {
	const slugs = getPostSlugs();
	const posts = slugs
		.map((slug) => getPostBySlug(slug))
		.sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
	return posts;
}
