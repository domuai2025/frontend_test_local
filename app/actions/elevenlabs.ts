"use server";

import {actionClient} from "@/lib/safe-action";
import {formSchema} from "@/types/general";

export const elevenlabsTextToSpeech = actionClient
	.schema(formSchema)
	.action(async ({parsedInput: {text, voiceId}}) => {
		try {
			console.log(text, voiceId);
			if (!process.env.ELEVENLABS_API_KEY) {
				throw new Error("ELEVENLABS_API_KEY is not set");
			}

			const body = {
				text,
				model_id: "eleven_monolingual_v1",
				voice_settings: {
					stability: 0.5,
					similarity_boost: 0.5,
				},
			};

			const options = {
				method: "POST",
				body: JSON.stringify(body),
			};

			const res = await fetch("https://api.elevenlabs.io/v1/text-to-speech/" + voiceId, {
				...options,
				headers: {
					Accept: "audio/mpeg",
					"Content-Type": "application/json",
					"xi-api-key": process.env.ELEVENLABS_API_KEY,
				},
			});

			if (!res.ok) {
				throw new Error(`ElevenLabs API error: ${res.status} ${res.statusText}`);
			}

			const arrayBuffer = await res.arrayBuffer();
			const base64 = Buffer.from(arrayBuffer).toString("base64");

			return {
				audio: `data:audio/mpeg;base64,${base64}`,
			};
		} catch (error) {
			console.error(error);
			return {
				// @ts-ignore
				error: error.message || "Failed to generate audio",
			};
		}
	});
