import {Separator} from "@/components/ui/separator";
import {AIChatForm} from "./ai-chat-form";

export default function TextToImagePage() {
	return (
		<div className="flex flex-col lg:flex-row gap-12">
			<div className="lg:w-1/2 space-y-6">
				<div>
					<h3 className="text-lg font-medium">Chat with AI</h3>
					<p className="text-sm text-muted-foreground">OpenAI GPT-4o mini model</p>
				</div>
				<Separator />
				<AIChatForm />
			</div>
		</div>
	);
}
