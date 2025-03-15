"use client";

import {zodResolver} from "@hookform/resolvers/zod";
import {useForm} from "react-hook-form";
import {z} from "zod";

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
import {callReplicate} from "@/app/actions/replicate";
import {useContext} from "react";
import {GeneratedImageContext} from "@/contexts/services";
import {Textarea} from "@/components/ui/textarea";

const formSchema = z.object({
	input: z
		.string()
		.min(2, {
			message: "Input must be at least 2 characters.",
		})
		.max(1000, {
			message: "Input must not be longer than 1000 characters.",
		}),
});

type formSchemaValues = z.infer<typeof formSchema>;

const defaultValues: Partial<formSchemaValues> = {
	input: "",
};

export function TextToImageForm() {
	const context = useContext(GeneratedImageContext);
	const form = useForm<formSchemaValues>({
		resolver: zodResolver(formSchema),
		defaultValues,
	});

	async function onSubmit(formData: formSchemaValues) {
		const t = toast({
			title: "Generating...",
		});

		const {data, error} = await callReplicate({
			type: "text-to-image",
			input: {prompt: formData.input},
		});

		if (error) {
			toast({
				title: "Error",
				description: error,
			});
			return;
		}

		t.dismiss();

		if (data && Array.isArray(data)) {
			context?.setGeneratedImage(data[0]);
		} else {
			toast({
				title: "Error",
				description: "Unexpected data format",
			});
		}
	}

	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
				<FormField
					control={form.control}
					name="input"
					render={({field}) => (
						<FormItem>
							<FormLabel>Describe your image</FormLabel>
							<FormControl>
								<Textarea
									style={{
										height: "200px",
									}}
									placeholder="e.g. A rugged man in his mid-30s, with windswept hair and a scruffy beard, leans forward on a sleek, black sport motorcycle. He's wearing a worn leather jacket, faded jeans, and sturdy boots. The bike roars down a winding coastal highway at sunset, with the ocean visible to one side and steep cliffs on the other. Golden light glints off the bike's chrome accents and the rider's mirrored sunglasses. A sense of freedom and adventure permeates the scene as the rider navigates a sharp curve, his body angled into the turn."
									{...field}
								/>
							</FormControl>
							<FormDescription>
								Image will be generated based on the prompt you provide.
							</FormDescription>
							<FormMessage />
						</FormItem>
					)}
				/>

				<Button type="submit" loading={form.formState.isSubmitting}>
					Generate
				</Button>
			</form>
		</Form>
	);
}
