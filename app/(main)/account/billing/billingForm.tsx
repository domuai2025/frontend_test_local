"use client";

import {Button} from "@/components/ui/button";
import {useRouter, usePathname} from "next/navigation";
import {useState} from "react";
import {Card, CardContent, CardFooter, CardHeader} from "@/components/ui/card";
import {Tables} from "@/types/db";
import {createStripePortal} from "@/lib/stripe/server";
import {plans} from "@/config";

interface Props {
	subscription: Tables<"subscriptions"> | null;
}

export default function BillingForm({subscription}: Props) {
	const router = useRouter();
	const currentPath = usePathname();
	const [isSubmitting, setIsSubmitting] = useState(false);

	const handleStripePortalRequest = async () => {
		setIsSubmitting(true);
		const redirectUrl = await createStripePortal(currentPath);
		setIsSubmitting(false);
		return router.push(redirectUrl);
	};

	const plan = plans.find((plan) => plan.stripePriceId === subscription?.price_id);

	return (
		<Card className="w-full">
			<CardHeader>
				<h2 className="text-lg font-bold">Your Plan</h2>
			</CardHeader>
			<CardContent>
				{subscription ? (
					<>
						<p>
							You are currently on the {plan?.title} plan{" "}
							{plan?.monthlyPrice || plan?.previousPrice}$ per month.
						</p>
						<p className="text-sm text-muted-foreground">
							{subscription.cancel_at_period_end
								? `Ends on ${new Date(
										subscription.current_period_end,
								  ).toLocaleDateString()}.`
								: `Renews on ${new Date(
										subscription.current_period_end,
								  ).toLocaleDateString()}.`}
						</p>
					</>
				) : (
					<p>You are not currently subscribed to any plan.</p>
				)}
			</CardContent>
			<CardFooter>
				<Button
					className="w-full"
					onClick={handleStripePortalRequest}
					loading={isSubmitting}
				>
					Manage my subscription on Stripe
				</Button>
			</CardFooter>
		</Card>
	);
}
