"use server";
import {replicate} from "@/lib/replicate";

type ReplicateInput =
	| {type: "text-to-image"; input: {prompt: string}}
	| {type: "text-to-speech"; input: {text: string}}
	| {type: "image-text-extractor"; input: {image: string}};

export const callReplicate = async ({
	type,
	input,
}: ReplicateInput): Promise<{
	success: boolean;
	data?: Array<string> | object | string;
	error?: string;
}> => {
	// check for user credits in db
	// const user = await getUser(user.id);
	// if (user.credits === 0) {
	//     return {
	//         success: false,
	//         error: "You have no credits left",
	//     };
	// }
	try {
		let output;
		switch (type) {
			case "text-to-image":
				output = await replicate.run("black-forest-labs/flux-schnell", {
					input: {
						prompt: input.prompt,
						num_outputs: 1,
						aspect_ratio: "1:1",
						output_format: "webp",
						output_quality: 80,
						disable_safety_checker: true,
					},
				});

				break;

			case "image-text-extractor":
				output = await replicate.run(
					"abiruyt/text-extract-ocr:a524caeaa23495bc9edc805ab08ab5fe943afd3febed884a4f3747aa32e9cd61",
					{
						input: {
							image: input.image,
						},
					},
				);
				break;

			case "text-to-speech":
				output = await replicate.run(
					"adirik/styletts2:989cb5ea6d2401314eb30685740cb9f6fd1c9001b8940659b406f952837ab5ac",
					{
						input: {
							beta: 0.7,
							seed: 0,
							text: input.text,
							alpha: 0.3,
							diffusion_steps: 10,
							embedding_scale: 1.5,
						},
					},
				);
				break;
			default:
				throw new Error("Invalid replicate type");
		}

		return {
			success: true,
			data: output,
		};
	} catch (error) {
		console.error(error);
		return {
			success: false,
			// @ts-ignore
			error: error.message || "An error occurred while calling the replicate function",
		};
	}
};
