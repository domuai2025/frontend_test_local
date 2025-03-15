"use client";

import * as React from "react";
import {cn} from "@/lib/utils";
import {Button, ButtonProps, buttonVariants} from "./button";
import {toast} from "./use-toast";
import {PixelTrack} from "../metrics/MetaPixel";
import {useCheckout} from "@/contexts/checkout";
import {useRouter} from "next/navigation";
import {getUser} from "@/lib/supabase/queries";
import {createClient} from "@/lib/supabase/client";

export const CheckoutButton = React.forwardRef<
	HTMLButtonElement,
	{stripePriceId: string} & ButtonProps
>(({className, stripePriceId, size, variant, ...props}, ref) => {
	const checkout = useCheckout();
	const router = useRouter();
	// if undefined, then its not mounted and just hide loading
	const [isLoading, setIsLoading] = React.useState(checkout !== undefined);

	// Loading effect until checkout is ready
	React.useEffect(() => {
		if (checkout) setIsLoading(false);
	}, [checkout]);

	const goToCheckout = (priceId: string) => async () => {
		PixelTrack({
			name: "initiateCheckout",
		});

		if (checkout?.sessionUrls?.[priceId]) {
			// Check preloaded (redirect instantly)
			window.location.href = checkout.sessionUrls[priceId];
		} else {
			setIsLoading(true);
			const supabase = createClient();
			const user = await getUser(supabase);

			// If priceId is not set, then just redirect to extension page
			if (!priceId) {
				const chromeUrl =
					"https://chromewebstore.google.com/detail/tubedpro/hnhjbbobhaklljhbngmbdhdlplednmjc";

				router.push(user ? chromeUrl : "/auth?next=" + chromeUrl);
				return;
			}

			if (!user) {
				// Must be logged in
				router.push("/auth?next=/api/checkout/stripe?priceId=" + priceId);
			} else {
				router.push("/api/checkout/stripe?priceId=" + priceId);
			}
		}
	};

	return (
		<Button
			className={cn(buttonVariants({variant, size, className}))}
			onClick={goToCheckout(stripePriceId)}
			loading={isLoading}
			{...props}
		>
			{props.children}
		</Button>
	);
});

CheckoutButton.displayName = "CheckoutButton";
