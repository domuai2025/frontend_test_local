import {cn} from "@/lib/utils";
import * as React from "react";
import {Icons} from "./icons";
import {SiNodedotjs, SiSupabase} from "@icons-pack/react-simple-icons";

export const OrbitingCircles = React.forwardRef<
	HTMLDivElement,
	{className?: string; children?: React.ReactNode}
>(({className, ...props}, ref) => {
	return (
		<div
			ref={ref}
			className="relative flex h-[500px] w-full min-w-full items-center justify-center overflow-hidden rounded-lg"
		>
			<div className="bg-white dark:bg-transparent">
				<p className="z-10 pointer-events-none animate-pulse bg-gradient-to-b from-primary to-gray-300/80 bg-clip-text text-center text-6xl font-semibold leading-none text-transparent ">
					orbit text
				</p>
			</div>

			<OrbitingCircle
				className="h-[40px] w-[40px] border-none bg-transparent"
				duration={20}
				delay={0}
				radius={80}
			>
				<Icons.apple />
			</OrbitingCircle>
			<OrbitingCircle
				className="h-[40px] w-[40px] border-none bg-transparent"
				duration={20}
				delay={10}
				radius={80}
			>
				<Icons.google />
			</OrbitingCircle>

			<OrbitingCircle
				className="h-[40px] w-[40px] border-none bg-transparent"
				radius={200}
				duration={20}
				reverse
			>
				<Icons.gitHub />
			</OrbitingCircle>
			<OrbitingCircle
				className="h-[60px] w-[60px] border-none bg-transparent"
				radius={200}
				delay={100}
				duration={20}
				reverse
			>
				<Icons.nextjs className="dark:invert" />
			</OrbitingCircle>

			<OrbitingCircle
				className="h-[40px] w-[40px] border-none bg-transparent"
				radius={140}
				duration={40}
				delay={70}
				reverse
			>
				<Icons.googleDrive />
			</OrbitingCircle>
		</div>
	);
});

OrbitingCircles.displayName = "OrbitingCircles";

function OrbitingCircle({
	className,
	children,
	reverse,
	duration = 20,
	delay = 10,
	radius = 50,
	path = true,
}: {
	className?: string;
	children?: React.ReactNode;
	reverse?: boolean;
	duration?: number;
	delay?: number;
	radius?: number;
	path?: boolean;
}) {
	return (
		<>
			{path && (
				<svg
					xmlns="http://www.w3.org/2000/svg"
					version="1.1"
					className="pointer-events-none absolute inset-0 h-full w-full"
				>
					<circle
						className="stroke-black/10 stroke-1 dark:stroke-white/10"
						cx="50%"
						cy="50%"
						r={radius}
						fill="none"
						strokeDasharray={"4 4"}
					/>
				</svg>
			)}

			<div
				style={
					{
						"--duration": duration,
						"--radius": radius,
						"--delay": -delay,
					} as React.CSSProperties
				}
				className={cn(
					"absolute flex h-full w-full transform-gpu animate-orbit items-center justify-center rounded-full border bg-black/10 [animation-delay:calc(var(--delay)*1000ms)]",
					{"[animation-direction:reverse]": reverse},
					className,
				)}
			>
				{children}
			</div>
		</>
	);
}
