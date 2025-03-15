"use client";

import {Button} from "./ui/button";
import {Input} from "./ui/input";
import {toast} from "./ui/use-toast";
import {sendEmail} from "@/app/actions/email";
import {useForm} from "react-hook-form";
import {z} from "zod";
import {zodResolver} from "@hookform/resolvers/zod";
import {emailSchema} from "@/types/general";

export const Newsletter = () => {
	const {
		register,
		handleSubmit,
		setValue,
		formState: {isSubmitting, errors},
	} = useForm<z.infer<typeof emailSchema>>({
		resolver: zodResolver(emailSchema),
		defaultValues: {
			email: "",
		},
	});

	const onSubmit = handleSubmit(async (formData) => {
		const res = await sendEmail({email: formData.email});

		if (res?.data?.error) {
			toast({title: res?.data?.error, variant: "destructive"});
			return;
		}

		toast({
			title: "Succesfully subscribed!",
			variant: "success",
		});

		setValue("email", "");
	});

	return (
		<section id="newsletter">
			<div className="container py-24 sm:py-24">
				<h3 className="text-center text-4xl md:text-5xl font-bold">
					<span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
						Join Our Newsletter
					</span>
				</h3>
				<p className="text-xl text-muted-foreground text-center mt-4 mb-8">
					Subscribe to get latest updates
				</p>

				<form
					className="flex flex-col w-full md:flex-row md:w-6/12 lg:w-4/12 mx-auto gap-4 md:gap-2"
					onSubmit={onSubmit}
				>
					<Input
						{...register("email", {required: true})}
						placeholder="youremail@gmail.com"
						className={`bg-muted/50 dark:bg-muted/80 ${
							errors.email && "border-red-500 border-2"
						}`}
						aria-label="email"
					/>
					<Button loading={isSubmitting} type="submit">
						Subscribe
					</Button>
				</form>
			</div>

			<hr className="w-11/12 mx-auto" />
		</section>
	);
};
