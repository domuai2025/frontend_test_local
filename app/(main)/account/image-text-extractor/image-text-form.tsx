import {useCallback, useContext, useState} from "react";
import {useDropzone} from "react-dropzone";
import {Button} from "@/components/ui/button";
import {uploadImage} from "@/app/actions/upload";
import {toast} from "@/components/ui/use-toast";
import {callReplicate} from "@/app/actions/replicate";
import {GeneratedTextContext} from "@/contexts/services";

export function ImageTextForm() {
	const context = useContext(GeneratedTextContext);
	const [files, setFiles] = useState<File[]>([]);

	const onDrop = useCallback(async (acceptedFiles: any) => {
		if (acceptedFiles.length > 0) {
			console.log(acceptedFiles);
			const t = toast({
				title: "Uploading image",
				description: "Please wait...",
				duration: Infinity,
			});
			setFiles(acceptedFiles);

			const formData = new FormData();
			formData.append("image", acceptedFiles[0]);

			const {
				success: uploadSuccess,
				data: uploadData,
				error: uploadError,
			} = await uploadImage(formData);

			if (uploadSuccess) {
				const {data, error} = await callReplicate({
					type: "image-text-extractor",
					input: {
						image: uploadData?.url || "",
					},
				});

				if (data && typeof data === "string") {
					context?.setGeneratedText(data);
				}

				if (!data || error) {
					console.log(error);
					toast({
						title: "Image extractor failed",
						variant: "destructive",
						description: error || "Unable to find text in image",
					});
				}
			}

			if (uploadError) {
				console.log(uploadError);
				toast({
					title: "Image upload failed",
					variant: "destructive",
					description: uploadError,
				});
			}

			t.dismiss();
		}
	}, []);

	const {getRootProps, getInputProps, isDragActive, acceptedFiles} = useDropzone({
		onDrop,
		accept: {
			"image/jpeg": [".jpg", ".jpeg"],
			"image/png": [".png"],
		},
		maxFiles: 1, // Limit to one file
	});

	const clearFiles = (e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();
		e.stopPropagation();
		setFiles([]);
		acceptedFiles.length = 0;
		acceptedFiles.splice(0, acceptedFiles.length);
	};

	return (
		<div
			{...getRootProps()}
			className={`flex h-[250px] shrink-0 items-center justify-center rounded-md border border-dashed cursor-pointer ${
				isDragActive ? "bg-muted/50" : ""
			}`}
		>
			<input {...getInputProps()} />
			<div className="mx-auto flex max-w-[420px] flex-col items-center justify-center text-center">
				{files.length === 0 && (
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						strokeWidth="2"
						strokeLinecap="round"
						strokeLinejoin="round"
						className="feather feather-upload h-10 w-10 text-muted-foreground"
					>
						<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
						<polyline points="17 8 12 3 7 8" />
						<line x1="12" y1="3" x2="12" y2="15" />
					</svg>
				)}

				{!files.length ? (
					<>
						<h3 className="mt-4 text-lg font-semibold">Drop your image here</h3>
						<p className="mb-4 mt-2 text-sm text-muted-foreground">
							You have not added any images.
						</p>
					</>
				) : (
					<>
						<h3 className="mt-4 text-lg mb-2 font-semibol break-words break-all">
							{files[0].name}
						</h3>
						<Button
							variant="outline"
							color="destructive"
							onClick={clearFiles}
							className="mt-2"
						>
							Clear
						</Button>
					</>
				)}
			</div>
		</div>
	);
}
