import Image from "@/components/image";
import {getAllPosts} from "@/lib/get-posts";
import {formatDate} from "@/lib/utils";
import {Metadata} from "next";
import Link from "next/link";

export const dynamic = "force-static";

export const metadata: Metadata = {
	title: "Blog",
	description: "Latest news and updates",
};

export default async function Posts() {
	const posts = getAllPosts();

	return (
		<>
			<div className="container max-w-4xl py-6 lg:py-10">
				<div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8">
					<div className="flex-1 space-y-4">
						<h1 className="text-3xl font-extrabold leading-9 tracking-tight text-foreground sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
							Blog
						</h1>
						<p className="text-xl text-muted-foreground">Latest news and updates</p>
					</div>
				</div>
				{posts?.length ? (
					<div className="grid gap-10 sm:grid-cols-2 mt-8">
						{posts.map((post, index) => (
							<article key={post.slug} className="group relative flex flex-col space-y-2">
								{post.image && (
									<Image
										src={post.image}
										alt={post.title}
										width={804}
										height={452}
										className="rounded-md border bg-muted transition-colors"
										priority={index <= 1}
									/>
								)}
								<h2 className="text-2xl font-extrabold">{post.title}</h2>
								{post.description && (
									<p className="text-muted-foreground">{post.description}</p>
								)}
								{post.date && (
									<p className="text-sm text-muted-foreground">{formatDate(post.date)}</p>
								)}
								<Link href={`/blog/${post.slug}`} className="absolute inset-0">
									<span className="sr-only">View Article</span>
								</Link>
							</article>
						))}
					</div>
				) : (
					<p>No posts published.</p>
				)}
			</div>
		</>
	);
}
