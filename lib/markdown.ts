import {compileMDX} from "next-mdx-remote/rsc";
import path from "path";
import {promises as fs} from "fs";
import remarkGfm from "remark-gfm";
import rehypePrism from "rehype-prism-plus";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeSlug from "rehype-slug";
import rehypeCodeTitles from "rehype-code-titles";
import {page_routes} from "../docs.config";
import {visit} from "unist-util-visit";

// custom components imports
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs";
import Pre from "@/components/docs/pre";

type MdxFrontmatter = {
	title: string;
	description: string;
};

// add custom components
const components = {
	Tabs,
	TabsContent,
	TabsList,
	TabsTrigger,
	pre: Pre,
};

export async function getMarkdownForSlug(slug: string) {
	try {
		const contentPath = getContentPath(slug);
		const rawMdx = await fs.readFile(contentPath, "utf-8");
		return await compileMDX<MdxFrontmatter>({
			source: rawMdx,
			options: {
				parseFrontmatter: true,
				mdxOptions: {
					rehypePlugins: [
						preProcess,
						rehypeCodeTitles,
						rehypePrism,
						rehypeSlug,
						rehypeAutolinkHeadings,
						postProcess,
					],
					remarkPlugins: [remarkGfm],
				},
			},
			components,
		});
	} catch (err) {
		console.log(err);
	}
}

export function getPreviousNext(path: string) {
	const index = page_routes.findIndex(({href}) => href == path);
	return {
		prev: page_routes[index - 1],
		next: page_routes[index + 1],
	};
}

function getContentPath(slug: string) {
	return path.join(process.cwd(), "/docs/", `${slug}.mdx`);
}

// for copying the code
const preProcess = () => (tree: any) => {
	visit(tree, (node) => {
		if (node?.type === "element" && node?.tagName === "pre") {
			const [codeEl] = node.children;
			if (codeEl.tagName !== "code") return;
			node.raw = codeEl.children?.[0].value;
		}
	});
};

const postProcess = () => (tree: any) => {
	visit(tree, "element", (node) => {
		if (node?.type === "element" && node?.tagName === "pre") {
			node.properties["raw"] = node.raw;
			// console.log(node);
		}
	});
};
