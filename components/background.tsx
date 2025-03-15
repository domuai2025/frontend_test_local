export const Background = ({theme, type}: {theme?: string; type: "v1" | "v2" | "v3"}) => {
	if (theme && theme.match(/dark/)) {
		return <BackgroundBlack type={type} />;
	}

	// Will default to light
	return <BackgroundWhite />;
};

// const BackgroundWhite = () => (
// 	<div className="fixed left-0 top-0 -z-10 h-full w-full">
// 		<div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]"></div>
// 	</div>
// );

const BackgroundWhite = () => (
	<div className="fixed left-0 top-0 -z-10 h-full w-full bg-white">
		<div className="absolute h-full w-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
	</div>
);

const BackgroundBlack = ({type}: {type: "v1" | "v2" | "v3"}) => (
	<div className="fixed left-0 top-0 -z-10 h-full w-full">
		{type === "v1" && <BackgroundBlackV1 />}
		{type === "v2" && <BackgroundBlackV2 />}
		{type === "v3" && <BackgroundBlackV3 />}
	</div>
);

const BackgroundBlackV1 = () => (
	<div className="relative h-full w-full bg-slate-950">
		<div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
	</div>
);

const BackgroundBlackV2 = () => (
	<div className="fixed top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
);

const BackgroundBlackV3 = () => (
	<div className="fixed inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_70%,hsl(var(--primary))_100%)]"></div>
);
