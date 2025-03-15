import {sendEmail} from "@/app/actions/email";
import {stripe} from "@/lib/stripe/config";
import {manageSubscriptionStatusChange, supabaseAdmin} from "@/lib/supabase/admin";
import {Tables} from "@/types/db";
import Stripe from "stripe";

const relevantEvents = new Set([
	"checkout.session.completed",
	"customer.subscription.created",
	"customer.subscription.updated",
	"customer.subscription.deleted",
]);

export async function POST(req: Request) {
	const body = await req.text();
	const sig = req.headers.get("stripe-signature") as string;
	const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;
	let event: Stripe.Event;

	try {
		if (!sig || !webhookSecret)
			return new Response("Webhook secret not found.", {status: 400});
		event = stripe.webhooks.constructEvent(body, sig, webhookSecret);
		console.log(`Webhook received: ${event.type}`);
	} catch (err: any) {
		console.log(`❌ Error message: ${err.message}`);
		return new Response(`Webhook Error: ${err.message}`, {status: 400});
	}

	if (relevantEvents.has(event.type)) {
		try {
			switch (event.type) {
				case "customer.subscription.created":
				case "customer.subscription.updated":
				case "customer.subscription.deleted":
					const subscription = event.data.object as Stripe.Subscription;
					await manageSubscriptionStatusChange(
						subscription.id,
						subscription.customer as string,
						event.type === "customer.subscription.created",
					);
					break;
				case "checkout.session.completed":
					const checkoutSession = event.data.object as Stripe.Checkout.Session;
					const email = checkoutSession.customer_details?.email || "";
					const session_id = checkoutSession.metadata?.sessionId || "";

					if (checkoutSession.mode === "subscription") {
						// SUBSCRIPTION (only logged in users)
						const subscriptionId = checkoutSession.subscription;
						await manageSubscriptionStatusChange(
							subscriptionId as string,
							checkoutSession.customer as string,
							true,
						);
					} else {
						// ONE TIME (can also checkout as guest)
						// defaults to PRO
						const type =
							(checkoutSession.metadata?.purchaseType as Tables<"purchases">["type"]) ||
							"PRO";

						// Insert the purchase in the database
						const {data} = await supabaseAdmin
							.from("purchases")
							.insert({
								session_id,
								email,
								type,
								// payload: checkoutSession,
							})
							.select("id")
							.single()
							.throwOnError();

						// Send a welcome email to the customer
						if (data) {
							await sendEmail({email});
						}
					}

					break;
				default:
					throw new Error("Unhandled relevant event!");
			}
		} catch (error) {
			console.log(error);
			return new Response("Webhook handler failed", {
				status: 400,
			});
		}
	} else {
		return new Response(`Unsupported event type: ${event.type}`, {
			status: 400,
		});
	}
	return new Response(JSON.stringify({received: true}));
}
