import {TestimonialProps, PricingCardProps} from "./types/general";

export const siteName = "AI Demo";
export const adminEmail = "admin@website.com";
export const currency = "USD";
export const redirectAfterLogin = "/account/text-to-image";

export const defaultTheme: (typeof themesList)[number] = "dark-yellow";
export const themesList = [
	"light",
	"dark-classic",
	"dark-ocean",
	"green",
	"dark-green",
	"rose",
	"dark-rose",
	"yellow",
	"dark-yellow",
	"violet",
	"dark-violet",
	// If you want more themes https://ui.shadcn.com/themes click "Customise" to select color and click copy
	// Paste into ./app/globals.css
];

// More backgrounds https://bg.ibelick.com/
// Copy url and paste into /components/background.tsx
export const defaultBackground: "v1" | "v2" | "v3" = "v1";

// Image displayed when sharing on social media
export const defaultImage = "https://appliful.com/media/main.png";
// Add your twitter username here
export const twitterUsername = "rocky_codes";

export const positiveReviewsWidget = {
	count: 0,
	avatarUrls: [
		"https://avatars.githubusercontent.com/u/1",
		"https://avatars.githubusercontent.com/u/2",
		"https://avatars.githubusercontent.com/u/3",
		"https://avatars.githubusercontent.com/u/4",
		"https://avatars.githubusercontent.com/u/5",
	],
};

export const howItWorks: {
	name: string;
	description: string;
	icon: string | React.ComponentType<any>;
}[] = [
	{
		name: "Problem",
		description: `What is the problem you are trying to solve?`,
		icon: "💡",
	},
	{
		name: "Solution",
		description: `What is the solution you are proposing?`,
		icon: "⚙️",
	},
	{
		name: "Success",
		description: `How are you going to deploy your solution?`,
		icon: "✅",
	},
];

export const services: {
	title: string;
	description: string;
	listOfFeatures: string[];
	smallText: string;
	ref?: React.RefObject<HTMLDivElement>;
}[] = [
	{
		title: "🔐 Sefety",
		description: "AI is safe, I suppose...",
		listOfFeatures: ["Many more..."],
		smallText: "Automated",
	},
	{
		title: "😊 Wow",
		description: "Service description",
		listOfFeatures: ["Feature 1", "Feature 2", "Feature 3"],
		smallText: "Done for you",
	},
	{
		title: "🚀 Features you can't resist",
		description: "Features description, what they do and why they are cool",
		smallText: "Wohoo",
		listOfFeatures: ["Add", "Them", "Here"],
	},
];

export const features: string[] = [
	"Feature 1",
	"Feature 2",
	"Feature 3",
	"Feature 4",
	"Feature 5",
];

export const plans: PricingCardProps[] = [
	{
		title: "STARTER",
		type: "recurring",
		trialPeriodDays: 7,
		monthlyPrice: 199,
		previousPrice: 399,
		singlePrice: 199,
		features: [],
		extraFeatures: features,
		missingFeatures: ["Community access"],
		actionLabel: "Get access",
		popular: false,
		exclusive: false,
		stripePriceId:
			process.env.NODE_ENV === "development"
				? "price_1PrseuHtLwZ7pCzpbeQxXK7p"
				: "price_1PrseuHtLwZ7pCzpbeQxXK7p",
	},
	{
		title: "PRO",
		type: "one_time",
		previousPrice: 449,
		singlePrice: 249,
		features: [],
		extraFeatures: [...features, "Community access"],
		missingFeatures: [],
		actionLabel: "Get access",
		popular: true,
		exclusive: true,
		stripePriceId:
			process.env.NODE_ENV === "development"
				? "price_1PYc5AHtLwZ7pCzpwNjA6xM7"
				: "price_1PYc5AHtLwZ7pCzpwNjA6xM7",
	},
];

export const faqs: {
	question: string;
	answer: string;
	link?: string;
}[] = [
	{
		question: "What's FAQ?",
		answer: `FAQ stands for Frequently Asked Questions. It's a list of questions and answers that are commonly asked about a particular topic.`,
		link: "https://google.com",
	},
];

// Text and video reviews supported
export const testimonials: TestimonialProps[] = [
	{
		image: "https://avatars.githubusercontent.com/u/1",
		name: "John",
		comment: "I love this product",
	},
	// {
	// 	video: "https://vercel-storage.com/media/example.mp4",
	// 	poster: "https://vercel-storage.com/media/example.jpg",
	// 	name: "John",
	// 	comment: "I love this product",
	// },
	{
		image: "https://avatars.githubusercontent.com/u/2",
		name: "Michael",
		comment: "I love this product",
	},
	{
		image: "https://avatars.githubusercontent.com/u/3",
		name: "Steve",
		comment: "I love this product",
	},
	{
		image: "https://avatars.githubusercontent.com/u/4",
		name: "Mark",
		comment: "I love this product",
	},
];

export const dashboardSidebarNavItems = [
	{
		title: "AI Tools",
		links: [
			{
				title: "🎨 Image Generator",
				href: "/account/text-to-image",
			},
			// {
			// 	title: "🎥 AI Video Generator (Coming Soon)",
			// 	href: "#",
			// },
			{
				title: "📷 Image Text Extractor",
				href: "/account/image-text-extractor",
			},
			{
				title: "💬 AI Chat Assistant",
				href: "/account/ai-chat",
			},
			{
				title: "🗣️ Voice Generator",
				href: "/account/text-to-speech",
			},
			// {
			// 	title: "📝 White Board (Coming Soon)",
			// 	href: "#",
			// },
		],
	},
	{
		title: "Settings",
		links: [
			{
				title: "👤 Account",
				href: "/account",
			},
			{
				title: "💰 Billing",
				href: "/account/billing",
			},
		],
	},
];
