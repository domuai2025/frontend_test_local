"use client";

import Script from "next/script";
import {useExternal} from "@/contexts/external";

const MicrosoftClarity = () => {
	const {setLoaded} = useExternal();
	return (
		process.env.NEXT_PUBLIC_MICROSOFT_CLARITY && (
			<Script
				id="microsoft-clarity-init"
				strategy="afterInteractive"
				dangerouslySetInnerHTML={{
					__html: `
                (function(c,l,a,r,i,t,y){
                    c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                    t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                    y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
                })(window, document, "clarity", "script", "${process.env.NEXT_PUBLIC_MICROSOFT_CLARITY}");
                `,
				}}
				onReady={() => {
					setLoaded((prevLoaded) => ({
						...prevLoaded,
						clarity: true,
					}));
				}}
				onError={() => {
					setLoaded((prevLoaded) => ({
						...prevLoaded,
						clarity: false,
					}));
				}}
			/>
		)
	);
};

export default MicrosoftClarity;
