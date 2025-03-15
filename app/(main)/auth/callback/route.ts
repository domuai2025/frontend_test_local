import {NextResponse} from "next/server";
import {createClient} from "@/lib/supabase/server";
import {redirectAfterLogin} from "@/config";
import {loops} from "@/lib/loops";

export async function GET(request: Request) {
	const {searchParams, origin} = new URL(request.url);
	const code = searchParams.get("code");
	// if "next" is in param, use it as the redirect URL
	const next = searchParams.get("next") ?? redirectAfterLogin;

	if (code) {
		const supabase = createClient();
		const {error, data} = await supabase.auth.exchangeCodeForSession(code);
		if (!error) {
			// send a demo-joined event to loops
			if (loops) {
				await loops.sendEvent({
					email: data.user?.email,
					eventName: "demo-joined",
					eventProperties: {
						session_id: crypto.randomUUID(),
					},
				});
			}

			// if next is full url, then just redirect to it
			if (next.startsWith("https")) {
				return NextResponse.redirect(next);
			}
			return NextResponse.redirect(`${origin}${next}`);
		}
	}

	// return the user to an error page with instructions
	return NextResponse.redirect(`${origin}/auth/error`);
}
