import {Badge} from "@/components/ui/badge";
import {Icons} from "./icons";
import AvatarCircles from "./ui/avatar-circles";
import {Stars} from "./ui/stars";
import WordRotate from "./ui/word-rotate";
import {plans, positiveReviewsWidget} from "@/config";
import {CheckoutButton} from "./ui/checkout-button";

export const Hero = () => {
	return (
		<div className="grow flex flex-col items-center justify-evenly">
			<section className="space-y-6 pt-10 pb-6">
				<div className="container flex flex-col items-center gap-8 text-center">
					<Badge variant="outline" className="text-sm">
						🔥 The best AI Tool
					</Badge>

					<h1 className="font-extrabold text-3xl lg:text-6xl tracking-tight md:-mb-4 flex flex-col items-center">
						<span className="relative">
							AI demo
							<span className="pb-2 text-5xl lg:text-7xl block text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
								Change the world
							</span>
						</span>
						<span className="whitespace-nowrap relative">
							<span className="mr-3 sm:mr-4 md:mr-5">for</span>
							<span className="relative whitespace-nowrap">
								<span className="absolute bg-gray-700 bg-opacity-50 -left-2 -top-1 -bottom-1 -right-2 md:-left-3 md:-top-0 md:-bottom-0 md:-right-3 -rotate-1 z-0"></span>
								<span className="relative text-white">better</span>
							</span>
						</span>
					</h1>

					<p className="max-w-2xl leading-normal text-muted-foreground text-xl pt-6 sm:leading-8">
						<span>
							Start building your AI project in minutes, focus on business logic
						</span>{" "}
						<span className="whitespace-nowrap">
							<span className="inline relative">
								<Icons.underline />
								not basic functionality
							</span>
						</span>
					</p>

					<div className="space-x-4 my-4">
						<CheckoutButton stripePriceId={plans[1].stripePriceId} size="lg" icon="⚡️">
							Get ready
						</CheckoutButton>
					</div>

					<div className="text-muted-foreground align-middle justify-center text-center">
						<AvatarCircles
							numPeople={positiveReviewsWidget.count}
							avatarUrls={positiveReviewsWidget.avatarUrls}
						/>
						<p className="text-center pt-2">Real reviews</p>
						<Stars />
					</div>
				</div>
			</section>
		</div>
	);
};
