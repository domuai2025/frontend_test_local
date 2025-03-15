"use client";

import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import {CheckCircle2, CircleXIcon} from "lucide-react";
import React from "react";
import {cn} from "@/lib/utils";
import {BorderBeam} from "./ui/border-beam";
import {currency, plans} from "@/config";
import {PricingCardProps} from "@/types/general";
import {CheckoutButton} from "./ui/checkout-button";

const PricingHeader = ({title, subtitle}: {title: string; subtitle: string}) => (
	<section className="text-center">
		<h2 className="text-sm md:text-xl font-bold text-gray-400">{title}</h2>
		<p
			className="text-2xl md:text-4xl font-bold mt-4 bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text"
			dangerouslySetInnerHTML={{__html: subtitle}}
		/>
	</section>
);

const CheckItem = ({
	text,
	isMissing,
	isExtra,
}: {
	text: string;
	isMissing?: boolean;
	isExtra?: boolean;
}) => (
	<div className="flex gap-2">
		{isMissing ? (
			<CircleXIcon size={18} className={"text-muted-foreground/50"} />
		) : (
			<CheckCircle2
				size={18}
				className={isExtra ? "text-primary" : "text-secondary-foreground"}
			/>
		)}
		<p
			className={`pt-0.5 text-sm ${
				isMissing ? "text-muted-foreground/50" : "text-secondary-foreground"
			}`}
		>
			{text}
		</p>
	</div>
);

export const Pricing = () => {
	return (
		<div className="py-20" id="pricing">
			<PricingHeader title="Pricing" subtitle="Unlimited access" />
			<section className="flex flex-col sm:flex-row sm:flex-wrap justify-center gap-8 mt-20">
				{plans.map((plan) => {
					return <PricingCard key={plan.title} {...plan} />;
				})}
			</section>
		</div>
	);
};

const PricingCard = ({
	title,
	monthlyPrice,
	yearlyPrice,
	previousPrice,
	singlePrice,
	description,
	features,
	extraFeatures,
	missingFeatures,
	actionLabel,
	popular,
	exclusive,
	stripePriceId,
}: PricingCardProps) => {
	return (
		<Card
			className={cn(
				`relative w-72 md:w-96 flex flex-col justify-between py-1 mx-auto sm:mx-0 overflow-hidden`,
			)}
		>
			{popular && <BorderBeam size={250} duration={12} delay={9} />}
			<div>
				<CardHeader className="pb-6 pt-4">
					{popular ? (
						<div className="flex justify-between">
							<CardTitle className="text-zinc-700 dark:text-zinc-300 text-lg">
								{title}
							</CardTitle>
							<div
								className={
									"px-2.5 rounded-xl h-fit text-xs py-1 bg-gradient-to-r from-primary to-primary/50 text-primary-foreground"
								}
							>
								Exclusive
							</div>
						</div>
					) : (
						<CardTitle className="text-zinc-700 dark:text-zinc-300 text-lg">
							{title}
						</CardTitle>
					)}

					<div className="flex gap-0.5">
						{previousPrice && (
							<p className="text-sm line-through text-gray-400">${previousPrice}</p>
						)}
						<h3 className="text-5xl font-bold">
							{monthlyPrice !== undefined
								? "$" + monthlyPrice
								: singlePrice
								? "$" + singlePrice
								: "Custom"}
						</h3>
						<b>{currency}</b>
						<span className="flex flex-col justify-end text-sm mb-1">
							{monthlyPrice ? "/month" : null}
						</span>
					</div>
					{description && (
						<CardDescription className="pt-1">{description}</CardDescription>
					)}
				</CardHeader>
				<CardContent className="flex flex-col gap-2">
					{[...features, ...extraFeatures, ...missingFeatures].map((feature: string) => {
						const isExtraFeature = extraFeatures.includes(feature);
						const isFeatureMissing = missingFeatures?.includes(feature);
						return (
							<CheckItem
								key={feature}
								text={feature}
								isMissing={isFeatureMissing}
								isExtra={isExtraFeature}
							/>
						);
					})}
				</CardContent>
			</div>
			<CardFooter className="mt-2">
				<CheckoutButton
					size="lg"
					stripePriceId={stripePriceId}
					className="relative inline-flex w-full items-center font-medium justify-center rounded-md"
					icon="⚡️"
				>
					{actionLabel}
				</CheckoutButton>
			</CardFooter>
			<p className="text-sm text-zinc-600 text-center pb-2">
				{/* Then {previousPrice}$ p/m.  */}
				Cancel anytime.
			</p>
		</Card>
	);
};
