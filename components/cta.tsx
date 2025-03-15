import {CheckoutButton} from "./ui/checkout-button";
import {plans} from "@/config";

export const Cta = () => {
	return (
		<section id="cta" className="bg-muted/50 dark:bg-muted/20 py-16 my-12">
			<div className="container place-items-center text-center">
				<h2 className="text-3xl md:text-4xl font-bold ">
					<span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
						Let's build your AI project
					</span>
				</h2>
				<p className="text-muted-foreground text-xl mt-4 mb-8 lg:mb-0 pb-8">
					Click the button below to activate
				</p>

				<CheckoutButton
					stripePriceId={plans[1].stripePriceId}
					size="lg"
					className="w-full md:mr-4 md:w-auto"
					icon="⚡️"
				>
					Get ready
				</CheckoutButton>
			</div>
		</section>
	);
};
