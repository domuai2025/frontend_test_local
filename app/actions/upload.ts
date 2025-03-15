"use server";
import {PutBlobResult, put} from "@vercel/blob";

export async function uploadImage(
	formData: FormData,
): Promise<{success: boolean; data?: PutBlobResult | null; error?: string | null}> {
	try {
		const file = formData.get("image") as File;
		if (!file) {
			throw new Error("No file uploaded");
		}

		// Upload to Vercel Blob
		const blob = await put(file.name, file, {
			access: "public",
		});

		return {success: true, data: blob};
	} catch (error) {
		console.error("Error in uploadImage:", error);
		return {success: false, error: "Failed to upload image"};
	}
}
