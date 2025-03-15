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
import {toast} from "@/components/ui/use-toast";
import {useContext} from "react";
import {elevenlabsTextToSpeech} from "@/app/actions/elevenlabs";
import {useRef} from "react";
import {formSchema, formSchemaValues} from "@/types/general";
import {GeneratedAudioContext} from "@/contexts/services";
import {Textarea} from "@/components/ui/textarea";

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
								<Textarea placeholder="e.g. I am a software engineer" {...field} />
							</FormControl>
							<FormDescription>
								Audio will be generated based on the text you provide. This can be used
								for creating videos, audiobooks, podcasts, and more.
							</FormDescription>
							<FormMessage />
						</FormItem>
					)}
				/>

				<Button type="submit" loading={form.formState.isSubmitting}>
					Generate
				</Button>
				<audio ref={audioRef} controls style={{display: "none"}} />
			</form>
		</Form>
	);
}
