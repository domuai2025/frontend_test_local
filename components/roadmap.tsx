import React from "react";
import {CircleCheck} from "lucide-react";

const inProgressItems = [
	{
		title: "Will be done soon...",
		description: "Let them cook",
	},
];

const Roadmap = () => {
	return (
		<div className="bg-secondary/50 text-secondary p-8 max-w-3xl mx-auto rounded-xl">
			<h1 className="text-4xl font-bold mb-2 bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
				Roadmap
			</h1>
			<p className="mb-8 text-gray-400">We are working on these features right now.</p>

			<div className="space-y-6 mb-6">
				{inProgressItems.map((item, index) => (
					<div key={index} className="flex items-start">
						<div className="mr-4 mt-1">
							<CircleCheck className="text-primary" size={24} />
						</div>
						<div>
							<div className="bg-primary text-primary-foreground text-xs font-semibold px-2 py-1 rounded-full inline-block mb-2">
								In progress
							</div>
							<h2 className="text-xl font-semibold mb-2 text-primary">{item.title}</h2>
							<p className="text-gray-400">{item.description}</p>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Roadmap;
