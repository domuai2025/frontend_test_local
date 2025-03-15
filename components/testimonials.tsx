import {Avatar, AvatarFallback, AvatarImage} from "./ui/avatar";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import {Player} from "./ui/video-player";
import {TestimonialProps} from "@/types/general";

export const Testimonials = ({testimonials}: {testimonials: TestimonialProps[]}) => {
	return (
		<section id="testimonials" className="text-center container py-24 sm:py-32">
			<h2 className="text-3xl md:text-4xl font-bold">
				<span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
					See What Our Members have to Say
				</span>
			</h2>

			<p className="text-xl text-muted-foreground pt-4 pb-20">
				See how they saved hours of development time
			</p>

			<div className="grid md:grid-cols-2 lg:grid-cols-4 sm:block columns-2 lg:columns-4 lg:gap-6 mx-auto space-y-4 lg:space-y-6">
				{testimonials.map(({image, video, poster, name, userName, comment}) => (
					<Card key={name} className="max-w-md md:break-inside-avoid overflow-hidden">
						{image && (
							<>
								<CardHeader className="flex flex-row items-center gap-4 pb-2">
									{image && (
										<Avatar>
											<AvatarImage alt="" src={image} />
											<AvatarFallback>OM</AvatarFallback>
										</Avatar>
									)}
									<div className="flex flex-col">
										<CardTitle className="text-lg">{name}</CardTitle>
										<CardDescription>{userName}</CardDescription>
									</div>
								</CardHeader>
								<CardContent>{comment}</CardContent>
							</>
						)}

						{video && poster && (
							<>
								<Player videoSrc={video} posterSrc={poster} comment={name} />
								<CardContent>{comment}</CardContent>
							</>
						)}
					</Card>
				))}
			</div>
		</section>
	);
};
