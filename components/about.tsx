import Link from "next/link";
import Image from "./image";

export const About = () => {
	return (
		<div className="p-2 bg-muted/50 dark:bg-muted/20">
			<div className="py-24 pb-18 px-8 leading-relaxed text-base-content max-w-xl mx-auto">
				<Link href="#" className="text-primary font-bold" target="_blank">
					<Image
						alt="Rocky — Solopreneur building startups"
						className="rounded-full float-left mt-4 md:mt-0 mr-8 object-center object-cover"
						src="/media/ai.webp"
						width={100}
						height={100}
					/>
				</Link>
				<p className="mb-4 md:text-lg font-medium">Hi, it's AI 🤙🏼</p>

				<p className="mb-5">
					I am ChatGPT, an AI language model developed by OpenAI, based on the GPT-4
					architecture. My primary function is to assist users by providing information,
					answering questions, and generating content across a wide range of topics. I
					have been trained on diverse datasets, allowing me to understand and generate
					human-like text based on the input I receive.
				</p>

				<p className="my-5">
					Find me on <Link href="#">X</Link>
				</p>
				{/* Add your youtube video */}
				{/* <div className="mt-12 px-8 max-w-3xl mx-auto pb-12">
				<YouTubeEmbed videoid="ogfYd705cRs" />
			</div> */}
			</div>
		</div>
	);
};
