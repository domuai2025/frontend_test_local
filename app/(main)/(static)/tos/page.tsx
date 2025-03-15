import {siteName} from "@/config";
import {Metadata} from "next";

export const metadata: Metadata = {
	title: siteName,
	description: "Terms and Conditions",
};

export default function Tos() {
	return (
		<div className="container mx-auto px-4 py-8 max-w-3xl">
			<h1 className="text-4xl font-bold mb-8">Terms and Conditions</h1>

			<h2 className="text-2xl font-semibold mb-3">1. Acceptance of Terms</h2>
			<p className="mb-6">
				By using {siteName}, you acknowledge and agree to be bound by these terms and
				conditions.
			</p>
		</div>
	);
}
