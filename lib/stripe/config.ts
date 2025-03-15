import {CheckoutResponse} from "@/app/api/checkout/stripe/route";
import Stripe from "stripe";

export const stripe = new Stripe(
	process.env.STRIPE_SECRET_KEY_LIVE ?? process.env.STRIPE_SECRET_KEY ?? "",
	{
		// @ts-ignore
		apiVersion: null,
	},
);

export const stripeCheckoutPreload = async ({
	coupon,
	referral,
}: {
	coupon?: string;
	referral?: string;
}): Promise<CheckoutResponse> => {
	const response = await fetch("/api/checkout/stripe", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({coupon, referral}),
	});

	return await response.json();
};
