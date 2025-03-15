import {getURL} from "@/lib/utils";
import {
	Body,
	Button,
	Container,
	Head,
	Heading,
	Html,
	Preview,
	Section,
	Text,
} from "@react-email/components";
import {Tailwind} from "@react-email/tailwind";
import * as React from "react";

export const WelcomeEmail: React.FC = () => {
	return (
		<Html>
			<Head />
			<Tailwind>
				<Preview>Welcome! Let's get started.</Preview>
				<Body className="bg-gray-100 font-sans text-gray-800 leading-relaxed">
					<Container className="max-w-2xl mx-auto p-8">
						<Section className="bg-white rounded-lg shadow-lg p-8">
							<Heading className="text-3xl font-bold text-gray-800 text-center mb-4">
								Welcome! 👋🏻
							</Heading>
							<Text className="text-center text-lg mb-6">
								Thank you for purchasing our product.
							</Text>
							<Heading
								as="h2"
								className="text-2xl font-semibold text-gray-800 text-center mb-6"
							>
								Click the button below to get started:
							</Heading>
							<Section className="text-center">
								<Button
									className="bg-black text-white font-bold py-3 px-6 rounded-lg text-lg hover:bg-gray-800 transition duration-300"
									href={getURL("/account")}
								>
									Go to dashboard
								</Button>
							</Section>
						</Section>
					</Container>
				</Body>
			</Tailwind>
		</Html>
	);
};
