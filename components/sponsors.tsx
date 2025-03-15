import React from "react";
import {Icons} from "./icons";

const companies = [
	// Icons.nextjs,
	Icons.vercel,
	Icons.gitHub2,
];

export function Sponsors() {
	return (
		<section id="companies">
			<div className="py-14">
				<div className="container mx-auto px-4 md:px-8 align-middle">
					<h3 className="text-center text-sm font-semibold text-gray-500">POWERED BY</h3>
					<div className="relative">
						<div className="p-8 md:p-12 flex flex-wrap items-center justify-center gap-4 md:gap-8">
							{companies.map((Logo, idx) => (
								<Logo
									key={idx}
									className="h-10 w-28 px-2 dark:brightness-0 dark:invert"
								/>
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
