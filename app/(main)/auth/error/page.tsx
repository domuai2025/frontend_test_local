import React from "react";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import {Button} from "@/components/ui/button";

const AuthErrorPage: React.FC = () => {
	return (
		<div className="flex justify-center items-center">
			<Card className="w-[350px]">
				<CardHeader>
					<CardTitle>Auth Error</CardTitle>
				</CardHeader>
				<CardContent>
					Failed to authenticate with the server.
					<br />
					<small>If you believe this is an error, please contact support.</small>
				</CardContent>
				<CardFooter>
					<Link className="link" href="/">
						<Button> Go home</Button>
					</Link>
				</CardFooter>
			</Card>
		</div>
	);
};

export default AuthErrorPage;
