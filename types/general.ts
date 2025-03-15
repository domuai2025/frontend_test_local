import {z} from "zod";
import {Tables} from "./db";

export const emailSchema = z.object({
	email: z.string().email(),
});

export const formSchema = z.object({
	text: z
		.string()
		.min(2, {
			message: "Input must be at least 2 characters.",
		})
		.max(5000, {
			message: "Input must not be longer than 5000 characters.",
		}),
	voiceId: z.string(),
});

export type formSchemaValues = z.infer<typeof formSchema>;

export const accountSchema = z.object({
	name: z.string().min(2).max(30),
	dob: z.date(),
	language: z.string(),
});

export type accountSchemaValues = z.infer<typeof accountSchema>;

export interface TestimonialProps {
	image?: string;
	video?: string;
	poster?: string;
	name: string;
	userName?: string;
	comment: string;
	built?: string;
}

export type PricingCardProps = {
	title: Tables<"purchases">["type"];
	monthlyPrice?: number;
	yearlyPrice?: number;
	previousPrice?: number;
	singlePrice?: number;
	description?: string;
	features: string[];
	type: "recurring" | "one_time";
	trialPeriodDays?: number;
	extraFeatures: string[];
	missingFeatures: string[];
	actionLabel: string;
	popular?: boolean;
	exclusive?: boolean;
	stripePriceId: string;
};
