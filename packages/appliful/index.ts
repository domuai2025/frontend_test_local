import dotenv from "dotenv";
import path from "path";
import Anthropic from "@anthropic-ai/sdk";
import {getAllFiles, writeFiles} from "./utils";

dotenv.config({path: path.resolve(process.cwd(), ".env")});

const client = new Anthropic({
	apiKey: process.env["ANTHROPIC_API_KEY"], // This is the default and can be omitted
});

// e.g. generateAIComponent('Youtube video transcript to summarised text')
export async function generateAIComponent(description: string): Promise<void> {
	// Prep structure
	const directories = ["app", "components"]; // appliful structure
	// const files = getAllFiles(directories);

	let system = `
  You are a professional Typescript developer working on a NextJS 14 project that uses Supabase for DB.
  You need to generate a component that matches the description.
  You must make use of these shadcn/ui components.
  Use up to date versions of all imported libraries.

  <projectStructureFiles>
    ./app/(main)/account/{newComponentName}/page.tsx
    ./app/(main)/account/{newComponentName}/{newComponentName}-form.tsx
    ./app/actions/{newActionName}.ts
    ./contexts/{newContextName}.tsx
  </projectStructureFiles>

  2. You must use the following description:
  {{DESCRIPTION}}

  3. You must generate files use existing shadcn/ui components with tailwindcss and follow the example of:
  <codeof_TextToSpeechPage>
"use client";

import {Separator} from "@/components/ui/separator";
import {TextToSpeechForm} from "./text-to-speech-form";
import {useState} from "react";
import {GeneratedAudioContext} from "@/contexts/generated-audio";

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
  </code_of_TextToSpeechPage>
  <code_of_TextToSpeechForm>
"use client";

import {zodResolver} from "@hookform/resolvers/zod";
import {useForm} from "react-hook-form";

import {Button} from "@/components/ui/button";

import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import {Input} from "@/components/ui/input";
import {toast} from "@/components/ui/use-toast";
import {useContext} from "react";
import {elevenlabsTextToSpeech} from "@/app/actions/elevenlabs";
import {useRef} from "react";
import {formSchema, formSchemaValues} from "@/types/general";
import {GeneratedAudioContext} from "@/contexts/generated-audio";

const defaultValues: Partial<formSchemaValues> = {
	text: "",
	voiceId: "21m00Tcm4TlvDq8ikWAM",
};

export function TextToSpeechForm() {
	const context = useContext(GeneratedAudioContext);
	const form = useForm<formSchemaValues>({
		resolver: zodResolver(formSchema),
		defaultValues,
	});
	const audioRef = useRef<HTMLAudioElement>(null);

	async function onSubmit(formData: formSchemaValues) {
		const t = toast({
			title: "Generating...",
			duration: Infinity,
		});

		const response = await elevenlabsTextToSpeech({...form.getValues()});

		if (response?.data?.audio) {
			toast({
				title: "Success",
				variant: "success",
				description: "Audio generated successfully",
			});

			context?.setGeneratedAudio(response.data.audio);
		} else {
			toast({
				title: "Error",
				variant: "destructive",
				description: response?.serverError || "Something went wrong",
			});
		}

		t.dismiss();
	}

	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
				<FormField
					control={form.control}
					name="text"
					render={({field}) => (
						<FormItem>
							<FormLabel>Enter the text you want to convert to speech</FormLabel>
							<FormControl>
								<Input placeholder="e.g. I am a software engineer" {...field} />
							</FormControl>
							<FormDescription>
								Audio will be generated based on the text you provide. This can be used
								for creating videos, audiobooks, podcasts, and more.
							</FormDescription>
							<FormMessage />
						</FormItem>
					)}
				/>

				<Button type="submit" loading={form.formState.isSubmitting} variant={"shiny"}>
					Generate
				</Button>
				<audio ref={audioRef} controls style={{display: "none"}} />
			</form>
		</Form>
	);
}
  </code_of_TextToSpeechForm>

  You also need to create a server action to handle the form submission.
  <serverActionTextToSpeech>
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
          throw new Error(\`ElevenLabs API error: \${res.status} \${res.statusText}\`);
        }

        const arrayBuffer = await res.arrayBuffer();
        const base64 = Buffer.from(arrayBuffer).toString("base64");

        return {
          audio: \`data:audio/mpeg;base64,\${base64}\`,
        };
      } catch (error) {
        console.error(error);
        return {
          // @ts-ignore
          error: error.message || "Failed to generate audio",
        };
      }
    });
  </serverActionTextToSpeech>

  Also add a new context provider for the new component.
  <context_GeneratedAudio>
  export const GeneratedAudioContext = createContext<{
	generatedAudio: string | null;
	setGeneratedAudio: React.Dispatch<React.SetStateAction<string | null>>;
} | null>(null);
  </context_GeneratedAudio>
  
  You must return a complete solution.
  Do not explain yourselft.
  Output files array in the following format:
  [
    {
      filePath: "..",
      content: "..."
    },
    ...
  ]
  `;

	const response = await client.messages.create({
		max_tokens: 4000,
		system,
		messages: [{role: "user", content: `Description: ${description}`}],
		model: "claude-3-5-sonnet-20240620",
	});

	if (response.content[0].type !== "text") throw new Error("No text in response");
	writeFiles(eval(response.content[0].text));
}
