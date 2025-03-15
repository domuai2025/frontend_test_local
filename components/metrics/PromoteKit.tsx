"use client";

import {useExternal} from "@/contexts/external";
import Script from "next/script";

// Referral tracking
const PromoteKit = () => {
	const {setLoaded} = useExternal();

	return (
		process.env.NEXT_PUBLIC_PROMOTE_KIT_ID && (
			<>
				<Script
					async
					src={`https://cdn.promotekit.com/promotekit.js`}
					data-promotekit={process.env.NEXT_PUBLIC_PROMOTE_KIT_ID}
					onError={() => {
						setLoaded((prevLoaded) => ({
							...prevLoaded,
							promokit: false,
						}));
					}}
					onReady={() => {
						setLoaded((prevLoaded) => ({
							...prevLoaded,
							promokit: true,
						}));
					}}
				/>
			</>
		)
	);
};

export default PromoteKit;
