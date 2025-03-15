"use client";

import {SubmitButton} from "@/components/ui/submit-button";
import {Input} from "@/components/ui/input";
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import {Icons} from "@/components/icons";
import {EnvelopeOpenIcon} from "@radix-ui/react-icons";
import {handleGoogleLogin, handleMagicLink} from "./actions";
import {toast} from "@/components/ui/use-toast";
import {zodResolver} from "@hookform/resolvers/zod";
import {z} from "zod";
import {useForm} from "react-hook-form";
import {Form, FormControl, FormField, FormItem, FormMessage} from "@/components/ui/form";
import {Button} from "@/components/ui/button";
import {emailSchema} from "@/types/general";
import useIsUIWebView from "@/hooks/useIsUIWebView";
import {useSearchParams} from "next/navigation";

export default function AuthUI() {
	const isUIWebView = useIsUIWebView();
	const searchParams = useSearchParams();
	const next = searchParams.get("next") ?? undefined;

	// Init zod form
	const form = useForm<z.infer<typeof emailSchema>>({
		resolver: zodResolver(emailSchema),
		defaultValues: {
			email: "",
		},
	});

	// Handle submission
	const onSubmit = form.handleSubmit(async (formData) => {
		const res = await handleMagicLink({email: formData.email, next});
		if (res.error) {
			toast({
				title: "Oops!",
				variant: "destructive",
				description: res.error,
			});
		}
		if (res.success) {
			toast({
				variant: "success",
				title: "Success",
				description: "Check your email for the magic link",
			});
		}
		// Reset form value
		form.setValue("email", "");
	});

	return (
		<div className="flex items-center justify-center min-h-fit py-12">
			<Card className="w-full max-w-md">
				<CardHeader>
					<CardTitle className="text-2xl font-bold text-center">Welcome</CardTitle>
					<p className="text-center">Login to continue</p>
				</CardHeader>
				<CardContent>
					{!isUIWebView && (
						<>
							<form action={handleGoogleLogin.bind(null, {next})}>
								<SubmitButton className="w-full">
									<Icons.google className="w-5 h-5 mr-2" />
									Sign in with Google
								</SubmitButton>
							</form>
							<div className="my-4 text-center">
								<span className="text-gray-500">Or continue with</span>
							</div>
						</>
					)}
					<Form {...form}>
						<form onSubmit={onSubmit} className="space-y-4">
							<FormField
								control={form.control}
								name="email"
								render={({field}) => (
									<FormItem>
										<FormControl>
											<Input placeholder="Your email" {...field} />
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>

							<Button
								type="submit"
								className="w-full"
								loading={form.formState.isSubmitting}
							>
								<EnvelopeOpenIcon className="mr-2 h-4 w-4" />
								Send Magic Link
							</Button>
						</form>
					</Form>
				</CardContent>
			</Card>
		</div>
	);
}
