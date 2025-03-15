import {adminEmail, siteName} from "@/config";
import {Metadata} from "next";

export const metadata: Metadata = {
	title: siteName,
	description: "Privacy Policy",
};

export default function PrivacyPolicy() {
	return (
		<div className="container mx-auto px-4 py-8 max-w-3xl">
			<h1 className="text-4xl font-bold mb-8 ">Privacy Policy</h1>

			<p className="mb-6">
				At {siteName}, we are committed to protecting your privacy. This policy outlines
				how we handle any information we collect from you across our website and other
				platforms we own and operate.
			</p>
		</div>
	);
}
