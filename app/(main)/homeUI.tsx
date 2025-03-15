"use client";
import {About} from "@/components/about";
import {Cta} from "@/components/cta";
import FAQ from "@/components/faq";
import Features from "@/components/features";
import {Hero} from "@/components/hero";
import {HowItWorks} from "@/components/how-it-works";
import {Newsletter} from "@/components/newsletter";
import {Pricing} from "@/components/pricing";
import Roadmap from "@/components/roadmap";
import {Services} from "@/components/services";
import {Sponsors} from "@/components/sponsors";
import {TechStack} from "@/components/tech-stack";
import {TestimonialQuote} from "@/components/testimonial-quote";
import {Testimonials} from "@/components/testimonials";
import ScrollProgress from "@/components/ui/scroll-progress";
import {testimonials} from "@/config";
import {CheckoutProvider} from "@/contexts/checkout";
import {useExternal} from "@/contexts/external";
import {stripeCheckoutPreload} from "@/lib/stripe/config";
import React, {useEffect, useState} from "react";

export default function HomePage() {
	// Preload stripe so checkout button is instant
	const [data, setData] = useState<any>(null);
	const {loaded} = useExternal();
	useEffect(() => {
		async function preFetchData() {
			// @ts-ignore
			const referral = window.promotekit_referral;
			if (referral) {
				console.log("Referral:", referral);
			}
			const result = await stripeCheckoutPreload({
				coupon: "LAUNCH",
				...(referral && {
					referral,
				}),
			});
			setData(result);
		}

		if (loaded.promokit !== undefined) {
			preFetchData();
		}
	}, [loaded.promokit]);

	return (
		<CheckoutProvider value={data}>
			<ScrollProgress className="top-[0px]" />
			<Hero />
			<TechStack />
			<Sponsors />
			<HowItWorks />
			<Services />
			<Features />
			<About />
			<Pricing />
			<FAQ />
			<Testimonials testimonials={testimonials} />
			<Roadmap />
			<Cta />
			<Newsletter />
		</CheckoutProvider>
	);
}
