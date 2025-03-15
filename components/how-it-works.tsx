"use client";
import {howItWorks} from "@/config";

export const HowItWorks = () => {
	return (
		<div className="bg-muted/50 dark:bg-muted/20 py-24 sm:py-32 mb-28">
			<div className="mx-auto max-w-7xl px-6 lg:px-8">
				<div className="mx-auto max-w-2xl text-center">
					<h2 className="text-3xl md:text-4xl font-bold">
						<span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
							Get started fast
						</span>{" "}
					</h2>

					<p className="mt-6 text-lg leading-8 text-gray-500 dark:text-slate-300">
						[change this text to something more catchy]
					</p>
				</div>
				<div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
					<dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-3 lg:gap-y-16">
						{howItWorks.map((feature, i) => (
							<div key={feature.name} className="relative pl-16">
								<dt className="text-base font-semibold leading-7 text-gray-900 dark:text-slate-300">
									<div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg text-3xl">
										{typeof feature.icon === "string" ? (
											feature.icon
										) : (
											<feature.icon
												className="h-6 w-6 text-white dark:text-black"
												aria-hidden="true"
											/>
										)}
									</div>
									{feature.name}
								</dt>
								<dd className="mt-2 text-base leading-7 text-gray-600 dark:text-white whitespace-pre-line">
									{feature.description}
								</dd>
							</div>
						))}
					</dl>
				</div>
				<div className="pt-10">
					<p className="mt-6 leading-8 font-bold text-center text-2xl text-primary">
						Happy coding! 😊
					</p>
				</div>
			</div>
		</div>
	);
};
