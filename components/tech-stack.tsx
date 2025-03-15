import {Card, CardContent} from "@/components/ui/card";
import {BorderBeam} from "@/components/ui/border-beam";

import {
	SiAnthropic,
	SiFacebook,
	SiGoogle,
	SiOpenai,
} from "@icons-pack/react-simple-icons";

export function TechStack() {
	return (
		<>
			<div className="flex justify-center items-center overflow-hidden p-6">
				<Card className="relative bg-transparent border-none w-full max-w-3xl transition-transform duration-500 ease-in-out hover:scale-105">
					<CardContent className="p-4 border-2 rounded-lg bg-transparent">
						<BorderBeam size={250} duration={12} delay={9} />
						<div className="grid grid-cols-2 gap-4 md:grid-cols-4">
							<TechItem
								icon={<SiOpenai color="#000000" size={40} className="dark:invert" />}
								name="OpenAI"
								description="Chat GPT"
							/>
							<TechItem
								icon={<SiAnthropic color="#000000" size={40} className="dark:invert" />}
								name="Anthropic"
								description="Claude"
							/>
							<TechItem
								icon={<SiFacebook color="#000000" size={40} className="dark:invert" />}
								name="Facebook"
								description="Social Media"
							/>
							<TechItem
								icon={<SiGoogle color="#000000" size={40} className="dark:invert" />}
								name="Google"
								description="Search"
							/>
						</div>
					</CardContent>
				</Card>
			</div>
		</>
	);
}

function TechItem({
	icon,
	name,
	description,
}: {
	icon: React.ReactNode;
	name: string;
	description?: string;
}) {
	return (
		<div className="flex flex-col items-center gap-2 p-4 rounded-lg transition-transform duration-500 ease-in-out hover:scale-105 dark:bg-gray-800/50 bg-gray-300/50">
			<div className="w-10 h-10 text-center transition-transform duration-500 ease-in-out hover:scale-105">
				{icon}
			</div>
			<span className="font-semibold text-center dark:text-gray-200 text-black text-xs md:text-lg">
				{name}
			</span>
			<span className="text-xs">{description}</span>
		</div>
	);
}
