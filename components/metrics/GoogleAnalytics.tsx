"use client";

import Script from "next/script";
import {useExternal} from "@/contexts/external";

const GoogleAnalytics = () => {
	const {setLoaded} = useExternal();
	return (
		process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS && (
			<>
				<Script
					strategy="afterInteractive"
					src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
					onReady={() => {
						setLoaded((prevLoaded) => ({
							...prevLoaded,
							analytics: true,
						}));
					}}
					onError={() => {
						setLoaded((prevLoaded) => ({
							...prevLoaded,
							analytics: false,
						}));
					}}
				/>
				<Script
					id="google-analytics-init"
					strategy="afterInteractive"
					dangerouslySetInnerHTML={{
						__html: `
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());

                    gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}');
                    `,
					}}
				/>
			</>
		)
	);
};

export default GoogleAnalytics;
