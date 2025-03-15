"use server";

import {stripe} from "./config";
import {createOrRetrieveCustomer} from "../supabase/admin";
import {createClient} from "../supabase/server";
import {getURL} from "../utils";

export async function createStripePortal(currentPath: string) {
	const supabase = createClient();
	const {
		error,
		data: {user},
	} = await supabase.auth.getUser();

	if (!user) {
		if (error) {
			console.error(error);
		}
		throw new Error("Could not get user session.");
	}

	let customer;
	try {
		customer = await createOrRetrieveCustomer({
			uuid: user.id || "",
			email: user.email || "",
		});
	} catch (err) {
		console.error(err);
		throw new Error("Unable to access customer record.");
	}

	if (!customer) {
		throw new Error("Could not get customer.");
	}

	try {
		const {url} = await stripe.billingPortal.sessions.create({
			customer,
			return_url: getURL("/account/billing"),
		});
		if (!url) {
			throw new Error("Could not create billing portal");
		}
		return url;
	} catch (err) {
		console.error(err);
		throw new Error("Could not create billing portal");
	}
}
