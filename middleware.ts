import {type NextRequest, NextResponse} from "next/server";
import {Ratelimit} from "@upstash/ratelimit";
import {Redis} from "@upstash/redis";
import {updateSession} from "./lib/supabase/middleware";

const isRateLimitEnabled =
	!!process.env.UPSTASH_REDIS_REST_URL && !!process.env.UPSTASH_REDIS_REST_TOKEN;

export const redis =
	isRateLimitEnabled &&
	new Redis({
		url: process.env.UPSTASH_REDIS_REST_URL,
		token: process.env.UPSTASH_REDIS_REST_TOKEN,
	});

const ratelimit =
	redis &&
	new Ratelimit({
		redis,
		// will limit if more than 20 requests from the same IP in 5 seconds
		limiter: Ratelimit.slidingWindow(20, "5s"),
	});

export async function middleware(request: NextRequest) {
	// Check if the request is rate limited
	// Enabled in production only
	if (process.env.NODE_ENV === "production" && ratelimit) {
		const ip = request.ip ?? "127.0.0.1";
		const {success} = await ratelimit.limit(ip);

		if (!success) {
			// Rate limited and redirected to /blocked page
			// It also has to be included inside config.matcher below to prevent redirect loop
			return NextResponse.redirect(new URL("/blocked", request.url));
		}
	}

	// This will refresh session if expired - required for Server Components
	const response = await updateSession(request);

	// Randomly generated session for stripe preload
	const sessionId = request.cookies.get("sessionId")?.value;

	if (!sessionId) {
		const randomUUID = crypto.randomUUID();
		// Set the random guest ID as a cookie
		response.cookies.set("sessionId", randomUUID, {
			httpOnly: true,
			secure: process.env.NODE_ENV === "production",
			sameSite: "strict",
			maxAge: 60 * 60 * 24 * 30, // 30 days
			path: "/",
		});
	}

	return response;
}

export const config = {
	matcher: [
		/*
		 * Match all request paths except:
		 * - _next/static (static files)
		 * - _next/image (image optimization files)
		 * - favicon.ico (favicon file)
		 * - images - .svg, .png, .jpg, .jpeg, .gif, .webp, .mp4
		 * Feel free to modify this pattern to include more paths.
		 */
		"/((?!_next/static|blocked|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|mp4)$).*)",
	],
};
