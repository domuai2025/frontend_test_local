import {Footer} from "@/components/footer";
import {NavBar} from "@/components/navbar/navbar";
import {siteName} from "@/config";
import {generateMetadata} from "@/lib/utils";
import {ReactNode, Suspense} from "react";

export const metadata = generateMetadata({
	title: siteName,
	keywords: ["Appliful boilerplate", "AI is the future"],
	description: "My cool AI project",
});

export default function MainLayout({children}: {children: ReactNode}) {
	return (
		<div className="flex flex-col min-h-screen animate-in fade-in">
			<Suspense>
				<NavBar />
			</Suspense>
			<div className="flex flex-col grow h-full">{children}</div>
			<Footer />
		</div>
	);
}
