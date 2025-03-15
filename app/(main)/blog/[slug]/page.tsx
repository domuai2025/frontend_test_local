import {components} from "@/components/mdx";
import {getAllPosts, getPostBySlug} from "@/lib/get-posts";
import {formatDate} from "@/lib/utils";
import {ArrowLeftIcon, ArrowRightIcon} from "@radix-ui/react-icons";
import {Metadata} from "next";
import {MDXRemote} from "next-mdx-remote/rsc";
import Image from "next/image";
import Link from "next/link";
import {notFound} from "next/navigation";

export const dynamic = "force-static";

export default function Post({params}: {params: {slug: string}}) {
	const {slug} = params;

	if (!slug) {
		return notFound();
	}

	const post = getPostBySlug(slug);

	if (!post) {
		return notFound();
	}

	const allPosts = getAllPosts();
	const currentIndex = allPosts.findIndex((p) => p.slug === slug);
	const prevPost = currentIndex > 0 ? allPosts[currentIndex - 1] : null;
	const nextPost = currentIndex < allPosts.length - 1 ? allPosts[currentIndex + 1] : null;

	return (
		<>
			<article className="container relative max-w-3xl py-6 lg:py-10">
				<Link
					href="/blog"
					className="absolute left-[-200px] top-14 hidden xl:inline-flex"
				>
					<ArrowLeftIcon className="mr-2 h-4 w-4" />
					See all posts
				</Link>
				<div>
					{post.date && (
						<time dateTime={post.date} className="block text-sm text-muted-foreground">
							Published on {formatDate(post.date)}
						</time>
					)}
					<h1 className="mt-2 inline-block text-4xl leading-tight lg:text-5xl font-bold">
						{post.title}
					</h1>
				</div>
				{post.image && (
					<Image
						src={post.image}
						alt={post.title}
						width={720}
						height={405}
						className="my-8 rounded-md border bg-muted transition-colors"
						priority
					/>
				)}
				<MDXRemote source={post.content} components={components} />
				<hr className="mt-12" />
				<div className="flex justify-center py-6 lg:py-10">
					{prevPost && (
						<Link
							href={`/blog/${prevPost.slug}`}
							className={`flex justify-between gap-2 p-4 md:w-1/2 transition-all duration-200 rounded-lg border-2`}
						>
							<ArrowLeftIcon className="my-auto w-5 h-5" />{" "}
							<p className="my-auto">{prevPost.title}</p>
						</Link>
					)}
					{nextPost && (
						<Link
							href={`/blog/${nextPost.slug}`}
							className={`flex justify-between gap-2 p-4 md:w-1/2 transition-all duration-200 rounded-lg border-2`}
						>
							<p className="my-auto">{nextPost.title}</p>{" "}
							<ArrowRightIcon className="my-auto w-5 h-5" />
						</Link>
					)}
				</div>
				<div className="flex justify-center pb-6">
					<Link
						href="/blog"
						className={`flex justify-between gap-2 p-4 md:w-1/2 transition-all duration-200 rounded-lg border-2`}
					>
						See all posts
					</Link>
				</div>
			</article>
		</>
	);
}

type Params = {
	params: {
		slug: string;
	};
};

export function generateMetadata({params}: Params): Metadata {
	const post = getPostBySlug(params.slug);

	if (!post) {
		return notFound();
	}

	const title = `${post.title}`;
	const description = `${post.description}`;

	return {
		title,
		openGraph: {
			title,
			description,
			images: [post.image],
		},
	};
}

export async function generateStaticParams() {
	const posts = getAllPosts();

	return posts.map((post) => ({
		slug: post.slug,
	}));
}
