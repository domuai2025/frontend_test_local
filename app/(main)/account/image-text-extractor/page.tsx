"use client";

import React, {createContext, useState} from "react";
import {Separator} from "@/components/ui/separator";
import {ImageTextForm} from "./image-text-form";
import {GeneratedTextContext} from "@/contexts/services";

export default function ImageToTextPage() {
	const [generatedText, setGeneratedText] = useState<string | null>(null);

	return (
		<GeneratedTextContext.Provider value={{generatedText, setGeneratedText}}>
			<div className="flex flex-col lg:flex-row gap-12">
				<div className="lg:w-1/2 space-y-6">
					<div>
						<h3 className="text-lg font-medium">Image text extractor</h3>
						<p className="text-sm text-muted-foreground">
							Upload an image and extract the text from it.
						</p>
						<ul className="text-sm text-muted-foreground list-disc pl-5 space-y-2 mt-2">
							<li>It will be uploaded to Vercel Blob Storage.</li>
							<li>Image URL is then sent to the Replicate API.</li>
							<li>
								Finally, API response is then retrieved via server action and displayed.
							</li>
						</ul>
						<small className="mt-4">
							Cold models have to be booted and can take a while to respond.
						</small>
					</div>
					<Separator />
					<ImageTextForm />
				</div>
				<div className="lg:w-1/2">
					<h2 className="text-lg font-medium">Generated Text</h2>
					<div className="pt-5">
						{generatedText ? (
							<pre className="mt-2 w-[340px] rounded-md bg-muted p-4">
								<code className="text-white text-wrap">{generatedText}</code>
							</pre>
						) : (
							<p>No text generated yet.</p>
						)}
					</div>
				</div>
			</div>
		</GeneratedTextContext.Provider>
	);
}
