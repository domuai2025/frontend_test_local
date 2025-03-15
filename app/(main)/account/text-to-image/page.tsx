"use client";

import {Separator} from "@/components/ui/separator";
import {TextToImageForm} from "./text-to-image-form";
import Image from "next/image";
import {useState} from "react";
import {GeneratedImageContext} from "@/contexts/services";

export default function TextToImagePage() {
	const [generatedImage, setGeneratedImage] = useState<string | null>(null);

	return (
		<GeneratedImageContext.Provider value={{generatedImage, setGeneratedImage}}>
			<div className="flex flex-col lg:flex-row gap-12">
				<div className="lg:w-1/2 space-y-6">
					<div>
						<h3 className="text-lg font-medium">Text to image</h3>
						<p className="text-sm text-muted-foreground">
							A fast text-to-image model that makes high-quality images. Uses Replicate
							API to generate the images. Model is based on Flux by Black Forest Labs.
							<br />
							<br />
							<span className="font-bold">P.S.</span> This model has a safety checker
							disabled.
						</p>
					</div>
					<Separator />
					<TextToImageForm />
				</div>
				<div className="lg:w-1/2">
					<h2 className="text-lg font-medium">Generated Image</h2>
					<div className="pt-5">
						{generatedImage ? (
							<Image
								src={generatedImage}
								alt="Generated Image"
								width={512}
								height={512}
							/>
						) : (
							<Image
								src="/media/biker.webp"
								alt="Generated Image"
								width={512}
								height={512}
							/>
						)}
					</div>
				</div>
			</div>
		</GeneratedImageContext.Provider>
	);
}
