import * as Tooltip from "@radix-ui/react-tooltip";
import {Controls, useMediaState, PlayButton} from "@vidstack/react";
import {PauseIcon, PlayIcon} from "lucide-react";
import {Stars} from "./stars";

export function VideoLayout({comment}: {comment?: string}) {
	return (
		<>
			<Controls.Root className="media-controls:opacity-100 absolute inset-0 flex h-full w-full flex-col">
				<Tooltip.Provider>
					<div className="flex-1" />
					<Controls.Group className="-mt-0.5 flex w-full items-center px-2 pb-2 bg-gradient-to-b from-transparent to-black">
						<Play />
						{comment && (
							<div className="mr-0 mb-2 font-bold text-white text-right w-10/12 ">
								<div>{comment}</div>
								<Stars />
							</div>
						)}
					</Controls.Group>
				</Tooltip.Provider>
			</Controls.Root>
		</>
	);
}
export function Play() {
	const isPaused = useMediaState("paused");
	return (
		<Tooltip.Root>
			<Tooltip.Trigger asChild>
				<PlayButton className="text-white group ring-media-focus relative inline-flex h-12 w-12 cursor-pointer items-center justify-center rounded-md outline-none ring-inset hover:bg-white/20 focus-visible:ring-4 aria-disabled:hidden">
					{isPaused ? (
						<PlayIcon className="w-10 h-10 translate-x-px" />
					) : (
						<PauseIcon className="w-10 h-10" />
					)}
				</PlayButton>
			</Tooltip.Trigger>
		</Tooltip.Root>
	);
}
