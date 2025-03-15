import {Eye, Image, Speech} from "lucide-react";
import React, {useState} from "react";

const Features = () => {
	const featuresData = [
		{
			icon: Image,
			title: "Feature 1",
			description: "Feature 1 description",
			// add your video url here e.g. https://vercel-storage.com/media/example.mp4
			video: "",
			muted: true,
		},

		{
			icon: Speech,
			title: "Feature 2",
			description: "Feature 2 description",
			video: "",
			muted: false,
		},
		{
			icon: Eye,
			title: "Feature 3",
			description: "Feature 3 description",
			video: "",
			muted: true,
		},
	];

	const [activeFeature, setActiveFeature] = useState(featuresData[0]);

	return (
		<div className="text-white my-8 p-6">
			<div className="container  max-w-6xl mx-auto">
				<h2 className="text-sm md:text-xl text-center font-bold text-gray-400">
					Extra Features
				</h2>
				<p className="text-2xl md:text-4xl text-center font-bold mt-4 bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
					Some cool features we got
				</p>
				<div className="flex flex-col md:flex-row gap-8 mt-16">
					<div className="w-full md:w-1/3">
						<ul className="">
							{featuresData.map((feature) => (
								<li
									key={feature.title}
									className={`cursor-pointer transition-all duration-300 px-2 py-5 ${
										activeFeature.title === feature.title
											? "opacity-100 scale-105"
											: "opacity-60 hover:opacity-80 hover:scale-102"
									}`}
									onClick={() => setActiveFeature(feature)}
								>
									<div className="flex items-center gap-3">
										<feature.icon className="w-6 h-6 text-primary" />
										<h3 className="text-primary text-lg font-semibold">
											{feature.title}
										</h3>
									</div>
									<p className="mt-2 text-sm text-secondary-foreground">
										{feature.description}
									</p>
								</li>
							))}
						</ul>
					</div>

					<div className="w-full md:w-2/3">
						{activeFeature.video ? (
							<video
								src={activeFeature.video}
								autoPlay
								muted={activeFeature.muted}
								loop
							/>
						) : (
							<>
								<div
									role="status"
									className="flex items-center justify-center min-h-52 h-full max-w-full bg-gray-300 rounded-lg animate-pulse dark:bg-gray-700"
								>
									<svg
										className="w-10 h-10 text-gray-200 dark:text-gray-600"
										aria-hidden="true"
										xmlns="http://www.w3.org/2000/svg"
										fill="currentColor"
										viewBox="0 0 16 20"
									>
										<path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z" />
										<path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM9 13a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2Zm4 .382a1 1 0 0 1-1.447.894L10 13v-2l1.553-1.276a1 1 0 0 1 1.447.894v2.764Z" />
									</svg>
									<span className="sr-only">Loading...</span>
								</div>
							</>
						)}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Features;
