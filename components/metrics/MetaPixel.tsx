"use client";

import {useExternal} from "@/contexts/external";
import Script from "next/script";

export const MetaPixel = () => {
	const {setLoaded} = useExternal();
	return (
		process.env.NEXT_PUBLIC_META_PIXEL && (
			<>
				<Script
					id="meta-pixel-init"
					strategy="afterInteractive"
					dangerouslySetInnerHTML={{
						__html: `
                            !function(f,b,e,v,n,t,s)
                            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
                            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
                            n.queue=[];t=b.createElement(e);t.async=!0;
                            t.src=v;s=b.getElementsByTagName(e)[0];
                            s.parentNode.insertBefore(t,s)}(window, document,'script',
                            'https://connect.facebook.net/en_US/fbevents.js');
                            fbq('init', '${process.env.NEXT_PUBLIC_META_PIXEL}');
                            fbq('track', 'PageView');
                        `,
					}}
					onReady={() => {
						setLoaded((prevLoaded) => ({
							...prevLoaded,
							pixel: true,
						}));
					}}
					onError={() => {
						setLoaded((prevLoaded) => ({
							...prevLoaded,
							pixel: false,
						}));
					}}
				/>
			</>
		)
	);
};

export const PixelTrack = ({
	name,
	currency,
	value,
}: {
	name: string;
	currency?: string;
	value?: number;
}) => {
	if (!process.env.NEXT_PUBLIC_META_PIXEL || typeof window === "undefined") {
		return;
	}
	// @ts-ignore
	window._fbq("track", name, {
		...(value && {value}),
		...(currency && {currency}),
	});
};
