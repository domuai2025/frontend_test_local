import {plans} from "@/config";
import {stripe} from "@/lib/stripe/config";
import {createOrRetrieveCustomer} from "@/lib/supabase/admin";
import {getUser} from "@/lib/supabase/queries";
import {createClient} from "@/lib/supabase/server";
import {calculateTrialEndUnixTimestamp, getURL} from "@/lib/utils";
import {redirect} from "next/navigation";
import {NextRequest} from "next/server";

export interface CheckoutResponse {
	sessionUrls: Record<string, string>; // Changed to Record for better type definition
}

/*
	e.g. GET /api/checkout/stripe?priceId=1234567890
	This endpoint redirects to Stripe checkout page
	(used by checkout button on the frontend)
*/
export async function GET(req: NextRequest): Promise<Response> {
	const params = req.nextUrl.searchParams;
	const priceId = params.get("priceId");
	const referral = params.get("referral");
	const coupon = params.get("coupon");

	if (priceId) {
		const plan = plans.find((plan) => plan.stripePriceId === priceId);
		if (plan) {
			const supabase = createClient();
			const user = await getUser(supabase);
			if (!user) {
				return Response.json({error: "Must be logged in to purchase"});
			}

			// Retrieve or create the customer in Stripe
			let customer: string;
			try {
				customer = await createOrRetrieveCustomer({
					uuid: user.id || "",
					email: user.email || "",
				});
			} catch (err) {
				console.error(err);
				return Response.json({error: "Unable to access customer record."});
			}

			const session = await stripe.checkout.sessions.create({
				customer,
				allow_promotion_codes: true,
				billing_address_collection: "required",
				customer_update: {
					address: "auto",
				},
				metadata: {
					purchaseType: plan.title,
					...(referral && {promotekit_referral: referral}),
				},
				line_items: [
					{
						price: plan.stripePriceId,
						quantity: 1,
					},
				],
				...(coupon && {
					discounts: [
						{
							coupon,
						},
					],
				}),
				// Subscription mode
				...(plan.type === "recurring" && {
					mode: "subscription",
					subscription_data: {
						trial_end: calculateTrialEndUnixTimestamp(plan.trialPeriodDays),
					},
				}),
				...(plan.type === "one_time" && {
					mode: "payment",
				}),
				// Change this to the url you want to redirect to after the purchase
				success_url: getURL("/account/billing"),
				cancel_url: getURL("/"),
				automatic_tax: {enabled: true},
			});

			if (session.url) {
				redirect(session.url);
			}
		}
	}

	return Response.json({error: "Something went wrong. Please try again later."});
}

export async function POST(req: NextRequest): Promise<Response> {
	try {
		// Create Checkout Session
		const data: {
			coupon?: string;
			referral?: string;
		} = await req.json();

		const sessionId = req.cookies.get("sessionId")?.value;
		if (!sessionId) {
			throw "sessionId is missing";
		}

		// Loop over plans
		const sessionUrls: Record<string, string> = {};

		for (const plan of plans) {
			const session = await stripe.checkout.sessions.create({
				metadata: {
					sessionId,
					purchaseType: plan.title,
					...(data.referral && {promotekit_referral: data.referral}),
				},
				line_items: [
					{
						price: plan.stripePriceId,
						quantity: 1,
					},
				],
				...(data.coupon && {
					discounts: [
						{
							coupon: data.coupon,
						},
					],
				}),
				// Subscription mode
				...(plan.type === "recurring" && {
					mode: "subscription",
					subscription_data: {
						trial_end: calculateTrialEndUnixTimestamp(plan.trialPeriodDays),
					},
				}),
				...(plan.type === "one_time" && {
					mode: "payment",
				}),
				// Change this to the url you want to redirect to after the purchase
				success_url: getURL("/account/billing"),
				cancel_url: getURL("/"),
				automatic_tax: {enabled: true},
			});

			if (session.url) {
				sessionUrls[plan.stripePriceId] = session.url;
			}
		}

		return Response.json({sessionUrls});
	} catch (error) {
		console.error(error);
		return Response.json({error: "Something went wrong. Please try again later."});
	}
}
