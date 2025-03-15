import {TestimonialProps} from "@/types/general";
import {Icons} from "./icons";
import Image from "./image";
import {Badge} from "./ui/badge";

export const TestimonialQuote = ({comment, name, built, image}: TestimonialProps) => (
	<div className="py-8 space-y-4 max-w-md mx-auto px-8">
		<Icons.quote className="dark:fill-white" />
		<p className="md:text-lg leading-relaxed">{comment}</p>
		<div className="flex items-center gap-2">
			{image && (
				<Image
					alt={name}
					src={image}
					className="rounded-full object-cover"
					width={40}
					height={40}
				/>
			)}
			<p>{name}</p>
			{built && <Badge>{built}</Badge>}
		</div>
	</div>
);
