"use server";

import {createClient} from "@/lib/supabase/server";
import {getURL} from "@/lib/utils";
import {redirect} from "next/navigation";

export const handleMagicLink = async ({email, next}: {email: string; next?: string}) => {
	if (!email) {
		return {error: "Email is required"};
	}

	const supabase = createClient();
	const {error} = await supabase.auth.signInWithOtp({
		email,
		options: {
			emailRedirectTo: getURL(`/auth/callback${next ? `?next=${next}` : ""}`),
		},
	});

	if (error) {
		console.log(error);
		return {error: "Failed to send a magic link"};
	}

	return {success: true};
};

export const handleGoogleLogin = async ({next}: {next?: string}) => {
	const supabase = createClient();
	const {data} = await supabase.auth.signInWithOAuth({
		provider: "google",
		options: {
			scopes: "profile email",
			redirectTo: getURL(`/auth/callback${next ? `?next=${next}` : ""}`),
		},
	});

	if (data.url) {
		redirect(data.url); // use the redirect API for your server framework
	}
};
