"use client";

import {zodResolver} from "@hookform/resolvers/zod";
import {CalendarIcon, CaretSortIcon, CheckIcon} from "@radix-ui/react-icons";
import {format} from "date-fns";
import {useForm} from "react-hook-form";
import {z} from "zod";

import {cn} from "@/lib/utils";
import {Button} from "@/components/ui/button";
import {Calendar, CalendarComponent} from "@/components/ui/calendar";
import {
	Command,
	CommandEmpty,
	CommandGroup,
	CommandInput,
	CommandItem,
	CommandList,
} from "@/components/ui/command";
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
import {Popover, PopoverContent, PopoverTrigger} from "@/components/ui/popover";
import {toast} from "@/components/ui/use-toast";
import {createClient} from "@/lib/supabase/client";
import {useUser} from "@/contexts/user";

const languages = [
	{label: "English", value: "en"},
	{label: "French", value: "fr"},
	{label: "German", value: "de"},
	{label: "Spanish", value: "es"},
	{label: "Portuguese", value: "pt"},
	{label: "Russian", value: "ru"},
	{label: "Japanese", value: "ja"},
	{label: "Korean", value: "ko"},
	{label: "Chinese", value: "zh"},
] as const;

const accountFormSchema = z.object({
	full_name: z
		.string()
		.min(2, {
			message: "Name must be at least 2 characters.",
		})
		.max(30, {
			message: "Name must not be longer than 30 characters.",
		}),
	dob: z.date({
		required_error: "A date of birth is required.",
	}),
	language: z.string({
		required_error: "Please select a language.",
	}),
});

type AccountFormValues = z.infer<typeof accountFormSchema>;

export function AccountForm() {
	const {user, userDetails, setUserDetails} = useUser();
	const supabase = createClient();

	const form = useForm<AccountFormValues>({
		resolver: zodResolver(accountFormSchema),
		defaultValues: {
			full_name: userDetails?.full_name || "",
			dob: userDetails?.dob ? new Date(userDetails?.dob) : undefined,
			language: userDetails?.language || "",
		},
	});

	async function onSubmit(accountData: AccountFormValues) {
		try {
			const {error} = await supabase
				.from("users")
				.update({
					...accountData,
					dob: format(accountData.dob, "yyyy-MM-dd"),
				})
				.eq("id", user?.id || "");

			if (error) {
				throw new Error(error.message);
			}

			// Update the user details in the context
			setUserDetails({
				...accountData,
				dob: format(accountData.dob, "yyyy-MM-dd"),
			});

			toast({
				title: "Account updated successfully",
				variant: "success",
				description: "Your account information has been updated.",
			});
		} catch (error) {
			console.log(error);
			toast({
				title: "Error updating account",
				description: "There was a problem updating your account.",
				variant: "destructive",
			});
		}
	}

	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
				<FormField
					control={form.control}
					name="full_name"
					render={({field}) => (
						<FormItem>
							<FormLabel>Name</FormLabel>
							<FormControl>
								<Input placeholder="Your name" {...field} />
							</FormControl>
							<FormDescription>
								This is the name that will be displayed on your profile and in emails.
							</FormDescription>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="dob"
					render={({field}) => (
						<FormItem className="flex flex-col">
							<FormLabel>Date of birth</FormLabel>
							<Popover>
								<PopoverTrigger asChild>
									<FormControl>
										<Button
											variant={"outline"}
											className={cn(
												"w-[240px] pl-3 text-left font-normal",
												!field.value && "text-muted-foreground",
											)}
										>
											{field.value ? (
												format(field.value, "PPP")
											) : (
												<span>Pick a date</span>
											)}
											<CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
										</Button>
									</FormControl>
								</PopoverTrigger>
								<PopoverContent className="w-auto p-0" align="start">
									<CalendarComponent
										mode="single"
										selected={field.value}
										onSelect={field.onChange}
										disabled={(date) =>
											date > new Date() || date < new Date("1900-01-01")
										}
										initialFocus
									/>
								</PopoverContent>
							</Popover>
							<FormDescription>
								Your date of birth is used to calculate your age.
							</FormDescription>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="language"
					render={({field}) => (
						<FormItem className="flex flex-col">
							<FormLabel>Language</FormLabel>
							<Popover>
								<PopoverTrigger asChild>
									<FormControl>
										<Button
											variant="outline"
											role="combobox"
											className={cn(
												"w-[200px] justify-between",
												!field.value && "text-muted-foreground",
											)}
										>
											{field.value
												? languages.find((language) => language.value === field.value)
														?.label
												: "Select language"}
											<CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
										</Button>
									</FormControl>
								</PopoverTrigger>
								<PopoverContent className="w-[200px] p-0">
									<Command>
										<CommandInput placeholder="Search language..." />
										<CommandEmpty>No language found.</CommandEmpty>
										<CommandList>
											<CommandGroup>
												{languages.map((language) => (
													<CommandItem
														value={language.label}
														key={language.value}
														onSelect={() => {
															form.setValue("language", language.value);
														}}
													>
														<CheckIcon
															className={cn(
																"mr-2 h-4 w-4",
																language.value === field.value
																	? "opacity-100"
																	: "opacity-0",
															)}
														/>
														{language.label}
													</CommandItem>
												))}
											</CommandGroup>
										</CommandList>
									</Command>
								</PopoverContent>
							</Popover>
							<FormDescription>
								This is the language that will be used in the dashboard.
							</FormDescription>
							<FormMessage />
						</FormItem>
					)}
				/>
				<Button type="submit">Update account</Button>
			</form>
		</Form>
	);
}
