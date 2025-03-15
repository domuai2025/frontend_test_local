"use client";

import {Separator} from "@/components/ui/separator";
import {TextToSpeechForm} from "./text-to-speech-form";
import {useState} from "react";
import {GeneratedAudioContext} from "@/contexts/services";

export default function TextToSpeechPage() {
	const [generatedAudio, setGeneratedAudio] = useState<string | null>(null);

	return (
		<GeneratedAudioContext.Provider value={{generatedAudio, setGeneratedAudio}}>
			<div className="flex flex-col lg:flex-row gap-12">
				<div className="lg:w-1/2 space-y-6">
					<div>
						<h3 className="text-lg font-medium">Text to speech</h3>
						<p className="text-sm text-muted-foreground">
							Convert text to speech using Elevenlabs API. This example converts API
							response into Base64 audio that is later played in the browser. No audio
							files are saved on the server.
						</p>
					</div>
					<Separator />
					<TextToSpeechForm />
				</div>
				<div className="lg:w-1/2">
					<h2 className="text-lg font-medium">Generated Audio</h2>
					<div className="pt-5">
						<audio controls src={generatedAudio || "/media/text-to-speech.mp3"} />
					</div>
				</div>
			</div>
		</GeneratedAudioContext.Provider>
	);
}
