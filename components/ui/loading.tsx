import {Loader2} from "lucide-react";

export function Loading() {
	return (
		<div className="flex items-center justify-center h-fit">
			<div className="flex flex-col items-center my-48">
				<Loader2 className="h-12 w-12 animate-spin text-white" />
			</div>
		</div>
	);
}
